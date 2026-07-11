import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Github, Linkedin, Twitter, Instagram, Trophy, Users, CheckCircle, MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#faf9f5]">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(193,147,36,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-200/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left column: Typography, blurbs, social */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/80 border border-emerald-100 text-emerald-800 font-mono text-xs tracking-wider mb-6 w-fit font-semibold"
          >
            <Sparkles size={12} className="text-gold-600 animate-spin" />
            <span>ESTABLISHED IN 2026 • DIGITAL ELITE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-emerald-950 tracking-tight leading-none mb-6"
          >
            We build digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-gold-500 to-gold-700">
              masterpieces
            </span>{' '}
            for elite brands.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-emerald-900/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light"
          >
            A high-end creative agency merging elite engineering, conversion-focused digital marketing, and bespoke ebook/content publishing into one seamless brand shell.
          </motion.p>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
          >
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-emerald-900 hover:bg-emerald-950 text-white font-sans font-bold text-base tracking-wide shadow-md shadow-emerald-950/10 hover:shadow-emerald-950/20 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span>Initialize Engagement</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-full border border-stone-200 hover:border-emerald-800 bg-stone-100/40 text-emerald-800 hover:text-emerald-950 font-sans font-semibold text-base tracking-wide text-center transition-all duration-200"
            >
              Explore Departments
            </a>
          </motion.div>

          {/* Social Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex items-center gap-5"
          >
            <span className="font-mono text-xs text-gold-600/70 uppercase tracking-widest font-semibold">Connect:</span>
            <div className="flex items-center gap-3">
              {[
                { icon: <Twitter size={18} />, href: 'https://x.com/showdontpitch', label: 'X (Twitter)' },
                { icon: <Instagram size={18} />, href: 'https://www.instagram.com/showdontpitch/', label: 'Instagram' },
                { icon: <Linkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: <MessageCircle size={18} />, href: 'https://wa.me/17056259094', label: 'WhatsApp' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-stone-200 bg-white flex items-center justify-center text-emerald-800 hover:text-gold-600 hover:border-gold-500 hover:scale-105 transition-all shadow-xs"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column: Image with floating stat badges */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-[360px] aspect-[3/4] rounded-3xl overflow-visible"
          >
            {/* Main Image Frame with luxury gold double border */}
            <div className="absolute inset-0 rounded-3xl border border-gold-500/20 translate-x-3 translate-y-3 pointer-events-none" />
            <div className="w-full h-full rounded-3xl overflow-hidden border border-stone-200/60 bg-stone-100 shadow-xl relative">
              <img
                src="/src/assets/images/hero_avatar_1783712555189.jpg"
                alt="Creative Director Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/15 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Badge 1: Experience */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -left-8 top-12 bg-white/95 backdrop-blur-md border border-stone-200 rounded-2xl p-4 shadow-xl flex items-center gap-3 w-48 hover:border-gold-500 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-gold-100/50 border border-gold-200/50 flex items-center justify-center text-gold-600 shrink-0">
                <Trophy size={18} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-emerald-950 leading-tight">10+ Years</span>
                <span className="font-sans text-[11px] text-emerald-800/60 leading-none font-medium">Elite Industry Rule</span>
              </div>
            </motion.div>

            {/* Floating Badge 2: Happy Clients */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -right-8 bottom-20 bg-white/95 backdrop-blur-md border border-stone-200 rounded-2xl p-4 shadow-xl flex items-center gap-3 w-48 hover:border-gold-500 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-gold-100/50 border border-gold-200/50 flex items-center justify-center text-gold-600 shrink-0">
                <Users size={18} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-emerald-950 leading-tight">250+ Clients</span>
                <span className="font-sans text-[11px] text-emerald-800/60 leading-none font-medium">Globally Empowered</span>
              </div>
            </motion.div>

            {/* Floating Badge 3: Completed Projects */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="absolute left-6 -bottom-6 bg-white/95 backdrop-blur-md border border-stone-200 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2 hover:border-gold-500 transition-colors"
            >
              <CheckCircle size={14} className="text-gold-600" />
              <span className="font-mono text-xs text-emerald-900 font-bold uppercase tracking-wider">98% Satisfaction Rating</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Strip below */}
      <div className="w-full mt-24 border-y border-stone-200/70 bg-[#f3f2ed]/50 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { value: '100% / 100', label: 'Lighthouse PageSpeed Guarantee' },
            { value: 'Over $12M', label: 'Verified Partner Pipeline Generated' },
            { value: '21 Days', label: 'Elite Execution Sprint Strategy' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center border-r last:border-r-0 border-stone-300/40 px-4">
              <span className="font-display font-bold text-3xl sm:text-4xl text-emerald-900 tracking-tight mb-1">
                {stat.value}
              </span>
              <span className="font-sans text-xs sm:text-sm text-emerald-800/60 tracking-wider uppercase font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
