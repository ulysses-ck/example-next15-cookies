import { removeAllCookies } from "@/utils/removeAllCookies"

// Force dynamic rendering at request time
export const dynamic = 'force-dynamic'

export default async function RemoveCookiesPage() {
    console.log("remove-cookies page");
  await removeAllCookies()
  
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
      <p className="text-lg animate-pulse">Removing cookies...</p>
    </div>
  )
} 