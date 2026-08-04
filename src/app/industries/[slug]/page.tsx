import JsonLd from '@/components/seo/JsonLd'
import { getAllIndustrySlugs, getIndustryBySlug } from '@/data/industries'
import { getServiceLandingBySlug } from '@/data/servicePages'
import { breadcrumbJsonLd, customServiceJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { buildPageMetadata } from '@/lib/seo/metadata'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)
  if (!industry) return { title: 'Industry Not Found' }
  return buildPageMetadata({
    title: industry.metaTitle,
    description: industry.metaDescription,
    keywords: [industry.primaryKeyword, `${industry.name} software`, 'custom software development'],
    path: `/industries/${industry.slug}`,
  })
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)
  if (!industry) notFound()

  const related = industry.relatedServices.map((s) => getServiceLandingBySlug(s)).filter(Boolean)

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(industry.metaTitle, industry.metaDescription, `/industries/${industry.slug}`),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Industries', path: '/industries' },
            { name: industry.primaryKeyword, path: `/industries/${industry.slug}` },
          ]),
          customServiceJsonLd({
            name: industry.primaryKeyword,
            description: industry.metaDescription,
            path: `/industries/${industry.slug}`,
            keywords: [industry.primaryKeyword],
          }),
        ]}
      />
      <main className="bg-primary text-primary min-h-screen px-6 pt-32 pb-24 md:px-12 md:pt-40">
        <div className="mx-auto max-w-[1400px]">
          <Link href="/industries" className="text-secondary text-[10px] tracking-[0.2em] uppercase">
            ← Industries
          </Link>
          <h1 className="font-display text-primary mt-6 max-w-4xl text-4xl font-light tracking-tight md:text-6xl">
            {industry.primaryKeyword}
          </h1>
          <p className="text-secondary mt-8 max-w-3xl text-base font-light md:text-lg">{industry.intro}</p>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-primary mb-6 text-2xl font-light">Challenges</h2>
              <ul className="text-secondary space-y-3 text-sm font-light">
                {industry.challenges.map((c) => (
                  <li key={c} className="border-border-primary border-b pb-3">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-primary mb-6 text-2xl font-light">How we help</h2>
              <ul className="text-secondary space-y-3 text-sm font-light">
                {industry.solutions.map((s) => (
                  <li key={s} className="border-border-primary border-b pb-3">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-display text-primary mb-6 text-2xl font-light">Related services</h2>
            <div className="flex flex-wrap gap-3">
              {related.map((service) =>
                service ? (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="border-border-primary hover:bg-secondary rounded-full border px-5 py-2.5 text-[10px] font-medium tracking-[0.15em] uppercase transition-colors"
                  >
                    {service.primaryKeyword}
                  </Link>
                ) : null
              )}
            </div>
            <Link
              href="/contact"
              className="bg-invert text-invert mt-10 inline-flex rounded-full px-8 py-4 text-[10px] font-medium tracking-[0.2em] uppercase"
            >
              Discuss {industry.name.toLowerCase()} software
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
