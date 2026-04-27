import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import padiImg from "@/assets/padi-courses.jpg";

export function GuideLayout({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  children: ReactNode;
}) {
  const img = image ?? padiImg;
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <img src={img} alt={title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 to-ink/80" />
        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col justify-end px-6 pb-12 text-primary-foreground">
          <span className="eyebrow !text-coral">{eyebrow}</span>
          <h1 className="mt-4 text-5xl md:text-7xl">{title}</h1>
        </div>
      </section>
      <article className="mx-auto max-w-3xl px-6 py-20">
        <p className="font-display text-2xl leading-relaxed text-foreground/85 md:text-3xl">{intro}</p>
        <div className="prose prose-lg mt-14 max-w-none space-y-10 text-lg leading-relaxed text-foreground/90 [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:font-medium [&_h3]:font-display [&_h3]:text-2xl [&_a]:text-coral [&_a]:underline [&_p]:text-foreground/85 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-2">
          {children}
        </div>
        <div className="mt-20 border-t border-border pt-8">
          <Link to="/guides" className="text-sm uppercase tracking-[0.16em] text-coral">
            ← All guides
          </Link>
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}
