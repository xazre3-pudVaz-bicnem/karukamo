import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { RelatedPages } from '@/components/ui/RelatedPages'
import { menuCategories } from '@/data/menu'

export const metadata: Metadata = {
  title: 'ひたちなか市・那珂湊のお好み焼き | カルカモ',
  description:
    'ひたちなか市・那珂湊のカルカモのお好み焼き。豚玉・イカ玉・ツナマヨ・明太もちチーズの4種類。テイクアウトで楽しめる本格お好み焼き。ランチにも食べ歩きにも。',
  keywords: [
    'ひたちなか市 お好み焼き', '那珂湊 お好み焼き', 'カルカモ お好み焼き',
    'テイクアウト お好み焼き', '茨城 お好み焼き', 'ひたちなか市 ランチ',
  ],
  openGraph: {
    title: 'ひたちなか市・那珂湊のお好み焼き | カルカモ',
    description: '豚玉・イカ玉・明太もちチーズなど4種。テイクアウトで楽しめる本格お好み焼き。',
    url: 'https://www.karukamo.jp/okonomiyaki',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://www.karukamo.jp/okonomiyaki' },
}

const okonomiyaki = menuCategories.find((c) => c.id === 'okonomiyaki')!

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://www.karukamo.jp' },
      { '@type': 'ListItem', position: 2, name: 'お好み焼き', item: 'https://www.karukamo.jp/okonomiyaki' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: 'カルカモ お好み焼きメニュー',
    hasMenuSection: {
      '@type': 'MenuSection',
      name: 'お好み焼き',
      hasMenuItem: okonomiyaki.items.map((item) => ({
        '@type': 'MenuItem',
        name: item.name,
        offers: item.price ? { '@type': 'Offer', price: item.price, priceCurrency: 'JPY' } : undefined,
      })),
    },
  },
]

export default function OkonomiyakiPage() {
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
                { label: 'Okonomiyaki' },
              ]}
            />
            <div className="mt-6">
              <p className="label mb-4">Savory Food</p>
              <h1 className="font-display font-light text-5xl md:text-7xl lg:text-8xl leading-none text-brown-deep mb-6">
                OKONOMIYAKI
              </h1>
              <div className="flex items-center gap-4">
                <span className="rule flex-shrink-0" />
                <p className="label">お好み焼き — ひたちなか市・那珂湊のテイクアウト</p>
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
              <p className="label mb-4 text-brand">Okonomiyaki</p>
              <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none mb-8">
                本格お好み焼きを<br />テイクアウトで
              </h2>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                ひたちなか市・那珂湊のカルカモでは、スイーツだけでなく本格的なお好み焼きもテイクアウトできます。
                香ばしく焼き上げたふんわりとした生地に、具材たっぷり。
                どこか懐かしくて、しっかりとお腹を満たしてくれる一品です。
              </p>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                豚玉・イカ玉といった定番ラインナップに加え、明太もちチーズという人気の一品も。
                チーズのとろけるコクと明太子のピリ辛さ、もちもちの食感が絶妙に絡み合い、
                一度食べると忘れられない味わいと評判です。
              </p>
              <p className="font-serif text-brown text-sm leading-loose">
                ランチとして、観光の合間のお腹を満たす一品として、または家族で取り分けながら食べるテイクアウトグルメとして。
                那珂湊でのさまざまなシーンに活躍してくれます。
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="photo-portrait">
                <Image
                  src="/okonomiyaki.png"
                  alt="カルカモのお好み焼き — ひたちなか市・那珂湊"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ━━━━ Commitment ━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn className="mb-12 md:mb-16">
            <p className="label mb-4">Our Style</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              カルカモのお好み焼き<br />3つの特徴
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <ul className="max-w-2xl">
              {[
                {
                  title: 'ふんわりとした食感の生地',
                  body: '外はしっかり焼き色がついていながら、中はふんわりとした生地の食感にこだわっています。生地の配合と焼き時間を丁寧に調整することで、テイクアウトしてもその美味しさが続くよう工夫しています。食べ応えがありながらも、しつこくない仕上がりです。',
                },
                {
                  title: '具材たっぷり、種類豊富',
                  body: '豚玉・イカ玉というスタンダードな選択肢から、チーズや明太子を組み合わせたユニークな一品まで、4種類のラインナップを用意しています。どれを食べようか迷うほどの充実したメニュー構成で、連日通っても飽きない楽しさがあります。',
                },
                {
                  title: 'おすすめ 明太もちチーズ',
                  body: '4種類の中でも特に目を引くのが「明太もちチーズお好み焼き」です。とろとろに溶けたチーズ、もちもちした食感のお餅、ピリ辛の明太子の組み合わせが絶妙。ちょっと贅沢な気分のときに選びたい一品です。',
                },
              ].map((item, i) => (
                <li key={item.title} className={`py-6 ${i > 0 ? 'border-t border-bone/40' : ''}`}>
                  <h3 className="font-serif text-brown-deep text-sm mb-2">{item.title}</h3>
                  <p className="font-serif text-brown-light text-xs leading-loose">{item.body}</p>
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ Menu ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn className="mb-12 md:mb-16">
            <p className="label mb-4">Menu</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              お好み焼きメニュー
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="max-w-md">
              <p className="font-serif text-brown-light text-xs mb-8 leading-relaxed">{okonomiyaki.description}</p>
              <ul>
                {okonomiyaki.items.map((item, i) => (
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
            href: '/takoyaki',
            label: 'たこ焼き',
            labelEn: 'Takoyaki',
            description: '大玉サイズでボリューム満点。外カリ中とろの大玉たこ焼き。',
          },
          {
            href: '/yakisoba',
            label: '焼きそば',
            labelEn: 'Yakisoba',
            description: '地元ブランド「美明豚」を使ったこだわりの焼きそば。',
          },
          {
            href: '/lunch',
            label: 'ランチ利用',
            labelEn: 'Lunch',
            description: '那珂湊でランチをお探しの方へ。テイクアウトランチの活用ガイド。',
          },
          {
            href: '/takeout',
            label: 'テイクアウト特集',
            labelEn: 'Takeout',
            description: 'ひたちなか市・那珂湊のテイクアウトグルメとしてカルカモを活用する方法。',
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
