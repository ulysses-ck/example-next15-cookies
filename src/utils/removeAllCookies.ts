import { redirect } from "next/navigation";

export const removeAllCookies = async () => {
  console.log("Removing all cookies");
  const response = await fetch(`${process.env.URL_PROJECT}/api/cookies`);

  const json = await response.json();
  console.log(json);
  redirect("/remove-cookies/success");
};
