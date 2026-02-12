import { useEffect, useRef, useState } from 'react';
import { Award, TrendingUp, Zap, Target } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ years: 0, projects: 0, uptime: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          const duration = 2000;
          const steps = 60;
          const interval = duration / steps;
          
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            setCounters({
              years: Math.floor(5 * easeOut),
              projects: Math.floor(50 * easeOut),
              uptime: Math.floor(99 * easeOut),
            });
            
            if (step >= steps) clearInterval(timer);
          }, interval);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: TrendingUp,
      title: 'Data-Driven',
      description: 'Every decision backed by insights and analytics',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized pipelines processing millions of records',
    },
    {
      icon: Target,
      title: 'Precision Focus',
      description: 'Meticulous attention to data quality and accuracy',
    },
    {
      icon: Award,
      title: 'Best Practices',
      description: 'Following industry standards and modern architectures',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="section-container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image/Visual */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Main Visual */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-[#d1e29d]/10 rounded-full blur-[100px]" />
              
              {/* Decorative Rings */}
              <div className="absolute inset-4 rounded-full border border-[#3d3d3d]/50" />
              <div className="absolute inset-8 rounded-full border border-dashed border-[#d1e29d]/30 animate-spin" style={{ animationDuration: '20s' }} />
              
              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  {/* Data Flow Animation */}
                  <svg className="absolute inset-0 w-full h-full animate-spin" style={{ animationDuration: '15s' }}>
                    <circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray="10 5"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#d1e29d" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#d1e29d" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Center Badge */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-[#141414] border border-[#d1e29d]/50 flex items-center justify-center pulse-glow">
                      <span className="text-4xl font-bold gradient-text">DE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute top-0 right-0 glass rounded-xl p-4 floating" style={{ animationDelay: '0s' }}>
                <div className="text-2xl font-bold text-[#d1e29d]">{counters.years}+</div>
                <div className="text-xs text-gray-400">Years Exp</div>
              </div>
              
              <div className="absolute bottom-0 left-0 glass rounded-xl p-4 floating" style={{ animationDelay: '1s' }}>
                <div className="text-2xl font-bold text-[#d1e29d]">{counters.projects}+</div>
                <div className="text-xs text-gray-400">Projects</div>
              </div>
              
              <div className="absolute top-1/2 -left-4 glass rounded-xl p-4 floating" style={{ animationDelay: '2s' }}>
                <div className="text-2xl font-bold text-[#d1e29d]">{counters.uptime}.9%</div>
                <div className="text-xs text-gray-400">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Content - Text */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d1e29d]/10 border border-[#d1e29d]/30">
              <span className="w-2 h-2 rounded-full bg-[#d1e29d] animate-pulse" />
              <span className="text-xs text-[#d1e29d] uppercase tracking-wider">About Me</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Behind the{' '}
              <span className="gradient-text">Data</span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                My journey began with a curiosity for patterns—how raw, unstructured information 
                could be transformed into meaningful insights that drive decisions. Starting as a 
                Software Engineer, I built a strong foundation in coding and system architecture.
              </p>
              <p>
                Transitioning to Data Analysis, I discovered my passion for uncovering stories 
                hidden in numbers. Today, as a Data Engineer, I combine both worlds—building 
                robust pipelines that transform data at scale while ensuring it tells the right 
                story.
              </p>
              <p>
                I specialize in cloud-native data architectures, real-time streaming, and 
                building data platforms that empower organizations to make data-driven decisions.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="group p-4 rounded-xl bg-[#141414] border border-[#3d3d3d] hover:border-[#d1e29d]/50 transition-all duration-300 hover:scale-[1.02]"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#d1e29d]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d1e29d]/20 transition-colors">
                      <item.icon className="w-5 h-5 text-[#d1e29d]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-xs text-gray-500">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
