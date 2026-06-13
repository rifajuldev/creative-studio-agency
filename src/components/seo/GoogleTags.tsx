import { siteConfig } from '@/lib/seo/site'
import Script from 'next/script'

/** GTM script — injected into <head> as early as possible (beforeInteractive). */
export function GoogleTagManagerHead() {
  const { gtmId } = siteConfig
  if (!gtmId) return null

  return (
    <Script id="google-tag-manager" strategy="beforeInteractive">{`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');
    `}</Script>
  )
}

/** GTM noscript fallback — first element inside <body>. */
export function GoogleTagManagerBody() {
  const { gtmId } = siteConfig
  if (!gtmId) return null

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  )
}

/** Direct GA4 — only when GTM is not configured (avoid double tracking). */
export function GoogleAnalytics() {
  const { gtmId, gaMeasurementId } = siteConfig
  if (gtmId || !gaMeasurementId) return null

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaMeasurementId}');
      `}</Script>
    </>
  )
}
