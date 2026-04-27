export const PARTNER_ID = "0IQTGX8";

const BASE = "https://www.getyourguide.com";

/** Build affiliate deep link with partner_id appended.
 * Uses search URLs which are stable and always carry the partner_id correctly.
 * - tourId: search by tour id (returns the matching activity)
 * - query: free-text search (preferred for destination/category links)
 */
export function gygLink(opts: { tourId?: number | string; query?: string }) {
  const params = new URLSearchParams({ partner_id: PARTNER_ID });
  if (opts.query) {
    params.set("q", opts.query);
    return `${BASE}/s/?${params.toString()}`;
  }
  if (opts.tourId) {
    params.set("q", String(opts.tourId));
    return `${BASE}/s/?${params.toString()}`;
  }
  return `${BASE}/?${params.toString()}`;
}

/** Verified search queries that surface the right activities for each destination. */
export const GYG_QUERIES: Record<string, string> = {
  "nha-trang": "Nha Trang diving",
  "phu-quoc": "Phu Quoc diving",
  "con-dao": "Con Dao diving",
  "hoi-an": "Cham Islands diving Hoi An",
};
