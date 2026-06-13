import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import {
  getPostBySlug,
  getRelatedPosts,
  getAllPostSlugs,
  getFeaturedImageUrl,
  getFeaturedImageAlt,
  getPostCategories,
  getCategoryIds,
  formatDate,
  stripHtml,
} from '@/lib/wordpress'

export const revalidate = 3600

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  const imageUrl = getFeaturedImageUrl(post)
  const description = stripHtml(post.excerpt.rendered).slice(0, 120)
  const title = `${post.title.rendered} | カルカモ`
  const canonical = `https://karukamo.jp/blog/${slug}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonical,
      ...(imageUrl && { images: [{ url: imageUrl, width: 1200, height: 630 }] }),
      locale: 'ja_JP',
      type: 'article',
    },
    twitter: { card: 'summary_large_image' },
    alternates: { canonical },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const categories = getPostCategories(post)
  const categoryIds = getCategoryIds(post)
  const imageUrl = getFeaturedImageUrl(post)
  const imageAlt = getFeaturedImageAlt(post)
  const relatedPosts = await getRelatedPosts(post.id, categoryIds)

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title.rendered,
    datePublished: post.date,
    description: stripHtml(post.excerpt.rendered).slice(0, 120),
    publisher: {
      '@type': 'Organization',
      name: 'カルカモ',
      url: 'https://karukamo.jp',
    },
    ...(imageUrl && { image: imageUrl }),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ━━━━ Page Header ━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn>
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: post.title.rendered },
              ]}
            />
            <div className="mt-6 max-w-3xl">
              {categories[0] && (
                <p className="label text-brand mb-4">{categories[0].name}</p>
              )}
              <h1 className="font-serif text-brown-deep text-2xl md:text-4xl leading-snug mb-6">
                {post.title.rendered}
              </h1>
              <div className="flex items-center gap-4">
                <span className="rule flex-shrink-0" />
                <time className="label" dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ Featured Image ━━━━━━━━━━━━━━━━━━━━━━ */}
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

      {/* ━━━━ Content ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <div className="grid md:grid-cols-[1fr_280px] gap-16 md:gap-20 items-start">
            <AnimateIn>
              <div
                className="wp-content"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </AnimateIn>

            {/* Sidebar */}
            <AnimateIn delay={0.1}>
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

                <div className="mt-10 pt-8 border-t border-bone/40">
                  <p className="label mb-4">Share</p>
                  <a
                    href="https://www.instagram.com/karukamo.2384/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 label text-brown-light hover:text-brown transition-colors"
                    style={{ letterSpacing: '0.25em' }}
                  >
                    <span className="block w-4 h-px bg-current" />
                    Instagram
                  </a>
                </div>
              </aside>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ━━━━ Related Posts ━━━━━━━━━━━━━━━━━━━━━━ */}
      {relatedPosts.length > 0 && (
        <section className="section-py bg-ivory border-b border-bone/40">
          <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
            <AnimateIn className="mb-12 md:mb-16">
              <p className="label mb-4">Related</p>
              <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
                関連記事
              </h2>
            </AnimateIn>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/30">
              {relatedPosts.map((rPost) => {
                const rImageUrl = getFeaturedImageUrl(rPost)
                const rImageAlt = getFeaturedImageAlt(rPost)
                const rCategories = getPostCategories(rPost)
                return (
                  <li key={rPost.id} className="bg-ivory">
                    <Link
                      href={`/blog/${rPost.slug}`}
                      className="block group hover:bg-white transition-colors h-full"
                    >
                      <div className="photo-landscape overflow-hidden">
                        {rImageUrl ? (
                          <Image
                            src={rImageUrl}
                            alt={rImageAlt}
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
                          {rCategories[0] && (
                            <span
                              className="label text-brand"
                              style={{ fontSize: '9px' }}
                            >
                              {rCategories[0].name}
                            </span>
                          )}
                          <span className="rule flex-shrink-0" />
                          <time
                            className="label"
                            style={{ fontSize: '9px' }}
                            dateTime={rPost.date}
                          >
                            {formatDate(rPost.date)}
                          </time>
                        </div>
                        <p className="font-serif text-brown-deep text-sm leading-relaxed">
                          {rPost.title.rendered}
                        </p>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      )}

      {/* ━━━━ Back to Blog ━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 md:py-28 bg-brown-deep">
        <AnimateIn className="text-center">
          <p className="label text-ivory/30 mb-8">Blog</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-5 label text-ivory/60 hover:text-ivory transition-colors"
            style={{ letterSpacing: '0.3em' }}
          >
            <span className="block w-10 h-px bg-current" />
            ブログ一覧へ戻る
            <span className="block w-10 h-px bg-current" />
          </Link>
        </AnimateIn>
      </section>
    </>
  )
}
