import { createFileRoute } from "@tanstack/react-router";
import { buildIndex, XML_HEADERS } from "@/lib/sitemap-data";

// Alias for /sitemap.xml -> same index (Rank Math compatibility)
export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => new Response(buildIndex(), { headers: XML_HEADERS }),
    },
  },
});
