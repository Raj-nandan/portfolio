const groups = [
  { num: '01', title: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java'] },
  { num: '02', title: 'Backend & Databases', items: ['Node.js', 'Express.js', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'MySQL', 'Prisma', 'Kafka', 'RabbitMQ', 'Redis', 'nginx'] },
  { num: '03', title: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS', 'shadcn/ui'] },
  { num: '04', title: 'Infrastructure', items: ['Docker', 'Kubernetes', 'Grafana', 'Prometheus', 'Vercel'] },
  { num: '05', title: 'CS Fundamentals', items: ['Object-Oriented Programming', 'Data Structures & Algorithms', 'DBMS', 'System Design', 'Microservices'] },
  { num: '06', title: 'AI Engineering & Tools', items: ['AI Agents', 'Generative AI', 'Prompt Engineering', 'CLI-based Agents'] },
];

export default function Stack() {
  return (
    <section id="stack" className="reveal border-t px-5 py-[72px] pb-6" style={{ borderColor: 'var(--line)' }}>
      <div className="mb-7 flex flex-wrap items-baseline justify-between gap-2.5">
        <h2 className="text-[32px] font-semibold tracking-[-0.03em]">Stack</h2>
        <span className="text-[13px]" style={{ fontFamily: "'Geist Mono', monospace", color: 'var(--accent)' }}>
          Can build things around these technologies, and always learning more.
        </span>
      </div>
      <div className="stack-list flex flex-col" style={{ margin: '0 -20px' }}>
        {groups.map((g) => (
          <div key={g.num} className="srow flex flex-wrap items-start gap-3 px-5 py-[22px]" style={{ borderTop: '1px solid var(--line)' }}>
            <span className="flex w-[190px] flex-none items-baseline gap-3.5 text-lg">
              <span className="snum text-[13px]" style={{ fontFamily: "'Geist Mono', monospace", color: 'var(--muted)' }}>{g.num}</span>
              <span className="sname font-medium">{g.title}</span>
            </span>
            <div className="flex flex-1 basis-[300px] flex-wrap gap-2">
              {g.items.map((item) => (
                <span key={item} className="tchip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}