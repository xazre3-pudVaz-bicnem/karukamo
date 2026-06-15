const WP_API = 'https://wp.karukamo.jp/wp-json/wp/v2'

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

export async function getPosts(
  page = 1,
  perPage = 12,
  revalidateSeconds = 3600,
): Promise<{ posts: WpPost[]; total: number; totalPages: number }> {
  const fetchOptions: RequestInit =
    revalidateSeconds === 0
      ? { cache: 'no-store' }
      : { next: { revalidate: revalidateSeconds } }
  try {
    const res = await fetch(
      `${WP_API}/posts?_embed&per_page=${perPage}&page=${page}&orderby=date&order=desc&status=publish`,
      fetchOptions,
    )
    if (!res.ok) {
      console.error(`[WP] getPosts failed: ${res.status} ${res.statusText}`)
      return { posts: [], total: 0, totalPages: 0 }
    }
    const posts: WpPost[] = await res.json()
    const total = parseInt(res.headers.get('X-WP-Total') ?? '0', 10)
    const totalPages = parseInt(res.headers.get('X-WP-TotalPages') ?? '0', 10)
    return { posts, total, totalPages }
  } catch (err) {
    console.error('[WP] getPosts error:', err)
    return { posts: [], total: 0, totalPages: 0 }
  }
}

export async function getPostBySlug(slug: string): Promise<WpPost | null> {
  try {
    const res = await fetch(
      `${WP_API}/posts?slug=${encodeURIComponent(slug)}&_embed&status=publish`,
      { next: { revalidate: 3600 } },
    )
    if (!res.ok) {
      console.error(`[WP] getPostBySlug failed: ${res.status} ${res.statusText}`)
      return null
    }
    const posts: WpPost[] = await res.json()
    return posts[0] ?? null
  } catch (err) {
    console.error('[WP] getPostBySlug error:', err)
    return null
  }
}

export async function getRelatedPosts(postId: number, categoryIds: number[]): Promise<WpPost[]> {
  try {
    const categories = categoryIds.join(',')
    const url = categories
      ? `${WP_API}/posts?_embed&per_page=3&exclude=${postId}&categories=${categories}&status=publish`
      : `${WP_API}/posts?_embed&per_page=3&exclude=${postId}&status=publish`
    const res = await fetch(url, { next: { revalidate: 3600 } })
    if (!res.ok) {
      console.error(`[WP] getRelatedPosts failed: ${res.status} ${res.statusText}`)
      return []
    }
    return res.json()
  } catch (err) {
    console.error('[WP] getRelatedPosts error:', err)
    return []
  }
}

export async function getAllPostSlugs(): Promise<string[]> {
  try {
    const res = await fetch(
      `${WP_API}/posts?per_page=100&_fields=slug&orderby=date&order=desc&status=publish`,
      { next: { revalidate: 3600 } },
    )
    if (!res.ok) {
      console.error(`[WP] getAllPostSlugs failed: ${res.status} ${res.statusText}`)
      return []
    }
    const posts: Array<{ slug: string }> = await res.json()
    return posts.map((p) => p.slug)
  } catch (err) {
    console.error('[WP] getAllPostSlugs error:', err)
    return []
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

export async function getAllCategories(): Promise<WpCategory[]> {
  try {
    const res = await fetch(
      `${WP_API}/categories?per_page=100&hide_empty=true`,
      { next: { revalidate: 3600 } },
    )
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

export async function getCategoryBySlug(slug: string): Promise<WpCategory | null> {
  try {
    const res = await fetch(
      `${WP_API}/categories?slug=${encodeURIComponent(slug)}`,
      { next: { revalidate: 3600 } },
    )
    if (!res.ok) return null
    const cats: WpCategory[] = await res.json()
    return cats[0] ?? null
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
  const fetchOptions: RequestInit =
    revalidateSeconds === 0
      ? { cache: 'no-store' }
      : { next: { revalidate: revalidateSeconds } }
  try {
    const res = await fetch(
      `${WP_API}/posts?_embed&categories=${categoryId}&per_page=${perPage}&page=${page}&orderby=date&order=desc&status=publish`,
      fetchOptions,
    )
    if (!res.ok) {
      console.error(`[WP] getPostsByCategory failed: ${res.status} ${res.statusText}`)
      return { posts: [], total: 0, totalPages: 0 }
    }
    const posts: WpPost[] = await res.json()
    const total = parseInt(res.headers.get('X-WP-Total') ?? '0', 10)
    const totalPages = parseInt(res.headers.get('X-WP-TotalPages') ?? '0', 10)
    return { posts, total, totalPages }
  } catch (err) {
    console.error('[WP] getPostsByCategory error:', err)
    return { posts: [], total: 0, totalPages: 0 }
  }
}
