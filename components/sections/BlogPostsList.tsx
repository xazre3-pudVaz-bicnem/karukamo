'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const WP_API = 'https://wp.karukamo.jp/wp-json/wp/v2'

type WpPost = {
  id: number
  slug: string
  date: string
  title: { rendered: string }
  excerpt: { rendered: string }
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }>
    'wp:term'?: Array<Array<{ id: number; name: string; slug: string }>>
  }
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('ja-JP', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, '').replace(/&[^;]+;/g, ' ').replace(/\s+/g, ' ').trim()
}

function getFeaturedImage(post: WpPost) {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null
}

function getImageAlt(post: WpPost) {
  return post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered
}

function getCategories(post: WpPost) {
  return post._embedded?.['wp:term']?.[0] ?? []
}

export function BlogPostsList({ page = 1 }: { page?: number }) {
  const [posts, setPosts] = useState<WpPost[]>([])
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    const url = `${WP_API}/posts?_embed&per_page=12&page=${page}&orderby=date&order=desc`

    fetch(url)
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data: unknown = await res.json()
        if (!Array.isArray(data)) throw new Error('Invalid response format')
        setPosts(data as WpPost[])
        setTotalPages(parseInt(res.headers.get('X-WP-TotalPages') ?? '0', 10))
      })
      .catch((err: unknown) => {
        console.error('[WP] BlogPostsList fetch error:', err)
        setError(String(err))
      })
      .finally(() => setLoading(false))
  }, [page])

  if (loading) {
    return (
      <div className="py-20 text-center">
        <p className="font-serif text-brown-light text-sm">読み込み中...</p>
      </div>
    )
  }

  if (error || posts.length === 0) {
    return (
      <div className="py-10">
        <p className="font-serif text-brown-light text-sm mb-6">
          {error
            ? '記事の取得に失敗しました。しばらくしてからページを更新してください。'
            : '記事はまだありません。'}
        </p>
        <a
          href="https://www.instagram.com/karukamo.2384/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 label text-brown hover:text-brown-deep transition-colors"
          style={{ letterSpacing: '0.25em' }}
        >
          <span className="block w-6 h-px bg-current" />
          Instagram で最新情報を見る
        </a>
      </div>
    )
  }

  return (
    <>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/30">
        {posts.map((post) => {
          const imageUrl = getFeaturedImage(post)
          const imageAlt = getImageAlt(post)
          const categories = getCategories(post)
          return (
            <li key={post.id} className="bg-ivory">
              <Link
                href={`/blog/${post.slug}`}
                className="block group hover:bg-white transition-colors h-full"
              >
                <div className="photo-landscape overflow-hidden">
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-ivory-dark" />
                  )}
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex items-center gap-3 mb-4">
                    {categories[0] && (
                      <span className="label text-brand" style={{ fontSize: '9px' }}>
                        {categories[0].name}
                      </span>
                    )}
                    <span className="rule flex-shrink-0" />
                    <time className="label" style={{ fontSize: '9px' }} dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                  </div>
                  <h2
                    className="font-serif text-brown-deep text-sm leading-relaxed mb-3"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <p className="text-brown-light text-xs leading-loose mb-5 line-clamp-3">
                    {stripHtml(post.excerpt.rendered)}
                  </p>
                  <span
                    className="inline-flex items-center gap-2 label text-brown-light group-hover:text-brown transition-colors"
                    style={{ fontSize: '9px' }}
                  >
                    <span className="block w-4 h-px bg-current" />
                    続きを読む
                  </span>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>

      {totalPages > 1 && (
        <nav aria-label="ページネーション" className="mt-16 flex items-center justify-center gap-8">
          {page > 1 && (
            <Link
              href={page === 2 ? '/blog' : `/blog?page=${page - 1}`}
              className="inline-flex items-center gap-3 label text-brown hover:text-brown-deep transition-colors"
              style={{ letterSpacing: '0.25em' }}
            >
              <span className="block w-8 h-px bg-current" />
              Prev
            </Link>
          )}
          <span className="font-display font-light text-brown-light text-xl leading-none">
            {page}
            <span className="mx-2 text-bone">/</span>
            {totalPages}
          </span>
          {page < totalPages && (
            <Link
              href={`/blog?page=${page + 1}`}
              className="inline-flex items-center gap-3 label text-brown hover:text-brown-deep transition-colors"
              style={{ letterSpacing: '0.25em' }}
            >
              Next
              <span className="block w-8 h-px bg-current" />
            </Link>
          )}
        </nav>
      )}
    </>
  )
}
