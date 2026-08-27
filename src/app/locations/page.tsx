import JsonLd from '@/components/seo/JsonLd'
import { LOCATION_PAGES } from '@/data/locations'
import { breadcrumbJsonLd, itemListJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { buildPageMetadata } from '@/lib/seo/metadata'
import Link from 'next/link'

export const metadata = buildPageMetadata({
  title: 'Locations | Software Development Company by City | NextCreavo',
  description:
    'Software development company pages for New York, London, Toronto, Sydney, Dubai, Singapore, Berlin, Amsterdam, California and more.',
  keywords: [
    'software development company',
    'software development company New York',
    'software development company London',
    'hire software developers',
  ],
  path: '/locations',
})

export default function LocationsIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(
            'Locations | Software Development Company by City | NextCreavo',
            'Local commercial landing pages for software development company keywords by city.',
            '/locations'
          ),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Locations', path: '/locations' },
          ]),
          itemListJsonLd(
            'NextCreavo Location Pages',
            '/locations',
            LOCATION_PAGES.map((l) => ({ name: l.primaryKeyword, url: `/locations/${l.slug}` }))
          ),
        ]}
      />
      <main className="bg-primary text-primary min-h-screen px-6 pt-32 pb-24 md:px-12 md:pt-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-secondary mb-6 text-[10px] font-semibold tracking-[0.25em] uppercase">Locations</p>
          <h1 className="font-display text-primary max-w-4xl text-4xl font-light tracking-tight md:text-7xl">
            Software development company by city
          </h1>
          <p className="text-secondary mt-8 max-w-2xl text-base font-light md:text-lg">
            City pages for buyers searching a software development company in their market — Singapore, New York,
            London, Amsterdam, and more. Each page links into AI, Next.js, React, and custom software.
          </p>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LOCATION_PAGES.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="border-border-primary hover:bg-secondary rounded-2xl border p-6 transition-colors"
              >
                <p className="text-secondary mb-2 text-[10px] tracking-[0.2em] uppercase">
                  {location.city}
                  {location.region ? `, ${location.region}` : ''} · {location.country}
                </p>
                <h2 className="text-primary text-lg font-medium">{location.primaryKeyword}</h2>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
