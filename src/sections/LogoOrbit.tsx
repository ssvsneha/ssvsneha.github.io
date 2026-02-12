import { useRef } from 'react';
import { 
  Cloud, 
  Database, 
  Server, 
  Cpu, 
  Layers,
  Box,
  Terminal,
  GitBranch
} from 'lucide-react';

const LogoOrbit = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const technologies = [
    { icon: Cloud, name: 'AWS' },
    { icon: Database, name: 'PostgreSQL' },
    { icon: Server, name: 'Apache Spark' },
    { icon: Cpu, name: 'Python' },
    { icon: Layers, name: 'Databricks' },
    { icon: Box, name: 'Docker' },
    { icon: Terminal, name: 'Airflow' },
    { icon: GitBranch, name: 'Git' },
  ];

  // Duplicate for seamless loop
  const allTechs = [...technologies, ...technologies];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-sm text-[#d1e29d] uppercase tracking-widest mb-2">
          Tech Stack
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Technologies I Work With
        </h2>
      </div>

      {/* Orbit Track */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div 
          ref={trackRef}
          className="flex orbit-track"
          style={{ width: 'fit-content' }}
        >
          {allTechs.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-3 mx-6 px-6 py-4 rounded-xl bg-[#141414] border border-[#3d3d3d] hover:border-[#d1e29d]/50 transition-all duration-300 group cursor-pointer hover:scale-105"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0a0a0a] flex items-center justify-center group-hover:bg-[#d1e29d]/10 transition-colors">
                <tech.icon className="w-5 h-5 text-gray-400 group-hover:text-[#d1e29d] transition-colors" />
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Reverse Direction */}
      <div className="relative mt-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <div 
          className="flex"
          style={{ 
            width: 'fit-content',
            animation: 'orbit 30s linear infinite reverse'
          }}
        >
          {[...allTechs].reverse().map((tech, index) => (
            <div
              key={`reverse-${tech.name}-${index}`}
              className="flex items-center gap-3 mx-6 px-6 py-4 rounded-xl bg-[#141414] border border-[#3d3d3d] hover:border-[#d1e29d]/50 transition-all duration-300 group cursor-pointer hover:scale-105"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0a0a0a] flex items-center justify-center group-hover:bg-[#d1e29d]/10 transition-colors">
                <tech.icon className="w-5 h-5 text-gray-400 group-hover:text-[#d1e29d] transition-colors" />
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoOrbit;
