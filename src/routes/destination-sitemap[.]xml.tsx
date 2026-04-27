import { createFileRoute } from "@tanstack/react-router";
import { buildUrlset, DESTINATION_URLS, XML_HEADERS } from "@/lib/sitemap-data";

export const Route = createFileRoute("/destination-sitemap.xml")({
  server: {
    handlers: {
      GET: async () => new Response(buildUrlset(DESTINATION_URLS), { headers: XML_HEADERS }),
    },
  },
});
