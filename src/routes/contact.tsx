import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { pageHead } from "@/lib/seo";
import { gygLink } from "@/lib/getyourguide";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact — VietnamDiving.com",
      description:
        "Get in touch with VietnamDiving.com — questions about diving in Vietnam, recommendations, or partnership inquiries welcome.",
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-24">
        <span className="eyebrow">Get in touch</span>
        <h1 className="mt-4 text-5xl md:text-6xl">Plan your dive trip with us.</h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
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
