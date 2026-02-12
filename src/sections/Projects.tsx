import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Sparkles, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

  const projects = [
    {
      title: 'Real-Time Analytics Pipeline',
      subtitle: 'Event Processing at Scale',
      description: 'Built a high-throughput streaming pipeline processing 10M+ events daily. Uses Kafka for ingestion, Spark Streaming for processing, and Elasticsearch for real-time analytics.',
      image: 'gradient1',
      tags: ['Apache Kafka', 'Spark Streaming', 'Elasticsearch', 'AWS'],
      metrics: [
        { label: 'Events/Day', value: '10M+' },
        { label: 'Latency', value: '<100ms' },
        { label: 'Uptime', value: '99.9%' },
      ],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'Cloud Data Warehouse Migration',
      subtitle: 'Enterprise-Scale Transformation',
      description: 'Led migration from on-premise data warehouse to Snowflake, reducing query costs by 60% and improving performance by 5x. Implemented dbt for data transformation.',
      image: 'gradient2',
      tags: ['Snowflake', 'dbt', 'Airflow', 'Python'],
      metrics: [
        { label: 'Cost Reduction', value: '60%' },
        { label: 'Performance', value: '5x' },
        { label: 'Tables Migrated', value: '500+' },
      ],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'ML Feature Store',
      subtitle: 'Feature Management Platform',
      description: 'Developed a feature store enabling data scientists to discover, share, and serve ML features. Reduced model training time and improved feature consistency across teams.',
      image: 'gradient3',
      tags: ['Python', 'Redis', 'PostgreSQL', 'FastAPI'],
      metrics: [
        { label: 'Features', value: '1000+' },
        { label: 'Teams', value: '5' },
        { label: 'Serving Latency', value: '<10ms' },
      ],
      links: {
        demo: '#',
        github: '#',
      },
    },
  ];

  const gradients: Record<string, string> = {
    gradient1: 'from-blue-600/30 via-purple-600/20 to-pink-600/30',
    gradient2: 'from-emerald-600/30 via-teal-600/20 to-cyan-600/30',
    gradient3: 'from-orange-600/30 via-amber-600/20 to-yellow-600/30',
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d1e29d]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#d1e29d]/5 rounded-full blur-[120px]" />

      <div className="section-container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d1e29d]/10 border border-[#d1e29d]/30 mb-4">
            <Sparkles className="w-4 h-4 text-[#d1e29d]" />
            <span className="text-xs text-[#d1e29d] uppercase tracking-wider">Featured Work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Selected{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of data engineering solutions I&apos;ve built, from real-time 
            streaming pipelines to cloud data platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`project-card h-full flex flex-col transition-all duration-500 ${
                hoveredIndex === index ? 'scale-[1.02]' : ''
              }`}>
                {/* Image/Visual Area */}
                <div className={`relative h-48 overflow-hidden rounded-t-xl bg-gradient-to-br ${gradients[project.image]}`}>
                  {/* Abstract Pattern */}
                  <div className="absolute inset-0 opacity-30">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute bg-white/10"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          width: `${Math.random() * 80 + 40}px`,
                          height: '1px',
                          transform: `rotate(${Math.random() * 360}deg)`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Metrics Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0a0a0a] to-transparent">
                    <div className="flex gap-4">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                          <div className="text-lg font-bold text-[#d1e29d]">{metric.value}</div>
                          <div className="text-[10px] text-gray-400 uppercase">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Glow */}
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 bg-[#d1e29d]/10 animate-pulse" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <div className="mb-4">
                    <p className="text-xs text-[#d1e29d] mb-1">{project.subtitle}</p>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#d1e29d] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-400 mb-6 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-[#0a0a0a] border border-[#3d3d3d] text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.links.demo}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#0a0a0a] bg-[#d1e29d] rounded-lg hover:bg-[#c5d78a] transition-colors"
                    >
                      Live Demo
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.links.github}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white border border-[#3d3d3d] rounded-lg hover:border-[#d1e29d] hover:text-[#d1e29d] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-[#d1e29d]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="inline-flex items-center gap-2 px-6 py-3 border border-[#3d3d3d] text-white rounded-lg hover:border-[#d1e29d] hover:bg-[#d1e29d]/5 transition-all duration-300 group">
            View All Projects
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
