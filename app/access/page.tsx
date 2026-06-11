import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { RelatedPages } from '@/components/ui/RelatedPages'

export const metadata: Metadata = {
  title: 'アクセス | カルカモ — 茨城県ひたちなか市湊本町27-3（那珂湊）',
  description:
    'カルカモへのアクセス詳細。住所：茨城県ひたちなか市湊本町27-3（那珂湊エリア）。車・電車・バスでのアクセス方法、駐車場情報、周辺スポットガイド。',
  keywords: [
    'カルカモ アクセス', 'ひたちなか市 湊本町', '那珂湊 カルカモ',
    '那珂湊 テイクアウト アクセス', 'ひたちなか市 クレープ 場所',
  ],
  openGraph: {
    title: 'アクセス | カルカモ — 茨城県ひたちなか市湊本町27-3',
    description: 'カルカモへの詳しいアクセス情報。車・電車・バスでのルートと周辺スポット。',
    url: 'https://karukamo.jp/access',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://karukamo.jp/access' },
}

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://karukamo.jp' },
      { '@type': 'ListItem', position: 2, name: 'アクセス', item: 'https://karukamo.jp/access' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: 'カルカモ',
    description: 'ひたちなか市・那珂湊のクレープ＆テイクアウトスタンド',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '湊本町27-3',
      addressLocality: 'ひたちなか市',
      addressRegion: '茨城県',
      postalCode: '311-1221',
      addressCountry: 'JP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.3333,
      longitude: 140.5833,
    },
    hasMap: 'https://maps.google.com/?q=茨城県ひたちなか市湊本町27-3',
    url: 'https://karukamo.jp',
    sameAs: ['https://www.instagram.com/karukamo.2384/'],
    servesCuisine: ['クレープ', 'アイスクリーム', 'たこ焼き', 'お好み焼き', '焼きそば'],
    priceRange: '¥',
  },
]

export default function AccessPage() {
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
                { label: 'Access' },
              ]}
            />
            <div className="mt-6">
              <p className="label mb-4">Find Us</p>
              <h1 className="font-display font-light text-5xl md:text-7xl lg:text-8xl leading-none text-brown-deep mb-6">
                ACCESS
              </h1>
              <div className="flex items-center gap-4">
                <span className="rule flex-shrink-0" />
                <p className="label">茨城県ひたちなか市湊本町27-3 — 那珂湊エリア</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ Map + Info ━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

            {/* Store info */}
            <AnimateIn>
              <dl className="space-y-0">
                {[
                  { dt: 'Store', dd: 'カルカモ', sub: null },
                  { dt: 'Address', dd: '茨城県ひたちなか市湊本町27-3', sub: '那珂湊エリア' },
                  { dt: 'Hours', dd: 'Instagramをご確認ください', sub: null },
                  { dt: 'Holiday', dd: 'Instagramをご確認ください', sub: '不定休' },
                  { dt: 'Payment', dd: '現金', sub: '最新情報はInstagramにて' },
                ].map((row, i) => (
                  <div key={row.dt} className={`flex gap-8 py-5 ${i > 0 ? 'border-t border-bone/40' : ''}`}>
                    <dt className="w-16 flex-shrink-0 label pt-0.5">{row.dt}</dt>
                    <dd>
                      <p className="font-serif text-brown text-sm">{row.dd}</p>
                      {row.sub && <p className="text-brown-light text-xs mt-0.5">{row.sub}</p>}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 pt-8 border-t border-bone/40 flex flex-col gap-5">
                <a
                  href="https://maps.google.com/?q=茨城県ひたちなか市湊本町27-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 label text-brown hover:text-brown-deep transition-colors"
                  style={{ letterSpacing: '0.25em' }}
                >
                  <span className="block w-8 h-px bg-current" />
                  Google Maps
                </a>
                <a
                  href="https://www.instagram.com/karukamo.2384/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 label text-brown-light hover:text-brown-deep transition-colors"
                  style={{ letterSpacing: '0.25em' }}
                >
                  <span className="block w-8 h-px bg-current" />
                  @karukamo.2384
                </a>
              </div>
            </AnimateIn>

            {/* Google Maps embed */}
            <AnimateIn delay={0.1}>
              <div className="aspect-[4/5] overflow-hidden border border-bone/40">
                <iframe
                  src="https://maps.google.com/maps?q=茨城県ひたちなか市湊本町27-3&output=embed&hl=ja"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="カルカモ アクセスマップ"
                  className="grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
              <p className="text-xs text-brown-light mt-3">
                地図は参考です。正確な位置はGoogleマップアプリでご確認ください。
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ━━━━ How to Get There ━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn className="mb-12 md:mb-16">
            <p className="label mb-4">Directions</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              アクセス方法
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <ul className="max-w-2xl">
              {[
                {
                  title: '車でのアクセス（東京・水戸方面から）',
                  body: '東京方面からは常磐自動車道を利用するのが便利です。水戸北スマートICで降りて、国道245号線方面へ進み那珂湊エリアへ。水戸ICからは国道245号線（那珂湊方面）をご利用ください。水戸市内からは約30〜40分が目安です。東京からは常磐道経由で約2〜2.5時間程度でお越しいただけます。カーナビへは「茨城県ひたちなか市湊本町27-3」とご入力ください。',
                },
                {
                  title: '電車でのアクセス',
                  body: 'JR常磐線「勝田駅」をご利用ください。勝田駅からひたちなか海浜鉄道湊線に乗り換え、「那珂湊駅」で下車します。那珂湊駅からカルカモまでは徒歩圏内です。東京（上野・品川）からは特急ときわを利用すると比較的スムーズにアクセスできます。',
                },
                {
                  title: 'バスでのアクセス',
                  body: '水戸駅から那珂湊方面のバスを利用する方法もあります。「那珂湊駅前」または「湊本町」バス停が最寄りです。最新のバス路線・時刻表は茨城交通のウェブサイトをご確認ください。',
                },
                {
                  title: '駐車場について',
                  body: 'カルカモには専用駐車場はございません。近隣の公共駐車場をご利用ください。那珂湊おさかな市場周辺には複数の駐車場があります。週末・祝日は特に混雑するため、早めの来店をおすすめします。',
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

      {/* ━━━━ Area Info ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn className="mb-12 md:mb-16">
            <p className="label mb-4">Area Guide</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              周辺エリアのご案内
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <ul className="max-w-2xl">
              {[
                {
                  title: '那珂湊おさかな市場の近く',
                  body: '那珂湊おさかな市場は漁師直送の新鮮な魚介類が揃う人気スポット。市場での買い物やランチの後、カルカモに立ち寄ってデザートやテイクアウトグルメを楽しむのがおすすめのコースです。市場からカルカモまでは近くて便利な立地です。',
                },
                {
                  title: 'ひたちなか海浜公園（ネモフィラ・コキア）',
                  body: '春のネモフィラの丘、秋のコキアの丘で有名な国営ひたち海浜公園は、那珂湊エリアから車で約10〜15分の距離にあります。公園観光とカルカモの食べ歩きグルメを組み合わせた日帰りプランは、茨城観光の定番コースとして人気です。',
                },
                {
                  title: '港の雰囲気を楽しみながら',
                  body: '那珂湊エリアは漁港の雰囲気が残る情緒あるエリアです。港周辺を散策しながら、テイクアウトしたクレープやアイスを食べ歩きするのが那珂湊スタイル。潮の香りと共においしさが増します。',
                },
                {
                  title: 'ひたちなか市内からのアクセス',
                  body: 'ひたちなか市内各地からのアクセスも便利です。市内でのお買い物・用事のついでに立ち寄れる場所として、地元の方々にも長く愛されています。近くにお立ち寄りの際はぜひお声がけください。',
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

      {/* ━━━━ Hours Info ━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn className="mb-10 md:mb-14">
            <p className="label mb-4">Hours & Info</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              営業情報について
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="max-w-2xl">
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                カルカモの営業時間・定休日は季節や天候によって変更になることがあります。
                最新の営業情報はInstagram（@karukamo.2384）にて随時更新しています。
                お越し前に必ずInstagramでご確認いただくことをおすすめします。
              </p>
              <p className="font-serif text-brown text-sm leading-loose mb-8">
                週末・祝日は混雑することがあります。
                時間帯に余裕を持ってお越しいただくと、待ち時間を減らせます。
                また、急な臨時休業の場合もInstagramにてお知らせします。
              </p>
              <a
                href="https://www.instagram.com/karukamo.2384/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 label text-brown hover:text-brown-deep transition-colors"
                style={{ letterSpacing: '0.25em' }}
              >
                <span className="block w-8 h-px bg-current" />
                Instagram で営業情報を確認
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ Related Pages ━━━━━━━━━━━━━━━━━━━━━━ */}
      <RelatedPages
        pages={[
          {
            href: '/about-nakaminato',
            label: '那珂湊エリア情報',
            labelEn: 'About Nakaminato',
            description: '那珂湊の観光スポット・グルメ・アクセス情報の詳しいガイド。',
          },
          {
            href: '/takeout',
            label: 'テイクアウト特集',
            labelEn: 'Takeout',
            description: 'カルカモのテイクアウトメニュー全種類と楽しみ方を紹介。',
          },
          {
            href: '/lunch',
            label: 'ランチ利用',
            labelEn: 'Lunch',
            description: '那珂湊でのランチにカルカモのテイクアウトを活用する方法。',
          },
          {
            href: '/faq',
            label: 'よくある質問',
            labelEn: 'FAQ',
            description: 'アクセス・営業時間・メニューに関するよくある質問。',
          },
        ]}
      />

      {/* ━━━━ Instagram CTA ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 md:py-28 bg-brown-deep">
        <AnimateIn className="text-center">
          <p className="label text-ivory/30 mb-4">Hours and Info</p>
          <p className="font-display font-light text-3xl md:text-5xl text-ivory mb-8 leading-none">
            INSTAGRAM
          </p>
          <p className="font-serif text-ivory/50 text-sm mb-10">
            営業情報・最新メニューはInstagramをご確認ください
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
