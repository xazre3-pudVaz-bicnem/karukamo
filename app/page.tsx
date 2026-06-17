import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { MascotFloat } from '@/components/ui/MascotFloat'
import { menuCategories } from '@/data/menu'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'カルカモ | 那珂湊の焼きそば&食べ歩きスタンド',
  description:
    '茨城県ひたちなか市・那珂湊の焼きそば＆テイクアウトスタンド「カルカモ」。美明豚焼きそば・たこ焼き・お好み焼き・クレープ・たい焼き・アイスなど。おさかな市場から歩いて5分。',
  alternates: { canonical: 'https://karukamo.jp' },
}

const yakisoba = menuCategories.find((c) => c.id === 'yakisoba')!

const MENU_IMAGES: Record<string, string> = {
  yakisoba:    '/LINE_ALBUM_焼きそば_260616_1.jpg',
  takoyaki:    '/takoyaki.png',
  okonomiyaki: '/LINE_ALBUM_お好み焼き_260616_1.jpg',
  crepe:       '/LINE_ALBUM_クレープ_260616_1.png',
  taiyaki:     '/LINE_ALBUM_たい焼き_260616_1.jpg',
  sweets:      '/LINE_ALBUM_アイス_260616_1.jpg',
}

const MENU_HREFS: Record<string, string> = {
  yakisoba: '/yakisoba', takoyaki: '/takoyaki', okonomiyaki: '/okonomiyaki',
  crepe: '/crepe', taiyaki: '/sweets', sweets: '/sweets',
}

const MARQUEE_ITEMS = ['焼きそば', 'たこ焼き', 'お好み焼き', 'クレープ', 'たい焼き', 'アイス', '那珂湊', '食べ歩き']

/* ━━━━━━ Particle / decoration position data (deterministic for SSR) ━━━━━━ */

const HERO_DOTS = [
  { l: '6%',  b: '18%', d: 0,    dur: 3.8, s: 3 },
  { l: '13%', b: '32%', d: 0.6,  dur: 4.2, s: 2 },
  { l: '20%', b: '22%', d: 1.3,  dur: 3.5, s: 3 },
  { l: '28%', b: '44%', d: 0.2,  dur: 4.8, s: 2 },
  { l: '38%', b: '16%', d: 1.0,  dur: 3.3, s: 4 },
  { l: '46%', b: '38%', d: 1.7,  dur: 4.0, s: 2 },
  { l: '57%', b: '24%', d: 0.4,  dur: 4.5, s: 3 },
  { l: '64%', b: '48%', d: 1.1,  dur: 3.7, s: 2 },
  { l: '72%', b: '20%', d: 0.8,  dur: 4.3, s: 4 },
  { l: '79%', b: '36%', d: 1.5,  dur: 3.6, s: 2 },
  { l: '86%', b: '28%', d: 0.3,  dur: 4.1, s: 3 },
  { l: '93%', b: '42%', d: 1.9,  dur: 3.9, s: 2 },
  { l: '32%', b: '55%', d: 0.7,  dur: 4.6, s: 3 },
  { l: '51%', b: '60%', d: 1.4,  dur: 4.4, s: 2 },
  { l: '41%', b: '72%', d: 0.9,  dur: 3.4, s: 3 },
  { l: '68%', b: '68%', d: 1.6,  dur: 4.7, s: 2 },
]

const HERO_STARS = [
  { l: '16%', t: '28%', d: 0.5, s: 7 },
  { l: '33%', t: '45%', d: 1.3, s: 5 },
  { l: '67%', t: '32%', d: 0.8, s: 9 },
  { l: '83%', t: '48%', d: 1.9, s: 6 },
  { l: '49%', t: '36%', d: 0.3, s: 8 },
  { l: '76%', t: '22%', d: 1.5, s: 5 },
  { l: '24%', t: '60%', d: 1.0, s: 7 },
]

const INTRO_HEARTS = [
  { l: '3%',  b: '20%', d: 0,    dur: 4.5, s: 14 },
  { l: '8%',  b: '45%', d: 0.8,  dur: 5.0, s: 10 },
  { l: '14%', b: '30%', d: 1.5,  dur: 4.2, s: 8 },
  { l: '85%', b: '22%', d: 0.3,  dur: 4.8, s: 16 },
  { l: '90%', b: '48%', d: 1.1,  dur: 5.2, s: 11 },
  { l: '94%', b: '35%', d: 0.6,  dur: 4.6, s: 8 },
  { l: '78%', b: '60%', d: 1.8,  dur: 5.5, s: 13 },
  { l: '5%',  b: '70%', d: 1.3,  dur: 4.7, s: 9 },
  { l: '88%', b: '68%', d: 0.4,  dur: 5.3, s: 10 },
  { l: '10%', b: '60%', d: 0.9,  dur: 4.4, s: 12 },
  { l: '92%', b: '78%', d: 1.6,  dur: 4.9, s: 8 },
]

const INTRO_STARS = [
  { l: '6%',  t: '15%', d: 0.4, s: 6 },
  { l: '89%', t: '20%', d: 1.0, s: 8 },
  { l: '3%',  t: '50%', d: 1.6, s: 5 },
  { l: '95%', t: '55%', d: 0.7, s: 7 },
  { l: '11%', t: '80%', d: 1.2, s: 5 },
  { l: '82%', t: '85%', d: 0.3, s: 6 },
]

const YAKI_WISPS = [
  { d: 0 }, { d: 0.35 }, { d: 0.70 }, { d: 1.05 }, { d: 1.40 },
  { d: 0.18 }, { d: 0.53 }, { d: 0.88 }, { d: 1.23 }, { d: 1.58 },
  { d: 0.28 }, { d: 0.63 }, { d: 0.98 }, { d: 1.33 }, { d: 1.68 },
  { d: 0.08 }, { d: 0.43 }, { d: 0.78 },
]

const YAKI_SPARKS = [
  { l: '4%',  d: 0,    dur: 1.7, c: '#C8400A' },
  { l: '12%', d: 0.35, dur: 1.5, c: '#E86A2A' },
  { l: '22%', d: 0.80, dur: 1.9, c: '#C8400A' },
  { l: '32%', d: 0.15, dur: 1.6, c: '#D4501A' },
  { l: '42%', d: 0.60, dur: 2.0, c: '#C8400A' },
  { l: '52%', d: 1.05, dur: 1.7, c: '#E86A2A' },
  { l: '62%', d: 0.45, dur: 1.8, c: '#C8400A' },
  { l: '72%', d: 0.90, dur: 1.6, c: '#D4501A' },
  { l: '82%', d: 0.25, dur: 1.9, c: '#C8400A' },
  { l: '91%', d: 1.30, dur: 1.7, c: '#E86A2A' },
  { l: '96%', d: 0.70, dur: 2.1, c: '#C8400A' },
  { l: '7%',  d: 1.50, dur: 1.8, c: '#D4501A' },
]

const MENU_STARS = [
  { l: '2%',  t: '8%',  d: 0.4, s: 8 },
  { l: '8%',  t: '55%', d: 1.1, s: 6 },
  { l: '95%', t: '12%', d: 0.7, s: 9 },
  { l: '92%', t: '60%', d: 1.5, s: 7 },
  { l: '50%', t: '4%',  d: 0.9, s: 6 },
  { l: '48%', t: '90%', d: 0.2, s: 8 },
  { l: '25%', t: '88%', d: 1.8, s: 5 },
  { l: '74%', t: '85%', d: 0.6, s: 7 },
  { l: '18%', t: '6%',  d: 1.3, s: 6 },
  { l: '78%', t: '8%',  d: 0.3, s: 8 },
]

const PROMISE_RINGS = [
  { l: '5%',  t: '15%', d: 0,    dur: 2.8, s: 60 },
  { l: '35%', t: '10%', d: 0.6,  dur: 3.2, s: 48 },
  { l: '65%', t: '12%', d: 1.2,  dur: 2.6, s: 56 },
  { l: '88%', t: '18%', d: 0.3,  dur: 3.0, s: 44 },
  { l: '12%', t: '75%', d: 0.9,  dur: 2.9, s: 40 },
  { l: '55%', t: '80%', d: 1.5,  dur: 3.1, s: 52 },
  { l: '80%', t: '78%', d: 0.4,  dur: 2.7, s: 44 },
  { l: '30%', t: '70%', d: 1.8,  dur: 3.3, s: 36 },
]

const SCENE_DOTS = [
  { l: '4%',  b: '12%', d: 0,    dur: 5.5, s: 4 },
  { l: '11%', b: '28%', d: 0.8,  dur: 6.0, s: 3 },
  { l: '19%', b: '62%', d: 1.5,  dur: 4.8, s: 5 },
  { l: '28%', b: '38%', d: 0.3,  dur: 5.8, s: 3 },
  { l: '36%', b: '18%', d: 1.2,  dur: 5.2, s: 4 },
  { l: '47%', b: '52%', d: 0.6,  dur: 6.3, s: 3 },
  { l: '55%', b: '30%', d: 1.8,  dur: 4.6, s: 5 },
  { l: '63%', b: '68%', d: 0.4,  dur: 5.9, s: 3 },
  { l: '72%', b: '42%', d: 1.0,  dur: 4.9, s: 4 },
  { l: '80%', b: '22%', d: 0.7,  dur: 5.6, s: 3 },
  { l: '88%', b: '55%', d: 1.4,  dur: 5.3, s: 5 },
  { l: '93%', b: '35%', d: 0.2,  dur: 6.1, s: 3 },
  { l: '15%', b: '78%', d: 1.6,  dur: 5.0, s: 4 },
  { l: '42%', b: '82%', d: 0.9,  dur: 5.7, s: 3 },
  { l: '68%', b: '78%', d: 1.3,  dur: 4.7, s: 4 },
  { l: '84%', b: '72%', d: 0.5,  dur: 6.2, s: 3 },
  { l: '24%', b: '90%', d: 1.1,  dur: 5.4, s: 4 },
  { l: '58%', b: '88%', d: 0.3,  dur: 4.5, s: 3 },
]

const ACCESS_RINGS = [
  { l: '8%',  t: '30%', d: 0,   s: 80 },
  { l: '6%',  t: '28%', d: 0.8, s: 80 },
  { l: '5%',  t: '26%', d: 1.6, s: 80 },
  { l: '85%', t: '50%', d: 0.4, s: 64 },
  { l: '84%', t: '49%', d: 1.2, s: 64 },
]

const INSTA_HEARTS = [
  { l: '3%',  b: '15%', d: 0,    dur: 4.5, s: 18 },
  { l: '9%',  b: '38%', d: 0.7,  dur: 5.0, s: 12 },
  { l: '16%', b: '22%', d: 1.4,  dur: 4.2, s: 9 },
  { l: '22%', b: '55%', d: 0.3,  dur: 4.8, s: 14 },
  { l: '74%', b: '18%', d: 1.1,  dur: 5.3, s: 10 },
  { l: '80%', b: '42%', d: 0.5,  dur: 4.6, s: 18 },
  { l: '86%', b: '28%', d: 1.8,  dur: 5.1, s: 9 },
  { l: '92%', b: '60%', d: 0.2,  dur: 4.7, s: 12 },
  { l: '44%', b: '12%', d: 0.9,  dur: 4.4, s: 11 },
  { l: '55%', b: '68%', d: 1.6,  dur: 5.5, s: 16 },
  { l: '30%', b: '72%', d: 0.6,  dur: 4.9, s: 8 },
  { l: '64%', b: '75%', d: 1.2,  dur: 5.2, s: 14 },
  { l: '5%',  b: '80%', d: 1.9,  dur: 4.3, s: 10 },
  { l: '90%', b: '80%', d: 0.8,  dur: 5.6, s: 13 },
]

const INSTA_STARS = [
  { l: '20%', t: '30%', d: 0.4, s: 10 },
  { l: '38%', t: '55%', d: 1.2, s: 7 },
  { l: '60%', t: '28%', d: 0.7, s: 12 },
  { l: '78%', t: '48%', d: 1.8, s: 8 },
  { l: '50%', t: '40%', d: 0.3, s: 9 },
  { l: '14%', t: '65%', d: 1.5, s: 6 },
  { l: '86%', t: '62%', d: 0.9, s: 11 },
  { l: '68%', t: '72%', d: 0.6, s: 7 },
  { l: '8%',  t: '40%', d: 1.1, s: 8 },
  { l: '92%', t: '35%', d: 0.2, s: 9 },
]

/* ━━━━━━ Helper micro-components ━━━━━━ */

function MarqueeStrip() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-12 bg-brand overflow-hidden flex items-center" aria-hidden="true">
      <div className="marquee-track flex items-center whitespace-nowrap select-none">
        {[0, 1].map((n) => (
          <span key={n} className="flex items-center">
            {MARQUEE_ITEMS.map((item) => (
              <span key={item} className="inline-flex items-center">
                <span className="text-white font-sans text-xs px-5 md:px-7" style={{ letterSpacing: '0.2em' }}>{item}</span>
                <span className="text-white/35 text-[10px]">·</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}

function SteamSVG({ className = '' }: { className?: string }) {
  return (
    <svg width="72" height="48" viewBox="0 0 72 48" fill="none" className={className} aria-hidden="true">
      <path d="M16 46 C13 34 20 22 15 12 C11 3 17 0 16 0"
        stroke="#C8400A" strokeWidth="1.8" strokeLinecap="round" fill="none"
        className="steam-wisp" style={{ animationDelay: '0s' }} />
      <path d="M36 46 C33 32 40 20 35 10 C31 1 37 0 36 0"
        stroke="#C8400A" strokeWidth="1.8" strokeLinecap="round" fill="none"
        className="steam-wisp" style={{ animationDelay: '0.7s' }} />
      <path d="M56 46 C53 34 60 22 55 12 C51 3 57 0 56 0"
        stroke="#C8400A" strokeWidth="1.8" strokeLinecap="round" fill="none"
        className="steam-wisp" style={{ animationDelay: '1.4s' }} />
    </svg>
  )
}

function SteamWisp({ delay = 0, color = '#C8400A' }: { delay?: number; color?: string }) {
  return (
    <svg width="13" height="50" viewBox="0 0 13 50" fill="none" aria-hidden="true" className="flex-shrink-0">
      <path
        d="M6.5 48 C4 36 9 22 5.5 10 C2.5 1 7.5 0 6.5 0"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
        className="steam-wisp"
        style={{ animationDelay: `${delay}s` }}
      />
    </svg>
  )
}

function StarDot({ size = 8 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0 L13.8 10.2 L24 12 L13.8 13.8 L12 24 L10.2 13.8 L0 12 L10.2 10.2 Z" />
    </svg>
  )
}

function HeartDot({ size = 10 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
    </svg>
  )
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export default function HomePage() {
  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden" style={{ height: '100svh' }}>

        <div className="hero-bg absolute inset-0">
          <Image src="/LINE_ALBUM_焼きそば_260616_1.jpg" alt="那珂湊の美明豚焼きそば — カルカモ"
            fill className="object-cover object-center" priority />
        </div>

        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(to bottom, rgba(10,6,2,0.62) 0%, rgba(10,6,2,0.12) 42%, rgba(10,6,2,0.75) 100%)',
        }} />

        {/* ── Hero particles — rising dots + sparkle stars ── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" style={{ top: '64px', bottom: '48px' }} aria-hidden="true">
          {HERO_DOTS.map((p, i) => (
            <div key={i} className="absolute rounded-full bg-white/30 rise"
              style={{ left: p.l, bottom: p.b, width: `${p.s}px`, height: `${p.s}px`,
                animationDelay: `${p.d}s`, animationDuration: `${p.dur}s` }} />
          ))}
          {HERO_STARS.map((s, i) => (
            <div key={i} className="absolute text-white/20 twinkle"
              style={{ left: s.l, top: s.t, animationDelay: `${s.d}s` }}>
              <StarDot size={s.s} />
            </div>
          ))}
        </div>

        {/* Ghost YAKISOBA */}
        <div className="absolute inset-x-0 flex items-center justify-center overflow-hidden pointer-events-none select-none hero-catchphrase"
          style={{ top: '64px', bottom: '48px' }} aria-hidden="true">
          <span className="font-display font-light text-white whitespace-nowrap"
            style={{ fontSize: 'clamp(7rem, 24vw, 20rem)', opacity: 0.038, letterSpacing: '-0.03em', lineHeight: 1 }}>
            YAKISOBA
          </span>
        </div>

        {/* Left vertical */}
        <div className="absolute hero-left-vert pointer-events-none flex flex-col items-center justify-center gap-2"
          style={{ left: '1rem', top: '72px', bottom: '48px' }}>
          {['や', 'き', 'そ', 'ば'].map((c, i) => (
            <span key={i} className="font-serif text-sm text-white font-bold" style={{ letterSpacing: 0 }}>{c}</span>
          ))}
          <div className="w-px h-5 bg-white/15 my-1" />
          {['た', 'こ'].map((c, i) => (
            <span key={i} className="font-serif text-xs text-white/35">{c}</span>
          ))}
          <div className="w-px h-4 bg-white/10 my-1" />
          {['お', 'こ', 'の', 'み'].map((c, i) => (
            <span key={i} className="font-serif text-xs text-white/20">{c}</span>
          ))}
        </div>

        {/* Center content */}
        <div className="absolute inset-x-0 flex flex-col items-center justify-center text-center px-12 md:px-20"
          style={{ top: '64px', bottom: '48px' }}>
          <div className="flex items-center gap-4 mb-5 hero-catchphrase">
            <span className="block w-8 h-px bg-white/25 flex-shrink-0" />
            <p className="label text-white/40 flex-shrink-0" style={{ letterSpacing: '0.42em', fontSize: '0.58rem' }}>
              那珂湊 · Nakaminato
            </p>
            <span className="block w-8 h-px bg-white/25 flex-shrink-0" />
          </div>

          <h1 className="hero-catchphrase font-serif text-white text-center" style={{ animationDelay: '0.52s' }}>
            <span className="block font-normal text-white/60"
              style={{ fontSize: 'clamp(1rem, 2.8vw, 1.75rem)', letterSpacing: '0.18em', marginBottom: '0.3em' }}>
              那珂湊で楽しむ
            </span>
            <span className="block font-bold leading-none"
              style={{ fontSize: 'clamp(3.2rem, 11vw, 9rem)', textShadow: '0 4px 36px rgba(0,0,0,0.5)', marginBottom: '0.14em' }}>
              焼きそばと
            </span>
            <span className="block font-bold"
              style={{ fontSize: 'clamp(2rem, 7vw, 5.6rem)', lineHeight: 1.15, opacity: 0.86,
                textShadow: '0 4px 36px rgba(0,0,0,0.5)', letterSpacing: '0.04em' }}>
              食べ歩きの店
            </span>
          </h1>

          <div className="flex items-center gap-5 mt-6 hero-catchphrase" style={{ animationDelay: '0.88s' }}>
            <span className="block w-12 h-px bg-white/18 flex-shrink-0" />
            <p className="font-display italic text-white/28 flex-shrink-0" style={{ fontSize: '0.9rem', letterSpacing: '0.2em' }}>
              Yakisoba Stand
            </p>
            <span className="block w-12 h-px bg-white/18 flex-shrink-0" />
          </div>

          <div className="hero-scroll flex flex-col items-center mt-8 md:mt-12" style={{ animationDelay: '1.6s' }}>
            <span className="label text-white/25" style={{ fontSize: '8px', letterSpacing: '0.4em' }}>SCROLL</span>
            <div className="w-px h-10 bg-white/20 mt-2 scroll-line" />
          </div>
        </div>

        {/* Right vertical */}
        <div className="absolute hero-right-vert pointer-events-none flex flex-col items-center justify-center gap-2"
          style={{ right: '1rem', top: '72px', bottom: '48px' }}>
          {['茨', '城', '·', '那', '珂', '湊'].map((c, i) => (
            <span key={i} className="font-serif text-xs text-white/25">{c}</span>
          ))}
        </div>

        <MascotFloat />
        <MarqueeStrip />
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          INTRO — カルカモ紹介
          Decoration: floating hearts + sparkle stars
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-t border-bone/40 relative overflow-hidden">

        {/* Floating hearts — mascotのキャラクターに合わせてハートを散りばめる */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
          {INTRO_HEARTS.map((h, i) => (
            <div key={i} className="absolute text-[#E88AB4]/35 heart-rise"
              style={{ left: h.l, bottom: h.b, animationDelay: `${h.d}s`, animationDuration: `${h.dur}s` }}>
              <HeartDot size={h.s} />
            </div>
          ))}
          {INTRO_STARS.map((s, i) => (
            <div key={i} className="absolute text-bone/40 twinkle"
              style={{ left: s.l, top: s.t, animationDelay: `${s.d}s` }}>
              <StarDot size={s.s} />
            </div>
          ))}
        </div>

        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16 relative">

          <AnimateIn direction="up" className="flex items-center gap-4 mb-10 md:mb-14">
            <Image src="/logo.png" alt="カルカモ マスコット" width={72} height={72} className="rounded-xl flex-shrink-0" />
            <div>
              <p className="label text-brown-light mb-1">那珂湊のテイクアウトスタンド</p>
              <h2 className="font-serif font-bold text-2xl md:text-4xl text-brown-deep leading-snug">
                カルカモについて
              </h2>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <AnimateIn direction="up" delay={0.1}>
              <div className="inline-block bg-brand text-white font-serif text-sm font-bold px-4 py-2 mb-6"
                style={{ borderRadius: '2px', transform: 'rotate(-0.5deg)' }}>
                おさかな市場から歩いて5分
              </div>
              <p className="font-serif text-brown text-sm md:text-base leading-loose mb-5">
                那珂湊おさかな市場のすぐそばに立つ、小さなテイクアウトスタンドです。
                焼きそばをはじめ、たこ焼き・お好み焼き・クレープ・たい焼き・アイスクリームまで、
                食事からスイーツまで幅広いメニューが揃っています。
              </p>
              <p className="font-serif text-brown-light text-sm leading-loose mb-8">
                注文を受けてから丁寧に仕上げる焼きたての味が自慢。
                那珂湊観光や市場散策のついでに立ち寄れる場所として、
                観光客の方にも地元の方にも気軽にご利用いただけます。
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { num: '那珂湊', sub: 'おさかな市場そば' },
                  { num: '焼きたて', sub: '注文後に仕上げる' },
                  { num: '6品目', sub: 'のメニュー展開' },
                ].map((fact) => (
                  <div key={fact.num} className="text-center py-4 border border-bone/60 bg-white/50">
                    <p className="font-serif font-bold text-brown-deep text-xs md:text-sm mb-1">{fact.num}</p>
                    <p className="label text-brown-light" style={{ fontSize: '8px' }}>{fact.sub}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.2}>
              <div className="photo-portrait">
                <Image src="/food-spread.png" alt="カルカモのメニュー" fill className="object-cover object-center" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          YAKISOBA — メインプロダクト
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py border-t border-bone/40" style={{ backgroundColor: '#FAF3E4' }}>
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">

          <AnimateIn direction="up" className="mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[2px] bg-brand flex-shrink-0" />
              <p className="label text-brand">看板メニュー · Signature</p>
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-brown-deep leading-tight">
              那珂湊焼きそば
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

            {/* 左カラム — 写真 + 蒸気演出 */}
            <AnimateIn direction="up">
              <div className="relative">
                <div className="absolute -top-10 left-2 pointer-events-none select-none z-10" aria-hidden="true">
                  <SteamSVG className="opacity-55" />
                </div>
                <div className="relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
                  <Image src="/LINE_ALBUM_焼きそば_260616_3.jpg" alt="美明豚焼きそば — カルカモ"
                    fill className="object-cover" style={{ objectPosition: '50% 40%' }} />
                </div>
              </div>
            </AnimateIn>

            {/* 右カラム — バッジ・説明・メニューリスト */}
            <AnimateIn direction="up" delay={0.1} className="md:pt-4">
              <div className="inline-block border border-brand/40 text-brand px-3 py-1.5 mb-6"
                style={{ fontSize: '9px', letterSpacing: '0.25em', fontFamily: 'var(--font-noto-sans)' }}>
                茨城県産 · 美明豚使用
              </div>

              <p className="font-serif text-brown text-sm md:text-base leading-loose mb-8">
                カルカモの看板メニューは焼きそばです。<br />
                茨城県産ブランド豚「美明豚（びめいとん）」を使ったボリューム満点の一品。
                注文を受けてから丁寧に焼き上げる、作りたての熱々をどうぞ。
              </p>

              <ul className="mb-8">
                {yakisoba.items.map((item, i) => (
                  <li key={item.name}
                    className={`py-4 flex justify-between gap-4 items-start ${i > 0 ? 'border-t border-bone/40' : ''}`}>
                    <div>
                      {item.tag && (
                        <span className="label text-brand border border-brand/30 px-2 py-0.5 mb-2 inline-block"
                          style={{ fontSize: '9px' }}>{item.tag}</span>
                      )}
                      <p className="font-serif text-brown-deep text-sm">{item.name}</p>
                      {item.note && <p className="text-brown-light text-xs mt-0.5">{item.note}</p>}
                    </div>
                    <span className="font-display text-brown-light text-base shrink-0">
                      {item.price != null ? `¥${item.price.toLocaleString()}` : '—'}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href="/yakisoba"
                className="inline-flex items-center gap-3 label text-brand hover:text-brand-dark transition-colors"
                style={{ letterSpacing: '0.25em' }}>
                <span className="block w-6 h-px bg-current" />
                焼きそばのこだわりを見る
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MENU LINEUP — 全6カテゴリ
          Decoration: twinkling sparkle stars
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-t border-bone/40 relative overflow-hidden">

        {/* Sparkle stars in background */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          {MENU_STARS.map((s, i) => (
            <div key={i} className="absolute text-bone/45 twinkle"
              style={{ left: s.l, top: s.t, animationDelay: `${s.d}s` }}>
              <StarDot size={s.s} />
            </div>
          ))}
        </div>

        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16 relative">

          <AnimateIn direction="up" className="mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[2px] bg-brand flex-shrink-0" />
              <p className="label text-brand">All Items · メニュー</p>
            </div>
            <div className="flex items-end gap-5">
              <h2 className="font-serif font-bold text-3xl md:text-5xl text-brown-deep leading-tight">
                メニュー一覧
              </h2>
              <Image src="/logo.png" alt="" width={48} height={48} className="rounded-xl mb-1 opacity-80 flex-shrink-0" aria-hidden="true" />
            </div>
          </AnimateIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-bone/30 mb-10">
            {menuCategories.map((cat, i) => (
              <AnimateIn key={cat.id} direction="up" delay={i * 0.05}>
                <Link href={MENU_HREFS[cat.id] ?? '/menu'}
                  className="bg-white group block hover:opacity-90 transition-opacity h-full">
                  <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <Image src={MENU_IMAGES[cat.id] ?? '/food-spread.png'} alt={`カルカモの${cat.name}`}
                      fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-4 md:p-5">
                    <p className="font-serif text-brown-deep text-sm mb-0.5">{cat.name}</p>
                    <p className="text-brown-light text-xs line-clamp-1">{cat.description}</p>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn direction="up">
            <Link href="/menu"
              className="inline-flex items-center gap-3 label text-brown hover:text-brown-deep transition-colors"
              style={{ letterSpacing: '0.25em' }}>
              <span className="block w-6 h-px bg-current" />
              全メニューを見る
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          THREE PROMISES — こだわり3つ
          Decoration: expanding ring pulses
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py border-t border-bone/40 relative overflow-hidden" style={{ backgroundColor: '#FAF3E4' }}>

        {/* Expanding ring pulses — こだわりの「響き」を可視化 */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
          {PROMISE_RINGS.map((r, i) => (
            <div key={i} className="absolute ring-pulse border border-brand/12 rounded-full"
              style={{ left: r.l, top: r.t, width: `${r.s}px`, height: `${r.s}px`,
                animationDelay: `${r.d}s`, animationDuration: `${r.dur}s` }} />
          ))}
        </div>

        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16 relative">

          <AnimateIn direction="up" className="mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[2px] bg-brand flex-shrink-0" />
              <p className="label text-brand">Our Promise · こだわり</p>
            </div>
            <div className="flex items-center gap-6">
              <h2 className="font-serif font-bold text-3xl md:text-5xl text-brown-deep leading-tight">
                カルカモの3つのこだわり
              </h2>
              <div className="hidden md:block relative flex-shrink-0" style={{ transform: 'rotate(6deg)' }}>
                <Image src="/logo.png" alt="" width={56} height={56} className="rounded-2xl opacity-70" aria-hidden="true" />
              </div>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            {[
              {
                num: '01',
                title: '焼きたてをお届けする',
                body: 'ご注文をいただいてから一つひとつ丁寧に仕上げます。できたての熱々・ふわふわの状態でお渡しするのがカルカモのこだわりです。',
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                    <circle cx="18" cy="20" r="12" fill="#C8400A" fillOpacity="0.12" />
                    <path d="M11 24 Q14 14 18 8 Q22 14 25 24" stroke="#C8400A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    <path d="M14 24 Q17 18 18 14" stroke="#C8400A" strokeWidth="1" strokeLinecap="round" fill="none" />
                  </svg>
                ),
              },
              {
                num: '02',
                title: '地元の食材を使う',
                body: '焼きそばには茨城県産ブランド豚「美明豚」を使用。地域の恵みを活かしながら、那珂湊ならではの味わいをご提供します。',
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                    <circle cx="18" cy="18" r="12" fill="#C8400A" fillOpacity="0.12" />
                    <ellipse cx="18" cy="22" rx="9" ry="6" fill="#C8400A" fillOpacity="0.4" />
                    <path d="M12 18 Q18 12 24 18" stroke="#C8400A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  </svg>
                ),
              },
              {
                num: '03',
                title: '市場散策のついでに寄れる',
                body: '那珂湊おさかな市場から歩いて5分。観光のついでに気軽に立ち寄れる立地と、手軽に食べ歩きができる商品展開が自慢です。',
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                    <circle cx="18" cy="18" r="12" fill="#C8400A" fillOpacity="0.12" />
                    <circle cx="18" cy="16" r="5" stroke="#C8400A" strokeWidth="1.5" fill="none" />
                    <path d="M18 21 L18 28" stroke="#C8400A" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M14 26 Q18 28 22 26" stroke="#C8400A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  </svg>
                ),
              },
            ].map((item) => (
              <AnimateIn key={item.num} direction="up">
                <div className="border-t-[3px] border-brand pt-6 pb-2">
                  <div className="flex items-center gap-4 mb-4">
                    {item.icon}
                    <span className="font-display text-3xl leading-none" style={{ color: '#E0CBA8' }}>{item.num}</span>
                  </div>
                  <h3 className="font-serif font-bold text-brown-deep text-base mb-3 leading-snug">{item.title}</h3>
                  <p className="font-serif text-brown-light text-sm leading-loose">{item.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SCENE — 利用シーン (dark)
          Decoration: 18 floating luminous dots
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-brown-deep border-t border-brown relative overflow-hidden">

        {/* Floating luminous dots — 夜の港町のような幻想的な光の粒 */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
          {SCENE_DOTS.map((p, i) => (
            <div key={i} className="absolute rounded-full float-sway"
              style={{ left: p.l, bottom: p.b, width: `${p.s}px`, height: `${p.s}px`,
                backgroundColor: 'rgba(255,255,255,0.18)',
                animationDelay: `${p.d}s`, animationDuration: `${p.dur}s` }} />
          ))}
        </div>

        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16 relative">

          <AnimateIn direction="up" className="mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[2px] bg-brand flex-shrink-0" />
              <p className="label text-ivory/40">Scene · こんなシーンに</p>
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-ivory leading-tight">
              こんな時に寄ってください
            </h2>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-white/10">
            {[
              { title: 'おさかな市場の帰りに', body: '市場でお買い物を楽しんだ後は、カルカモに立ち寄って焼きそばやたこ焼きを。港町散策をさらに楽しく。' },
              { title: 'ランチは焼きそばで', body: 'ボリューム満点の美明豚焼きそばやお好み焼きで、しっかりランチ。お食事系メニューが充実しています。' },
              { title: 'おやつにクレープ・たい焼き', body: 'ちょっと甘いものが食べたい時は、クレープやたい焼き・アイスクリームを。食後のデザートにも。' },
              { title: '家族みんなで食べ歩き', body: '子どもから大人まで楽しめるメニューが揃っています。それぞれ好きなものを選んで食べ歩きを楽しんで。' },
              { title: '那珂湊観光の途中に', body: 'ひたちなか市・那珂湊エリアの観光ルートに組み込みやすい立地。旅の記念になる一品をどうぞ。' },
              { title: '地元のちょっとした買い物に', body: 'テイクアウト専門なので、気軽に立ち寄れます。お散歩ついでや、ちょっとしたおやつに。' },
            ].map((scene) => (
              <AnimateIn key={scene.title} direction="up">
                <div className="bg-white/5 p-6 md:p-8 h-full">
                  <h3 className="font-serif font-bold text-ivory text-sm mb-3 leading-snug">{scene.title}</h3>
                  <p className="font-serif text-ivory/50 text-xs leading-loose">{scene.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ACCESS — アクセス
          Decoration: location pin pulse rings
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-t border-bone/40 relative overflow-hidden">

        {/* Location pulse rings */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
          {ACCESS_RINGS.map((r, i) => (
            <div key={i} className="absolute ring-pulse border border-brand/18 rounded-full"
              style={{ left: r.l, top: r.t, width: `${r.s}px`, height: `${r.s}px`,
                animationDelay: `${r.d}s`, animationDuration: '3.2s', marginLeft: `-${r.s / 2}px`, marginTop: `-${r.s / 2}px` }} />
          ))}
        </div>

        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16 relative">

          <AnimateIn direction="up" className="mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[2px] bg-brand flex-shrink-0" />
              <p className="label text-brand">Access · アクセス</p>
            </div>
            <div className="flex items-end gap-4">
              <h2 className="font-serif font-bold text-3xl md:text-5xl text-brown-deep leading-tight">
                アクセス
              </h2>
              <Image src="/logo.png" alt="" width={44} height={44} className="rounded-xl mb-1 opacity-75 flex-shrink-0" aria-hidden="true" />
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <AnimateIn direction="up">
              <dl className="mb-8">
                {[
                  { dt: 'お店', dd: 'カルカモ' },
                  { dt: '住所', dd: '茨城県ひたちなか市湊本町27-3' },
                  { dt: '目印', dd: '那珂湊おさかな市場から徒歩5分' },
                  { dt: '営業日', dd: 'Instagram をご確認ください' },
                ].map((row, i) => (
                  <div key={row.dt} className={`flex gap-6 py-4 ${i > 0 ? 'border-t border-bone/40' : ''}`}>
                    <dt className="w-14 flex-shrink-0 label pt-0.5">{row.dt}</dt>
                    <dd className="font-serif text-brown text-sm leading-relaxed">{row.dd}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex flex-col gap-4">
                <a href="https://maps.google.com/?q=茨城県ひたちなか市湊本町27-3" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 label text-brand hover:text-brand-dark transition-colors"
                  style={{ letterSpacing: '0.25em' }}>
                  <span className="block w-6 h-px bg-current" />
                  Google Maps で開く
                </a>
                <Link href="/access"
                  className="inline-flex items-center gap-3 label text-brown-light hover:text-brown-deep transition-colors"
                  style={{ letterSpacing: '0.25em' }}>
                  <span className="block w-6 h-px bg-current" />
                  詳しいアクセス
                </Link>
              </div>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.1}>
              <div className="aspect-square overflow-hidden border border-bone/40">
                <iframe
                  src="https://maps.google.com/maps?q=茨城県ひたちなか市湊本町27-3&output=embed&hl=ja"
                  width="100%" height="100%" style={{ border: 0 }}
                  loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="カルカモ アクセスマップ" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          BLOG — お知らせ
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-16 md:py-20 border-t border-bone/40 relative overflow-hidden" style={{ backgroundColor: '#FAF3E4' }}>
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn direction="up" className="flex items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="block w-6 h-[2px] bg-brand flex-shrink-0" />
                <p className="label text-brand">Information</p>
              </div>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-brown-deep">
                お知らせ・カルカモ日記
              </h2>
            </div>
            <Link href="/blog"
              className="inline-flex items-center gap-3 label text-brown hover:text-brown-deep transition-colors shrink-0"
              style={{ letterSpacing: '0.25em' }}>
              <span className="block w-6 h-px bg-current" />
              一覧を見る
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          INSTAGRAM — フォロー導線
          Decoration: 14 floating hearts + 10 sparkle stars
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 md:py-28 bg-brown-deep border-t border-brown relative overflow-hidden">

        {/* Hearts + sparkles — Instagramらしいかわいい演出 */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
          {INSTA_HEARTS.map((h, i) => (
            <div key={i} className="absolute text-[#E88AB4]/30 heart-rise"
              style={{ left: h.l, bottom: h.b, animationDelay: `${h.d}s`, animationDuration: `${h.dur}s` }}>
              <HeartDot size={h.s} />
            </div>
          ))}
          {INSTA_STARS.map((s, i) => (
            <div key={i} className="absolute text-ivory/12 twinkle"
              style={{ left: s.l, top: s.t, animationDelay: `${s.d}s` }}>
              <StarDot size={s.s} />
            </div>
          ))}
        </div>

        <AnimateIn direction="up" className="text-center px-6 relative">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="block w-10 h-px bg-ivory/20" />
            <p className="label text-ivory/30">Follow Us</p>
            <span className="block w-10 h-px bg-ivory/20" />
          </div>
          <h2 className="font-serif font-bold text-2xl md:text-4xl text-ivory mb-4">
            Instagram で最新情報を
          </h2>
          <p className="font-serif text-ivory/50 text-sm mb-10">
            営業日・最新メニュー・おすすめ情報を毎日発信中
          </p>
          <a href="https://www.instagram.com/karukamo.2384/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-5 label text-ivory/60 hover:text-ivory transition-colors"
            style={{ letterSpacing: '0.3em' }}>
            <span className="block w-10 h-px bg-current" />
            @karukamo.2384
            <span className="block w-10 h-px bg-current" />
          </a>
        </AnimateIn>
      </section>
    </>
  )
}
