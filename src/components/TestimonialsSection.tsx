import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, TrendingUp, CheckCircle2, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';
import { DepartmentId } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<DepartmentId | 'all'>('all');
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const filteredTestimonials = selectedDept === 'all'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter(item => item.departmentId === selectedDept);

  const categories: { id: DepartmentId | 'all'; label: string }[] = [
    { id: 'all', label: 'All Reviews' },
    { id: 'web-dev', label: 'Web Development' },
    { id: 'digital-marketing', label: 'Digital Marketing' },
    { id: 'email-marketing', label: 'Email Marketing' },
  ];

  const handleNextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrevSlide = () => {
    setActiveSlideIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-[#faf9f5] relative overflow-hidden border-b border-stone-200/60">
      {/* Decorative background grid subtle overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/5 border border-stone-900/10 mb-4"
          >
            <Sparkles size={12} className="text-gold-600" />
            <span className="font-mono text-xs text-stone-700 uppercase tracking-widest font-semibold">
              VERIFIED CLIENT OUTCOMES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl text-emerald-950 font-bold tracking-tight leading-tight mb-4"
          >
            What E-Commerce Leaders Say About Working With SDP
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-stone-600 text-base sm:text-lg font-light leading-relaxed"
          >
            No industry fluff or vanity metrics. Real feedback from brand founders, e-commerce directors, and marketing leaders who measured success in verifiable revenue.
          </motion.p>

          {/* Department Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 mt-8"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedDept(cat.id);
                  setActiveSlideIndex(0);
                }}
                className={`px-4 py-2 rounded-full font-sans text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedDept === cat.id
                    ? 'bg-emerald-950 text-white shadow-xs'
                    : 'bg-stone-200/60 text-stone-700 hover:bg-stone-300/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDept}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredTestimonials.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white/90 backdrop-blur-xs rounded-2xl p-7 border border-stone-200/80 shadow-xs hover:shadow-md hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* Background decorative quote icon */}
                <Quote size={56} className="absolute top-6 right-6 text-stone-100 group-hover:text-gold-100/60 transition-colors pointer-events-none" />

                <div>
                  {/* Top Header: Rating & Metric Badge */}
                  <div className="flex items-center justify-between mb-5 flex-wrap gap-2 relative z-10">
                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={15} className="fill-gold-500 text-gold-500" />
                      ))}
                    </div>

                    {/* Metric Highlight */}
                    {item.metric && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 font-mono text-xs text-emerald-900 font-bold">
                        <TrendingUp size={12} className="text-emerald-700" />
                        <span>{item.metric.value}</span>
                        <span className="text-[10px] text-emerald-800/80 uppercase font-normal">{item.metric.label}</span>
                      </div>
                    )}
                  </div>

                  {/* Project Tag */}
                  {item.projectTitle && (
                    <div className="font-mono text-[10px] uppercase tracking-wider text-gold-700 font-bold mb-3">
                      Project: {item.projectTitle}
                    </div>
                  )}

                  {/* Testimonial Quote */}
                  <p className="font-sans text-stone-700 text-sm leading-relaxed font-light mb-6 relative z-10 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Client Profile Footer */}
                <div className="pt-4 border-t border-stone-100 flex items-center gap-3 relative z-10">
                  {item.avatarUrl ? (
                    <img
                      src={item.avatarUrl}
                      alt={item.clientName}
                      className="w-11 h-11 rounded-full object-cover border border-stone-200 shadow-xs shrink-0"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-emerald-950 text-gold-400 font-bold text-sm flex items-center justify-center border border-stone-200 shrink-0">
                      {item.clientName.charAt(0)}
                    </div>
                  )}

                  <div className="overflow-hidden">
                    <h4 className="font-display font-bold text-emerald-950 text-sm truncate flex items-center gap-1.5">
                      <span>{item.clientName}</span>
                      <CheckCircle2 size={13} className="text-emerald-700 shrink-0" title="Verified Client" />
                    </h4>
                    <p className="font-sans text-xs text-stone-500 font-light truncate">
                      {item.clientRole} &bull; <span className="font-semibold text-stone-700">{item.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-emerald-950 via-emerald-900 to-stone-900 p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg border border-emerald-800/40"
        >
          <div className="max-w-xl">
            <span className="font-mono text-xs text-gold-400 uppercase tracking-widest font-bold">
              READY TO BUILD YOUR STORE’S AUTHORITY?
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold mt-2 mb-2 text-white">
              Let’s Turn Your Store Leaks Into Verifiable Revenue
            </h3>
            <p className="font-sans text-stone-300 text-xs sm:text-sm font-light">
              We review your store performance, identify checkout friction, and outline an actionable 21-day execution plan tailored to your business goals.
            </p>
          </div>

          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full bg-gold-500 hover:bg-gold-400 text-stone-950 font-sans font-bold text-xs uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer shadow-md hover:shadow-gold-500/20"
          >
            Request Your Store Audit
          </a>
        </motion.div>
      </div>
    </section>
  );
};
