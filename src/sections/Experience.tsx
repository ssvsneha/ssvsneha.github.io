import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const experiences = [
    {
      role: 'Data Engineer',
      company: 'General Mills',
      location: 'Minneapolis, MN',
      period: '2024 - Present',
      description: 'Leading data infrastructure initiatives, building real-time analytics pipelines processing 10M+ events daily. Architected cloud-native data platform on GCP reducing costs by 40%.',
      achievements: [
        'Built and optimized 50+ Airflow (Composer) DAGs, reducing pipeline runtime and BigQuery query costs by ~30%',
        'Migrated legacy data warehouse to GCP, improving query performance by 5x',
        'Implemented data quality framework reducing bad data incidents by 90%',
        'Optimized BigQuery datasets and implemented delta-load mechanisms, reducing storage and processing costs by ~25%',
        'Adopted dbt for modular, testable data transformations with CI/CD integration, enhancing pipeline reliability',
        'Mentored peers on SQL, Python, dbt, and AI-assisted development tools like Copilot and Gemini',
      ],
      skills: ['Python', 'SQL', 'BigQuery', 'Airflow (Composer)', 'dbt', 'GCP', 'Salesforce', 'PostgreSQL', 'Terraform','Kubernetes', 'Data Pipeline Optimization', 'Monitoring & Observability'],
    },
    {
      role: 'Data Analyst',
      company: 'General Mills',
      location: 'Minneapolis, MN',
      period: '2023-2024',
      description: 'Analyzed, transformed, and managed enterprise data to support reporting, dashboards, and analytics for cross-functional teams.',
      achievements: [
        'Migrated 60+ operational tables from SAP/HANA, Oracle, and SFTP into GCP, creating enterprise-aligned data models',
        'Developed BigQuery models and optimized SQL queries to support Tableau and Power BI dashboards for stakeholders',
        'Automated data extraction workflows using Unix shell scripting and PowerShell, handling API rate limits and retries',
        'Validated and resolved data discrepancies across multiple sources, improving data accuracy and reliability',
        'Documented data lineage, ownership, and business definitions in Alation, supporting governance and audit readiness',
        'Converted legacy workflows to modern dbt models and integrated them into Airflow pipelines for scalable analytics',
      ],
      skills: ['SQL', 'BigQuery', 'dbt', 'Tableau', 'Power BI', 'Unix/Linux', 'Shell Scripting', 'Data Validation', 'Data Modeling'],
    },
    {
      role: 'Software Engineer',
      company: 'Cerner',
      location: 'India',
      period: '2019 - 2021',
      description: 'Built efficient PL/SQL procedures and Python/Java utilities to handle large-scale patient data.',
      achievements: [
        'Developed and optimized ETL pipelines for patient record creation and management',
        'Implemented PL/SQL procedures, triggers, and complex joins to improve data processing efficiency',
        'Optimized database queries improving response time by 60%',
        'Mentored junior developers and conducted code reviews',
        'Automated repetitive code using Python and Java, reducing manual effort across projects',
        'Created and maintained database schemas using DDL/DML scripts with proper access controls'
      ],
      skills: ['Java', 'SQL', 'PL/SQL', 'Oracle'],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#d1e29d]/5 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="section-container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d1e29d]/10 border border-[#d1e29d]/30 mb-4">
            <Briefcase className="w-4 h-4 text-[#d1e29d]" />
            <span className="text-xs text-[#d1e29d] uppercase tracking-wider">Career Path</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Professional{' '}
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From writing my first lines of code to architecting enterprise data platforms, 
            here&apos;s how my career has evolved.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#3d3d3d] md:-translate-x-px">
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#d1e29d] to-transparent transition-all duration-1000"
              style={{ height: isVisible ? '100%' : '0%', transitionDelay: '0.5s' }}
            />
          </div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.role}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Node */}
                <div 
                  className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 -translate-x-1/2 z-10 ${
                    activeIndex === index 
                      ? 'bg-[#d1e29d] border-[#d1e29d] scale-125' 
                      : 'bg-[#0a0a0a] border-[#3d3d3d]'
                  }`}
                  style={{ top: '24px' }}
                />

                {/* Card */}
                <div 
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <div className={`group relative p-6 rounded-2xl bg-[#141414] border transition-all duration-500 ${
                    activeIndex === index 
                      ? 'border-[#d1e29d]/50 shadow-[0_0_30px_rgba(209,226,157,0.15)]' 
                      : 'border-[#3d3d3d] hover:border-[#3d3d3d]/80'
                  }`}>
                    {/* Glow Effect */}
                    {activeIndex === index && (
                      <div className="absolute inset-0 rounded-2xl bg-[#d1e29d]/5 blur-xl -z-10" />
                    )}

                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#d1e29d] transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[#d1e29d] font-medium">{exp.company}</span>
                          <ChevronRight className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-500 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a0a0a] border border-[#3d3d3d]">
                        <Calendar className="w-3 h-3 text-[#d1e29d]" />
                        <span className="text-xs text-gray-400">{exp.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d1e29d] mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full bg-[#0a0a0a] border border-[#3d3d3d] text-gray-400 hover:border-[#d1e29d]/50 hover:text-[#d1e29d] transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
