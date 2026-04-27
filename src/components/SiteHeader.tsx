import { Link } from "@tanstack/react-router";
import { useState } from "react";

const destNav = [
  { slug: "nha-trang", label: "Nha Trang" },
  { slug: "phu-quoc", label: "Phu Quoc" },
  { slug: "con-dao", label: "Con Dao" },
  { slug: "hoi-an", label: "Hoi An" },
] as const;

const simpleNav = [
  { to: "/tours" as const, label: "Tours" },
  { to: "/guides" as const, label: "Guides" },
  { to: "/about" as const, label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const linkBase =
    "text-[13px] font-medium uppercase tracking-[0.14em] text-foreground/75 transition-colors hover:text-coral";
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-medium tracking-tight">
            Vietnam<span className="text-coral italic">Diving</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          <Link to="/" className={linkBase} activeProps={{ className: "text-coral" }}>Home</Link>
          {destNav.map((d) => (
            <Link
              key={d.slug}
              to="/destinations/$slug"
              params={{ slug: d.slug }}
              className={linkBase}
              activeProps={{ className: "text-coral" }}
            >
              {d.label}
            </Link>
          ))}
          {simpleNav.map((n) => (
            <Link key={n.to} to={n.to} className={linkBase} activeProps={{ className: "text-coral" }}>
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-sm bg-primary px-4 py-2 text-[13px] font-medium uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact
          </Link>
        </nav>
        <button aria-label="Menu" onClick={() => setOpen(!open)} className="lg:hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            <Link to="/" onClick={() => setOpen(false)} className="py-2 text-sm uppercase tracking-[0.14em]">Home</Link>
            {destNav.map((d) => (
              <Link
                key={d.slug}
                to="/destinations/$slug"
                params={{ slug: d.slug }}
                onClick={() => setOpen(false)}
                className="py-2 text-sm uppercase tracking-[0.14em]"
              >
                {d.label}
              </Link>
            ))}
            {[...simpleNav, { to: "/contact" as const, label: "Contact" }].map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 text-sm uppercase tracking-[0.14em]">
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

