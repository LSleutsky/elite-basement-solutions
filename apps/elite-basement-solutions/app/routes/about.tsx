import AboutView from "@elite/ui/components/AboutView";

import { createMeta } from "@/utils";

export function meta() {
  return createMeta({
    title: "About Us | Elite Basement Solutions",
    description:
      // TODO add back `Northern Delaware` to description when delaware service launches
      "Learn about Elite Basement Solutions - your trusted experts in basement waterproofing, mold remediation, and basement remodeling in Southeastern Pennsylvania and New Jersey.",
    path: "about"
  });
}

const whyChooseUs = [
  "Lifetime transferable warranty on all waterproofing",
  "Free, no-obligation inspections and estimates",
  "Same-day emergency response available",
  "Financing options for every budget",
  "Military, police, teacher, and first responder discounts",
  "Fully licensed and insured"
];

export default function About() {
  return (
    <AboutView
      equipmentText={`We invest in the latest industry equipment and technology to ensure every job is done right the first time. From advanced moisture and mold detection, to commercial-grade waterproofing systems, you'll never need to worry about knock-offs masquerading as brand names.`}
      headline="Building trust, one basement at a time, one community at a time."
      qualityPhoto={{ src: "/elite-basement-quality.jpg", alt: "Quality craftsmanship example" }}
      resourcesSubtitle="Learn about waterproofing, mold prevention, and proper home care"
      story={
        <>
          {`Founded in 1987, Elite Basement Solutions has grown from a small family operation to
          Southeastern Pennsylvania and New Jersey's most trusted name in basement services. Our commitment to
          quality craftsmanship and honest service has earned us `}
          <em>thousands</em>
          {` of satisfied customers and a reputation that speaks for itself. Everyone `}
          <em>says</em>
          {` they're the best, but when it's game-time, the difference between falling flat and actually delivering
          is the only equalizer that matters.`}
        </>
      }
      teamPhoto={{
        src: "/elite-basement-worker.png",
        alt: "Elite Basement Solutions team at work"
      }}
      whyChooseUs={whyChooseUs}
    />
  );
}
