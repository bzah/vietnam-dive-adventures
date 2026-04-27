import { SITE } from "@/lib/seo";

export type SitemapEntry = {
  loc: string;
  lastmod: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: string;
  image?: { loc: string; title?: string };
};

const TODAY = new Date().toISOString().slice(0, 10);

export const PAGE_URLS: SitemapEntry[] = [
  { loc: "/", lastmod: TODAY, changefreq: "weekly", priority: "1.0", image: { loc: "/og-home.jpg", title: "Vietnam Diving" } },
  { loc: "/about", lastmod: TODAY, changefreq: "yearly", priority: "0.5" },
  { loc: "/contact", lastmod: TODAY, changefreq: "yearly", priority: "0.5" },
  { loc: "/tours", lastmod: TODAY, changefreq: "daily", priority: "0.9" },
];

export const DESTINATION_URLS: SitemapEntry[] = [
  { loc: "/destinations/nha-trang", lastmod: TODAY, changefreq: "weekly", priority: "0.9" },
  { loc: "/destinations/phu-quoc", lastmod: TODAY, changefreq: "weekly", priority: "0.9" },
  { loc: "/destinations/con-dao", lastmod: TODAY, changefreq: "weekly", priority: "0.9" },
  { loc: "/destinations/hoi-an", lastmod: TODAY, changefreq: "weekly", priority: "0.9" },
];

export const GUIDE_URLS: SitemapEntry[] = [
  { loc: "/guides", lastmod: TODAY, changefreq: "monthly", priority: "0.7" },
  { loc: "/guides/padi-courses", lastmod: TODAY, changefreq: "monthly", priority: "0.8" },
  { loc: "/guides/best-time-to-dive", lastmod: TODAY, changefreq: "monthly", priority: "0.8" },
  { loc: "/guides/dive-medical", lastmod: TODAY, changefreq: "monthly", priority: "0.7" },
];

export const SUB_SITEMAPS = [
  { name: "page-sitemap.xml", urls: PAGE_URLS },
  { name: "destination-sitemap.xml", urls: DESTINATION_URLS },
  { name: "guide-sitemap.xml", urls: GUIDE_URLS },
];

export function buildUrlset(urls: SitemapEntry[]): string {
  const body = urls
    .map((u) => {
      const img = u.image
        ? `\n    <image:image><image:loc>${SITE.url}${u.image.loc}</image:loc>${u.image.title ? `<image:title>${u.image.title}</image:title>` : ""}</image:image>`
        : "";
      return `  <url>
    <loc>${SITE.url}${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>${img}
  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="${SITE.url}/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${body}
</urlset>`;
}

export function buildIndex(): string {
  const today = TODAY;
  const items = SUB_SITEMAPS.map(
    (s) => `  <sitemap>
    <loc>${SITE.url}/${s.name}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`,
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="${SITE.url}/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</sitemapindex>`;
}

export const XML_HEADERS = {
  "Content-Type": "application/xml; charset=utf-8",
  "Cache-Control": "public, max-age=3600",
};
