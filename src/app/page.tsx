import HomePage from '@/components/home/HomePage'
import JsonLd from '@/components/seo/JsonLd'
import { webPageJsonLd } from '@/lib/seo/json-ld'
import { staticPagesSeo } from '@/lib/seo/static-pages'

export const metadata = staticPagesSeo.home

export default function Page() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd(
          'NextCreavo — Creative Studio Agency',
          'Crafting digital ecosystems for modern brands.',
          '/'
        )}
      />
      <HomePage />
    </>
  )
}
