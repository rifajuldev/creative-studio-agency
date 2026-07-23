import HomePage from '@/components/home/HomePage'
import JsonLd from '@/components/seo/JsonLd'
import ServerTextBoost from '@/components/seo/ServerTextBoost'
import { SERVICES_DATA } from '@/data/services'
import { webPageJsonLd } from '@/lib/seo/json-ld'
import { siteConfig } from '@/lib/seo/site'
import { staticPagesSeo } from '@/lib/seo/static-pages'

export const metadata = staticPagesSeo.home

export default function Page() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd(
          'NextCreavo | Facebook, Instagram, TikTok, LinkedIn & Google Ads Agency',
          siteConfig.description,
          '/',
          [...siteConfig.defaultKeywords.slice(0, 12)]
        )}
      />
      <HomePage />
      <ServerTextBoost
        heading="NextCreavo — creative studio for ads, SEO, web, and AI"
        intro={siteConfig.description}
        items={SERVICES_DATA.map((service) => ({
          title: service.title,
          href: `/services/${service.id}`,
          summary: service.shortDesc,
        }))}
        outro="From Google Ads and Facebook/Instagram campaigns to LinkedIn, TikTok, Twitter/X, Map Pack SEO, Next.js builds, apps, animation, and AI — NextCreavo helps modern brands earn more clicks, leads, and customers. Start at /contact."
      />
    </>
  )
}
