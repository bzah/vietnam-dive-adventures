import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About — VietnamDiving.com",
      description:
        "VietnamDiving.com is an editorial guide to scuba diving in Vietnam — independent recommendations, transparent affiliate booking via GetYourGuide.",
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-24">
        <span className="eyebrow">About</span>
        <h1 className="mt-3 text-4xl sm:text-5xl md:text-7xl">A field guide to underwater Vietnam.</h1>
        <p className="mt-8 font-display text-xl leading-relaxed text-foreground/85 sm:mt-10 sm:text-2xl md:text-3xl">
          VietnamDiving.com is an independent editorial site covering scuba diving along Vietnam's 3,260 km coastline — from the coral pinnacles of Nha Trang to the granite walls of Con Dao.
        </p>
        <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/85 sm:mt-12 sm:space-y-8 sm:text-lg">
          <p>We write for divers who want answers: where to go, when to go, what it costs, and which schools are worth your money. No filler. No paid placements. No ranked lists invented from press releases.</p>
          <h2 className="mt-10 font-display text-2xl sm:mt-12 sm:text-3xl">How we make money</h2>
          <p>When you book a tour or course through one of our links, we earn a small commission from <strong>GetYourGuide</strong> at no extra cost to you. That commission funds independent writing, image generation, and hosting. We never recommend an experience we wouldn't book ourselves.</p>
          <h2 className="mt-10 font-display text-2xl sm:mt-12 sm:text-3xl">Editorial principles</h2>
          <ul className="list-disc space-y-3 pl-6">
            <li>Every destination page is reviewed against current PADI 5-Star resort listings before publication.</li>
            <li>Prices are quoted in USD and updated quarterly.</li>
            <li>Affiliate links are disclosed in the footer and tagged <code>rel="sponsored"</code>.</li>
            <li>If we get something wrong, <Link to="/contact" className="text-coral underline">tell us</Link> — we'll fix it.</li>
          </ul>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
