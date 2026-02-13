import { Database, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#skills' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Data Engineering', href: '#' },
        { label: 'Cloud Architecture', href: '#' },
        { label: 'Analytics', href: '#' },
        { label: 'Consulting', href: '#' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/snehavarsha/' },
        { label: 'GitHub', href: 'https://github.com/snehassv' },
        { label: 'Email',  href: 'mailto:snehasriram.contact@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Sneha,%20I%20came%20across%20your%20portfolio...' },
      ],
    },
  ];

  return (
    <footer className="relative py-16 border-t border-[#3d3d3d]/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      <div className="section-container max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#141414] border border-[#3d3d3d]">
                <Database className="w-5 h-5 text-[#d1e29d]" />
              </div>
              <span className="text-lg font-semibold text-white">Sneha Sriram</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              Data Engineer passionate about building scalable data solutions 
              that transform how organizations leverage their data.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>and lots of</span>
              <span className="text-[#d1e29d]">coffee</span>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#d1e29d] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#3d3d3d]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Sneha Sriram. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#141414] border border-[#3d3d3d] text-sm text-gray-400 hover:text-[#d1e29d] hover:border-[#d1e29d]/50 transition-all duration-300 group"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
