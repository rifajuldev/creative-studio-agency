import { siteConfig } from '@/lib/seo/site'
import Script from 'next/script'

/**
 * Google tag (gtag.js) — placed immediately after <head> on every page.
 * Use either this OR GTM, not both (Google recommends one tag per page).
 */
export default function GoogleTag() {
  const { gaMeasurementId } = siteConfig
  if (!gaMeasurementId) return null

  return (
    <>
      <Script
        id="google-tag-js"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
        strategy="beforeInteractive"
      />
      <Script id="google-tag-config" strategy="beforeInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaMeasurementId}');
      `}</Script>
    </>
  )
}
