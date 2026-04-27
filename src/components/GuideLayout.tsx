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
      <section className="relative h-[48vh] min-h-[340px] overflow-hidden sm:h-[55vh] sm:min-h-[400px]">
        <img src={img} alt={title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 to-ink/80" />
        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col justify-end px-5 pb-10 text-primary-foreground sm:px-6 sm:pb-12">
          <span className="eyebrow !text-coral">{eyebrow}</span>
          <h1 className="mt-3 text-4xl leading-[1.05] sm:mt-4 sm:text-5xl md:text-7xl">{title}</h1>
        </div>
      </section>
      <article className="mx-auto max-w-3xl px-5 py-14 sm:px-6 sm:py-20">
        <p className="font-display text-xl leading-relaxed text-foreground/85 sm:text-2xl md:text-3xl">{intro}</p>
        <div className="prose prose-lg mt-10 max-w-none space-y-8 text-base leading-relaxed text-foreground/90 sm:mt-14 sm:space-y-10 sm:text-lg [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-medium sm:[&_h2]:mt-12 sm:[&_h2]:text-3xl [&_h3]:font-display [&_h3]:text-xl sm:[&_h3]:text-2xl [&_a]:text-coral [&_a]:underline [&_p]:text-foreground/85 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-2">
          {children}
        </div>
        <div className="mt-16 border-t border-border pt-8 sm:mt-20">
          <Link to="/guides" className="text-sm uppercase tracking-[0.16em] text-coral">
            ← All guides
          </Link>
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}
