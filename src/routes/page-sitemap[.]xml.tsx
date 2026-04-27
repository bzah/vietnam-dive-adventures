import { createFileRoute } from "@tanstack/react-router";
import { buildUrlset, PAGE_URLS, XML_HEADERS } from "@/lib/sitemap-data";

export const Route = createFileRoute("/page-sitemap.xml")({
  server: {
    handlers: {
      GET: async () => new Response(buildUrlset(PAGE_URLS), { headers: XML_HEADERS }),
    },
  },
});
