import JsonLd from '@/components/seo/JsonLd'
import { INDUSTRY_PAGES } from '@/data/industries'
import { breadcrumbJsonLd, itemListJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = buildPageMetadata({
  title: 'Industries | Software Solutions by Vertical | NextCreavo',
  description:
    'Industry software from NextCreavo — healthcare, real estate, fintech, ecommerce, hospitality, education, government and more.',
  keywords: [
    'industry software development',
    'healthcare software',
    'fintech development',
    'ecommerce solutions',
    'government portals',
  ],
  path: '/industries',
})

export default function IndustriesIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(
            'Industries | Software Solutions by Vertical | NextCreavo',
            'Industry-focused software development across healthcare, real estate, fintech, ecommerce, hospitality and more.',
            '/industries'
          ),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Industries', path: '/industries' },
          ]),
          itemListJsonLd(
            'NextCreavo Industry Solutions',
            '/industries',
            INDUSTRY_PAGES.map((i) => ({ name: i.primaryKeyword, url: `/industries/${i.slug}` }))
          ),
        ]}
      />
      <main className="bg-primary text-primary min-h-screen px-6 pt-32 pb-24 md:px-12 md:pt-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-secondary mb-6 text-[10px] font-semibold tracking-[0.25em] uppercase">Industries</p>
          <h1 className="font-display text-primary max-w-4xl text-4xl leading-[1.05] font-light tracking-tight md:text-7xl">
            Software built for your industry
          </h1>
          <p className="text-secondary mt-8 max-w-2xl text-base font-light md:text-lg">
            Phase 3 industry pages — each vertical targets a commercial software keyword cluster with links into our AI,
            web, SaaS, and product services.
          </p>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRY_PAGES.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="border-border-primary hover:bg-secondary group rounded-2xl border p-6 transition-colors"
              >
                <p className="text-secondary mb-2 text-[10px] tracking-[0.2em] uppercase">{industry.name}</p>
                <h2 className="text-primary mb-3 text-xl font-medium">{industry.primaryKeyword}</h2>
                <p className="text-secondary mb-4 line-clamp-3 text-sm font-light">{industry.intro}</p>
                <span className="text-primary inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.2em] uppercase">
                  View industry <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
