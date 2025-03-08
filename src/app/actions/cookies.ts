"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function setCookies() {
  const cookieStore = await cookies();
  cookieStore.set({
    name: "cookie1",
    value: "value1",
    httpOnly: true,
  });
  cookieStore.set({
    name: "cookie2",
    value: "value2",
    httpOnly: true,
  });

  // Revalidate and redirect after the action is complete
  revalidatePath("/");
  redirect("/");
}

export async function removeCookies() {
  const cookieStore = await cookies();

  cookieStore.delete("cookie1");
  cookieStore.delete("cookie2");

  // Revalidate and redirect after the action is complete
  revalidatePath("/");
  redirect("/");
}