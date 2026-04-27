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
      title: "Vietnam Diving Guides — PADI Courses, Season Planner & Dive Medicals (2026) | VietnamDiving.com",
      description:
        "Practical, in-depth guides to scuba diving in Vietnam written by divers for divers. Find out which PADI courses are taught in Nha Trang, Phu Quoc and Con Dao; the best month-by-month dive season for every region; how Vietnam's monsoon affects visibility; where to obtain a recreational dive medical certificate in Saigon, Hanoi and Nha Trang; and what to pack for tropical diving in Vietnam.",
      path: "/guides",
      keywords: "Vietnam diving guides, PADI courses Vietnam guide, best time to dive Vietnam, Vietnam dive season by month, dive medical Vietnam, Vietnam scuba travel tips, dive packing list Vietnam, Vietnam dive visibility, monsoon diving Vietnam",
    }),
  component: GuidesIndex,
});

function GuidesIndex() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24">
        <span className="eyebrow">Field notes</span>
        <h1 className="mt-3 text-4xl sm:text-5xl md:text-7xl">Diving guides.</h1>
        <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:mt-6 sm:text-lg">
          Practical, no-fluff guides to scuba diving in Vietnam — written for divers who want answers, not filler.
        </p>
        <div className="mt-12 grid gap-8 sm:mt-16 sm:gap-10 md:grid-cols-3">
          {guides.map((g) => (
            <Link key={g.to} to={g.to} className="group block border-t border-border pt-6 sm:pt-8">
              <p className="eyebrow">Guide</p>
              <h2 className="mt-3 text-xl group-hover:text-coral sm:text-2xl">{g.title}</h2>
              <p className="mt-3 text-muted-foreground">{g.desc}</p>
              <span className="mt-5 inline-block text-xs uppercase tracking-[0.16em] text-coral sm:mt-6">Read →</span>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
