import type { Route } from "./+types/projects";

import { Biohazard, BrickWall, CloudRain, HousePlus } from "lucide-react";

import ProjectsView, { CategoryData, CategoryMeta } from "@elite/ui/components/ProjectsView";

import { siteConfig } from "@/config/site";
import { createMeta } from "@/utils";

export function meta() {
  return createMeta({
    title: "Project Gallery | Elite Basement Solutions",
    description:
      "Browse our project gallery showcasing basement waterproofing, mold remediation, foundation repair, and basement remodeling work throughout Southeastern Pennsylvania and New Jersey.",
    path: "projects"
  });
}

export async function clientLoader() {
  const response = await fetch("/api/images");
  const data: { categories: CategoryData[] } = await response.json();

  return data;
}

const categoryMeta: Record<string, CategoryMeta> = {
  waterproofing: {
    name: "Waterproofing",
    description:
      "Interior drainage systems, sump pump installations, wall encapsulation, and complete basement waterproofing solutions.",
    icon: CloudRain,
    color: "bg-blue-500/20 text-blue-400"
  },
  mold: {
    name: "Mold Remediation",
    description:
      "Professional mold removal, containment, HEPA filtration, and air quality restoration projects.",
    icon: Biohazard,
    color: "bg-emerald-500/20 text-emerald-400"
  },
  foundation: {
    name: "Foundation Repair",
    description:
      "Crack repair, wall stabilization, carbon fiber reinforcement, and structural restoration work.",
    icon: BrickWall,
    color: "bg-amber-500/20 text-amber-400"
  },
  remodeling: {
    name: "Basement Renovations",
    description:
      "Basement finishing, custom renovations, flooring, ceilings, and complete living space transformations.",
    icon: HousePlus,
    color: "bg-purple-500/20 text-purple-400"
  }
};

const categoryOrder = ["waterproofing", "mold", "foundation", "remodeling"];

export default function Projects({ loaderData }: Route.ComponentProps) {
  return (
    <ProjectsView
      categories={loaderData.categories}
      categoryMeta={categoryMeta}
      categoryOrder={categoryOrder}
      config={siteConfig}
      ctaLine="Let us revamp your living space into something amazing"
      intro="Browse through our completed projects across waterproofing, mold remediation, foundation repair, and basement renovations. Each project showcases our commitment to quality craftsmanship and customer satisfaction."
    />
  );
}
