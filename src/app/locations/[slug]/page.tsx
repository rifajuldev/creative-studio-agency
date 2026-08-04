import JsonLd from '@/components/seo/JsonLd'
import { getAllLocationSlugs, getLocationBySlug } from '@/data/locations'
import { SERVICE_LANDING_PAGES } from '@/data/servicePages'
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
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
      `AI software development company ${location.city}`,
      `Next.js development agency ${location.city}`,
      `custom software development ${location.city}`,
    ],
    path: `/locations/${location.slug}`,
  })
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) notFound()

  const featured = SERVICE_LANDING_PAGES.filter((s) =>
    [
      'ai-development',
      'nextjs-development',
      'saas-development',
      'custom-software-development',
      'mobile-app-development',
    ].includes(s.slug)
  )

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
            Remote-first delivery with overlap for {location.city} stakeholders. Primary focus: AI Software Development
            Company capabilities, Next.js builds, SaaS, and custom software.
          </p>

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

          <Link
            href="/contact"
            className="bg-invert text-invert mt-12 inline-flex rounded-full px-8 py-4 text-[10px] font-medium tracking-[0.2em] uppercase"
          >
            Talk to NextCreavo
          </Link>
        </div>
      </main>
    </>
  )
}
