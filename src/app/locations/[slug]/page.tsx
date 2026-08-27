import JsonLd from '@/components/seo/JsonLd'
import { LOCATION_PAGES, getAllLocationSlugs, getLocationBySlug } from '@/data/locations'
import { getServiceLandingBySlug } from '@/data/servicePages'
import { breadcrumbJsonLd, faqPageJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { buildPageMetadata } from '@/lib/seo/metadata'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) return { title: 'Location Not Found' }
  return buildPageMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: [
      location.primaryKeyword,
      `AI development agency ${location.city}`,
      `Next.js development agency ${location.city}`,
      `custom software development ${location.city}`,
      `software development company ${location.city}`,
    ],
    path: `/locations/${location.slug}`,
  })
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) notFound()

  const featuredSlugs = location.featuredServiceSlugs ?? [
    'ai-development',
    'nextjs-development',
    'saas-development',
    'custom-software-development',
    'mobile-app-development',
  ]
  const featured = featuredSlugs
    .map((slug) => getServiceLandingBySlug(slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service))

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(location.metaTitle, location.metaDescription, `/locations/${location.slug}`),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Locations', path: '/locations' },
            { name: location.primaryKeyword, path: `/locations/${location.slug}` },
          ]),
          ...(location.faqs?.length ? [faqPageJsonLd(location.faqs)] : []),
        ]}
      />
      <main className="bg-primary text-primary min-h-screen px-6 pt-32 pb-24 md:px-12 md:pt-40">
        <div className="mx-auto max-w-[1400px]">
          <Link href="/locations" className="text-secondary text-[10px] tracking-[0.2em] uppercase">
            ← Locations
          </Link>
          <h1 className="font-display text-primary mt-6 max-w-4xl text-4xl font-light tracking-tight md:text-6xl">
            {location.primaryKeyword}
          </h1>
          <p className="text-secondary mt-8 max-w-3xl text-base font-light md:text-lg">{location.intro}</p>
          <p className="text-secondary mt-6 max-w-3xl text-sm font-light">
            Remote-first delivery with overlap for {location.city} stakeholders. Stack: AI products, Next.js, React,
            SaaS, and custom software — briefed to this market, delivered as production systems.
          </p>

          {location.audience && location.audience.length > 0 && (
            <div className="mt-16">
              <h2 className="font-display text-primary mb-6 text-2xl font-light">Who this is for</h2>
              <ul className="text-secondary max-w-3xl space-y-3 text-sm font-light">
                {location.audience.map((item) => (
                  <li key={item} className="border-border-primary border-b pb-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {location.sections && location.sections.length > 0 && (
            <div className="mt-16 space-y-12">
              {location.sections.map((section) => (
                <article key={section.heading}>
                  <h2 className="font-display text-primary mb-4 text-2xl font-light">{section.heading}</h2>
                  <p className="text-secondary max-w-3xl text-base leading-relaxed font-light">{section.body}</p>
                </article>
              ))}
            </div>
          )}

          <h2 className="font-display text-primary mt-16 mb-6 text-2xl font-light">Services for {location.city}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {featured.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="border-border-primary hover:bg-secondary rounded-2xl border p-5 transition-colors"
              >
                <p className="text-primary font-medium">{service.primaryKeyword}</p>
                <p className="text-secondary mt-2 text-sm font-light">{service.shortDesc}</p>
              </Link>
            ))}
          </div>

          {location.faqs && location.faqs.length > 0 && (
            <div className="mt-16">
              <h2 className="font-display text-primary mb-8 text-2xl font-light">FAQ</h2>
              <div className="max-w-3xl space-y-8">
                {location.faqs.map((faq) => (
                  <div key={faq.question} className="border-border-primary border-b pb-6">
                    <h3 className="text-primary mb-3 text-lg font-medium">{faq.question}</h3>
                    <p className="text-secondary text-sm leading-relaxed font-light">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Link
            href="/contact"
            className="bg-invert text-invert mt-12 inline-flex rounded-full px-8 py-4 text-[10px] font-medium tracking-[0.2em] uppercase"
          >
            Talk to NextCreavo
          </Link>
          <div className="mt-12">
            <h2 className="font-display text-primary mb-6 text-2xl font-light">More locations</h2>
            <div className="flex flex-wrap gap-3">
              {LOCATION_PAGES.filter((item) => item.slug !== location.slug).map((item) => (
                <Link
                  key={item.slug}
                  href={`/locations/${item.slug}`}
                  className="border-border-primary hover:bg-secondary rounded-full border px-5 py-2.5 text-[10px] font-medium tracking-[0.15em] uppercase transition-colors"
                >
                  {item.city}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
