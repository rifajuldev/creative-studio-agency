import { SERVICE_LANDING_PAGES } from '@/data/servicePages'
import Link from 'next/link'

const PRIORITY_SERVICES = SERVICE_LANDING_PAGES.filter((s) =>
  [
    'ai-development',
    'nextjs-development',
    'saas-development',
    'custom-software-development',
    'mobile-app-development',
    'ui-ux-design',
    'seo',
    'mvp-development',
  ].includes(s.slug)
)

const EXPLORE_LINKS = [
  { href: '/portfolio', label: 'Case studies' },
  { href: '/industries', label: 'Industries' },
  { href: '/locations', label: 'Locations' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About NextCreavo' },
  { href: '/contact', label: 'Contact / get a quote' },
] as const

/** Crawlable internal links for topical clusters (services, industries, locations). */
export default function FooterSitemapLinks() {
  return (
    <nav
      aria-label="Site sections"
      className="footer-reveal border-invert/10 col-span-full mt-10 grid grid-cols-1 gap-8 border-t pt-10 sm:grid-cols-2 lg:grid-cols-3"
    >
      <div className="flex flex-col gap-3">
        <p className="text-invert/40 mb-1 text-[9px] tracking-[0.2em] uppercase sm:text-[10px]">Priority services</p>
        {PRIORITY_SERVICES.map((service) => (
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
        <p className="text-invert/40 mb-1 text-[9px] tracking-[0.2em] uppercase sm:text-[10px]">Engineering</p>
        {SERVICE_LANDING_PAGES.filter((s) =>
          [
            'react-development',
            'nodejs-development',
            'python-development',
            'api-development',
            'web-development',
          ].includes(s.slug)
        ).map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="hover:text-secondary w-max text-sm font-light transition-colors sm:text-base"
          >
            {service.primaryKeyword}
          </Link>
        ))}
        {SERVICE_LANDING_PAGES.filter((s) =>
          ['ai-automation', 'chatbot-development', 'crm-development'].includes(s.slug)
        ).map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="hover:text-secondary w-max text-sm font-light transition-colors sm:text-base"
          >
            {service.primaryKeyword}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-invert/40 mb-1 text-[9px] tracking-[0.2em] uppercase sm:text-[10px]">Explore more</p>
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
