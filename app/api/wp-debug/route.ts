import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const WP_API = 'https://wp.karukamo.jp/wp-json/wp/v2'

export async function GET() {
  const results: Record<string, unknown> = {
    timestamp: new Date().toISOString(),
    node_env: process.env.NODE_ENV,
  }

  // Test 1: basic connectivity
  const url1 = `${WP_API}/posts?per_page=3&orderby=date&order=desc`
  try {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 8000)
    const res = await fetch(url1, { cache: 'no-store', signal: controller.signal })
    clearTimeout(timer)
    const body: unknown = await res.json()
    results.basic = {
      status: res.status,
      ok: res.ok,
      xWpTotal: res.headers.get('X-WP-Total'),
      isArray: Array.isArray(body),
      count: Array.isArray(body) ? body.length : null,
      firstSlug: Array.isArray(body) && body.length > 0
        ? (body[0] as { slug?: string }).slug
        : null,
    }
  } catch (err) {
    results.basic = { error: String(err) }
  }

  // Test 2: with _embed
  const url2 = `${WP_API}/posts?_embed&per_page=3&orderby=date&order=desc`
  try {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 8000)
    const res = await fetch(url2, { cache: 'no-store', signal: controller.signal })
    clearTimeout(timer)
    const body: unknown = await res.json()
    results.withEmbed = {
      status: res.status,
      ok: res.ok,
      xWpTotal: res.headers.get('X-WP-Total'),
      isArray: Array.isArray(body),
      count: Array.isArray(body) ? body.length : null,
    }
  } catch (err) {
    results.withEmbed = { error: String(err) }
  }

  return NextResponse.json(results)
}
