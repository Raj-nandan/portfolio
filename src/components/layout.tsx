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
      'min-h-screen w-full transition-all duration-300',
      theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    )}>
      <Navbar currentSection={currentSection} />
      
      <AnimatePresence mode="wait">
        <motion.main
          className="w-full px-4 sm:px-6 lg:px-8 py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Hero setCurrentSection={setCurrentSection} />
          <About />
          <Projects />
          <Contact />
        </motion.main>
      </AnimatePresence>
    </div>
  );
}