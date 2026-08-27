/**
 * Industry landing pages — one commercial keyword cluster per industry.
 * Long-form GSC copy is merged from landingCopy.ts.
 */

import { INDUSTRY_LONGFORM, fallbackIndustryLongform, mergeLandingLongform } from './landingCopy'

export interface IndustryPage {
  slug: string
  name: string
  primaryKeyword: string
  metaTitle: string
  metaDescription: string
  intro: string
  challenges: string[]
  solutions: string[]
  relatedServices: string[]
  audience?: string[]
  sections?: { heading: string; body: string }[]
  faqs?: { question: string; answer: string }[]
}

export const INDUSTRY_PAGES: IndustryPage[] = [
  {
    slug: 'healthcare-software',
    name: 'Healthcare',
    primaryKeyword: 'Healthcare Software Development',
    metaTitle: 'Healthcare Software Development | HIPAA-Ready Products',
    metaDescription:
      'NextCreavo builds healthcare software — patient portals, clinic systems, and AI workflows designed for compliance-aware delivery.',
    intro:
      'We design healthcare software that supports clinics, telehealth, and patient engagement with secure architecture and clear UX.',
    challenges: ['Fragmented patient data', 'Compliance pressure', 'Staff tooling friction'],
    solutions: ['Patient portals', 'Clinic ops dashboards', 'AI intake assistants'],
    relatedServices: ['custom-software-development', 'ai-development', 'ui-ux-design'],
  },
  {
    slug: 'real-estate-software',
    name: 'Real Estate',
    primaryKeyword: 'Real Estate Software Development',
    metaTitle: 'Real Estate Software Development | Portals & CRM',
    metaDescription: 'Custom real estate software from NextCreavo — listing portals, agent CRM, and booking workflows.',
    intro: 'Build listing platforms, agent tools, and client portals tailored to property businesses.',
    challenges: ['Lead leakage', 'Scattered listings', 'Slow follow-up'],
    solutions: ['Property portals', 'Agent CRM', 'Lead automation'],
    relatedServices: ['crm-development', 'web-development', 'ai-automation'],
  },
  {
    slug: 'construction-software',
    name: 'Construction',
    primaryKeyword: 'Construction Software Development',
    metaTitle: 'Construction Software Development | NextCreavo',
    metaDescription:
      'Construction software development by NextCreavo — field apps, project hubs, and custom software development for construction. Construction app development that works on site, not just in the office.',
    intro:
      'Construction software development for contractors who still run jobs on WhatsApp and spreadsheets. We build scheduling, field reporting, document workflows, and construction app development that superintendents will actually use.',
    challenges: ['Field/office disconnect', 'Change orders chaos', 'Document sprawl'],
    solutions: ['Project hubs', 'Mobile field apps', 'Document workflows'],
    relatedServices: ['mobile-app-development', 'custom-software-development', 'api-development'],
  },
  {
    slug: 'education-software',
    name: 'Education',
    primaryKeyword: 'Education Software Development',
    metaTitle: 'Education Software Development | LMS & Learning Platforms',
    metaDescription: 'NextCreavo builds education software — LMS platforms, student portals, and learning products.',
    intro: 'Learning platforms and school systems that keep students, teachers, and admins aligned.',
    challenges: ['Engagement drop-off', 'Fragmented content', 'Reporting gaps'],
    solutions: ['LMS platforms', 'Student portals', 'Assessment tools'],
    relatedServices: ['saas-development', 'web-development', 'ui-ux-design'],
  },
  {
    slug: 'travel-software',
    name: 'Travel',
    primaryKeyword: 'Travel Software Development',
    metaTitle: 'Travel Software Development | NextCreavo',
    metaDescription:
      'Travel software development by NextCreavo — travel agency software development, travel booking software development, and tour operator platforms with reliable booking engines.',
    intro:
      'Travel software development for brands that cannot afford checkout failure at peak demand. We build booking engines, operator dashboards, traveler apps, and travel booking software developers can actually maintain.',
    challenges: ['Complex inventory', 'Payment failures', 'Support overload'],
    solutions: ['Booking engines', 'Operator dashboards', 'AI support chatbots'],
    relatedServices: ['saas-development', 'api-development', 'chatbot-development'],
  },
  {
    slug: 'hotel-booking-software',
    name: 'Hospitality',
    primaryKeyword: 'Hotel Booking Software Development',
    metaTitle: 'Hotel Booking Software | Direct Booking Platforms',
    metaDescription:
      'Build hotel booking software with NextCreavo — direct bookings, PMS integrations, and guest experiences.',
    intro: 'Direct booking platforms and guest journeys that reduce OTA dependency.',
    challenges: ['OTA fees', 'Channel complexity', 'Guest experience gaps'],
    solutions: ['Booking engines', 'Guest apps', 'Upsell flows'],
    relatedServices: ['web-development', 'mobile-app-development', 'seo'],
  },
  {
    slug: 'ecommerce-solutions',
    name: 'Ecommerce',
    primaryKeyword: 'Ecommerce Software Development',
    metaTitle: 'Ecommerce Solutions | Headless Stores & Growth Stacks',
    metaDescription:
      'NextCreavo ecommerce solutions — headless storefronts, checkout UX, and growth-ready architecture.',
    intro: 'Headless commerce and conversion-focused storefronts built to scale.',
    challenges: ['Slow storefronts', 'Checkout friction', 'Weak SEO'],
    solutions: ['Headless Shopify/Next.js', 'CRO UX', 'Technical SEO'],
    relatedServices: ['nextjs-development', 'seo', 'ui-ux-design'],
  },
  {
    slug: 'fintech-development',
    name: 'Fintech',
    primaryKeyword: 'Fintech Software Development',
    metaTitle: 'Fintech Development | Secure Financial Products',
    metaDescription: 'Fintech software development by NextCreavo — dashboards, payments UX, and secure APIs.',
    intro: 'Secure, audit-minded fintech products with clear UX and reliable APIs.',
    challenges: ['Trust & security', 'Complex compliance UX', 'Integration load'],
    solutions: ['Customer portals', 'Payment flows', 'Admin risk tools'],
    relatedServices: ['custom-software-development', 'api-development', 'ui-ux-design'],
  },
  {
    slug: 'legal-tech',
    name: 'Legal',
    primaryKeyword: 'Legal Tech Software Development',
    metaTitle: 'Legal Tech Development | Practice & Matter Platforms',
    metaDescription:
      'Legal tech software from NextCreavo — matter management, client portals, and AI document helpers.',
    intro: 'Practice tools that reduce admin load for firms and improve client communication.',
    challenges: ['Document overload', 'Billable leakage', 'Client opacity'],
    solutions: ['Matter systems', 'Client portals', 'AI document assist'],
    relatedServices: ['ai-development', 'crm-development', 'custom-software-development'],
  },
  {
    slug: 'restaurant-software',
    name: 'Restaurants',
    primaryKeyword: 'Restaurant Software Development',
    metaTitle: 'Restaurant Software | Chain Ops | NextCreavo',
    metaDescription:
      'Restaurant software development company work from NextCreavo — ordering, reservations, and restaurant chain software development for multi-location brands.',
    intro: 'Digital ordering and operations software for restaurants and multi-location brands.',
    challenges: ['Order accuracy', 'Staff turnover UX', 'Multi-location control'],
    solutions: ['Ordering apps', 'Kitchen displays', 'Ops dashboards'],
    relatedServices: ['mobile-app-development', 'web-development', 'ai-automation'],
  },
  {
    slug: 'ngo-software',
    name: 'NGO',
    primaryKeyword: 'NGO Software Development',
    metaTitle: 'NGO Software Development | Impact & Operations Platforms',
    metaDescription: 'NGO software by NextCreavo — donor portals, program tracking, and volunteer systems.',
    intro: 'Software for nonprofits that need transparency, donor trust, and operational clarity.',
    challenges: ['Donor reporting', 'Program tracking', 'Volunteer coordination'],
    solutions: ['Donor portals', 'Impact dashboards', 'Volunteer apps'],
    relatedServices: ['custom-software-development', 'crm-development', 'web-development'],
  },
  {
    slug: 'charity-platform-development',
    name: 'Charity',
    primaryKeyword: 'Charity Platform Development',
    metaTitle: 'Charity Platform Development | Fundraising & Donor UX',
    metaDescription: 'Charity platform development by NextCreavo — fundraising sites, donor CRM, and campaign tools.',
    intro: 'Fundraising platforms engineered for trust, conversion, and recurring giving.',
    challenges: ['Donation friction', 'Campaign tracking', 'Donor retention'],
    solutions: ['Donation checkout', 'Campaign pages', 'Donor CRM'],
    relatedServices: ['web-development', 'crm-development', 'seo'],
  },
  {
    slug: 'government-portals',
    name: 'Government',
    primaryKeyword: 'Citizen Service Portal Development',
    metaTitle: 'Citizen Portals | Government Software | NextCreavo',
    metaDescription:
      'Citizen service portal development by NextCreavo — accessible citizen portal software, public portal software, and government case workflows.',
    intro:
      'Citizen service portal development for agencies that need accessible, auditable public services — status tracking, document upload, and APIs onto legacy systems.',
    challenges: ['Accessibility', 'Legacy systems', 'Trust & clarity'],
    solutions: ['Citizen portals', 'Case workflows', 'API modernization'],
    relatedServices: ['custom-software-development', 'api-development', 'ui-ux-design'],
  },
]

export function getIndustryBySlug(slug: string) {
  const industry = INDUSTRY_PAGES.find((i) => i.slug === slug)
  if (!industry) return undefined
  const extra = mergeLandingLongform(INDUSTRY_LONGFORM[slug], fallbackIndustryLongform(industry))
  return {
    ...industry,
    audience: extra.audience,
    sections: extra.sections,
    faqs: extra.extraFaqs,
  }
}

export function getAllIndustrySlugs() {
  return INDUSTRY_PAGES.map((i) => i.slug)
}
