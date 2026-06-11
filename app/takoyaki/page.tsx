import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { RelatedPages } from '@/components/ui/RelatedPages'
import { menuCategories } from '@/data/menu'

export const metadata: Metadata = {
  title: 'ひたちなか市・那珂湊のたこ焼き | カルカモ',
  description:
    'ひたちなか市・那珂湊のカルカモの大玉たこ焼き。外はカリッ、中はとろっとジューシー。ソースマヨ・からしマヨの2種類。テイクアウト・食べ歩きに最適な大玉サイズ。',
  keywords: [
    'ひたちなか市 たこ焼き', '那珂湊 たこ焼き', 'カルカモ たこ焼き',
    'テイクアウト たこ焼き', '茨城 たこ焼き', '食べ歩き たこ焼き',
  ],
  openGraph: {
    title: 'ひたちなか市・那珂湊のたこ焼き | カルカモ',
    description: '外はカリッ、中はとろっ。大玉サイズでボリューム満点のたこ焼き。那珂湊のテイクアウトに。',
    url: 'https://karukamo.jp/takoyaki',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://karukamo.jp/takoyaki' },
}

const takoyaki = menuCategories.find((c) => c.id === 'takoyaki')!

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://karukamo.jp' },
      { '@type': 'ListItem', position: 2, name: 'たこ焼き', item: 'https://karukamo.jp/takoyaki' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: 'カルカモ たこ焼きメニュー',
    hasMenuSection: {
      '@type': 'MenuSection',
      name: 'たこ焼き',
      hasMenuItem: takoyaki.items.map((item) => ({
        '@type': 'MenuItem',
        name: item.name,
        offers: item.price ? { '@type': 'Offer', price: item.price, priceCurrency: 'JPY' } : undefined,
      })),
    },
  },
]

export default function TakoyakiPage() {
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
                { label: 'Takoyaki' },
              ]}
            />
            <div className="mt-6">
              <p className="label mb-4">Savory Food</p>
              <h1 className="font-display font-light text-5xl md:text-7xl lg:text-8xl leading-none text-brown-deep mb-6">
                TAKOYAKI
              </h1>
              <div className="flex items-center gap-4">
                <span className="rule flex-shrink-0" />
                <p className="label">大玉たこ焼き — ひたちなか市・那珂湊のテイクアウト</p>
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
              <p className="label mb-4 text-brand">Takoyaki</p>
              <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none mb-8">
                カルカモの<br />大玉たこ焼き
              </h2>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                ひたちなか市・那珂湊でたこ焼きをテイクアウトするなら、カルカモへ。
                通常より大きめの大玉サイズで、ボリューム感たっぷり。
                外側はしっかりカリッと焼き上がり、中はとろっとジューシーな仕上がりです。
              </p>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                たこ焼きといえばソースとマヨネーズの組み合わせが定番ですが、
                カルカモではからしマヨネーズを使った少しスパイシーなバージョンも楽しめます。
                からしのピリッとした刺激がアクセントになり、後を引くおいしさと評判です。
              </p>
              <p className="font-serif text-brown text-sm leading-loose">
                那珂湊観光の合間に、小腹が空いたときのおやつとして、
                またランチがわりにしっかり食べたいときにも。
                大玉のたこ焼きはどんなシーンにもぴったりの万能グルメです。
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="photo-portrait">
                <Image
                  src="/takoyaki.png"
                  alt="カルカモの大玉たこ焼き — ひたちなか市・那珂湊"
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
            <p className="label mb-4">Why So Good</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              おいしさのひみつ
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <ul className="max-w-2xl">
              {[
                {
                  title: '大玉サイズだからこそ生まれる食感',
                  body: '一般的なたこ焼きより大きめの大玉サイズにこだわっています。外がカリッと焼き上がりながら、中には十分な量の生地とたこが詰まっているため、一口食べると中からとろっとした食感と旨みが広がります。小さなたこ焼きではなかなか出せない、このコントラストが大玉ならではの美味しさです。',
                },
                {
                  title: '鮮度と火加減へのこだわり',
                  body: '注文を受けてから焼き上げるため、常に熱々の状態でお渡しできます。待ちたてを食べる楽しみも、テイクアウトスタンドならではの魅力。外がしっかり焼けているのに中が柔らかいという絶妙な仕上がりを生み出すため、火加減のコントロールを大切にしています。',
                },
                {
                  title: '2種類のトッピングで楽しみ方いろいろ',
                  body: 'ソースマヨ（ソース＋マヨネーズ）と、からしマヨ（からし風味マヨネーズ）の2種類から選べます。定番のソースマヨはたこ焼きの王道の味わい。からしマヨは、ピリッとした刺激が加わり、お酒のおつまみにもぴったり。初めての方はソースマヨ、リピーターにはからしマヨが人気です。',
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
              たこ焼きメニュー
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="max-w-md">
              <p className="font-serif text-brown-light text-xs mb-8 leading-relaxed">{takoyaki.description}</p>
              <ul>
                {takoyaki.items.map((item, i) => (
                  <li
                    key={item.name}
                    className={`py-6 flex justify-between gap-6 items-center ${i > 0 ? 'border-t border-bone/40' : ''}`}
                  >
                    <p className="font-serif text-brown-deep text-sm">{item.name}</p>
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

      {/* ━━━━ How to Enjoy ━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn className="mb-10 md:mb-14">
            <p className="label mb-4">Enjoy</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              食べ歩きのすすめ
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="max-w-2xl">
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                ひたちなか市・那珂湊エリアでのテイクアウトグルメとして、たこ焼きは特に人気の食べ歩きメニューのひとつです。
                容器に入れてお渡しするので、歩きながらでも食べやすい仕様になっています。
              </p>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                那珂湊おさかな市場でお買い物を楽しんだ後の一品としても最適。
                観光の合間に立ち寄って、熱々のたこ焼きをほおばる。
                そんな、ちょっとした幸せな時間を届けるのがカルカモのたこ焼きです。
              </p>
              <p className="font-serif text-brown-light text-xs leading-loose">
                ※ お持ち帰りでしばらく時間が経つと生地が柔らかくなります。熱々の状態でお楽しみいただくのがおすすめです。
              </p>
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
            description: '豚玉・イカ玉・明太もちチーズなど4種のお好み焼き。テイクアウトで楽しもう。',
          },
          {
            href: '/yakisoba',
            label: '焼きそば',
            labelEn: 'Yakisoba',
            description: '地元ブランド「美明豚」を使ったこだわりの焼きそば。',
          },
          {
            href: '/takeout',
            label: 'テイクアウト特集',
            labelEn: 'Takeout',
            description: 'ひたちなか市・那珂湊でテイクアウトを楽しむ方法とメニュー一覧。',
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
