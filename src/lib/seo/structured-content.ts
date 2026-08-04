/** Server-safe FAQ + review content for JSON-LD (must match visible page copy). */

export const HOME_FAQS = [
  {
    question: 'How much time does a typical project take?',
    answer:
      'Most web development and branding projects span between 4 to 8 weeks, depending on the complexity and scope of the engagement.',
  },
  {
    question: 'What is your approach to modern web development?',
    answer:
      'We embrace a headless-first and API-driven architecture, utilizing tools like Next.js, Webflow, or Shopify to ensure high performance and scalability.',
  },
  {
    question: 'How do you communicate during the project?',
    answer:
      'We set up a dedicated Slack channel and hold weekly syncs via Zoom. You will have full visibility into our process.',
  },
  {
    question: 'I have a highly complex AI product. Can you handle it?',
    answer:
      'Absolutely. Our team specializes in AI Agentic features and complex API integrations, turning advanced backend logic into seamless, elegant UIs.',
  },
  {
    question: 'What is your pricing and payment structure?',
    answer:
      'We typically work on a flat-rate milestone basis, requiring 50% upfront to commence work and 50% upon final delivery.',
  },
] as const

export const FAQ_PAGE_FAQS = [
  {
    question: 'How much time does a typical project take?',
    answer:
      'Most custom web development and brand storytelling projects span between 4 to 8 weeks. Highly custom applications with advanced multi-agent integrations can require 10 to 14 weeks from initial diagnostic audit to live deployment.',
  },
  {
    question: 'What is your typical project kickoff workflow?',
    answer:
      'We start with a thorough Landscape Audit of your competitors, page speeds, and technical requirements. Once the Blueprint phase is finalized, we build responsive visual wireframes, moving into pixel-perfect development and edge performance benchmarking.',
  },
  {
    question: 'How do you handle communications and file sharing?',
    answer:
      'We assign a dedicated Slack workspace and hold weekly video reviews. All designs are fully viewable on Figma, and our development logs are regularly pushed to staging environments for active monitoring and testing.',
  },
  {
    question: 'Do you design files in Figma, or code directly?',
    answer:
      'We do both. We build robust layout design systems inside Figma so you can easily visual brand elements, copy blocks, and interactions. Once approved, we build them into clean code using modular React, Webflow, or Shopify modules.',
  },
  {
    question: 'Can you help optimize our Shopify store margins?',
    answer:
      'Yes. We create customized headless e-commerce storefronts using Shopify Storefront API paired with fast CMS systems like Sanity. By caching catalog states globally on Edge networks, we reduce load times, improve search visibility, and increase checkout completions.',
  },
  {
    question: 'What does GMB Map Stack ranking optimization include?',
    answer:
      'Our local SEO maps sequence audits duplicate coordinates, aligns citation naming conventions, configures localized schema data, and structures automated local review processes. This local prominence places your locations in the Top-3 Local Pack, driving real customer walk-ins.',
  },
  {
    question: 'Why do you prefer decoupled and headless development patterns?',
    answer:
      'Decoupled web structures split the presentation layer from the database back-end. This means database operations never lock or delay page visual loads. Performance increases, page weights drop below 200KB, and security is tighter.',
  },
  {
    question: 'I have sensitive databases. How do you protect API keys?',
    answer:
      'We use secure multi-tier architectures where API keys (such as Gemini, Stripe, Salesforce tokens) always live on secluded node servers or serverless routing proxies. They are never sent to the client browser, preventing token exploitation.',
  },
  {
    question: 'How does the sound and animation engine run so smoothly?',
    answer:
      'We avoid heavy video files. Canvas particles, book flips, and brand micro-interactions are written in pure SVG and programmatic vector path coordinates animated via lightweight libraries (like GSAP and Anime.js) operating on GPU threads.',
  },
  {
    question: 'What is your payment and milestone structure?',
    answer:
      'We typically work on a clear milestone structure: 50% upfront to commence initial audits and blueprint visual layouts, and 50% upon final user validation and deployment.',
  },
  {
    question: 'Do you offer post-launch maintenance, hosting, and support?',
    answer:
      'Absolutely. We offer tailored monthly retainer packages starting at $500/month which include security audits, dependency updates, content layout refreshes, and edge-traffic reports.',
  },
] as const

/** Reviews must match visible testimonials on the site (Google review guidelines). */
export const SITE_REVIEWS = [
  {
    author: 'Jenny Wilson',
    jobTitle: 'Vice President',
    reviewBody:
      "The best agency we've worked with so far. They understand our product deeply and integrate elegant features with an incredible eye for detail.",
    ratingValue: 5,
    datePublished: '2025-11-12',
  },
] as const
