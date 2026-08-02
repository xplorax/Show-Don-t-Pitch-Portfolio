import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Zap, Target } from 'lucide-react';
import { TEAM_MEMBERS_DATA } from '../data';

export const AgencyTeamSection: React.FC = () => {
  return (
    <section id="agency" className="py-24 bg-[#faf9f5] relative overflow-hidden border-b border-stone-200/60">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-gold-200/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-900/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Agency Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/80 border border-emerald-100 text-emerald-800 font-mono text-xs tracking-wider mb-4 w-fit font-semibold"
          >
            <Sparkles size={12} className="text-gold-600" />
            <span>AGENCY PROFILE & SPECIALISTS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl text-emerald-950 font-bold tracking-tight leading-tight mb-4"
          >
            Behind Show, Don’t Pitch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-stone-600 text-base sm:text-lg font-light leading-relaxed"
          >
            We operate as a compact, senior-only collective of engineers, direct-response marketers, and lifecycle strategists. No junior account managers, no bloated overhead-just specialists who build for revenue.
          </motion.p>
        </div>

        {/* Agency Core Ethos Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          <div className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-stone-200/80 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold-200/60 flex items-center justify-center text-gold-700 shrink-0">
              <Zap size={20} />
            </div>
            <div>
              <h4 className="font-display font-bold text-emerald-950 text-base mb-1">Direct Execution</h4>
              <p className="font-sans text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                You work straight with the engineers and strategists building your platform. No communication middle-men.
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-stone-200/80 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-800 shrink-0">
              <Target size={20} />
            </div>
            <div>
              <h4 className="font-display font-bold text-emerald-950 text-base mb-1">Verifiable Metrics</h4>
              <p className="font-sans text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                We tie every sprint deliverable directly to conversion lifts, page speeds, and customer retention metrics.
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-stone-200/80 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-300/60 flex items-center justify-center text-stone-800 shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="font-display font-bold text-emerald-950 text-base mb-1">Zero Retainer Bloat</h4>
              <p className="font-sans text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                Fixed, project-based milestones with transparent scope. You pay for finished, production-ready assets.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Subsection Header: Our Team */}
        <div className="mb-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-stone-200/80 pb-6">
          <div>
            <span className="font-mono text-xs text-gold-600 uppercase tracking-widest font-bold block mb-1">
              THE SPECIALISTS
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-emerald-950 font-bold tracking-tight">
              Our Core Team
            </h3>
          </div>
          <p className="font-sans text-stone-600 text-xs sm:text-sm font-light max-w-md text-center sm:text-right">
            Hover over any profile card to view specialization focus and professional background.
          </p>
        </div>

        {/* Our Team Profile Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS_DATA.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-2xl p-6 border border-stone-200/80 hover:border-gold-500/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle gold glow accent line on top hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Profile Image / Avatar Header */}
                <div className="relative mb-5 overflow-hidden rounded-xl bg-stone-100 aspect-4/3 border border-stone-200/60 group-hover:border-gold-400/40 transition-colors">
                  <img
                    src={member.avatarUrl}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback image if unsplash fails
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                  <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-md bg-stone-950/80 backdrop-blur-xs font-mono text-[10px] text-gold-300 uppercase tracking-wider font-semibold">
                    {member.specialization}
                  </span>
                </div>

                {/* Name & Role */}
                <div className="mb-3">
                  <h4 className="font-display font-bold text-emerald-950 text-lg group-hover:text-gold-700 transition-colors">
                    {member.name}
                  </h4>
                  <p className="font-mono text-xs text-gold-700 font-bold uppercase tracking-wider mt-0.5">
                    {member.role}
                  </p>
                </div>

                {/* Professional Bio */}
                <p className="font-sans text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
