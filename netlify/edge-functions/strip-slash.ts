import type { Context } from "@netlify/edge-functions";

export default async function handler(request: Request, context: Context) {
  const url = new URL(request.url);
  const { pathname, search } = url;

  // Skip for root path
  if (pathname === "/") {
    return context.next();
  }

  // Skip static assets (files with extensions)
  if (pathname.match(/\.[a-zA-Z0-9]+$/)) {
    return context.next();
  }

  // Redirect if URL ends with trailing slash
  if (pathname.endsWith("/")) {
    const newPathname = pathname.slice(0, -1);
    const newLocation = `${url.origin}${newPathname}${search}`;
    return Response.redirect(newLocation, 301);
  }

  return context.next();
}
