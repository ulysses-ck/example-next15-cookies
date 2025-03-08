import { redirect } from "next/navigation";

export const removeAllCookies = async () => {
  //   wait 100ms
  await new Promise((resolve) => setTimeout(resolve, 100));
  redirect("/api/remove-all-cookies");
};
