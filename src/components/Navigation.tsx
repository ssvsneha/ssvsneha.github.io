import { useState, useEffect } from 'react';
import { Menu, X, Database } from 'lucide-react';

interface NavigationProps {
  scrollY: number;
}

const Navigation = ({ scrollY }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const isScrolled = scrollY > 100;

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#3d3d3d]/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 group"
          >
            <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-[#141414] border border-[#3d3d3d] group-hover:border-[#d1e29d] transition-colors duration-300">
              <Database className="w-5 h-5 text-[#d1e29d]" />
              <div className="absolute inset-0 rounded-lg bg-[#d1e29d]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-lg font-semibold text-white hidden sm:block">
              Portfolio
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  activeSection === item.id
                    ? 'text-[#d1e29d]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#d1e29d]" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[#d1e29d] text-[#0a0a0a] text-sm font-semibold rounded-lg hover:bg-[#c5d78a] transition-all duration-300 hover:shadow-[0_0_20px_rgba(209,226,157,0.4)]"
          >
            Let&apos;s Talk
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-[#141414] border border-[#3d3d3d]"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#3d3d3d]/50 transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-[#d1e29d]/10 text-[#d1e29d]'
                  : 'text-gray-400 hover:text-white hover:bg-[#141414]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full mt-4 px-5 py-3 bg-[#d1e29d] text-[#0a0a0a] text-base font-semibold rounded-lg"
          >
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
