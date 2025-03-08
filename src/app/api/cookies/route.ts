import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  request.cookies.delete("cookie1");
  request.cookies.delete("cookie2");

  return NextResponse.json({ message: "Cookies removed successfully" });
}
