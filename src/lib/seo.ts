export const SITE = {
  name: "VietnamDiving.com",
  url: "https://vietnamdiving.com",
  tagline: "Your Editorial Guide to Scuba Diving in Vietnam",
};

export function pageHead(opts: {
  title: string;
  description: string;
  image?: string;
  path?: string;
}) {
  const url = opts.path ? `${SITE.url}${opts.path}` : SITE.url;
  const meta: Array<Record<string, string>> = [
    { title: opts.title },
    { name: "description", content: opts.description },
    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: opts.title },
    { name: "twitter:description", content: opts.description },
  ];
  if (opts.image) {
    meta.push({ property: "og:image", content: opts.image });
    meta.push({ name: "twitter:image", content: opts.image });
  }
  return {
    meta,
    links: [{ rel: "canonical", href: url }],
  };
}
