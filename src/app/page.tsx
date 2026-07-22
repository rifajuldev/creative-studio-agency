import HomePage from '@/components/home/HomePage'
import JsonLd from '@/components/seo/JsonLd'
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
          [...siteConfig.defaultKeywords]
        )}
      />
      <HomePage />
    </>
  )
}
