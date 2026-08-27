'use client'

import { useEffect, useMemo, useState } from 'react'

type ViewsPayload = Record<string, number> | { slug: string; views: number }

function formatPeople(count: number) {
  return count.toLocaleString('en-US')
}

export function formatReadCount(count: number, compact = false) {
  if (!Number.isFinite(count) || count < 0) return '0'
  if (!compact) return formatPeople(count)
  if (count < 1000) return formatPeople(count)
  const value = count / 1000
  const rounded = value >= 10 ? Math.round(value).toString() : value.toFixed(1).replace(/\.0$/, '')
  return `${rounded}k`
}

async function fetchCounts(slugs: string[]) {
  const unique = [...new Set(slugs.filter(Boolean))]
  if (unique.length === 0) return {} as Record<string, number>
  const response = await fetch(`/api/blog/views?slugs=${encodeURIComponent(unique.join(','))}`, {
    cache: 'no-store',
  })
  if (!response.ok) return {}
  const json = (await response.json()) as { data?: ViewsPayload }
  if (json.data && !('views' in json.data)) return json.data as Record<string, number>
  return {}
}

export function useBlogViewCounts(slugs: string[], initials: Record<string, number> = {}) {
  const key = slugs.join('|')
  const [live, setLive] = useState<Record<string, number>>({})

  useEffect(() => {
    let cancelled = false
    void fetchCounts(slugs).then((next) => {
      if (!cancelled && Object.keys(next).length) setLive(next)
    })
    return () => {
      cancelled = true
    }
    // slugs membership is the live key
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return { ...initials, ...live }
}

export function useRecordBlogRead(slug: string | undefined, initial = 0) {
  const [state, setState] = useState<{ slug?: string; live: number | null }>({ slug, live: null })
  if (state.slug !== slug) {
    setState({ slug, live: null })
  }

  useEffect(() => {
    if (!slug) return
    let cancelled = false
    void fetch('/api/blog/views', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug }),
    })
      .then((response) => response.json())
      .then((json: { data?: { views?: number } }) => {
        if (!cancelled && typeof json.data?.views === 'number') setState({ slug, live: json.data.views })
      })
      .catch(() => undefined)
    return () => {
      cancelled = true
    }
  }, [slug])

  const count = state.live ?? initial
  const label = useMemo(() => `${formatPeople(count)} ${count === 1 ? 'person has' : 'people have'} read this`, [count])

  return { count, label }
}
