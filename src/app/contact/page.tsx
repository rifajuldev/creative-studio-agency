import ContactPage from '@/ContactPage'
import JsonLd from '@/components/seo/JsonLd'
import ServerTextBoost from '@/components/seo/ServerTextBoost'
import { SERVICES_DATA } from '@/data/services'
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
      <ServerTextBoost
        heading="What you can request from NextCreavo"
        intro="Use the contact form to hire NextCreavo for performance marketing and creative production. Share your goals, platforms, timeline, and budget so we can reply with a scoped proposal."
        items={SERVICES_DATA.map((service) => ({
          title: service.title,
          href: `/services/${service.id}`,
          summary: service.shortDesc,
        }))}
        outro="We also run Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, TikTok Ads, Twitter/X Ads, Google Business Profile optimization, and full social media management. Email info@nextcreavo.com if you prefer not to use the form."
      />
    </>
  )
}
