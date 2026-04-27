import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { pageHead } from "@/lib/seo";

const guides = [
  {
    to: "/guides/padi-courses",
    title: "PADI Courses in Vietnam",
    desc: "Where to certify, what it costs, and how to choose the right dive school.",
  },
  {
    to: "/guides/best-time-to-dive",
    title: "Best Time to Dive in Vietnam",
    desc: "Region by region — when each coastline is at its best, and when monsoon shuts it down.",
  },
  {
    to: "/guides/dive-medical",
    title: "Dive Medical Certificate in Vietnam",
    desc: "Where to get a dive medical practitioner sign-off in Saigon, Hanoi, and Nha Trang.",
  },
] as const;

export const Route = createFileRoute("/guides")({
  head: () =>
    pageHead({
      title: "Vietnam Diving Guides — PADI, Season, Medical | VietnamDiving.com",
      description:
        "In-depth guides to scuba diving in Vietnam: PADI courses, best season by region, dive medical certificates, and where to find a practitioner.",
      path: "/guides",
    }),
  component: GuidesIndex,
});

function GuidesIndex() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <span className="eyebrow">Field notes</span>
        <h1 className="mt-3 text-5xl md:text-7xl">Diving guides.</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Practical, no-fluff guides to scuba diving in Vietnam — written for divers who want answers, not filler.
        </p>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {guides.map((g) => (
            <Link key={g.to} to={g.to} className="group block border-t border-border pt-8">
              <p className="eyebrow">Guide</p>
              <h2 className="mt-3 text-2xl group-hover:text-coral">{g.title}</h2>
              <p className="mt-3 text-muted-foreground">{g.desc}</p>
              <span className="mt-6 inline-block text-xs uppercase tracking-[0.16em] text-coral">Read →</span>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
