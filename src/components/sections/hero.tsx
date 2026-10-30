import avatar from '@/asset/img.jpg';

export default function Hero() {
  return (
    <>
      <section id="hero" className="flex flex-col sm:flex-row items-center gap-5 px-5 py-10 sm:gap-9 sm:py-[52px] sm:pb-7">
        <div className="load d1 relative flex-none h-[72px] w-[72px] sm:h-[140px] sm:w-[140px] sm:mr-6" style={{ marginBottom: 16 }}>
          
          <div
            className="flex items-center justify-center overflow-hidden rounded-[20px] border text-center text-xs sm:rounded-[28px]"
            style={{ backgroundColor: 'var(--soft)', borderColor: 'var(--line)', color: 'var(--muted)', fontFamily: "var(--font-sans)" }}
          >
            <img src={avatar} alt="Raj Nandan" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-3 text-left">
          <span className="load d2 inline-flex items-center gap-2 text-xs" style={{ fontFamily: "var(--font-sans)", color: 'var(--muted)' }}>
            <span className="dot" />
            Open to opportunities
          </span>
          <h1 className="load d3 text-[32px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[44px]">
            Raj Nandan
          </h1>
          <p className="load d4 text-[15px] font-medium" style={{ color: 'var(--sub)' }}>
            Backend &amp; DevOps Engineer
          </p>
          
          
          <p className="load d6 text-[12px] leading-[1.6]" style={{ color: 'var(--body)', maxWidth: 460 }}>
            Internship experience in observability, alerting, and production DB migrations, plus independently built microservice systems (event-driven architecture, multi-tenant auth, real-time monitoring). Now building agentic AI projects.
          </p>
        </div>
      </section>

      {/* PILLS */}
      <div className="load d5 flex flex-wrap gap-2.5 px-5 pb-7">
        {[
          { label: 'GitHub', href: 'https://github.com/Raj-nandan' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/raj-nandan/' },
          { label: 'LeetCode', href: 'https://leetcode.com/u/nandanraj098/' },
          { label: 'Email', href: 'mailto:nandanr532@gmail.com' },
        ].map((item) => (
          <a key={item.label} className="pill" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
            <span>{item.label}</span>
            <svg className="arr" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17L17 7M8 7h9v9" />
            </svg>
          </a>
        ))}
      </div>
    </>
  );
}