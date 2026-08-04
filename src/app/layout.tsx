import GoogleTag from '@/components/seo/GoogleTags'
import JsonLd from '@/components/seo/JsonLd'
import { organizationJsonLd, websiteJsonLd } from '@/lib/seo/json-ld'
import { buildDefaultMetadata } from '@/lib/seo/metadata'
import ClientProviders from '@/providers/ClientProviders'
import type { Metadata, Viewport } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = buildDefaultMetadata()

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#060606' },
  ],
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${outfit.variable}`}
    >
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <link rel="alternate" type="text/plain" href="/llm.txt" title="LLM.txt" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLMs full context" />
        <GoogleTag />
      </head>
      <body className="font-sans antialiased">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  )
}
