import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/hero-diving.jpg";
import nhaTrang from "@/assets/nha-trang.jpg";
import phuQuoc from "@/assets/phu-quoc.jpg";
import conDao from "@/assets/con-dao.jpg";
import hoiAn from "@/assets/hoi-an.jpg";
import { gygLink } from "@/lib/getyourguide";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Vietnam Diving — Scuba Diving Guide to Vietnam | VietnamDiving.com",
      description:
        "The editorial guide to scuba diving in Vietnam. Compare Nha Trang, Phu Quoc, Con Dao and Hoi An — book PADI courses and dive tours with confidence.",
      image: "/og-home.jpg",
      path: "/",
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
      <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
        <img
          src={hero}
          alt="Scuba diver exploring a vibrant coral reef in Vietnam"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/30 to-ink/80" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 text-primary-foreground">
          <span className="eyebrow !text-coral">Issue 01 — Underwater Vietnam</span>
          <h1 className="mt-6 max-w-4xl text-6xl leading-[0.95] md:text-8xl">
            Dive into the <span className="display">other side</span> of Vietnam.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-primary-foreground/85">
            From the coral pinnacles of Nha Trang to the granite walls of Con Dao — a curated guide to scuba diving along Vietnam's 3,260 km coastline.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/destinations/$slug"
              params={{ slug: "nha-trang" }}
              className="rounded-sm bg-coral px-7 py-4 text-sm font-medium uppercase tracking-[0.16em] text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Explore Destinations
            </Link>
            <Link
              to="/tours"
              className="rounded-sm border border-primary-foreground/40 px-7 py-4 text-sm font-medium uppercase tracking-[0.16em] backdrop-blur transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              Book a Dive Tour
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-4xl px-6 py-28 text-center">
        <span className="rule" />
        <p className="mt-8 font-display text-3xl leading-tight md:text-5xl">
          "Vietnam's reefs are the country's quietest superlative — warm, biodiverse, and still gloriously uncrowded."
        </p>
        <p className="mt-6 text-sm uppercase tracking-[0.18em] text-muted-foreground">
          — The VietnamDiving Editors
        </p>
      </section>

      {/* DESTINATIONS */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <span className="eyebrow">The Map</span>
            <h2 className="mt-3 text-5xl md:text-6xl">Four coastlines, four worlds.</h2>
          </div>
          <Link to="/tours" className="hidden text-sm uppercase tracking-[0.16em] text-coral md:block">
            All tours →
          </Link>
        </div>
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
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
                  className="h-[460px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-6 top-6 font-display text-7xl text-primary-foreground/85 mix-blend-overlay">
                  {d.n}
                </span>
              </div>
              <div className="mt-6 flex items-baseline justify-between border-b border-border pb-4">
                <h3 className="text-3xl">{d.name}</h3>
                <span className="text-xs uppercase tracking-[0.18em] text-coral">Read →</span>
              </div>
              <p className="mt-4 text-muted-foreground">{d.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURE BAND */}
      <section className="bg-primary py-28 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-3">
          {[
            { k: "26–30°C", v: "Year-round water temperature across Vietnamese reefs." },
            { k: "30+ sites", v: "Documented dive sites from Nha Trang to Con Dao." },
            { k: "PADI 5★", v: "Certified resorts in every featured destination." },
          ].map((s) => (
            <div key={s.k}>
              <p className="font-display text-6xl text-coral">{s.k}</p>
              <p className="mt-4 text-lg text-primary-foreground/80">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GUIDES TEASER */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
          <div>
            <span className="eyebrow">The Field Notes</span>
            <h2 className="mt-3 text-5xl">Diving guides.</h2>
            <Link to="/guides" className="mt-8 inline-block text-sm uppercase tracking-[0.16em] text-coral">
              All guides →
            </Link>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
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

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="rounded-sm bg-sand p-12 md:p-20">
          <span className="eyebrow">Book your trip</span>
          <h2 className="mt-4 max-w-2xl text-5xl md:text-6xl">Ready to suit up?</h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Browse hand-picked dive trips, snorkeling experiences, and PADI courses across Vietnam — bookable instantly through our partner GetYourGuide.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/tours" className="rounded-sm bg-primary px-7 py-4 text-sm font-medium uppercase tracking-[0.16em] text-primary-foreground hover:opacity-90">
              Browse all tours
            </Link>
            <a
              href={gygLink({ query: "Vietnam scuba diving" })}
              target="_blank"
              rel="sponsored noopener"
              className="rounded-sm border border-primary px-7 py-4 text-sm font-medium uppercase tracking-[0.16em] hover:bg-primary hover:text-primary-foreground"
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
