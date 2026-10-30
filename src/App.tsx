import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { usePath } from '@/lib/router';
import Layout from '@/components/layout';
import ProjectsPage from '@/pages/ProjectsPage';

function App() {
  const path = usePath();
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      {path === '/projects' ? <ProjectsPage /> : <Layout />}
      <Toaster position="top-right" />
    </ThemeProvider>
  );
}

export default App;