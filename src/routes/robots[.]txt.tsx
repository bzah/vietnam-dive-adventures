import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/seo";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async () => {
        const body = `User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap_index.xml
`;
        return new Response(body, {
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        });
      },
    },
  },
});
