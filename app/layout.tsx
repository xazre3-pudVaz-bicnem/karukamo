import type { Metadata } from 'next'
import { Cormorant_Garamond, Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileBottomNav } from '@/components/layout/MobileBottomNav'
import { LoadingScreen } from '@/components/ui/LoadingScreen'

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500'],
  variable: '--font-noto-sans',
  preload: false,
  display: 'swap',
})

const notoSerifJP = Noto_Serif_JP({
  weight: ['400', '700'],
  variable: '--font-noto-serif',
  preload: false,
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://karukamo.jp'),
  title: {
    template: '%s | カルカモ',
    default: 'カルカモ | 那珂湊の焼きそば&食べ歩きスタンド',
  },
  description:
    'ひたちなか市・那珂湊の焼きそば＆テイクアウトスタンド「カルカモ」。美明豚焼きそば・クレープ・たこ焼き・お好み焼きなど。おさかな市場から歩いて5分。',
  keywords: [
    'カルカモ', '那珂湊 焼きそば', 'ひたちなか市 焼きそば', '美明豚 焼きそば',
    '那珂湊', 'ひたちなか市', 'テイクアウト', 'たこ焼き', 'お好み焼き', 'クレープ',
  ],
  openGraph: {
    title: 'カルカモ | 那珂湊の焼きそば&食べ歩きスタンド',
    description: 'ひたちなか市・那珂湊の焼きそば＆テイクアウトスタンド。おさかな市場から歩いて5分。',
    url: 'https://karukamo.jp',
    siteName: 'カルカモ',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://karukamo.jp' },
}

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': ['FoodEstablishment', 'LocalBusiness'],
    '@id': 'https://karukamo.jp/#business',
    name: 'カルカモ',
    description: 'ひたちなか市・那珂湊の焼きそば＆テイクアウトスタンド。美明豚焼きそば・クレープ・たこ焼き・お好み焼きなど。那珂湊おさかな市場から徒歩5分の食べ歩きグルメスタンド。',
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
    servesCuisine: ['焼きそば', 'たこ焼き', 'お好み焼き', 'クレープ', 'たい焼き', 'アイスクリーム'],
    priceRange: '¥',
    hasMenu: 'https://karukamo.jp/menu',
    areaServed: [
      { '@type': 'City', name: 'ひたちなか市' },
      { '@type': 'Place', name: '那珂湊' },
    ],
    keywords: '那珂湊 焼きそば, ひたちなか市 焼きそば, 美明豚 焼きそば, 那珂湊 テイクアウト, ひたちなか市 テイクアウト',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://karukamo.jp/#organization',
    name: 'カルカモ',
    url: 'https://karukamo.jp',
    logo: 'https://karukamo.jp/logo.jpg',
    sameAs: ['https://www.instagram.com/karukamo.2384/'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://karukamo.jp/#website',
    url: 'https://karukamo.jp',
    name: 'カルカモ',
    description: 'ひたちなか市・那珂湊の焼きそば＆テイクアウトスタンド',
    inLanguage: 'ja',
  },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${cormorant.variable} ${notoSansJP.variable} ${notoSerifJP.variable}`}>
      <head>
        {structuredData.map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </head>
      <body className="font-sans">
        <LoadingScreen />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  )
}
