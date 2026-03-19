import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ArrowUpRight, GitFork } from 'lucide-react';

const projects = [
  {
    title: 'HealthCheck — API Observability Stack',
    description:
      'A full observability pipeline that simulates a chaotic API environment to demonstrate real-world monitoring. A Chaos Generator randomly injects latency (100ms–2.5s) and a ~12.5% failure rate. Metrics flow into Prometheus, logs into Loki, and everything visualises live in Grafana dashboards.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    tags: ['Node.js', 'Prometheus', 'Loki', 'Grafana', 'Docker'],
    githubUrl: 'https://github.com/Raj-nandan/HealthCheck',
    demoUrl: 'https://github.com/Raj-nandan/HealthCheck',
    label: 'DevOps / Observability',
    labelColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    forks: 0,
    featured: true,
  },
  {
    title: 'Attendance Tracker',
    description:
      'A full-stack employee attendance & monitoring system built in TypeScript. Employees log in/out via a React dashboard; supervisors get real-time data visualisation and automated Nodemailer alerts for late check-ins, missing logs, or discrepancies.',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80',
    tags: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'Nodemailer'],
    githubUrl: 'https://github.com/Raj-nandan/attendance_tracker',
    demoUrl: 'https://github.com/Raj-nandan/attendance_tracker',
    label: 'Full-Stack',
    labelColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    forks: 2,
    featured: false,
  },
  {
    title: 'Student CRUD API + AI Summary',
    description:
      'A RESTful API built in Go with Gorilla Mux. Supports full CRUD on an in-memory student store, plus a /summary endpoint that sends student profile data to a locally-running Llama 3 model via Ollama and returns an AI-generated narrative summary.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80',
    tags: ['Go', 'Gorilla Mux', 'Ollama', 'Llama 3', 'REST API'],
    githubUrl: 'https://github.com/Raj-nandan/Student-CRUD-API-with-AI-Summary-Go-Ollama-',
    demoUrl: 'https://github.com/Raj-nandan/Student-CRUD-API-with-AI-Summary-Go-Ollama-',
    label: 'Go + LLM',
    labelColor: 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
    forks: 0,
    featured: false,
  },
  {
    title: 'Kafka Order Tracker',
    description:
      'A Python event-streaming demo using Apache Kafka and Docker Compose. A producer publishes order events to a Kafka topic; a consumer tracks and processes those orders in real time — illustrating the producer/consumer pattern for distributed systems.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    tags: ['Python', 'Apache Kafka', 'Docker', 'Event Streaming'],
    githubUrl: 'https://github.com/Raj-nandan/Kafka',
    demoUrl: 'https://github.com/Raj-nandan/Kafka',
    label: 'Distributed Systems',
    labelColor: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
    forks: 0,
    featured: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-24 max-w-5xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="space-y-12"
      >
        {/* ── Header ── */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
          }}
          className="space-y-3"
        >
          <span className="section-label">What I've built</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">Projects</h2>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            Backend systems, DevOps tooling, and full-stack apps — exploring everything from
            distributed messaging to AI-powered APIs.
          </p>
        </motion.div>

        {/* ── Featured card — HealthCheck ── */}
        <motion.div custom={0} variants={cardVariants}>
          <Card className="group overflow-hidden border-border/60 bg-card/60 backdrop-blur-sm card-glow">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-video md:aspect-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50 hidden md:block" />
              </div>

              <div className="flex flex-col justify-between p-6 md:p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${featured.labelColor}`}>
                      {featured.label}
                    </span>
                    <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-xl font-bold leading-snug">{featured.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{featured.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {featured.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-border/60 text-muted-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button asChild size="sm" className="flex-1 rounded-lg">
                    <a href={featured.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                      View Project
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="flex-1 rounded-lg border-border/60">
                    <a href={featured.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1.5 h-3.5 w-3.5" />
                      Source
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* ── Grid of remaining 3 ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, index) => (
            <motion.div key={project.title} custom={index + 1} variants={cardVariants}>
              <Card className="group overflow-hidden border-border/60 bg-card/60 backdrop-blur-sm card-glow h-full flex flex-col">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-accent hover:text-white -translate-y-1 group-hover:translate-y-0"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm ${project.labelColor}`}>
                      {project.label}
                    </span>
                  </div>
                </div>

                <CardHeader className="pb-2 pt-4">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base leading-snug">{project.title}</CardTitle>
                    {project.forks > 0 && (
                      <span className="flex items-center gap-1 text-xs text-muted-foreground shrink-0 mt-0.5">
                        <GitFork className="h-3 w-3" />
                        {project.forks}
                      </span>
                    )}
                  </div>
                  <CardDescription className="text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow pb-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs px-2 py-0.5 border-border/60 text-muted-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="gap-2 pt-0">
                  <Button asChild variant="default" size="sm" className="flex-1 h-8 text-xs rounded-lg">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                      View
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="flex-1 h-8 text-xs rounded-lg border-border/60">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1.5 h-3.5 w-3.5" />
                      Source
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* ── GitHub CTA ── */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="flex justify-center pt-2"
        >
          <Button
            asChild
            variant="outline"
            className="rounded-full border-border/60 hover:border-accent/50 hover:bg-accent/5"
          >
            <a href="https://github.com/Raj-nandan" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View all repositories on GitHub
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}