import { useEffect, useRef, useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Github, 
  Twitter,
  CheckCircle,
  Loader2
} from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'snehasriram.contact@gmail.com', href: 'mailto:snehasriram.contact@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+1(443) 593-4635', href: 'tel:+14435934635' },
    { icon: MapPin, label: 'Location', value: 'Maryland, US', href: 'https://maps.app.goo.gl/tCju9tsDZWD66kVN7' },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/snehavarsha/' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/snehassv' },
    { icon: Twitter, label: 'Twitter', href: 'https://x.com/GuptaHarini' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      {/* Background Vortex Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-[#d1e29d]/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="section-container max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d1e29d]/10 border border-[#d1e29d]/30 mb-4">
            <Send className="w-4 h-4 text-[#d1e29d]" />
            <span className="text-xs text-[#d1e29d] uppercase tracking-wider">Get in Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Let&apos;s Build the{' '}
            <span className="gradient-text">Future</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss data engineering solutions? 
            I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Contact Info */}
          <div className={`lg:col-span-2 space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#141414] border border-[#3d3d3d] hover:border-[#d1e29d]/50 transition-all duration-300 group"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-[#0a0a0a] flex items-center justify-center group-hover:bg-[#d1e29d]/10 transition-colors">
                    <item.icon className="w-5 h-5 text-gray-400 group-hover:text-[#d1e29d] transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</p>
                    <p className="text-white group-hover:text-[#d1e29d] transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-gray-500 mb-4">Follow me on</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 rounded-lg bg-[#141414] border border-[#3d3d3d] flex items-center justify-center hover:border-[#d1e29d] hover:bg-[#d1e29d]/10 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-[#d1e29d] transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#d1e29d]/10 to-transparent border border-[#d1e29d]/30">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-[#d1e29d]" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#d1e29d] animate-ping" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Available for freelance</p>
                  <p className="text-xs text-gray-400">Open to new opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form onSubmit={handleSubmit} className="relative p-8 rounded-2xl bg-[#141414] border border-[#3d3d3d]">
              {/* Form Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#d1e29d]/5 via-transparent to-[#d1e29d]/5 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#d1e29d]/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-[#d1e29d]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="relative">
                      <label 
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'name' || formState.name 
                            ? 'top-1 text-xs text-[#d1e29d]' 
                            : 'top-1/2 -translate-y-1/2 text-sm text-gray-500'
                        }`}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full pt-6 pb-2 px-4 rounded-lg bg-[#0a0a0a] border border-[#3d3d3d] text-white focus:border-[#d1e29d] transition-all duration-300"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <label 
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'email' || formState.email 
                            ? 'top-1 text-xs text-[#d1e29d]' 
                            : 'top-1/2 -translate-y-1/2 text-sm text-gray-500'
                        }`}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full pt-6 pb-2 px-4 rounded-lg bg-[#0a0a0a] border border-[#3d3d3d] text-white focus:border-[#d1e29d] transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label 
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'message' || formState.message 
                          ? 'top-1 text-xs text-[#d1e29d]' 
                          : 'top-4 text-sm text-gray-500'
                      }`}
                    >
                      Your Message
                    </label>
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={5}
                      className="w-full pt-6 pb-2 px-4 rounded-lg bg-[#0a0a0a] border border-[#3d3d3d] text-white focus:border-[#d1e29d] transition-all duration-300 resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
