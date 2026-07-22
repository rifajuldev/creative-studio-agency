import ContactPage from '@/ContactPage'
import JsonLd from '@/components/seo/JsonLd'
import { webPageJsonLd } from '@/lib/seo/json-ld'
import { pageKeywordSets } from '@/lib/seo/keywords'
import { staticPagesSeo } from '@/lib/seo/static-pages'

export const metadata = staticPagesSeo.contact

export default function ContactRoutePage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd(
          'Hire NextCreavo | Free Quote for Social Ads & SEO',
          'Ready to grow on Facebook, Instagram, TikTok, LinkedIn, Twitter/X or Google? Contact NextCreavo for a free quote on ads, SEO, web, apps or AI — start your brief today.',
          '/contact',
          [...pageKeywordSets.contact]
        )}
      />
      <ContactPage />
    </>
  )
}
