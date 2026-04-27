import { createFileRoute } from "@tanstack/react-router";
import { GuideLayout } from "@/components/GuideLayout";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/guides/dive-medical")({
  head: () =>
    pageHead({
      title: "Dive Medical Certificate in Vietnam — Approved Practitioners in Saigon, Hanoi, Nha Trang & Phu Quoc (2026)",
      description:
        "If your PADI / RSTC medical questionnaire flagged asthma, diabetes, hypertension, recent surgery or any other condition, you'll need a dive doctor sign-off before scuba diving in Vietnam. This guide lists trusted clinics and practitioners in Ho Chi Minh City, Hanoi, Nha Trang and Phu Quoc, what to bring to the appointment, typical pricing in USD, and how long to leave between the medical and your first dive.",
      path: "/guides/dive-medical",
      keywords: "dive medical Vietnam, scuba medical certificate Vietnam, PADI medical questionnaire Vietnam, dive doctor Saigon, dive doctor Hanoi, dive doctor Nha Trang, dive doctor Phu Quoc, Family Medical Practice Vietnam, International SOS Vietnam, Vinmec dive medical, fitness to dive Vietnam, RSTC medical Vietnam",
              type: "article",
    }),
  component: () => (
    <GuideLayout
      eyebrow="Guide · Safety"
      title="Dive medical certificate in Vietnam"
      intro="If your PADI medical questionnaire flags any condition — asthma, diabetes, recent surgery — you'll need a dive medical practitioner sign-off before you can dive. Here's where to find one in Vietnam."
    >
      <h2>Who can sign a dive medical?</h2>
      <p>Any licensed medical doctor can technically sign a recreational diver medical, but most dive centres want a doctor with hyperbaric or sports-medicine experience. International SOS clinics in Vietnam usually have a designated dive doctor on staff.</p>
      <h2>Ho Chi Minh City (Saigon)</h2>
      <ul>
        <li><strong>Family Medical Practice Saigon</strong> — Diamond Plaza, District 1. Walk-in dive medicals available, ~$80.</li>
        <li><strong>International SOS Clinic Saigon</strong> — 167A Nam Ky Khoi Nghia, District 3.</li>
      </ul>
      <h2>Hanoi</h2>
      <ul>
        <li><strong>Family Medical Practice Hanoi</strong> — Van Phuc Compound. Same form and pricing as Saigon.</li>
        <li><strong>International SOS Clinic Hanoi</strong> — 51 Xuan Dieu, Tay Ho.</li>
      </ul>
      <h2>Nha Trang & Phu Quoc</h2>
      <p>Most dive centres in Nha Trang have a partner GP they refer to for same-day medicals. Ask your school before you arrive. Phu Quoc has Vinmec International Hospital, which can issue a fitness-to-dive letter.</p>
      <h2>Bring with you</h2>
      <ul>
        <li>The completed PADI / RSTC medical questionnaire</li>
        <li>Passport</li>
        <li>Any relevant prescription or specialist letter</li>
      </ul>
      <p>Allow 24 hours between your medical and your first dive in case the doctor wants follow-up tests.</p>
    </GuideLayout>
  ),
});
