import { Department, ServiceItem, ProjectItem, FAQItem, SDFGuideItem, ProcessStep } from './types';

export const DEPARTMENTS: Department[] = [
  {
    id: 'web-dev',
    name: 'Web Development',
    shortDesc: 'Premium custom headless experiences, Shopify solutions, and tailored CMS builds.',
    iconName: 'Code',
    accentColor: 'text-gold-400 border-gold-500/30 hover:border-gold-500/80',
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    shortDesc: 'Strategic ad campaigns, ROI-focused funnels, and data-driven client acquisition.',
    iconName: 'TrendingUp',
    accentColor: 'text-gold-300 border-gold-400/20 hover:border-gold-400/70',
  },
  {
    id: 'content-design',
    name: 'Content & Design',
    shortDesc: 'Captivating eBook publication, bespoke identity design, and engaging video production.',
    iconName: 'Palette',
    accentColor: 'text-gold-200 border-gold-300/10 hover:border-gold-300/60',
  },
];

export const SERVICES: ServiceItem[] = [
  // Web Dev
  {
    id: 'web-prog',
    departmentId: 'web-dev',
    title: 'Custom Web Programming',
    description: 'Bespoke web applications built with React, Vite, and high-performance serverless backends.',
    iconName: 'Cpu',
    details: [
      'Engineered for ultimate page-speed (100/100 Lighthouse scores).',
      'Fully interactive UI components utilizing hardware-accelerated animations.',
      'Integration with robust API layers and serverless microservices.',
      'Comprehensive clean-code typescript implementations.'
    ],
  },
  {
    id: 'web-design-dev',
    departmentId: 'web-dev',
    title: 'Website Design & Development',
    description: 'High-end interactive agency designs fully coded and optimized for premium responsive layout structures.',
    iconName: 'Monitor',
    details: [
      'Interactive design prototypes translated directly into production-ready React.',
      'Tailored UI layouts supporting immersive parallax and subtle scroll animations.',
      'Fully responsive, accessibility-compliant desktop-first precision.',
      'Bespoke visual branding shell containing custom gold and deep forest theme accents.'
    ],
  },
  {
    id: 'shopify-dev',
    departmentId: 'web-dev',
    title: 'Shopify Website Development',
    description: 'Custom Shopify theme customization and headless Shopify Hydrogen setups built for conversion.',
    iconName: 'ShoppingBag',
    details: [
      'Tailored Shopify templates engineered to bypass heavy app bloat.',
      'Bespoke liquid programming and metafield configurations.',
      'Optimized cart flows, high-conversion product landing pages, and instant search integrations.',
      'Seamless ERP and third-party fulfillment platform hookups.'
    ],
  },
  {
    id: 'wordpress-dev',
    departmentId: 'web-dev',
    title: 'WordPress Website Development',
    description: 'Modern, secure, and blazing-fast headless WordPress setups utilizing standard REST APIs.',
    iconName: 'Globe',
    details: [
      'Decoupled architecture: WordPress as a content manager, React as the blazing-fast front-end.',
      'Custom block patterns and ACF (Advanced Custom Fields) structures.',
      'Incredibly robust security setups that eliminate standard WordPress plug-in vulnerabilities.',
      'Automated site migrations with zero downtime.'
    ],
  },
  {
    id: 'wix-dev',
    departmentId: 'web-dev',
    title: 'Wix Website Development',
    description: 'Professional Wix Studio setups leveraging custom Velo code for advanced database interactions.',
    iconName: 'Layers',
    details: [
      'Advanced responsive styling utilizing CSS grid and custom layout containers.',
      'Custom JavaScript programming via Wix Velo API.',
      'Custom database collections, dynamic listing pages, and member area integrations.',
      'Full SEO setup and optimized Google Search Console integration.'
    ],
  },

  // Digital Marketing
  {
    id: 'social-ads',
    departmentId: 'digital-marketing',
    title: 'Social Media Advertising',
    description: 'Meta, LinkedIn, and TikTok campaign funnels built to capture high-value customer acquisitions.',
    iconName: 'Megaphone',
    details: [
      'End-to-end campaign architecture from high-intent ad-copy to landing page setup.',
      'Advanced audience segmentation and algorithmic smart-bidding configuration.',
      'Continuous A/B testing on ad creative formats (video hook variations, headline hooks).',
      'Weekly transparent performance reports with live ROI tracking metrics.'
    ],
  },
  {
    id: 'marketing-consulting',
    departmentId: 'digital-marketing',
    title: 'Marketing Strategy Consulting',
    description: 'Comprehensive market analyses, funnel audits, and execution roadmaps designed to scale your revenue.',
    iconName: 'Target',
    details: [
      'In-depth competitor analysis and identification of untapped market opportunities.',
      'Unit economics and lifetime-value (LTV) planning to guarantee profitable ad spend.',
      'Attribution tracking audits ensuring clean data across Google Analytics & CRM.',
      'Bi-weekly custom advisory sessions with an experienced growth director.'
    ],
  },
  {
    id: 'ebook-marketing',
    departmentId: 'digital-marketing',
    title: 'eBook Marketing & Promotion',
    description: 'Viral launch strategies, email lead generation setups, and Amazon self-publishing campaigns.',
    iconName: 'BookOpen',
    details: [
      'High-converting lead-magnet funnels integrated with automated email nurture flows.',
      'Amazon KDP Kindle marketing strategies and organic category-ranking optimization.',
      'Targeted paid traffic campaigns specifically geared towards high eBook download volume.',
      'Partnership and blogger outreach scripts to secure high-authority review placements.'
    ],
  },

  // Content & Design
  {
    id: 'ebook-creation',
    departmentId: 'content-design',
    title: 'eBook Creation',
    description: 'Expert copywriting, structured lesson plans, and beautifully formatted PDF lead-magnets.',
    iconName: 'FileText',
    details: [
      'Professional ghostwriting, content editing, and chapter structure planning.',
      'Visual interactive PDF layouts with premium typography and gold/emerald styling.',
      'Inclusion of custom charts, custom checklists, and actionable worksheets.',
      'Delivery in editable InDesign format and high-res print-ready/web-ready PDFs.'
    ],
  },
  {
    id: 'graphic-design',
    departmentId: 'content-design',
    title: 'Graphic Design & Identity',
    description: 'Premium branding design, vector assets, and bespoke creative materials to set your brand apart.',
    iconName: 'Sparkles',
    details: [
      'Bespoke brand logo design, guidelines, typography pairings, and rich color system.',
      'Premium social media visual kits and digital asset templates.',
      'Custom vector iconography and hand-crafted graphic assets.',
      'Print-ready physical collateral design (stationery, business cards, merchandise).'
    ],
  },
  {
    id: 'video-editing',
    departmentId: 'content-design',
    title: 'Video Editing & Production',
    description: 'Captivating short-form and corporate video edits designed for retention and conversion.',
    iconName: 'Video',
    details: [
      'Bespoke short-form video editing for TikTok, Reels, and YouTube Shorts (captions, zooms, sound design).',
      'Corporate video pacing, clean color-grading, and high-quality audio mastering.',
      'Dynamic motion graphics overlays and kinetic text effects.',
      'Storyboarding assistance and optimized export parameters for maximum native social quality.'
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    departmentId: 'web-dev',
    title: 'Aura Skincare Headless E-Commerce',
    category: 'Shopify Website Development',
    description: 'A custom, lightning-fast Shopify Hydrogen storefront designed with deep emerald aesthetic backgrounds and glowing gold elements to reflect their premium organic skincare line.',
    image: '/src/assets/images/project_shopify_1783712570032.jpg',
    linkText: 'View Storefront',
    stats: [
      { label: 'Page Speed', value: '99/100' },
      { label: 'Conversion Lift', value: '+42%' },
    ],
  },
  {
    id: 'proj-2',
    departmentId: 'digital-marketing',
    title: 'B2B SaaS Growth Funnel Campaign',
    category: 'Social Media Advertising',
    description: 'Full-funnel LinkedIn and Meta ad strategy targeting tech enterprise buyers, resulting in qualified pipelines through interactive growth blueprints and automated follow-up assets.',
    image: '/src/assets/images/project_campaign_1783712583898.jpg',
    linkText: 'View Case Study',
    stats: [
      { label: 'CAC Reduction', value: '-34%' },
      { label: 'New Qualified SQLs', value: '450+' },
    ],
  },
  {
    id: 'proj-3',
    departmentId: 'content-design',
    title: '"Next-Gen Marketing 2026" Publication',
    category: 'eBook Creation & Launch',
    description: 'A comprehensive lead-generation ebook crafted, styled, and launched for a venture studio. Features custom typography, golden vector accents, and a custom strategic checklist layout.',
    image: '/src/assets/images/project_ebook_1783712597873.jpg',
    linkText: 'View eBook Case',
    stats: [
      { label: 'Lead Downloads', value: '12,500+' },
      { label: 'Pipeline Generated', value: '$1.2M' },
    ],
  },
  {
    id: 'proj-4',
    departmentId: 'web-dev',
    title: 'Apex Venture Capital Web Experience',
    category: 'Web Design & React Build',
    description: 'A bespoke React agency portal utilizing hardware-accelerated grid layouts, smooth interactive background animations, and custom team detail view integrations.',
    image: '/src/assets/images/project_apex_1783712613025.jpg',
    linkText: 'View Interactive Site',
    stats: [
      { label: 'Bounce Rate', value: '-22%' },
      { label: 'Session Duration', value: '4m 12s' },
    ],
  },
];

export const SDF_GUIDE_DEAD: SDFGuideItem[] = [
  {
    id: 'dead-1',
    type: 'dead',
    title: 'Bloated Theme Builders & Monolith WordPress Templates',
    subtitle: 'Outdated Web Dev Tactic',
    description: 'Heavy, plugin-stuffed templates cripple performance, result in 40s PageSpeed scores, and contain critical security vulnerabilities.',
    iconName: 'FileWarning',
    replacement: 'React Headless/Decoupled front-ends and custom Tailwind styling that build clean static assets.',
  },
  {
    id: 'dead-2',
    type: 'dead',
    title: 'Generic AI-Generated Content Spam',
    subtitle: 'Outdated Digital Marketing',
    description: 'Search engines now dynamically filter out low-effort, copy-paste AI blog posts. Audiences immediately close articles with zero authentic value.',
    iconName: 'AlertTriangle',
    replacement: 'Deep Research-backed, highly opinionated, designer-formatted eBooks that offer immediate, actionable value.',
  },
  {
    id: 'dead-3',
    type: 'dead',
    title: 'Bland Stock Photography & Template-Based Branding',
    subtitle: 'Outdated Design Standard',
    description: 'Standard stock images of handshake portraits look hollow. Your potential high-value clients slide past template-driven visual content instantly.',
    iconName: 'ImageOff',
    replacement: 'Bespoke custom graphic assets, premium consistent color identities, and motion-heavy video edits.',
  },
];

export const SDF_GUIDE_WORKS: SDFGuideItem[] = [
  {
    id: 'works-1',
    type: 'works',
    title: 'Ultra-Fast Performance',
    description: 'Blazing speed directly drives lower bounce rates and higher conversion rates. We use Vite and lightweight utility styling to guarantee performance.',
    iconName: 'Zap',
  },
  {
    id: 'works-2',
    type: 'works',
    title: 'Bespoke Visual Trust',
    description: 'High-end color palettes (like rich Emerald paired with metallic Gold) and custom editorial typography establish immediate authority.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'works-3',
    type: 'works',
    title: 'Value-First Lead Magnets',
    description: 'Offering highly informative eBook insights, checklists, and video resources turns cold traffic into enthusiastic buyers.',
    iconName: 'Gift',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover & Strategize',
    duration: 'Days 1–5',
    description: 'We audit your competitors, define target user avatars, outline the conversion paths, and select the precise modern stack.',
  },
  {
    step: '02',
    title: 'Craft & Custom Design',
    duration: 'Days 6–10',
    description: 'Our creative department establishes your unique aesthetic, pairing typography with responsive structural layout designs.',
  },
  {
    step: '03',
    title: 'Develop & Assemble',
    duration: 'Days 11–15',
    description: 'Our development team builds your pixel-perfect solution in TypeScript and integrates CMS or e-commerce databases.',
  },
  {
    step: '04',
    title: 'Launch & ROI Scaling',
    duration: 'Days 16–21',
    description: 'We push the platform live, establish ad campaigns, configure conversion tracking, and begin active marketing delivery.',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Engagement Models',
    question: 'How do you structure your project pricing and delivery?',
    answer: 'We operate primarily on a project-based pricing structure with clearly defined milestones. Each engagement begins with a mutual briefing session and includes a transparent, detailed statement of work. For continuous advisory, we also offer monthly retainer structures.',
  },
  {
    id: 'faq-2',
    category: 'Communication & Timezone',
    question: 'What is your standard communication cadence and timezone support?',
    answer: 'Our core team is available across both Eastern and Western time zones. We conduct weekly alignment syncs via video calls and utilize structured communication hubs to share design iterations and progress live. Daily brief updates keep you constantly informed.',
  },
  {
    id: 'faq-3',
    category: 'Project Revisions',
    question: 'What is your revision policy if changes are requested?',
    answer: 'Every phase of our 3-week framework has a dedicated review gate. We include up to 3 major revision cycles per phase to ensure the final hand-off matches your vision exactly, keeping the timeline strict and highly efficient.',
  },
  {
    id: 'faq-4',
    category: 'Technical Hand-Off',
    question: 'Do you provide full asset hand-off and code access upon completion?',
    answer: 'Absolutely. Upon the final project launch and invoice completion, full legal ownership and repository access are handed over directly to you, including custom Figma designs, raw video assets, and compiled codebases.',
  },
  {
    id: 'faq-5',
    category: 'Shopify / CMS Management',
    question: 'Will my team be able to edit our new Shopify or WordPress site without coding?',
    answer: 'Yes! We configure our Shopify storefronts and WordPress decoupled structures with headless CMS interfaces or highly organized native custom fields. Your team will have a simple, visually rich editing screen to change text, images, and products with ease.',
  },
];
