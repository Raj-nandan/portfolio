import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './theme-provider';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '#hero', id: 'hero' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar({ currentSection }: { currentSection: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between max-w-5xl mx-auto">
          
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center group-hover:bg-accent transition-colors duration-200">
              <span className="text-background font-bold text-sm font-['Syne']">R</span>
            </div>
            <span className="font-bold text-base tracking-tight font-['Syne'] hidden sm:block">
              Raj Nandan
            </span>
          </a>

          {/* Nav links */}
          <nav className="hidden sm:flex items-center gap-1 bg-card/60 backdrop-blur-md border border-border/60 rounded-full px-2 py-1.5">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  'relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200',
                  currentSection === item.id
                    ? 'bg-foreground text-background'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="rounded-full w-9 h-9 border border-border/60 bg-card/60 backdrop-blur-md hover:bg-muted/60 hover:border-accent/40 transition-all"
          >
            {theme === 'light' ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}