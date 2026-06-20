import { Biohazard, CloudRain, HousePlus } from "lucide-react";

import HomeView, { HomeServiceCard } from "@elite/ui/components/HomeView";

import FullLogo from "@/components/FullLogo";

import { createMeta } from "@/utils";

export function meta() {
  return createMeta({
    title: "Elite Basement Solutions | Basement Waterproofing, Mold Remediation & Remodeling",
    description:
      "Professional basement waterproofing, mold remediation, and basement remodeling services in PA and NJ. Licensed, insured, and backed by a lifetime warranty."
  });
}

const serviceCards: HomeServiceCard[] = [
  {
    icon: CloudRain,
    title: "Waterproofing",
    description:
      "Stop leaks permanently with our proven basement waterproofing systems. Interior drains, sump pumps, and wall encapsulation.",
    features: [
      "Interior & Exterior Solutions",
      "Precise Drainage Systems",
      "Sump Pump Installations",
      "Lifetime Transferable Warranty"
    ],
    href: "/waterproofing",
    featured: true,
    blurAccent: "teal"
  },
  {
    icon: Biohazard,
    title: "Mold Remediation",
    description:
      "Certified mold removal that protects your family's health. We eliminate mold at the source.",
    href: "/mold-remediation",
    blurAccent: "olive"
  },
  {
    icon: HousePlus,
    title: "Basement Renovations",
    description:
      "Transform your basement into a beautiful living space. Full renovations, custom finishes.",
    href: "/basement-renovations",
    blurAccent: "teal"
  }
];

const quickLinks = [
  { name: "Residential", description: "Protect your home", href: "/residential" },
  { name: "Commercial", description: "Protect your business", href: "/commercial" }
];

export default function Home() {
  return (
    <HomeView
      bannerText={`Protect what matters. Transform what's possible.`}
      customSolutionTitle="Need a custom solution?"
      eyebrow="HOME IMPROVEMENT EXPERTS"
      headlines={[
        { subject: "basements", accent: "beautiful." },
        { subject: "homes", accent: "healthy." },
        { subject: "spaces", accent: "elite." }
      ]}
      logo={<FullLogo className="h-auto w-full max-w-[440px] md:max-w-[480px] lg:max-w-[400px]" />}
      quickLinks={quickLinks}
      resourcesSubtitle="FAQs, guides, and expert tips for home care"
      serviceCards={serviceCards}
    />
  );
}
