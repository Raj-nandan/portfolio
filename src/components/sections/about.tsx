import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Gamepad, Coffee, Brain, Trophy, BookOpen, Cpu, Rocket } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const skills = [
  { name: 'Frontend', icon: Code2, description: 'React, Vue, TypeScript, Next.js' },
  { name: 'Backend', icon: Brain, description: 'Node.js, Python, Java, SQL' },
  { name: 'Problem Solving', icon: Coffee, description: 'C++, Java'},
  { name: 'CS', icon: Cpu, description: 'System Design, Networking, OOPS, DBMS' },
];

const codingProfiles = [
  {
    platform: 'LeetCode',
    icon: Trophy,
    stats: {
      rank: '241,986',
      solved: '350+',
      contests: '7+',
      rating: '1464',
    },
    url: 'https://leetcode.com/u/nandanraj098/',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    platform: 'GeeksforGeeks',
    icon: BookOpen,
    stats: {
      rank: 'Institute Rank 15',
      solved: '450+',
      score: '1000',
      rating: '1731',
    },
    url: 'https://www.geeksforgeeks.org/user/nandanr532/',
    color: 'from-green-500 to-emerald-500',
  },
  // {
  //   platform: 'CodeForces',
  //   icon: Rocket,
  //   stats: {
  //     rank: 'Expert',
  //     rating: '1750',
  //     contests: '40+',
  //     solved: '500+',
  //   },
  //   url: 'https://codeforces.com/profile/yourusername',
  //   color: 'from-blue-500 to-violet-500',
  // },
];

const experiences = [
  {
    title: '2nd position in Ideathon',
    company: 'NEO-Virtual Assistant',
    period: '2022',
    description: 'An AI virtual assistant for laptop and PCs to perform various task using voice commands.',
    skills: ['Python', 'Tk-Inter', 'Open-AI'],
  },
  {
    title: '3rd Position in Hackathon',
    company: 'MERN project',
    period: '2023',
    description: 'Developed and maintained multiple client projects using modern web technologies.',
    skills: ['React', 'Node.js', 'MongoDB', 'Vercel'],
  },
];

const technicalSkills = [
  { name: 'C++', progress: 95 },
  { name: 'Node.js', progress: 70 },
  { name: 'React/Next.js', progress: 85 },
  { name: 'Python', progress: 50 },
  { name: 'Git/GitHub', progress: 95 },
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-16"
      >
        {/* About Me Section */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
          I am a final-year B.Tech student in Information Technology with a passion for full-stack development and data-driven solutions. My experience includes building dynamic applications like Drishti, an IoT and ML-based assistive technology for the visually impaired, and SkillSaga, an e-learning platform. Skilled in React, Node.js, C++, Python, I focus on creating impactful, user-centered solutions. I’m eager to apply my technical knowledge to innovative projects and continuously grow in a collaborative environment.


          </p>
        </div>

        {/* Technical Skills */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-center">Technical Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.progress}%</span>
                </div>
                <Progress value={skill.progress} className="h-2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Coding Profiles */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-center">Coding Profiles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {codingProfiles.map((profile, index) => (
              <motion.div
                key={profile.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className={`bg-gradient-to-r ${profile.color}`}>
                      <CardTitle className="flex items-center gap-2 text-white">
                        <profile.icon className="h-5 w-5" />
                        {profile.platform}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="mt-4">
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(profile.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <p className="text-sm text-muted-foreground capitalize">{key}</p>
                            <p className="font-semibold">{value}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-center">Achievements</h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{experience.title}</CardTitle>
                        <CardDescription>{experience.company}</CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground">{experience.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-secondary rounded-md text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <skill.icon className="h-5 w-5" />
                    {skill.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{skill.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}