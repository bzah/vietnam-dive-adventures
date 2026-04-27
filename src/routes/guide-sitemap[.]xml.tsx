import { createFileRoute } from "@tanstack/react-router";
import { buildUrlset, GUIDE_URLS, XML_HEADERS } from "@/lib/sitemap-data";

export const Route = createFileRoute("/guide-sitemap.xml")({
  server: {
    handlers: {
      GET: async () => new Response(buildUrlset(GUIDE_URLS), { headers: XML_HEADERS }),
    },
  },
});
