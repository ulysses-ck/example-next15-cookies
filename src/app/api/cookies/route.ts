import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  cookieStore.delete("cookie1");
  cookieStore.delete("cookie2");

  return NextResponse.json({ message: "Cookies removed successfully" });
}
