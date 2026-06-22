/**
 * Daily blog post generator for karukamo.jp
 * Uses Claude API to generate SEO-optimized Japanese blog posts
 * Run via: npx tsx scripts/generate-daily-post.ts
 */

import Anthropic from '@anthropic-ai/sdk'
import fs from 'fs'
import path from 'path'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const BLOG_DIR = path.join(process.cwd(), 'content/blog')
const SITE_NAME = 'カルカモ'
const BASE_URL = 'https://www.karukamo.jp'
const AREA = 'ひたちなか市・那珂湊'

// Topic pool — rotate to avoid duplicates
const TOPIC_POOL: Array<{
  keyword: string
  category: string
  angle: string
  tags: string[]
}> = [
  { keyword: 'ひたちなか市 テイクアウト', category: 'テイクアウト', angle: '地元客向けの昼食・軽食利用', tags: ['ひたちなか市', 'テイクアウト', '焼きそば'] },
  { keyword: '那珂湊 焼きそば', category: '焼きそば', angle: '観光途中に立ち寄れる焼きそばスタンド', tags: ['那珂湊', '焼きそば', 'テイクアウト'] },
  { keyword: 'ひたちなか市 焼きそば', category: '焼きそば', angle: '地元ランチに焼きそばを選ぶ理由', tags: ['ひたちなか市', '焼きそば', 'ランチ'] },
  { keyword: 'ひたちなか市 たこ焼き', category: 'たこ焼き', angle: '大玉たこ焼きをテイクアウトで楽しむ', tags: ['ひたちなか市', 'たこ焼き', 'テイクアウト'] },
  { keyword: 'ひたちなか市 お好み焼き', category: 'お好み焼き', angle: 'お好み焼きをテイクアウトで食べる楽しみ方', tags: ['ひたちなか市', 'お好み焼き', 'テイクアウト'] },
  { keyword: 'ひたちなか市 クレープ', category: 'クレープ', angle: '那珂湊散策後の食べ歩きスイーツ', tags: ['ひたちなか市', 'クレープ', 'スイーツ', '食べ歩き'] },
  { keyword: '那珂湊 ランチ', category: 'ランチ', angle: 'おさかな市場周辺でテイクアウトランチ', tags: ['那珂湊', 'ランチ', 'テイクアウト'] },
  { keyword: '那珂湊 食べ歩き', category: '食べ歩き', angle: '港町の食べ歩きルートにカルカモを加える', tags: ['那珂湊', '食べ歩き', '観光'] },
  { keyword: '那珂湊 観光 テイクアウト', category: '観光', angle: '那珂湊観光のついでに食べ歩きグルメ', tags: ['那珂湊', '観光', 'テイクアウト'] },
  { keyword: 'ひたちなか市 スイーツ', category: 'スイーツ', angle: 'たい焼き・アイスで楽しむ那珂湊のスイーツ', tags: ['ひたちなか市', 'スイーツ', 'たい焼き', 'アイス'] },
  { keyword: '家族で利用しやすいテイクアウト', category: 'テイクアウト', angle: '家族全員が好きなものを選べる場所', tags: ['家族', 'テイクアウト', '那珂湊'] },
  { keyword: 'ドライブ中に立ち寄れるテイクアウト', category: 'テイクアウト', angle: '茨城ドライブ途中の立ち寄りスポット', tags: ['ドライブ', 'テイクアウト', 'ひたちなか市'] },
  { keyword: '海浜公園 那珂湊 お出かけ', category: '観光', angle: '海浜公園と那珂湊を組み合わせたお出かけプラン', tags: ['海浜公園', '那珂湊', 'お出かけ', 'テイクアウト'] },
  { keyword: '那珂湊 地元ランチ', category: 'ランチ', angle: '地元に住む方の日常ランチとしての活用', tags: ['那珂湊', 'ランチ', 'ひたちなか市'] },
  { keyword: '那珂湊 観光 食べ歩き', category: '食べ歩き', angle: 'おさかな市場帰りの食べ歩きグルメ', tags: ['那珂湊', '観光', '食べ歩き', 'おさかな市場'] },
  { keyword: 'ひたちなか市 子連れ テイクアウト', category: 'テイクアウト', angle: '子どもが喜ぶテイクアウトメニューを選ぶ', tags: ['子連れ', 'テイクアウト', 'ひたちなか市'] },
  { keyword: '那珂湊 たい焼き', category: 'スイーツ', angle: '散策途中に食べたいたい焼き', tags: ['那珂湊', 'たい焼き', '食べ歩き'] },
  { keyword: '那珂湊 アイスクリーム', category: 'スイーツ', angle: 'ふぐもなかアイスで楽しむ那珂湊', tags: ['那珂湊', 'アイス', 'スイーツ'] },
  { keyword: '那珂湊 美明豚 焼きそば', category: '焼きそば', angle: '茨城のブランド豚を使った焼きそばの魅力', tags: ['美明豚', '焼きそば', '那珂湊', '茨城'] },
  { keyword: 'おさかな市場 周辺 グルメ', category: '観光', angle: 'おさかな市場帰りに立ち寄れる食事スポット', tags: ['おさかな市場', '那珂湊', 'グルメ', 'テイクアウト'] },
]

function getJSTDateString(): string {
  const now = new Date()
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000)
  return jst.toISOString().slice(0, 10)
}

function getExistingSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs.readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}

function getExistingKeywords(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  const slugs = getExistingSlugs()
  const keywords: string[] = []
  for (const slug of slugs) {
    const content = fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), 'utf8')
    const m = content.match(/^title:\s*"(.+)"/m)
    if (m) keywords.push(m[1])
  }
  return keywords
}

function pickTopic(existingKeywords: string[]): typeof TOPIC_POOL[number] {
  // Avoid recently used keywords by cycling through the pool
  const today = new Date()
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000)

  // Prefer topics whose keyword doesn't appear in any existing title
  const unused = TOPIC_POOL.filter(
    (t) => !existingKeywords.some((k) => k.includes(t.keyword.split(' ')[0]))
  )

  const pool = unused.length > 0 ? unused : TOPIC_POOL
  return pool[dayOfYear % pool.length]
}

function generateSlug(keyword: string, date: string): string {
  const map: Record<string, string> = {
    'ひたちなか市': 'hitachinaka',
    '那珂湊': 'nakaminato',
    '焼きそば': 'yakisoba',
    'たこ焼き': 'takoyaki',
    'お好み焼き': 'okonomiyaki',
    'クレープ': 'crepe',
    'テイクアウト': 'takeout',
    'ランチ': 'lunch',
    '食べ歩き': 'food-walk',
    'スイーツ': 'sweets',
    'アイス': 'ice',
    'アイスクリーム': 'ice-cream',
    'たい焼き': 'taiyaki',
    '観光': 'tourism',
    '子連れ': 'family',
    '家族': 'family',
    'ドライブ': 'drive',
    '海浜公園': 'kaihin-park',
    '美明豚': 'bimei-pork',
    'おさかな市場': 'osakana-market',
    'グルメ': 'gourmet',
    '地元ランチ': 'local-lunch',
    'お出かけ': 'outing',
  }

  let slug = keyword
  for (const [jp, en] of Object.entries(map)) {
    slug = slug.replace(new RegExp(jp, 'g'), en)
  }
  slug = slug
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase()
    .slice(0, 60)

  return `${slug}-${date}`
}

async function generatePost(topic: typeof TOPIC_POOL[number], date: string): Promise<string> {
  const slug = generateSlug(topic.keyword, date)

  const systemPrompt = `あなたは那珂湊・ひたちなか市のテイクアウトスタンド「カルカモ」のブログ記事を書くライターです。
読者は那珂湊観光を計画している人、地元に住む人、子連れ家族、ドライブ中の方などです。
記事は自然な日本語で書いてください。AIっぽい定型文や不自然な列挙は避けてください。

カルカモについての基本情報：
- 住所：茨城県ひたちなか市湊本町27-3
- 那珂湊おさかな市場から徒歩約5分
- テイクアウト専門スタンド
- メニュー：焼きそば（美明豚焼きそば500円、イカ焼きそば500円、からしマヨがけ美明豚焼きそば700円）、たこ焼き（ソースマヨ500円・からしマヨ600円）、お好み焼き（豚玉・イカ玉・ツナマヨ各500円、明太もちチーズ700円）、クレープ（価格は店頭で確認）、たい焼き（小倉・カスタード・白あん各180円）、アイスクリーム（ふぐもなかアイス500円、その他450円）
- Instagram：@karukamo.2384 で営業日・最新情報を発信
- 営業時間・定休日は未公開のため断定しない
- 駐車場・支払い方法も断定しない

記事のルール：
- AIっぽい定型文は禁止（「まず」「次に」「さらに」「最後に」の羅列は避ける）
- 「絶対」「地域一番」「No.1」などの根拠のない断定は禁止
- 過剰な煽りは禁止
- 営業時間・駐車場・支払い方法は断定しない
- 記事の最後は「インスタグラム（@karukamo.2384）で営業情報をご確認ください」で締める
- 自然な流れで読める文体を優先する`

  const userPrompt = `以下の条件でブログ記事を書いてください。

テーマ：${topic.keyword}
切り口：${topic.angle}
カテゴリ：${topic.category}
公開日：${date}

出力形式（Markdownのみ、frontmatterから始める）：

---
title: "（記事タイトル・キーワードを自然に含む）"
slug: "${slug}"
description: "（90〜120文字。検索意図に沿った自然な説明）"
date: "${date}"
category: "${topic.category}"
tags: [${topic.tags.map((t) => `"${t}"`).join(', ')}]
---

（導入文：2〜3段落。読者が感じる状況・悩みから書き出す）

## （H2見出し）

（本文）

## （H2見出し）

（本文）

## （H2見出し。必要なら追加）

（本文）

## まとめ

（まとめ：インスタグラム確認の導線で締める）

文字数：2,000〜3,500文字
H2は4〜6個
H3は必要に応じて使用`

  const message = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 4096,
    messages: [{ role: 'user', content: userPrompt }],
    system: systemPrompt,
  })

  const content = message.content[0]
  if (content.type !== 'text') throw new Error('Unexpected response type')

  // Ensure content starts with frontmatter
  const text = content.text.trim()
  if (!text.startsWith('---')) {
    throw new Error('Generated content does not start with frontmatter')
  }

  return text
}

async function main() {
  console.log('[karukamo-blog] Starting daily post generation...')

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('[karukamo-blog] ANTHROPIC_API_KEY is not set')
    process.exit(1)
  }

  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true })
  }

  const date = getJSTDateString()
  const existingKeywords = getExistingKeywords()
  const existingSlugs = getExistingSlugs()

  console.log(`[karukamo-blog] Date: ${date}`)
  console.log(`[karukamo-blog] Existing posts: ${existingSlugs.length}`)

  const topic = pickTopic(existingKeywords)
  console.log(`[karukamo-blog] Topic: ${topic.keyword} (${topic.angle})`)

  let content: string
  try {
    content = await generatePost(topic, date)
    console.log('[karukamo-blog] Content generated successfully')
  } catch (err) {
    console.error('[karukamo-blog] Generation failed:', err)
    process.exit(1)
  }

  // Extract slug from frontmatter
  const slugMatch = content.match(/^slug:\s*"?([^"\n]+)"?/m)
  const slug = slugMatch?.[1]?.trim() ?? `post-${date}`
  const filename = `${slug}.md`
  const filePath = path.join(BLOG_DIR, filename)

  if (fs.existsSync(filePath)) {
    console.log(`[karukamo-blog] File already exists: ${filename} — skipping`)
    process.exit(0)
  }

  fs.writeFileSync(filePath, content, 'utf8')
  console.log(`[karukamo-blog] Saved: ${filename}`)
  console.log(`[karukamo-blog] URL: ${BASE_URL}/blog/${slug}`)
  console.log(`[karukamo-blog] Done.`)
}

main()
