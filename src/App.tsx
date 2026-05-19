import Header from './components/Header';
import Hero from './components/Hero';
import TracksSection from './components/TracksSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="border-t border-gray-100" />
        <ProjectsSection />
        <div className="border-t border-gray-100" />
        <TracksSection />
      </main>
      <Footer />
    </div>
  );
}
