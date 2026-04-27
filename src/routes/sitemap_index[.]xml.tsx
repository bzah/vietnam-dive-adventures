import { createFileRoute } from "@tanstack/react-router";
import { buildIndex, XML_HEADERS } from "@/lib/sitemap-data";

export const Route = createFileRoute("/sitemap_index.xml")({
  server: {
    handlers: {
      GET: async () => new Response(buildIndex(), { headers: XML_HEADERS }),
    },
  },
});
