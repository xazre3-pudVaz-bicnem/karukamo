import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { RelatedPages } from '@/components/ui/RelatedPages'
import { menuCategories } from '@/data/menu'

export const metadata: Metadata = {
  title: 'ひたちなか市・那珂湊の焼きそば | 美明豚使用 | カルカモ',
  description:
    'ひたちなか市・那珂湊のカルカモの焼きそば。地元ブランド「美明豚」を使ったこだわりの味。美明豚焼きそば・イカ焼きそば・オム焼きそばなど。テイクアウト・食べ歩きに。',
  keywords: [
    'ひたちなか市 焼きそば', '那珂湊 焼きそば', 'カルカモ 焼きそば',
    '美明豚 焼きそば', 'テイクアウト 焼きそば', '茨城 焼きそば',
  ],
  openGraph: {
    title: 'ひたちなか市・那珂湊の焼きそば | 美明豚使用 | カルカモ',
    description: '地元ブランド「美明豚」を使ったこだわりの焼きそば。那珂湊のテイクアウトに。',
    url: 'https://www.karukamo.jp/yakisoba',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://www.karukamo.jp/yakisoba' },
}

const yakisoba = menuCategories.find((c) => c.id === 'yakisoba')!

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://www.karukamo.jp' },
      { '@type': 'ListItem', position: 2, name: '焼きそば', item: 'https://www.karukamo.jp/yakisoba' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: 'カルカモ 焼きそばメニュー',
    hasMenuSection: {
      '@type': 'MenuSection',
      name: '焼きそば',
      hasMenuItem: yakisoba.items.map((item) => ({
        '@type': 'MenuItem',
        name: item.name,
        offers: item.price ? { '@type': 'Offer', price: item.price, priceCurrency: 'JPY' } : undefined,
      })),
    },
  },
]

export default function YakisobaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ━━━━ Page Header ━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-bone/40" style={{ backgroundColor: '#FAF3E4' }}>
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn>
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: '焼きそば' },
              ]}
            />
            <div className="mt-6">
              <p className="label mb-4">那珂湊の看板メニュー · Signature</p>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-brown-deep mb-6">
                那珂湊焼きそば
              </h1>
              <div className="flex items-center gap-4">
                <span className="rule flex-shrink-0" />
                <p className="label">美明豚使用 · ひたちなか市・那珂湊</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ Intro ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <AnimateIn>
              <p className="label mb-4 text-brand">Yakisoba</p>
              <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none mb-8">
                地元食材にこだわる<br />焼きそば
              </h2>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                カルカモの焼きそばは、地元茨城のブランド豚「美明豚（びめいとん）」を使うこだわりが特徴です。
                ひたちなか市を含む茨城県内で育てられた美明豚は、
                きめ細やかで柔らかな肉質と上品な甘みが魅力のブランドポークです。
              </p>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                その旨みたっぷりの美明豚を使った焼きそばは、
                シンプルな塩焼きそばに近いシーズニングながら、豚肉の旨みがしっかりと麺に絡み、
                食べごたえのある一品に仕上がっています。
                地域の食材を活かしてこそ出せる味わいを大切にしています。
              </p>
              <p className="font-serif text-brown text-sm leading-loose">
                イカ焼きそばではもっちりとした食感のイカが食欲をそそり、
                オム焼きそばはふわふわの卵に包まれたボリューム満点の逸品。
                ひたちなか市・那珂湊でランチやテイクアウトグルメとしておすすめです。
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="photo-portrait">
                <Image
                  src="/LINE_ALBUM_焼きそば_260616_3.jpg"
                  alt="カルカモの焼きそば — 美明豚使用 | ひたちなか市・那珂湊"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ━━━━ Bimei Pork ━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py border-b border-bone/40" style={{ backgroundColor: '#FAF3E4' }}>
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn className="mb-12 md:mb-16">
            <p className="label mb-4">Local Brand</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              美明豚とは
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="max-w-2xl">
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                美明豚は茨城県内で育てられたブランド豚で、飼育環境・飼料にこだわって育てられた高品質な豚肉です。
                きめが細かく柔らかな肉質、そして脂身の甘みが特徴で、
                焼きそばやお好み焼きなどの炒め物との相性が抜群です。
              </p>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                カルカモが美明豚を使うのは、地域の食文化を大切にしたいという想いから。
                ひたちなか市・那珂湊の地で生まれたお店として、地元の食材を積極的に取り入れることで、
                この街の美味しさをお伝えしたいと考えています。
              </p>
              <p className="font-serif text-brown-light text-xs leading-loose">
                ※ 仕入れ状況により一部食材が変更になる場合があります。
                最新情報はInstagramにてご確認ください。
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ Menu ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn className="mb-12 md:mb-16">
            <p className="label mb-4">Menu</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              焼きそばメニュー
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="max-w-md">
              <p className="font-serif text-brown-light text-xs mb-8 leading-relaxed">{yakisoba.description}</p>
              <ul>
                {yakisoba.items.map((item, i) => (
                  <li
                    key={item.name}
                    className={`py-6 flex justify-between gap-6 items-start ${i > 0 ? 'border-t border-bone/40' : ''}`}
                  >
                    <div>
                      {item.tag && (
                        <span
                          className="label text-brand border border-brand/30 px-2 py-0.5 mb-2 inline-block"
                          style={{ fontSize: '9px' }}
                        >
                          {item.tag}
                        </span>
                      )}
                      <p className="font-serif text-brown-deep text-sm">{item.name}</p>
                      {item.note && (
                        <p className="text-brown-light text-xs mt-0.5">{item.note}</p>
                      )}
                    </div>
                    <span className="font-display text-brown-light text-base shrink-0">
                      {item.price != null ? `¥${item.price.toLocaleString()}` : '—'}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-8 border-t border-bone/40">
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-4 label text-brown hover:text-brown-deep transition-colors"
                  style={{ letterSpacing: '0.25em' }}
                >
                  <span className="block w-8 h-px bg-current" />
                  Full Menu
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ Related Pages ━━━━━━━━━━━━━━━━━━━━━━ */}
      <RelatedPages
        pages={[
          {
            href: '/okonomiyaki',
            label: 'お好み焼き',
            labelEn: 'Okonomiyaki',
            description: '豚玉・イカ玉・明太もちチーズなど4種のお好み焼き。',
          },
          {
            href: '/takoyaki',
            label: 'たこ焼き',
            labelEn: 'Takoyaki',
            description: '大玉サイズの本格たこ焼き。外カリ中とろのテイクアウト。',
          },
          {
            href: '/lunch',
            label: 'ランチ利用',
            labelEn: 'Lunch',
            description: '那珂湊でランチをお探しの方へ。テイクアウトランチの活用ガイド。',
          },
        ]}
      />

      {/* ━━━━ Instagram CTA ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 md:py-28 bg-brown-deep">
        <AnimateIn className="text-center">
          <p className="label text-ivory/30 mb-4">Latest Info</p>
          <p className="font-display font-light text-3xl md:text-5xl text-ivory mb-8 leading-none">
            INSTAGRAM
          </p>
          <p className="font-serif text-ivory/50 text-sm mb-10">
            営業日・最新メニュー・おすすめ情報を発信中
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
