import type { Metadata } from 'next'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { BlogPostsList } from '@/components/sections/BlogPostsList'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'お知らせ・カルカモ日記 | カルカモ',
  description:
    'カルカモのお知らせ・日記。那珂湊の焼きそばをはじめ、新メニュー情報・季節のたより・那珂湊の日常を発信中。',
  keywords: [
    'カルカモ お知らせ', 'ひたちなか市 焼きそば', '那珂湊 焼きそば',
    '那珂湊 観光', 'ひたちなか市 テイクアウト', '那珂湊 グルメ',
  ],
  openGraph: {
    title: 'お知らせ・カルカモ日記 | カルカモ',
    description: '那珂湊のカルカモから。新メニュー・営業情報・季節のたよりをお届けします。',
    url: 'https://www.karukamo.jp/blog',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://www.karukamo.jp/blog' },
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
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-bone/40" style={{ backgroundColor: '#FAF3E4' }}>
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn>
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'お知らせ' }]} />
            <div className="mt-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-8 h-[2px] bg-brand flex-shrink-0" />
                <p className="label text-brand">Information · お知らせ</p>
              </div>
              <h1 className="font-serif font-bold text-4xl md:text-6xl leading-tight text-brown-deep mb-6">
                お知らせ・カルカモ日記
              </h1>
              <div className="flex items-center gap-4">
                <span className="rule flex-shrink-0" />
                <p className="label">那珂湊の焼きそば屋から、日々のたより</p>
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
