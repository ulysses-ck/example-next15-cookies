import { redirect } from "next/navigation";

export const removeAllCookies = async () => {
  console.log("removeAllCookies function");
  redirect('/api/remove-all-cookies');
};
