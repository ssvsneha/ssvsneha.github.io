import { useEffect, useRef, useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import LogoOrbit from './sections/LogoOrbit';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Grain Overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <Navigation scrollY={scrollY} />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <LogoOrbit />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
