import Services from '@/Services'
import JsonLd from '@/components/seo/JsonLd'
import ServerTextBoost from '@/components/seo/ServerTextBoost'
import { SERVICE_LANDING_PAGES, SERVICE_PILLAR_LABELS } from '@/data/servicePages'
import { breadcrumbJsonLd, itemListJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { pageKeywordSets } from '@/lib/seo/keywords'
import { buildPageMetadata } from '@/lib/seo/metadata'
import Link from 'next/link'

export const metadata = buildPageMetadata({
  title: 'Services | AI, Next.js, SaaS, Mobile & SEO | NextCreavo',
  description:
    'NextCreavo services: AI software development, Next.js, React, Node.js, Python, SaaS, MVP, custom software, mobile apps, UI/UX, SEO, CRM and API development.',
  keywords: [...pageKeywordSets.services, ...SERVICE_LANDING_PAGES.slice(0, 8).map((s) => s.primaryKeyword)],
  path: '/services',
})

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(
            'Services | AI, Next.js, SaaS, Mobile & SEO | NextCreavo',
            'Keyword-targeted service pages for AI development, Next.js, SaaS, mobile, custom software and SEO.',
            '/services',
            [...pageKeywordSets.services]
          ),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
          ]),
          itemListJsonLd(
            'NextCreavo Keyword Service Pages',
            '/services',
            SERVICE_LANDING_PAGES.map((s) => ({ name: s.primaryKeyword, url: `/services/${s.slug}` }))
          ),
        ]}
      />
      <section className="bg-primary border-border-primary border-b px-6 pt-32 pb-16 md:px-12 md:pt-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-secondary mb-4 text-[10px] font-semibold tracking-[0.25em] uppercase">Service catalog</p>
          <h1 className="font-display text-primary max-w-4xl text-4xl font-light tracking-tight md:text-6xl">
            AI, React, Next.js, and custom software — one page per brief
          </h1>
          <p className="text-secondary mt-6 max-w-2xl text-base font-light">
            Commercial service pages for the work we actually sell: AI workflow automation, custom chatbot development,
            React and Next.js teams, SaaS, mobile, UI/UX, and SEO.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_LANDING_PAGES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="border-border-primary hover:bg-secondary rounded-2xl border p-5 transition-colors"
              >
                <p className="text-secondary mb-2 text-[10px] tracking-[0.2em] uppercase">
                  {SERVICE_PILLAR_LABELS[service.pillar]}
                </p>
                <p className="text-primary font-medium">{service.primaryKeyword}</p>
                <p className="text-secondary mt-2 text-sm font-light">{service.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Services />
      <ServerTextBoost
        heading="NextCreavo service keyword map"
        intro="Service pages for AI workflow automation, React development, custom chatbots, Next.js, SaaS, and custom software. Each URL owns one commercial cluster."
        items={SERVICE_LANDING_PAGES.map((service) => ({
          title: service.primaryKeyword,
          href: `/services/${service.slug}`,
          summary: `${service.shortDesc} Secondary: ${service.secondaryKeywords.slice(0, 3).join(', ')}.`,
        }))}
        outro="Also explore /industries, /locations, /portfolio (case studies), /blog and /contact."
      />
    </>
  )
}
