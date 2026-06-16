export type MenuItem = {
  name: string
  price: number | null
  note?: string
  tag?: string
}

export type MenuCategory = {
  id: string
  name: string
  nameEn: string
  description: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'yakisoba',
    name: '焼きそば',
    nameEn: 'Yakisoba',
    description: '地元ブランド豚「美明豚」を使ったこだわりの焼きそば。注文を受けてから丁寧に焼き上げます。',
    items: [
      { name: '美明豚焼きそば', price: 500 },
      { name: 'イカ焼きそば', price: 500 },
      { name: 'からしマヨがけ美明豚焼きそば', price: 700, tag: 'おすすめ' },
      { name: 'オム焼きそば', price: null, note: '価格は店舗にてご確認ください' },
      { name: 'チーズオム焼きそば', price: null, note: '価格は店舗にてご確認ください' },
    ],
  },
  {
    id: 'takoyaki',
    name: 'たこ焼き',
    nameEn: 'Takoyaki',
    description: '外はカリッ、中はトロッ。大玉サイズでボリューム満点。',
    items: [
      { name: 'ソースマヨ大玉たこ焼き', price: 500 },
      { name: 'からしマヨ大玉たこ焼き', price: 600 },
    ],
  },
  {
    id: 'okonomiyaki',
    name: 'お好み焼き',
    nameEn: 'Okonomiyaki',
    description: '香ばしく焼き上げたふわふわ生地に、具材たっぷり。',
    items: [
      { name: '豚玉お好み焼き', price: 500 },
      { name: 'イカ玉お好み焼き', price: 500 },
      { name: 'ツナマヨお好み焼き', price: 500 },
      { name: '明太もちチーズお好み焼き', price: 700, tag: '人気' },
    ],
  },
  {
    id: 'crepe',
    name: 'クレープ',
    nameEn: 'Crepe',
    description: '薄く焼いたもちもちの生地に、クリームやフルーツをたっぷりと。食べ歩きにも最適。',
    items: [
      { name: 'プレーン', note: '生地本来のおいしさをシンプルに', price: null },
      { name: 'チョコバナナ', note: 'チョコとバナナの定番コンビ', price: null },
      { name: 'ストロベリークリーム', note: '甘酸っぱいイチゴと生クリーム', price: null },
      { name: '季節の限定フレーバー', note: '旬の食材を使ったシーズナルクレープ', price: null, tag: '季節限定' },
    ],
  },
  {
    id: 'taiyaki',
    name: 'たい焼き',
    nameEn: 'Taiyaki',
    description: 'パリッと香ばしい皮に、たっぷりのあん。各180円。',
    items: [
      { name: '小倉たい焼き', price: 180 },
      { name: 'カスタードたい焼き', price: 180 },
      { name: '白あんたい焼き', price: 180 },
    ],
  },
  {
    id: 'sweets',
    name: 'アイス・スイーツ',
    nameEn: 'Ice Cream & Sweets',
    description: '目でも楽しめる、食べ歩きにぴったりのスイーツ。',
    items: [
      { name: 'ふぐもなかアイス', price: 500, tag: '名物' },
      { name: 'バニラアイス', price: 450 },
      { name: 'パステルマーブルアイス', price: 450 },
      { name: 'ラムネアイス', price: 450 },
      { name: 'ラムレーズンアイス', price: 450 },
      { name: '抹茶アイス', price: 450 },
    ],
  },
]
