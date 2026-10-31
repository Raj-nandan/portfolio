import { navigate } from '@/lib/router';
import { Github, Globe } from 'lucide-react';
import taskflowImg from '@/asset/taskflow.png';
import zapierImg from '@/asset/zapier.png';
import healthcheckImg from '@/asset/healthcheck.png';
import imsImg from '@/asset/ims.png';


const arts = [
  'linear-gradient(135deg, var(--c1), var(--c3))',
  'radial-gradient(circle at 30% 30%, var(--c2), var(--c0) 70%)',
  'repeating-linear-gradient(45deg, var(--c1) 0, var(--c1) 12px, var(--c0) 12px, var(--c0) 24px)',
  'linear-gradient(200deg, var(--c0), var(--c2))',
];

const projects = [
  { name: 'TaskFlow — Distributed Background-Job System', desc: 'Async job platform: API queues report jobs in ms; workers process and store results in MinIO with signed URLs. Atomic claims, idempotency, tenant isolation, k6 load tests, full observability.', tags: ['Java 21', 'Spring Boot', 'PostgreSQL', 'RabbitMQ', 'MinIO'], github: 'https://github.com/Raj-nandan/Taskflow', live: 'https://taskflow.architecture.rajnandan.online/', image: taskflowImg, art: arts[0] },
  { name: 'Zapier Monorepo — Workflow Automation Engine', desc: 'Zapier-style automation: triggers, chained actions, templating, OAuth connections, run history/replay, dashboard analytics, idempotent webhooks, Kafka outbox.', tags: ['TypeScript', 'Node.js', 'PostgreSQL', 'Kafka', 'Redis'], github: 'https://github.com/Raj-nandan/zapier-monorepo', image: zapierImg, art: arts[1] },
  { name: 'HealthCheck — API Observability Stack', desc: 'Observability pipeline simulating a chaotic API: chaos generator, Prometheus metrics, Loki logs, Grafana dashboards. Dockerized.', tags: ['Node.js', 'Prometheus', 'Loki', 'Grafana', 'Docker'], github: 'https://github.com/Raj-nandan/HealthCheck', live: 'https://github.com/Raj-nandan/HealthCheck', image: healthcheckImg, art: arts[2] },
  { name: 'IMS — Incident Management System', desc: 'Event-driven IMS: high-throughput signal ingestion via Redis Streams, debouncing/dedup, incident state machine with mandatory RCA, real-time SSE dashboard, polyglot persistence.', tags: ['NestJS', 'TypeScript', 'Redis', 'PostgreSQL', 'MongoDB'], github: 'https://github.com/Raj-nandan/incident-management-system', live: 'https://github.com/Raj-nandan/incident-management-system', image: imsImg, art: arts[3] },
];

export default function Projects() {
  return (
    <section id="projects" className="reveal border-t px-5 py-9 pb-8" style={{ borderColor: 'var(--line)' }}>
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-[20px] font-semibold tracking-[-0.01em]">Projects</h2>
       
      </div>
      
      <div className="flex flex-wrap gap-4">
        {projects.map((p) => (
          <article key={p.name} className="card">
            <div className="thumb">
              {p.image ? (
                <img src={p.image} alt={p.name} className="absolute inset-0 h-full w-full object-fit" />
              ) : (
                <>
                  <div className="thumb-art" style={{ background: p.art }} />
                  <span
                    className="absolute bottom-3 left-3 rounded-md border px-2 py-0.5 text-[11px]"
                    style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--line)', fontFamily: "var(--font-sans)", color: 'var(--muted)' }}
                  >
                    [SCREENSHOT]
                  </span>
                </>
              )}
            </div>
            <div className="flex flex-1 flex-col gap-2.5 p-[18px]">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-[17px] font-semibold">{p.name}</h3>

              </div>
              <p className="text-sm leading-[1.6]" style={{ color: 'var(--body)' }}>{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md border px-2 py-0.5 text-[11px]" style={{ backgroundColor: 'var(--soft)', borderColor: 'var(--line)', fontFamily: "var(--font-sans)", color: 'var(--body)' }}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap items-center gap-3 pt-1.5">
                <a className="lnk" href={p.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                  <Github className="h-4 w-4" />
                </a>
                <a className="lnk" href={p.live} target="_blank" rel="noopener noreferrer" aria-label="Live site" title="Live">
                  <Globe className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <a className="btn btn-ghost mt-4 self-start" href="/projects" onClick={(e) => { e.preventDefault(); navigate('/projects'); }}>
        <span>View all projects</span>
        <svg className="arr" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M7 17L17 7M8 7h9v9" />
        </svg>
      </a>
    </section>
  );
}