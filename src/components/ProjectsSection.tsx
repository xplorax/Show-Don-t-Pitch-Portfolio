import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Sparkles, Check, X, TrendingUp } from 'lucide-react';
import { PROJECTS, DEPARTMENTS } from '../data';
import { ProjectItem } from '../types';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web-dev' | 'digital-marketing' | 'email-marketing'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.departmentId === activeFilter);

  return (
    <section id="projects" className="py-24 bg-[#faf9f5] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-200/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl text-left">
            <span className="font-mono text-xs text-emerald-800 uppercase tracking-widest bg-emerald-50/80 px-4 py-1.5 rounded-full border border-emerald-100 font-semibold">
              Selected Case Studies
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-950 tracking-tight mt-4 mb-4">
              Tested implementations that secure consistent sales.
            </h2>
            <p className="font-sans text-emerald-900/70 text-base font-light leading-relaxed">
              If you are willing to invest in custom engineering, our 21-day sprint is designed for your brand. If your goal is to find superficial shortcuts or generic templates, we are not a fit. Every case study here represents proven, custom solutions that eliminate platform bottlenecks, improve checkout persuasion, and drive consistent revenue. This is real-world performance based on real customer behavior, not marketing assumptions.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-stone-100 p-1.5 rounded-full border border-stone-200/60 w-fit">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2 rounded-full font-sans text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-emerald-900 text-white shadow-sm'
                  : 'text-emerald-800 hover:text-emerald-950 hover:bg-stone-200/50'
              }`}
            >
              All Works
            </button>
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveFilter(dept.id)}
                className={`px-5 py-2 rounded-full font-sans text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                  activeFilter === dept.id
                    ? 'bg-emerald-900 text-white shadow-sm'
                    : 'text-emerald-800 hover:text-emerald-950 hover:bg-stone-200/50'
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative rounded-3xl overflow-hidden bg-white border border-stone-200/80 hover:border-gold-500/40 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                {/* Image Container */}
                <div className="w-full aspect-[4/3] overflow-hidden relative border-b border-stone-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Category Badge overlay */}
                  <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-stone-200/80 font-mono text-[10px] text-emerald-850 uppercase tracking-widest font-bold shadow-xs">
                    {project.category}
                  </div>
                </div>

                {/* Content area */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-emerald-950 group-hover:text-gold-600 transition-colors mb-3">
                      {project.title}
                    </h3>
                    <p className="font-sans text-emerald-900/70 text-sm leading-relaxed mb-6 font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Stats (if available) */}
                  {project.stats && (
                    <div className="grid grid-cols-2 gap-4 border-t border-stone-100 pt-5 mb-6">
                      {project.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="flex flex-col">
                          <span className="font-display font-bold text-xl text-gold-600">
                            {stat.value}
                          </span>
                          <span className="font-sans text-[11px] text-emerald-850/65 tracking-wider uppercase font-semibold">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-auto">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="font-mono text-xs text-gold-600 hover:text-gold-700 tracking-wider flex items-center gap-1.5 transition-colors group/link cursor-pointer font-bold"
                    >
                      <span>VIEW PROJECT STUDY</span>
                      <ExternalLink size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </button>
                    <span className="font-mono text-[10px] text-emerald-800/40 font-semibold">
                      CASE 0{idx + 1}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Case Study Detailed Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-emerald-950/30 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="relative bg-white border border-stone-200 rounded-3xl max-w-2xl w-full shadow-2xl z-10 overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="overflow-y-auto p-6 sm:p-10">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full border border-stone-200 hover:border-emerald-800 text-emerald-800 hover:text-emerald-950 transition-colors z-20 cursor-pointer bg-white/85"
                  aria-label="Close project"
                >
                  <X size={18} />
                </button>

                {/* Cover Image in Modal */}
                <div className="w-full aspect-video rounded-2xl overflow-hidden border border-stone-150 mb-8 relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Header */}
                <div className="mb-6">
                  <span className="font-mono text-xs text-gold-600 uppercase tracking-widest block font-bold mb-2">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-emerald-950 leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Overview Card */}
                <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 mb-8">
                  <h4 className="font-mono text-[11px] text-gold-600 uppercase tracking-widest font-bold mb-2">Project Brief</h4>
                  <p className="font-sans text-emerald-900/80 text-sm leading-relaxed font-light">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Case Study Details - Challenger/Solution structure */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h5 className="font-display font-bold text-base text-emerald-950 mb-3 flex items-center gap-1.5">
                      <span className="text-gold-600">•</span> The Challenge
                    </h5>
                    <p className="font-sans text-emerald-900/70 text-xs leading-relaxed font-light">
                      {selectedProject.challenge || 'The client struggled with heavy template bloat, resulting in high load times, low search rankings, and declining conversion ratios. They needed a secure, custom-branded interface that reflected premium authority.'}
                    </p>
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-base text-emerald-950 mb-3 flex items-center gap-1.5">
                      <span className="text-gold-600">•</span> Our Strategy
                    </h5>
                    <p className="font-sans text-emerald-900/70 text-xs leading-relaxed font-light">
                      {selectedProject.strategy || 'We developed a fully custom responsive storefront using React and Tailwind, decoupling the data store via headless CMS APIs to optimize core Web Vitals.'}
                    </p>
                  </div>
                </div>

                {/* Key Deliverables & Stats */}
                <div className="border-t border-stone-200 pt-6">
                  <h5 className="font-mono text-xs text-gold-600 uppercase tracking-widest mb-4 flex items-center gap-1.5 font-bold">
                    <TrendingUp size={12} />
                    Verified Outcomes & Deliverables
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {(selectedProject.outcomes || [
                      'Completed full migration within 21 days.',
                      'Aesthetic branding kit and typography pairings applied.',
                      '100% responsive test coverage across devices.',
                      'Full ownership and repository access handed off.',
                    ]).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check size={12} className="text-gold-600 shrink-0" />
                        <span className="font-sans text-xs text-emerald-900/80 font-light">{item}</span>
                      </div>
                    ))}
                  </div>

                  {selectedProject.stats && (
                    <div className="flex flex-wrap gap-6 bg-gold-50 border border-gold-100 rounded-xl p-4">
                      {selectedProject.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="flex flex-col pr-6 last:pr-0 last:border-0 border-r border-gold-200">
                          <span className="font-display font-bold text-2xl text-gold-600">
                            {stat.value}
                          </span>
                          <span className="font-sans text-[10px] text-emerald-900/60 tracking-wider uppercase font-semibold">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 bg-stone-50 border-t border-stone-200 flex items-center justify-between shrink-0">
                <span className="font-sans text-xs text-emerald-900/50 font-semibold">Requires 3-Week Setup Sprint</span>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-full bg-emerald-900 hover:bg-emerald-950 text-white font-sans font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  Request Similar Solution
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
