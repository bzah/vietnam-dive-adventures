import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl">
              Vietnam<span className="italic text-coral">Diving</span>
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/70">
              An editorial guide to scuba diving in Vietnam — from the coral gardens of Nha Trang to the remote turtle sanctuaries of Con Dao.
            </p>
          </div>
          <div>
            <p className="eyebrow !text-primary-foreground/60">Destinations</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/destinations/nha-trang" className="hover:text-coral">Nha Trang</Link></li>
              <li><Link to="/destinations/phu-quoc" className="hover:text-coral">Phu Quoc</Link></li>
              <li><Link to="/destinations/con-dao" className="hover:text-coral">Con Dao</Link></li>
              <li><Link to="/destinations/hoi-an" className="hover:text-coral">Hoi An & Cham</Link></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow !text-primary-foreground/60">Resources</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/tours" className="hover:text-coral">Browse Tours</Link></li>
              <li><Link to="/guides" className="hover:text-coral">Diving Guides</Link></li>
              <li><Link to="/about" className="hover:text-coral">About</Link></li>
              <li><Link to="/contact" className="hover:text-coral">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/55">
          <p>
            © {new Date().getFullYear()} VietnamDiving.com — Affiliate disclosure: We earn a commission on bookings made through GetYourGuide links at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
