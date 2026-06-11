import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { RelatedPages } from '@/components/ui/RelatedPages'
import { menuCategories } from '@/data/menu'

export const metadata: Metadata = {
  title: 'ひたちなか市・那珂湊のスイーツ・アイス | カルカモ',
  description:
    'ひたちなか市・那珂湊のカルカモのスイーツ。名物ふぐもなかアイスをはじめ、バニラ・抹茶・ラムネなどのアイスクリーム、パリッと香ばしいたい焼きも。食べ歩き・テイクアウトに最適。',
  keywords: [
    'ひたちなか市 スイーツ', '那珂湊 スイーツ', 'ひたちなか市 アイス',
    '那珂湊 アイスクリーム', 'ふぐもなかアイス', 'カルカモ アイス',
    'たい焼き 那珂湊',
  ],
  openGraph: {
    title: 'ひたちなか市・那珂湊のスイーツ・アイス | カルカモ',
    description: '名物ふぐもなかアイスをはじめ、豊富なアイスクリームとたい焼き。那珂湊の食べ歩きスイーツ。',
    url: 'https://karukamo.jp/sweets',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://karukamo.jp/sweets' },
}

const sweets = menuCategories.find((c) => c.id === 'sweets')!
const taiyaki = menuCategories.find((c) => c.id === 'taiyaki')!

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://karukamo.jp' },
      { '@type': 'ListItem', position: 2, name: 'スイーツ・アイス', item: 'https://karukamo.jp/sweets' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: 'カルカモ スイーツメニュー',
    hasMenuSection: [
      {
        '@type': 'MenuSection',
        name: 'アイス・スイーツ',
        hasMenuItem: sweets.items.map((item) => ({
          '@type': 'MenuItem',
          name: item.name,
          offers: item.price ? { '@type': 'Offer', price: item.price, priceCurrency: 'JPY' } : undefined,
        })),
      },
      {
        '@type': 'MenuSection',
        name: 'たい焼き',
        hasMenuItem: taiyaki.items.map((item) => ({
          '@type': 'MenuItem',
          name: item.name,
          offers: item.price ? { '@type': 'Offer', price: item.price, priceCurrency: 'JPY' } : undefined,
        })),
      },
    ],
  },
]

export default function SweetsPage() {
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
                { label: 'Sweets' },
              ]}
            />
            <div className="mt-6">
              <p className="label mb-4">Ice Cream & Sweets</p>
              <h1 className="font-display font-light text-5xl md:text-7xl lg:text-8xl leading-none text-brown-deep mb-6">
                SWEETS
              </h1>
              <div className="flex items-center gap-4">
                <span className="rule flex-shrink-0" />
                <p className="label">那珂湊の食べ歩きスイーツ — アイス・たい焼き</p>
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
              <p className="label mb-4 text-brand">Sweets & Dessert</p>
              <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none mb-8">
                目にも嬉しい<br />スイーツたち
              </h2>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                ひたちなか市・那珂湊のカルカモは、クレープだけでなく豊富なスイーツも魅力のひとつ。
                旅の途中で食べたくなる、そんな「小さなごほうび」を大切にしています。
              </p>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                見た目にもかわいらしいアイスクリームは、インスタ映えスポットとしても人気。
                那珂湊観光の記念に一枚パシャリとして、旅の思い出を彩ってみてはいかがでしょうか。
              </p>
              <p className="font-serif text-brown text-sm leading-loose">
                アイスクリームだけでなく、パリッと香ばしく焼き上げたたい焼きも好評です。
                ひたちなか市に来たら必ず立ち寄りたい、そんなスイーツスタンドを目指しています。
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="photo-tall">
                <Image
                  src="/softcream.png"
                  alt="カルカモのソフトクリーム・アイスクリーム — 那珂湊"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ━━━━ Feature: Fugu Monaka ━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn className="mb-12 md:mb-16">
            <p className="label mb-4">Signature Item</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              名物 ふぐもなかアイス
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="max-w-2xl">
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                カルカモのスイーツといえば、まず「ふぐもなかアイス」を挙げる方が多いほど、
                地元でもすっかり有名になった名物メニューです。
                ふぐの形をしたユニークなもなかの器に、なめらかなアイスクリームをたっぷりと詰めた一品。
              </p>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                那珂湊の漁港にちなんだデザインは、観光のお土産や記念写真にもぴったり。
                「ひたちなか市に来た記念に食べたい」「那珂湊観光のハイライトにしたい」という方に
                特に人気の商品となっています。
              </p>
              <p className="font-serif text-brown text-sm leading-loose mb-8">
                パリッとしたもなかの食感と、ひんやりまろやかなアイスクリームのコントラストが絶妙。
                お子様から大人まで笑顔になれる、カルカモの代表的なスイーツです。
              </p>
              <div className="inline-flex items-center gap-4 border border-bone/60 px-6 py-3">
                <span className="label text-brand" style={{ fontSize: '9px' }}>名物</span>
                <span className="font-serif text-brown-deep text-sm">ふぐもなかアイス</span>
                <span className="font-display text-brown-light text-base ml-auto">¥500</span>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ Ice Cream Menu ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn className="mb-12 md:mb-16">
            <p className="label mb-4">Menu</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              アイスクリーム・たい焼き
            </h2>
          </AnimateIn>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <AnimateIn>
              <p className="font-serif font-bold text-brown-deep text-base mb-2">{sweets.name}</p>
              <p className="text-brown-light text-xs mb-6 leading-relaxed">{sweets.description}</p>
              <ul>
                {sweets.items.map((item, i) => (
                  <li
                    key={item.name}
                    className={`py-4 flex justify-between gap-6 items-center ${i > 0 ? 'border-t border-bone/40' : ''}`}
                  >
                    <div>
                      {item.tag && (
                        <span
                          className="label text-brand border border-brand/30 px-2 py-0.5 mb-1.5 inline-block"
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
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="font-serif font-bold text-brown-deep text-base mb-2">{taiyaki.name}</p>
              <p className="text-brown-light text-xs mb-6 leading-relaxed">{taiyaki.description}</p>
              <ul>
                {taiyaki.items.map((item, i) => (
                  <li
                    key={item.name}
                    className={`py-4 flex justify-between gap-6 items-center ${i > 0 ? 'border-t border-bone/40' : ''}`}
                  >
                    <p className="font-serif text-brown-deep text-sm">{item.name}</p>
                    <span className="font-display text-brown-light text-base shrink-0">
                      {item.price != null ? `¥${item.price.toLocaleString()}` : '—'}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-bone/40">
                <p className="font-serif text-brown text-sm leading-loose mb-6">
                  たい焼きはパリッと香ばしい皮が特徴。
                  小倉あんのほか、なめらかなカスタードや白あんも人気です。
                  お腹が空いたときの軽食として、またクレープやアイスと組み合わせて
                  ちょっとしたスイーツセットを楽しむのもおすすめです。
                </p>
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-4 label text-brown hover:text-brown-deep transition-colors"
                  style={{ letterSpacing: '0.25em' }}
                >
                  <span className="block w-8 h-px bg-current" />
                  Full Menu
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ━━━━ Related Pages ━━━━━━━━━━━━━━━━━━━━━━ */}
      <RelatedPages
        pages={[
          {
            href: '/crepe',
            label: 'クレープ',
            labelEn: 'Crepe',
            description: 'カルカモの看板メニュー。もちもち生地に生クリームとフルーツをたっぷりと。',
          },
          {
            href: '/takeout',
            label: 'テイクアウト特集',
            labelEn: 'Takeout',
            description: 'ひたちなか市・那珂湊のテイクアウトグルメとしてカルカモを活用する方法。',
          },
          {
            href: '/access',
            label: 'アクセス',
            labelEn: 'Access',
            description: '茨城県ひたちなか市湊本町27-3。那珂湊エリアへのアクセス情報。',
          },
        ]}
      />

      {/* ━━━━ Instagram CTA ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 md:py-28 bg-brown-deep">
        <AnimateIn className="text-center">
          <p className="label text-ivory/30 mb-4">Follow Us</p>
          <p className="font-display font-light text-3xl md:text-5xl text-ivory mb-8 leading-none">
            INSTAGRAM
          </p>
          <p className="font-serif text-ivory/50 text-sm mb-10">
            新フレーバー・営業日・おすすめ情報を発信中
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
