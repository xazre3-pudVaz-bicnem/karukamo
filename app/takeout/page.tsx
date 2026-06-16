import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { RelatedPages } from '@/components/ui/RelatedPages'
import { menuCategories } from '@/data/menu'

export const metadata: Metadata = {
  title: 'ひたちなか市・那珂湊のテイクアウトならカルカモ｜焼きそば・たこ焼き・お好み焼き',
  description:
    'ひたちなか市・那珂湊でテイクアウトを楽しむならカルカモ。焼きそば・たこ焼き・お好み焼き・クレープ・アイスが揃う食べ歩きグルメスタンド。那珂湊観光・ドライブ・ランチにも最適。営業日はInstagramをご確認ください。',
  keywords: [
    'ひたちなか市 テイクアウト', '那珂湊 テイクアウト', 'カルカモ テイクアウト',
    'ひたちなか市 食べ歩き', '那珂湊 食べ歩き', '茨城 テイクアウト グルメ',
    '那珂湊 グルメ', 'ひたちなか市 グルメ',
  ],
  openGraph: {
    title: 'ひたちなか市・那珂湊のテイクアウト特集 | カルカモ',
    description: '焼きそば・たこ焼き・お好み焼き・クレープ・アイスが揃う食べ歩きグルメスタンド。那珂湊観光に。',
    url: 'https://karukamo.jp/takeout',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://karukamo.jp/takeout' },
}

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://karukamo.jp' },
      { '@type': 'ListItem', position: 2, name: 'テイクアウト特集', item: 'https://karukamo.jp/takeout' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'カルカモ',
    description: 'ひたちなか市・那珂湊の焼きそば＆テイクアウトスタンド',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '湊本町27-3',
      addressLocality: 'ひたちなか市',
      addressRegion: '茨城県',
      addressCountry: 'JP',
    },
    servesCuisine: ['焼きそば', 'たこ焼き', 'お好み焼き', 'クレープ', 'アイスクリーム'],
    hasMenu: 'https://karukamo.jp/menu',
    url: 'https://karukamo.jp',
    sameAs: ['https://www.instagram.com/karukamo.2384/'],
  },
]

const allMenuItems = menuCategories.map((cat) => ({
  ...cat,
  items: cat.items.slice(0, 3),
}))

export default function TakeoutPage() {
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
                { label: 'Takeout' },
              ]}
            />
            <div className="mt-6">
              <p className="label mb-4">Takeout & Street Food</p>
              <h1 className="font-display font-light text-5xl md:text-7xl lg:text-8xl leading-none text-brown-deep mb-6">
                TAKEOUT
              </h1>
              <div className="flex items-center gap-4">
                <span className="rule flex-shrink-0" />
                <p className="label">ひたちなか市・那珂湊の食べ歩きグルメスタンド</p>
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
              <p className="label mb-4 text-brand">Takeout Specialist</p>
              <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none mb-8">
                ひたちなか市・那珂湊の<br />テイクアウト専門店
              </h2>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                カルカモは、茨城県ひたちなか市湊本町に立つテイクアウト専門のグルメスタンドです。
                焼きそば・たこ焼き・お好み焼き・クレープ・アイスクリームと、
                食事系からスイーツまで幅広いメニューが揃っているのが最大の特徴。
              </p>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                那珂湊おさかな市場周辺の食べ歩きエリアに立地しており、
                観光のついでに気軽に立ち寄れる立地も人気の理由のひとつ。
                地元の方から観光客の方まで、幅広いお客様に愛されています。
              </p>
              <p className="font-serif text-brown text-sm leading-loose">
                「今日の気分は何を食べよう？」という楽しさも、
                カルカモのテイクアウトの醍醐味。
                ひとりでもカップルでも、家族でもグループでも、
                それぞれに好みの一品を選んで食べ歩きを楽しんでいただけます。
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="photo-tall">
                <Image
                  src="/food-spread.png"
                  alt="カルカモのテイクアウトグルメ — ひたちなか市・那珂湊"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ━━━━ Menu Overview ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn className="mb-12 md:mb-16">
            <p className="label mb-4">Menu</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              テイクアウトメニュー一覧
            </h2>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/30">
            {[
              {
                href: '/yakisoba',
                en: 'Yakisoba',
                name: '焼きそば',
                desc: '地元ブランド「美明豚」使用。美明豚焼きそば・イカ焼きそば・オム焼きそばなど。',
                img: '/LINE_ALBUM_焼きそば_260616_1.jpg',
              },
              {
                href: '/takoyaki',
                en: 'Takoyaki',
                name: 'たこ焼き',
                desc: '外カリ中とろの大玉たこ焼き。ソースマヨ・からしマヨの2種類。',
                img: '/takoyaki.png',
              },
              {
                href: '/okonomiyaki',
                en: 'Okonomiyaki',
                name: 'お好み焼き',
                desc: 'ふんわり生地に具材たっぷり。豚玉・イカ玉・明太もちチーズなど4種類。',
                img: '/LINE_ALBUM_お好み焼き_260616_1.jpg',
              },
              {
                href: '/crepe',
                en: 'Crepe',
                name: 'クレープ',
                desc: 'もちもち生地に生クリームとフルーツ。季節限定フレーバーも人気。',
                img: '/LINE_ALBUM_クレープ_260616_1.png',
              },
              {
                href: '/sweets',
                en: 'Sweets',
                name: 'アイス・スイーツ',
                desc: '名物ふぐもなかアイスをはじめ、バニラ・抹茶・ラムネなど豊富なアイス。たい焼きも。',
                img: '/LINE_ALBUM_アイス_260616_1.jpg',
              },
            ].map((item) => (
              <AnimateIn key={item.href} className="bg-white">
                <Link href={item.href} className="block group overflow-hidden">
                  <div className="photo-landscape overflow-hidden">
                    <Image
                      src={item.img}
                      alt={`カルカモの${item.name}`}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="label text-brand mb-1.5" style={{ fontSize: '9px' }}>{item.en}</p>
                    <p className="font-serif text-brown-deep text-sm mb-2">{item.name}</p>
                    <p className="text-brown-light text-xs leading-loose mb-4">{item.desc}</p>
                    <span
                      className="inline-flex items-center gap-2 label text-brown-light group-hover:text-brown transition-colors"
                      style={{ fontSize: '9px' }}
                    >
                      <span className="block w-4 h-px bg-current" />
                      詳しく見る
                    </span>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn className="mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center gap-4 label text-brown hover:text-brown-deep transition-colors"
              style={{ letterSpacing: '0.25em' }}
            >
              <span className="block w-8 h-px bg-current" />
              Full Menu
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ Scenes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn className="mb-12 md:mb-16">
            <p className="label mb-4">Use Cases</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              こんなシーンに
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <ul className="grid md:grid-cols-2 gap-px bg-bone/30 max-w-3xl">
              {[
                {
                  title: '那珂湊観光のついでに',
                  body: '那珂湊おさかな市場でお買い物を楽しんだ後は、カルカモに立ち寄って食べ歩きを。クレープやアイスを片手に港町を散策する時間は、観光をより豊かにしてくれます。',
                },
                {
                  title: 'ひたちなか市ドライブのお供に',
                  body: 'ひたちなか市をドライブ中のランチや休憩にも最適。車に乗ったままテイクアウトして、海沿いや公園で食べるのもおすすめです。',
                },
                {
                  title: 'ランチとして',
                  body: 'お好み焼き・焼きそば・たこ焼きはランチとしても十分なボリューム。クレープやアイスをデザートにすれば、これだけでランチが完結します。',
                },
                {
                  title: 'ファミリーやグループで',
                  body: 'それぞれ好きなメニューをテイクアウトして、みんなで食べ比べするのも楽しい。お子様にはクレープやアイス、大人にはお好み焼きや焼きそばと、幅広いニーズに対応します。',
                },
                {
                  title: '日帰り旅行のランチに',
                  body: '東京や水戸方面からのドライブ旅行の目的地としても。那珂湊エリアの観光と合わせて計画すれば、充実した日帰り旅行のプランが組めます。',
                },
                {
                  title: 'ちょっとしたおみやげに',
                  body: '近くに住んでいる方へのプレゼントとしても好評。「那珂湊に行ってきたよ」という話題のきっかけにもなるほど、地元ならではのメニューが揃っています。',
                },
              ].map((item, i) => (
                <li key={item.title} className="bg-ivory p-7 md:p-9">
                  <h3 className="font-serif text-brown-deep text-sm mb-2">{item.title}</h3>
                  <p className="font-serif text-brown-light text-xs leading-loose">{item.body}</p>
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ Tips ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn className="mb-12 md:mb-16">
            <p className="label mb-4">Tips</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              テイクアウトを<br />もっと楽しむコツ
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <ul className="max-w-2xl">
              {[
                {
                  title: '最新メニューをInstagramで確認',
                  body: 'クレープの季節限定フレーバーや一日限りの特別メニューなど、新鮮な情報はInstagramで随時更新しています。お越しになる前にチェックするとより楽しめます。',
                },
                {
                  title: '混雑時間を避けて来店',
                  body: '週末や祝日のお昼時は特に混雑することがあります。時間帯をずらすか、少し余裕を持って来店されることをおすすめします。',
                },
                {
                  title: '食べ比べでお得感を',
                  body: 'グループでお越しの際は、複数のメニューをシェアして食べ比べするのがおすすめ。種類豊富なカルカモだからこそ楽しめる、贅沢な体験です。',
                },
                {
                  title: '近くのスポットと組み合わせて',
                  body: 'カルカモは那珂湊おさかな市場や観光スポットのそばに立地しています。観光プランに組み込むことで、より充実したひたちなか市での時間を過ごせます。',
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
            <p className="label mb-4">Find Us</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              アクセス
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <dl className="max-w-lg">
              {[
                { dt: 'Store', dd: 'カルカモ' },
                { dt: 'Address', dd: '茨城県ひたちなか市湊本町27-3' },
                { dt: 'Area', dd: '那珂湊おさかな市場から徒歩5分' },
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
                詳しいアクセス
              </Link>
              <a
                href="https://maps.google.com/?q=茨城県ひたちなか市湊本町27-3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 label text-brown-light hover:text-brown-deep transition-colors"
                style={{ letterSpacing: '0.25em' }}
              >
                <span className="block w-8 h-px bg-current" />
                Google Maps
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ Related Pages ━━━━━━━━━━━━━━━━━━━━━━ */}
      <RelatedPages
        pages={[
          {
            href: '/crepe',
            label: 'クレープ',
            labelEn: 'Crepe',
            description: 'もちもち生地に生クリームとフルーツ。那珂湊の食べ歩きに人気のクレープ。',
          },
          {
            href: '/lunch',
            label: 'ランチ利用',
            labelEn: 'Lunch',
            description: 'お好み焼き・焼きそば・たこ焼きでしっかりランチ。那珂湊でのランチガイド。',
          },
          {
            href: '/about-nakaminato',
            label: '那珂湊エリア情報',
            labelEn: 'About Nakaminato',
            description: 'カルカモが立地する那珂湊エリアの観光・グルメ情報。',
          },
          {
            href: '/access',
            label: 'アクセス',
            labelEn: 'Access',
            description: '茨城県ひたちなか市湊本町27-3へのアクセス情報。',
          },
          {
            href: '/faq',
            label: 'よくある質問',
            labelEn: 'FAQ',
            description: '営業時間・メニュー・アクセスなど、よくある質問にお答えします。',
          },
          {
            href: '/menu',
            label: 'メニュー一覧',
            labelEn: 'Full Menu',
            description: '全メニューの詳細。クレープ・アイス・たこ焼き・お好み焼き・焼きそば。',
          },
        ]}
      />

      {/* ━━━━ Instagram CTA ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 md:py-28 bg-brown-deep">
        <AnimateIn className="text-center">
          <p className="label text-ivory/30 mb-4">営業情報・新メニュー</p>
          <p className="font-display font-light text-3xl md:text-5xl text-ivory mb-8 leading-none">
            INSTAGRAM
          </p>
          <p className="font-serif text-ivory/50 text-sm mb-10">
            最新の営業情報・メニューはInstagramで発信中
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
