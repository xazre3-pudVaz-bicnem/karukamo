import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Breadcrumb, BreadcrumbSchema } from '@/components/ui/Breadcrumb'
import { getPostsPaginated } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'ブログ｜那珂湊・ひたちなか市テイクアウト情報 | カルカモ',
  description:
    'カルカモのブログ。那珂湊・ひたちなか市のテイクアウト・焼きそば・食べ歩き情報をお届けします。',
  keywords: [
    'カルカモ ブログ', 'ひたちなか市 テイクアウト', '那珂湊 焼きそば',
    '那珂湊 観光', 'ひたちなか市 グルメ', '那珂湊 食べ歩き',
  ],
  openGraph: {
    title: 'ブログ｜那珂湊・ひたちなか市テイクアウト情報 | カルカモ',
    description: '那珂湊・ひたちなか市のテイクアウト・焼きそば・食べ歩き情報をお届けします。',
    url: 'https://www.karukamo.jp/blog',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://www.karukamo.jp/blog' },
}

function formatDate(d: string) {
  return new Date(d + 'T00:00:00+09:00').toLocaleDateString('ja-JP', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const { page: pageParam } = await searchParams
  const currentPage = Math.max(1, parseInt(pageParam ?? '1', 10))
  const { posts, totalPages } = getPostsPaginated(currentPage)

  return (
    <>
      <BreadcrumbSchema items={[{ label: 'ブログ' }]} />

      {/* ── Header ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-bone/40" style={{ backgroundColor: '#FAF3E4' }}>
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn>
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'ブログ' }]} />
            <div className="mt-6">
              <p className="label mb-4 text-brand">Blog · お知らせ</p>
              <h1 className="font-serif font-bold text-4xl md:text-6xl leading-tight text-brown-deep mb-6">
                ブログ
              </h1>
              <div className="flex items-center gap-4">
                <span className="rule flex-shrink-0" />
                <p className="label">那珂湊・ひたちなか市のテイクアウト情報</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Posts ── */}
      <section className="section-py bg-ivory border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          {posts.length === 0 ? (
            <p className="font-serif text-brown-light text-sm">記事はまだありません。</p>
          ) : (
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/30">
              {posts.map((post) => (
                <li key={post.slug} className="bg-ivory">
                  <Link href={`/blog/${post.slug}`} className="block group hover:bg-white transition-colors h-full">
                    <div className="p-6 md:p-7">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="label text-brand" style={{ fontSize: '9px' }}>{post.category}</span>
                        <span className="rule flex-shrink-0" />
                        <time className="label" style={{ fontSize: '9px' }} dateTime={post.date}>
                          {formatDate(post.date)}
                        </time>
                      </div>
                      <h2 className="font-serif text-brown-deep text-sm leading-relaxed mb-3 group-hover:text-brand transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-brown-light text-xs leading-loose mb-5 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 label text-brown-light group-hover:text-brown transition-colors" style={{ fontSize: '9px' }}>
                        <span className="block w-4 h-px bg-current" />
                        続きを読む
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {totalPages > 1 && (
            <nav aria-label="ページネーション" className="mt-16 flex items-center justify-center gap-8">
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
        </div>
      </section>

      {/* ── Instagram CTA ── */}
      <section className="py-20 md:py-28 bg-brown-deep">
        <AnimateIn className="text-center">
          <p className="label text-ivory/30 mb-4">最新情報</p>
          <p className="font-display font-light text-3xl md:text-5xl text-ivory mb-8 leading-none">INSTAGRAM</p>
          <p className="font-serif text-ivory/50 text-sm mb-10">営業日・最新メニュー・おすすめ情報を発信中</p>
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
