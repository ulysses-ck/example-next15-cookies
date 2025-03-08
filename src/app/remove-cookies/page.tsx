import { removeAllCookies } from '../../utils/removeAllCookies'

export default async function RemoveCookiesPage() {
  await removeAllCookies()
  
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
      <p className="text-lg animate-pulse">Removing cookies...</p>
    </div>
  )
} 