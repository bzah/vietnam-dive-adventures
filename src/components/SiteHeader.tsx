import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/destinations/nha-trang", label: "Nha Trang" },
  { to: "/destinations/phu-quoc", label: "Phu Quoc" },
  { to: "/destinations/con-dao", label: "Con Dao" },
  { to: "/destinations/hoi-an", label: "Hoi An" },
  { to: "/tours", label: "Tours" },
  { to: "/guides", label: "Guides" },
  { to: "/about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-medium tracking-tight">
            Vietnam<span className="text-coral italic">Diving</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[13px] font-medium uppercase tracking-[0.14em] text-foreground/75 transition-colors hover:text-coral"
              activeProps={{ className: "text-coral" }}
            >
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
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {nav.concat([{ to: "/contact", label: "Contact" }]).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium uppercase tracking-[0.14em] text-foreground/80"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
