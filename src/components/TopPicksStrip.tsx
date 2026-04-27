import type { GygTour } from "@/lib/gyg.functions";
import { TourCard, FallbackTourGrid } from "@/components/TourCard";
import { gygLink } from "@/lib/getyourguide";

/** Compact "Top picks" strip used on destination/guide pages to drive bookings. */
export function TopPicksStrip({
  tours,
  query,
  title = "Top picks — book today",
  eyebrow = "Live availability",
}: {
  tours: GygTour[];
  query: string;
  title?: string;
  eyebrow?: string;
}) {
  return (
    <section className="border-y border-border bg-muted/40 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl">{title}</h2>
          </div>
          <a
            href={gygLink({ query })}
            target="_blank"
            rel="sponsored noopener"
            className="text-xs uppercase tracking-[0.16em] text-coral sm:text-sm"
          >
            All {query} tours →
          </a>
        </div>
        {tours.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {tours.slice(0, 3).map((t) => (
              <TourCard key={t.id} tour={t} />
            ))}
          </div>
        ) : (
          <FallbackTourGrid query={query} />
        )}
      </div>
    </section>
  );
}
