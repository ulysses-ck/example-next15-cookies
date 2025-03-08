import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET() {
  const cookieStore = await cookies();
  const cookie1 = cookieStore.get("cookie1");
  const cookie2 = cookieStore.get("cookie2");

  if (cookie1?.value && cookie2?.value) {
    redirect("/api/remove-all-cookies");
  }

  return NextResponse.json({ message: "Cookies not found" });
}
