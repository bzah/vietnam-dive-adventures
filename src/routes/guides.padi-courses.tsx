import { createFileRoute } from "@tanstack/react-router";
import { GuideLayout } from "@/components/GuideLayout";
import { pageHead } from "@/lib/seo";
import padiImg from "@/assets/padi-courses.jpg";

export const Route = createFileRoute("/guides/padi-courses")({
  head: () =>
    pageHead({
      title: "PADI Courses in Vietnam — Where to Certify & Cost (2026) | VietnamDiving.com",
      description:
        "Complete guide to PADI scuba diving courses in Vietnam. Where to take Open Water, Advanced and Divemaster — costs, schools, and what to expect.",
      image: padiImg,
      path: "/guides/padi-courses",
    }),
  component: () => (
    <GuideLayout
      eyebrow="Guide · PADI"
      title="PADI courses in Vietnam"
      intro="Vietnam is one of South-East Asia's most affordable places to certify as a scuba diver — but quality varies wildly between schools. Here's how to choose."
      image={padiImg}
    >
      <h2>What courses are available?</h2>
      <p>Every major Vietnamese diving destination — Nha Trang, Phu Quoc, Con Dao, and Cham Islands — runs the full PADI ladder: Discover Scuba (one day), Open Water (3–4 days), Advanced Open Water (2 days), Rescue Diver (3 days), and Divemaster (4–8 weeks).</p>
      <h2>How much does it cost?</h2>
      <p>Expect to pay roughly:</p>
      <ul>
        <li><strong>Discover Scuba Diving:</strong> $55–$90 (one or two dives, no certification).</li>
        <li><strong>Open Water Diver:</strong> $320–$420 (4 days, includes manual, pool, 4 open-water dives, certification).</li>
        <li><strong>Advanced Open Water:</strong> $260–$340 (5 adventure dives over 2 days).</li>
        <li><strong>Divemaster:</strong> $850–$1,400 (full internship over 4–8 weeks).</li>
      </ul>
      <h2>How to choose a dive school</h2>
      <p>Look for <strong>PADI 5-Star Dive Resorts</strong> with verifiable reviews on Google and TripAdvisor. Always confirm: maximum group size (4:1 student-to-instructor for Open Water is the regulation), age and condition of equipment, and whether nitrox is available for Advanced courses.</p>
      <h2>Best place to certify</h2>
      <p>Nha Trang is the most popular for first-time divers — short boat rides, easy conditions, and the most schools to choose from. Phu Quoc is quieter and warmer in the dry season. Con Dao is for divers who already have Open Water and want to do their Advanced in pristine conditions.</p>
      <h2>Booking</h2>
      <p>Most courses can be booked instantly online. Browse our curated <a href="/tours">tours and courses page</a> for live prices and availability via GetYourGuide.</p>
    </GuideLayout>
  ),
});
