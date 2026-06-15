const WP_API = 'https://wp.karukamo.jp/wp-json/wp/v2'

const FETCH_TIMEOUT_MS = 8000

export type WpPost = {
  id: number
  slug: string
  date: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
    }>
    'wp:term'?: Array<
      Array<{
        id: number
        name: string
        slug: string
      }>
    >
  }
}

export type WpCategory = {
  id: number
  name: string
  slug: string
}

async function wpFetch(url: string, options: RequestInit = {}): Promise<Response> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)
  try {
    const res = await fetch(url, { ...options, signal: controller.signal })
    clearTimeout(timer)
    return res
  } catch (err) {
    clearTimeout(timer)
    throw err
  }
}

export async function getPosts(
  page = 1,
  perPage = 12,
  revalidateSeconds = 3600,
): Promise<{ posts: WpPost[]; total: number; totalPages: number; error?: string }> {
  const cacheOpt: RequestInit =
    revalidateSeconds === 0
      ? { cache: 'no-store' }
      : { next: { revalidate: revalidateSeconds } }

  const url = `${WP_API}/posts?_embed&per_page=${perPage}&page=${page}&orderby=date&order=desc`

  try {
    const res = await wpFetch(url, cacheOpt)

    if (!res.ok) {
      let body = ''
      try { body = await res.text() } catch { /* ignore */ }
      const msg = `[WP] getPosts HTTP ${res.status} ${res.statusText} | url=${url} | body=${body.slice(0, 200)}`
      console.error(msg)
      return { posts: [], total: 0, totalPages: 0, error: msg }
    }

    const data: unknown = await res.json()

    if (!Array.isArray(data)) {
      const msg = `[WP] getPosts unexpected response type: ${JSON.stringify(data).slice(0, 200)}`
      console.error(msg)
      return { posts: [], total: 0, totalPages: 0, error: msg }
    }

    const posts = data as WpPost[]
    const total = parseInt(res.headers.get('X-WP-Total') ?? '0', 10)
    const totalPages = parseInt(res.headers.get('X-WP-TotalPages') ?? '0', 10)

    console.log(`[WP] getPosts ok: ${posts.length} posts fetched (total=${total})`)
    return { posts, total, totalPages }
  } catch (err) {
    const isTimeout = err instanceof Error && err.name === 'AbortError'
    const msg = isTimeout
      ? `[WP] getPosts timeout after ${FETCH_TIMEOUT_MS}ms | url=${url}`
      : `[WP] getPosts error | url=${url} | ${String(err)}`
    console.error(msg)
    return { posts: [], total: 0, totalPages: 0, error: msg }
  }
}

export async function getPostBySlug(slug: string): Promise<WpPost | null> {
  const url = `${WP_API}/posts?slug=${encodeURIComponent(slug)}&_embed`
  try {
    const res = await wpFetch(url, { next: { revalidate: 3600 } })
    if (!res.ok) {
      console.error(`[WP] getPostBySlug HTTP ${res.status} | slug=${slug}`)
      return null
    }
    const data: unknown = await res.json()
    if (!Array.isArray(data)) return null
    return (data as WpPost[])[0] ?? null
  } catch (err) {
    console.error(`[WP] getPostBySlug error | slug=${slug} | ${String(err)}`)
    return null
  }
}

export async function getRelatedPosts(postId: number, categoryIds: number[]): Promise<WpPost[]> {
  const categoriesParam = categoryIds.length > 0 ? `&categories=${categoryIds.join(',')}` : ''
  const url = `${WP_API}/posts?_embed&per_page=3&exclude=${postId}${categoriesParam}`
  try {
    const res = await wpFetch(url, { next: { revalidate: 3600 } })
    if (!res.ok) {
      console.error(`[WP] getRelatedPosts HTTP ${res.status}`)
      return []
    }
    const data: unknown = await res.json()
    return Array.isArray(data) ? (data as WpPost[]) : []
  } catch (err) {
    console.error(`[WP] getRelatedPosts error | ${String(err)}`)
    return []
  }
}

export async function getAllPostSlugs(): Promise<string[]> {
  const url = `${WP_API}/posts?per_page=100&_fields=slug&orderby=date&order=desc`
  try {
    const res = await wpFetch(url, { next: { revalidate: 3600 } })
    if (!res.ok) {
      console.error(`[WP] getAllPostSlugs HTTP ${res.status}`)
      return []
    }
    const data: unknown = await res.json()
    if (!Array.isArray(data)) return []
    return (data as Array<{ slug: string }>).map((p) => p.slug)
  } catch (err) {
    console.error(`[WP] getAllPostSlugs error | ${String(err)}`)
    return []
  }
}

export async function getAllCategories(): Promise<WpCategory[]> {
  const url = `${WP_API}/categories?per_page=100&hide_empty=true`
  try {
    const res = await wpFetch(url, { next: { revalidate: 3600 } })
    if (!res.ok) return []
    const data: unknown = await res.json()
    return Array.isArray(data) ? (data as WpCategory[]) : []
  } catch {
    return []
  }
}

export async function getCategoryBySlug(slug: string): Promise<WpCategory | null> {
  const url = `${WP_API}/categories?slug=${encodeURIComponent(slug)}`
  try {
    const res = await wpFetch(url, { next: { revalidate: 3600 } })
    if (!res.ok) return null
    const data: unknown = await res.json()
    if (!Array.isArray(data)) return null
    return (data as WpCategory[])[0] ?? null
  } catch {
    return null
  }
}

export async function getPostsByCategory(
  categoryId: number,
  page = 1,
  perPage = 12,
  revalidateSeconds = 3600,
): Promise<{ posts: WpPost[]; total: number; totalPages: number }> {
  const cacheOpt: RequestInit =
    revalidateSeconds === 0
      ? { cache: 'no-store' }
      : { next: { revalidate: revalidateSeconds } }
  const url = `${WP_API}/posts?_embed&categories=${categoryId}&per_page=${perPage}&page=${page}&orderby=date&order=desc`
  try {
    const res = await wpFetch(url, cacheOpt)
    if (!res.ok) {
      console.error(`[WP] getPostsByCategory HTTP ${res.status}`)
      return { posts: [], total: 0, totalPages: 0 }
    }
    const data: unknown = await res.json()
    if (!Array.isArray(data)) return { posts: [], total: 0, totalPages: 0 }
    const posts = data as WpPost[]
    const total = parseInt(res.headers.get('X-WP-Total') ?? '0', 10)
    const totalPages = parseInt(res.headers.get('X-WP-TotalPages') ?? '0', 10)
    return { posts, total, totalPages }
  } catch (err) {
    console.error(`[WP] getPostsByCategory error | ${String(err)}`)
    return { posts: [], total: 0, totalPages: 0 }
  }
}

export function getFeaturedImageUrl(post: WpPost): string | null {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null
}

export function getFeaturedImageAlt(post: WpPost): string {
  return post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered
}

export function getPostCategories(post: WpPost): WpCategory[] {
  return post._embedded?.['wp:term']?.[0] ?? []
}

export function getCategoryIds(post: WpPost): number[] {
  return getPostCategories(post).map((c) => c.id)
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&[^;]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}
