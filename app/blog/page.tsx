import type { Metadata } from 'next'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { BlogPostsList } from '@/components/sections/BlogPostsList'

export const dynamic = 'force-dynamic'
export const revalidate = 0

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

      {/* ━━━━ Posts — client-side fetch ━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <BlogPostsList page={currentPage} />
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
