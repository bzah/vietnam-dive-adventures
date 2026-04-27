import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { pageHead, faqJsonLd, destinationJsonLd, SITE } from "@/lib/seo";
import { searchGygTours } from "@/lib/gyg.functions";
import { TourCard, FallbackTourGrid } from "@/components/TourCard";
import { gygLink } from "@/lib/getyourguide";
import nhaTrang from "@/assets/nha-trang.jpg";
import phuQuoc from "@/assets/phu-quoc.jpg";
import conDao from "@/assets/con-dao.jpg";
import hoiAn from "@/assets/hoi-an.jpg";

interface Destination {
  slug: string;
  name: string;
  region: string;
  img: string;
  hero_quote: string;
  intro: string;
  body: Array<{ heading: string; text: string }>;
  facts: Array<{ k: string; v: string }>;
  query: string;
  seo_title: string;
  seo_desc: string;
  keywords: string;
  faq: Array<{ q: string; a: string }>;
  sites: Array<{ name: string; depth: string; level: string; highlight: string }>;
}

const DEST: Record<string, Destination> = {
  "nha-trang": {
    slug: "nha-trang",
    name: "Nha Trang",
    region: "South-Central Coast",
    img: nhaTrang,
    hero_quote: "Vietnam's diving capital — and for good reason.",
    intro: "Nha Trang is where Vietnamese scuba diving was invented. The bay's nine islands shelter Hon Mun Marine Protected Area, home to over 350 species of hard coral and the highest visibility on the central coast.",
    body: [
      { heading: "Why dive here", text: "Hon Mun's protected reefs offer easy 8–18m dives suited to beginners and Open Water students. Macro life is abundant — nudibranchs, ghost pipefish, and frogfish are spotted year-round." },
      { heading: "Best dive sites", text: "Madonna Rock for swim-throughs, Moray Beach for macro, Mama Hanh Beach for first-time divers, and the Russian Wreck for advanced explorers." },
      { heading: "Getting there", text: "Cam Ranh International Airport (CXR) is 35 minutes south. Most dive centres are clustered along Tran Phu and offer free pickup from your hotel." },
    ],
    facts: [
      { k: "Season", v: "Feb – Oct" },
      { k: "Visibility", v: "10–25 m" },
      { k: "Water temp", v: "26–29°C" },
      { k: "Level", v: "All levels" },
    ],
    query: "Nha Trang diving",
    seo_title: "Scuba Diving in Nha Trang Vietnam — Guide & Tours | VietnamDiving.com",
    seo_desc: "Complete guide to scuba diving in Nha Trang, Vietnam. Hon Mun Marine Park, top dive sites, PADI courses, season, and live tours from $25.",
    keywords: "Nha Trang diving, Hon Mun, scuba Vietnam, PADI Nha Trang, Vinpearl diving, Madonna Rock",
    sites: [
      { name: "Madonna Rock", depth: "8–18 m", level: "Open Water", highlight: "Swim-throughs & soft corals" },
      { name: "Moray Beach", depth: "5–14 m", level: "All levels", highlight: "Macro photography paradise" },
      { name: "Mama Hanh Beach", depth: "4–10 m", level: "Beginner", highlight: "Try-dives & courses" },
      { name: "Russian Wreck", depth: "20–30 m", level: "Advanced", highlight: "Penetration dive" },
    ],
    faq: [
      { q: "Is Nha Trang good for beginners?", a: "Yes. Hon Mun's sheltered bays and 26–29°C water make Nha Trang Vietnam's top spot for first-time divers and PADI Open Water courses." },
      { q: "How much does diving in Nha Trang cost?", a: "Two-tank fun dives start around $55. PADI Open Water certifications run $300–$420 over 3 days. Discover Scuba experiences from $50." },
      { q: "When is the best time to dive Nha Trang?", a: "February through October. Visibility peaks April–August. Avoid November–January when monsoon storms reduce visibility." },
    ],
  },
  "phu-quoc": {
    slug: "phu-quoc",
    name: "Phu Quoc",
    region: "Gulf of Thailand",
    img: phuQuoc,
    hero_quote: "Soft corals, warm water, and Vietnam's quietest reefs.",
    intro: "Phu Quoc is Vietnam's largest island and its most laid-back diving destination. The An Thoi archipelago, just south of the main island, is a cluster of small islets ringed by soft coral gardens.",
    body: [
      { heading: "Why dive here", text: "Phu Quoc's reefs are shallow and forgiving — perfect for snorkelers and Open Water divers. Expect schooling fusiliers, anemonefish, and the occasional eagle ray." },
      { heading: "Best dive sites", text: "Hon Dam Ngang for soft corals, Hon Thom for swim-throughs, and the southern islets for drift dives in clear water." },
      { heading: "Getting there", text: "Phu Quoc International Airport (PQC) connects to Saigon, Hanoi and several international hubs. Diving departs from An Thoi pier in the south." },
    ],
    facts: [
      { k: "Season", v: "Nov – May" },
      { k: "Visibility", v: "10–20 m" },
      { k: "Water temp", v: "27–30°C" },
      { k: "Level", v: "Beginner-friendly" },
    ],
    query: "Phu Quoc diving",
    seo_title: "Scuba Diving in Phu Quoc Vietnam — Guide & Tours | VietnamDiving.com",
    seo_desc: "Diving Phu Quoc Vietnam: An Thoi archipelago, soft coral reefs, season, top sites, PADI dive centres and live booking from VietnamDiving.com.",
    keywords: "Phu Quoc diving, An Thoi diving, Vietnam island diving, snorkeling Phu Quoc, Hon Thom",
    sites: [
      { name: "Hon Dam Ngang", depth: "6–14 m", level: "Beginner", highlight: "Soft coral gardens" },
      { name: "Hon Thom", depth: "8–16 m", level: "Open Water", highlight: "Swim-throughs" },
      { name: "Hon Mong Tay", depth: "5–12 m", level: "Snorkel/Beginner", highlight: "Anemone fields" },
      { name: "Hon Dam Trong", depth: "10–20 m", level: "Advanced", highlight: "Drift dive, eagle rays" },
    ],
    faq: [
      { q: "Can you dive in Phu Quoc year-round?", a: "No. Phu Quoc's diving season runs November to May. The southwest monsoon closes most operators June–October." },
      { q: "Is Phu Quoc better than Nha Trang for diving?", a: "Phu Quoc has warmer water and softer corals; Nha Trang has more dive sites and biodiversity. Phu Quoc is best for relaxed Caribbean-style diving." },
      { q: "Do I need certification to dive Phu Quoc?", a: "No — most operators offer Discover Scuba experiences for non-divers from $60, including a beginner-friendly shallow dive." },
    ],
  },
  "con-dao": {
    slug: "con-dao",
    name: "Con Dao",
    region: "Remote South Sea Islands",
    img: conDao,
    hero_quote: "Vietnam's most remote — and most rewarding — dive destination.",
    intro: "Con Dao is a sixteen-island archipelago 230 km off the southern coast. Protected as a National Park since 1993, its reefs and seagrass meadows shelter sea turtles, dugongs, and large pelagics rarely seen elsewhere in Vietnam.",
    body: [
      { heading: "Why dive here", text: "Granite walls, big fish action, and the chance to dive with green sea turtles during nesting season (June–September). Visibility regularly exceeds 25 m." },
      { heading: "Best dive sites", text: "Hon Bay Canh for turtles, Hon Tre Lon for walls, and Hon Trac for soft corals and reef sharks." },
      { heading: "Getting there", text: "Con Dao Airport (VCS) has daily flights from Saigon. Diving operates April–October when seas are calm." },
    ],
    facts: [
      { k: "Season", v: "Apr – Oct" },
      { k: "Visibility", v: "15–30 m" },
      { k: "Water temp", v: "27–29°C" },
      { k: "Level", v: "Open Water+" },
    ],
    query: "Con Dao diving",
    seo_title: "Scuba Diving in Con Dao Vietnam — Remote Reefs & Turtles | VietnamDiving.com",
    seo_desc: "Con Dao is Vietnam's premier remote dive destination. Sea turtles, granite walls, and pristine reefs. Full guide, season, and live tours.",
    keywords: "Con Dao diving, sea turtles Vietnam, Con Son diving, Vietnam national park diving, dugong Vietnam",
    sites: [
      { name: "Hon Bay Canh", depth: "10–22 m", level: "Open Water", highlight: "Green sea turtles" },
      { name: "Hon Tre Lon", depth: "12–28 m", level: "Advanced", highlight: "Granite walls" },
      { name: "Hon Trac", depth: "8–18 m", level: "Open Water", highlight: "Reef sharks, soft coral" },
      { name: "Shark Cave", depth: "18–30 m", level: "Advanced+", highlight: "White-tip reef sharks" },
    ],
    faq: [
      { q: "Can you see turtles diving in Con Dao?", a: "Yes. Con Dao is one of Southeast Asia's most important green sea turtle nesting grounds. Sightings are common June through September." },
      { q: "How do I get to Con Dao?", a: "Vietnam Airlines and Bamboo Airways fly daily from Ho Chi Minh City to Con Dao Airport (VCS) — flights take ~50 minutes." },
      { q: "Is Con Dao expensive?", a: "Yes — Con Dao is Vietnam's most expensive dive destination. Two-tank dives run $90–$140, but visibility and marine life justify the cost." },
    ],
  },
  "hoi-an": {
    slug: "hoi-an",
    name: "Hoi An & Cham Islands",
    region: "Central Vietnam",
    img: hoiAn,
    hero_quote: "A UNESCO town with a marine reserve next door.",
    intro: "The Cham Islands (Cu Lao Cham), 18 km off Hoi An, are a UNESCO Biosphere Reserve and the most accessible diving destination in central Vietnam.",
    body: [
      { heading: "Why dive here", text: "Eight small islands offer shallow, sheltered dives perfect for trying scuba for the first time. Combine your dive with an afternoon exploring Hoi An's lantern-lit old town." },
      { heading: "Best dive sites", text: "Bai Bac for soft corals, Hon Tai for macro, and the wreck of the Tan Hiep for advanced divers." },
      { heading: "Getting there", text: "Da Nang International Airport (DAD) is 45 minutes from Hoi An. Speedboats to Cham depart Cua Dai pier daily in season." },
    ],
    facts: [
      { k: "Season", v: "Mar – Sep" },
      { k: "Visibility", v: "8–18 m" },
      { k: "Water temp", v: "25–29°C" },
      { k: "Level", v: "All levels" },
    ],
    query: "Hoi An diving Cham islands",
    seo_title: "Diving Cham Islands & Hoi An Vietnam — Guide & Tours | VietnamDiving.com",
    seo_desc: "Diving the Cham Islands from Hoi An: UNESCO marine reserve, top sites, season, and live booking. Pair scuba with central Vietnam's most beautiful town.",
    keywords: "Hoi An diving, Cham Islands diving, Cu Lao Cham, Da Nang diving, snorkeling Hoi An",
    sites: [
      { name: "Bai Bac", depth: "6–14 m", level: "Beginner", highlight: "Soft corals, easy entry" },
      { name: "Hon Tai", depth: "8–16 m", level: "Open Water", highlight: "Macro & nudibranchs" },
      { name: "Tan Hiep Wreck", depth: "16–24 m", level: "Advanced", highlight: "Wartime wreck dive" },
      { name: "Hon Mo", depth: "5–12 m", level: "Snorkel/Beginner", highlight: "Coral reef snorkeling" },
    ],
    faq: [
      { q: "Can you dive from Hoi An itself?", a: "Diving departs from Cua Dai pier near Hoi An, with boats reaching the Cham Islands in 30–45 minutes. Most operators offer free Hoi An hotel pickup." },
      { q: "When is Cham Islands diving season?", a: "March through September. October–February brings rough seas and most operators suspend trips." },
      { q: "Is Cham Islands good for snorkeling?", a: "Excellent. Shallow reefs at Bai Bac and Hon Mo are perfect for snorkeling, with combo snorkel-and-island-tour packages from $30." },
    ],
  },
};

export const Route = createFileRoute("/destinations/$slug")({
  loader: async ({ params }) => {
    const dest = DEST[params.slug];
    if (!dest) throw notFound();
    const { tours, error } = await searchGygTours({ data: { q: dest.query, limit: 6 } });
    return { dest, tours, error };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Destination" }] };
    const d = loaderData.dest;
    const path = `/destinations/${d.slug}`;
    return pageHead({
      title: d.seo_title,
      description: d.seo_desc,
      image: d.img,
      path,
      keywords: d.keywords,
      type: "article",
      jsonLd: [
        destinationJsonLd({ name: d.name, description: d.seo_desc, image: d.img, url: `${SITE.url}${path}` }),
        faqJsonLd(d.faq),
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
            { "@type": "ListItem", position: 2, name: "Destinations", item: `${SITE.url}/` },
            { "@type": "ListItem", position: 3, name: d.name, item: `${SITE.url}${path}` },
          ],
        },
      ],
    });
  },
  component: DestinationPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="text-5xl">Destination not found</h1>
        <Link to="/" className="mt-8 inline-block text-coral underline">Back home</Link>
      </div>
      <SiteFooter />
    </div>
  ),
});

function DestinationPage() {
  const { dest, tours, error } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative h-[62vh] min-h-[420px] overflow-hidden sm:h-[70vh] sm:min-h-[480px]">
        <img src={dest.img} alt={dest.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-ink/30 to-ink/80" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-10 text-primary-foreground sm:px-6 sm:pb-16">
          <span className="eyebrow !text-coral">{dest.region}</span>
          <h1 className="mt-3 text-5xl leading-[1.02] sm:mt-4 sm:text-6xl md:text-8xl">{dest.name}</h1>
          <p className="mt-4 max-w-2xl font-display text-xl italic sm:mt-6 sm:text-2xl md:text-3xl">{dest.hero_quote}</p>
        </div>
      </section>

      {/* Facts strip */}
      <section className="border-b border-border bg-sand">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 py-7 sm:gap-6 sm:px-6 sm:py-8 md:grid-cols-4">
          {dest.facts.map((f) => (
            <div key={f.k}>
              <p className="eyebrow">{f.k}</p>
              <p className="mt-1 font-display text-xl sm:text-2xl">{f.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial body */}
      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-24">
        <p className="font-display text-xl leading-relaxed text-foreground/85 sm:text-2xl md:text-3xl">
          {dest.intro}
        </p>
        <div className="mt-12 space-y-10 sm:mt-16 sm:space-y-12">
          {dest.body.map((b) => (
            <section key={b.heading}>
              <h2 className="text-2xl sm:text-3xl">{b.heading}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">{b.text}</p>
            </section>
          ))}
        </div>
      </article>

      {/* Tours */}
      <section className="bg-muted/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-10 flex items-end justify-between sm:mb-12">
            <div>
              <span className="eyebrow">Bookable now</span>
              <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl">Diving tours in {dest.name}</h2>
            </div>
            <a
              href={gygLink({ query: dest.query })}
              target="_blank"
              rel="sponsored noopener"
              className="hidden text-sm uppercase tracking-[0.16em] text-coral md:block"
            >
              See all on GetYourGuide →
            </a>
          </div>
          {tours.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
              {tours.map((t) => <TourCard key={t.id} tour={t} />)}
            </div>
          ) : (
            <FallbackTourGrid query={dest.query} />
          )}
          {error && <p className="mt-6 text-center text-xs text-muted-foreground">{error}</p>}
        </div>
      </section>

      {/* Top dive sites table */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-24">
        <span className="eyebrow">The dive map</span>
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Top dive sites in {dest.name}</h2>
        <div className="mt-8 -mx-5 overflow-x-auto sm:mx-0 sm:mt-10">
          <div className="min-w-[640px] overflow-hidden border-y border-border sm:rounded-sm sm:border">
            <table className="w-full text-left text-sm">
              <thead className="bg-sand">
                <tr>
                  <th className="p-4 font-medium uppercase tracking-[0.14em]">Site</th>
                  <th className="p-4 font-medium uppercase tracking-[0.14em]">Depth</th>
                  <th className="p-4 font-medium uppercase tracking-[0.14em]">Level</th>
                  <th className="p-4 font-medium uppercase tracking-[0.14em]">Highlight</th>
                </tr>
              </thead>
              <tbody>
                {dest.sites.map((s) => (
                  <tr key={s.name} className="border-t border-border">
                    <td className="p-4 font-display text-lg">{s.name}</td>
                    <td className="p-4 text-muted-foreground">{s.depth}</td>
                    <td className="p-4 text-muted-foreground">{s.level}</td>
                    <td className="p-4">{s.highlight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Frequently asked.</h2>
          <dl className="mt-10 space-y-6 sm:mt-12 sm:space-y-8">
            {dest.faq.map((item) => (
              <div key={item.q} className="border-b border-border pb-6 sm:pb-8">
                <dt className="font-display text-xl sm:text-2xl">{item.q}</dt>
                <dd className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Internal links */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
        <span className="eyebrow">Keep reading</span>
        <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl">Plan the rest of your trip</h2>
        <div className="mt-6 grid gap-5 sm:mt-8 sm:grid-cols-3 sm:gap-6">
          <Link to="/guides/padi-courses" className="group block border-t border-border pt-4">
            <p className="text-xs uppercase tracking-[0.16em] text-coral">Guide</p>
            <p className="mt-2 text-lg group-hover:text-coral">PADI courses in Vietnam</p>
          </Link>
          <Link to="/guides/best-time-to-dive" className="group block border-t border-border pt-4">
            <p className="text-xs uppercase tracking-[0.16em] text-coral">Guide</p>
            <p className="mt-2 text-lg group-hover:text-coral">Best time to dive Vietnam</p>
          </Link>
          <Link to="/guides/dive-medical" className="group block border-t border-border pt-4">
            <p className="text-xs uppercase tracking-[0.16em] text-coral">Guide</p>
            <p className="mt-2 text-lg group-hover:text-coral">Dive medical certificate</p>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
