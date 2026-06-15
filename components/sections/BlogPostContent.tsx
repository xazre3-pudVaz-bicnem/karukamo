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
  content: { rendered: string }
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

function getFeaturedImage(post: WpPost) {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null
}

function getImageAlt(post: WpPost) {
  return post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered
}

function getCategories(post: WpPost) {
  return post._embedded?.['wp:term']?.[0] ?? []
}

function PostCard({ post }: { post: WpPost }) {
  const imageUrl = getFeaturedImage(post)
  const imageAlt = getImageAlt(post)
  const categories = getCategories(post)
  return (
    <li className="bg-ivory">
      <Link href={`/blog/${post.slug}`} className="block group hover:bg-white transition-colors h-full">
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
          <div className="flex items-center gap-3 mb-3">
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
          <p
            className="font-serif text-brown-deep text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </div>
      </Link>
    </li>
  )
}

export function BlogPostContent({ slug }: { slug: string }) {
  const [post, setPost] = useState<WpPost | null>(null)
  const [related, setRelated] = useState<WpPost[]>([])
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    fetch(`${WP_API}/posts?slug=${encodeURIComponent(slug)}&_embed`)
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data: unknown = await res.json()
        if (!Array.isArray(data) || data.length === 0) {
          setNotFound(true)
          return
        }
        const p = data[0] as WpPost
        setPost(p)

        // Fetch related posts
        const catIds = (p._embedded?.['wp:term']?.[0] ?? []).map((c) => c.id)
        const catParam = catIds.length > 0 ? `&categories=${catIds.join(',')}` : ''
        const relRes = await fetch(
          `${WP_API}/posts?_embed&per_page=3&exclude=${p.id}${catParam}`,
        )
        if (relRes.ok) {
          const relData: unknown = await relRes.json()
          if (Array.isArray(relData)) setRelated(relData as WpPost[])
        }
      })
      .catch((err: unknown) => {
        console.error('[WP] BlogPostContent error:', err)
        setNotFound(true)
      })
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) {
    return (
      <div className="section-py bg-white">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <p className="font-serif text-brown-light text-sm">読み込み中...</p>
        </div>
      </div>
    )
  }

  if (notFound || !post) {
    return (
      <div className="section-py bg-white">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <p className="font-serif text-brown-light text-sm mb-8">記事が見つかりませんでした。</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 label text-brown hover:text-brown-deep transition-colors"
            style={{ letterSpacing: '0.25em' }}
          >
            <span className="block w-6 h-px bg-current" />
            ブログ一覧へ
          </Link>
        </div>
      </div>
    )
  }

  const imageUrl = getFeaturedImage(post)
  const imageAlt = getImageAlt(post)
  const categories = getCategories(post)

  return (
    <>
      {/* Hero image */}
      {imageUrl && (
        <div className="relative overflow-hidden h-72 sm:h-96 md:h-[55vh]">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
      )}

      {/* Content */}
      <section className="section-py bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <div className="grid md:grid-cols-[1fr_280px] gap-16 md:gap-20 items-start">
            <div>
              {/* Post header */}
              <div className="mb-10">
                {categories[0] && (
                  <p className="label text-brand mb-3">{categories[0].name}</p>
                )}
                <h1
                  className="font-serif text-brown-deep text-2xl md:text-4xl leading-snug mb-4"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                <div className="flex items-center gap-4">
                  <span className="rule flex-shrink-0" />
                  <time className="label" dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
              </div>
              {/* Body */}
              <div
                className="wp-content"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </div>

            {/* Sidebar */}
            <aside className="hidden md:block sticky top-28">
              <p className="label mb-6">Navigation</p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-3 label text-brown hover:text-brown-deep transition-colors"
                style={{ letterSpacing: '0.25em' }}
              >
                <span className="block w-6 h-px bg-current" />
                ブログ一覧
              </Link>
              {categories.length > 0 && (
                <div className="mt-10 pt-8 border-t border-bone/40">
                  <p className="label mb-4">Category</p>
                  <ul>
                    {categories.map((cat) => (
                      <li key={cat.id} className="mb-2">
                        <span className="font-serif text-brown text-xs">{cat.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="section-py bg-ivory border-b border-bone/40">
          <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
            <div className="mb-12 md:mb-16">
              <p className="label mb-4">Related</p>
              <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
                関連記事
              </h2>
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/30">
              {related.map((rp) => <PostCard key={rp.id} post={rp} />)}
            </ul>
          </div>
        </section>
      )}
    </>
  )
}
