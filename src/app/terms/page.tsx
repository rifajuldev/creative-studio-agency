import TermsPage from '@/TermsPage'
import JsonLd from '@/components/seo/JsonLd'
import { webPageJsonLd } from '@/lib/seo/json-ld'
import { staticPagesSeo } from '@/lib/seo/static-pages'

export const metadata = staticPagesSeo.terms

export default function TermsRoutePage() {
  return (
    <>
      <JsonLd data={webPageJsonLd('Terms of Service', 'NextCreavo terms and conditions.', '/terms')} />
      <TermsPage />
    </>
  )
}
