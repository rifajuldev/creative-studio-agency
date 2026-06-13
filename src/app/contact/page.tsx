import ContactPage from '@/ContactPage'
import JsonLd from '@/components/seo/JsonLd'
import { webPageJsonLd } from '@/lib/seo/json-ld'
import { staticPagesSeo } from '@/lib/seo/static-pages'

export const metadata = staticPagesSeo.contact

export default function ContactRoutePage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd(
          'Contact NextCreavo',
          'Start your project brief and get a comprehensive quote.',
          '/contact'
        )}
      />
      <ContactPage />
    </>
  )
}
