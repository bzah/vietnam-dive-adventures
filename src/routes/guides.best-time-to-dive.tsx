import { createFileRoute } from "@tanstack/react-router";
import { GuideLayout } from "@/components/GuideLayout";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/hero-diving.jpg";

export const Route = createFileRoute("/guides/best-time-to-dive")({
  head: () =>
    pageHead({
      title: "Best Time to Dive in Vietnam — Month-by-Month Season Guide for Nha Trang, Phu Quoc, Con Dao & Cham Islands (2026)",
      description:
        "When is the best time to dive in Vietnam? A region-by-region breakdown of Vietnam's twin monsoon system, with month-by-month visibility, sea temperature and wind data for Nha Trang (Feb–Oct), Phu Quoc (Nov–May), Con Dao (Apr–Oct) and the Cham Islands (Mar–Sep). Includes the only month worth avoiding nationwide and the best windows for sea-turtle and whale-shark encounters.",
      image: hero,
      path: "/guides/best-time-to-dive",
      keywords: "best time to dive Vietnam, Vietnam diving season, Nha Trang diving season, Phu Quoc diving season, Con Dao diving season, Cham Islands diving season, Vietnam monsoon diving, Vietnam dive visibility by month, when to dive Vietnam, Vietnam sea temperature diving, whale shark Vietnam, sea turtle Con Dao",
              type: "article",
    }),
  component: () => (
    <GuideLayout
      eyebrow="Guide · Season"
      title="Best time to dive in Vietnam"
      intro="Vietnam's S-shaped coastline straddles two monsoon systems, which means there is always somewhere good to dive — but never everywhere at once."
      image={hero}
    >
      <h2>Nha Trang & Central Coast (Feb – Oct)</h2>
      <p>The northeast monsoon shuts the central coast from November through January. Conditions reopen in February and peak from April to August with 15–25 m visibility. Avoid October — the wet season tail can bring sudden storms.</p>
      <h2>Phu Quoc (Nov – May)</h2>
      <p>Phu Quoc runs on the opposite calendar: dry season November to May, with the clearest water in February and March. From June onwards the southwest monsoon brings rain and reduces visibility to under 10 m.</p>
      <h2>Con Dao (Apr – Oct)</h2>
      <p>The remote Con Dao archipelago is exposed and only safely diveable in the calm months from April to October. May and June are best for sea turtle nesting encounters.</p>
      <h2>Cham Islands / Hoi An (Mar – Sep)</h2>
      <p>Boats only run from March to September — the rest of the year the Cham archipelago is closed to tourism.</p>
      <h2>The short answer</h2>
      <p>If you want to dive in <strong>December or January</strong>, head to Phu Quoc. For <strong>April to August</strong>, Nha Trang and Con Dao both shine. <strong>October</strong> is the only month worth avoiding outright across the country.</p>
    </GuideLayout>
  ),
});
