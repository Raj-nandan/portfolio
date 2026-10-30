export default function Contact() {
  const rows = [
    { label: 'Mobile', value: '+91 8409452277', href: 'tel:+918409452277' },
    { label: 'LinkedIn', value: 'linkedin.com/in/raj-nandan', href: 'https://www.linkedin.com/in/raj-nandan/' },
    { label: 'LeetCode', value: 'leetcode.com/u/nandanraj098', href: 'https://leetcode.com/u/nandanraj098/' },
    { label: 'Email', value: 'nandanr532@gmail.com', href: 'mailto:nandanr532@gmail.com' },
  ];

  return (
    <section id="contact" className="reveal border-t px-5 py-9" style={{ borderColor: 'var(--line)' }}>
      <h2 className="text-[20px] font-semibold tracking-[-0.01em]">Get in touch</h2>
      <p className="reveal mt-1 text-[15px] leading-[1.6]" style={{ color: 'var(--body)', maxWidth: 520 }}>
        Open to work on backend, infra. Reach out about a project or just to say hi.
      </p>
      <div className="reveal mt-3.5 flex w-full flex-col overflow-hidden rounded-[14px] border" style={{ borderColor: 'var(--line)' }}>
        {rows.map((r, i) => (
          <a
            key={r.label}
            href={r.href}
            target={r.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="row"
            style={{
              boxSizing: 'border-box',
              minHeight: 64,
              padding: '14px 18px',
              borderBottom: i < rows.length - 1 ? '1px solid var(--line)' : 'none',
            }}
          >
            <span className="flex flex-col gap-[3px]">
              <span className="text-[11px] uppercase tracking-[0.04em]" style={{ fontFamily: "'Geist Mono', monospace", color: 'var(--muted)' }}>
                {r.label}
              </span>
              <span className="text-sm font-medium">{r.value}</span>
            </span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17L17 7M8 7h9v9" />
            </svg>
          </a>
        ))}
      </div>
    </section>
  );
}