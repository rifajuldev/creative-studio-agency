import Services from '@/Services'
import JsonLd from '@/components/seo/JsonLd'
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
    </>
  )
}
