import { siteConfig } from '@/lib/seo/site'
import type { MetadataRoute } from 'next'

/** Allow search engines + AI crawlers for maximum visibility */
const AI_USER_AGENTS = [
  'GPTBot',
  'ChatGPT-User',
  'Google-Extended',
  'Googlebot',
  'Googlebot-Image',
  'Bingbot',
  'ClaudeBot',
  'anthropic-ai',
  'PerplexityBot',
  'Applebot',
  'Applebot-Extended',
  'CCBot',
  'Bytespider',
  'meta-externalagent',
  'FacebookBot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/llms.txt', '/llm.txt', '/llms-full.txt'],
        disallow: ['/api/'],
      },
      ...AI_USER_AGENTS.map((userAgent) => ({
        userAgent,
        allow: ['/', '/llms.txt', '/llm.txt', '/llms-full.txt', '/blog', '/services', '/portfolio'],
        disallow: ['/api/'],
      })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url.replace(/^https?:\/\//, ''),
  }
}
