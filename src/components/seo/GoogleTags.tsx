import { siteConfig } from '@/lib/seo/site'
import Script from 'next/script'

/**
 * Google tag (gtag.js) with Consent Mode v2.
 * Defaults are denied until CookieConsent updates them.
 * Use either this OR GTM, not both.
 */
export default function GoogleTag() {
  const { gaMeasurementId } = siteConfig
  if (!gaMeasurementId) return null

  return (
    <>
      <Script id="google-consent-default" strategy="beforeInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('consent', 'default', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          analytics_storage: 'denied',
          functionality_storage: 'granted',
          personalization_storage: 'denied',
          security_storage: 'granted',
          wait_for_update: 500
        });
        gtag('set', 'ads_data_redaction', true);
        gtag('set', 'url_passthrough', true);
      `}</Script>
      <Script
        id="google-tag-js"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag-config" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', '${gaMeasurementId}', { anonymize_ip: true });
      `}</Script>
    </>
  )
}
