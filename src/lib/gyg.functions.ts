import { createServerFn } from "@tanstack/react-start";
import { PARTNER_ID } from "@/lib/getyourguide";

export interface GygTour {
  id: number;
  title: string;
  abstract?: string;
  url: string;
  price?: { amount: number; currency: string };
  rating?: number;
  review_count?: number;
  duration?: string;
  photo?: string;
  city?: string;
}

interface RawTour {
  tour_id?: number;
  title?: string;
  abstract?: string;
  url?: string;
  prices?: { from?: number; currency?: string };
  price?: { amount?: number; currency?: string };
  overall_rating?: number;
  number_of_ratings?: number;
  duration?: string;
  pictures?: Array<{ urls?: Array<{ url?: string }> }>;
  photos?: Array<{ url?: string }>;
  city_name?: string;
}

function appendPartner(url: string) {
  if (!url) return url;
  try {
    const u = new URL(url);
    u.searchParams.set("partner_id", PARTNER_ID);
    return u.toString();
  } catch {
    const sep = url.includes("?") ? "&" : "?";
    return `${url}${sep}partner_id=${PARTNER_ID}`;
  }
}

function normalize(t: RawTour): GygTour {
  const photo =
    t.pictures?.[0]?.urls?.[0]?.url ||
    t.photos?.[0]?.url ||
    "";
  const amount = t.prices?.from ?? t.price?.amount;
  const currency = t.prices?.currency ?? t.price?.currency ?? "EUR";
  return {
    id: t.tour_id ?? 0,
    title: t.title ?? "Untitled tour",
    abstract: t.abstract,
    url: appendPartner(t.url ?? `https://www.getyourguide.com/-l${t.tour_id}/`),
    price: amount ? { amount, currency } : undefined,
    rating: t.overall_rating,
    review_count: t.number_of_ratings,
    duration: t.duration,
    photo,
    city: t.city_name,
  };
}

/** Search GetYourGuide tours via Partner API. Returns [] on error. */
export const searchGygTours = createServerFn({ method: "GET" })
  .inputValidator((input: { q: string; limit?: number }) => input)
  .handler(async ({ data }): Promise<{ tours: GygTour[]; error: string | null }> => {
    const apiKey = process.env.GETYOURGUIDE_API_KEY;
    if (!apiKey) {
      return { tours: [], error: "GETYOURGUIDE_API_KEY is not configured" };
    }
    const params = new URLSearchParams({
      q: data.q,
      cnt_language: "en",
      currency: "USD",
      limit: String(data.limit ?? 12),
    });
    const url = `https://api.getyourguide.com/1/tours?${params.toString()}`;
    try {
      const res = await fetch(url, {
        headers: {
          "X-ACCESS-TOKEN": apiKey,
          Accept: "application/json",
        },
      });
      if (!res.ok) {
        const body = await res.text();
        console.error(`GYG API ${res.status}: ${body.slice(0, 300)}`);
        return { tours: [], error: `GetYourGuide API returned ${res.status}` };
      }
      const json = (await res.json()) as { data?: { tours?: RawTour[] }; tours?: RawTour[] };
      const raw = json.data?.tours ?? json.tours ?? [];
      return { tours: raw.map(normalize), error: null };
    } catch (e) {
      console.error("GYG fetch failed:", e);
      return { tours: [], error: "Could not reach GetYourGuide. Showing curated picks instead." };
    }
  });
