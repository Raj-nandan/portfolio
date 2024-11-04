import { ThemeProvider } from '@/components/theme-provider';
import Layout from '@/components/layout';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <Layout />
      <Toaster position="top-right" />
    </ThemeProvider>
  );
}

export default App;