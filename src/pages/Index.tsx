import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import CursorGlow from "@/components/CursorGlow";

/**
 * Main index page component
 * Combines all sections into a single scrollable page experience
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-background retro-site">
      <CursorGlow />
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
