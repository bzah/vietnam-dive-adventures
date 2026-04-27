export const PARTNER_ID = "0IQTGX8";

/** Build affiliate deep link with partner_id appended. */
export function gygLink(opts: { tourId?: number | string; query?: string }) {
  const base = "https://www.getyourguide.com";
  const params = new URLSearchParams({ partner_id: PARTNER_ID });
  if (opts.tourId) {
    return `${base}/-l${opts.tourId}/?${params.toString()}`;
  }
  if (opts.query) {
    params.set("q", opts.query);
    return `${base}/s/?${params.toString()}`;
  }
  return `${base}/?${params.toString()}`;
}
