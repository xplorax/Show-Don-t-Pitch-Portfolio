import React, { useState } from 'react';
import { Mail, Sparkles, Twitter, Instagram, Linkedin, ArrowRight, MessageCircle } from 'lucide-react';
import { LOGO_IMAGE_URL } from './Navbar';

export const Footer: React.FC = () => {
  const [imgFailed, setImgFailed] = useState(false);
  return (
    <footer className="bg-[#faf9f5] border-t border-stone-200 relative pt-16 overflow-hidden">
      {/* Pre-footer Call to Action Banner */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-white border border-stone-200 overflow-hidden text-center sm:text-left shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Subtle background graphics */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(193,147,36,0.03)_0%,transparent_50%)] pointer-events-none" />
          <div className="absolute top-12 left-12 w-48 h-48 bg-gold-200/5 blur-3xl rounded-full pointer-events-none" />

          <div className="max-w-xl">
            <span className="font-mono text-xs text-emerald-800 uppercase tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100 w-fit mb-4 inline-block font-bold">
              SDP SPRINT PROTOCOL
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-emerald-950 tracking-tight mb-4">
              Secure your 21-day execution sprint.
            </h3>
            <p className="font-sans text-emerald-900/70 text-sm sm:text-base font-light leading-relaxed">
              Do not waste months dealing with slow, bloated agencies. Secure your custom technical stack, visual brand identity, and tested acquisition systems under our unified execution framework.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 shrink-0">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-emerald-900 hover:bg-emerald-950 text-white font-sans font-bold text-sm uppercase tracking-wider shadow-sm transition-all duration-200 flex items-center gap-2 group w-full sm:w-auto justify-center cursor-pointer"
            >
              <span>Initialize Project</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-full border border-stone-200 hover:border-emerald-800 bg-white text-emerald-800 hover:text-emerald-950 font-sans font-bold text-sm uppercase tracking-wider transition-all duration-200 w-full sm:w-auto text-center cursor-pointer"
            >
              Learn Framework
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-stone-200 pb-16 relative z-10 text-left">
        {/* Column 1: Branding & Blurb */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <a href="#home" className="flex items-center gap-2 group w-fit">
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
                <div className="w-9 h-9 rounded-full bg-emerald-900 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  SDP
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-emerald-950 tracking-wider text-xs leading-tight">
                    SHOW, DON'T PITCH
                  </span>
                  <span className="font-mono text-[8px] text-gold-600 tracking-widest leading-none font-bold">
                    CREATIVE AGENCY
                  </span>
                </div>
              </>
            )}
          </a>
          <p className="font-sans text-emerald-900/70 text-xs sm:text-sm leading-relaxed font-light">
            A boutique, elite creative collective engineering custom web products, strategic advertising funnels, and publisher-grade digital content publications. Established in 2026.
          </p>
          <div className="flex items-center gap-3 mt-2">
            {[
              { icon: <Twitter size={15} />, href: 'https://x.com/showdontpitch', label: 'X (Twitter)' },
              { icon: <Instagram size={15} />, href: 'https://www.instagram.com/showdontpitch/', label: 'Instagram' },
              { icon: <Linkedin size={15} />, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: <MessageCircle size={15} />, href: 'https://wa.me/17056259094', label: 'WhatsApp' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-stone-200 bg-white flex items-center justify-center text-emerald-800 hover:text-gold-600 hover:border-gold-500/30 transition-all"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Navigation */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <h4 className="font-mono text-[10px] text-emerald-800 uppercase tracking-widest font-bold border-b border-stone-200 pb-2">
            Quick Navigation
          </h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            {[
              { name: 'Home', href: '#home' },
              { name: 'Services', href: '#services' },
              { name: 'Projects', href: '#projects' },
              { name: 'SDF Guide', href: '#sdf-guide' },
              { name: 'FAQ', href: '#faq' },
              { name: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-xs text-emerald-900/70 hover:text-gold-600 transition-colors w-fit font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Column 3: Direct Contact channels */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <h4 className="font-mono text-[10px] text-emerald-800 uppercase tracking-widest font-bold border-b border-stone-200 pb-2">
            Director Inquiries
          </h4>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2.5 text-xs text-emerald-900/80 font-medium">
              <Mail size={13} className="text-gold-600 shrink-0" />
              <a href="mailto:inquire@showdontpitch.com" className="hover:text-gold-600 transition-colors">
                inquire@showdontpitch.com
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-xs text-emerald-900/80 font-medium">
              <MessageCircle size={13} className="text-gold-600 shrink-0" />
              <a
                href="https://wa.me/17056259094"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold-600 transition-colors"
              >
                +1 (705) 625-9094 (WhatsApp)
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Operational SLA */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h4 className="font-mono text-[10px] text-emerald-800 uppercase tracking-widest font-bold border-b border-stone-200 pb-2">
            Operational SLA
          </h4>
          <div className="p-4 rounded-xl bg-white border border-stone-200 text-left shadow-2xs">
            <span className="font-mono text-[9px] text-gold-600 uppercase tracking-wider font-bold block mb-1">
              Active Status
            </span>
            <span className="font-display font-bold text-sm text-emerald-950 block mb-2">
              Accepting Partners
            </span>
            <p className="font-sans text-[10px] text-emerald-900/60 leading-relaxed font-light">
              We only onboard 2 clients per month to maintain elite creative director attention.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom copyright and legal */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-900/50 relative z-10 text-left font-medium">
        <span>
          © 2026 Show, Don't Pitch. All rights reserved.
        </span>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-gold-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold-600 transition-colors">Terms of Service</a>
          <span className="text-stone-300">|</span>
          <span className="flex items-center gap-1">
            <Sparkles size={10} className="text-gold-600" />
            <span>SDF 2026</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
