import Link from 'next/link'

export function AccessMini() {
  return (
    <div className="mt-10 p-6 bg-white/60 border border-bone/50">
      <p className="label mb-3">Access</p>
      <p className="font-serif text-sm text-brown-deep font-medium mb-1">カルカモ</p>
      <p className="font-serif text-sm text-brown-light mb-3">
        茨城県ひたちなか市湊本町27-3
        <br />
        那珂湊おさかな市場から徒歩約5分
      </p>
      <p className="font-serif text-xs text-brown-light mb-4">
        営業時間・定休日はInstagram（@karukamo.2384）をご確認ください。
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/access"
          className="label text-brand hover:text-brown-deep transition-colors"
        >
          アクセス詳細 →
        </Link>
        <a
          href="https://maps.google.com/?q=茨城県ひたちなか市湊本町27-3"
          target="_blank"
          rel="noopener noreferrer"
          className="label text-brand hover:text-brown-deep transition-colors"
        >
          Google Maps →
        </a>
        <a
          href="https://www.instagram.com/karukamo.2384/"
          target="_blank"
          rel="noopener noreferrer"
          className="label text-brand hover:text-brown-deep transition-colors"
        >
          Instagram →
        </a>
      </div>
    </div>
  )
}
