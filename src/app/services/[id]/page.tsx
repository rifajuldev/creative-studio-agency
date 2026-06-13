import Services from '@/Services'
import JsonLd from '@/components/seo/JsonLd'
import { getServiceSeo, SERVICES_DATA } from '@/data/services'
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { buildPageMetadata } from '@/lib/seo/metadata'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = { params: Promise<{ id: string }> }

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({ id: service.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const seo = getServiceSeo(id)
  if (!seo) return { title: 'Service Not Found' }
  return buildPageMetadata(seo)
}

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params
  const seo = getServiceSeo(id)
  if (!seo) notFound()

  const serviceLd = serviceJsonLd(id)

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(seo.title, seo.description, seo.path),
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
