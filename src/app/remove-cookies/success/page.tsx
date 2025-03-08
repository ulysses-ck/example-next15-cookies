import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
      <p className="text-lg">Cookies have been removed!</p>
      <Link
        href="/"
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
      >
        Back to Home
      </Link>
    </div>
  )
} 