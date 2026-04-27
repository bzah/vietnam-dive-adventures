import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { pageHead } from "@/lib/seo";
import { searchGygTours } from "@/lib/gyg.functions";
import { TourCard, FallbackTourGrid } from "@/components/TourCard";

export const Route = createFileRoute("/tours")({
  loader: async () => {
    const { tours, error } = await searchGygTours({ data: { q: "Vietnam diving snorkeling", limit: 18 } });
    return { tours, error };
  },
  head: () =>
    pageHead({
      title: "Vietnam Diving Tours — Live Booking via GetYourGuide | VietnamDiving.com",
      description:
        "Browse hand-picked scuba diving tours, snorkeling trips, and PADI courses across Vietnam. Live availability and instant booking via GetYourGuide.",
      path: "/tours",
    }),
  component: ToursPage,
});

function ToursPage() {
  const { tours, error } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <span className="eyebrow">Live tours</span>
        <h1 className="mt-3 text-5xl md:text-7xl">Diving tours in Vietnam.</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Curated dives, snorkeling trips, and PADI courses — bookable instantly through our partner GetYourGuide. Prices in USD.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-32">
        {tours.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tours.map((t) => <TourCard key={t.id} tour={t} />)}
          </div>
        ) : (
          <FallbackTourGrid query="Vietnam diving" />
        )}
        {error && <p className="mt-8 text-center text-xs text-muted-foreground">{error}</p>}
      </section>
      <SiteFooter />
    </div>
  );
}
