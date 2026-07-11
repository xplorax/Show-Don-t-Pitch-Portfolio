import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { FAQS } from '../data';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  // Group FAQs by category
  const categories = FAQS.reduce((acc, faq) => {
    if (!acc.includes(faq.category)) {
      acc.push(faq.category);
    }
    return acc;
  }, [] as string[]);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#faf9f5] border-t border-stone-200 relative overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold-200/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs text-emerald-800 uppercase tracking-widest bg-emerald-50/80 px-4 py-1.5 rounded-full border border-emerald-100 font-semibold">
            Frequently Answered Concerns
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-emerald-950 tracking-tight mt-4 mb-4">
            Service Framework FAQs.
          </h2>
          <p className="font-sans text-emerald-900/70 text-sm sm:text-base font-light leading-relaxed">
            Transparent explanations on project parameters, cadence, legal ownership, and revisions to guarantee alignment before launching our sprint.
          </p>
        </div>

        {/* FAQs List organized by Category */}
        <div className="flex flex-col gap-12">
          {categories.map((category) => {
            const categoryFaqs = FAQS.filter(f => f.category === category);

            return (
              <div key={category} className="flex flex-col gap-4">
                {/* Category Heading */}
                <div className="flex items-center gap-2 border-b border-stone-200 pb-2 mb-2">
                  <MessageSquare size={13} className="text-emerald-800" />
                  <h3 className="font-mono text-xs text-emerald-800 uppercase tracking-widest font-bold">
                    {category}
                  </h3>
                </div>

                {/* Category Accordion Items */}
                <div className="flex flex-col gap-3">
                  {categoryFaqs.map((faq) => {
                    const isOpen = openId === faq.id;

                    return (
                      <div
                        key={faq.id}
                        className={`rounded-2xl border transition-all duration-300 ${
                          isOpen
                            ? 'bg-white border-gold-500/40 shadow-sm'
                            : 'bg-stone-50/60 border-stone-200/80 hover:border-gold-500/20'
                        }`}
                      >
                        {/* Toggle Button */}
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                          aria-expanded={isOpen}
                        >
                          <span className="font-display font-bold text-sm sm:text-base text-emerald-950 hover:text-gold-600 transition-colors">
                            {faq.question}
                          </span>
                          <span className="p-1 rounded-lg bg-stone-100 border border-stone-200 text-emerald-850 shrink-0 mt-0.5">
                            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          </span>
                        </button>

                        {/* Accordion Answer Content */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-emerald-900/75 leading-relaxed font-light border-t border-stone-100 pt-4">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action footer banner */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-stone-200 text-center relative overflow-hidden shadow-xs">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gold-200/5 blur-2xl rounded-full" />
          <h4 className="font-display font-bold text-lg text-emerald-950 mb-2">Have a question not listed here?</h4>
          <p className="font-sans text-emerald-900/70 text-xs sm:text-sm font-light mb-4">
            Our creative directors are available for custom operational configurations.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-gold-600 hover:text-gold-700 tracking-wider font-bold uppercase transition-colors"
          >
            <span>Ask Our Director Directly</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
