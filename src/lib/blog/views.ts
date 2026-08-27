import 'server-only'

import {
  blogViewCookieName,
  isLikelyBot,
  parseReadCookie,
  seedViewsForSlug,
  serializeReadCookie,
} from '@/lib/blog/view-seeds'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

export { blogViewCookieName, isLikelyBot, parseReadCookie, seedViewsForSlug, serializeReadCookie }

const FILE_PATH = path.join(process.cwd(), '.data', 'blog-views.json')

type ViewsFile = Record<string, number>

type GlobalViews = {
  extras?: Map<string, number>
  loaded?: boolean
}

function globalStore(): GlobalViews {
  const g = globalThis as typeof globalThis & { __nextcreavoBlogViews?: GlobalViews }
  if (!g.__nextcreavoBlogViews) g.__nextcreavoBlogViews = {}
  return g.__nextcreavoBlogViews
}

async function loadExtras() {
  const store = globalStore()
  if (store.extras && store.loaded) return store.extras
  store.extras = store.extras ?? new Map<string, number>()
  try {
    const raw = await readFile(FILE_PATH, 'utf8')
    const parsed = JSON.parse(raw) as ViewsFile
    for (const [slug, extra] of Object.entries(parsed)) {
      if (typeof extra === 'number' && extra > 0) store.extras.set(slug, extra)
    }
  } catch {
    // First run or ephemeral host — seeds still display.
  }
  store.loaded = true
  return store.extras
}

async function persistExtras(extras: Map<string, number>) {
  try {
    await mkdir(path.dirname(FILE_PATH), { recursive: true })
    const payload: ViewsFile = Object.fromEntries(extras)
    await writeFile(FILE_PATH, JSON.stringify(payload), 'utf8')
  } catch {
    // Serverless hosts may not allow writes; in-memory extras still apply for this instance.
  }
}

export async function getViewCount(slug: string) {
  const extras = await loadExtras()
  return seedViewsForSlug(slug) + (extras.get(slug) ?? 0)
}

export async function getViewCounts(slugs: string[]) {
  const extras = await loadExtras()
  const counts: Record<string, number> = {}
  for (const slug of slugs) {
    if (!slug) continue
    counts[slug] = seedViewsForSlug(slug) + (extras.get(slug) ?? 0)
  }
  return counts
}

export async function incrementViewCount(slug: string) {
  const extras = await loadExtras()
  const next = (extras.get(slug) ?? 0) + 1
  extras.set(slug, next)
  await persistExtras(extras)
  return seedViewsForSlug(slug) + next
}
