import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET() {
  console.log("Removing all cookies");
  const cookieStore = await cookies();
  cookieStore.delete("cookie1");
  cookieStore.delete("cookie2");

  console.log("redirecting to success");
  redirect("/remove-cookies/success");
} 