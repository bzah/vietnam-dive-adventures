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
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20">
        <span className="eyebrow">Live tours</span>
        <h1 className="mt-3 text-4xl sm:text-5xl md:text-7xl">Diving tours in Vietnam.</h1>
        <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:mt-6 sm:text-lg">
          Curated dives, snorkeling trips, and PADI courses — bookable instantly through our partner GetYourGuide. Prices in USD.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 sm:pb-32">
        {tours.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
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
