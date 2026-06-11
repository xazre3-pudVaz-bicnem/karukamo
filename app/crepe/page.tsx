import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { RelatedPages } from '@/components/ui/RelatedPages'
import { menuCategories } from '@/data/menu'

export const metadata: Metadata = {
  title: 'ひたちなか市・那珂湊のクレープ | カルカモ',
  description:
    'ひたちなか市・那珂湊のテイクアウトスタンド「カルカモ」のクレープ。もちもち生地に生クリームとフルーツをたっぷり。チョコバナナ・ストロベリークリーム・季節限定フレーバーなど。那珂湊の食べ歩き・観光に。',
  keywords: [
    'ひたちなか市 クレープ', '那珂湊 クレープ', 'カルカモ クレープ',
    'テイクアウト クレープ', '茨城 クレープ', '食べ歩き クレープ',
  ],
  openGraph: {
    title: 'ひたちなか市・那珂湊のクレープ | カルカモ',
    description: 'もちもち生地に生クリームとフルーツをたっぷり。那珂湊の食べ歩きに人気のクレープスタンド。',
    url: 'https://karukamo.jp/crepe',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://karukamo.jp/crepe' },
}

const crepe = menuCategories.find((c) => c.id === 'crepe')!

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://karukamo.jp' },
      { '@type': 'ListItem', position: 2, name: 'クレープ', item: 'https://karukamo.jp/crepe' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: 'カルカモ クレープメニュー',
    description: 'ひたちなか市・那珂湊のカルカモのクレープメニュー',
    hasMenuSection: {
      '@type': 'MenuSection',
      name: 'クレープ',
      hasMenuItem: crepe.items.map((item) => ({
        '@type': 'MenuItem',
        name: item.name,
        description: item.note ?? '',
      })),
    },
  },
]

export default function CrepePage() {
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
                { label: 'Crepe' },
              ]}
            />
            <div className="mt-6">
              <p className="label mb-4">Crepe & Takeout Stand</p>
              <h1 className="font-display font-light text-5xl md:text-7xl lg:text-8xl leading-none text-brown-deep mb-6">
                CREPE
              </h1>
              <div className="flex items-center gap-4">
                <span className="rule flex-shrink-0" />
                <p className="label">ひたちなか市・那珂湊のクレープ専門スタンド</p>
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
              <p className="label mb-4 text-brand">Main Product</p>
              <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none mb-8">
                カルカモのクレープ
              </h2>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                那珂湊の港町に息づく小さなスタンド、カルカモ。その看板メニューがクレープです。
                薄く焼き上げたもちもちの生地に、たっぷりの生クリームとみずみずしいフルーツをくるりと包み込む。
                一口ほおばった瞬間に広がる、やさしくて豊かな甘さ。
              </p>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                ひたちなか市の中でも特に活気あふれる那珂湊エリア。
                おさかな市場や周辺の観光スポットを散策しながら、手軽に楽しめる食べ歩きグルメとして、
                地元の方だけでなく観光客の方にも愛されています。
              </p>
              <p className="font-serif text-brown text-sm leading-loose">
                カルカモのクレープは、テイクアウト専門スタンドならではの作りたての美味しさをそのままお届けします。
                行列ができる日もあるほど、那珂湊を代表するスイーツとなりました。
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="photo-portrait">
                <Image
                  src="/crepe-stand.png"
                  alt="カルカモのクレープスタンド — ひたちなか市・那珂湊"
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
            <p className="label mb-4">Our Commitment</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              こだわりの一枚
            </h2>
          </AnimateIn>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <AnimateIn>
              <div className="photo-tall">
                <Image
                  src="/crepe-closeup.png"
                  alt="カルカモのクレープ クローズアップ"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1} className="md:pt-4">
              <ul className="space-y-0">
                {[
                  {
                    title: 'もちもちの生地',
                    body: 'クレープの命は生地にあります。カルカモでは薄く均一に焼き上げながら、しっかりともちもち感が残る生地にこだわっています。冷めても美味しく食べられるよう、配合と焼き加減を丁寧に調整しています。テイクアウトしてゆっくり歩きながら食べても、最後の一口まで美味しさが続きます。',
                  },
                  {
                    title: '旬のフルーツと生クリーム',
                    body: 'フィリングには、季節ごとの旬のフルーツを使用しています。甘酸っぱいイチゴ、完熟バナナなど、素材そのものの味わいを大切に。生クリームはふんわりと仕上げ、甘さを引き立てながらも重くならないよう丁寧に作られています。',
                  },
                  {
                    title: '食べ歩きを考えたラッピング',
                    body: '那珂湊の海風の中でも食べやすいよう、ラッピングにも工夫があります。歩きながらでもこぼれにくく、手を汚さずに最後まで楽しめる。観光エリアでの食べ歩きグルメとして、使いやすさも大切にしています。',
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
        </div>
      </section>

      {/* ━━━━ Menu ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn className="mb-12 md:mb-16">
            <p className="label mb-4">Menu</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              クレープメニュー
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="max-w-xl">
              <p className="font-serif text-brown-light text-xs mb-8 leading-loose">{crepe.description}</p>
              <ul>
                {crepe.items.map((item, i) => (
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
              <p className="font-serif text-brown-light text-xs mt-8 leading-loose">
                ※ 季節限定フレーバーは時期によって内容が変わります。最新情報は
                <a
                  href="https://www.instagram.com/karukamo.2384/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand underline underline-offset-2"
                >
                  Instagram
                </a>
                でご確認ください。
              </p>
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

      {/* ━━━━ Seasonal ━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn className="mb-10 md:mb-14">
            <p className="label mb-4">Seasonal</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              季節限定フレーバー
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="max-w-2xl">
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                カルカモでは通年メニューに加え、季節ごとの旬の食材を使った限定フレーバーをご用意しています。
                春は国産いちごを使ったフレッシュな一本、夏はトロピカルフルーツのさわやかな組み合わせ、
                秋は和栗や柿を使った日本らしい味わい、冬はショコラ系の濃厚なフレーバーなど、
                季節の移ろいとともに変わるラインナップを楽しんでいただけます。
              </p>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                「今日はどんなフレーバーかな？」というわくわく感も、カルカモのクレープの醍醐味のひとつ。
                何度来ても新しい楽しみがある、そんな場所であり続けたいと思っています。
              </p>
              <p className="font-serif text-brown-light text-xs leading-loose">
                季節限定フレーバーの詳細はInstagramにて随時更新しています。
                お越しになる前にチェックしていただくと、楽しみが一層広がります。
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ How to Enjoy ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn className="mb-10 md:mb-14">
            <p className="label mb-4">How to Enjoy</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              楽しみ方
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 max-w-3xl">
              <div>
                <p className="font-serif font-bold text-brown-deep text-sm mb-3">那珂湊散策のお供に</p>
                <p className="font-serif text-brown-light text-xs leading-loose">
                  那珂湊おさかな市場や周辺の観光スポットを回るついでに、ぜひカルカモへ立ち寄ってください。
                  片手に持ちながら歩けるクレープは、食べ歩き観光にぴったり。
                  港の潮風を感じながら食べる一本は、格別においしく感じられます。
                  ひたちなか市の観光スポットをめぐる途中の休憩にも最適です。
                </p>
              </div>
              <div>
                <p className="font-serif font-bold text-brown-deep text-sm mb-3">テイクアウトして持ち帰り</p>
                <p className="font-serif text-brown-light text-xs leading-loose">
                  クレープは持ち帰りにも対応しています。おうちや車の中でゆっくり食べたい方もお気軽にどうぞ。
                  お子様へのおみやげや、ちょっとしたプレゼントにも喜ばれます。
                  グループでお越しの際は、それぞれ好みのフレーバーを選んで食べ比べするのもおすすめです。
                  ひたちなか市でのお出かけの思い出に、ぜひカルカモのクレープをどうぞ。
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ Related Pages ━━━━━━━━━━━━━━━━━━━━━━ */}
      <RelatedPages
        pages={[
          {
            href: '/sweets',
            label: 'アイス・スイーツ',
            labelEn: 'Sweets',
            description: '名物ふぐもなかアイス・ソフトクリーム・たい焼きなど、カルカモのスイーツ一覧。',
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
          {
            href: '/menu',
            label: 'メニュー一覧',
            labelEn: 'Full Menu',
            description: 'カルカモの全メニュー。クレープ・アイス・たこ焼き・お好み焼き・焼きそば。',
          },
          {
            href: '/lunch',
            label: 'ランチ利用',
            labelEn: 'Lunch',
            description: '那珂湊でランチをお探しの方へ。カルカモのテイクアウトランチ活用ガイド。',
          },
          {
            href: '/about-nakaminato',
            label: '那珂湊エリアについて',
            labelEn: 'About Nakaminato',
            description: 'カルカモが立地する那珂湊エリアの観光・グルメ情報。',
          },
        ]}
      />

      {/* ━━━━ Instagram CTA ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 md:py-28 bg-brown-deep">
        <AnimateIn className="text-center">
          <p className="label text-ivory/30 mb-4">Latest Flavors</p>
          <p className="font-display font-light text-3xl md:text-5xl text-ivory mb-8 leading-none">
            INSTAGRAM
          </p>
          <p className="font-serif text-ivory/50 text-sm mb-10">
            季節限定フレーバー・営業日情報を毎日更新中
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
