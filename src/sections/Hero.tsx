import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Sparkles, Code2, BarChart3, Database } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const heroRef = useRef<HTMLDivElement>(null);
  const fullText = 'Data Engineer';

  useEffect(() => {
    setIsVisible(true);
    
    // Typewriter effect
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  // 3D tilt effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.querySelector('.hero-card') as HTMLElement;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.querySelector('.hero-card') as HTMLElement;
    if (card) {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d1e29d]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#d1e29d]/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="section-container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Greeting Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141414] border border-[#3d3d3d]"
              style={{ transitionDelay: '0.2s' }}
            >
              <Sparkles className="w-4 h-4 text-[#d1e29d]" />
              <span className="text-sm text-gray-300">Welcome to my portfolio</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
                style={{ transitionDelay: '0.3s' }}
              >
                Hello, I&apos;m{' '}
                <span className="block mt-2 gradient-text glow-text">[Your Name]</span>
              </h1>
              
              <div className="flex items-center gap-3 text-2xl sm:text-3xl lg:text-4xl">
                <span className="text-gray-400">I&apos;m a</span>
                <span className="text-[#d1e29d] font-semibold cursor-blink">
                  {typedText}
                </span>
              </div>
            </div>

            {/* Description */}
            <p 
              className="text-lg text-gray-400 max-w-xl leading-relaxed"
              style={{ transitionDelay: '0.5s' }}
            >
              Transforming raw data into strategic assets. I architect pipelines, 
              optimize warehouses, and visualize the invisible patterns that drive 
              business growth.
            </p>

            {/* Career Path Pills */}
            <div 
              className="flex flex-wrap gap-3"
              style={{ transitionDelay: '0.6s' }}
            >
              {[
                { icon: Code2, label: 'Software Engineer', color: 'from-blue-500/20 to-blue-600/10' },
                { icon: BarChart3, label: 'Data Analyst', color: 'from-purple-500/20 to-purple-600/10' },
                { icon: Database, label: 'Data Engineer', color: 'from-[#d1e29d]/20 to-[#a8c66c]/10' },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${item.color} border border-white/10 hover:border-[#d1e29d]/50 transition-all duration-300 hover:scale-105`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <item.icon className="w-4 h-4 text-white/80" />
                  <span className="text-sm text-white/90">{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div 
              className="flex flex-wrap gap-4 pt-4"
              style={{ transitionDelay: '0.7s' }}
            >
              <button
                onClick={scrollToProjects}
                className="btn-primary flex items-center gap-2 group"
              >
                Explore My Work
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
              
              <button
                onClick={scrollToContact}
                className="px-8 py-4 border border-[#3d3d3d] text-white font-semibold rounded-lg hover:border-[#d1e29d] hover:bg-[#d1e29d]/5 transition-all duration-300"
              >
                Get in Touch
              </button>
            </div>

            {/* Stats */}
            <div 
              className="flex gap-8 pt-8 border-t border-[#3d3d3d]/50"
              style={{ transitionDelay: '0.8s' }}
            >
              {[
                { value: '5+', label: 'Years Experience' },
                { value: '50+', label: 'Projects Completed' },
                { value: '99.9%', label: 'Uptime Achieved' },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image/Card */}
          <div 
            className={`relative lg:h-[600px] flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Decorative Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[400px] h-[400px] rounded-full border border-[#3d3d3d]/30 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute w-[300px] h-[300px] rounded-full border border-[#d1e29d]/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
              <div className="absolute w-[500px] h-[500px] rounded-full border border-dashed border-[#3d3d3d]/20 animate-spin" style={{ animationDuration: '30s' }} />
            </div>

            {/* Hero Card */}
            <div className="hero-card relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden transition-transform duration-300 ease-out">
              {/* Card Border Glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[#d1e29d]/30 glow-border z-10 pointer-events-none" />
              
              {/* Image Placeholder with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
                {/* Abstract Data Visualization Pattern */}
                <div className="absolute inset-0 opacity-30">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute bg-[#d1e29d]/20"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${Math.random() * 100 + 50}px`,
                        height: '2px',
                        transform: `rotate(${Math.random() * 360}deg)`,
                      }}
                    />
                  ))}
                </div>
                
                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-[#d1e29d]/10 flex items-center justify-center pulse-glow">
                      <Database className="w-16 h-16 text-[#d1e29d]" />
                    </div>
                    {/* Orbiting dots */}
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
                      <div className="absolute -top-2 left-1/2 w-3 h-3 rounded-full bg-[#d1e29d]" />
                    </div>
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}>
                      <div className="absolute top-1/2 -right-2 w-2 h-2 rounded-full bg-[#d1e29d]/60" />
                    </div>
                  </div>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0a0a0a] to-transparent">
                  <div className="glass rounded-xl p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#d1e29d] animate-pulse" />
                      <span className="text-xs text-[#d1e29d]">Available for work</span>
                    </div>
                    <p className="text-sm text-gray-300">Building data solutions that scale</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -left-4 top-1/4 glass rounded-lg px-3 py-2 floating" style={{ animationDelay: '0s' }}>
              <span className="text-xs text-[#d1e29d]">Python</span>
            </div>
            <div className="absolute -right-4 top-1/3 glass rounded-lg px-3 py-2 floating" style={{ animationDelay: '1s' }}>
              <span className="text-xs text-[#d1e29d]">SQL</span>
            </div>
            <div className="absolute left-0 bottom-1/4 glass rounded-lg px-3 py-2 floating" style={{ animationDelay: '2s' }}>
              <span className="text-xs text-[#d1e29d]">AWS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-gray-500">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-[#3d3d3d] flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-[#d1e29d] animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
