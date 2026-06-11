import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { RelatedPages } from '@/components/ui/RelatedPages'

export const metadata: Metadata = {
  title: '那珂湊・ひたちなか市のランチに｜カルカモのテイクアウトグルメ',
  description:
    '那珂湊・ひたちなか市でランチをお探しなら、カルカモのテイクアウトグルメがおすすめ。お好み焼き・焼きそば・たこ焼きでしっかりランチ、クレープやアイスでデザートまで完結。観光ランチ・地元ランチに。',
  keywords: [
    'ひたちなか市 ランチ', '那珂湊 ランチ', 'カルカモ ランチ',
    'ひたちなか市 テイクアウト ランチ', '那珂湊 グルメ ランチ',
    '茨城 ランチ テイクアウト', '那珂湊 お昼ごはん',
  ],
  openGraph: {
    title: '那珂湊・ひたちなか市のランチ | カルカモ',
    description: 'お好み焼き・焼きそば・たこ焼きでがっつりランチ。デザートまでカルカモで完結。',
    url: 'https://karukamo.jp/lunch',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://karukamo.jp/lunch' },
}

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://karukamo.jp' },
      { '@type': 'ListItem', position: 2, name: 'ランチ利用', item: 'https://karukamo.jp/lunch' },
    ],
  },
]

export default function LunchPage() {
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
                { label: 'Lunch' },
              ]}
            />
            <div className="mt-6">
              <p className="label mb-4">Lunch Guide</p>
              <h1 className="font-display font-light text-5xl md:text-7xl lg:text-8xl leading-none text-brown-deep mb-6">
                LUNCH
              </h1>
              <div className="flex items-center gap-4">
                <span className="rule flex-shrink-0" />
                <p className="label">那珂湊・ひたちなか市のテイクアウトランチ</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ Lead ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <AnimateIn>
              <p className="label mb-4 text-brand">Takeout Lunch</p>
              <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none mb-8">
                カルカモで<br />ランチを楽しむ
              </h2>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                ひたちなか市・那珂湊でランチをお探しの方へ、テイクアウト専門スタンド「カルカモ」のグルメをご紹介します。
                スイーツだけのイメージがあるかもしれませんが、
                お好み焼き・焼きそば・たこ焼きといった食事系メニューも充実しており、
                ランチとして十分なボリュームと満足感を提供しています。
              </p>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                テイクアウトで購入して、近くの公園やベンチ、海沿いで食べる「青空ランチ」は、
                那珂湊ならではの贅沢な時間の使い方。
                天気の良い日に外で食べるランチは、どんな味も格別においしく感じられます。
              </p>
              <p className="font-serif text-brown text-sm leading-loose">
                また、食事メニューに加えてクレープやアイスクリームをデザートとして組み合わせれば、
                ランチからデザートまでカルカモだけで完結。
                ひたちなか市観光やドライブのランチスポットとして、ぜひ活用してみてください。
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="photo-tall">
                <Image
                  src="/food-spread.png"
                  alt="カルカモのランチメニュー — ひたちなか市・那珂湊"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ━━━━ Lunch Menu ━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn className="mb-12 md:mb-16">
            <p className="label mb-4">Lunch Menu</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              ランチにおすすめのメニュー
            </h2>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-px bg-bone/30">
            {[
              {
                href: '/okonomiyaki',
                en: 'Okonomiyaki',
                name: 'お好み焼き',
                price: '¥500〜',
                desc: 'ふんわり生地に具材たっぷりのお好み焼き。豚玉・イカ玉・ツナマヨ・明太もちチーズの4種類から選べます。ランチとして食べ応えのある一品。',
                img: '/okonomiyaki.png',
              },
              {
                href: '/yakisoba',
                en: 'Yakisoba',
                name: '焼きそば',
                price: '¥500〜',
                desc: '地元ブランド「美明豚」使用の焼きそば。ガッツリ食べたい日のランチに最適。からしマヨがけや、ふわふわ卵を乗せたオム焼きそばも人気。',
                img: '/yakisoba.png',
              },
              {
                href: '/takoyaki',
                en: 'Takoyaki',
                name: 'たこ焼き',
                price: '¥500〜',
                desc: '大玉サイズでボリューム満点のたこ焼き。2〜3個で小腹を満たしたいときにも、複数個でがっつりランチにも対応できる万能グルメ。',
                img: '/takoyaki.png',
              },
            ].map((item) => (
              <AnimateIn key={item.href} className="bg-white">
                <Link href={item.href} className="block group">
                  <div className="photo-landscape overflow-hidden">
                    <Image
                      src={item.img}
                      alt={`カルカモの${item.name}`}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-baseline justify-between mb-2">
                      <p className="font-serif text-brown-deep text-sm">{item.name}</p>
                      <span className="font-display text-brown-light text-sm">{item.price}</span>
                    </div>
                    <p className="text-brown-light text-xs leading-loose">{item.desc}</p>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━ Dessert After Lunch ━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn className="mb-12 md:mb-16">
            <p className="label mb-4">Dessert</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              ランチの後はスイーツで<br />締めくくりを
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start max-w-3xl">
              <div>
                <Link href="/crepe" className="group block">
                  <p className="label text-brand mb-2" style={{ fontSize: '9px' }}>Crepe</p>
                  <p className="font-serif text-brown-deep text-base mb-3 group-hover:text-brown transition-colors">
                    クレープ
                  </p>
                  <p className="font-serif text-brown-light text-xs leading-loose mb-4">
                    ランチの後のデザートには、カルカモのクレープがぴったり。
                    もちもち生地に生クリームとフルーツが入った定番フレーバーから、
                    季節限定のスペシャルフレーバーまで。甘いものでランチを締めくくりましょう。
                  </p>
                  <span className="inline-flex items-center gap-2 label text-brown-light group-hover:text-brown transition-colors" style={{ fontSize: '9px' }}>
                    <span className="block w-4 h-px bg-current" />
                    クレープを見る
                  </span>
                </Link>
              </div>
              <div>
                <Link href="/sweets" className="group block">
                  <p className="label text-brand mb-2" style={{ fontSize: '9px' }}>Ice Cream</p>
                  <p className="font-serif text-brown-deep text-base mb-3 group-hover:text-brown transition-colors">
                    アイスクリーム・たい焼き
                  </p>
                  <p className="font-serif text-brown-light text-xs leading-loose mb-4">
                    さっぱりしたものが食べたいなら、アイスクリームがおすすめ。
                    バニラ・抹茶・ラムネ・ラムレーズンなど豊富なラインナップから、
                    気分に合わせて選んでみてください。名物のふぐもなかアイスも忘れずに。
                  </p>
                  <span className="inline-flex items-center gap-2 label text-brown-light group-hover:text-brown transition-colors" style={{ fontSize: '9px' }}>
                    <span className="block w-4 h-px bg-current" />
                    スイーツを見る
                  </span>
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ Lunch Spots ━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn className="mb-12 md:mb-16">
            <p className="label mb-4">Where to Eat</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              テイクアウトして食べる<br />おすすめスポット
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <ul className="max-w-2xl">
              {[
                {
                  title: '那珂湊おさかな市場周辺',
                  body: 'カルカモから徒歩圏内の那珂湊おさかな市場周辺は、観光客も多く賑わうエリア。市場でお買い物を楽しんだ後、テイクアウトして周辺のベンチや休憩スペースで食べるのがローカルスタイル。',
                },
                {
                  title: '港の見えるスポットで',
                  body: '那珂湊には港や海を眺められるスポットが点在しています。潮風を感じながら食べるテイクアウトランチは、なんとも言えない解放感があります。天気の良い日は特におすすめです。',
                },
                {
                  title: '車の中でゆっくりと',
                  body: '天気の悪い日や寒い季節は、車の中でのランチも選択肢のひとつ。テイクアウトで購入して、お気に入りの景色を眺めながら食べるのも贅沢な時間の使い方です。',
                },
                {
                  title: '近くの公園やひたちなか市内で',
                  body: 'ひたちなか市内には公園や広場も多数あります。近くの公園でピクニック気分のランチも楽しめます。ファミリーでのお出かけにもぴったりです。',
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

      {/* ━━━━ Access ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn className="mb-10 md:mb-14">
            <p className="label mb-4">Access</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              カルカモへのアクセス
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="max-w-lg">
              <dl className="space-y-0">
                {[
                  { dt: 'Store', dd: 'カルカモ' },
                  { dt: 'Address', dd: '茨城県ひたちなか市湊本町27-3' },
                  { dt: 'Area', dd: '那珂湊エリア' },
                  { dt: 'Hours', dd: 'Instagramをご確認ください' },
                ].map((row, i) => (
                  <div key={row.dt} className={`flex gap-8 py-5 ${i > 0 ? 'border-t border-bone/40' : ''}`}>
                    <dt className="w-16 flex-shrink-0 label pt-0.5">{row.dt}</dt>
                    <dd className="font-serif text-brown text-sm">{row.dd}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 flex flex-col gap-4">
                <Link
                  href="/access"
                  className="inline-flex items-center gap-4 label text-brown hover:text-brown-deep transition-colors"
                  style={{ letterSpacing: '0.25em' }}
                >
                  <span className="block w-8 h-px bg-current" />
                  アクセス詳細
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
            description: '豚玉・イカ玉・明太もちチーズなど4種のお好み焼き。ランチに最適。',
          },
          {
            href: '/yakisoba',
            label: '焼きそば',
            labelEn: 'Yakisoba',
            description: '美明豚使用のこだわり焼きそば。ランチにがっつり食べたいときに。',
          },
          {
            href: '/takoyaki',
            label: 'たこ焼き',
            labelEn: 'Takoyaki',
            description: '大玉たこ焼きでランチも食べ歩きも。ボリューム満点の一品。',
          },
          {
            href: '/takeout',
            label: 'テイクアウト特集',
            labelEn: 'Takeout',
            description: 'ひたちなか市・那珂湊のテイクアウトグルメ全メニュー紹介。',
          },
          {
            href: '/about-nakaminato',
            label: '那珂湊エリア情報',
            labelEn: 'About Nakaminato',
            description: '那珂湊の観光スポットやグルメ情報。ランチ計画の参考に。',
          },
          {
            href: '/access',
            label: 'アクセス',
            labelEn: 'Access',
            description: '茨城県ひたちなか市湊本町27-3へのアクセス情報。',
          },
        ]}
      />

      {/* ━━━━ Instagram CTA ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 md:py-28 bg-brown-deep">
        <AnimateIn className="text-center">
          <p className="label text-ivory/30 mb-4">営業情報はこちら</p>
          <p className="font-display font-light text-3xl md:text-5xl text-ivory mb-8 leading-none">
            INSTAGRAM
          </p>
          <p className="font-serif text-ivory/50 text-sm mb-10">
            営業日・最新メニュー・本日のおすすめを発信中
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
