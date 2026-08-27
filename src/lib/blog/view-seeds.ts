/** First-time dummy totals. Live increments stack on top of these seeds. */
export const BLOG_VIEW_SEEDS: Record<string, number> = {
  'nextjs-app-router-seo-core-web-vitals-2026': 1842,
  'ai-tools-for-developers-claude-agents-2026': 2310,
  'headless-cms-sanity-wordpress-shopify-2026': 1567,
  'google-business-profile-map-pack-ranking-2026': 2104,
  'claude-relume-ui-ux-design-systems-2026': 1298,
  'laravel-wordpress-shopify-vs-nextjs-2026': 1743,
}

export const blogViewCookieName = 'nc_blog_read'
const MAX_COOKIE_SLUGS = 80

function hashSeed(slug: string) {
  let hash = 2166136261
  for (let i = 0; i < slug.length; i += 1) {
    hash ^= slug.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  return 860 + ((hash >>> 0) % 2480)
}

export function seedViewsForSlug(slug: string) {
  if (!slug) return 0
  return BLOG_VIEW_SEEDS[slug] ?? hashSeed(slug)
}

export function parseReadCookie(value: string | undefined) {
  if (!value) return [] as string[]
  return value
    .split('|')
    .map((item) => item.trim())
    .filter(Boolean)
}

export function serializeReadCookie(slugs: string[]) {
  return slugs.slice(-MAX_COOKIE_SLUGS).join('|')
}

export function isLikelyBot(userAgent: string | null) {
  if (!userAgent) return false
  return /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|linkedinbot|twitterbot/i.test(userAgent)
}
