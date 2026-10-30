import { Moon, Sun } from 'lucide-react';
import { useTheme } from './theme-provider';
import { navigate } from '@/lib/router';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <header
      className="sticky top-0 z-30 w-full"
      style={{ backgroundColor: 'var(--bg)', borderBottom: '1px solid var(--line)' }}
    >
      <div
        className="mx-auto flex max-w-[800px] flex-wrap items-center justify-between gap-3 border-x px-5 py-2.5"
        style={{ borderColor: 'var(--line)' }}
      >
        <a
          href="/"
          aria-label="Home"
          onClick={(e) => { e.preventDefault(); navigate('/'); }}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium"
          style={{ backgroundColor: 'var(--fg)', color: 'var(--bg)', fontFamily: "'Geist Mono', monospace" }}
        >
          RN
        </a>

        <nav className="flex flex-wrap items-center gap-5 text-sm font-medium">
          <a className="navlink" href="/projects" onClick={(e) => { e.preventDefault(); navigate('/projects'); }}>Projects</a>
          <a className="navlink" href="/#experience">Experience</a>
          <a className="navlink" href="/#stack">Stack</a>

          <details className="relative">
            <summary className="flex min-h-[44px] cursor-pointer list-none items-center gap-1 text-sm font-medium">
              More
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <div
              className="absolute right-0 top-full z-10 mt-1 flex w-48 flex-col gap-1 rounded-xl p-2 shadow-lg"
              style={{ backgroundColor: 'var(--bg)', border: '1px solid var(--line)' }}
            >
              <a className="row" href="#contact" style={{ minHeight: '44px', borderRadius: '8px', padding: '8px 12px', fontSize: '14px', fontWeight: 500 }}>
                <span>Contact</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </a>
              <a className="row" href="./Raj_Nandan_Resume.pdf" target="_blank" rel="noopener noreferrer" style={{ minHeight: '44px', borderRadius: '8px', padding: '8px 12px', fontSize: '14px', fontWeight: 500 }}>
                <span>Resume</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7M8 7h9v9" />
                </svg>
              </a>
            </div>
          </details>

          <button
            type="button"
            aria-label="Toggle light or dark mode"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="flex h-11 w-11 items-center justify-center rounded-[10px]"
            style={{ border: '1px solid var(--line)', backgroundColor: 'var(--bg)', color: 'var(--fg)', cursor: 'pointer' }}
          >
            {isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
          </button>
        </nav>
      </div>
      <div className="progress" />
    </header>
  );
}