import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  category: string
  tags: string[]
  content: string
  excerpt: string
}

export type BlogPostMeta = Omit<BlogPost, 'content'>

function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true })
  }
}

function parseDate(d: string): Date {
  return new Date(d + 'T00:00:00+09:00')
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(markdown)
  return result.toString()
}

export function getAllPosts(): BlogPostMeta[] {
  ensureBlogDir()
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))

  const posts = files.map((filename) => {
    const filePath = path.join(BLOG_DIR, filename)
    const raw = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(raw)

    const slug = (data.slug as string | undefined) ?? filename.replace(/\.md$/, '')
    const excerpt = content.replace(/#{1,6}\s.+/g, '').replace(/\n+/g, ' ').trim().slice(0, 120) + '…'

    return {
      slug,
      title: (data.title as string) ?? slug,
      description: (data.description as string) ?? excerpt,
      date: (data.date as string) ?? '2026-01-01',
      category: (data.category as string) ?? 'お知らせ',
      tags: (data.tags as string[]) ?? [],
      excerpt,
    } satisfies BlogPostMeta
  })

  return posts.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  ensureBlogDir()
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))

  for (const filename of files) {
    const filePath = path.join(BLOG_DIR, filename)
    const raw = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(raw)

    const fileSlug = (data.slug as string | undefined) ?? filename.replace(/\.md$/, '')
    if (fileSlug !== slug) continue

    const htmlContent = await markdownToHtml(content)
    const excerpt = content.replace(/#{1,6}\s.+/g, '').replace(/\n+/g, ' ').trim().slice(0, 120) + '…'

    return {
      slug: fileSlug,
      title: (data.title as string) ?? fileSlug,
      description: (data.description as string) ?? excerpt,
      date: (data.date as string) ?? '2026-01-01',
      category: (data.category as string) ?? 'お知らせ',
      tags: (data.tags as string[]) ?? [],
      content: htmlContent,
      excerpt,
    }
  }

  return null
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
  return getAllPosts().filter((p) => p.category === category)
}

export function getAllCategories(): string[] {
  const posts = getAllPosts()
  return [...new Set(posts.map((p) => p.category))].sort()
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug)
}

export function getPostsPaginated(page: number, perPage = 12): { posts: BlogPostMeta[]; total: number; totalPages: number } {
  const all = getAllPosts()
  const total = all.length
  const totalPages = Math.max(1, Math.ceil(total / perPage))
  const safeP = Math.min(Math.max(1, page), totalPages)
  const posts = all.slice((safeP - 1) * perPage, safeP * perPage)
  return { posts, total, totalPages }
}
