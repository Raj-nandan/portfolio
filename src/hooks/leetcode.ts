interface LeetCodeStats {
  rank: string;
  solved: string;
  contests: string;
  rating: string;
}

export async function fetchLeetCodeStats(): Promise<LeetCodeStats> {
  try {
    const username = "nandanraj098";
    const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch LeetCode data');
    }

    const data = await response.json();
    
    return {
      solved: data.totalSolved?.toString() || 'N/A',
      rank: data.ranking?.toString() || 'N/A',
      rating: '1469',
      contests: '7+'
    };
  } catch (error) {
    console.error('LeetCode API error:', error);
    return {
      solved: 'N/A',
      rank: 'N/A',
      rating: '1731',
      contests: '15'
    };
  }
}