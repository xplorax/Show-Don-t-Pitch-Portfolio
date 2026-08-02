import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles } from 'lucide-react';

// Easily replace this image link with your custom logo URL
export const LOGO_IMAGE_URL = "https://res.cloudinary.com/yxfu3pyp/image/upload/v1784692001/logo_transparent_agwdcz.png";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [imgFailed, setImgFailed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Our Team', href: '#agency' },
    { name: 'SDP Guide', href: '#sdf-guide' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Compute scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

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
    handleScroll(); // Initial check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Thin Gold Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[60] pointer-events-none bg-stone-300/20">
        <div
          className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-amber-300 shadow-[0_0_8px_rgba(209,168,48,0.6)] transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#faf9f5]/80 backdrop-blur-md border-b border-stone-200/60 shadow-sm py-4'
            : 'bg-transparent py-6'
        }`}
      >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo - Replaceable Image */}
        <a href="#home" className="flex items-center gap-2.5 group">
          {!imgFailed && LOGO_IMAGE_URL ? (
            <img
              src={LOGO_IMAGE_URL}
              alt="Show Don't Pitch Logo"
              referrerPolicy="no-referrer"
              onError={() => setImgFailed(true)}
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          ) : (
            <>
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
            </>
          )}
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
    </>
  );
};
