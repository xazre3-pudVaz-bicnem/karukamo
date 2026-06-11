import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Breadcrumb } from '@/components/ui/Breadcrumb'

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

const categories = [
  {
    href: '/blog/crepe',
    en: 'Crepe',
    name: 'クレープ',
    description: 'カルカモのクレープに関する情報。季節限定フレーバー・こだわりの生地・フルーツの話題など。',
  },
  {
    href: '/blog/sweets',
    en: 'Sweets',
    name: 'スイーツ',
    description: 'アイスクリーム・たい焼き・季節のスイーツ情報。名物ふぐもなかアイスの楽しみ方も。',
  },
  {
    href: '/blog/takoyaki',
    en: 'Takoyaki',
    name: 'たこ焼き',
    description: '大玉たこ焼きの魅力やトッピングの話題。食べ歩きのコツやおすすめの楽しみ方。',
  },
  {
    href: '/blog/okonomiyaki',
    en: 'Okonomiyaki',
    name: 'お好み焼き',
    description: '豚玉・イカ玉・明太もちチーズなど、お好み焼き各メニューのこだわりや楽しみ方。',
  },
  {
    href: '/blog/yakisoba',
    en: 'Yakisoba',
    name: '焼きそば',
    description: '美明豚を使ったこだわり焼きそば情報。地元食材の魅力・メニューの楽しみ方。',
  },
  {
    href: '/blog/takeout',
    en: 'Takeout',
    name: 'テイクアウト',
    description: 'テイクアウトグルメのお役立ち情報。食べ歩きのコツ・おすすめスポット・持ち帰り方法。',
  },
  {
    href: '/blog/nakaminato',
    en: 'Nakaminato',
    name: '那珂湊観光',
    description: '那珂湊エリアの観光スポット・グルメ情報。おさかな市場・周辺スポットガイド。',
  },
  {
    href: '/blog/hitachinaka',
    en: 'Hitachinaka',
    name: 'ひたちなか市グルメ',
    description: 'ひたちなか市のグルメ情報。テイクアウトスポット・ランチ・食べ歩きガイド。',
  },
]

export default function BlogPage() {
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

      {/* ━━━━ Categories ━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn className="mb-12 md:mb-16">
            <p className="label mb-4">Categories</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              カテゴリ
            </h2>
          </AnimateIn>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-bone/30">
            {categories.map((cat) => (
              <li key={cat.href} className="bg-ivory">
                <Link href={cat.href} className="block p-7 md:p-8 group hover:bg-white transition-colors h-full">
                  <p className="label text-brand mb-2" style={{ fontSize: '9px' }}>{cat.en}</p>
                  <p className="font-serif text-brown-deep text-sm mb-3">{cat.name}</p>
                  <p className="text-brown-light text-xs leading-loose mb-4">{cat.description}</p>
                  <span
                    className="mt-auto inline-flex items-center gap-2 label text-brown-light group-hover:text-brown transition-colors"
                    style={{ fontSize: '9px' }}
                  >
                    <span className="block w-4 h-px bg-current" />
                    記事を見る
                  </span>
                </Link>
              </li>
            ))}
          </ul>
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
