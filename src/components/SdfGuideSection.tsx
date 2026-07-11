import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Skull, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Download, 
  Lock, 
  CreditCard, 
  X, 
  Check, 
  ArrowRight, 
  ChevronRight, 
  FileText, 
  AlertCircle,
  TrendingUp,
  Coins,
  ShieldAlert
} from 'lucide-react';

// SDF Guide Data
interface SDFThemeItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

const SHOPIFY_LEAKS: SDFThemeItem[] = [
  {
    id: 'leak-1',
    title: 'Poor Traffic Targeting',
    subtitle: 'Wasted Ad Spend',
    description: 'Driving low-intent, generic cold audiences to an unoptimized site. Running unoptimized traffic results in permanent customer loss and high bounce rates.',
  },
  {
    id: 'leak-2',
    title: 'Lack of Product Page Persuasion',
    subtitle: 'Friction-Heavy Layouts',
    description: 'Using plain descriptive headlines instead of outcome-driven benefits, omitting delivery timelines, and failing to handle common checkout anxieties.',
  },
  {
    id: 'leak-3',
    title: 'No Follow-Up Retention Systems',
    subtitle: 'Zero Automated Recoveries',
    description: 'Failing to establish Klaviyo flow sequences. High-intent buyers add items to their carts and leave, with no browse or checkout recovery triggers.',
  }
];

const STRATEGY_HIGHLIGHTS: SDFThemeItem[] = [
  {
    id: 'high-1',
    title: 'Week 1: Fix the Store First',
    subtitle: 'Eliminate Friction',
    description: 'Implement outcome product headlines, 1-tap checkout (Shop Pay, Apple Pay), minimal checkout forms, and a 3-email automated Klaviyo cart recovery flow.',
  },
  {
    id: 'high-2',
    title: 'Week 2: Drive High-Intent Traffic',
    subtitle: 'Focused Meta Campaigns',
    description: 'Configure Meta Pixel, target competitor brands via Sales campaigns with Advantage+ Audience, and test raw, hook-driven 9-15s action videos.',
  },
  {
    id: 'high-3',
    title: 'Week 3: Compound & Scale',
    subtitle: 'Max Customer Value',
    description: 'Activate visitor retargeting ads, implement 4-hour browse abandonment triggers, and deploy frequently bought together widgets to scale AOV.',
  }
];

const STRATEGY_STEPS = [
  {
    step: 'W1',
    title: 'Fix the Store Prep',
    duration: 'Days 1–7',
    description: 'Optimize page copy, outcome headlines, strip out unnecessary form inputs, deploy trust-indicators, and setup standard Klaviyo flow triggers.'
  },
  {
    step: 'W2',
    title: 'Acquire First Buyers',
    duration: 'Days 8–14',
    description: 'Launch concentrated Meta Ads targeting lifestyle competitor audiences. Force ad traffic straight to product landing pages with strict data-kill rules.'
  },
  {
    step: 'W3',
    title: 'Compound & Scale',
    duration: 'Days 15–20',
    description: 'Activate browse abandonment triggers, deploy custom audience visitor retargeting, and add cross-sell items to boost basket value.'
  },
  {
    step: 'D21',
    title: 'Verify Target ROAS',
    duration: 'Day 21 Benchmarks',
    description: 'Achieve 1.5% to 2.5% conversion rates, recover 10-15% of lost carts, and scale ad campaigns holding a minimum 2x ROAS baseline.'
  }
];

export const SdfGuideSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'free' | 'paid' | null>(null);
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    return localStorage.getItem('sdf_blueprint_unlocked') === 'true';
  });

  // Payment Form States
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [isSubmittingPayment, setIsSubmittingPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState('');

  // Handle Free PDF download
  const downloadFreePdf = () => {
    const markdownContent = `# SHOW, DON'T PITCH (SDF) BRAND AUTHORITY GUIDE
## THE SHOPIFY CONVERSION LEAK AUDIT

### Executive Summary
New Shopify stores generally fail to generate sales for three reasons:
1. Poor traffic targeting (driving unqualified users).
2. A lack of product page persuasion (not explaining the core benefit).
3. No follow-up system for hesitant buyers (letting high-intent carts slip away).

Running an unoptimized store results in permanent customer loss and wasted ad spend. This audit focuses on fixing the store's "leaks" first, moving from a standard 1.5% conversion rate to an optimized 2.5% rate.

**The SDF ROI Metric:**
Optimizing your conversion rate from 1.5% to 2.5% yields a 67% increase in revenue from the exact same traffic.

---

### What's Dead in 2026 (Common Bottlenecks to Avoid)
- **Bloated Theme Builders & Heavy Monolith Plugins:** Heavy templates cripple page load times. Slow stores leak 30% of traffic before users even see a product.
- **Sending Paid Ads Directly to the Homepage:** Homepage traffic suffers from choice-paralysis. High-intent traffic should land directly on dedicated product pages.
- **Bland Stock Photos & Template-Based Branding:** Consumers can smell generic templated layouts instantly. They expect bespoke visual trust, clear layouts, and high-quality unique assets.

---

### Actionable Week 1 Leak Fix Checklist
* [ ] Implement outcome-driven product page headlines that answer: "What does this do for me?"
* [ ] Place a clear, explicit objection handling box and refund policy directly beneath the "Add to Cart" button.
* [ ] Display real-time delivery dates (e.g., "Ships in 1-2 days") transparently on the product page.
* [ ] Provide 4-6 high-quality images per product, showing the item in real-world contexts.
* [ ] Enable Shop Pay, Apple Pay, and Google Pay for frictionless, one-tap mobile checkout.
* [ ] Strip out all unneeded checkout fields.
* [ ] Add a trust strip near the checkout button.

---
Produced by Show, Don't Pitch Creative Agency © 2026
SDF - Show, Don't Pitch`;

    triggerDownload('SDF_Shopify_Leak_Audit_Free.md', markdownContent);
  };

  // Handle Paid PDF download
  const downloadPaidPdf = () => {
    if (!isUnlocked) return;

    const markdownContent = `# SHOW, DON'T PITCH (SDF) BRAND AUTHORITY GUIDE
## THE COMPLETE 21-DAY SHOPIFY EXECUTION BLUEPRINT

An integrated, step-by-step masterclass to launch, optimize, and scale your storefront from $0 to predictable daily revenue in 21 days.

---

### EXECUTIVE SUMMARY & MATH OF SCALE
Unoptimized stores lose money. Moving your store from a standard 1.5% conversion rate to an optimized 2.5% rate yields a 67% increase in revenue from the exact same ad spend.

**The 21-Day Execution Cadence:**
- **Week 1:** Fix the Store Before Anyone Arrives (Prep & Persuasion)
- **Week 2:** Drive Your First Qualified Buyers (Meta Ads Concentrated Sales)
- **Week 3:** Compound, Recover, and Scale (Retargeting, AOV, and Automation)

---

### WEEK 1: FIX THE STORE BEFORE ANYONE ARRIVES
Driving paid traffic to an unoptimized store is an expensive mistake. Week 1 is dedicated to removing conversion friction.

#### 1. Product Page Optimization
* **Outcome-Driven Headlines:** Product headlines must immediately communicate what the product does for the customer, rather than just describing what it is.
* **Objection Handling & Transparency:** Explicitly address the most common buyer objections and state a clear return policy directly below the "Add to Cart" button. Clearly display shipping costs and delivery times (e.g., "Ships in 1–2 days") directly on the product page to avoid checkout surprises.
* **Diverse Imagery:** Provide 4–6 images per product, blending isolated shots with close-ups and contextual, real-world application photos.

#### 2. Frictionless Checkout
* **One-Tap Payments:** Enable Shop Pay, Apple Pay, and Google Pay to capture impulse buyers and reduce hesitation.
* **Form Minimalism:** Strip out all unnecessary checkout fields, leaving only name, email, shipping, and payment.
* **Anxiety Reduction:** Place a trust strip ("Secure Checkout • Easy Returns • Fast Shipping") near the checkout button.

#### 3. Email Automation (Klaviyo Setup)
* **Abandoned Cart Flow:** Implement a 3-email sequence (sent at 1 hour, 24 hours with a 10% discount, and 72 hours with low-stock urgency) to automatically recover 10–15% of lost carts.
* **Subscriber Capture:** Add an email pop-up offering a 10% discount after 8 seconds of browsing, paired with a 2-email welcome sequence to convert sign-ups into buyers.

---

### WEEK 2: DRIVE YOUR FIRST QUALIFIED BUYERS
With your storefront fully optimized, Week 2 centers on a concentrated Meta Ads campaign to establish a data-backed winner.

#### 1. Campaign Structure
* **Meta Pixel Installation:** Crucial for allowing Meta's algorithm to track purchase data accurately.
* **Concentrated Advantage+ Sales Campaign:** Run a single Sales campaign optimized for "Purchase" conversions. Target competitor brands and lifestyle categories, allowing Meta's Advantage+ Audience to expand targeting as it finds buyers.
* **Direct Landing Pages:** Test two creatives (one video, one static/carousel) within a single ad set, sending all traffic directly to the product page—never the homepage.

#### 2. Ad Creative & Copy
* **Raw, Hook-Driven Video:** The primary creative should be a 9–15 second authentic video showing the product in action. It must open mid-motion to stop users from scrolling within the first 2 seconds, featuring clear text overlays for product name and price.
* **Simplified Copy:** Keep ad copy to 2–3 lines maximum, leading with the problem/desire, naming the product, and offering free shipping.

#### 3. Budget & Strict Data Rules
* **Testing Budget:** Start at $15/day for testing, scaling the winning creative by 20% every 2–3 days if the Return on Ad Spend (ROAS) exceeds 2x.
* **Kill Rules:** Stop a creative if it hits $20–$25 with zero Add-to-Carts, or if the Click-Through Rate (CTR) drops below 1% after a $15 spend. If the CTR is high (>1%) but sales are zero, pause ads to fix the product page landing bottleneck.

---

### WEEK 3: COMPOUND, RECOVER, AND SCALE
Week 3 leverages the behavioral data gathered in Week 2 to maximize customer lifetime value and recapture missed opportunities.

#### 1. Retargeting Funnels
* **Launch Meta Retargeting:** Dedicate $5/day to a custom audience of website visitors from the last 14 days (excluding past buyers). Hit them with an objection-handling angle focusing on social proof and free returns.
* **Browse Abandonment Emails:** Trigger automated emails in Klaviyo 4 hours after a visitor views a product but fails to add it to their cart.

#### 2. Average Order Value (AOV) Boost
* **Frequently Bought Together:** Install a cross-sell widget to recommend accessories.
* **Post-Purchase Upsell:** Add a checkout thank-you page upsell offering an exclusive 10–15% discount on related items.

---

### TARGET DAY 21 MILESTONES
- **First Sale:** End of Week 2 (Proves the concept and starts revenue flow).
- **Conversion Rate:** 1.5% - 2.5% benchmark (industry average is 1.8%).
- **Cart Recovery Rate:** 10% - 15% recovered via Klaviyo.
- **Email List Size:** 50 - 200 high-intent subscribers.
- **Meta Ads ROAS:** 2.0x minimum (achieving predictable break-even or profitability).

*(Example: 1,000 visitors at a 2% conversion rate with a $50–$80 average order value translates to $1,000–$1,600 in initial revenue, before factoring in automated cart recovery math.)*

---
Produced by Show, Don't Pitch Creative Agency © 2026
SDF - Show, Don't Pitch`;

    triggerDownload('SDF_21_Day_Shopify_Strategy_Blueprint.md', markdownContent);
  };

  // Direct file browser download trigger
  const triggerDownload = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle Mock Stripe Payment Submit
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentError('');

    if (!email.trim() || !email.includes('@')) {
      setPaymentError('Please provide a valid email address.');
      return;
    }
    if (cardNumber.replace(/\s/g, '').length < 16) {
      setPaymentError('Please provide a valid 16-digit card number.');
      return;
    }
    if (!expiry.trim() || !expiry.includes('/')) {
      setPaymentError('Expiry date is required (MM/YY).');
      return;
    }
    if (cvc.length < 3) {
      setPaymentError('Security code (CVC) is invalid.');
      return;
    }

    setIsSubmittingPayment(true);

    setTimeout(() => {
      setIsSubmittingPayment(false);
      setPaymentSuccess(true);
      setIsUnlocked(true);
      localStorage.setItem('sdf_blueprint_unlocked', 'true');
    }, 2000);
  };

  return (
    <section id="sdf-guide" className="py-24 bg-white relative overflow-hidden border-t border-stone-200">
      {/* Background soft gradients */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-200/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-200/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* SDP EMBLEM LOGO GRAPHIC */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-40 h-40 relative rounded-full p-0.5 border border-gold-500/30 bg-emerald-950/5 flex items-center justify-center shadow-lg overflow-hidden group"
          >
            {/* Dark green background inside */}
            <div className="absolute inset-1 rounded-full bg-[#052e16] border-2 border-gold-600 flex flex-col items-center justify-center relative p-4">
              {/* Gold Star */}
              <div className="absolute top-8 right-10 text-gold-500 text-sm font-bold opacity-90">
                ★
              </div>
              
              {/* Elegant SDP Letters Monogram */}
              <div className="relative w-full h-16 flex items-center justify-center select-none">
                <span className="font-display text-4xl text-gold-500/30 absolute font-black transform scale-[2.2] translate-x-2 -translate-y-1">D</span>
                <span className="font-display text-5xl text-gold-400 font-bold absolute transform -translate-x-3 -translate-y-2">S</span>
                <span className="font-display text-4xl text-gold-400 font-bold absolute transform translate-x-4 translate-y-3">P</span>
              </div>
              
              <span className="font-mono text-[6px] text-gold-200 tracking-[0.25em] uppercase font-bold absolute bottom-6 text-center w-full">
                SHOW, DON'T PITCH
              </span>
            </div>
          </motion.div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs text-emerald-800 uppercase tracking-widest bg-emerald-50/80 px-4 py-1.5 rounded-full border border-emerald-100 font-bold">
            Show, Don't Pitch (SDF) Brand Authority Guide
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-950 tracking-tight mt-5 mb-6">
            The SDF Shopify Conversion System
          </h2>
          <p className="font-sans text-emerald-900/70 text-base sm:text-lg font-light leading-relaxed">
            In 2026, template bloat and generic AI pitches are dead. We build conversions through deep operational fixes first, high-intent traffic second, and retargeting multipliers third. Optimize your conversions to scale revenue.
          </p>
        </div>

        {/* Two-Grid Interactive Guide Selection */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24 items-stretch">
          
          {/* GRID 1: FREE SHOP_CONVERSION AUDIT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-[#faf9f5] border border-stone-200/80 relative overflow-hidden shadow-xs flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/[0.01] blur-3xl rounded-full pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center gap-3.5 mb-8">
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shrink-0">
                  <Skull size={20} />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-red-600 uppercase tracking-widest leading-none mb-1 block font-bold">
                    Week 1 Diagnostics (Free Guide)
                  </span>
                  <h3 className="font-display font-bold text-2xl text-emerald-950">
                    Why E-Commerce Fails
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="font-sans text-emerald-900/70 text-sm leading-relaxed mb-8 font-light">
                Unoptimized stores suffer from heavy conversion leaks. Running paid ad traffic to a broken storefront results in permanent customer loss and wasted ad spend. Fix these 3 fundamental leaks first.
              </p>

              {/* Leaks Items */}
              <div className="flex flex-col gap-5 mb-10">
                {SHOPIFY_LEAKS.map((leak) => (
                  <div key={leak.id} className="p-5 rounded-2xl bg-white border border-stone-150 flex gap-4 items-start shadow-2xs">
                    <div className="p-2 bg-red-50 rounded-lg text-red-500 shrink-0 mt-0.5">
                      <ShieldAlert size={14} />
                    </div>
                    <div>
                      <div className="flex flex-col mb-1">
                        <span className="font-mono text-[9px] text-red-500 uppercase tracking-wider font-bold leading-none mb-1">
                          {leak.subtitle}
                        </span>
                        <h4 className="font-display font-bold text-sm sm:text-base text-emerald-950">
                          {leak.title}
                        </h4>
                      </div>
                      <p className="font-sans text-emerald-900/70 text-xs sm:text-sm leading-relaxed font-light">
                        {leak.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="border-t border-stone-200/80 pt-6 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-mono text-[10px] text-emerald-800 uppercase tracking-widest font-bold">
                FORMAT: MARKDOWN PDF • FREE
              </span>
              <button
                onClick={() => {
                  setActiveModal('free');
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-stone-900 hover:bg-black text-white font-sans font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <FileText size={14} />
                <span>Read & Download Audit</span>
              </button>
            </div>
          </motion.div>

          {/* GRID 2: PAID 21-DAY EXECUTION SPRINT BLUEPRINT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-[#faf9f5] border border-gold-300 relative overflow-hidden shadow-xs flex flex-col justify-between"
          >
            {/* Gold highlight glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold-200/[0.15] blur-3xl rounded-full pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center gap-3.5 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600 shrink-0">
                  {isUnlocked ? <ShieldCheck size={20} className="text-emerald-700" /> : <Lock size={20} />}
                </div>
                <div>
                  <span className="font-mono text-[10px] text-gold-600 uppercase tracking-widest leading-none mb-1 block font-bold">
                    Week 1-3 Playbook {isUnlocked ? '(Unlocked)' : '(Premium Guide)'}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-emerald-950">
                    21-Day Shopify Strategy
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="font-sans text-emerald-900/70 text-sm leading-relaxed mb-8 font-light">
                Our flagship execution blueprint. Moving from a standard 1.5% conversion rate to an optimized 2.5% rate yields a <strong className="text-emerald-950 font-bold">67% increase in revenue</strong> from the exact same traffic spend.
              </p>

              {/* Strategy Features */}
              <div className="flex flex-col gap-5 mb-10">
                {STRATEGY_HIGHLIGHTS.map((high) => (
                  <div key={high.id} className="p-5 rounded-2xl bg-white border border-stone-150 flex gap-4 items-start shadow-2xs">
                    <div className="p-2 bg-emerald-50 rounded-lg text-emerald-800 shrink-0 mt-0.5">
                      <Zap size={14} className="text-gold-600" />
                    </div>
                    <div>
                      <div className="flex flex-col mb-1">
                        <span className="font-mono text-[9px] text-gold-600 uppercase tracking-wider font-bold leading-none mb-1">
                          {high.subtitle}
                        </span>
                        <h4 className="font-display font-bold text-sm sm:text-base text-emerald-950">
                          {high.title}
                        </h4>
                      </div>
                      <p className="font-sans text-emerald-900/70 text-xs sm:text-sm leading-relaxed font-light">
                        {high.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="border-t border-stone-200/80 pt-6 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-mono text-[10px] text-gold-600 uppercase tracking-widest font-bold flex items-center gap-1">
                <Coins size={12} />
                <span>PRICE: $19 USD • {isUnlocked ? 'PAID & UNLOCKED' : 'ONE-TIME'}</span>
              </span>
              <button
                onClick={() => {
                  setActiveModal('paid');
                }}
                className={`w-full sm:w-auto px-6 py-3 rounded-full font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                  isUnlocked 
                    ? 'bg-emerald-900 hover:bg-emerald-950 text-white' 
                    : 'bg-gold-500 hover:bg-gold-600 text-stone-950'
                }`}
              >
                {isUnlocked ? (
                  <>
                    <ShieldCheck size={14} />
                    <span>Read Complete Blueprint</span>
                  </>
                ) : (
                  <>
                    <Lock size={14} />
                    <span>Unlock Full Blueprint ($19)</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

        </div>

        {/* 3-Week Setup Strategy Process Timeline */}
        <div className="border-t border-stone-200 pt-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-[10px] text-emerald-800 uppercase tracking-widest leading-none mb-2 block font-bold">
              The 21-Day Scaling Pathway
            </span>
            <h3 className="font-display text-3xl font-bold text-emerald-950 tracking-tight">
              SDF Implementation Protocol
            </h3>
            <p className="font-sans text-emerald-900/70 text-sm font-light mt-3 leading-relaxed">
              We compress months of agency friction into a sequential, high-speed 21-day execution workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {STRATEGY_STEPS.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-stone-50 hover:bg-white border border-stone-200 hover:border-gold-500/40 hover:shadow-sm transition-all duration-300 relative group"
              >
                {/* Large Background Week Identifier */}
                <div className="absolute -top-6 -right-2 font-display text-6xl font-black text-gold-500/5 select-none group-hover:text-gold-500/10 transition-colors">
                  {step.step}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-3xl font-bold text-gold-600 leading-none">
                    {step.step}
                  </span>
                  <span className="font-mono text-[10px] text-emerald-800 border border-emerald-100 px-2.5 py-1 rounded bg-emerald-50 font-bold uppercase">
                    {step.duration}
                  </span>
                </div>

                <h4 className="font-display font-bold text-lg text-emerald-950 mb-3 group-hover:text-gold-600 transition-colors">
                  {step.title}
                </h4>
                <p className="font-sans text-emerald-900/70 text-xs sm:text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* DOCUMENT READER & OPTIONAL PAYMENT GATEWAY MODAL */}
      <AnimatePresence>
        {activeModal !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="relative bg-white border border-stone-200 rounded-3xl max-w-4xl w-full shadow-2xl z-10 overflow-hidden max-h-[92vh] flex flex-col"
            >
              
              {/* Modal Top Nav Header */}
              <div className="p-5 border-b border-stone-100 flex items-center justify-between bg-stone-50 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-900 text-white flex items-center justify-center font-bold text-xs">
                    SDF
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm sm:text-base text-emerald-950">
                      SDF Brand Authority Library
                    </h3>
                    <p className="font-sans text-[10px] text-emerald-900/50 uppercase tracking-wider font-semibold">
                      Official Show, Don't Pitch Publisher Portal
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModal(null)}
                  className="p-1.5 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 text-stone-500 hover:text-stone-950 transition-colors cursor-pointer"
                  aria-label="Close Portal"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Reader Interface */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-stone-100/50 flex flex-col items-center">
                
                {/* Free Document Reader */}
                {activeModal === 'free' && (
                  <div className="max-w-2xl w-full bg-white border border-stone-200 shadow-sm rounded-2xl p-6 sm:p-10 text-left font-sans">
                    
                    {/* Header Details */}
                    <div className="border-b border-stone-200 pb-6 mb-8 text-center sm:text-left">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                        <span className="font-mono text-[9px] text-emerald-800 uppercase tracking-widest font-bold bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded">
                          Free Public Resource
                        </span>
                        <button
                          onClick={downloadFreePdf}
                          className="font-mono text-[10px] text-gold-600 hover:text-gold-700 font-bold flex items-center gap-1.5 cursor-pointer uppercase tracking-wider border border-gold-200 px-3 py-1 rounded-lg bg-gold-50/50"
                        >
                          <Download size={11} />
                          <span>Download .MD Document</span>
                        </button>
                      </div>
                      <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-emerald-950 leading-tight">
                        Shopify Conversion Leak Audit
                      </h1>
                      <p className="font-mono text-[10px] text-stone-500 mt-2 font-bold uppercase">
                        Published: July 2026 • Lead Architect Audit
                      </p>
                    </div>

                    {/* Document Scrollable Text Content */}
                    <article className="prose prose-sm max-w-none text-stone-800 leading-relaxed space-y-6">
                      <section>
                        <h3 className="font-display font-bold text-base text-emerald-950 border-b border-stone-100 pb-1 mb-2">
                          1. Executive Summary
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-600 font-light">
                          New Shopify stores generally fail to generate sales for three reasons: <strong>poor traffic targeting</strong>, <strong>a lack of product page persuasion</strong>, and <strong>no follow-up system</strong> for hesitant buyers. Running an unoptimized store results in permanent customer loss and wasted advertising budgets.
                        </p>
                        <p className="text-xs sm:text-sm text-stone-600 font-light mt-3">
                          This 21-day strategy fixes the storefront leaks first, introduces qualified buyer traffic second, and compounds the resulting metrics third. Moving from a standard 1.5% conversion rate to an optimized 2.5% rate yields a <strong>67% increase in revenue</strong> from the exact same traffic level.
                        </p>
                      </section>

                      <section>
                        <h3 className="font-display font-bold text-base text-emerald-950 border-b border-stone-100 pb-1 mb-2">
                          2. Diagnostic Leaks to Stop (What's Dead in 2026)
                        </h3>
                        <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-stone-600 font-light">
                          <li>
                            <strong className="text-emerald-950 font-bold">Bloated themes and heavy layout plugins:</strong> Heavy monolithic themes drag site performance down to 30-40 Lighthouse scoring, causing visitors to bounce instantly before they read the value.
                          </li>
                          <li>
                            <strong className="text-emerald-950 font-bold">Ad campaigns hitting homepages directly:</strong> Homepages trigger choice-paralysis. High-intent traffic should land straight on dedicated, persuasive product pages.
                          </li>
                          <li>
                            <strong className="text-emerald-950 font-bold">Bland, flat, stock imagery structures:</strong> Customers expect raw, authentic visual proofs. Simple standard catalog photos look empty and break consumer authority trust.
                          </li>
                        </ul>
                      </section>

                      <section>
                        <h3 className="font-display font-bold text-base text-emerald-950 border-b border-stone-100 pb-1 mb-2">
                          3. Actionable Week 1 Store-Fix Checklist
                        </h3>
                        <div className="space-y-2 text-xs sm:text-sm text-stone-600 font-light mt-4 bg-[#faf9f5] border border-stone-200 p-5 rounded-xl">
                          <div className="flex gap-2.5 items-start">
                            <span className="text-emerald-800 shrink-0 font-bold mt-0.5 font-mono">✓</span>
                            <span><strong>Outcome product page headlines:</strong> Write headers focusing purely on benefits rather than plain sizing data.</span>
                          </div>
                          <div className="flex gap-2.5 items-start">
                            <span className="text-emerald-800 shrink-0 font-bold mt-0.5 font-mono">✓</span>
                            <span><strong>Direct objections layout:</strong> Display explicit return policies and shipping details right below the main checkout button.</span>
                          </div>
                          <div className="flex gap-2.5 items-start">
                            <span className="text-emerald-800 shrink-0 font-bold mt-0.5 font-mono">✓</span>
                            <span><strong>Express checkout buttons:</strong> Activate Shop Pay, Apple Pay, and Google Pay for single-click mobile acquisitions.</span>
                          </div>
                          <div className="flex gap-2.5 items-start">
                            <span className="text-emerald-800 shrink-0 font-bold mt-0.5 font-mono">✓</span>
                            <span><strong>Checkout Minimalism:</strong> Delete any redundant form collections to reduce checkout abandonment.</span>
                          </div>
                        </div>
                      </section>
                    </article>

                    <div className="border-t border-stone-200 pt-8 mt-10 text-center">
                      <p className="font-sans text-[10px] text-stone-400 uppercase font-bold tracking-widest mb-4">
                        Want the full 21-day timeline execution?
                      </p>
                      <button
                        onClick={() => {
                          setActiveModal('paid');
                        }}
                        className="px-6 py-2.5 rounded-full bg-gold-500 hover:bg-gold-600 text-stone-950 font-sans font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer inline-flex items-center gap-1.5 shadow-sm"
                      >
                        <Lock size={12} />
                        <span>Unlock Full 21-Day Blueprint ($19)</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Paid / Unlocked Blueprint Document Reader */}
                {activeModal === 'paid' && (
                  <div className="max-w-2xl w-full bg-white border border-stone-200 shadow-sm rounded-2xl overflow-hidden text-left font-sans flex flex-col">
                    
                    {/* Locked View - Simulated Stripe Payment Portal */}
                    {!isUnlocked && !paymentSuccess ? (
                      <div className="p-8 sm:p-12">
                        <div className="text-center max-w-sm mx-auto flex flex-col items-center mb-8">
                          <div className="w-14 h-14 rounded-full bg-gold-50 border border-gold-200 text-gold-600 flex items-center justify-center mb-4 shadow-2xs">
                            <Lock size={24} />
                          </div>
                          <h2 className="font-display font-extrabold text-2xl text-emerald-950 leading-tight">
                            Strategic Blueprint Locked
                          </h2>
                          <p className="font-sans text-xs text-stone-500 mt-2 font-light">
                            Unlock our premium 21-Day Shopify Execution Guide covering exact Meta Pixel rules, Klaviyo automation triggers, and Day 21 milestones.
                          </p>
                          
                          <div className="mt-4 px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full font-mono text-[10px] text-emerald-800 font-bold uppercase tracking-widest">
                            Price: $19.00 USD
                          </div>
                        </div>

                        {/* Payment Checkout Form Mock */}
                        <form onSubmit={handlePaymentSubmit} className="max-w-md mx-auto flex flex-col gap-5 text-left border border-stone-200 p-6 sm:p-8 rounded-2xl bg-[#faf9f5]">
                          
                          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                            <span className="font-mono text-[10px] text-stone-500 uppercase font-bold tracking-wider">
                              Secure SDP Gateway
                            </span>
                            <div className="flex gap-1 text-stone-400">
                              <CreditCard size={14} />
                            </div>
                          </div>

                          {/* Email input */}
                          <div className="flex flex-col gap-1">
                            <label className="font-mono text-[9px] text-stone-500 uppercase font-bold tracking-widest">
                              Billing Email Address
                            </label>
                            <input
                              type="email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="you@company.com"
                              className="w-full border border-stone-200 focus:border-emerald-800 bg-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-stone-900 outline-none transition-colors"
                            />
                          </div>

                          {/* Card details */}
                          <div className="flex flex-col gap-1">
                            <label className="font-mono text-[9px] text-stone-500 uppercase font-bold tracking-widest">
                              Credit Card Details
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                required
                                maxLength={19}
                                value={cardNumber}
                                onChange={(e) => {
                                  // Simple card format
                                  const val = e.target.value.replace(/\D/g, '').match(/.{1,4}/g)?.join(' ') || '';
                                  setCardNumber(val);
                                }}
                                placeholder="4242 4242 4242 4242"
                                className="w-full border border-stone-200 focus:border-emerald-800 bg-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-stone-900 outline-none transition-colors"
                              />
                            </div>
                          </div>

                          {/* Two Cols for date / cvc */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                              <label className="font-mono text-[9px] text-stone-500 uppercase font-bold tracking-widest">
                                Expiry Date
                              </label>
                              <input
                                type="text"
                                required
                                maxLength={5}
                                value={expiry}
                                onChange={(e) => {
                                  let val = e.target.value.replace(/\D/g, '');
                                  if (val.length > 2) val = val.substring(0, 2) + '/' + val.substring(2, 4);
                                  setExpiry(val);
                                }}
                                placeholder="MM/YY"
                                className="w-full border border-stone-200 focus:border-emerald-800 bg-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-stone-900 outline-none transition-colors text-center"
                              />
                            </div>

                            <div className="flex flex-col gap-1">
                              <label className="font-mono text-[9px] text-stone-500 uppercase font-bold tracking-widest">
                                CVC / CVV
                              </label>
                              <input
                                type="password"
                                required
                                maxLength={4}
                                value={cvc}
                                onChange={(e) => setCvc(e.target.value.replace(/\D/g, ''))}
                                placeholder="•••"
                                className="w-full border border-stone-200 focus:border-emerald-800 bg-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-stone-900 outline-none transition-colors text-center"
                              />
                            </div>
                          </div>

                          {paymentError && (
                            <div className="text-[10px] text-red-500 font-mono flex items-center gap-1">
                              <AlertCircle size={11} />
                              <span>{paymentError}</span>
                            </div>
                          )}

                          <button
                            type="submit"
                            disabled={isSubmittingPayment}
                            className="mt-2 w-full py-3.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-stone-950 font-sans font-bold text-xs uppercase tracking-widest transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                          >
                            {isSubmittingPayment ? (
                              <>
                                <div className="w-3.5 h-3.5 border-2 border-stone-950 border-t-transparent rounded-full animate-spin" />
                                <span>Authorizing Gateway...</span>
                              </>
                            ) : (
                              <>
                                <CreditCard size={13} />
                                <span>Unlock Master Blueprint ($19)</span>
                              </>
                            )}
                          </button>

                          <span className="text-[9px] text-stone-400 font-mono text-center block">
                            🛡️ 256-Bit Encrypted Secure Demo Checkout
                          </span>
                        </form>
                      </div>
                    ) : (
                      
                      // UNLOCKED VIEW: Full Strategy Blueprint Reader
                      <div className="p-6 sm:p-10 font-sans">
                        
                        {/* Blueprint Top Header Details */}
                        <div className="border-b border-stone-200 pb-6 mb-8 text-center sm:text-left">
                          <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                            <span className="font-mono text-[9px] text-emerald-800 uppercase tracking-widest font-bold bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded">
                              Premium Unlocked Copy
                            </span>
                            <button
                              onClick={downloadPaidPdf}
                              className="font-mono text-[10px] text-emerald-800 hover:text-emerald-950 font-bold flex items-center gap-1.5 cursor-pointer uppercase tracking-wider border border-emerald-150 px-3 py-1 rounded-lg bg-emerald-50"
                            >
                              <Download size={11} />
                              <span>Download Complete Blueprint</span>
                            </button>
                          </div>
                          <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-emerald-950 leading-tight">
                            The 21-Day Shopify Execution Blueprint
                          </h1>
                          <p className="font-mono text-[10px] text-stone-500 mt-2 font-bold uppercase">
                            Published: July 2026 • Premium Strategic Framework
                          </p>
                        </div>

                        {/* Full Blueprint Sections */}
                        <div className="prose prose-sm max-w-none text-stone-800 leading-relaxed space-y-8">
                          
                          {/* Executive math */}
                          <section className="p-5 bg-stone-50 border border-stone-200 rounded-xl mb-6">
                            <h4 className="font-display font-bold text-sm text-emerald-950 mb-1">
                              Executive Strategy Summary
                            </h4>
                            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                              New Shopify stores fail due to traffic targeting mismatches, poor product value communication, and absent cart follow-up networks. Moving from a standard 1.5% conversion to an optimized 2.5% rate delivers a <strong>67% revenue scale multiplier</strong> from the exact same spending level.
                            </p>
                          </section>

                          {/* Week 1 */}
                          <section>
                            <h3 className="font-display font-bold text-base text-emerald-950 border-b border-stone-100 pb-1 mb-3">
                              Week 1: Fix the Store Before Anyone Arrives
                            </h3>
                            <div className="space-y-4">
                              <div>
                                <h5 className="font-display font-bold text-xs sm:text-sm text-stone-900 mb-1">
                                  A. Product Page Optimization
                                </h5>
                                <p className="text-xs sm:text-sm text-stone-600 font-light">
                                  • <strong>Outcome-Driven Headlines:</strong> Product copy must focus on outcome states for the customer rather than simple dimensional descriptions.
                                </p>
                                <p className="text-xs sm:text-sm text-stone-600 font-light mt-1.5">
                                  • <strong>Objection Box & Shipping Clarity:</strong> State exact refund rules and real shipping times (e.g. "Ships in 1-2 days") immediately below the CTA button to eliminate cart dropouts.
                                </p>
                                <p className="text-xs sm:text-sm text-stone-600 font-light mt-1.5">
                                  • <strong>Diverse Imagery:</strong> Provide 4-6 product imagery files blending isolated, close-up, and real context photography.
                                </p>
                              </div>
                              
                              <div>
                                <h5 className="font-display font-bold text-xs sm:text-sm text-stone-900 mb-1">
                                  B. Frictionless Checkout Prep
                                </h5>
                                <p className="text-xs sm:text-sm text-stone-600 font-light">
                                  • <strong>1-Tap Payments:</strong> Activate Apple Pay, Google Pay, and Shop Pay.
                                </p>
                                <p className="text-xs sm:text-sm text-stone-600 font-light mt-1.5">
                                  • <strong>Form Minimalism:</strong> Strip out all non-essential input fields to speed mobile checkouts.
                                </p>
                              </div>

                              <div>
                                <h5 className="font-display font-bold text-xs sm:text-sm text-stone-900 mb-1">
                                  C. Klaviyo Automation Triggers
                                </h5>
                                <p className="text-xs sm:text-sm text-stone-600 font-light">
                                  • <strong>Abandoned Cart Sequence:</strong> Activate a 3-step recovery flow (Step 1 sent at 1 hour; Step 2 at 24 hours with a 10% discount; Step 3 at 72 hours pushing low-stock alerts). Automatically recovers 10-15% of lost carts.
                                </p>
                              </div>
                            </div>
                          </section>

                          {/* Week 2 */}
                          <section>
                            <h3 className="font-display font-bold text-base text-emerald-950 border-b border-stone-100 pb-1 mb-3">
                              Week 2: Acquire High-Intent Buyers
                            </h3>
                            <div className="space-y-4">
                              <p className="text-xs sm:text-sm text-stone-600 font-light">
                                With conversion friction eliminated, launch dedicated paid campaigns to identify winner variables.
                              </p>
                              <div>
                                <h5 className="font-display font-bold text-xs sm:text-sm text-stone-900 mb-1">
                                  A. Campaign Structure
                                </h5>
                                <p className="text-xs sm:text-sm text-stone-600 font-light">
                                  • <strong>Advantage+ Sales:</strong> Deploy a concentrated Sales objective ad campaign set directly towards "Purchase" triggers. Target competitors and lifestyle groups.
                                </p>
                                <p className="text-xs sm:text-sm text-stone-600 font-light mt-1.5">
                                  • <strong>Destination:</strong> Always send ad audiences directly to product pages, never to broad collections or the store homepage.
                                </p>
                              </div>
                              <div>
                                <h5 className="font-display font-bold text-xs sm:text-sm text-stone-900 mb-1">
                                  B. Ad Content & Rules
                                </h5>
                                <p className="text-xs sm:text-sm text-stone-600 font-light">
                                  • <strong>Scroll-Stopping Video:</strong> Use 9-15s authentic video opens mid-motion with clear overlays. Keep body copy to 2-3 clean text lines.
                                </p>
                                <p className="text-xs sm:text-sm text-stone-600 font-light mt-1.5">
                                  • <strong>Strict Kill Rules:</strong> Shut off creatives if they touch $20-$25 with zero checkout additions, or if Click-Through Rate (CTR) falls below 1% after $15 spend.
                                </p>
                              </div>
                            </div>
                          </section>

                          {/* Week 3 */}
                          <section>
                            <h3 className="font-display font-bold text-base text-emerald-950 border-b border-stone-100 pb-1 mb-3">
                              Week 3: Retargeting & AOV Compounders
                            </h3>
                            <div className="space-y-4">
                              <p className="text-xs sm:text-sm text-stone-600 font-light">
                                Leverage early pixel audiences to maximize basket values and recapture browsing sessions.
                              </p>
                              <div>
                                <h5 className="font-display font-bold text-xs sm:text-sm text-stone-900 mb-1">
                                  A. Meta Retargeting Multipliers
                                </h5>
                                <p className="text-xs sm:text-sm text-stone-600 font-light">
                                  • Deploy a $5/day retargeting budget specifically to website visitors over the last 14 days, excluding actual buyers. Push testimonials and free returns.
                                </p>
                              </div>
                              <div>
                                <h5 className="font-display font-bold text-xs sm:text-sm text-stone-900 mb-1">
                                  B. Cart & Browse Recovery
                                </h5>
                                <p className="text-xs sm:text-sm text-stone-600 font-light">
                                  • Set up Klaviyo 4-hour browse abandonment triggers. Add "Frequently Bought Together" widgets on product pages, and a post-purchase checkout upsell offering 10-15% discounts.
                                </p>
                              </div>
                            </div>
                          </section>

                          {/* Benchmarks Table */}
                          <section className="pt-4">
                            <h3 className="font-display font-bold text-base text-emerald-950 border-b border-stone-100 pb-1 mb-4">
                              Day 21 Target Benchmarks
                            </h3>
                            <div className="overflow-x-auto">
                              <table className="w-full text-left text-xs text-stone-600 border-collapse">
                                <thead>
                                  <tr className="border-b border-stone-200 bg-stone-50 font-mono text-[9px] text-stone-500 uppercase tracking-wider">
                                    <th className="p-3">Metric Target</th>
                                    <th className="p-3">Day 21 Benchmark</th>
                                    <th className="p-3">Strategic Significance</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-100 font-light">
                                  <tr>
                                    <td className="p-3 font-semibold text-emerald-950">First Completed Sale</td>
                                    <td className="p-3">End of Week 2</td>
                                    <td className="p-3">Confirms audience demand and payment setups.</td>
                                  </tr>
                                  <tr>
                                    <td className="p-3 font-semibold text-emerald-950">Store Conversion Rate</td>
                                    <td className="p-3">1.5% – 2.5%</td>
                                    <td className="p-3">Meets or beats the 1.8% global industry benchmark.</td>
                                  </tr>
                                  <tr>
                                    <td className="p-3 font-semibold text-emerald-950">Klaviyo Cart Recovery</td>
                                    <td className="p-3">10% – 15% recovered</td>
                                    <td className="p-3">Generates high-margin automated sales with $0 ad cost.</td>
                                  </tr>
                                  <tr>
                                    <td className="p-3 font-semibold text-emerald-950">Meta Ads Target ROAS</td>
                                    <td className="p-3">2.0x minimum baseline</td>
                                    <td className="p-3">Establishes stable break-even scaling buffers.</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </section>

                        </div>

                        <div className="border-t border-stone-200 pt-8 mt-10 flex justify-between items-center">
                          <p className="font-mono text-[9px] text-stone-400 font-bold uppercase">
                            Show, Don't Pitch Strategic Publishing
                          </p>
                          <button
                            onClick={downloadPaidPdf}
                            className="px-5 py-2 rounded-lg border border-stone-200 hover:bg-stone-50 text-stone-700 hover:text-stone-950 font-mono text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                          >
                            <Download size={12} />
                            <span>Save PDF Blueprint</span>
                          </button>
                        </div>

                      </div>
                    )}

                  </div>
                )}

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
