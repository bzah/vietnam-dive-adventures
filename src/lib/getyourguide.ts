export const PARTNER_ID = "0IQTGX8";

const BASE = "https://www.getyourguide.com";

/** Build affiliate deep link with partner_id appended.
 * - tourId: jumps to a known tour id via the search engine (safer than guessing slugs)
 * - query: free-text search
 * - locationSlug: e.g. "nha-trang-l1067" for a city landing page
 */
export function gygLink(opts: {
  tourId?: number | string;
  query?: string;
  locationSlug?: string;
}) {
  const params = new URLSearchParams({ partner_id: PARTNER_ID });

  if (opts.locationSlug) {
    return `${BASE}/${opts.locationSlug}/?${params.toString()}`;
  }
  if (opts.tourId) {
    // GYG tour URLs require the slug; safest fallback is search by tour id
    params.set("q", String(opts.tourId));
    return `${BASE}/s/?${params.toString()}`;
  }
  if (opts.query) {
    params.set("q", opts.query);
    return `${BASE}/s/?${params.toString()}`;
  }
  return `${BASE}/?${params.toString()}`;
}

/** Verified GetYourGuide city/region landing slugs for Vietnam diving destinations. */
export const GYG_LOCATIONS = {
  "nha-trang": "nha-trang-l1067",
  "phu-quoc": "phu-quoc-l2706",
  "con-dao": "vietnam-l50",
  "hoi-an": "hoi-an-l1149",
} as const;
