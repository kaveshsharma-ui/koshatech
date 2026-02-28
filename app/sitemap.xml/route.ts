import { NextResponse } from "next/server";
import { portfolioItems } from "@/data/portfolio";
import { blogPosts } from "@/data/blog";
import { serviceItems } from "@/data/services";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://koshtech.com";

export async function GET() {
  const now = new Date().toISOString();

  const staticPaths = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/blog",
    "/contact",
    "/privacy",
    "/request-a-callback",
  ];

  const staticUrls = staticPaths.map(
    (path) => `
      <url>
        <loc>${baseUrl}${path}</loc>
        <lastmod>${now}</lastmod>
      </url>`
  );

  const serviceUrls = serviceItems.map(
    (s) => `
      <url>
        <loc>${baseUrl}/services/${s.slug}</loc>
        <lastmod>${now}</lastmod>
      </url>`
  );

  const portfolioUrls = portfolioItems.map(
    (p) => `
      <url>
        <loc>${baseUrl}/portfolio/${p.slug}</loc>
        <lastmod>${now}</lastmod>
      </url>`
  );

  const blogUrls = blogPosts.map(
    (b) => `
      <url>
        <loc>${baseUrl}/blog/${b.slug}</loc>
        <lastmod>${now}</lastmod>
      </url>`
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${[
      ...staticUrls,
      ...serviceUrls,
      ...portfolioUrls,
      ...blogUrls,
    ].join("")}
  </urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}