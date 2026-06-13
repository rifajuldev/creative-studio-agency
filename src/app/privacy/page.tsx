import PrivacyPage from '@/PrivacyPage'
import JsonLd from '@/components/seo/JsonLd'
import { webPageJsonLd } from '@/lib/seo/json-ld'
import { staticPagesSeo } from '@/lib/seo/static-pages'

export const metadata = staticPagesSeo.privacy

export default function PrivacyRoutePage() {
  return (
    <>
      <JsonLd data={webPageJsonLd('Privacy Policy', 'How NextCreavo handles your data.', '/privacy')} />
      <PrivacyPage />
    </>
  )
}
