import type { GygTour } from "@/lib/gyg.functions";
import { gygLink } from "@/lib/getyourguide";

export function TourCard({ tour }: { tour: GygTour }) {
  return (
    <a
      href={tour.url}
      target="_blank"
      rel="sponsored noopener"
      className="group flex flex-col overflow-hidden border border-border bg-card transition-shadow hover:shadow-editorial"
      style={{ boxShadow: "var(--shadow-editorial, none)" }}
    >
      {tour.photo ? (
        <img
          src={tour.photo}
          alt={tour.title}
          loading="lazy"
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="h-56 w-full bg-sand" />
      )}
      <div className="flex flex-1 flex-col p-6">
        {tour.city && <p className="eyebrow">{tour.city}</p>}
        <h3 className="mt-2 line-clamp-2 font-display text-xl leading-tight">{tour.title}</h3>
        {tour.abstract && (
          <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{tour.abstract}</p>
        )}
        <div className="mt-auto flex items-end justify-between pt-5">
          <div>
            {tour.rating != null && (
              <p className="text-xs text-muted-foreground">
                ★ {tour.rating.toFixed(1)} {tour.review_count ? `· ${tour.review_count}` : ""}
              </p>
            )}
            {tour.price && (
              <p className="mt-1 font-display text-2xl">
                {tour.price.currency === "USD" ? "$" : tour.price.currency + " "}
                {Math.round(tour.price.amount)}
              </p>
            )}
          </div>
          <span className="text-xs uppercase tracking-[0.16em] text-coral">Book →</span>
        </div>
      </div>
    </a>
  );
}

export function FallbackTourGrid({ query }: { query: string }) {
  return (
    <div className="rounded-sm border border-border bg-sand p-10 text-center">
      <p className="font-display text-2xl">Live tours are loading on our partner.</p>
      <p className="mt-3 text-muted-foreground">
        Browse the full live catalogue for "{query}" directly on GetYourGuide.
      </p>
      <a
        href={gygLink({ query })}
        target="_blank"
        rel="sponsored noopener"
        className="mt-6 inline-block rounded-sm bg-primary px-7 py-3 text-sm font-medium uppercase tracking-[0.16em] text-primary-foreground hover:opacity-90"
      >
        Search on GetYourGuide
      </a>
    </div>
  );
}
