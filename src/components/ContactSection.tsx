import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageCircle, Instagram, Check, Send, Sparkles, AlertCircle } from 'lucide-react';
import { ContactFormData, DepartmentId } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    department: 'web-dev',
    message: '',
    serviceInterest: 'Custom Web Programming',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const servicesMap: Record<DepartmentId | 'other', string[]> = {
    'web-dev': [
      'Custom Web Programming',
      'Website Design & Development',
      'Shopify Website Development',
      'WordPress Website Development',
      'Wix Website Development',
    ],
    'digital-marketing': [
      'Social Media Advertising',
      'Marketing Strategy Consulting',
      'eBook Marketing & Promotion',
    ],
    'email-marketing': [
      'Lifecycle Email Automation',
      'Campaign Strategy & Copywriting',
      'VIP Retention & List Optimization',
    ],
    'other': ['Other Operational Inquiry'],
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      // If department changed, update default service interest
      if (name === 'department') {
        updated.serviceInterest = servicesMap[value as DepartmentId | 'other'][0];
      }
      return updated;
    });

    if (errors[name]) {
      setErrors((prev) => {
         const copy = { ...prev };
         delete copy[name];
         return copy;
      });
    }
  };

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message content is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate backend submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        department: 'web-dev',
        message: '',
        serviceInterest: 'Custom Web Programming',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden border-t border-stone-200">
      {/* Background spotlights */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gold-200/2 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-200/2 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Contact details & instructions */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-mono text-xs text-emerald-800 uppercase tracking-widest bg-emerald-50/80 px-4 py-1.5 rounded-full border border-emerald-100 w-fit mb-6 font-bold">
              Establish Connection
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-950 tracking-tight mb-6">
              A structured 21-day sprint to launch your custom storefront.
            </h2>
            <p className="font-sans text-emerald-900/70 text-base font-light leading-relaxed mb-10">
              If you are willing to dedicate the attention required to eliminate what is not working and implement what is missing, we are ready to partner with you. If your strategy is to rely on cheap templates or slow agency feedback loops, we are not a fit. Submit your operational objectives below, and our lead architect will review your parameters within our 24-hour window to propose a tested execution pathway.
            </p>

            {/* Direct Channels */}
            <div className="flex flex-col gap-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-mono text-[10px] text-gold-600 uppercase tracking-wider leading-none mb-1 font-bold">Direct Inquiries</h4>
                  <a href="mailto:showdontpitch@gmail.com" className="font-display text-lg text-emerald-950 hover:text-gold-600 transition-colors font-bold">
                    showdontpitch@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                  <Instagram size={18} />
                </div>
                <div>
                  <h4 className="font-mono text-[10px] text-gold-600 uppercase tracking-wider leading-none mb-1 font-bold">Director Instagram</h4>
                  <a 
                    href="https://www.instagram.com/showdontpitch/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="font-display text-lg text-emerald-950 hover:text-gold-600 transition-colors font-bold"
                  >
                    @showdontpitch
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <h4 className="font-mono text-[10px] text-gold-600 uppercase tracking-wider leading-none mb-1 font-bold">Director WhatsApp</h4>
                  <a 
                    href="https://wa.me/17056259094" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="font-display text-lg text-emerald-950 hover:text-gold-600 transition-colors font-bold"
                  >
                    +1 (705) 625-9094
                  </a>
                </div>
              </div>
            </div>

            {/* SLA indicator */}
            <div className="p-4 rounded-xl bg-gold-50 border border-gold-100 flex items-center gap-2.5">
              <Sparkles size={14} className="text-gold-600 shrink-0 animate-pulse" />
              <span className="font-sans text-xs text-emerald-950 font-medium">
                Average reply time is currently <strong className="text-gold-700">under 3.5 hours</strong>.
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic Form Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#faf9f5] border border-stone-200 shadow-sm relative">
              {/* Form card decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-200/5 blur-3xl rounded-full" />

              {isSubmitted ? (
                /* Success Card */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 px-4 flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-900 flex items-center justify-center text-white shadow-md mb-6">
                    <Check size={32} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-emerald-950 mb-3">Parameters received</h3>
                  <p className="font-sans text-emerald-900/70 text-sm leading-relaxed max-w-sm mb-8 font-light">
                    Our lead architect has received your project parameters and will contact you within 24 hours with a tested execution plan to secure consistent sales.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full border border-emerald-900 hover:bg-emerald-50 text-emerald-900 transition-colors text-xs font-mono tracking-wider cursor-pointer font-bold"
                  >
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </motion.div>
              ) : (
                /* Main Form */
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="text-left mb-2">
                    <h3 className="font-display font-bold text-xl text-emerald-950 mb-1">Configuration Form</h3>
                    <p className="font-sans text-emerald-900/60 text-xs font-light">
                      Define your required operational parameters. All fields are secure.
                    </p>
                  </div>

                  {/* Name field */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="name" className="font-mono text-[10px] text-gold-600 uppercase tracking-widest font-bold">
                      Your Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Alexander Mercer"
                        className={`w-full bg-white border rounded-xl px-4 py-3.5 text-sm text-emerald-950 placeholder-stone-400 outline-none transition-all ${
                          errors.name ? 'border-red-400' : 'border-stone-200 focus:border-emerald-800/60'
                        }`}
                      />
                      {errors.name && (
                        <div className="flex items-center gap-1 text-red-500 text-[10px] mt-1.5 font-mono">
                          <AlertCircle size={10} />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="email" className="font-mono text-[10px] text-gold-600 uppercase tracking-widest font-bold">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. alex@mercerstudio.com"
                        className={`w-full bg-white border rounded-xl px-4 py-3.5 text-sm text-emerald-950 placeholder-stone-400 outline-none transition-all ${
                          errors.email ? 'border-red-400' : 'border-stone-200 focus:border-emerald-800/60'
                        }`}
                      />
                      {errors.email && (
                        <div className="flex items-center gap-1 text-red-500 text-[10px] mt-1.5 font-mono">
                          <AlertCircle size={10} />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Two columns dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Department drop down */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label htmlFor="department" className="font-mono text-[10px] text-gold-600 uppercase tracking-widest font-bold">
                        Select Department
                      </label>
                      <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-stone-200 focus:border-emerald-800/60 rounded-xl px-4 py-3.5 text-sm text-emerald-950 outline-none cursor-pointer transition-colors"
                      >
                        <option value="web-dev">Web Development</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="email-marketing">Email Marketing</option>
                        <option value="other">Other Operational</option>
                      </select>
                    </div>

                    {/* Service Interest dropdown (filtered by selected dept) */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label htmlFor="serviceInterest" className="font-mono text-[10px] text-gold-600 uppercase tracking-widest font-bold">
                        Service Interest
                      </label>
                      <select
                        id="serviceInterest"
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-stone-200 focus:border-emerald-800/60 rounded-xl px-4 py-3.5 text-sm text-emerald-950 outline-none cursor-pointer transition-colors"
                      >
                        {servicesMap[formData.department].map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="message" className="font-mono text-[10px] text-gold-600 uppercase tracking-widest font-bold">
                      Strategic Objectives & Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe your current bottleneck, target metrics, or project scope..."
                        className={`w-full bg-white border rounded-xl px-4 py-3.5 text-sm text-emerald-950 placeholder-stone-400 outline-none resize-none transition-all ${
                          errors.message ? 'border-red-400' : 'border-stone-200 focus:border-emerald-800/60'
                        }`}
                      />
                      {errors.message && (
                        <div className="flex items-center gap-1 text-red-500 text-[10px] mt-1.5 font-mono">
                          <AlertCircle size={10} />
                          <span>{errors.message}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 w-full py-4 rounded-xl bg-emerald-900 hover:bg-emerald-950 text-white font-sans font-bold text-sm uppercase tracking-wider shadow-sm hover:shadow-md disabled:bg-emerald-900/50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Parameters...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Transmit Strategic Parameters</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
