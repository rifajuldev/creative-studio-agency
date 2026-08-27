import JsonLd from '@/components/seo/JsonLd'
import { INDUSTRY_PAGES, getAllIndustrySlugs, getIndustryBySlug } from '@/data/industries'
import { getServiceLandingBySlug } from '@/data/servicePages'
import { breadcrumbJsonLd, customServiceJsonLd, faqPageJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
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
    keywords: [
      industry.primaryKeyword,
      `${industry.name} software`,
      'custom software development',
      'industry software development',
    ],
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
          ...(industry.faqs?.length ? [faqPageJsonLd(industry.faqs)] : []),
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

          {industry.audience && industry.audience.length > 0 && (
            <div className="mt-16">
              <h2 className="font-display text-primary mb-6 text-2xl font-light">Who this is for</h2>
              <ul className="text-secondary max-w-3xl space-y-3 text-sm font-light">
                {industry.audience.map((item) => (
                  <li key={item} className="border-border-primary border-b pb-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

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

          {industry.sections && industry.sections.length > 0 && (
            <div className="mt-16 space-y-12">
              {industry.sections.map((section) => (
                <article key={section.heading}>
                  <h2 className="font-display text-primary mb-4 text-2xl font-light">{section.heading}</h2>
                  <p className="text-secondary max-w-3xl text-base leading-relaxed font-light">{section.body}</p>
                </article>
              ))}
            </div>
          )}

          {industry.faqs && industry.faqs.length > 0 && (
            <div className="mt-16">
              <h2 className="font-display text-primary mb-8 text-2xl font-light">FAQ</h2>
              <div className="max-w-3xl space-y-8">
                {industry.faqs.map((faq) => (
                  <div key={faq.question} className="border-border-primary border-b pb-6">
                    <h3 className="text-primary mb-3 text-lg font-medium">{faq.question}</h3>
                    <p className="text-secondary text-sm leading-relaxed font-light">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

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
            <div className="mt-12">
              <h2 className="font-display text-primary mb-6 text-2xl font-light">More industries</h2>
              <div className="flex flex-wrap gap-3">
                {INDUSTRY_PAGES.filter((item) => item.slug !== industry.slug).map((item) => (
                  <Link
                    key={item.slug}
                    href={`/industries/${item.slug}`}
                    className="border-border-primary hover:bg-secondary rounded-full border px-5 py-2.5 text-[10px] font-medium tracking-[0.15em] uppercase transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
