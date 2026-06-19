import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/wp-admin/'],
      },
    ],
    sitemap: 'https://www.karukamo.jp/sitemap.xml',
    host: 'https://www.karukamo.jp',
  }
}
