import {
  blogViewCookieName,
  getViewCount,
  getViewCounts,
  incrementViewCount,
  isLikelyBot,
  parseReadCookie,
  serializeReadCookie,
} from '@/lib/blog/views'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

function json(data: unknown, cookieValue?: string) {
  const response = NextResponse.json({ success: true, data })
  if (cookieValue !== undefined) {
    response.cookies.set(blogViewCookieName, cookieValue, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    })
  }
  return response
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')?.trim()
  const slugsParam = searchParams.get('slugs')?.trim()

  if (slugsParam) {
    const slugs = slugsParam
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean)
      .slice(0, 80)
    return json(await getViewCounts(slugs))
  }

  if (!slug) {
    return NextResponse.json({ success: false, message: 'slug required' }, { status: 400 })
  }

  return json({ slug, views: await getViewCount(slug) })
}

export async function POST(request: Request) {
  let slug = ''
  try {
    const body = (await request.json()) as { slug?: string }
    slug = body.slug?.trim() ?? ''
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid JSON' }, { status: 400 })
  }

  if (!slug || slug.length > 180 || !/^[\w-]+$/.test(slug)) {
    return NextResponse.json({ success: false, message: 'Invalid slug' }, { status: 400 })
  }

  if (isLikelyBot(request.headers.get('user-agent'))) {
    return json({ slug, views: await getViewCount(slug), counted: false })
  }

  const cookieHeader = request.headers.get('cookie') ?? ''
  const match = cookieHeader.split(';').find((part) => part.trim().startsWith(`${blogViewCookieName}=`))
  const existing = parseReadCookie(match ? decodeURIComponent(match.split('=').slice(1).join('=').trim()) : '')

  if (existing.includes(slug)) {
    return json({ slug, views: await getViewCount(slug), counted: false })
  }

  const views = await incrementViewCount(slug)
  return json({ slug, views, counted: true }, serializeReadCookie([...existing, slug]))
}
