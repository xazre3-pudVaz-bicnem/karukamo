import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { RelatedPages } from '@/components/ui/RelatedPages'

export const metadata: Metadata = {
  title: '那珂湊エリア観光情報 | カルカモ周辺スポット — ひたちなか市・茨城',
  description:
    '茨城県ひたちなか市・那珂湊エリアの観光・グルメ情報。那珂湊おさかな市場・ほしいも・観光スポットが充実。カルカモの食べ歩きグルメと合わせて日帰り旅行・観光を楽しもう。',
  keywords: [
    '那珂湊 観光', 'ひたちなか市 観光', '那珂湊 グルメ', 'ひたちなか市 グルメ',
    '那珂湊 食べ歩き', '那珂湊 おさかな市場', '茨城 日帰り観光', '那珂湊 ランチ',
  ],
  openGraph: {
    title: '那珂湊エリア観光情報 | カルカモ周辺スポット — ひたちなか市・茨城',
    description: '那珂湊おさかな市場・食べ歩きグルメ・観光スポット情報。カルカモと合わせて観光を楽しもう。',
    url: 'https://karukamo.jp/about-nakaminato',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://karukamo.jp/about-nakaminato' },
}

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://karukamo.jp' },
      { '@type': 'ListItem', position: 2, name: '那珂湊エリア', item: 'https://karukamo.jp/about-nakaminato' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: '那珂湊エリア（ひたちなか市）',
    description: '茨城県ひたちなか市の港町・那珂湊エリア。おさかな市場・食べ歩き・観光スポットが充実。',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'ひたちなか市',
      addressRegion: '茨城県',
      addressCountry: 'JP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.3333,
      longitude: 140.5833,
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'カルカモ',
    description: 'ひたちなか市・那珂湊のクレープ＆テイクアウトスタンド',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '湊本町27-3',
      addressLocality: 'ひたちなか市',
      addressRegion: '茨城県',
      addressCountry: 'JP',
    },
    hasMap: 'https://maps.google.com/?q=茨城県ひたちなか市湊本町27-3',
    url: 'https://karukamo.jp',
    sameAs: ['https://www.instagram.com/karukamo.2384/'],
  },
]

export default function AboutNakaminatoPage() {
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
                { label: 'About Nakaminato' },
              ]}
            />
            <div className="mt-6">
              <p className="label mb-4">Local Area Guide</p>
              <h1 className="font-display font-light text-5xl md:text-7xl lg:text-8xl leading-none text-brown-deep mb-6">
                NAKAMINATO
              </h1>
              <div className="flex items-center gap-4">
                <span className="rule flex-shrink-0" />
                <p className="label">那珂湊エリア観光情報 — ひたちなか市・茨城県</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ Intro ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn className="mb-12 md:mb-16">
            <p className="label mb-4">About</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              港町・那珂湊とは
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="max-w-2xl">
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                那珂湊（なかみなと）は、茨城県ひたちなか市の東部に位置する歴史ある港町です。
                那珂川の河口に位置するこのエリアは、古くから漁業と海運で栄え、
                今も多くの人々が訪れる観光地として知られています。
              </p>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                那珂湊の最大の魅力は、新鮮な海産物。
                那珂湊おさかな市場は地元の漁師が水揚げした新鮮な魚介類が並ぶ市場として有名で、
                週末には茨城県内外から多くの買い物客・観光客が訪れます。
                マグロ・ウニ・カニといった高級食材も比較的手頃な価格で味わえるとあって、
                グルメスポットとしての人気も高い地域です。
              </p>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                水産業だけでなく、茨城県の特産品「干し芋（ほしいも）」の産地としても知られるひたちなか市。
                那珂湊エリアを含むひたちなか市は、茨城県内有数の観光地として
                一年を通じて多くの来訪者を迎えています。
              </p>
              <p className="font-serif text-brown text-sm leading-loose">
                カルカモは、そんな那珂湊の活気あふれる街の一角に立つテイクアウトスタンド。
                観光スポットを巡る途中に、食べ歩きグルメを楽しむ場所として親しまれています。
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ Spots ━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn className="mb-12 md:mb-16">
            <p className="label mb-4">Spots</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              那珂湊・ひたちなか市の<br />観光スポット
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <ul className="max-w-2xl">
              {[
                {
                  title: '那珂湊おさかな市場',
                  body: '那珂湊を代表する観光スポット。漁師直送の新鮮な魚介類が並ぶ市場で、週末には多くの観光客が訪れます。マグロやウニをその場で食べられる飲食店も充実。水産物のお土産探しにも最適なスポットです。カルカモからも近い立地で、市場見学のついでに立ち寄るお客様も多くいらっしゃいます。',
                },
                {
                  title: 'ひたちなか海浜公園（国営ひたち海浜公園）',
                  body: '那珂湊エリアから少し足を伸ばすと、広大な国営ひたち海浜公園があります。春のネモフィラの丘、秋のコキア染まる丘が特に有名で、シーズン中は国内外から多くの観光客が訪れます。公園内を散策した後は、那珂湊に戻ってカルカモのグルメを楽しむのがおすすめのコースです。',
                },
                {
                  title: '那珂湊の食べ歩きエリア',
                  body: '那珂湊のおさかな市場周辺には、海鮮系のお店に加えて、カルカモのようなテイクアウトグルメのお店が点在しています。食べ歩きしながら観光を楽しむスタイルが定着しており、週末はにぎわいを見せます。クレープやアイスを片手に散策するのが那珂湊流の楽しみ方です。',
                },
                {
                  title: 'ひたちなか市の干し芋（ほしいも）',
                  body: '茨城県は干し芋の全国生産量の約9割を占める一大産地。ひたちなか市もその中心地のひとつで、干し芋を扱うお店が多く点在しています。那珂湊エリアを訪れた際は、干し芋のお土産探しもおすすめです。やわらかい食感と自然な甘みが特徴の茨城の干し芋を、ぜひお試しください。',
                },
                {
                  title: '那珂湊港と阿字ヶ浦海水浴場',
                  body: '那珂湊港は漁業が盛んな現役の港。港の風景を眺めながら散歩するだけでも風情があります。夏には近くの阿字ヶ浦海水浴場が海水浴客で賑わい、潮の香りと青い海が那珂湊エリアに活気をもたらします。海と港の景色は、那珂湊観光の大きな魅力のひとつです。',
                },
                {
                  title: '磯崎海岸と周辺の景観',
                  body: 'ひたちなか市の東部には太平洋に面した海岸線が広がっています。磯崎海岸などの景勝地では、打ち寄せる波と岩場の景色を楽しめます。日の出スポットとしても知られており、早朝に訪れる観光客もいます。那珂湊散策の折に足を伸ばしてみてください。',
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
          <AnimateIn className="mb-12 md:mb-16">
            <p className="label mb-4">Access</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              那珂湊・ひたちなか市へのアクセス
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <ul className="max-w-2xl">
              {[
                {
                  title: '東京方面から（車）',
                  body: '東京からは常磐自動車道・水戸北スマートICを利用するのが一般的なルート。ICから那珂湊エリアまで約20〜30分ほどです。または水戸ICから国道245号線を利用する方法もあります。所要時間は道路状況によりますが、東京から約2時間〜2時間半を目安にしてください。',
                },
                {
                  title: '鉄道でのアクセス',
                  body: '鉄道の場合は、JR常磐線「勝田駅」からひたちなか海浜鉄道湊線に乗り換え、「那珂湊駅」で下車。那珂湊駅から那珂湊おさかな市場やカルカモへは徒歩または自転車での移動が便利です。',
                },
                {
                  title: '水戸市からのアクセス',
                  body: '水戸市からは車で約30〜40分。国道245号線で那珂湊方面に向かうルートが一般的です。水戸市観光と組み合わせた日帰りプランも人気です。',
                },
                {
                  title: '駐車場について',
                  body: '那珂湊エリアには公共の駐車場が複数あります。週末の繁忙時は混雑することがあるため、早めの来店がおすすめです。カルカモ周辺の駐車場については、最新情報をInstagramにてご確認ください。',
                },
              ].map((item, i) => (
                <li key={item.title} className={`py-6 ${i > 0 ? 'border-t border-bone/40' : ''}`}>
                  <h3 className="font-serif text-brown-deep text-sm mb-2">{item.title}</h3>
                  <p className="font-serif text-brown-light text-xs leading-loose">{item.body}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-4">
              <Link
                href="/access"
                className="inline-flex items-center gap-4 label text-brown hover:text-brown-deep transition-colors"
                style={{ letterSpacing: '0.25em' }}
              >
                <span className="block w-8 h-px bg-current" />
                カルカモへのアクセス詳細
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ Karukamo in Nakaminato ━━━━━━━━━━━━━━ */}
      <section className="section-py bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn className="mb-12 md:mb-16">
            <p className="label mb-4">Our Story</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              那珂湊とカルカモ
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="max-w-2xl">
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                カルカモは、那珂湊という港町に根ざしたテイクアウトスタンドです。
                地元で生まれたお店として、那珂湊の活気ある食文化の一翼を担いたいと思っています。
              </p>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                おさかな市場の新鮮な海産物が那珂湊の顔であるように、
                カルカモのクレープやテイクアウトグルメも、
                この街を訪れた方の記憶に残る「那珂湊の味」になれれば嬉しいと考えています。
              </p>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                焼きそばで使用する「美明豚」は茨城県産のブランド豚。
                地元食材を積極的に活用することで、那珂湊・ひたちなか市の食文化に
                少しでも貢献できればと思っています。
              </p>
              <p className="font-serif text-brown text-sm leading-loose">
                那珂湊に来るたびに「また寄りたい」と思っていただける場所として、
                地元の皆さまにも観光客の皆さまにも愛されるお店であり続けたい。
                それがカルカモの願いです。
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ Related Pages ━━━━━━━━━━━━━━━━━━━━━━ */}
      <RelatedPages
        pages={[
          {
            href: '/takeout',
            label: 'テイクアウト特集',
            labelEn: 'Takeout',
            description: '那珂湊観光のついでに。カルカモの食べ歩きグルメを楽しもう。',
          },
          {
            href: '/lunch',
            label: 'ランチ利用',
            labelEn: 'Lunch',
            description: '那珂湊観光のランチにカルカモを活用。食事系メニューが充実。',
          },
          {
            href: '/access',
            label: 'カルカモへのアクセス',
            labelEn: 'Access',
            description: '茨城県ひたちなか市湊本町27-3。那珂湊エリアのアクセス情報。',
          },
          {
            href: '/crepe',
            label: 'クレープ',
            labelEn: 'Crepe',
            description: '那珂湊の食べ歩きに最適なクレープ。季節限定フレーバーも。',
          },
          {
            href: '/faq',
            label: 'よくある質問',
            labelEn: 'FAQ',
            description: '那珂湊・ひたちなか市からカルカモに関するよくある質問。',
          },
        ]}
      />

      {/* ━━━━ Instagram CTA ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 md:py-28 bg-brown-deep">
        <AnimateIn className="text-center">
          <p className="label text-ivory/30 mb-4">那珂湊のカルカモ</p>
          <p className="font-display font-light text-3xl md:text-5xl text-ivory mb-8 leading-none">
            INSTAGRAM
          </p>
          <p className="font-serif text-ivory/50 text-sm mb-10">
            営業日・最新メニュー・那珂湊情報を発信中
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
