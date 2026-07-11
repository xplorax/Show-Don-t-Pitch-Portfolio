import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'SDF Guide', href: '#sdf-guide' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detector
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'bg-[#faf9f5]/95 backdrop-blur-md border-b border-stone-200/60 shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center text-gold-300 font-display font-bold text-sm shadow-sm shadow-emerald-950/10 group-hover:scale-105 transition-transform">
            SDP
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-emerald-950 tracking-wider text-sm leading-tight">
              SHOW, DON'T PITCH
            </span>
            <span className="font-mono text-[9px] text-gold-600 tracking-widest leading-none font-medium">
              CREATIVE AGENCY
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-sans text-sm font-medium tracking-wide transition-colors duration-200 ${
                activeSection === link.href.substring(1)
                  ? 'text-gold-600 font-bold'
                  : 'text-emerald-800 hover:text-emerald-950'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-emerald-900 hover:bg-emerald-950 text-white font-sans font-semibold text-sm tracking-wide shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-1.5"
          >
            <Sparkles size={14} className="text-gold-300 animate-pulse" />
            Get In Touch
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-emerald-900 hover:text-gold-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-[#f4f3ed] border-b border-stone-200 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-sans text-base py-2 border-b border-stone-200/60 transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'text-gold-600 font-bold pl-2 border-l-2 border-l-gold-500'
                      : 'text-emerald-800 hover:text-emerald-950'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 w-full py-3 rounded-full bg-emerald-900 hover:bg-emerald-950 text-white font-sans font-semibold text-center tracking-wide shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles size={16} className="text-gold-300" />
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
