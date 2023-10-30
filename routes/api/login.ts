import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req) {
    const url = new URL(req.url);
    const form = await req.formData();

    const response = await fetch("https://tryunblocked.com/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: form.get("username"),
        password: form.get("password"),
      }),
    });

    if (response.ok) {
      const headers = new Headers();
      setCookie(headers, {
        name: "auth",
        value: "bar", // this should be a unique value for each session
        maxAge: 120,
        sameSite: "Lax", // this is important to prevent CSRF attacks
        domain: url.hostname,
        path: "/",
        secure: true,
      });

      headers.set("location", "/");
      return new Response(null, {
        status: 303, // "See Other"
        headers,
      });
    } else {
      return new Response(null, {
        status: 403,
      });
    }
  },
};