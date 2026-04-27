import { gygLink } from "@/lib/getyourguide";

/** Inline CTA banner — drop into any page to push GYG bookings. */
export function AffiliateCTA({
  query,
  eyebrow = "Book with our partner",
  title,
  body,
  ctaLabel = "Search on GetYourGuide",
  secondary,
  variant = "sand",
}: {
  query: string;
  eyebrow?: string;
  title: string;
  body: string;
  ctaLabel?: string;
  secondary?: { label: string; href: string };
  variant?: "sand" | "primary" | "coral";
}) {
  const palette =
    variant === "primary"
      ? "bg-primary text-primary-foreground"
      : variant === "coral"
      ? "bg-coral text-accent-foreground"
      : "bg-sand text-foreground";
  const eyebrowCls =
    variant === "sand" ? "eyebrow text-coral" : "eyebrow !text-primary-foreground/80";
  const bodyCls =
    variant === "sand" ? "text-muted-foreground" : "text-primary-foreground/85";
  const btnPrimary =
    variant === "sand"
      ? "bg-primary text-primary-foreground hover:opacity-90"
      : "bg-primary-foreground text-primary hover:opacity-90";
  const btnSecondary =
    variant === "sand"
      ? "border border-primary hover:bg-primary hover:text-primary-foreground"
      : "border border-primary-foreground/40 hover:bg-primary-foreground hover:text-primary";

  return (
    <aside
      className={`my-10 rounded-sm p-7 sm:my-14 sm:p-10 md:p-14 ${palette}`}
      aria-label="Booking call to action"
    >
      <span className={eyebrowCls}>{eyebrow}</span>
      <h3 className="mt-3 max-w-2xl font-display text-2xl leading-tight sm:text-3xl md:text-4xl">
        {title}
      </h3>
      <p className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${bodyCls}`}>
        {body}
      </p>
      <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
        <a
          href={gygLink({ query })}
          target="_blank"
          rel="sponsored noopener"
          className={`rounded-sm px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] sm:px-7 sm:py-4 sm:text-sm ${btnPrimary}`}
        >
          {ctaLabel}
        </a>
        {secondary && (
          <a
            href={secondary.href}
            className={`rounded-sm px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] sm:px-7 sm:py-4 sm:text-sm ${btnSecondary}`}
          >
            {secondary.label}
          </a>
        )}
      </div>
      <p
        className={`mt-5 text-[11px] uppercase tracking-[0.14em] sm:text-xs ${
          variant === "sand" ? "text-muted-foreground" : "text-primary-foreground/60"
        }`}
      >
        Affiliate link · Free cancellation on most tours · Reserve now, pay later
      </p>
    </aside>
  );
}
