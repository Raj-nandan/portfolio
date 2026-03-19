import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './theme-provider';
import Navbar from './navbar';
import Hero from './sections/hero';
import About from './sections/about';
import Projects from './sections/projects';
import Contact from './sections/contact';
import { cn } from '@/lib/utils';

export default function Layout() {
  const { theme } = useTheme();
  const [currentSection, setCurrentSection] = useState('hero');

  return (
    <div className={cn(
      'relative min-h-screen w-full transition-colors duration-500',
      theme === 'dark'
        ? 'bg-[hsl(222,25%,8%)]'
        : 'bg-[hsl(36,20%,97%)]'
    )}>
      {/* Subtle grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <Navbar currentSection={currentSection} />

      <AnimatePresence mode="wait">
        <motion.main
          className="relative z-10 w-full px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Hero setCurrentSection={setCurrentSection} />

          {/* Section divider */}
          <div className="max-w-5xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <About />

          <div className="max-w-5xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <Projects />

          <div className="max-w-5xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <Contact />

          {/* Footer */}
          <footer className="max-w-5xl mx-auto py-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Raj Nandan. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Built with React & Tailwind CSS
            </p>
          </footer>
        </motion.main>
      </AnimatePresence>
    </div>
  );
}