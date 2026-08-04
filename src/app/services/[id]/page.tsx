import Services from '@/Services'
import JsonLd from '@/components/seo/JsonLd'
import ServiceKeywordLanding from '@/components/services/ServiceKeywordLanding'
import { getAllServiceLandingSlugs, getServiceLandingBySlug } from '@/data/servicePages'
import { getServiceById, getServiceSeo, SERVICES_DATA } from '@/data/services'
import { breadcrumbJsonLd, customServiceJsonLd, faqPageJsonLd, serviceJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { buildPageMetadata } from '@/lib/seo/metadata'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = { params: Promise<{ id: string }> }

export async function generateStaticParams() {
  const legacy = SERVICES_DATA.map((service) => ({ id: service.id }))
  const landings = getAllServiceLandingSlugs().map((id) => ({ id }))
  const merged = new Map<string, { id: string }>()
  ;[...legacy, ...landings].forEach((item) => merged.set(item.id, item))
  return [...merged.values()]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const landing = getServiceLandingBySlug(id)
  if (landing) {
    return buildPageMetadata({
      title: landing.metaTitle,
      description: landing.metaDescription,
      keywords: [landing.primaryKeyword, ...landing.secondaryKeywords],
      path: `/services/${landing.slug}`,
    })
  }

  const seo = getServiceSeo(id)
  if (!seo) return { title: 'Service Not Found' }
  return buildPageMetadata(seo)
}

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params
  const landing = getServiceLandingBySlug(id)

  if (landing) {
    return (
      <>
        <JsonLd
          data={[
            webPageJsonLd(landing.metaTitle, landing.metaDescription, `/services/${landing.slug}`, [
              landing.primaryKeyword,
              ...landing.secondaryKeywords,
            ]),
            breadcrumbJsonLd([
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: landing.primaryKeyword, path: `/services/${landing.slug}` },
            ]),
            customServiceJsonLd({
              name: landing.primaryKeyword,
              description: landing.metaDescription,
              path: `/services/${landing.slug}`,
              keywords: [landing.primaryKeyword, ...landing.secondaryKeywords],
            }),
            faqPageJsonLd(landing.faqs),
          ]}
        />
        <ServiceKeywordLanding service={landing} />
      </>
    )
  }

  if (!getServiceById(id)) notFound()

  const seo = getServiceSeo(id)
  if (!seo) notFound()

  const serviceLd = serviceJsonLd(id, seo.keywords)

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(seo.title, seo.description, seo.path, seo.keywords),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: seo.title, path: seo.path },
          ]),
          ...(serviceLd ? [serviceLd] : []),
        ]}
      />
      <Services />
    </>
  )
}
