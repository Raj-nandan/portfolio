import Shell from './shell';
import Hero from './sections/hero';
import Contributions from './sections/contributions';
import Stack from './sections/stack';
import Projects from './sections/projects';
import Experience from './sections/experience';
import Contact from './sections/contact';

export default function Layout() {
  return (
    <Shell>
      <Hero />
      <Contributions />
      <Stack />
      <Projects />
      <Experience />
      <Contact />
    </Shell>
  );
}