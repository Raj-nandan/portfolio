import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Flora-Fusion',
    description: 'A web-app, which help users to utilize the medicinal use of herbal plants',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Vercel'],
    // stats: {
    //   stars: 245,
    //   forks: 57,
    // },
    demoUrl: 'https://github.com/Raj-nandan/Flora-Fusion',
    githubUrl: 'https://github.com/Raj-nandan/Flora-Fusion',
    featured: true,
  },
  {
    title: 'Bright-Hands',
    description: 'A web-app, that help the specially abled kids to learn.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    tags: ['MERN', 'Python', 'ML', 'Vercel'],
    // stats: {
    //   stars: 1200,
    //   forks: 180,
    // },
    demoUrl: 'https://versatile-five.vercel.app/',
    githubUrl: 'https://github.com/Raj-nandan/Bright-Hands',
    featured: true,
  },
  {
    title: 'Skill Saga',
    description: 'An E-learning platform',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f',
    tags: ['React.js', 'NodeJS', 'MongoDB', 'Vercel'],
    // stats: {
    //   stars: 890,
    //   forks: 145,
    // },
    demoUrl: 'https://skill-saga.vercel.app/',
    githubUrl: 'https://github.com/Raj-nandan/Skill-Saga',
    featured: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-[2000px] mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4">
            Here are some of my notable projects that showcase my expertise in
            different areas of software development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {project.featured && (
                    <Badge
                      className="absolute top-2 right-2"
                      variant="secondary"
                    >
                      Featured
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      {/* <Star className="h-4 w-4" /> */}
                      {/* {project.stats.stars} */}
                    </div>
                    <div className="flex items-center gap-1">
                      {/* <GitFork className="h-4 w-4" /> */}
                      {/* {project.stats.forks} */}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button asChild variant="default" size="sm" className="flex-1">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}