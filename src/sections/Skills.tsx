import { useEffect, useRef, useState } from 'react';
import { 
  Database, 
  Cloud, 
  Code2, 
  BarChart3, 
  Server,
  Workflow,
  Layers,
  Box,
  GitBranch,
  Terminal,
  Cpu,
  Shield
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ElementType;
  category: string;
  level: number;
}

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'data', label: 'Data Engineering' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'analytics', label: 'Analytics' },
  ];

  const skills: Skill[] = [
    // Data Engineering
    { name: 'Python', icon: Code2, category: 'data', level: 95 },
    { name: 'SQL', icon: Database, category: 'data', level: 95 },
    { name: 'Apache Spark', icon: Cpu, category: 'data', level: 90 },
    { name: 'Kafka', icon: Workflow, category: 'data', level: 85 },
    { name: 'Airflow', icon: Terminal, category: 'data', level: 88 },
    { name: 'dbt', icon: Layers, category: 'data', level: 85 },
    
    // Cloud & DevOps
    { name: 'AWS', icon: Cloud, category: 'cloud', level: 90 },
    { name: 'Docker', icon: Box, category: 'cloud', level: 85 },
    { name: 'Kubernetes', icon: Server, category: 'cloud', level: 80 },
    { name: 'Terraform', icon: Shield, category: 'cloud', level: 82 },
    { name: 'Git', icon: GitBranch, category: 'cloud', level: 92 },
    { name: 'CI/CD', icon: Workflow, category: 'cloud', level: 85 },
    
    // Analytics
    { name: 'Snowflake', icon: Database, category: 'analytics', level: 88 },
    { name: 'Databricks', icon: Cpu, category: 'analytics', level: 85 },
    { name: 'Tableau', icon: BarChart3, category: 'analytics', level: 80 },
    { name: 'Pandas', icon: Code2, category: 'analytics', level: 92 },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  // Canvas animation for connection lines
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisible) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    canvas.addEventListener('mousemove', handleMouseMove, { passive: true });

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Draw animated connection lines
      const skillElements = canvas.parentElement?.querySelectorAll('.skill-card');
      if (skillElements && skillElements.length > 1) {
        const positions: { x: number; y: number }[] = [];
        
        skillElements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const canvasRect = canvas.getBoundingClientRect();
          positions.push({
            x: rect.left - canvasRect.left + rect.width / 2,
            y: rect.top - canvasRect.top + rect.height / 2,
          });
        });

        // Draw connections
        positions.forEach((pos, i) => {
          positions.slice(i + 1).forEach((otherPos, j) => {
            const distance = Math.sqrt(
              Math.pow(pos.x - otherPos.x, 2) + Math.pow(pos.y - otherPos.y, 2)
            );

            if (distance < 250) {
              const opacity = (1 - distance / 250) * 0.15;
              const pulse = Math.sin(time + i + j) * 0.05 + 0.15;
              
              ctx.beginPath();
              ctx.moveTo(pos.x, pos.y);
              ctx.lineTo(otherPos.x, otherPos.y);
              ctx.strokeStyle = `rgba(209, 226, 157, ${opacity + pulse})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          });

          // Mouse interaction
          const mouseDist = Math.sqrt(
            Math.pow(pos.x - mouseRef.current.x, 2) + 
            Math.pow(pos.y - mouseRef.current.y, 2)
          );

          if (mouseDist < 200) {
            const opacity = (1 - mouseDist / 200) * 0.3;
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = `rgba(209, 226, 157, ${opacity})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, filteredSkills]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d1e29d]/5 to-transparent" />

      <div className="section-container max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d1e29d]/10 border border-[#d1e29d]/30 mb-4">
            <Cpu className="w-4 h-4 text-[#d1e29d]" />
            <span className="text-xs text-[#d1e29d] uppercase tracking-wider">Tech Stack</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills &{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built over years of solving complex data challenges 
            across the entire data lifecycle.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#d1e29d] text-[#0a0a0a]'
                  : 'bg-[#141414] text-gray-400 border border-[#3d3d3d] hover:border-[#d1e29d]/50 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid with Canvas Overlay */}
        <div className="relative">
          {/* Connection Lines Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0"
          />

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 relative z-10">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`skill-card group p-4 rounded-xl bg-[#141414] border border-[#3d3d3d] hover:border-[#d1e29d]/50 transition-all duration-500 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                {/* Icon */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0a0a0a] flex items-center justify-center group-hover:bg-[#d1e29d]/10 transition-colors">
                    <skill.icon className="w-5 h-5 text-gray-400 group-hover:text-[#d1e29d] transition-colors" />
                  </div>
                  <span className="text-xs text-gray-500">{skill.level}%</span>
                </div>

                {/* Name */}
                <h3 className="text-sm font-semibold text-white group-hover:text-[#d1e29d] transition-colors mb-2">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="h-1.5 bg-[#0a0a0a] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#d1e29d] to-[#a8c66c] rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1 + 0.5}s`
                    }}
                  />
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-xl bg-[#d1e29d]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className={`grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-[#3d3d3d]/50 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { value: '15+', label: 'Technologies' },
            { value: '5+', label: 'Years Experience' },
            { value: '50+', label: 'Projects' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
