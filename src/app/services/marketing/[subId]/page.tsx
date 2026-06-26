import JsonLd from '@/components/seo/JsonLd'
import MarketingSubServiceDetail from '@/components/services/MarketingSubServiceDetail'
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { buildPageMetadata } from '@/lib/seo/metadata'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

const SUB_SERVICES = [
  {
    id: 'gmb-optimization',
    title: 'GMB Optimization & Map Ranking',
    description:
      'Dominate local search. We optimize your Google My Business profile to rank in the coveted Map Pack, driving foot traffic and inbound calls.',
  },
  {
    id: 'google-ads',
    title: 'Google PPC Ads',
    description:
      'Hyper-targeted Google Search, Display, and Performance Max campaigns that turn clicks into predictable phone calls and leads.',
  },
  {
    id: 'facebook-ads',
    title: 'Facebook & Instagram Ads',
    description:
      'Thumb-stopping creatives and laser-focused demographic funnels to capture and retarget high-quality leads on Meta platforms.',
  },
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    description:
      'Engaging content and community management that builds loyal brand followers across your social channels.',
  },
] as const

type Props = { params: Promise<{ subId: string }> }

export async function generateStaticParams() {
  return SUB_SERVICES.map((service) => ({ subId: service.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subId } = await params
  const service = SUB_SERVICES.find((s) => s.id === subId)
  if (!service) return { title: 'Service Not Found' }

  return buildPageMetadata({
    title: `${service.title} | NextCreavo`,
    description: service.description,
    path: `/services/marketing/${service.id}`,
  })
}

export default async function MarketingSubServicePage({ params }: Props) {
  const { subId } = await params
  const service = SUB_SERVICES.find((s) => s.id === subId)
  if (!service) notFound()

  const path = `/services/marketing/${service.id}`

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(service.title, service.description, path),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Digital Marketing', path: '/services/marketing' },
            { name: service.title, path },
          ]),
        ]}
      />
      <MarketingSubServiceDetail subId={subId} />
    </>
  )
}
