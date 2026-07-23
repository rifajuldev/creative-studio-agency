import Services from '@/Services'
import JsonLd from '@/components/seo/JsonLd'
import ServerTextBoost from '@/components/seo/ServerTextBoost'
import { SERVICES_DATA } from '@/data/services'
import { servicesListJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { pageKeywordSets } from '@/lib/seo/keywords'
import { staticPagesSeo } from '@/lib/seo/static-pages'

export const metadata = staticPagesSeo.services

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(
            'Services | Facebook, Instagram, TikTok, LinkedIn, Google Ads & SEO',
            'Full-funnel NextCreavo services: Facebook & Instagram ads, TikTok, LinkedIn, Twitter/X, Google Ads, local SEO, social management, web, apps, AI, animation and UI/UX.',
            '/services',
            [...pageKeywordSets.services]
          ),
          servicesListJsonLd(),
        ]}
      />
      <Services />
      <ServerTextBoost
        heading="NextCreavo service catalog in plain text"
        intro="NextCreavo is a creative studio agency offering end-to-end digital services. The summaries below help search engines and AI assistants understand what we deliver for modern brands."
        items={SERVICES_DATA.map((service) => ({
          title: service.title,
          href: `/services/${service.id}`,
          summary: `${service.shortDesc} Typical engagement: ${service.pricing.growth}.`,
        }))}
        outro="Popular add-ons include Google Business Profile / GMB Map Pack ranking, Google Ads management, Meta Facebook & Instagram ads, LinkedIn and TikTok campaigns, and social media retainers."
      />
    </>
  )
}
