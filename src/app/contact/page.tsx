import ContactPage from '@/ContactPage'
import JsonLd from '@/components/seo/JsonLd'
import ServerTextBoost from '@/components/seo/ServerTextBoost'
import { SERVICES_DATA, getServiceCanonicalPath } from '@/data/services'
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { pageKeywordSets } from '@/lib/seo/keywords'
import { staticPagesSeo } from '@/lib/seo/static-pages'

export const metadata = staticPagesSeo.contact

export default function ContactRoutePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(
            'Hire NextCreavo | Free Strategy Call',
            'Contact NextCreavo for UI/UX, web & apps, 2D animation, AI integration, Google Ads, Facebook Ads, GMB, SEO and social — start your free strategy brief today.',
            '/contact',
            [...pageKeywordSets.contact]
          ),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
        ]}
      />
      <ContactPage />
      <ServerTextBoost
        heading="What you can request from NextCreavo"
        intro="Use the contact form to hire NextCreavo for performance marketing and creative production. Share your goals, platforms, timeline, and budget so we can reply with a scoped proposal."
        items={SERVICES_DATA.map((service) => ({
          title: service.title,
          href: getServiceCanonicalPath(service.id),
          summary: service.shortDesc,
        }))}
        outro="We also run Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, TikTok Ads, Twitter/X Ads, Google Business Profile optimization, and full social media management. Email info@nextcreavo.com if you prefer not to use the form."
      />
    </>
  )
}
