export default function Experience() {
  return (
    <section id="experience" className="reveal border-t px-5 py-9 pb-9" style={{ borderColor: 'var(--line)' }}>
      <h2 className="mb-5.5 text-[20px] font-semibold tracking-[-0.01em]">Experience</h2>
      <div className="relative flex flex-col gap-7 pl-7">
        <div className="absolute bottom-2 left-1 top-2 w-px" style={{ backgroundColor: 'var(--line)' }} />

        <div className="reveal relative flex flex-col gap-1.5">
          <span className="tl-dot" />
          <div className="flex flex-wrap items-baseline justify-between gap-1.5">
            <h3 className="text-base font-semibold">BARQ</h3>
            <span className="text-xs" style={{ fontFamily: "var(--font-sans)", color: 'var(--muted)' }}>Mar 2025 – Aug 2025</span>
          </div>
          <span className="text-sm" style={{ color: 'var(--sub)' }}>Site Reliability Engineering Intern · Bengaluru</span>
          <ul className="m-0 mt-1 flex flex-col gap-1.5 pl-[18px] text-sm leading-[1.6]" style={{ color: 'var(--body)' }}>
            <li>Set up and maintained Grafana dashboards and Prometheus/ELK monitoring for critical services; configured DB alerting rules to surface anomalies ahead of production impact.</li>
            <li>Participated in production deployments and roll-out verification; helped author incident runbooks.</li>
            <li>Contributed to testing/validation of a production-to-DR database migration and reverse failback, verifying data integrity through the cutover.</li>
            <li>Assisted in deploying and scaling containerized services on Docker and Kubernetes.</li>
          </ul>
        </div>

        

        <div className="reveal relative flex flex-col gap-1.5">
          <span className="tl-dot" />
          <div className="flex flex-wrap items-baseline justify-between gap-1.5">
            <h3 className="text-base font-semibold">College of Engineering Roorkee</h3>
            <span className="text-xs" style={{ fontFamily: "var(--font-sans)", color: 'var(--muted)' }}>2021 to 2025</span>
          </div>
          <span className="text-sm" style={{ color: 'var(--sub)' }}>B.Tech, Information Technology</span>
        </div>
      </div>
    </section>
  );
}