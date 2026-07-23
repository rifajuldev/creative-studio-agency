import { SERVICES_DATA } from '@/data/services'
import Link from 'next/link'

const MARKETING_LINKS = [
  { href: '/services/marketing', label: 'Digital Marketing' },
  { href: '/services/marketing/gmb-optimization', label: 'GMB / Map Pack' },
  { href: '/services/marketing/google-ads', label: 'Google Ads' },
  { href: '/services/marketing/facebook-ads', label: 'Facebook & Instagram Ads' },
  { href: '/services/marketing/social-media-management', label: 'Social Media Management' },
] as const

/** Crawlable internal links for sitemap pages (services, marketing, portfolio hubs). */
export default function FooterSitemapLinks() {
  return (
    <nav
      aria-label="Site sections"
      className="footer-reveal border-invert/10 col-span-full mt-10 grid grid-cols-1 gap-8 border-t pt-10 sm:grid-cols-2 lg:grid-cols-3"
    >
      <div className="flex flex-col gap-3">
        <p className="text-invert/40 mb-1 text-[9px] tracking-[0.2em] uppercase sm:text-[10px]">Services</p>
        {SERVICES_DATA.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.id}`}
            className="hover:text-secondary w-max text-sm font-light transition-colors sm:text-base"
          >
            {service.title}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-invert/40 mb-1 text-[9px] tracking-[0.2em] uppercase sm:text-[10px]">Marketing</p>
        {MARKETING_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-secondary w-max text-sm font-light transition-colors sm:text-base"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-invert/40 mb-1 text-[9px] tracking-[0.2em] uppercase sm:text-[10px]">Explore more</p>
        <Link
          href="/portfolio"
          className="hover:text-secondary w-max text-sm font-light transition-colors sm:text-base"
        >
          Portfolio case studies
        </Link>
        <Link href="/blog" className="hover:text-secondary w-max text-sm font-light transition-colors sm:text-base">
          Growth blog
        </Link>
        <Link href="/faq" className="hover:text-secondary w-max text-sm font-light transition-colors sm:text-base">
          FAQ
        </Link>
        <Link href="/contact" className="hover:text-secondary w-max text-sm font-light transition-colors sm:text-base">
          Contact / get a quote
        </Link>
        <Link href="/about" className="hover:text-secondary w-max text-sm font-light transition-colors sm:text-base">
          About NextCreavo
        </Link>
      </div>
    </nav>
  )
}
