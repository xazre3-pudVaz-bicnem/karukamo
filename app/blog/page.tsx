import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import {
  getPosts,
  getFeaturedImageUrl,
  getFeaturedImageAlt,
  getPostCategories,
  formatDate,
  stripHtml,
} from '@/lib/wordpress'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'ブログ | カルカモ — ひたちなか市・那珂湊のグルメ情報',
  description:
    'カルカモのブログ。ひたちなか市・那珂湊のグルメ情報、クレープ・スイーツ・テイクアウト情報、那珂湊観光ガイドなど。お役立ち情報を発信中。',
  keywords: [
    'カルカモ ブログ', 'ひたちなか市 グルメ', '那珂湊 グルメ',
    '那珂湊 観光', 'ひたちなか市 テイクアウト', '那珂湊 クレープ',
  ],
  openGraph: {
    title: 'ブログ | カルカモ',
    description: 'ひたちなか市・那珂湊のグルメ・観光情報を発信するカルカモのブログ。',
    url: 'https://karukamo.jp/blog',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://karukamo.jp/blog' },
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const { page: pageParam } = await searchParams
  const currentPage = Math.max(1, parseInt(pageParam ?? '1', 10))
  const { posts, totalPages } = await getPosts(currentPage, 12, 0)

  return (
    <>
      {/* ━━━━ Page Header ━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn>
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
            <div className="mt-6">
              <p className="label mb-4">Information & Stories</p>
              <h1 className="font-display font-light text-5xl md:text-7xl lg:text-8xl leading-none text-brown-deep mb-6">
                BLOG
              </h1>
              <div className="flex items-center gap-4">
                <span className="rule flex-shrink-0" />
                <p className="label">ひたちなか市・那珂湊のグルメ・観光情報</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ Posts Grid ━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          {posts.length === 0 ? (
            <AnimateIn>
              <p className="font-serif text-brown-light text-sm">
                記事はまだありません。
              </p>
            </AnimateIn>
          ) : (
            <>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/30">
                {posts.map((post) => {
                  const imageUrl = getFeaturedImageUrl(post)
                  const imageAlt = getFeaturedImageAlt(post)
                  const categories = getPostCategories(post)
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
                              <span
                                className="label text-brand"
                                style={{ fontSize: '9px' }}
                              >
                                {categories[0].name}
                              </span>
                            )}
                            <span className="rule flex-shrink-0" />
                            <time
                              className="label"
                              style={{ fontSize: '9px' }}
                              dateTime={post.date}
                            >
                              {formatDate(post.date)}
                            </time>
                          </div>
                          <h2 className="font-serif text-brown-deep text-sm leading-relaxed mb-3">
                            {post.title.rendered}
                          </h2>
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

              {/* Pagination */}
              {totalPages > 1 && (
                <nav
                  aria-label="ページネーション"
                  className="mt-16 flex items-center justify-center gap-8"
                >
                  {currentPage > 1 && (
                    <Link
                      href={currentPage === 2 ? '/blog' : `/blog?page=${currentPage - 1}`}
                      className="inline-flex items-center gap-3 label text-brown hover:text-brown-deep transition-colors"
                      style={{ letterSpacing: '0.25em' }}
                    >
                      <span className="block w-8 h-px bg-current" />
                      Prev
                    </Link>
                  )}
                  <span className="font-display font-light text-brown-light text-xl leading-none">
                    {currentPage}
                    <span className="mx-2 text-bone">/</span>
                    {totalPages}
                  </span>
                  {currentPage < totalPages && (
                    <Link
                      href={`/blog?page=${currentPage + 1}`}
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
          )}
        </div>
      </section>

      {/* ━━━━ Instagram CTA ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 md:py-28 bg-brown-deep">
        <AnimateIn className="text-center">
          <p className="label text-ivory/30 mb-4">最新情報</p>
          <p className="font-display font-light text-3xl md:text-5xl text-ivory mb-8 leading-none">
            INSTAGRAM
          </p>
          <p className="font-serif text-ivory/50 text-sm mb-10">
            営業日・最新メニュー・おすすめ情報を毎日発信中
          </p>
          <a
            href="https://www.instagram.com/karukamo.2384/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-5 label text-ivory/60 hover:text-ivory transition-colors"
            style={{ letterSpacing: '0.3em' }}
          >
            <span className="block w-10 h-px bg-current" />
            @karukamo.2384
            <span className="block w-10 h-px bg-current" />
          </a>
        </AnimateIn>
      </section>
    </>
  )
}
