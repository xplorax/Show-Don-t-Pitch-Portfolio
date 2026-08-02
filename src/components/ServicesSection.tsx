import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Sparkles, ArrowUpRight } from 'lucide-react';
import { DEPARTMENTS, SERVICES } from '../data';
import { ServiceItem } from '../types';
import { DynamicIcon } from './DynamicIcon';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Elegant helper to retrieve cohesive color palettes for each pillar
  const getPillarStyle = (deptId: string) => {
    switch (deptId) {
      case 'web-dev': // Pillar I - Tech & Architecture
        return {
          label: 'PILLAR I',
          badgeBg: 'bg-emerald-50',
          badgeBorder: 'border-emerald-100/80',
          badgeText: 'text-emerald-800',
          accentBg: 'bg-emerald-900',
          accentText: 'text-emerald-100',
          hoverBorder: 'hover:border-emerald-500/40 hover:shadow-emerald-950/5',
          iconBg: 'bg-emerald-50/50',
          iconBorder: 'border-emerald-100/50',
          iconColor: 'text-emerald-800',
          groupHoverIconBorder: 'group-hover:border-emerald-500/40 group-hover:text-emerald-600',
          bgGlow: 'bg-emerald-500/5',
          textColor: 'text-emerald-950',
          modalIconBg: 'bg-emerald-50',
          modalIconBorder: 'border-emerald-100',
          btnHover: 'hover:bg-emerald-950',
          badgeLabelBg: 'bg-emerald-900 text-gold-300',
        };
      case 'digital-marketing': // Pillar II - Growth & Lead Acq
        return {
          label: 'PILLAR II',
          badgeBg: 'bg-amber-50',
          badgeBorder: 'border-amber-100/80',
          badgeText: 'text-amber-800',
          accentBg: 'bg-amber-900',
          accentText: 'text-amber-100',
          hoverBorder: 'hover:border-amber-500/40 hover:shadow-amber-950/5',
          iconBg: 'bg-amber-50/50',
          iconBorder: 'border-amber-100/50',
          iconColor: 'text-amber-800',
          groupHoverIconBorder: 'group-hover:border-amber-500/40 group-hover:text-amber-600',
          bgGlow: 'bg-amber-500/5',
          textColor: 'text-amber-950',
          modalIconBg: 'bg-amber-50',
          modalIconBorder: 'border-amber-100',
          btnHover: 'hover:bg-amber-950',
          badgeLabelBg: 'bg-amber-900 text-amber-200',
        };
      case 'email-marketing': // Pillar III - Email Marketing
      default:
        return {
          label: 'PILLAR III',
          badgeBg: 'bg-indigo-50',
          badgeBorder: 'border-indigo-100/80',
          badgeText: 'text-indigo-800',
          accentBg: 'bg-indigo-900',
          accentText: 'text-indigo-100',
          hoverBorder: 'hover:border-indigo-500/40 hover:shadow-indigo-950/5',
          iconBg: 'bg-indigo-50/50',
          iconBorder: 'border-indigo-100/50',
          iconColor: 'text-indigo-800',
          groupHoverIconBorder: 'group-hover:border-indigo-500/40 group-hover:text-indigo-600',
          bgGlow: 'bg-indigo-500/5',
          textColor: 'text-indigo-950',
          modalIconBg: 'bg-indigo-50',
          modalIconBorder: 'border-indigo-100',
          btnHover: 'hover:bg-indigo-950',
          badgeLabelBg: 'bg-indigo-900 text-indigo-200',
        };
    }
  };

  return (
    <section id="services" className="py-24 bg-[#fcfbfa] border-t border-stone-200 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(193,147,36,0.02)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs text-emerald-800 uppercase tracking-widest bg-emerald-50/80 px-4 py-1.5 rounded-full border border-emerald-100 font-semibold">
            Operational Capabilities
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-950 tracking-tight mt-4 mb-6">
            We engineer systems that convert opportunities into consistent revenue.
          </h2>
          <p className="font-sans text-emerald-900/70 text-base font-light leading-relaxed">
            If your strategy is to rely on cheap templates, slow agencies, or unproven assumptions, we are not a fit. If you are ready to identify hidden issues and position your business for sustainable growth, these capabilities are designed for your goals. Slow loading speeds, weak branding structures, and broken funnels destroy your conversion rates. We resolve these bottlenecks through three integrated performance pillars based on real-world customer behavior.
          </p>
        </div>

        {/* 3-Column Grid: One column per department */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {DEPARTMENTS.map((dept, deptIdx) => {
            // Filter services for this department
            const deptServices = SERVICES.filter(s => s.departmentId === dept.id);
            const style = getPillarStyle(dept.id);

            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: deptIdx * 0.1 }}
                className="flex flex-col gap-6"
              >
                {/* Department Header Card */}
                <div className={`p-8 rounded-3xl bg-white border border-stone-200/80 shadow-xs relative overflow-hidden group transition-all duration-300 hover:border-stone-300`}>
                  <div className={`absolute top-0 right-0 w-24 h-24 ${style.bgGlow} blur-2xl rounded-full pointer-events-none`} />
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${style.badgeBg} border ${style.badgeBorder} flex items-center justify-center ${style.iconColor}`}>
                      <DynamicIcon name={dept.iconName} size={22} />
                    </div>
                    <span className={`font-mono text-xs ${style.badgeText} uppercase tracking-widest font-bold`}>
                      {style.label}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-emerald-950 mb-3">
                    {dept.name}
                  </h3>
                  <p className="font-sans text-emerald-900/70 text-sm font-light leading-relaxed">
                    {dept.shortDesc}
                  </p>
                </div>

                {/* Vertical Stack of Service Cards */}
                <div className="flex flex-col gap-4">
                  {deptServices.map((service) => (
                    <div
                      key={service.id}
                      className={`p-6 rounded-2xl bg-stone-50 hover:bg-white border border-stone-200/50 ${style.hoverBorder} hover:shadow-md transition-all duration-300 group flex flex-col justify-between relative overflow-hidden`}
                    >
                      {/* Pillar Sign / Indicator */}
                      <div className={`absolute top-4 right-4 font-mono text-[9px] ${style.badgeText} font-bold tracking-widest ${style.badgeBg} border ${style.badgeBorder} px-2.5 py-0.5 rounded-full select-none`}>
                        {style.label}
                      </div>

                      <div>
                        <div className="flex items-center gap-3.5 mb-4 pr-16">
                          <div className={`w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center ${style.iconColor} ${style.groupHoverIconBorder} transition-all shadow-xs`}>
                            <DynamicIcon name={service.iconName} size={18} />
                          </div>
                          <h4 className={`font-display font-bold text-lg text-emerald-950 group-hover:${style.badgeText} transition-colors`}>
                            {service.title}
                          </h4>
                        </div>
                        <p className="font-sans text-emerald-900/70 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                          {service.description}
                        </p>
                      </div>

                      <button
                        onClick={() => setSelectedService(service)}
                        className={`font-mono text-xs ${style.badgeText} hover:opacity-85 tracking-wider flex items-center gap-1.5 transition-colors group/btn cursor-pointer w-fit self-end font-bold`}
                      >
                        <span>READ PARAMETERS</span>
                        <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal Overlay for Service Details */}
      <AnimatePresence>
        {selectedService && (() => {
          const style = getPillarStyle(selectedService.departmentId);
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-emerald-950/30 backdrop-blur-sm"
              />

              {/* Modal Body */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 250 }}
                className="relative bg-white border border-stone-200 rounded-3xl p-6 sm:p-10 max-w-lg w-full shadow-2xl z-10 overflow-hidden"
              >
                {/* Glowing corner decoration based on active pillar */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${style.bgGlow} blur-3xl rounded-full pointer-events-none`} />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 p-2 rounded-full border border-stone-200 hover:border-emerald-800 text-emerald-800 hover:text-emerald-950 transition-colors cursor-pointer"
                  aria-label="Close details"
                >
                  <X size={18} />
                </button>

                {/* Icon & Category Tag */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${style.modalIconBg} border ${style.modalIconBorder} flex items-center justify-center ${style.iconColor}`}>
                    <DynamicIcon name={selectedService.iconName} size={22} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-gold-600 uppercase tracking-widest leading-none mb-1.5 font-bold flex items-center gap-1.5">
                      <span className={`px-1.5 py-0.5 rounded-sm ${style.badgeLabelBg} text-[8px] font-bold`}>
                        {style.label}
                      </span>
                      {DEPARTMENTS.find(d => d.id === selectedService.departmentId)?.name}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-emerald-950 leading-tight">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                {/* Blurb */}
                <p className="font-sans text-emerald-900/80 text-sm leading-relaxed mb-8 font-light">
                  {selectedService.description}
                </p>

                {/* Deep Parameters Header */}
                <div className="border-t border-stone-200 pt-6">
                  <h4 className="font-mono text-xs text-gold-600 uppercase tracking-widest mb-4 flex items-center gap-1.5 font-bold">
                    <Sparkles size={12} />
                    Execution Parameters
                  </h4>
                  <ul className="flex flex-col gap-3.5">
                    {selectedService.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full ${style.badgeBg} border ${style.badgeBorder} flex items-center justify-center ${style.iconColor} shrink-0 mt-0.5`}>
                          <Check size={11} />
                        </div>
                        <span className="font-sans text-sm text-emerald-900/80 leading-relaxed font-light">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="mt-8 pt-6 border-t border-stone-200 flex justify-end">
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className={`px-6 py-3 rounded-full ${style.accentBg} ${style.btnHover} text-white font-sans font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-1`}
                  >
                    Request Configuration
                  </a>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
};
