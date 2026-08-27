import { INDUSTRY_PAGES } from '@/data/industries'
import { LOCATION_PAGES } from '@/data/locations'
import { SERVICE_LANDING_PAGES } from '@/data/servicePages'
import Link from 'next/link'

const PRIORITY_SERVICES = SERVICE_LANDING_PAGES.filter((s) =>
  [
    'ai-automation',
    'chatbot-development',
    'react-development',
    'react-outsourcing',
    'nextjs-development',
    'custom-software-development',
    'ui-ux-design',
    'ai-development',
  ].includes(s.slug)
)

const OTHER_SERVICES = SERVICE_LANDING_PAGES.filter((s) => !PRIORITY_SERVICES.some((p) => p.slug === s.slug))

const EXPLORE_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Case studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/services/marketing', label: 'Digital marketing' },
  { href: '/services/marketing/gmb-optimization', label: 'GMB / Map Pack' },
  { href: '/services/marketing/google-ads', label: 'Google Ads' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/cookies', label: 'Cookies' },
  { href: '/terms', label: 'Terms' },
] as const

/** Crawlable internal links so landing pages are not orphans with a single inlink. */
export default function FooterSitemapLinks() {
  return (
    <nav
      aria-label="Site sections"
      className="footer-reveal border-invert/10 col-span-full mt-10 grid grid-cols-1 gap-8 border-t pt-10 sm:grid-cols-2 lg:grid-cols-4"
    >
      <div className="flex flex-col gap-3">
        <p className="text-invert/40 mb-1 text-[9px] tracking-[0.2em] uppercase sm:text-[10px]">Services</p>
        {PRIORITY_SERVICES.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="hover:text-secondary w-max text-sm font-light transition-colors sm:text-base"
          >
            {service.primaryKeyword}
          </Link>
        ))}
        {OTHER_SERVICES.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="hover:text-secondary w-max text-sm font-light transition-colors sm:text-base"
          >
            {service.primaryKeyword}
          </Link>
        ))}
        <Link href="/services" className="hover:text-secondary w-max text-sm font-light transition-colors sm:text-base">
          All services
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-invert/40 mb-1 text-[9px] tracking-[0.2em] uppercase sm:text-[10px]">Industries</p>
        {INDUSTRY_PAGES.map((industry) => (
          <Link
            key={industry.slug}
            href={`/industries/${industry.slug}`}
            className="hover:text-secondary w-max text-sm font-light transition-colors sm:text-base"
          >
            {industry.name}
          </Link>
        ))}
        <Link
          href="/industries"
          className="hover:text-secondary w-max text-sm font-light transition-colors sm:text-base"
        >
          All industries
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-invert/40 mb-1 text-[9px] tracking-[0.2em] uppercase sm:text-[10px]">Locations</p>
        {LOCATION_PAGES.map((location) => (
          <Link
            key={location.slug}
            href={`/locations/${location.slug}`}
            className="hover:text-secondary w-max text-sm font-light transition-colors sm:text-base"
          >
            {location.city}
          </Link>
        ))}
        <Link
          href="/locations"
          className="hover:text-secondary w-max text-sm font-light transition-colors sm:text-base"
        >
          All locations
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-invert/40 mb-1 text-[9px] tracking-[0.2em] uppercase sm:text-[10px]">Explore</p>
        {EXPLORE_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-secondary w-max text-sm font-light transition-colors sm:text-base"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
