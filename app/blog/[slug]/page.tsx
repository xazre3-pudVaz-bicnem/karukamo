import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Breadcrumb, BreadcrumbSchema } from '@/components/ui/Breadcrumb'
import { getPostBySlug, getAllSlugs } from '@/lib/blog'

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  const canonical = `https://www.karukamo.jp/blog/${slug}`
  return {
    title: post.title,
    description: post.description,
    keywords: ['カルカモ', '那珂湊', 'ひたちなか市', ...post.tags],
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonical,
      siteName: 'カルカモ',
      locale: 'ja_JP',
      type: 'article',
      publishedTime: post.date,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image' },
    alternates: { canonical },
  }
}

function formatDate(d: string) {
  return new Date(d + 'T00:00:00+09:00').toLocaleDateString('ja-JP', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'カルカモ', url: 'https://www.karukamo.jp' },
    publisher: {
      '@type': 'Organization',
      name: 'カルカモ',
      url: 'https://www.karukamo.jp',
      logo: { '@type': 'ImageObject', url: 'https://www.karukamo.jp/logo.jpg' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.karukamo.jp/blog/${slug}` },
    keywords: post.tags.join(', '),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BreadcrumbSchema
        items={[
          { label: 'ブログ', href: '/blog' },
          { label: post.title },
        ]}
      />

      {/* ── Header ── */}
      <section className="pt-32 pb-10 md:pt-40 md:pb-14 border-b border-bone/40" style={{ backgroundColor: '#FAF3E4' }}>
        <div className="max-w-screen-lg mx-auto px-6 sm:px-10 md:px-14">
          <AnimateIn>
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'ブログ', href: '/blog' },
                { label: post.title },
              ]}
            />
            <div className="mt-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="label text-brand border border-brand/30 px-2 py-0.5" style={{ fontSize: '9px' }}>
                  {post.category}
                </span>
                <time className="label text-brown-light" style={{ fontSize: '9px' }} dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
              </div>
              <h1 className="font-serif text-2xl md:text-4xl text-brown-deep leading-snug">
                {post.title}
              </h1>
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {post.tags.map((tag) => (
                    <span key={tag} className="label text-bone px-2 py-0.5 border border-bone/40" style={{ fontSize: '9px' }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Content ── */}
      <article className="max-w-screen-lg mx-auto px-6 sm:px-10 md:px-14 py-14 md:py-20">
        <div
          className="prose-karukamo max-w-2xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Internal links */}
        <div className="mt-12 p-5 bg-ivory border border-bone/40 max-w-2xl">
          <p className="label mb-4" style={{ fontSize: '10px' }}>カルカモのメニュー・情報</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {[
              { href: '/yakisoba', label: '焼きそばページへ' },
              { href: '/takeout', label: 'テイクアウト特集' },
              { href: '/menu', label: 'メニュー一覧' },
              { href: '/access', label: 'アクセス' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="label text-brand hover:text-brown-deep transition-colors"
                style={{ fontSize: '11px' }}
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* ── Back ── */}
      <section className="py-20 md:py-28 bg-brown-deep">
        <AnimateIn className="text-center">
          <p className="label text-ivory/30 mb-8">Blog</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-5 label text-ivory/60 hover:text-ivory transition-colors"
            style={{ letterSpacing: '0.3em' }}
          >
            <span className="block w-10 h-px bg-current" />
            ブログ一覧へ戻る
            <span className="block w-10 h-px bg-current" />
          </Link>
        </AnimateIn>
      </section>
    </>
  )
}
