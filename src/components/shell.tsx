import Navbar from './navbar';
import type { ReactNode } from 'react';

export default function Shell({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative min-h-screen w-full transition-colors duration-500"
      style={{ backgroundColor: 'var(--bg)', color: 'var(--fg)' }}
    >
      <Navbar />
      <main
        id="top"
        className="relative z-10 mx-auto w-full max-w-[800px] border-x"
        style={{ borderColor: 'var(--line)', backgroundColor: 'var(--bg)' }}
      >
        {children}
        <footer
          className="flex flex-col gap-6 overflow-hidden px-5 py-8"
          style={{ borderTop: '1px solid var(--line)' }}
        >
          <div className="mark" aria-hidden="true">Raj Nandan</div>
          <div className="flex flex-wrap items-center justify-between gap-2.5 text-xs" style={{ color: 'var(--muted)' }}>
            <span>Last updated · October 30, 2026</span>
            <span style={{ fontFamily: "'Geist Mono', monospace" }}>© 2026 Raj Nandan</span>
          </div>
        </footer>
      </main>
    </div>
  );
}