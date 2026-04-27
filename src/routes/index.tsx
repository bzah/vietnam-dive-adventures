import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { pageHead, faqJsonLd, organizationJsonLd } from "@/lib/seo";
import hero from "@/assets/hero-diving.jpg";
import nhaTrang from "@/assets/nha-trang.jpg";
import phuQuoc from "@/assets/phu-quoc.jpg";
import conDao from "@/assets/con-dao.jpg";
import hoiAn from "@/assets/hoi-an.jpg";
import { gygLink } from "@/lib/getyourguide";

const HOME_FAQ = [
  { q: "Is Vietnam good for scuba diving?", a: "Yes. Vietnam offers warm 26–30°C water year-round across four very different regions: Nha Trang's coral gardens, Phu Quoc's soft reefs, Con Dao's remote pelagic dives, and the Cham Islands' UNESCO biosphere reserve." },
  { q: "When is the best time to dive in Vietnam?", a: "It depends on the region. Nha Trang and Cham/Hoi An: February–October. Phu Quoc: November–May. Con Dao: April–October. Vietnam's monsoons mean every coast has its own season." },
  { q: "How much does diving in Vietnam cost?", a: "Two-tank fun dives range $55–$140 depending on destination. PADI Open Water certification costs $300–$420. Discover Scuba experiences for non-divers start around $50." },
  { q: "Do I need a dive certificate to dive in Vietnam?", a: "No — every featured destination offers Discover Scuba programs for non-certified visitors. To dive deeper than 12 m or unsupervised, you need at least PADI Open Water." },
  { q: "Where is the best diving in Vietnam?", a: "Con Dao for pristine reefs and sea turtles, Nha Trang for biodiversity and beginner-friendly sites, Phu Quoc for relaxed soft-coral diving, and the Cham Islands for combining culture with diving." },
];

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Vietnam Diving — Scuba Diving Guide to Vietnam | VietnamDiving.com",
      description:
        "The editorial guide to scuba diving in Vietnam. Compare Nha Trang, Phu Quoc, Con Dao and Hoi An — book PADI courses and dive tours with confidence.",
      image: "/og-home.jpg",
      path: "/",
      keywords: "Vietnam diving, scuba diving Vietnam, Nha Trang diving, Phu Quoc diving, Con Dao diving, Cham Islands, PADI Vietnam, diving tours Vietnam",
      jsonLd: [...organizationJsonLd(), faqJsonLd(HOME_FAQ)],
    }),
  component: Home,
});

const destinations = [
  { slug: "nha-trang", name: "Nha Trang", img: nhaTrang, blurb: "Vietnam's diving capital — coral gardens of Hon Mun.", n: "01" },
  { slug: "phu-quoc", name: "Phu Quoc", img: phuQuoc, blurb: "Soft corals and macro life in the Gulf of Thailand.", n: "02" },
  { slug: "con-dao", name: "Con Dao", img: conDao, blurb: "Remote islands. Sea turtles. Vietnam's best-kept secret.", n: "03" },
  { slug: "hoi-an", name: "Hoi An & Cham", img: hoiAn, blurb: "A cultural port with a marine reserve next door.", n: "04" },
] as const;

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden sm:h-[88vh] sm:min-h-[640px]">
        <img
          src={hero}
          alt="Scuba diver exploring a vibrant coral reef in Vietnam"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/30 to-ink/80" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-12 text-primary-foreground sm:px-6 sm:pb-20">
          <span className="eyebrow !text-coral">Issue 01 — Underwater Vietnam</span>
          <h1 className="mt-5 max-w-4xl text-[2.5rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-8xl">
            Dive into the <span className="display">other side</span> of Vietnam.
          </h1>
          <p className="mt-6 max-w-xl text-base text-primary-foreground/85 sm:mt-8 sm:text-lg">
            From the coral pinnacles of Nha Trang to the granite walls of Con Dao — a curated guide to scuba diving along Vietnam's 3,260 km coastline.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <Link
              to="/destinations/$slug"
              params={{ slug: "nha-trang" }}
              className="rounded-sm bg-coral px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-accent-foreground transition-transform hover:-translate-y-0.5 sm:px-7 sm:py-4 sm:text-sm"
            >
              Explore Destinations
            </Link>
            <Link
              to="/tours"
              className="rounded-sm border border-primary-foreground/40 px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] backdrop-blur transition-colors hover:bg-primary-foreground hover:text-primary sm:px-7 sm:py-4 sm:text-sm"
            >
              Book a Dive Tour
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-6 sm:py-28">
        <span className="rule" />
        <p className="mt-8 font-display text-2xl leading-tight sm:text-3xl md:text-5xl">
          "Vietnam's reefs are the country's quietest superlative — warm, biodiverse, and still gloriously uncrowded."
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
          — The VietnamDiving Editors
        </p>
      </section>

      {/* DESTINATIONS */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 sm:pb-24">
        <div className="mb-10 flex items-end justify-between sm:mb-16">
          <div>
            <span className="eyebrow">The Map</span>
            <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl">Four coastlines, four worlds.</h2>
          </div>
          <Link to="/tours" className="hidden text-sm uppercase tracking-[0.16em] text-coral md:block">
            All tours →
          </Link>
        </div>
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16">
          {destinations.map((d, i) => (
            <Link
              key={d.slug}
              to="/destinations/$slug"
              params={{ slug: d.slug }}
              className="group block"
            >
              <div className={`relative overflow-hidden ${i % 2 ? "md:translate-y-16" : ""}`}>
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[420px] md:h-[460px]"
                />
                <span className="absolute left-5 top-5 font-display text-5xl text-primary-foreground/85 mix-blend-overlay sm:left-6 sm:top-6 sm:text-7xl">
                  {d.n}
                </span>
              </div>
              <div className="mt-5 flex items-baseline justify-between border-b border-border pb-4 sm:mt-6">
                <h3 className="text-2xl sm:text-3xl">{d.name}</h3>
                <span className="text-xs uppercase tracking-[0.18em] text-coral">Read →</span>
              </div>
              <p className="mt-3 text-muted-foreground sm:mt-4">{d.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURE BAND */}
      <section className="bg-primary py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:gap-16 sm:px-6 md:grid-cols-3">
          {[
            { k: "26–30°C", v: "Year-round water temperature across Vietnamese reefs." },
            { k: "30+ sites", v: "Documented dive sites from Nha Trang to Con Dao." },
            { k: "PADI 5★", v: "Certified resorts in every featured destination." },
          ].map((s) => (
            <div key={s.k}>
              <p className="font-display text-5xl text-coral sm:text-6xl">{s.k}</p>
              <p className="mt-3 text-base text-primary-foreground/80 sm:mt-4 sm:text-lg">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GUIDES TEASER */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
          <div>
            <span className="eyebrow">The Field Notes</span>
            <h2 className="mt-3 text-4xl sm:text-5xl">Diving guides.</h2>
            <Link to="/guides" className="mt-6 inline-block text-sm uppercase tracking-[0.16em] text-coral sm:mt-8">
              All guides →
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-3 sm:gap-10">
            {[
              { to: "/guides/padi-courses", t: "PADI Courses in Vietnam", d: "Where to certify, what it costs, and how to choose a school." },
              { to: "/guides/best-time-to-dive", t: "Best Time to Dive", d: "Monsoon-by-monsoon — when each region opens and closes." },
              { to: "/guides/dive-medical", t: "Dive Medical & Safety", d: "Where to get a dive medical certificate in Vietnam." },
            ].map((g) => (
              <Link key={g.to} to={g.to} className="group block border-t border-border pt-6">
                <p className="text-xs uppercase tracking-[0.16em] text-coral">Guide</p>
                <h3 className="mt-3 text-xl group-hover:text-coral">{g.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{g.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY VIETNAM — SEO body */}
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-6 sm:py-24">
        <span className="eyebrow">Why Vietnam</span>
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">A 3,260 km coastline. Four diving worlds.</h2>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:mt-10 sm:space-y-6 sm:text-lg">
          <p>
            Vietnam is one of Southeast Asia's most underrated scuba diving destinations. Tucked between the better-known reefs of Thailand and the Philippines, Vietnam's 3,260 km coastline shelters over <strong className="text-foreground">350 species of hard coral</strong>, four marine protected areas, and reefs that remain remarkably uncrowded compared to neighbouring countries.
          </p>
          <p>
            The country's geography creates four distinct dive regions, each with its own monsoon window. <Link to="/destinations/$slug" params={{ slug: "nha-trang" }} className="text-coral underline">Nha Trang</Link> on the south-central coast is Vietnam's diving capital, with the Hon Mun Marine Protected Area and easy access from Cam Ranh Airport. <Link to="/destinations/$slug" params={{ slug: "phu-quoc" }} className="text-coral underline">Phu Quoc</Link> in the Gulf of Thailand offers the warmest, calmest water in the country — perfect for beginners and snorkelers.
          </p>
          <p>
            Further offshore, <Link to="/destinations/$slug" params={{ slug: "con-dao" }} className="text-coral underline">Con Dao</Link> is Vietnam's wildest diving frontier — a national park archipelago famous for green sea turtles, granite walls, and visibility that exceeds 25 metres. And in the centre, the <Link to="/destinations/$slug" params={{ slug: "hoi-an" }} className="text-coral underline">Cham Islands</Link> off Hoi An form a UNESCO Biosphere Reserve, ideal for combining culture and diving in a single trip.
          </p>
          <p>
            Whether you're looking to <Link to="/guides/padi-courses" className="text-coral underline">earn your PADI Open Water</Link>, time your trip with <Link to="/guides/best-time-to-dive" className="text-coral underline">Vietnam's monsoon seasons</Link>, or simply book a half-day discovery dive, this site is your editorial guide.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Diving in Vietnam — the basics.</h2>
          <dl className="mt-10 space-y-6 sm:mt-12 sm:space-y-8">
            {HOME_FAQ.map((item) => (
              <div key={item.q} className="border-b border-border pb-6 sm:pb-8">
                <dt className="font-display text-xl sm:text-2xl">{item.q}</dt>
                <dd className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 sm:pb-28">
        <div className="rounded-sm bg-sand p-8 sm:p-12 md:p-20">
          <span className="eyebrow">Book your trip</span>
          <h2 className="mt-4 max-w-2xl text-4xl sm:text-5xl md:text-6xl">Ready to suit up?</h2>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:mt-6 sm:text-lg">
            Browse hand-picked dive trips, snorkeling experiences, and PADI courses across Vietnam — bookable instantly through our partner GetYourGuide.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <Link to="/tours" className="rounded-sm bg-primary px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-primary-foreground hover:opacity-90 sm:px-7 sm:py-4 sm:text-sm">
              Browse all tours
            </Link>
            <a
              href={gygLink({ query: "Vietnam scuba diving" })}
              target="_blank"
              rel="sponsored noopener"
              className="rounded-sm border border-primary px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] hover:bg-primary hover:text-primary-foreground sm:px-7 sm:py-4 sm:text-sm"
            >
              Search on GetYourGuide
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
