import { useEffect, useState } from 'react';
import { Home, FolderKanban, Briefcase, Layers, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from './theme-provider';
import { usePath, navigate } from '@/lib/router';

const ITEMS = [
  { id: 'home', label: 'Home', icon: Home, kind: 'scroll' as const, target: 'hero' },
  { id: 'projects', label: 'Projects', icon: FolderKanban, kind: 'route' as const, target: '/projects' },
  { id: 'experience', label: 'Experience', icon: Briefcase, kind: 'scroll' as const, target: 'experience' },
  { id: 'stack', label: 'Stack', icon: Layers, kind: 'scroll' as const, target: 'stack' },
  { id: 'contact', label: 'Contact', icon: Mail, kind: 'scroll' as const, target: 'contact' },
];

export default function BottomDock() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  const path = usePath();
  const [active, setActive] = useState('home');
  const [visible, setVisible] = useState(true);

  // Scroll-spy on home
  useEffect(() => {
    if (path !== '/') return;
    const ids = ['hero', 'projects', 'experience', 'stack', 'contact'];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [path]);

  // Active route on /projects
  useEffect(() => {
    if (path === '/projects') setActive('projects');
  }, [path]);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y > last + 8) setVisible(false);
        else if (y < last - 8) setVisible(true);
        if (y < 40) setVisible(true);
        last = y;
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleItem = (item: (typeof ITEMS)[number]) => {
    if (item.kind === 'route') {
      navigate(item.target);
      return;
    }
    if (path !== '/') {
      navigate('/');
      setTimeout(() => scrollTo(item.target), 120);
      return;
    }
    scrollTo(item.target);
  };

  return (
    <nav
      aria-label="Primary"
      className={`md:hidden fixed left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 rounded-full border px-2 py-1.5 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0 pointer-events-none'
      }`}
      style={{
        bottom: 'calc(16px + env(safe-area-inset-bottom))',
        backgroundColor: isDark ? 'rgba(10, 10, 10, 0.65)' : 'rgba(255, 255, 255, 0.65)',
        borderColor: 'var(--line)',
        transition: 'background-color 250ms ease, border-color 250ms ease',
        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      }}
    >
      {ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            type="button"
            aria-label={item.label}
            aria-current={isActive ? 'page' : undefined}
            title={item.label}
            onClick={() => handleItem(item)}
            className="relative flex h-11 w-11 items-center justify-center rounded-full transition-colors"
            style={{ color: isActive ? 'var(--bg)' : 'var(--fg)' }}
          >
            {isActive && (
              <span
                className="absolute inset-1 rounded-full"
                style={{ backgroundColor: 'var(--fg)' }}
                aria-hidden="true"
              />
            )}
            <Icon className="relative h-5 w-5" strokeWidth={1.75} />
            <span className="sr-only">{item.label}</span>
          </button>
        );
      })}
      <button
        type="button"
        aria-label="Toggle theme"
        title="Toggle theme"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className="flex h-11 w-11 items-center justify-center rounded-full transition-colors"
        style={{ color: 'var(--fg)' }}
      >
        {isDark ? <Sun className="h-5 w-5" strokeWidth={1.75} /> : <Moon className="h-5 w-5" strokeWidth={1.75} />}
      </button>
    </nav>
  );
}