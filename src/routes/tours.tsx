import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { pageHead } from "@/lib/seo";
import { searchGygTours } from "@/lib/gyg.functions";
import { TourCard, FallbackTourGrid } from "@/components/TourCard";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { gygLink } from "@/lib/getyourguide";

const QUICK_CATEGORIES = [
  { q: "Nha Trang diving", label: "Nha Trang dives", desc: "Hon Mun marine park · from $55" },
  { q: "Phu Quoc snorkeling diving", label: "Phu Quoc trips", desc: "An Thoi soft corals · from $39" },
  { q: "Con Dao diving", label: "Con Dao dives", desc: "Sea turtles & walls · from $90" },
  { q: "Cham Islands diving Hoi An", label: "Cham Islands", desc: "UNESCO reserve · from $30" },
  { q: "PADI Open Water Vietnam", label: "PADI Open Water", desc: "3-day certification · from $300" },
  { q: "Discover Scuba Vietnam", label: "Discover Scuba", desc: "No license needed · from $50" },
];

const TRUST_BADGES = [
  { k: "✓ Free cancellation", v: "On most tours up to 24h before" },
  { k: "✓ Reserve now, pay later", v: "Lock in your spot, pay closer to the date" },
  { k: "✓ Instant confirmation", v: "Voucher delivered to your inbox in seconds" },
  { k: "✓ Verified reviews", v: "Read what real divers say before you book" },
];

export const Route = createFileRoute("/tours")({
  loader: async () => {
    const { tours, error } = await searchGygTours({ data: { q: "Vietnam diving snorkeling", limit: 18 } });
    return { tours, error };
  },
  head: () =>
    pageHead({
      title: "Vietnam Diving Tours & PADI Courses — Live Prices, Instant Booking 2026 | VietnamDiving.com",
      description:
        "Browse hand-picked scuba diving tours, snorkeling day trips, fun-dive packages and PADI Open Water and Advanced courses across Nha Trang, Phu Quoc, Con Dao and the Cham Islands. Live availability, transparent USD pricing, free cancellation on most tours, and instant confirmation through our partner GetYourGuide.",
      path: "/tours",
      keywords: "Vietnam diving tours, scuba diving tours Vietnam, Nha Trang dive trip, Hon Mun snorkeling tour, Phu Quoc diving tour, An Thoi snorkeling, Con Dao diving package, Cham Islands snorkeling, PADI Open Water Vietnam booking, Discover Scuba Vietnam, fun dive Vietnam, GetYourGuide Vietnam diving, book diving Vietnam online",
    }),
  component: ToursPage,
});

function ToursPage() {
  const { tours, error } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20">
        <span className="eyebrow">Live tours</span>
        <h1 className="mt-3 text-4xl sm:text-5xl md:text-7xl">Diving tours in Vietnam.</h1>
        <p className="mt-5 max-w-3xl text-base text-muted-foreground sm:mt-6 sm:text-lg">
          Curated dives, snorkeling trips, and PADI courses — bookable instantly through our partner <strong>GetYourGuide</strong>. All prices in USD with free cancellation on most activities.
        </p>

        {/* Trust strip */}
        <div className="mt-10 grid gap-4 border-y border-border py-6 sm:mt-12 sm:grid-cols-2 sm:gap-6 sm:py-8 lg:grid-cols-4">
          {TRUST_BADGES.map((t) => (
            <div key={t.k}>
              <p className="text-sm font-medium text-coral">{t.k}</p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{t.v}</p>
            </div>
          ))}
        </div>

        {/* Quick category jumps */}
        <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {QUICK_CATEGORIES.map((c) => (
            <a
              key={c.q}
              href={gygLink({ query: c.q })}
              target="_blank"
              rel="sponsored noopener"
              className="group block border border-border bg-card p-5 transition-colors hover:border-coral"
            >
              <p className="font-display text-lg group-hover:text-coral sm:text-xl">{c.label} →</p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{c.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 sm:pb-20">
        <span className="eyebrow">Hand-picked</span>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl">Editor's picks · live availability</h2>
        <div className="mt-8 sm:mt-10">
          {tours.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
              {tours.map((t) => <TourCard key={t.id} tour={t} />)}
            </div>
          ) : (
            <FallbackTourGrid query="Vietnam diving" />
          )}
          {error && <p className="mt-8 text-center text-xs text-muted-foreground">{error}</p>}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 sm:pb-28">
        <AffiliateCTA
          query="Vietnam diving"
          eyebrow="Can't decide?"
          title="See every Vietnam dive tour in one search"
          body="Filter 200+ scuba diving, snorkeling and PADI course experiences by date, language, group size and budget. Read verified reviews from real divers and reserve your spot in seconds."
          ctaLabel="Search all Vietnam dive tours"
          secondary={{ label: "Read destination guides", href: "/guides" }}
          variant="primary"
        />
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Looking for something specific? Browse our{" "}
          <Link to="/destinations/$slug" params={{ slug: "nha-trang" }} className="text-coral underline">Nha Trang</Link>,{" "}
          <Link to="/destinations/$slug" params={{ slug: "phu-quoc" }} className="text-coral underline">Phu Quoc</Link>,{" "}
          <Link to="/destinations/$slug" params={{ slug: "con-dao" }} className="text-coral underline">Con Dao</Link> and{" "}
          <Link to="/destinations/$slug" params={{ slug: "hoi-an" }} className="text-coral underline">Cham Islands</Link> destination pages.
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
