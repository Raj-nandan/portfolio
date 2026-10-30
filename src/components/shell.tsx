import Navbar from './navbar';
import BottomDock from './bottom-dock';
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
        className="relative z-10 mx-auto w-full max-w-[800px] overflow-x-hidden border-x pb-24 md:pb-0"
        style={{ borderColor: 'var(--line)', backgroundColor: 'var(--bg)' }}
      >
        {children}
        <footer
          className="flex flex-col gap-6 overflow-hidden px-5 py-8"
          style={{ borderTop: '1px solid var(--line)' }}
        >
          <div className="mark text-center" aria-hidden="true">Raj Nandan</div>
          <div className="flex flex-wrap items-center justify-between gap-2.5 text-xs" style={{ color: 'var(--muted)' }}>
            <span>Last updated · October 30, 2026</span>
            <span style={{ fontFamily: "var(--font-sans)" }}>© 2026 Raj Nandan</span>
          </div>
        </footer>
      </main>
      <BottomDock />
    </div>
  );
}