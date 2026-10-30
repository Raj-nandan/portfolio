import { useEffect, useState } from 'react';

const USERNAME = 'Raj-nandan';
const SHADES = ['var(--c0)', 'var(--c1)', 'var(--c2)', 'var(--c3)', 'var(--c4)'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

interface Day { date: string; count: number; level: number; }

export default function Contributions() {
  const [levels, setLevels] = useState<number[][] | null>(null); // 53 cols x 7 rows
  const [counts, setCounts] = useState<number[][] | null>(null);
  const [months, setMonths] = useState<{ name: string; col: number }[]>([]);
  const [total, setTotal] = useState<number | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`)
      .then((r) => { if (!r.ok) throw new Error('bad'); return r.json(); })
      .then((data) => {
        if (cancelled) return;
        const days: Day[] = data?.contributions ?? [];
        const levelMap = new Map(days.map((d) => [d.date, d.level]));
        const countMap = new Map(days.map((d) => [d.date, d.count]));
        const firstDay = new Date(2025, 9, 31);
        const lastDay = new Date(2026, 9, 30);
        const grid: number[][] = [];
        const cntGrid: number[][] = [];
        const ms: { name: string; col: number }[] = [];
        for (let col = 0; col < 53; col++) {
          const column: number[] = [];
          const ccolumn: number[] = [];
          for (let row = 0; row < 7; row++) {
            const dt = new Date(2025, 9, 26 + col * 7 + row);
            const ok = dt >= firstDay && dt <= lastDay;
            if (ok && dt.getDate() === 1) ms.push({ name: MONTHS[dt.getMonth()], col: col + 1 });
            const key = `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`;
            const lvl = ok ? (levelMap.get(key) ?? 0) : -1;
            const cnt = ok ? (countMap.get(key) ?? 0) : 0;
            column.push(lvl);
            ccolumn.push(cnt);
          }
          grid.push(column);
          cntGrid.push(ccolumn);
        }
        setLevels(grid);
        setCounts(cntGrid);
        setMonths(ms);
        setTotal(typeof data?.total?.lastYear === 'number' ? data.total.lastYear : days.reduce((a, d) => a + d.count, 0));
      })
      .catch(() => {
        if (cancelled) return;
        setError(true);
      });
    return () => { cancelled = true; };
  }, []);

  // Flatten for rendering in column-major order (grid-auto-flow: column)
  const cells: { level: number; count: number; date: string; col: number; row: number }[] = [];
  const firstDay = new Date(2025, 9, 31);
  const lastDay = new Date(2026, 9, 30);
  for (let col = 0; col < 53; col++) {
    for (let row = 0; row < 7; row++) {
      const dt = new Date(2025, 9, 26 + col * 7 + row);
      const ok = dt >= firstDay && dt <= lastDay;
      const lvl = levels ? levels[col][row] : (ok ? 0 : -1);
      const cnt = counts ? counts[col][row] : 0;
      const dateStr = ok ? dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '';
      cells.push({ level: lvl, count: cnt, date: dateStr, col, row });
    }
  }

  return (
    <section className="reveal px-5 py-7">
      <div
        className="flex flex-col gap-3.5 rounded-[14px] border p-[18px] px-5"
        style={{ borderColor: 'var(--line)', backgroundColor: 'var(--soft)' }}
      >
        <div className="overflow-x-auto pb-1">
          <div className="flex min-w-[640px] flex-col gap-2">
            <div className="grid h-[18px] items-center gap-x-[3px]" style={{ gridTemplateColumns: 'repeat(53, minmax(0, 1fr))' }}>
              {months.map((m, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap text-[13px] font-medium"
                  style={{ gridColumn: `${m.col} / span 3`, gridRow: 1, color: 'var(--fg)' }}
                >
                  {m.name}
                </span>
              ))}
            </div>
            <div
              className="grid gap-[3px]"
              style={{ gridTemplateColumns: 'repeat(53, minmax(0, 1fr))', gridAutoFlow: 'column', gridTemplateRows: 'repeat(7, auto)' }}
            >
              {cells.map((c, i) => (
                <div
                  key={i}
                  className="cell aspect-square rounded-[2px]"
                  title={c.date ? `${c.count} contribution${c.count === 1 ? '' : 's'} on ${c.date}` : ''}
                  style={{ backgroundColor: c.level < 0 ? 'transparent' : SHADES[c.level] }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2.5 text-[13px]" style={{ fontFamily: "'Geist Mono', monospace", color: 'var(--sub)' }}>
          <span>
            {total === null ? (error ? '—' : 'Loading…') : `${total} contributions in the last year on `}
            {total !== null && (
              <a href="https://github.com/Raj-nandan" style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}>GitHub</a>
            )}
            {total === null && !error && '.'}
          </span>
          <span className="inline-flex items-center gap-1" style={{ color: 'var(--muted)' }}>
            <span className="mr-1">Less</span>
            {SHADES.map((s, i) => (
              <span key={i} style={{ width: 11, height: 11, borderRadius: 2, backgroundColor: s, display: 'inline-block' }} />
            ))}
            <span className="ml-1">More</span>
          </span>
        </div>
        {error && (
          <p className="text-xs" style={{ color: 'var(--muted)' }}>Could not load live data.</p>
        )}
      </div>
    </section>
  );
}