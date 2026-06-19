import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { RelatedPages } from '@/components/ui/RelatedPages'

export const metadata: Metadata = {
  title: 'よくある質問 | カルカモ — 那珂湊のクレープ&テイクアウトスタンド',
  description:
    'カルカモに関するよくある質問。営業時間・定休日・アクセス・テイクアウト・メニューなど、お客様からよくいただく50の質問にお答えします。ひたちなか市・那珂湊のカルカモ。',
  keywords: [
    'カルカモ FAQ', 'カルカモ よくある質問', 'カルカモ 営業時間',
    'ひたちなか市 テイクアウト', '那珂湊 クレープ', 'カルカモ アクセス',
  ],
  openGraph: {
    title: 'よくある質問 | カルカモ',
    description: '営業時間・メニュー・アクセスなど50の質問に答えます。ひたちなか市・那珂湊のカルカモ。',
    url: 'https://www.karukamo.jp/faq',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://www.karukamo.jp/faq' },
}

const faqs = [
  // 基本情報・営業について
  {
    category: '基本情報・営業について',
    items: [
      {
        q: '営業時間を教えてください。',
        a: '営業時間はInstagramにて随時更新しています。時季や天候によって変更になることがあるため、お越し前にInstagram（@karukamo.2384）でご確認ください。',
      },
      {
        q: '定休日はありますか？',
        a: '不定休となっています。最新の営業情報はInstagramにてご確認ください。',
      },
      {
        q: '雨の日や悪天候の日も営業していますか？',
        a: '天候によって営業時間の変更や臨時休業をする場合があります。悪天候の際は特にInstagramで最新情報をご確認いただくことをおすすめします。',
      },
      {
        q: 'テイクアウト専門のお店ですか？',
        a: 'カルカモはスタンド形式のテイクアウトグルメのお店です。購入後は近くのベンチや公園などでお楽しみいただけます。最新の店舗情報はInstagram（@karukamo.2384）でご確認ください。',
      },
      {
        q: '電話番号はありますか？',
        a: '現在、電話でのお問い合わせは受け付けておりません。Instagram（@karukamo.2384）のDMにてお問い合わせください。',
      },
      {
        q: '事前予約はできますか？',
        a: '基本的に当日のご来店・ご注文のみ承っております。大量注文をご希望の場合はInstagramのDMにてご相談ください。',
      },
      {
        q: '支払い方法を教えてください。',
        a: '支払い方法については、店頭またはInstagram（@karukamo.2384）にてご確認ください。最新の支払い方法については、お越し前にInstagramでご確認いただくことをおすすめします。',
      },
      {
        q: '最新の営業情報はどこで確認できますか？',
        a: 'Instagram（@karukamo.2384）にて最新の営業情報、定休日、特別営業などを発信しています。お越し前に必ずご確認いただくことをおすすめします。',
      },
      {
        q: '季節によって休業することはありますか？',
        a: '年間を通じて営業していますが、年末年始や悪天候時などに臨時休業をいただくことがあります。Instagram（@karukamo.2384）で随時お知らせします。',
      },
      {
        q: '混雑しやすい日・時間帯はいつですか？',
        a: '週末・祝日のお昼時（11時〜14時頃）が特に混雑します。待ち時間が気になる方は、平日や時間帯をずらしてお越しいただくとスムーズです。',
      },
    ],
  },
  // メニューについて
  {
    category: 'メニュー・価格について',
    items: [
      {
        q: 'クレープの価格はいくらですか？',
        a: 'クレープの価格はフレーバーによって異なります。最新のメニューと価格はInstagram（@karukamo.2384）にてご確認ください。',
      },
      {
        q: '季節限定フレーバーはどこで確認できますか？',
        a: '季節限定フレーバーは旬の食材を使って定期的に変わります。最新情報はInstagram（@karukamo.2384）で随時更新しています。お越し前にチェックしてみてください。',
      },
      {
        q: 'ふぐもなかアイスとは何ですか？',
        a: 'ふぐの形をしたもなかの器にアイスクリームを詰めた、カルカモの名物メニューです。那珂湊の漁港にちなんだデザインで、見た目もかわいく食べ歩きにぴったり。価格は500円です。',
      },
      {
        q: '一番人気のメニューは何ですか？',
        a: 'クレープと名物のふぐもなかアイスが特に人気です。食事系では明太もちチーズお好み焼きが多くの方に好まれています。',
      },
      {
        q: 'たこ焼きは何個入りですか？',
        a: 'たこ焼きは大玉サイズで販売しています。個数は注文時にご確認ください。価格はソースマヨが500円、からしマヨが600円です。',
      },
      {
        q: 'アレルギー対応はしていますか？',
        a: 'アレルギーに関しては個別にご対応が難しい場合があります。アレルギーをお持ちの方は来店前にInstagramのDMにてご相談ください。',
      },
      {
        q: 'お子様向けのメニューはありますか？',
        a: 'お子様に人気のメニューはクレープやアイスクリーム、たい焼きです。クレープはプレーンや定番フレーバーから始めると食べやすいかと思います。',
      },
      {
        q: '「美明豚」とは何ですか？',
        a: '美明豚（びめいとん）は茨城県内で育てられたブランド豚です。きめ細かく柔らかな肉質と上品な甘みが特徴で、カルカモの焼きそば・お好み焼きに使用しています。',
      },
      {
        q: 'たい焼きのあんこの種類を教えてください。',
        a: '小倉あん、カスタード、白あんの3種類をご用意しています。各180円です。',
      },
      {
        q: 'ベジタリアン・ヴィーガン向けのメニューはありますか？',
        a: '現時点では専用のベジタリアンメニューはご用意していません。アレルギーや食事制限についてはInstagramのDMにてご相談ください。',
      },
      {
        q: 'お好み焼きのサイズはどのくらいですか？',
        a: '一枚でランチとして満足できるサイズを提供しています。ボリューム感があり、男性のお客様にも好評です。',
      },
      {
        q: '焼きそばのボリュームはどのくらいですか？',
        a: 'ランチとして十分な量をご提供しています。お腹が空いた状態でお越しいただいても、十分満足いただけるボリュームです。',
      },
    ],
  },
  // アクセスについて
  {
    category: 'アクセス・場所について',
    items: [
      {
        q: 'カルカモはどこにありますか？',
        a: '茨城県ひたちなか市湊本町27-3にあります。那珂湊エリアに立地しており、那珂湊おさかな市場周辺からのアクセスが便利です。',
      },
      {
        q: '最寄り駅はどこですか？',
        a: 'ひたちなか海浜鉄道湊線「那珂湊駅」が最寄り駅です。那珂湊駅からお店まで徒歩でアクセスできます。',
      },
      {
        q: '那珂湊おさかな市場からどのくらいの距離ですか？',
        a: '那珂湊おさかな市場周辺からは徒歩圏内です。市場でのお買い物と合わせてぜひお立ち寄りください。',
      },
      {
        q: '駐車場はありますか？',
        a: 'お店専用の駐車場はありませんが、周辺に公共の駐車場があります。週末は混雑することがあるため、早めのお越しをおすすめします。',
      },
      {
        q: '水戸市から行けますか？',
        a: 'はい。水戸市から車で約30〜40分程度です。国道245号線を利用して那珂湊方面にお越しください。',
      },
      {
        q: '東京から日帰りで行けますか？',
        a: 'はい。東京から常磐自動車道を利用して約2〜2.5時間で到着します。那珂湊観光やひたちなか市観光と組み合わせた日帰り旅行が人気です。',
      },
      {
        q: 'カーナビへの入力はどうすれば良いですか？',
        a: '住所「茨城県ひたちなか市湊本町27-3」をご入力ください。Googleマップからもルート案内が可能です。',
      },
      {
        q: '周辺に観光スポットはありますか？',
        a: '那珂湊おさかな市場、国営ひたち海浜公園（ネモフィラ・コキアで有名）、那珂湊港、阿字ヶ浦海水浴場などがあります。詳しくは「那珂湊エリア情報」ページをご覧ください。',
      },
    ],
  },
  // テイクアウトについて
  {
    category: 'テイクアウト・食べ歩きについて',
    items: [
      {
        q: 'テイクアウトのみですか？',
        a: 'はい、カルカモはテイクアウト専門のスタンド形式です。購入後は近くのベンチやお気に入りの場所で食べ歩きをお楽しみください。',
      },
      {
        q: '注文から受け取りまでどのくらいかかりますか？',
        a: 'メニューによって異なりますが、通常5〜10分程度です。混雑時はお時間をいただく場合があります。',
      },
      {
        q: '大量注文・まとめ買いはできますか？',
        a: '大量注文をご希望の場合は、事前にInstagramのDMにてご相談ください。当日の急な大量注文はお時間をいただく場合があります。',
      },
      {
        q: 'クレープを持ち帰ることはできますか？',
        a: 'テイクアウトでのお持ち帰りが可能です。ただし、クレープは作りたてが一番おいしいため、なるべく早くお召し上がりください。',
      },
      {
        q: 'アイスクリームは溶けてしまいませんか？',
        a: '特に夏場はアイスが溶けやすくなります。購入後はなるべく早くお召し上がりください。ドライブや移動中のお持ち帰りの場合は、保冷バッグをご持参されることをおすすめします。',
      },
      {
        q: 'グループやファミリーでの注文はどうすれば良いですか？',
        a: '複数の方が別々にご注文いただくのが基本ですが、まとめてご注文いただくことも可能です。混雑時はお時間をいただく場合がありますのでご了承ください。',
      },
      {
        q: '食べ歩きに適した包装になっていますか？',
        a: 'はい。歩きながら食べやすいよう、メニューに合わせた包装でお渡ししています。クレープは片手で持ちやすく、こぼれにくいラッピングでご提供します。',
      },
      {
        q: 'お土産として購入することはできますか？',
        a: 'テイクアウトの商品を近くにお住まいの方や知人へのちょっとしたプレゼントとしてお持ちになる方も多いです。ただし生ものも含まれるため、長時間の持ち運びは避けてください。',
      },
    ],
  },
  // SNS・その他
  {
    category: 'SNS・その他',
    items: [
      {
        q: 'Instagramのアカウントを教えてください。',
        a: 'Instagramアカウントは「@karukamo.2384」です。営業情報・最新メニュー・おすすめ情報を随時発信しています。ぜひフォローしてください。',
      },
      {
        q: 'カルカモという名前の由来は何ですか？',
        a: 'カルカモはカモ（鴨）の一種「軽鴨（カルガモ）」に由来しています。水辺の街・那珂湊にちなんだ名前です。',
      },
      {
        q: '地元食材を使っていますか？',
        a: 'はい。焼きそばとお好み焼きには茨城県ブランド豚「美明豚」を使用するなど、地元食材を積極的に取り入れています。',
      },
      {
        q: 'メディア取材や撮影の申し込みはどこにすれば良いですか？',
        a: 'Instagram（@karukamo.2384）のDMにてお問い合わせください。',
      },
      {
        q: 'イベントやコラボレーションはありますか？',
        a: 'Instagramにて告知しています。イベント参加やコラボレーションについてはDMにてお問い合わせください。',
      },
      {
        q: 'カルカモはいつオープンしましたか？',
        a: '詳しいオープン日についてはInstagramでご確認ください。',
      },
      {
        q: 'お店に関する要望・意見はどこに伝えれば良いですか？',
        a: 'Instagram（@karukamo.2384）のDMにてお気軽にメッセージをお送りください。皆さまのご意見を大切にしています。',
      },
      {
        q: '誕生日や記念日のサプライズに利用できますか？',
        a: 'テイクアウトでご購入いただき、お好きな場所でお楽しみいただけます。特別なデコレーションなどご希望の場合はDMにてご相談ください。',
      },
      {
        q: 'フードロスへの取り組みはしていますか？',
        a: '注文を受けてから作る方式を基本としているため、食品ロスを最小限に抑える工夫をしています。',
      },
      {
        q: '他にも質問があるのですが、どこに連絡すれば良いですか？',
        a: 'Instagram（@karukamo.2384）のDMにてお問い合わせください。できる限り迅速にご返答します。',
      },
    ],
  },
]

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.flatMap((cat) =>
    cat.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    }))
  ),
}

const breadcrumbStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://www.karukamo.jp' },
    { '@type': 'ListItem', position: 2, name: 'よくある質問', item: 'https://www.karukamo.jp/faq' },
  ],
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      {/* ━━━━ Page Header ━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn>
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'FAQ' },
              ]}
            />
            <div className="mt-6">
              <p className="label mb-4">Frequently Asked Questions</p>
              <h1 className="font-display font-light text-5xl md:text-7xl lg:text-8xl leading-none text-brown-deep mb-6">
                FAQ
              </h1>
              <div className="flex items-center gap-4">
                <span className="rule flex-shrink-0" />
                <p className="label">よくある質問 — カルカモについてのご疑問にお答えします</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ FAQ Content ━━━━━━━━━━━━━━━━━━━━━━━ */}
      {faqs.map((cat, ci) => (
        <section
          key={cat.category}
          className={`section-py border-b border-bone/40 ${ci % 2 === 0 ? 'bg-ivory' : 'bg-white'}`}
        >
          <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
            <AnimateIn className="mb-12 md:mb-16">
              <p className="label mb-4">
                {String(ci + 1).padStart(2, '0')}
              </p>
              <h2 className="font-display font-light text-3xl md:text-4xl text-brown-deep leading-none">
                {cat.category}
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.05}>
              <ul className="max-w-3xl">
                {cat.items.map((item, i) => (
                  <li
                    key={item.q}
                    className={`py-7 ${i > 0 ? 'border-t border-bone/40' : ''}`}
                  >
                    <div className="flex gap-5 items-start mb-3">
                      <span className="label text-brand shrink-0" style={{ fontSize: '10px', marginTop: '2px' }}>Q</span>
                      <p className="font-serif text-brown-deep text-sm">{item.q}</p>
                    </div>
                    <div className="flex gap-5 items-start">
                      <span className="label text-brown-light shrink-0" style={{ fontSize: '10px', marginTop: '2px' }}>A</span>
                      <p className="font-serif text-brown-light text-xs leading-loose">{item.a}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </section>
      ))}

      {/* ━━━━ Contact ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn>
            <p className="label mb-4">Still have questions?</p>
            <h2 className="font-display font-light text-3xl md:text-4xl text-brown-deep leading-none mb-8">
              その他のご質問
            </h2>
            <p className="font-serif text-brown text-sm leading-loose mb-8 max-w-xl">
              上記に掲載されていないご質問については、
              Instagram（@karukamo.2384）のDMにてお問い合わせください。
              できる限り迅速にご返答いたします。
            </p>
            <a
              href="https://www.instagram.com/karukamo.2384/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 label text-brown hover:text-brown-deep transition-colors"
              style={{ letterSpacing: '0.25em' }}
            >
              <span className="block w-8 h-px bg-current" />
              @karukamo.2384
            </a>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ Related Pages ━━━━━━━━━━━━━━━━━━━━━━ */}
      <RelatedPages
        pages={[
          {
            href: '/menu',
            label: 'メニュー一覧',
            labelEn: 'Full Menu',
            description: 'クレープ・アイス・たこ焼き・お好み焼き・焼きそばの全メニュー。',
          },
          {
            href: '/access',
            label: 'アクセス',
            labelEn: 'Access',
            description: '茨城県ひたちなか市湊本町27-3へのアクセス詳細。Googleマップあり。',
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
          <p className="label text-ivory/30 mb-4">お問い合わせ</p>
          <p className="font-display font-light text-3xl md:text-5xl text-ivory mb-8 leading-none">
            INSTAGRAM
          </p>
          <p className="font-serif text-ivory/50 text-sm mb-10">
            ご不明な点はInstagramのDMにてお気軽にどうぞ
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
