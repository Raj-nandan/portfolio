import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero({ setCurrentSection }: { setCurrentSection: (section: string) => void }) {
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/Raj-nandan' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/raj-nandan/' },
    { name: 'Email', icon: Mail, url: 'mailto:nandanr532@gmail.com' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <motion.section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center overflow-hidden"
      onViewportEnter={() => setCurrentSection('hero')}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20 dark:opacity-15"
          style={{ background: 'hsl(24, 90%, 60%)' }}
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full blur-3xl opacity-15 dark:opacity-10"
          style={{ background: 'hsl(220, 70%, 60%)' }}
          animate={{ scale: [1, 1.15, 1], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-4 space-y-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur-sm text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name & headline */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none">
            <span className="block text-foreground">Raj</span>
            <span className="block gradient-text">Nandan</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-md mx-auto leading-relaxed">
            2025 B.tech Graduate in Information Technology — building{' '}
            <em>impactful, user-centered</em> full-stack solutions.
          </p>
        </motion.div>

        {/* Social links */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/60 backdrop-blur-sm text-sm text-muted-foreground hover:text-foreground hover:border-accent/50 hover:bg-accent/5 transition-all duration-200"
            >
              <link.icon className="h-4 w-4 group-hover:text-accent transition-colors" />
              <span className="hidden sm:inline">{link.name}</span>
            </a>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center">
          <Button asChild size="lg" className="group rounded-full px-8 bg-foreground text-background hover:bg-foreground/90 dark:bg-foreground dark:text-background">
            <a href="#projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-border hover:border-accent/50 hover:bg-accent/5 hover:text-foreground">
            <a href="#" download>
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-2 pt-4"
        >
          <span className="section-label">Scroll to explore</span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-border to-transparent"
            animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}