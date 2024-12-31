import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // LeetCode GraphQL API endpoint
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query getUserProfile($username: String!) {
            matchedUser(username: $username) {
              username
              submitStats: submitStatsGlobal {
                acSubmissionNum {
                  difficulty
                  count
                  submissions
                }
              }
              problemsSolvedBeatsStats {
                difficulty
                percentage
              }
            }
          }
        `,
        variables: {
          username: "nandanraj098"  // Your LeetCode username
        }
      })
    });

    const data = await response.json();

    // Transform the data into a simpler format
    const leetcodeStats = {
      solved: data.data.matchedUser.submitStats.acSubmissionNum[0].count,
      rank: data.data.matchedUser.problemsSolvedBeatsStats[0].percentage + '%',
      rating: 'N/A', // LeetCode API doesn't provide rating directly
      contests: 'N/A'  // You'll need a different query for contest info
    };

    return res.status(200).json(leetcodeStats);
  } catch (error) {
    console.error('LeetCode API error:', error);
    return res.status(500).json({ message: 'Failed to fetch LeetCode data' });
  }
} 