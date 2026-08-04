/**
 * Phase 4 location pages — commercial "Software Development Company in {City}" targeting.
 * Expand toward 100+ over time; start with priority metros.
 */

export interface LocationPage {
  slug: string
  city: string
  region?: string
  country: string
  primaryKeyword: string
  metaTitle: string
  metaDescription: string
  intro: string
}

export const LOCATION_PAGES: LocationPage[] = [
  {
    slug: 'new-york',
    city: 'New York',
    region: 'NY',
    country: 'USA',
    primaryKeyword: 'Software Development Company in New York',
    metaTitle: 'Software Development Company in New York | NextCreavo',
    metaDescription:
      'NextCreavo — software development company in New York for AI, Next.js, SaaS, and custom software for startups and enterprises.',
    intro:
      'Partner with NextCreavo as your software development company in New York for AI products, Next.js apps, SaaS platforms, and custom engineering.',
  },
  {
    slug: 'london',
    city: 'London',
    country: 'UK',
    primaryKeyword: 'Software Development Company London',
    metaTitle: 'Software Development Company London | NextCreavo',
    metaDescription:
      'Hire NextCreavo — a software development company in London for AI, web apps, SaaS, and digital transformation.',
    intro:
      'NextCreavo works with London teams building modern software — AI systems, Next.js products, and scalable SaaS.',
  },
  {
    slug: 'toronto',
    city: 'Toronto',
    country: 'Canada',
    primaryKeyword: 'Software Development Company Toronto',
    metaTitle: 'Software Development Company Toronto | NextCreavo',
    metaDescription:
      'Software development company in Toronto — AI, Next.js, mobile, and custom platforms by NextCreavo.',
    intro: 'Toronto startups and enterprises hire NextCreavo for AI software, SaaS, and product engineering.',
  },
  {
    slug: 'sydney',
    city: 'Sydney',
    country: 'Australia',
    primaryKeyword: 'Software Development Company Sydney',
    metaTitle: 'Software Development Company Sydney | NextCreavo',
    metaDescription: 'NextCreavo software development company in Sydney for AI, web, mobile, and SaaS products.',
    intro: 'Build with a software development company serving Sydney teams across AI, web, and mobile.',
  },
  {
    slug: 'dubai',
    city: 'Dubai',
    country: 'UAE',
    primaryKeyword: 'Software Development Company Dubai',
    metaTitle: 'Software Development Company Dubai | NextCreavo',
    metaDescription:
      'Software development company in Dubai — AI automation, custom software, and high-performance web apps.',
    intro: 'NextCreavo supports Dubai organizations with AI software, portals, and modern web platforms.',
  },
  {
    slug: 'singapore',
    city: 'Singapore',
    country: 'Singapore',
    primaryKeyword: 'Software Development Company Singapore',
    metaTitle: 'Software Development Company Singapore | NextCreavo',
    metaDescription:
      'Hire NextCreavo — software development company in Singapore for AI, SaaS, and enterprise products.',
    intro: 'Singapore teams partner with NextCreavo for AI development, SaaS builds, and API platforms.',
  },
  {
    slug: 'berlin',
    city: 'Berlin',
    country: 'Germany',
    primaryKeyword: 'Software Development Company Berlin',
    metaTitle: 'Software Development Company Berlin | NextCreavo',
    metaDescription: 'Software development company in Berlin for Next.js, AI, and custom product engineering.',
    intro: 'Berlin product companies hire NextCreavo for modern engineering and AI-powered software.',
  },
  {
    slug: 'amsterdam',
    city: 'Amsterdam',
    country: 'Netherlands',
    primaryKeyword: 'Software Development Company Amsterdam',
    metaTitle: 'Software Development Company Amsterdam | NextCreavo',
    metaDescription: 'NextCreavo — software development company in Amsterdam for AI, SaaS, and web applications.',
    intro: 'Build AI and SaaS products with a software development company serving Amsterdam teams.',
  },
  {
    slug: 'california',
    city: 'California',
    region: 'CA',
    country: 'USA',
    primaryKeyword: 'Software Development Company California',
    metaTitle: 'Software Development Company California | NextCreavo',
    metaDescription: 'Software development company in California for AI software, Next.js, SaaS, and MVP development.',
    intro:
      'California startups and scale-ups work with NextCreavo for AI software development, Next.js apps, and MVPs.',
  },
]

export function getLocationBySlug(slug: string) {
  return LOCATION_PAGES.find((l) => l.slug === slug)
}

export function getAllLocationSlugs() {
  return LOCATION_PAGES.map((l) => l.slug)
}
