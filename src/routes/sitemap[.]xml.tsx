import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/seo";

const URLS = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/tours", priority: "0.9", changefreq: "daily" },
  { loc: "/destinations/nha-trang", priority: "0.9", changefreq: "weekly" },
  { loc: "/destinations/phu-quoc", priority: "0.9", changefreq: "weekly" },
  { loc: "/destinations/con-dao", priority: "0.9", changefreq: "weekly" },
  { loc: "/destinations/hoi-an", priority: "0.9", changefreq: "weekly" },
  { loc: "/guides", priority: "0.7", changefreq: "monthly" },
  { loc: "/guides/padi-courses", priority: "0.8", changefreq: "monthly" },
  { loc: "/guides/best-time-to-dive", priority: "0.8", changefreq: "monthly" },
  { loc: "/guides/dive-medical", priority: "0.7", changefreq: "monthly" },
  { loc: "/about", priority: "0.5", changefreq: "yearly" },
  { loc: "/contact", priority: "0.5", changefreq: "yearly" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().slice(0, 10);
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${URLS.map(
  (u) =>
    `  <url><loc>${SITE.url}${u.loc}</loc><lastmod>${today}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`
).join("\n")}
</urlset>`;
        return new Response(body, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
