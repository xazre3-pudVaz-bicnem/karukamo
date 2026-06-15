import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { BlogPostContent } from '@/components/sections/BlogPostContent'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const canonical = `https://karukamo.jp/blog/${slug}`

  return {
    title: `ブログ記事 | カルカモ`,
    openGraph: {
      url: canonical,
      locale: 'ja_JP',
      type: 'article',
    },
    twitter: { card: 'summary_large_image' },
    alternates: { canonical },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  return (
    <>
      {/* ━━━━ Page Header ━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="pt-32 pb-10 md:pt-40 md:pb-14 bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn>
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: '記事' },
              ]}
            />
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ Post Content — client-side fetch ━━━━ */}
      <BlogPostContent slug={slug} />

      {/* ━━━━ Back to Blog ━━━━━━━━━━━━━━━━━━━━━━━ */}
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
