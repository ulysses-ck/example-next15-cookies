import Link from 'next/link'
import { setCookies, removeCookies } from './actions/cookies'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex gap-4 flex-col sm:flex-row">
        <form action={setCookies}>
          <button
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            type="submit"
          >
            Set Cookies
          </button>
        </form>
        <form action={removeCookies}>
          <button
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            type="submit"
          >
            Remove Cookies
          </button>
        </form>
        <Link
          href="/remove-cookies"
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          Go to Remove Cookies
        </Link>
      </div>
    </div>
  )
}
