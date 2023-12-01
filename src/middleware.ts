import { defineMiddleware, sequence } from "astro:middleware";

const auth = defineMiddleware(async function (
  { cookies, url, redirect },
  next
) {
  if (url.pathname !== "/" && url.pathname !== "/login") {
    const token = cookies.get("authorization");
    if (!token) {
      return redirect("/login");
    }
  }

  const response = await next();
  return response;
});

const greeting = defineMiddleware(async function ({ cookies }, next) {
  const token = cookies.get("authorization");
  if (token) {
    console.log("Hello, user!");
  }

  const response = await next();
  return response;
});

export const onRequest = sequence(auth, greeting);
