import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { pageHead } from "@/lib/seo";
import { gygLink } from "@/lib/getyourguide";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact VietnamDiving.com — Trip Planning, Recommendations & Press Inquiries",
      description:
        "Have a question about diving in Nha Trang, Phu Quoc, Con Dao or the Cham Islands? Need a dive school recommendation, PADI course advice, or trip-planning help? Reach the VietnamDiving.com editorial team — we reply within 48 hours. Press, partnership, and dive-shop listing inquiries also welcome.",
      path: "/contact",
      keywords: "contact VietnamDiving, Vietnam dive trip planning, dive school recommendation Vietnam, PADI course advice Vietnam, Vietnam diving press inquiries, partnership Vietnam diving",
    }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-24">
        <span className="eyebrow">Get in touch</span>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl">Plan your dive trip with us.</h1>
        <p className="mt-5 max-w-xl text-base text-muted-foreground sm:mt-6 sm:text-lg">
          Questions about a destination, course, or specific tour? Send a note and we'll reply within 48 hours.
        </p>
        {sent ? (
          <div className="mt-12 rounded-sm border border-coral/30 bg-coral/5 p-8">
            <p className="font-display text-2xl">Thank you — message received.</p>
            <p className="mt-2 text-muted-foreground">We'll get back to you shortly. In the meantime, browse <a href={gygLink({ query: "Vietnam diving" })} target="_blank" rel="sponsored noopener" className="text-coral underline">live diving tours on GetYourGuide</a>.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="mt-12 space-y-6"
          >
            <div>
              <label className="eyebrow">Name</label>
              <input required className="mt-2 w-full border-b border-border bg-transparent py-3 text-lg outline-none focus:border-coral" />
            </div>
            <div>
              <label className="eyebrow">Email</label>
              <input required type="email" className="mt-2 w-full border-b border-border bg-transparent py-3 text-lg outline-none focus:border-coral" />
            </div>
            <div>
              <label className="eyebrow">Message</label>
              <textarea required rows={5} className="mt-2 w-full border-b border-border bg-transparent py-3 text-lg outline-none focus:border-coral" />
            </div>
            <button className="rounded-sm bg-primary px-8 py-3 text-sm font-medium uppercase tracking-[0.16em] text-primary-foreground hover:opacity-90">
              Send message
            </button>
          </form>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
