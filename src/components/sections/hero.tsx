import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Hero({ setCurrentSection }: { setCurrentSection: (section: string) => void }) {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Raj-nandan',
      description: 'Check out my open source contributions and projects'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/raj-nandan/',
      description: 'Connect with me professionally'
    },
    
    {
      name: 'Email',
      icon: Mail,
      url: 'nandanr532@gmail.com',
      description: 'Reach out to me directly'
    }
  ];

  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center text-center"
      onViewportEnter={() => setCurrentSection('hero')}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="relative w-40 h-40 mx-auto"
        >
          <img
            src="src\asset\pic.jpg"
            alt="Profile"
            className="rounded-full object-cover w-full h-full border-4 border-primary/20"
          />
          <motion.div
            className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-purple-900 to-blue-900 opacity-50 blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.5 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Raj Nandan
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            B.tech Final Year Student
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Keep it Simple...
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          {socialLinks.map((link, index) => (
            <HoverCard key={link.name}>
              <HoverCardTrigger asChild>
                <Button variant="outline" size="icon" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">{link.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {link.description}
                    </p>
                  </div>
                  <link.icon className="h-5 w-5" />
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <Button asChild className="group">
            <a href="#projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="src\asset\Raj_Nandan_resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}