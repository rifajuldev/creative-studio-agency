import Services from '@/Services'
import JsonLd from '@/components/seo/JsonLd'
import { servicesListJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { staticPagesSeo } from '@/lib/seo/static-pages'

export const metadata = staticPagesSeo.services

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(
            'NextCreavo Services',
            'Web development, digital marketing, animation, apps, AI, and UI/UX.',
            '/services'
          ),
          servicesListJsonLd(),
        ]}
      />
      <Services />
    </>
  )
}
