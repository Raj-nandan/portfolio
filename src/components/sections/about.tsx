import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Coffee, Brain, Cpu, Trophy, BookOpen } from 'lucide-react';
import { useState, useEffect } from 'react';
import { fetchLeetCodeStats } from '@/hooks/leetcode';

interface LeetCodeData {
  rank: string;
  solved: string;
  contests: string;
  rating: string;
}

const skills = [
  { name: 'Frontend', icon: Code2, description: 'React, Vue, TypeScript, Next.js', color: 'text-blue-500' },
  { name: 'Backend', icon: Brain, description: 'Node.js, Python, Java, SQL', color: 'text-purple-500' },
  { name: 'Problem Solving', icon: Coffee, description: 'C++, Java', color: 'text-orange-500' },
  { name: 'CS Fundamentals', icon: Cpu, description: 'System Design, Networking, OOPs, DBMS', color: 'text-emerald-500' },
];

const technicalSkills = [
  { name: 'C++', progress: 95 },
  { name: 'React / Next.js', progress: 85 },
  { name: 'Node.js', progress: 70 },
  { name: 'Git / GitHub', progress: 95 },
  { name: 'Python', progress: 50 },
];

const experiences = [
  {
    title: '2nd Position — Ideathon',
    company: 'NEO – Virtual Assistant',
    period: '2022',
    description: 'An AI virtual assistant for laptops and PCs to perform tasks using voice commands.',
    skills: ['Python', 'Tk-Inter', 'Open-AI'],
  },
  {
    title: '3rd Position — Hackathon',
    company: 'MERN Project',
    period: '2023',
    description: 'Developed and maintained multiple client projects using modern web technologies.',
    skills: ['React', 'Node.js', 'MongoDB', 'Vercel'],
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  const [leetcodeData, setLeetcodeData] = useState<LeetCodeData | null>(null);

  useEffect(() => {
    fetchLeetCodeStats()
      .then(setLeetcodeData)
      .catch(() =>
        setLeetcodeData({ rank: 'N/A', solved: 'N/A', rating: 'N/A', contests: 'N/A' })
      );
  }, []);

  const codingProfiles = [
    {
      platform: 'LeetCode',
      icon: Trophy,
      stats: leetcodeData || { rank: '—', solved: '—', contests: '—', rating: '—' },
      url: 'https://leetcode.com/u/nandanraj098/',
      accent: 'from-orange-500 to-amber-500',
    },
    {
      platform: 'GeeksforGeeks',
      icon: BookOpen,
      stats: { rank: 'Institute 15', solved: '450+', score: '1000', rating: '1731' },
      url: 'https://www.geeksforgeeks.org/user/nandanr532/',
      accent: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section id="about" className="py-24 max-w-5xl mx-auto">
      {/* Intro */}
      <motion.div
        className="space-y-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {/* Header */}
        <motion.div variants={sectionVariants} className="space-y-4">
          <span className="section-label">Who I am</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">About Me</h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Final-year B.Tech student in Information Technology with a passion for full-stack
            development and data-driven solutions. I build dynamic applications like{' '}
            <span className="text-foreground font-medium">Drishti</span> (IoT + ML for the visually
            impaired) and <span className="text-foreground font-medium">SkillSaga</span> (e-learning
            platform). Eager to apply technical knowledge to innovative projects.
          </p>
        </motion.div>

        {/* Technical skills */}
        <motion.div variants={sectionVariants} className="space-y-6">
          <span className="section-label">Expertise</span>
          <h3 className="text-2xl font-bold mt-2">Technical Skills</h3>
          <div className="grid gap-4 max-w-2xl">
            {technicalSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground tabular-nums">{skill.progress}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-foreground"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coding profiles */}
        <motion.div variants={sectionVariants} className="space-y-6">
          <span className="section-label">Coding</span>
          <h3 className="text-2xl font-bold mt-2">Profiles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {codingProfiles.map((profile) => (
              <a
                key={profile.platform}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="overflow-hidden card-glow border-border/60 bg-card/60 backdrop-blur-sm">
                  <CardHeader className={`bg-gradient-to-r ${profile.accent} p-4`}>
                    <CardTitle className="flex items-center gap-2 text-white text-base">
                      <profile.icon className="h-5 w-5" />
                      {profile.platform}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(profile.stats).map(([key, value]) => (
                        <div key={key} className="text-center p-2 rounded-lg bg-muted/40">
                          <p className="text-xs text-muted-foreground capitalize mb-1">{key}</p>
                          <p className="font-bold text-sm">{value}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div variants={sectionVariants} className="space-y-6">
          <span className="section-label">Track record</span>
          <h3 className="text-2xl font-bold mt-2">Achievements</h3>
          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="card-glow border-border/60 bg-card/60 backdrop-blur-sm">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h4 className="font-semibold text-sm">{exp.title}</h4>
                        <p className="text-muted-foreground text-xs mt-0.5">{exp.company}</p>
                      </div>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core skills grid */}
        <motion.div variants={sectionVariants} className="space-y-6">
          <span className="section-label">Domains</span>
          <h3 className="text-2xl font-bold mt-2">Core Areas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="card-glow border-border/60 bg-card/60 backdrop-blur-sm h-full">
                  <CardContent className="p-5 space-y-3">
                    <div className={`w-9 h-9 rounded-lg bg-muted flex items-center justify-center ${skill.color}`}>
                      <skill.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{skill.name}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{skill.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}