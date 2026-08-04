import JsonLd from '@/components/seo/JsonLd'
import MarketingSubServiceDetail from '@/components/services/MarketingSubServiceDetail'
import { breadcrumbJsonLd, customServiceJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { buildPageMetadata } from '@/lib/seo/metadata'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

const SUB_SERVICES = [
  {
    id: 'gmb-optimization',
    title: 'GMB & Google Map Pack Ranking | Dominate Local Search',
    description:
      'Want more calls and foot traffic? NextCreavo optimizes Google Business Profile for Map Pack ranking — citations, reviews, photos and local SEO that boost Search Console visibility.',
    keywords: [
      'Google Business Profile optimization',
      'GMB optimization',
      'Google Map Pack ranking',
      'rank on Google Maps',
      'local SEO agency',
      'increase Google search visibility',
      'Google My Business optimization',
    ],
  },
  {
    id: 'google-ads',
    title: 'Google Ads Agency | More Clicks, Leads & Lower CPA',
    description:
      'Get high-intent clicks with NextCreavo Google Ads — Search, Display, Performance Max and YouTube campaigns tracked for ROAS, CPA and qualified lead growth.',
    keywords: [
      'Google Ads agency',
      'Google PPC agency',
      'Google Ads management',
      'Performance Max campaigns',
      'YouTube ads agency',
      'high ROAS Google Ads',
      'lower Google Ads CPA',
      'get more leads with Google Ads',
    ],
  },
  {
    id: 'facebook-ads',
    title: 'Facebook & Instagram Ads Agency | Meta ROAS Growth',
    description:
      'Scale with NextCreavo Meta ads — Facebook and Instagram creatives, Reels ads, retargeting and Advantage+ campaigns engineered for clicks, leads and measurable ROAS.',
    keywords: [
      'Facebook ads agency',
      'Instagram ads agency',
      'Meta ads agency',
      'Instagram Reels ads',
      'Facebook lead generation ads',
      'Meta Advantage+ campaigns',
      'social media advertising agency',
    ],
  },
  {
    id: 'social-media-management',
    title: 'Social Media Agency | Instagram, TikTok, LinkedIn, Facebook & X',
    description:
      'Grow on every channel with NextCreavo — Instagram, Facebook, TikTok, LinkedIn and Twitter/X content, community and ads strategy that builds followers, engagement and pipeline.',
    keywords: [
      'social media management agency',
      'Instagram marketing agency',
      'TikTok marketing agency',
      'LinkedIn marketing agency',
      'Facebook page management',
      'Twitter ads agency',
      'multi-channel social ads',
      'brand social media strategy',
    ],
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
    title: service.title,
    description: service.description,
    keywords: [...service.keywords],
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
          webPageJsonLd(service.title, service.description, path, [...service.keywords]),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Digital Marketing', path: '/services/marketing' },
            { name: service.title, path },
          ]),
          customServiceJsonLd({
            name: service.title,
            description: service.description,
            path,
            keywords: [...service.keywords],
          }),
        ]}
      />
      <MarketingSubServiceDetail subId={subId} />
    </>
  )
}
