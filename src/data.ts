import { Department, ServiceItem, ProjectItem, FAQItem, SDPGuideItem, ProcessStep, TestimonialItem, TeamMember } from './types';

export const DEPARTMENTS: Department[] = [
  {
    id: 'web-dev',
    name: 'Web Development',
    shortDesc: 'We build custom React storefronts and headless CMS solutions that eliminate platform bloat, minimize loading friction, and secure consistent sales.',
    iconName: 'Code',
    accentColor: 'text-gold-400 border-gold-500/30 hover:border-gold-500/80',
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    shortDesc: 'We design direct-response ad campaigns and qualified acquisition funnels to stop customer drop-offs, fix broken attribution, and drive consistent revenue.',
    iconName: 'TrendingUp',
    accentColor: 'text-gold-300 border-gold-400/20 hover:border-gold-400/70',
  },
  {
    id: 'email-marketing',
    name: 'Email Marketing',
    shortDesc: 'We build high-converting automated lifecycle flows, segmentation strategies, and email campaigns that maximize customer lifetime value and drive predictable revenue.',
    iconName: 'Mail',
    accentColor: 'text-gold-200 border-gold-300/10 hover:border-gold-300/60',
  },
];

export const SERVICES: ServiceItem[] = [
  // Web Dev
  {
    id: 'web-prog',
    departmentId: 'web-dev',
    title: 'Custom Web Programming',
    description: 'We write clean, lightweight TypeScript applications to solve performance issues, handle complex workflows, and establish absolute code ownership.',
    iconName: 'Cpu',
    details: [
      'engineered for 100/100 PageSpeed scores to prevent visitor bounce',
      'zero dependency bloat to guarantee extreme runtime efficiency',
      'direct integration with serverless microservices and clean API layers',
      'codebase handed off with full IP ownership and zero recurring agency lock-in'
    ],
  },
  {
    id: 'web-design-dev',
    departmentId: 'web-dev',
    title: 'Website Design & Development',
    description: 'Not template-based skins, but responsive structures built around real customer behavior, high typographic hierarchy, and optimized interactive layout design.',
    iconName: 'Monitor',
    details: [
      'custom visual systems that command immediate brand authority',
      'frictionless interactive components to guide visitors toward conversion',
      'rigorous responsive testing across all device ratios and viewports',
      'typography and layouts engineered to highlight your primary value claims'
    ],
  },
  {
    id: 'shopify-dev',
    departmentId: 'web-dev',
    title: 'Shopify Website Development',
    description: 'We build custom Shopify storefronts designed to bypass heavy app overhead, eliminate checkout hurdles, and drive consistent revenue.',
    iconName: 'ShoppingBag',
    details: [
      'headless Hydrogen architectures or optimized custom liquid themes',
      '1-tap mobile payment integrations including Shop Pay and Apple Pay',
      'objection-handling layout modules positioned directly at checkout gateways',
      'seamless backend links to your ERP and inventory fulfillment systems'
    ],
  },
  {
    id: 'wordpress-dev',
    departmentId: 'web-dev',
    title: 'WordPress Website Development',
    description: 'We decouple WordPress to use it purely as a content engine, feeding a secure, blazing-fast React frontend that protects your brand from common exploits.',
    iconName: 'Globe',
    details: [
      'advanced custom fields configured for simple non-technical updates',
      'eliminated security vulnerabilities by hiding the backend behind static walls',
      'instantaneous route loading that traditional WordPress cannot achieve',
      'zero-downtime database migrations with verified asset integrity'
    ],
  },
  {
    id: 'wix-dev',
    departmentId: 'web-dev',
    title: 'Wix Website Development',
    description: 'We deploy custom Velo JavaScript within Wix Studio to establish advanced database capabilities, elegant member systems, and smooth responsive controls.',
    iconName: 'Layers',
    details: [
      'custom web applications built on top of Wix\'s cloud infrastructure',
      'dynamic database collections paired with custom client-side listings',
      'clean CSS grid configurations that adapt cleanly to desktop and mobile',
      'direct integration with external APIs and payment processor layers'
    ],
  },

  // Digital Marketing
  {
    id: 'social-ads',
    departmentId: 'digital-marketing',
    title: 'Social Media Advertising',
    description: 'Direct-response ad campaigns on Meta, LinkedIn, and TikTok. Not generic vanity impressions, but direct pipeline acquisitions driven by tested creative testing.',
    iconName: 'Megaphone',
    details: [
      'ad copy structured around real buyer desires and validated pain points',
      'rigorous creative testing to identify winning hooks within 72 hours',
      'concentrated audience segmentation using real competitors as targets',
      'transparent attribution setup using Meta Pixel and server-side APIs'
    ],
  },
  {
    id: 'marketing-consulting',
    departmentId: 'digital-marketing',
    title: 'Marketing Strategy Consulting',
    description: 'We audit your existing funnels to identify hidden issues, optimize acquisition metrics, and map out sustainable growth paths.',
    iconName: 'Target',
    details: [
      'comprehensive unit economics audit to guarantee profitable traffic scale',
      'in-depth competitor profiling to uncover market capture opportunities',
      'weekly consultative reviews of your live revenue metrics and ad accounts',
      'structured playbooks designed around practical, proven e-commerce rules'
    ],
  },
  {
    id: 'ebook-marketing',
    departmentId: 'digital-marketing',
    title: 'eBook Marketing & Promotion',
    description: 'We design value-first acquisition funnels to turn cold readers into high-intent buyers through targeted lead-magnet promotion.',
    iconName: 'BookOpen',
    details: [
      'high-converting landing pages built purely to capture verified email leads',
      'automated follow-up email flows to nurture sign-ups into customers',
      'organic and paid promotion strategies for self-publishing channels',
      'direct-response ad campaigns optimized for low lead-acquisition costs'
    ],
  },

  // Email Marketing
  {
    id: 'email-automation',
    departmentId: 'email-marketing',
    title: 'Lifecycle Email Automation',
    description: 'We build high-converting automated flows in Klaviyo and Mailchimp to capture abandoners, welcome new leads, and maximize subscriber lifetime value.',
    iconName: 'Mail',
    details: [
      'multi-stage welcome series engineered for instant lead conversion',
      'high-converting abandoned cart and checkout recovery sequences',
      'automated post-purchase cross-sell and replenishment reminders',
      'advanced subscriber segmentation and behavioral tags'
    ],
  },
  {
    id: 'email-campaigns',
    departmentId: 'email-marketing',
    title: 'Campaign Strategy & Copywriting',
    description: 'Direct-response email campaign creation with high-converting copy, clean high-contrast layouts, and strategic send schedules that drive immediate sales.',
    iconName: 'Send',
    details: [
      'direct-response copy focused on buyer pain points and objections',
      'responsive HTML layouts engineered for clean inbox rendering',
      'A/B split testing on subject lines, preview text, and send times',
      'comprehensive spam score audits to guarantee inbox placement'
    ],
  },
  {
    id: 'email-retention',
    departmentId: 'email-marketing',
    title: 'VIP Retention & List Optimization',
    description: 'We clean unengaged contacts, re-engage inactive subscribers, and launch VIP reward flows to increase 90-day repurchase rates and customer LTV.',
    iconName: 'Target',
    details: [
      'deliverability health audits and domain reputation recovery',
      'automated re-engagement and win-back campaign sequences',
      'VIP tier rewards and exclusive access flow triggers',
      'data-driven cohort retention analysis and revenue reporting'
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  // Web Development (web-dev)
  {
    id: 'proj-1',
    departmentId: 'web-dev',
    title: 'Aura Skincare Headless E-Commerce',
    category: 'Shopify Website Development',
    description: 'We replaced a bloated pre-made template with a custom headless storefront to resolve checkout bottlenecks, eliminate loading friction, and secure consistent sales. This is not a cosmetic skin, but a clean TypeScript platform built on real customer behavior and real-world performance testing.',
    image: 'https://res.cloudinary.com/yxfu3pyp/image/upload/v1785511346/Aura-skincare_case_study_image_rtmyak.png',
    linkText: 'View Storefront Case',
    stats: [
      { label: 'Page Speed Score', value: '99/100' },
      { label: 'Conversion Lift', value: '+42%' },
    ],
    challenge: 'Aura Skincare suffered from high mobile cart abandonment caused by heavy Liquid app scripts, slow server response times, and an unoptimized multi-step checkout.',
    strategy: 'We built a lightweight headless storefront using React, Tailwind CSS, and optimized GraphQL queries to pre-render product pages and eliminate third-party script bloat.',
    outcomes: [
      'Achieved 99/100 Mobile PageSpeed score.',
      'Engineered instant page transitions and zero layout shifts.',
      'Increased mobile checkout completion rate by +42%.',
      'Handed off clean, fully documented codebase.',
    ],
  },
  {
    id: 'proj-2',
    departmentId: 'web-dev',
    title: 'Simstrax Industrial Commerce Platform',
    category: 'Wordpress Website Design',
    description: 'We designed and developed a modern ecommerce experience for Simstrax, an industrial solutions supplier specializing in LED lighting, industrial flooring, workshop equipment, coatings, and facility products. The project focused on improving product discovery, streamlining quotation requests, and creating a more professional digital experience that supports both direct purchases and commercial inquiries.',
    image: 'https://res.cloudinary.com/yxfu3pyp/image/upload/v1785586219/Simstrax_case_study_image_h2f0hh.png',
    linkText: 'View Interactive Portal',
    stats: [
      { label: 'Bounce Rate', value: '-22%' },
      { label: 'Session Duration', value: '4m 12s' },
    ],
    challenge: 'The business offered a wide range of industrial products across multiple categories, making navigation and product discovery difficult for potential customers. The website needed a clearer structure, stronger product presentation, and a more efficient path from browsing to quotation or purchase.',
    strategy: 'We developed a structured ecommerce experience featuring intuitive category navigation, optimized product merchandising, improved search functionality, streamlined quotation pathways, and a responsive design built to support industrial buyers across desktop and mobile devices.',
    outcomes: [
      'Improved product discovery through organized category architecture.',
      'Increased average session duration through enhanced navigation and product exploration.',
      'Optimized quotation and purchase pathways for commercial buyers.',
      'Delivered a responsive ecommerce experience across desktop, tablet, and mobile devices.',
      'Implemented scalable product management for expanding inventory categories.'
    ],
  },
  {
    id: 'proj-3',
    departmentId: 'web-dev',
    title: 'IMARR Collection',
    category: 'Shopify Website Design',
    description: 'IMARR Collection needed a premium Shopify storefront that would reflect the brand\'s calm, intentional lifestyle philosophy while making it easy for customers to discover products across multiple categories. The goal was to create a visually cohesive shopping experience that balanced storytelling, product discovery, and mobile usability without sacrificing performance.',
    image: 'https://res.cloudinary.com/yxfu3pyp/image/upload/v1785513519/Imarr_collection_case_study_image_rmqkxy.png',
    linkText: 'View Wholesale System',
    stats: [
      { label: 'Responsive Experience', value: '100%' },
      { label: 'Average Load Time', value: '2.1s' },
    ],
    challenge: 'The existing online presence lacked a unified shopping experience and did not effectively showcase the brand\'s curated collection of lifestyle products. Navigation, product visibility, and mobile responsiveness needed improvement to support a growing audience while maintaining the brand\'s elegant aesthetic.',
    strategy: 'We designed and developed a custom Shopify experience centered around clean visual hierarchy, intuitive navigation, and conversion focused ecommerce principles. By combining editorial style imagery, strategic collection organization, responsive layouts, and optimized storefront performance, we created a seamless shopping journey across desktop and mobile devices.',
    outcomes: [
      'Achieved 100% responsive test coverage across iOS and Android.',
      'Maintained a sub-2.1 second average page load speed.',
      'Streamlined multi-category browsing and collection filtering.',
      'Integrated custom sticky add-to-cart drawer for mobile shoppers.',
    ],
  },

  // Digital Marketing (digital-marketing)
  {
    id: 'proj-4',
    departmentId: 'digital-marketing',
    title: 'SaaS Customer Acquisition Pipeline',
    category: 'Social Media Advertising',
    description: 'We replaced generic brand-awareness campaigns with a direct-response client pipeline that targets real customer pain points. This is not based on industry assumptions or vague vanity metrics, but driven by rigorous creative testing, structured objection-handling scripts, and server-side conversion APIs.',
    image: 'https://res.cloudinary.com/yxfu3pyp/image/upload/v1785511347/Saas_case_study_image_trcsvo.png',
    linkText: 'View Acquisition Case',
    stats: [
      { label: 'CAC Reduction', value: '-34%' },
      { label: 'New Qualified SQLs', value: '450+' },
    ],
    challenge: 'High Customer Acquisition Costs (CAC) and poor lead quality from generic social ads were draining marketing budget without generating sales-ready prospects.',
    strategy: 'We launched direct-response ad creatives targeting specific software pain points, backed by server-side conversion API tracking and automated qualification funnels.',
    outcomes: [
      'Decreased Customer Acquisition Cost by 34% in 60 days.',
      'Generated 450+ verified Sales Qualified Leads (SQLs).',
      'Implemented Meta & LinkedIn CAPI for accurate tracking.',
      'Created custom video ad script guidelines for internal team.',
    ],
  },
  {
    id: 'proj-5',
    departmentId: 'digital-marketing',
    title: 'Stay Loaded Growth Audit & Scaling',
    category: 'Marketing Strategy Consulting',
    description: 'We audited an apparel store\'s ad accounts to identify hidden issues in audience targeting, optimize unit economics, and restructure their scaling strategy. This is not a set of temporary hacks, but a practical workflow that converted existing traffic into consistent revenue.',
    image: 'https://res.cloudinary.com/yxfu3pyp/image/upload/v1785511346/stay-loaded_case_study_image_ybhtui.png',
    linkText: 'View Scaling Strategy',
    stats: [
      { label: 'Verifiable ROAS', value: '3.2x' },
      { label: 'Average Order Value', value: '+58%' },
    ],
    challenge: 'Inconsistent ad performance and low average order values were capping monthly revenue growth and causing ad spend inefficiency.',
    strategy: 'We conducted a comprehensive account audit, reorganized campaign structures around high-margin bundles, and restructured cart upsell triggers.',
    outcomes: [
      'Scaled verified Return on Ad Spend (ROAS) to 3.2x.',
      'Boosted Average Order Value (AOV) by +58% via dynamic bundles.',
      'Eliminated audience overlap and wasteful retargeting spend.',
      'Established a predictable 21-day creative testing framework.',
    ],
  },
  {
    id: 'proj-6',
    departmentId: 'digital-marketing',
    title: 'The Story On The Plate Lead Funnel',
    category: 'eBook Marketing & Promotion',
    description: 'We built a high-intent acquisition funnel using a researched strategic lead magnet to capture qualified buyer emails at minimal cost. This is not a generic sign-up popup, but a targeted landing page built on real-world buyer desires and tested follow-up email sequences.',
    image: 'https://res.cloudinary.com/yxfu3pyp/image/upload/v1785576340/The_story_on_the_plate_case_study_image_xuspbb.png',
    linkText: 'View Funnel Metrics',
    stats: [
      { label: 'Cost Per Lead', value: '$0.85' },
      { label: 'Lead-to-Sale Rate', value: '18%' },
    ],
    challenge: 'Cold ad traffic was rejecting aggressive direct sales pitches, resulting in skyrocketing impression costs and empty email subscriber lists.',
    strategy: 'We created a value-first lead magnet funnel centered around an authoritative industry eBook, supported by a 5-part automated email nurture sequence.',
    outcomes: [
      'Driven CPL down to $0.85 per qualified lead.',
      'Achieved an 18% lead-to-paid-customer conversion rate.',
      'Collected over 8,500 qualified subscriber emails in month one.',
      'Automated complete delivery and buyer onboarding workflow.',
    ],
  },

  // Email Marketing (email-marketing)
  {
    id: 'proj-7',
    departmentId: 'email-marketing',
    title: 'Anime Collection Klaviyo Flow Architecture',
    category: 'Lifecycle Email Automation',
    description: 'We audited and rebuilt the email automation flows for a luxury apparel brand, replacing generic blast newsletters with behavior-triggered sequences. We implemented multi-stage welcome series, abandoned cart recovery, and VIP win-back logic engineered to convert cold readers into repeat buyers.',
    image: 'https://res.cloudinary.com/yxfu3pyp/image/upload/v1785511346/Anime-collection_case_study_image_tjsygt.png',
    linkText: 'View Email Flow Study',
    stats: [
      { label: 'Attributed Email Revenue', value: '38%' },
      { label: 'Cart Recovery Rate', value: '+24%' },
    ],
    challenge: 'The brand relied heavily on manual email blasts, missing revenue opportunities from unengaged subscribers, abandoned carts, and first-time buyers.',
    strategy: 'We engineered automated Klaviyo lifecycle flows—including dynamic multi-step welcome sequences, abandoned cart triggers, and post-purchase win-back logic.',
    outcomes: [
      'Grew email-attributed revenue to 38% of total store sales.',
      'Increased abandoned cart recovery conversion by +24%.',
      'Automated VIP tier segmentation based on lifetime purchase value.',
      'Improved domain deliverability and inbox placement rates.',
    ],
  },
  {
    id: 'proj-8',
    departmentId: 'email-marketing',
    title: 'Sundae Ice Cream Customer Retention Campaign',
    category: 'E-Commerce Email Marketing',
    description: 'We planned, wrote, designed, and segmented a customer retention email campaign for Sundae Ice Cream, a handcrafted artisan ice cream brand known for small batch flavors, signature sundaes, shakes, and seasonal specials. By combining direct response copywriting, audience segmentation, and visually engaging email design, we helped increase customer engagement, promote repeat purchases, and drive loyalty program participation.',
    image: 'https://res.cloudinary.com/yxfu3pyp/image/upload/v1785581498/Sundae_case_study_image_ke9kkv.png',
    linkText: 'View Campaign Results',
    stats: [
      { label: 'Open Rate Avg', value: '46.2%' },
      { label: 'Generated Campaign Sales', value: '$185K' },
    ],
    challenge: 'Sundae Ice Cream offered a wide range of handcrafted products, seasonal flavors, custom celebration cakes, and a customer rewards program, but lacked a structured email strategy to consistently engage subscribers. Marketing messages were not personalized to different customer groups, resulting in missed opportunities for repeat purchases and customer retention.',
    strategy: 'We developed a segmented email campaign focused on customer engagement, seasonal product promotion, loyalty program growth, and repeat purchases. Each message combined compelling storytelling, product focused visuals, and targeted offers tailored to specific customer segments.',
    outcomes: [
      'Maintained an extraordinary 46.2% average open rate across broadcasts.',
      'Generated $185K in direct campaign revenue during a 14-day promo.',
      'Segmented customer database into Active, VIP, and Re Engagement customer groups.',
      'Designed custom responsive HTML email templates.',
    ],
  },
  {
    id: 'proj-9',
    departmentId: 'email-marketing',
    title: 'Coquette Luxe VIP Retention & Post Purchase Email Engine',
    category: 'Customer Retention & LTV Optimization',
    description: 'We designed and implemented a strategic post purchase email marketing system for Coquette Luxe, a boutique apparel brand known for its graphic T shirts, seasonal collections, and personalized fashion pieces. The retention engine was built to strengthen customer relationships, increase repeat purchases, and maximize customer lifetime value through personalized product recommendations, customer appreciation campaigns, and exclusive VIP offers.',
    image: 'https://res.cloudinary.com/yxfu3pyp/image/upload/v1785584256/Coquetteluxe_case_study_image_blnnvq.png',
    linkText: 'View Retention Engine',
    stats: [
      { label: 'Repeat Purchase Rate', value: '+52%' },
      { label: 'Subscriber LTV', value: '2.8x' },
    ],
    challenge: 'While the brand successfully attracted new customers, many shoppers made a single purchase and did not return. This resulted in lower customer lifetime value and increased pressure on acquiring new customers to sustain growth.',
    strategy: 'We developed a customer retention framework featuring automated post purchase nurturing, personalized product recommendations, seasonal collection promotions, customer appreciation campaigns, and VIP exclusive offers. Every email was designed to reflect the brand\'s feminine aesthetic while encouraging customers to discover new collections and return for future purchases.',
    outcomes: [
      'Increased 90-day repeat order rate by +52%.',
      'Boosted total subscriber Lifetime Value (LTV) by 2.8x.',
      'Reduced customer churn through timely automated check-ins.',
      'Integrated dynamic product recommendations based on past purchases.',
      'Implemented VIP loyalty and exclusive offer campaigns to encourage repeat purchases.'
    ],
  },
];

export const SDP_GUIDE_DEAD: SDPGuideItem[] = [
  {
    id: 'dead-1',
    type: 'dead',
    title: 'Bloated Page Builders & Heavy Monolith Themes',
    subtitle: 'Outdated Web Dev Tactic',
    description: 'Pre-made templates stuffed with unneeded plugins cripple performance, result in low PageSpeed scores, and leak 30% of your traffic before a product even loads.',
    iconName: 'FileWarning',
    replacement: 'Custom React frontends and tailored styling that produce clean static assets and load instantly.',
  },
  {
    id: 'dead-2',
    type: 'dead',
    title: 'Low-Effort Generic AI Content Spam',
    subtitle: 'Outdated Digital Marketing',
    description: 'Copy-paste articles designed to trick search engines fail to convert. Modern buyers immediately identify generic copy and leave.',
    iconName: 'AlertTriangle',
    replacement: 'Deeply researched, strategic digital publications that deliver real practical value and handle common objections.',
  },
  {
    id: 'dead-3',
    type: 'dead',
    title: 'Bland Stock Imagery & Copy-Paste Brand Templates',
    subtitle: 'Outdated Design Standard',
    description: 'Hollow stock photos and pre-built layouts fail to command brand authority. If you look like every other store, buyers treat you as a commodity.',
    iconName: 'ImageOff',
    replacement: 'Bespoke visual identity kits, unified typography systems, and direct-response video edits based on real customer desires.',
  },
];

export const SDP_GUIDE_WORKS: SDPGuideItem[] = [
  {
    id: 'works-1',
    type: 'works',
    title: 'Absolute Page Speed',
    description: 'We build custom React storefronts to eliminate loading friction and stop visitor bounce. Extreme speed is your primary conversion multiplier.',
    iconName: 'Zap',
  },
  {
    id: 'works-2',
    type: 'works',
    title: 'Bespoke Brand Authority',
    description: 'We pair custom typography, high-contrast layouts, and elegant styling to establish immediate visual trust. Authority allows you to command premium prices.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'works-3',
    type: 'works',
    title: 'Direct Value-First Capture',
    description: 'We deploy deeply researched, formatted ebooks and actionable tools to turn cold traffic into qualified buyers before pitching a solution.',
    iconName: 'Gift',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Audit & Strategize',
    duration: 'Days 1–5',
    description: 'We inspect your direct competitors, identify hidden issues in your existing funnels, and select the precise technical stack required to capture consistent sales.',
  },
  {
    step: '02',
    title: 'Bespoke Layout & Design',
    duration: 'Days 6–10',
    description: 'Our creative department establishes your unique visual guidelines, pairing typography and custom layouts based on real user behaviors, not generic presets.',
  },
  {
    step: '03',
    title: 'TypeScript Engineering',
    duration: 'Days 11–15',
    description: 'We compile your custom frontend with clean, modular TypeScript code, eliminating template bloat and building secure interfaces that load instantly.',
  },
  {
    step: '04',
    title: 'Direct-Response Launch',
    duration: 'Days 16–21',
    description: 'We deploy the custom platform, launch your acquisition ad campaigns, configure direct attribution tracking, and begin driving consistent revenue.',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Engagement Models',
    question: 'How do you structure your pricing and project milestones?',
    answer: 'We operate on clear, project-based pricing tied directly to structured delivery checkpoints. Each sprint begins with an agreed statement of work. We do not hide behind vague retainers or billable hours; you pay for completed, tested outcomes.',
  },
  {
    id: 'faq-2',
    category: 'Communication & Timezone',
    question: 'What is your standard communication cadence?',
    answer: 'We run highly structured, asynchronous status updates paired with weekly video syncs. We do not waste your time in endless meetings. You receive clear daily progress checkpoints on our shared development boards.',
  },
  {
    id: 'faq-3',
    category: 'Project Revisions',
    question: 'What is your policy on feedback and design revisions?',
    answer: 'We include up to three structured revision cycles per project phase. This keeps the execution timeline strict, prevents scope creep, and ensures we deploy your custom storefront within the 21-day window.',
  },
  {
    id: 'faq-4',
    category: 'Technical Hand-Off',
    question: 'Do we retain complete ownership of the code and brand assets?',
    answer: 'Yes. Upon project completion and final payment, you receive absolute legal ownership of all assets. This includes the full source code, custom Figma files, and original video media. We hand over the keys completely.',
  },
  {
    id: 'faq-5',
    category: 'Shopify / CMS Management',
    question: 'Will our internal team be able to manage content without code?',
    answer: 'Yes. We configure headless databases and custom fields to allow your team to edit text, upload images, and manage products through a simple visual screen. You get the speed of React without losing content control.',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Elena Rostova',
    clientRole: 'Founder & Head of Brand',
    company: 'Aura Skincare',
    departmentId: 'web-dev',
    projectTitle: 'Headless Shopify Storefront',
    quote: 'Show, Don’t Pitch replaced our bloated pre-made Shopify template with a custom headless React build. Our mobile PageSpeed went from 38 to 99, and checkout completion shot up by +42%. They delivered on time without any fluffy agency excuses.',
    metric: { value: '+42%', label: 'Conversion Lift' },
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 'test-2',
    clientName: 'Marcus Vance',
    clientRole: 'VP of E-Commerce',
    company: 'Sundae Ice Cream',
    departmentId: 'email-marketing',
    projectTitle: 'Customer Retention & Klaviyo Lifecycle',
    quote: 'Our subscriber list was dormant until SDP overhauled our email automation. The segmented post-purchase flows and seasonal product campaigns achieved an extraordinary 46.2% open rate and generated over $185K in direct revenue.',
    metric: { value: '46.2%', label: 'Avg Open Rate' },
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 'test-3',
    clientName: 'Sophia Lin',
    clientRole: 'E-Commerce Director',
    company: 'IMARR Collection',
    departmentId: 'web-dev',
    projectTitle: 'Shopify Storefront Redesign',
    quote: 'IMARR Collection needed a tranquil, high-end online presence that loaded fast on mobile devices. SDP built a bespoke storefront that balanced storytelling, seamless collection filtering, and sub-2.1s page loads across iOS and Android.',
    metric: { value: '2.1s', label: 'Avg Load Time' },
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 'test-4',
    clientName: 'David Sterling',
    clientRole: 'Founder & CEO',
    company: 'Stay Loaded Apparel',
    departmentId: 'digital-marketing',
    projectTitle: 'Growth Audit & Paid Media Scaling',
    quote: 'We were burning ad dollars on broad targeting. SDP audited our ad accounts, restructured our unit economics around high-margin bundles, and scaled our verified ROAS to 3.2x while boosting average order value by +58%.',
    metric: { value: '3.2x', label: 'Verifiable ROAS' },
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 'test-5',
    clientName: 'Camilla Hayes',
    clientRole: 'Marketing Lead',
    company: 'Coquette Luxe',
    departmentId: 'email-marketing',
    projectTitle: 'VIP Retention Email Engine',
    quote: 'Single-purchase buyers were hurting our unit economics. SDP engineered an automated retention sequence with personalized product recommendations and VIP rewards, driving our 90-day repeat purchase rate up by +52%.',
    metric: { value: '+52%', label: 'Repeat Purchase Rate' },
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 'test-6',
    clientName: 'Jonathan Reed',
    clientRole: 'Operations Manager',
    company: 'Simstrax Industrial',
    departmentId: 'web-dev',
    projectTitle: 'WordPress B2B Commerce Platform',
    quote: 'Managing thousands of industrial SKUs used to slow down our sales team. SDP reorganized our catalog architecture, streamlined quote requests, and built a sleek responsive platform for commercial buyers.',
    metric: { value: '100%', label: 'Catalog Efficiency' },
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
  },
];

export const TEAM_MEMBERS_DATA: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Muhammad A. Luqman',
    role: 'SDP Founder & Creative Director',
    specialization: 'Conversion Focused Web Designer',
    bio: 'Muhammad A. Luqman is the Founder of Show Don\'t Pitch, specializing in ecommerce growth through conversion optimization, Meta advertising, sales funnels, and customer psychology, helping businesses build structured systems that improve sales performance.',
    avatarUrl: 'https://res.cloudinary.com/yxfu3pyp/image/upload/v1784140899/Muhammad_Luqman_dg7hvu.png', // We will also render avatar or initial fallback gracefully
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://x.com/showdontpitch',
      email: 'showdontpitch@gmail.com',
    },
  },
  {
    id: 'team-2',
    name: 'Ariyo H. Olaoluwa',
    role: 'Email Marketing & Automation Specialist',
    specialization: 'Conversion Email Marketing',
    bio: 'Ariyo Harry is an experienced Email Marketing Strategist and Founder of Arymax Digital, with over 5 years of experience helping brands unlock hidden revenue through automation, customer retention systems, and conversion focused email campaigns that turn subscribers into loyal, high value customers.',
    avatarUrl: 'https://res.cloudinary.com/yxfu3pyp/image/upload/v1785670539/harry_dvtkpc.jpg',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'showdontpitch@gmail.com',
    },
  },
  {
    id: 'team-3',
    name: 'Shakira Lawrence',
    role: 'Performance Marketing Specialist',
    specialization: 'Social Media Advertising',
    bio: 'Shakira Lawrence is an experienced Performance Marketing Specialist who helps brands scale revenue through high converting social media advertising. By combining audience insights, creative strategy, and data driven optimization, she turns advertising spend into sustainable business growth.',
    avatarUrl: 'https://res.cloudinary.com/yxfu3pyp/image/upload/v1785672153/Shakira_image_yd822h.jpg',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'showdontpitch@gmail.com',
    },
  },
  {
    id: 'team-4',
    name: 'Paul A. Simmons',
    role: 'Full Stack Web Developer',
    specialization: 'Custom Web Programming',
    bio: 'Paul A. Simmons is an experienced Full Stack Growth Developer with over 6 years of expertise building custom web applications and high performing digital platforms. He transforms complex business challenges into conversion focused solutions that drive measurable growth.',
    avatarUrl: 'https://res.cloudinary.com/yxfu3pyp/image/upload/v1785674696/Paul_image_ng14cf.jpg',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'showdontpitch@gmail.com',
    },
  },
];
