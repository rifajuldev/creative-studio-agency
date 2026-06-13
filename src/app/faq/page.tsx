import FAQPage from '@/FAQPage'
import JsonLd from '@/components/seo/JsonLd'
import { webPageJsonLd } from '@/lib/seo/json-ld'
import { staticPagesSeo } from '@/lib/seo/static-pages'

export const metadata = staticPagesSeo.faq

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd('NextCreavo FAQ', 'Answers about services, technology, workflows, and billing.', '/faq')}
      />
      <FAQPage />
    </>
  )
}
