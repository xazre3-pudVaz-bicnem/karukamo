import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import {
  getAllCategories,
  getCategoryBySlug,
  getPostsByCategory,
  getFeaturedImageUrl,
  getFeaturedImageAlt,
  getPostCategories,
  formatDate,
  stripHtml,
} from '@/lib/wordpress'

export const revalidate = 3600

export async function generateStaticParams() {
  const categories = await getAllCategories()
  return categories.map((cat) => ({ slug: cat.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)
  if (!category) return {}

  const title = `${category.name} | ブログ | カルカモ`
  const description = `カルカモのブログ — ${category.name}カテゴリの記事一覧。ひたちなか市・那珂湊のグルメ・観光情報。`
  const canonical = `https://karukamo.jp/blog/category/${slug}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonical,
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: { card: 'summary_large_image' },
    alternates: { canonical },
  }
}

export default async function BlogCategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ page?: string }>
}) {
  const { slug } = await params
  const { page: pageParam } = await searchParams
  const currentPage = Math.max(1, parseInt(pageParam ?? '1', 10))

  const category = await getCategoryBySlug(slug)
  if (!category) notFound()

  const { posts, totalPages } = await getPostsByCategory(category.id, currentPage, 12)

  return (
    <>
      {/* ━━━━ Page Header ━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn>
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: category.name },
              ]}
            />
            <div className="mt-6">
              <p className="label text-brand mb-4">Category</p>
              <h1 className="font-display font-light text-5xl md:text-7xl lg:text-8xl leading-none text-brown-deep mb-6">
                {category.name}
              </h1>
              <div className="flex items-center gap-4">
                <span className="rule flex-shrink-0" />
                <p className="label">{category.name} — カルカモのブログ</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ Posts Grid ━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          {posts.length === 0 ? (
            <AnimateIn>
              <p className="font-serif text-brown-light text-sm">
                このカテゴリの記事はまだありません。
              </p>
              <Link
                href="/blog"
                className="mt-8 inline-flex items-center gap-3 label text-brown hover:text-brown-deep transition-colors"
                style={{ letterSpacing: '0.25em' }}
              >
                <span className="block w-6 h-px bg-current" />
                ブログ一覧へ
              </Link>
            </AnimateIn>
          ) : (
            <>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/30">
                {posts.map((post) => {
                  const imageUrl = getFeaturedImageUrl(post)
                  const imageAlt = getFeaturedImageAlt(post)
                  const categories = getPostCategories(post)
                  return (
                    <li key={post.id} className="bg-ivory">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="block group hover:bg-white transition-colors h-full"
                      >
                        <div className="photo-landscape overflow-hidden">
                          {imageUrl ? (
                            <Image
                              src={imageUrl}
                              alt={imageAlt}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-ivory-dark" />
                          )}
                        </div>
                        <div className="p-6 md:p-7">
                          <div className="flex items-center gap-3 mb-4">
                            {categories[0] && (
                              <span
                                className="label text-brand"
                                style={{ fontSize: '9px' }}
                              >
                                {categories[0].name}
                              </span>
                            )}
                            <span className="rule flex-shrink-0" />
                            <time
                              className="label"
                              style={{ fontSize: '9px' }}
                              dateTime={post.date}
                            >
                              {formatDate(post.date)}
                            </time>
                          </div>
                          <h2 className="font-serif text-brown-deep text-sm leading-relaxed mb-3">
                            {post.title.rendered}
                          </h2>
                          <p className="text-brown-light text-xs leading-loose mb-5 line-clamp-3">
                            {stripHtml(post.excerpt.rendered)}
                          </p>
                          <span
                            className="inline-flex items-center gap-2 label text-brown-light group-hover:text-brown transition-colors"
                            style={{ fontSize: '9px' }}
                          >
                            <span className="block w-4 h-px bg-current" />
                            続きを読む
                          </span>
                        </div>
                      </Link>
                    </li>
                  )
                })}
              </ul>

              {/* Pagination */}
              {totalPages > 1 && (
                <nav
                  aria-label="ページネーション"
                  className="mt-16 flex items-center justify-center gap-8"
                >
                  {currentPage > 1 && (
                    <Link
                      href={
                        currentPage === 2
                          ? `/blog/category/${slug}`
                          : `/blog/category/${slug}?page=${currentPage - 1}`
                      }
                      className="inline-flex items-center gap-3 label text-brown hover:text-brown-deep transition-colors"
                      style={{ letterSpacing: '0.25em' }}
                    >
                      <span className="block w-8 h-px bg-current" />
                      Prev
                    </Link>
                  )}
                  <span className="font-display font-light text-brown-light text-xl leading-none">
                    {currentPage}
                    <span className="mx-2 text-bone">/</span>
                    {totalPages}
                  </span>
                  {currentPage < totalPages && (
                    <Link
                      href={`/blog/category/${slug}?page=${currentPage + 1}`}
                      className="inline-flex items-center gap-3 label text-brown hover:text-brown-deep transition-colors"
                      style={{ letterSpacing: '0.25em' }}
                    >
                      Next
                      <span className="block w-8 h-px bg-current" />
                    </Link>
                  )}
                </nav>
              )}
            </>
          )}
        </div>
      </section>

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
