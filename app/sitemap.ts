import type { MetadataRoute } from 'next'

const COLUMN_SLUGS = [
  'nakaminato-yakisoba',
  'hitachinaka-yakisoba',
  'osakana-market-takeout',
  'osakana-market-lunch',
  'nakaminato-takeout',
  'hitachinaka-takeout',
  'nakaminato-lunch',
  'hitachinaka-lunch',
  'nakaminato-food-walk',
  'osakana-market-after',
  'yakisoba-takeout',
  'yakisoba-lunch',
  'yakisoba-and-sweets',
  'takoyaki-nakaminato',
  'okonomiyaki-nakaminato',
  'crepe-nakaminato',
  'sweets-nakaminato',
  'taiyaki-nakaminato',
  'ice-hitachinaka',
  'family-takeout',
  'children-snack',
  'tourist-nakaminato',
  'minato-honcho-takeout',
  'nakaminato-port-town',
  'yakisoba-menu-guide',
  'takeout-menu-guide',
  'lunch-with-sweets',
  'instagram-check',
  'access-guide',
  'first-visit-guide',
]

async function getWpPosts() {
  try {
    const res = await fetch(
      'https://wp.karukamo.jp/wp-json/wp/v2/posts?per_page=100&_fields=slug,modified',
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return []
    return await res.json()
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://www.karukamo.jp'
  const posts = await getWpPosts()

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${base}/yakisoba`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/menu`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/takeout`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/lunch`, priority: 0.85, changeFrequency: 'monthly' },
    { url: `${base}/takoyaki`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/okonomiyaki`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/crepe`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/sweets`, priority: 0.75, changeFrequency: 'monthly' },
    { url: `${base}/about-nakaminato`, priority: 0.85, changeFrequency: 'monthly' },
    { url: `${base}/access`, priority: 0.85, changeFrequency: 'monthly' },
    { url: `${base}/faq`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/kodawari`, priority: 0.75, changeFrequency: 'monthly' },
    { url: `${base}/column`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${base}/blog`, priority: 0.7, changeFrequency: 'daily' },
    ...COLUMN_SLUGS.map((slug) => ({
      url: `${base}/column/${slug}`,
      priority: 0.75 as const,
      changeFrequency: 'monthly' as const,
    })),
  ]

  const blogPages: MetadataRoute.Sitemap = posts.map(
    (post: { slug: string; modified: string }) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.modified),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })
  )

  return [...staticPages, ...blogPages]
}
