export const SITE = {
  name: "VietnamDiving.com",
  url: "https://vietnamdiving.com",
  tagline: "Your Editorial Guide to Scuba Diving in Vietnam",
};

type MetaTag = Record<string, string>;
type ScriptTag = { type?: string; children?: string };

export function pageHead(opts: {
  title: string;
  description: string;
  image?: string;
  path?: string;
  keywords?: string;
  type?: "website" | "article";
  jsonLd?: object | object[];
}) {
  const url = opts.path ? `${SITE.url}${opts.path}` : SITE.url;
  const meta: MetaTag[] = [
    { title: opts.title },
    { name: "description", content: opts.description },
    { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1" },
    { property: "og:site_name", content: SITE.name },
    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:type", content: opts.type ?? "website" },
    { property: "og:url", content: url },
    { property: "og:locale", content: "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: opts.title },
    { name: "twitter:description", content: opts.description },
  ];
  if (opts.keywords) meta.push({ name: "keywords", content: opts.keywords });
  if (opts.image) {
    const img = opts.image.startsWith("http") ? opts.image : `${SITE.url}${opts.image}`;
    meta.push({ property: "og:image", content: img });
    meta.push({ property: "og:image:alt", content: opts.title });
    meta.push({ name: "twitter:image", content: img });
  }
  const scripts: ScriptTag[] = [];
  if (opts.jsonLd) {
    const blocks = Array.isArray(opts.jsonLd) ? opts.jsonLd : [opts.jsonLd];
    for (const b of blocks) {
      scripts.push({ type: "application/ld+json", children: JSON.stringify(b) });
    }
  }
  return {
    meta,
    links: [{ rel: "canonical", href: url }],
    scripts,
  };
}

/** Build a FAQPage JSON-LD block from Q/A pairs. */
export function faqJsonLd(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

/** TouristDestination JSON-LD for destination pages. */
export function destinationJsonLd(opts: {
  name: string;
  description: string;
  image: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: opts.name,
    description: opts.description,
    image: opts.image.startsWith("http") ? opts.image : `${SITE.url}${opts.image}`,
    url: opts.url,
    touristType: ["Scuba divers", "Snorkelers", "Adventure travelers"],
  };
}

/** Organization + WebSite root JSON-LD (used on home). */
export function organizationJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/favicon.ico`,
      sameAs: [],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE.url}/tours?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ];
}
