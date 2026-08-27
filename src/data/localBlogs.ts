import type { IBlogPublicDetail, IBlogPublicListItem } from '@/interfaces/blog.interface'
import { countWords, sectionsToPortableText, type InlinePart, type LocalBlogSection } from '@/lib/blog/portable'
import { seedViewsForSlug } from '@/lib/blog/view-seeds'

const L = (t: string, href: string): InlinePart => ({ t, href })

type LocalAuthor = {
  authorName: string
  authorRole: string
  authorAvatarUrl: string
}

const AUTHORS = {
  engineering: {
    authorName: 'Alex Rivera',
    authorRole: 'Principal Engineer',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
  },
  ai: {
    authorName: 'Maya Chen',
    authorRole: 'AI Product Lead',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
  },
  design: {
    authorName: 'Jordan Hale',
    authorRole: 'Design Director',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=200&auto=format&fit=crop',
  },
  growth: {
    authorName: 'Priya Shah',
    authorRole: 'Growth Strategist',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
  },
} as const satisfies Record<string, LocalAuthor>

type LocalBlogSource = {
  slug: string
  title: string
  summary: string
  category: 'Tech' | 'AI' | 'Design' | 'Marketing'
  readTime: string
  tags: string[]
  createdAt: string
  coverImageUrl: string
  featuredOnHome?: boolean
  featuredOnBlogPage?: boolean
  author: LocalAuthor
  faqs: { question: string; answer: string }[]
  relatedServices: { label: string; href: string }[]
  relatedPostSlugs: string[]
  sections: LocalBlogSection[]
}

const LOCAL_BLOG_SOURCES: LocalBlogSource[] = [
  {
    slug: 'nextjs-app-router-seo-core-web-vitals-2026',
    title: 'Next.js App Router SEO in 2026: Metadata, Core Web Vitals, and Rankings That Stick',
    summary:
      'A practical playbook for Next.js 15/16 SEO: metadata, canonical URLs, JSON-LD, Core Web Vitals, and internal linking — written for teams that need Google ranking, not just a Lighthouse screenshot.',
    category: 'Tech',
    readTime: '11 min read',
    tags: [
      'Next.js SEO',
      'App Router',
      'Core Web Vitals',
      'JavaScript SEO',
      'technical SEO',
      'JSON-LD',
      'Google ranking',
    ],
    createdAt: '2026-08-27T08:00:00.000Z',
    coverImageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    featuredOnHome: true,
    featuredOnBlogPage: true,
    author: AUTHORS.engineering,
    relatedServices: [
      { label: 'Next.js development', href: '/services/nextjs-development' },
      { label: 'Technical SEO', href: '/services/seo' },
      { label: 'React development', href: '/services/react-development' },
    ],
    relatedPostSlugs: [
      'headless-cms-sanity-wordpress-shopify-2026',
      'laravel-wordpress-shopify-vs-nextjs-2026',
      'google-business-profile-map-pack-ranking-2026',
    ],
    faqs: [
      {
        question: 'Is Next.js still good for SEO in 2026?',
        answer:
          'Yes. App Router with server-rendered HTML, clean metadata, canonical tags, and JSON-LD is one of the strongest stacks for ranking commercial pages — if you avoid client-only content dumps and duplicate URLs.',
      },
      {
        question: 'What hurts Next.js Google ranking the most?',
        answer:
          'Thin pages, redirecting URLs in the sitemap, competing H1s on the homepage, missing canonicals, and slow Largest Contentful Paint from unoptimized images or client-heavy heroes.',
      },
      {
        question: 'Do I need a headless CMS for Next.js SEO?',
        answer:
          'Not always. Marketing sites can ship MDX or typed local content. Headless CMS (Sanity, Shopify Storefront) helps when editors need to publish without a deploy. The rendering model matters more than the CMS brand.',
      },
    ],
    sections: [
      {
        type: 'p',
        parts: [
          'JavaScript SEO in 2026 is no longer “does Google execute my bundle?” Google already does. The ranking gap is whether your Next.js App Router pages ship unique, crawlable HTML, a single canonical URL, and Core Web Vitals that stay green on mobile. This is the stack we use on ',
          L('Next.js development', '/services/nextjs-development'),
          ' projects at NextCreavo.',
        ],
      },
      {
        type: 'h2',
        text: 'Start with crawlable HTML, not a client island',
      },
      {
        type: 'p',
        parts: [
          'App Router server components should render the H1, intro, FAQs, and internal links in the first HTML response. Client components are for interaction — filters, carousels, forms — not for the copy Google needs to rank. If your “services” copy only appears after hydration, you are gambling with indexing.',
        ],
      },
      {
        type: 'ul',
        items: [
          ['One H1 per template. Directory pages should not steal the same H1 as a service landing.'],
          ['Canonical path per intent. Redirect legacy slugs; never list 3xx URLs in the sitemap.'],
          [
            'Metadata API for title, description, Open Graph, and ',
            L('JSON-LD', '/blog/google-business-profile-map-pack-ranking-2026'),
            ' on every commercial URL.',
          ],
        ],
      },
      {
        type: 'h2',
        text: 'Metadata that wins the click at position 20+',
      },
      {
        type: 'p',
        parts: [
          'Most new sites live between positions 20 and 80 for months. CTR still matters there. Titles under ~60 characters, a brand suffix, and a benefit (“Map Pack”, “App Router SEO”, “hire”) beat keyword stuffing. Pair that with ',
          L('technical SEO', '/services/seo'),
          ' so Search Console impressions can convert into clicks.',
        ],
      },
      {
        type: 'quote',
        text: 'Ranking without a click is a draft. Title, description, and the first 120 words have to match the query the page can actually satisfy.',
      },
      {
        type: 'h2',
        text: 'Core Web Vitals: LCP, INP, CLS on real devices',
      },
      {
        type: 'p',
        parts: [
          'Lighthouse on desktop is not Google ranking. Optimize Largest Contentful Paint with sized images (AVIF/WebP), priority on the hero only, and fewer web fonts. Interaction to Next Paint suffers when GSAP, Three.js, and carousels all boot on first paint — hydrate below the fold. Cumulative Layout Shift dies when images and embeds reserve height.',
        ],
      },
      {
        type: 'p',
        parts: [
          'React Server Components plus a disciplined client boundary is how a ',
          L('React development agency', '/services/react-development'),
          ' ships both motion and SEO. If you need nearshore velocity, see ',
          L('React outsourcing', '/services/react-outsourcing'),
          '.',
        ],
      },
      {
        type: 'h2',
        text: 'Internal links that actually build topical authority',
      },
      {
        type: 'p',
        parts: [
          'Orphan service pages do not rank. From every article, link to the money page with descriptive anchors — not “click here”. From every service page, link to a related industry (',
          L('construction software', '/industries/construction-software'),
          ', ',
          L('ecommerce', '/industries/ecommerce-solutions'),
          ') and a location page such as ',
          L('Singapore', '/locations/singapore'),
          '. Blog-to-service-to-industry is the cluster Google can understand.',
        ],
      },
      {
        type: 'p',
        parts: [
          'If you are still on PHP templates, compare stacks in ',
          L('Laravel vs WordPress vs Shopify vs Next.js', '/blog/laravel-wordpress-shopify-vs-nextjs-2026'),
          '. If content editors need a CMS, read ',
          L('headless CMS in 2026', '/blog/headless-cms-sanity-wordpress-shopify-2026'),
          '.',
        ],
      },
      {
        type: 'h2',
        text: 'JSON-LD that matches visible content',
      },
      {
        type: 'p',
        parts: [
          'BlogPosting, FAQPage, BreadcrumbList, and Organization should describe what is on the page — not a fake address or a fabricated AggregateRating. Speakable and wordCount help AI overviews cite you, but only if the FAQ answers are visible in the HTML.',
        ],
      },
      {
        type: 'p',
        parts: [
          'Need this implemented on a production App Router site? ',
          L('Start a Next.js brief', '/contact'),
          ' with NextCreavo.',
        ],
      },
    ],
  },
  {
    slug: 'ai-tools-for-developers-claude-agents-2026',
    title: 'AI for Developers in 2026: Claude, Agents, and Shipping Faster Without Shipping Slop',
    summary:
      'How engineering teams actually use Claude, Cursor, and agent workflows in 2026 — RAG boundaries, evals, chatbot productization, and the difference between a demo and an AI automation service.',
    category: 'AI',
    readTime: '10 min read',
    tags: [
      'AI for developers',
      'Claude AI',
      'AI agents',
      'Cursor',
      'chatbot development',
      'AI automation',
      'LLM engineering',
    ],
    createdAt: '2026-08-25T08:00:00.000Z',
    coverImageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
    featuredOnHome: true,
    author: AUTHORS.ai,
    relatedServices: [
      { label: 'AI development', href: '/services/ai-development' },
      { label: 'Chatbot development', href: '/services/chatbot-development' },
      { label: 'AI automation', href: '/services/ai-automation' },
    ],
    relatedPostSlugs: [
      'claude-relume-ui-ux-design-systems-2026',
      'nextjs-app-router-seo-core-web-vitals-2026',
      'headless-cms-sanity-wordpress-shopify-2026',
    ],
    faqs: [
      {
        question: 'Which AI tools should developers learn in 2026?',
        answer:
          'Claude (long-context reasoning and UI artifacts), a repo-aware IDE like Cursor, an eval harness for prompts, and a retrieval layer if the bot must stay on your docs. Model hopping matters less than evals and tool permissions.',
      },
      {
        question: 'When should we build a custom chatbot vs ChatGPT?',
        answer:
          'Build when you need brand voice, private data, actions (CRM, bookings, order status), or compliance. ChatGPT is research. A product chatbot is a constrained agent with logging, fallbacks, and a human handoff.',
      },
      {
        question: 'How do we keep AI agents from hallucinating into production?',
        answer:
          'Ground answers in retrieved documents, force structured JSON for tool calls, require confirmation on write actions, and measure quality with a golden-set eval — not vibes.',
      },
    ],
    sections: [
      {
        type: 'p',
        parts: [
          '“AI for developers” in 2026 is not autocomplete. It is Claude (and peers) sitting in the inner loop of design, code review, and ops — plus agents that can call APIs when the contract is strict. NextCreavo ships this as ',
          L('AI development', '/services/ai-development'),
          ', ',
          L('custom chatbots', '/services/chatbot-development'),
          ', and ',
          L('workflow automation', '/services/ai-automation'),
          '.',
        ],
      },
      {
        type: 'h2',
        text: 'Claude vs “a chatbot”: pick the job',
      },
      {
        type: 'p',
        parts: [
          'Claude is strong at long specs, refactors, and UI-from-intent (artifacts, design tokens, Relume-like sitemaps). A customer-facing bot is a different product: retrieval, rate limits, PII redaction, and a transcript you can audit. Do not paste the same system prompt into both.',
        ],
      },
      {
        type: 'h2',
        text: 'Agent architecture that survives production',
      },
      {
        type: 'ol',
        items: [
          ['Define tools as typed functions (create ticket, fetch order, draft reply) — never free-form SQL.'],
          ['Retrieve only the chunks the question needs. Broad dumps raise cost and hallucination rate.'],
          ['Eval a frozen set of 50–100 real questions every prompt change.'],
          ['Log traces. If you cannot replay a bad answer, you cannot fix it.'],
        ],
      },
      {
        type: 'quote',
        text: 'An agent without permissions is a search box. An agent with write access and no evals is an incident waiting for a customer.',
      },
      {
        type: 'h2',
        text: 'Where JavaScript, Python, and PHP still matter',
      },
      {
        type: 'p',
        parts: [
          'LLM wrappers do not replace your stack. Next.js still renders the app. ',
          L('Python development', '/services/python-development'),
          ' still owns data jobs and model glue. Laravel/PHP still runs a lot of CRMs. The AI layer is an API with timeouts, idempotency keys, and a fallback UI when the model is down.',
        ],
      },
      {
        type: 'h2',
        text: 'Design + engineering: Claude in the UI loop',
      },
      {
        type: 'p',
        parts: [
          'Product teams now draft screens in Claude, expand them in Relume or Figma, then implement in App Router. That workflow is covered in ',
          L('Claude + Relume UI/UX', '/blog/claude-relume-ui-ux-design-systems-2026'),
          '. The engineering rule: generated UI is a starting point — tokens, accessibility, and Core Web Vitals still need a human pass.',
        ],
      },
      {
        type: 'p',
        parts: [
          'If you want a bot that books, qualifies, or answers from your CMS, we productize it — not a weekend GPT wrapper. ',
          L('Talk to NextCreavo about AI', '/contact'),
          '.',
        ],
      },
    ],
  },
  {
    slug: 'headless-cms-sanity-wordpress-shopify-2026',
    title: 'Headless CMS in 2026: Sanity vs WordPress vs Shopify (When to Decouple)',
    summary:
      'When a headless CMS beats a classic WordPress or Shopify theme: Sanity, Storefront API, preview, editor UX, and Next.js front-ends that rank and convert.',
    category: 'Tech',
    readTime: '12 min read',
    tags: [
      'headless CMS',
      'Sanity CMS',
      'WordPress headless',
      'Shopify headless',
      'Next.js',
      'content modeling',
      'ecommerce',
    ],
    createdAt: '2026-08-22T08:00:00.000Z',
    coverImageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    featuredOnHome: false,
    author: AUTHORS.engineering,
    relatedServices: [
      { label: 'Web development', href: '/services/web-development' },
      { label: 'Next.js development', href: '/services/nextjs-development' },
      { label: 'SaaS development', href: '/services/saas-development' },
    ],
    relatedPostSlugs: [
      'nextjs-app-router-seo-core-web-vitals-2026',
      'laravel-wordpress-shopify-vs-nextjs-2026',
      'claude-relume-ui-ux-design-systems-2026',
    ],
    faqs: [
      {
        question: 'Is WordPress still viable if we want Next.js?',
        answer:
          'Yes as a headless content API (WPGraphQL or REST) if your team already lives in wp-admin. If editors fight Gutenberg and you need structured landing pages, Sanity or a typed CMS is usually faster long-term.',
      },
      {
        question: 'Should Shopify stores go headless in 2026?',
        answer:
          'Go headless when theme limits (speed, custom checkout UX, multi-storefront, branded content) cost more than Hydrogen/Storefront API complexity. Stay on Online Store 2.0 if catalog + apps already convert.',
      },
      {
        question: 'What is the SEO risk of a headless rebuild?',
        answer:
          'URL changes, lost internal links, missing redirects, and content that only renders client-side. Map every old URL, keep canonicals, and ship HTML for titles and body copy on day one.',
      },
    ],
    sections: [
      {
        type: 'p',
        parts: [
          'Headless CMS means your content API is separate from the Next.js (or Hydrogen) storefront. Editors keep a studio; engineers keep React. It is the right move when WordPress themes or Shopify Liquid cannot hit Core Web Vitals or a custom UX — and the wrong move when you only needed a better theme.',
        ],
      },
      {
        type: 'h2',
        text: 'Sanity: structured content for product and marketing',
      },
      {
        type: 'p',
        parts: [
          'Sanity (and similar) wins when pages are modules: hero, FAQs, portable text, case studies. GROQ queries, live preview, and a real schema beat a pile of ACF fields. NextCreavo uses this pattern on marketing sites and ',
          L('SaaS development', '/services/saas-development'),
          ' content layers.',
        ],
      },
      {
        type: 'h2',
        text: 'WordPress: keep the editor, lose the theme tax',
      },
      {
        type: 'p',
        parts: [
          'Headless WordPress is a migration path, not a religion. You keep editorial muscle and plugins for SEO drafts, then render with ',
          L('Next.js', '/services/nextjs-development'),
          '. Watch plugin bloat on the API side — if every page needs 12 plugins to render, you did not go headless, you went distributed monolith.',
        ],
      },
      {
        type: 'h2',
        text: 'Shopify: theme vs Storefront API',
      },
      {
        type: 'p',
        parts: [
          'Shopify remains the fastest path to checkout, apps, and payments. Headless (Hydrogen, Next.js + Storefront API) is for branded storytelling, ',
          L('ecommerce experiences', '/industries/ecommerce-solutions'),
          ', and performance when Liquid themes stall. Cart, markets, and webhooks still belong to Shopify — do not reimplement commerce.',
        ],
      },
      {
        type: 'ul',
        items: [
          ['Preview: unpublished drafts must look like production, including images.'],
          ['Redirects: 308 every old .html / product handle you retire.'],
          ['Images: CMS CDN + next/image, never 4MB PNG heroes.'],
          [
            'Search: index portable text, not only the title field. See ',
            L('App Router SEO', '/blog/nextjs-app-router-seo-core-web-vitals-2026'),
            '.',
          ],
        ],
      },
      {
        type: 'quote',
        text: 'Headless is a rendering choice. If the information architecture is messy, decoupling it just makes the mess faster.',
      },
      {
        type: 'p',
        parts: [
          'Choosing between PHP, Shopify, and Next.js from scratch? Use ',
          L('this stack comparison', '/blog/laravel-wordpress-shopify-vs-nextjs-2026'),
          '. Ready to decouple? ',
          L('Brief NextCreavo', '/contact'),
          ' for ',
          L('web development', '/services/web-development'),
          '.',
        ],
      },
    ],
  },
  {
    slug: 'google-business-profile-map-pack-ranking-2026',
    title: 'Google Business Profile & Map Pack Ranking in 2026: The GMB Playbook That Still Works',
    summary:
      'How to rank in the Google Map Pack in 2026: Google Business Profile hygiene, reviews, local landing pages, GBP vs website SEO, and what digital marketing teams should stop faking.',
    category: 'Marketing',
    readTime: '10 min read',
    tags: [
      'Google Business Profile',
      'GMB optimization',
      'Map Pack ranking',
      'local SEO',
      'Google ranking',
      'digital marketing',
      'Google Maps',
    ],
    createdAt: '2026-08-20T08:00:00.000Z',
    coverImageUrl: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop',
    featuredOnHome: true,
    author: AUTHORS.growth,
    relatedServices: [
      { label: 'GMB optimization', href: '/services/marketing/gmb-optimization' },
      { label: 'SEO services', href: '/services/seo' },
      { label: 'Digital marketing', href: '/services/marketing' },
    ],
    relatedPostSlugs: [
      'nextjs-app-router-seo-core-web-vitals-2026',
      'claude-relume-ui-ux-design-systems-2026',
      'ai-tools-for-developers-claude-agents-2026',
    ],
    faqs: [
      {
        question: 'Is GMB still called Google My Business?',
        answer:
          'The product is Google Business Profile (GBP). People still search “GMB optimization”. Use both in copy; optimize the live Profile, not the old name.',
      },
      {
        question: 'Can a remote agency rank in the Map Pack?',
        answer:
          'Map Pack is proximity + relevance + prominence. A remote studio should not invent a street address. Rank the website for service keywords; use GBP only where you have a real location or service-area documentation Google accepts.',
      },
      {
        question: 'What is the fastest Map Pack lever in 2026?',
        answer:
          'Fix NAP duplicates, categories, hours, photos, and review velocity first. Then support GBP with a locally relevant landing page, not a keyword-stuffed city doorway farm.',
      },
    ],
    sections: [
      {
        type: 'p',
        parts: [
          'Digital marketing teams still treat Google Business Profile as a listing they filled in once. Map Pack ranking in 2026 is an operating system: categories, photos, Q&A, reviews, and a website that agrees with the Profile. NextCreavo’s ',
          L('GMB optimization', '/services/marketing/gmb-optimization'),
          ' work starts with hygiene, not blog spam.',
        ],
      },
      {
        type: 'h2',
        text: 'GBP hygiene before you buy more Google Ads',
      },
      {
        type: 'ul',
        items: [
          ['Primary category must match how customers search — not your internal org chart.'],
          ['Name, address, phone consistent everywhere. Fake NY addresses destroy trust and audits.'],
          ['Weekly photos and posts beat a 2022 storefront image.'],
          [
            'Track calls and direction requests. Pair with ',
            L('Google Ads', '/services/marketing/google-ads'),
            ' only after the Profile is clean.',
          ],
        ],
      },
      {
        type: 'h2',
        text: 'Website SEO still feeds prominence',
      },
      {
        type: 'p',
        parts: [
          'Google ranking for “SEO agency” and Map Pack for a city query are related but not identical. Your ',
          L('SEO program', '/services/seo'),
          ' should produce unique location or service-area pages with real NAP (when you have it), embedded maps only if accurate, and internal links from the blog. Technical junk — redirecting sitemap URLs, duplicate H1s — leaks prominence.',
        ],
      },
      {
        type: 'p',
        parts: [
          'If you serve a market like ',
          L('Singapore custom software', '/locations/singapore'),
          ', say so on a dedicated page. Do not clone 50 city pages with one noun swapped.',
        ],
      },
      {
        type: 'quote',
        text: 'Reviews are the local equivalent of backlinks — except you cannot buy a thousand without getting the Profile suspended.',
      },
      {
        type: 'h2',
        text: 'Reviews, replies, and conversion',
      },
      {
        type: 'p',
        parts: [
          'Ask after a closed job, reply to every review, and never gatekeep. Schema on the website should not invent star ratings. The Profile and the site must tell the same story — services, hours, and brand name (NextCreavo, not a lookalike healthcare SERP).',
        ],
      },
      {
        type: 'p',
        parts: [
          'Pack this with ',
          L('Facebook ads', '/services/marketing/facebook-ads'),
          ' and organic social only after the search foundation exists. ',
          L('Book a growth call', '/contact'),
          '.',
        ],
      },
    ],
  },
  {
    slug: 'claude-relume-ui-ux-design-systems-2026',
    title: 'Claude + Relume UI/UX in 2026: Design Systems, Sitemaps, and Screens That Ship',
    summary:
      'A conceptual UI/UX workflow using Claude, Relume sitemaps, Figma team libraries, and production Next.js — how product teams go from IA to a design system without disposable mockups.',
    category: 'Design',
    readTime: '9 min read',
    tags: [
      'UI UX design',
      'Claude design',
      'Relume',
      'design systems',
      'Figma',
      'sitemap',
      'SaaS UX',
      'design to code',
    ],
    createdAt: '2026-08-18T08:00:00.000Z',
    coverImageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop',
    featuredOnHome: false,
    author: AUTHORS.design,
    relatedServices: [
      { label: 'UI/UX design', href: '/services/ui-ux-design' },
      { label: 'SaaS development', href: '/services/saas-development' },
      { label: 'Next.js development', href: '/services/nextjs-development' },
    ],
    relatedPostSlugs: [
      'ai-tools-for-developers-claude-agents-2026',
      'nextjs-app-router-seo-core-web-vitals-2026',
      'headless-cms-sanity-wordpress-shopify-2026',
    ],
    faqs: [
      {
        question: 'Can Claude replace a UI/UX designer?',
        answer:
          'No. Claude accelerates IA, copy, and first-pass layouts. Relume accelerates sitemaps and component mapping. Designers still own hierarchy, accessibility, brand, and the messy edge states AI skips.',
      },
      {
        question: 'What is Relume used for in 2026?',
        answer:
          'Relume is strongest at information architecture: sitemaps, wireframe kits, and mapping pages to a component library before Figma high-fidelity. It is not a substitute for user research or a production design system.',
      },
      {
        question: 'How do Figma team libraries fit?',
        answer:
          'One shared library (tokens, type, components) is the contract between design and Next.js. AI-generated screens should be rebuilt onto those components — not pasted as orphan frames.',
      },
    ],
    sections: [
      {
        type: 'p',
        parts: [
          'Claude design conceptual work is now a default first draft: user flows, empty states, and even component APIs. Relume turns those flows into sitemaps and wireframe-speed pages. A Figma team library (tokens, not artboards) is what stops the file from becoming 40 disconnected mockups. NextCreavo’s ',
          L('UI/UX design', '/services/ui-ux-design'),
          ' process uses all three — then ships in React.',
        ],
      },
      {
        type: 'h2',
        text: 'Step 1: IA before pixels',
      },
      {
        type: 'p',
        parts: [
          'Start Relume (or a sitemap in Claude) with jobs-to-be-done, not page count. Marketing sites need crawlable hubs — services, industries, locations — not a novel homepage. SaaS products need a navigation model that survives 20 settings screens. If the sitemap is wrong, high-fidelity Figma is expensive fiction.',
        ],
      },
      {
        type: 'h2',
        text: 'Step 2: Claude for conceptual UI, humans for taste',
      },
      {
        type: 'p',
        parts: [
          'Ask Claude for layout options, content hierarchy, and accessibility notes. Reject the generic “hero + three cards + logos” unless that is actually the conversion path. Pair with ',
          L('AI for developers', '/blog/ai-tools-for-developers-claude-agents-2026'),
          ' so engineering is in the loop before you polish shadows.',
        ],
      },
      {
        type: 'h2',
        text: 'Step 3: Relume kits → Figma team library → code',
      },
      {
        type: 'ol',
        items: [
          ['Map each sitemap node to a Relume/Figma component, not a unique snowflake.'],
          ['Promote tokens (color, type, space) into the Figma team library.'],
          [
            'Implement in ',
            L('Next.js', '/services/nextjs-development'),
            ' with the same names. Design-to-code fails when components rename at the repo door.',
          ],
          [
            'Measure UX with Core Web Vitals and task success — see ',
            L('App Router SEO', '/blog/nextjs-app-router-seo-core-web-vitals-2026'),
            '.',
          ],
        ],
      },
      {
        type: 'quote',
        text: 'A design system is a product decision log. AI can draft screens; it cannot remember why the CTA is secondary on pricing.',
      },
      {
        type: 'h2',
        text: 'SaaS, construction, travel: same method, different density',
      },
      {
        type: 'p',
        parts: [
          'Dashboards for ',
          L('construction software', '/industries/construction-software'),
          ' and ',
          L('travel software', '/industries/travel-software'),
          ' fail when Relume marketing sections get pasted into app chrome. Conceptual UI still needs domain constraints: permissions, offline, dense tables. That is UI/UX, not a landing-page kit.',
        ],
      },
      {
        type: 'p',
        parts: ['Want a system that design and engineering share? ', L('Start a UI/UX brief', '/contact'), '.'],
      },
    ],
  },
  {
    slug: 'laravel-wordpress-shopify-vs-nextjs-2026',
    title: 'Laravel, WordPress, Shopify, or Next.js? How to Choose a Stack in 2026',
    summary:
      'A clear comparison of PHP/Laravel, WordPress, Shopify, and Next.js/JavaScript for agencies and founders — when to keep PHP, when to replatform, and how custom software should decide.',
    category: 'Tech',
    readTime: '11 min read',
    tags: ['Laravel', 'PHP', 'WordPress', 'Shopify', 'Next.js', 'JavaScript', 'custom software', 'replatforming'],
    createdAt: '2026-08-16T08:00:00.000Z',
    coverImageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
    featuredOnHome: false,
    author: AUTHORS.engineering,
    relatedServices: [
      { label: 'Custom software', href: '/services/custom-software-development' },
      { label: 'Web development', href: '/services/web-development' },
      { label: 'Next.js development', href: '/services/nextjs-development' },
    ],
    relatedPostSlugs: [
      'headless-cms-sanity-wordpress-shopify-2026',
      'nextjs-app-router-seo-core-web-vitals-2026',
      'ai-tools-for-developers-claude-agents-2026',
    ],
    faqs: [
      {
        question: 'Is Laravel dead because of Next.js?',
        answer:
          'No. Laravel is still excellent for authenticated apps, queues, and admin-heavy PHP shops. Next.js is stronger for public SEO surfaces and React UI. Many products keep Laravel as the API and Next.js as the front.',
      },
      {
        question: 'Should we leave WordPress for everything?',
        answer:
          'Leave the theme if it cannot pass Core Web Vitals or if you need an app, not a brochure. Keep WordPress as headless CMS if the editorial team depends on it. Replatform content with redirects, not a big-bang delete.',
      },
      {
        question: 'When is Shopify the correct default?',
        answer:
          'When you sell physical or simple digital goods and need apps, checkout, and markets quickly. Custom software or a headless storefront is for unique UX, B2B rules, or content-led brands that outgrew Liquid.',
      },
    ],
    sections: [
      {
        type: 'p',
        parts: [
          'Founders ask us to “just use Next.js” or “just stay on WordPress.” The 2026 answer is job-based. PHP and Laravel still power serious backends. WordPress still wins editorial. Shopify still wins checkout. JavaScript and Next.js win when the public UI and SEO surface need React. NextCreavo’s ',
          L('custom software development', '/services/custom-software-development'),
          ' engagements start with that split.',
        ],
      },
      {
        type: 'h2',
        text: 'Laravel & PHP: keep when the domain is the product',
      },
      {
        type: 'p',
        parts: [
          'If your complexity is permissions, invoices, inventory, or a large existing PHP team, Laravel (or a well-kept PHP app) is cheaper than a rewrite. Expose a JSON API, then attach a ',
          L('Next.js', '/services/nextjs-development'),
          ' marketing site or customer portal. Do not rewrite working billing because a blog said so.',
        ],
      },
      {
        type: 'h2',
        text: 'WordPress: CMS gravity vs theme gravity',
      },
      {
        type: 'p',
        parts: [
          'WordPress is still the fastest way for non-engineers to publish. It is a slow way to build a product. If the theme is the bottleneck, go ',
          L('headless', '/blog/headless-cms-sanity-wordpress-shopify-2026'),
          ' or move marketing pages to Next.js and leave the blog in WP until you have a migration budget.',
        ],
      },
      {
        type: 'h2',
        text: 'Shopify: commerce operating system',
      },
      {
        type: 'p',
        parts: [
          'Shopify is not “just a website.” It is checkout, apps, inventory, and markets. Fight it only when B2B pricing, configurators, or content experiences cannot fit. Then headless or a custom ',
          L('web application', '/services/web-development'),
          ' on top of Storefront API — not a from-scratch cart.',
        ],
      },
      {
        type: 'h2',
        text: 'Next.js & JavaScript: the public surface',
      },
      {
        type: 'p',
        parts: [
          'Choose Next.js when SEO, performance, and UI density matter on the same URL — agencies, SaaS marketing, ',
          L('React apps', '/services/react-development'),
          '. Pair with ',
          L('Node.js APIs', '/services/nodejs-development'),
          ' when the backend is new. Follow ',
          L('App Router SEO', '/blog/nextjs-app-router-seo-core-web-vitals-2026'),
          ' so the rebuild ranks.',
        ],
      },
      {
        type: 'ul',
        items: [
          ['Brochure + blog, non-technical editors: WordPress or Sanity + Next.js.'],
          ['Catalog + checkout: Shopify first.'],
          ['Internal tools & complex domain: Laravel/PHP or Node, UI in React.'],
          ['Growth site that must rank: Next.js, even if the app stays PHP.'],
        ],
      },
      {
        type: 'p',
        parts: [
          'Need a second opinion before a rewrite? ',
          L('Contact NextCreavo', '/contact'),
          ' — we will tell you when not to rebuild.',
        ],
      },
    ],
  },
]

function toPublicDetail(source: LocalBlogSource): IBlogPublicDetail {
  const body = sectionsToPortableText(source.sections)
  return {
    _id: `local-${source.slug}`,
    title: source.title,
    slug: source.slug,
    summary: source.summary,
    coverImageUrl: source.coverImageUrl,
    authorName: source.author.authorName,
    authorRole: source.author.authorRole,
    authorAvatarUrl: source.author.authorAvatarUrl,
    category: source.category,
    readTime: source.readTime,
    tags: source.tags,
    createdAt: source.createdAt,
    contentHtml: '',
    body,
    featuredOnHome: Boolean(source.featuredOnHome),
    featuredOnBlogPage: Boolean(source.featuredOnBlogPage),
    viewCount: seedViewsForSlug(source.slug),
    faqs: source.faqs,
    relatedServices: source.relatedServices,
    relatedPostSlugs: source.relatedPostSlugs,
    wordCount: countWords(
      [source.title, source.summary, ...source.faqs.flatMap((faq) => [faq.question, faq.answer])].join(' ') +
        ' ' +
        body
          .map((block) =>
            Array.isArray(block.children)
              ? block.children
                  .map((child) => (child && typeof child === 'object' && 'text' in child ? String(child.text) : ''))
                  .join('')
              : ''
          )
          .join(' ')
    ),
  }
}

export const LOCAL_BLOG_POSTS: IBlogPublicDetail[] = LOCAL_BLOG_SOURCES.map(toPublicDetail)

export const LOCAL_BLOG_BY_SLUG = new Map(LOCAL_BLOG_POSTS.map((post) => [post.slug, post]))

export function getLocalBlogBySlug(slug: string) {
  return LOCAL_BLOG_BY_SLUG.get(slug) ?? null
}

export function getLocalBlogListItems(): IBlogPublicListItem[] {
  return LOCAL_BLOG_POSTS.map((post) => ({
    _id: post._id,
    title: post.title,
    slug: post.slug,
    summary: post.summary,
    coverImageUrl: post.coverImageUrl,
    authorName: post.authorName,
    authorRole: post.authorRole,
    authorAvatarUrl: post.authorAvatarUrl,
    category: post.category,
    readTime: post.readTime,
    tags: post.tags,
    createdAt: post.createdAt,
    viewCount: post.viewCount,
  }))
}

export function getLocalCategories() {
  const names = [...new Set(LOCAL_BLOG_POSTS.map((post) => String(post.category)).filter(Boolean))]
  return names.sort().map((name) => ({
    _id: `local-cat-${name.toLowerCase()}`,
    name,
    slug: name.toLowerCase(),
  }))
}
