import {
  Biohazard,
  BookOpenText,
  Building2,
  CloudRain,
  Home,
  HousePlus,
  Images,
  Library,
  Mail,
  Map
} from "lucide-react";

import { SiteConfig } from "@elite/ui/types";

export const siteConfig: SiteConfig = {
  brandName: "Elite Basement Solutions",
  baseUrl: "https://elitebasementsolutions.com",
  defaultOgImage: "/elite-logo.png",
  phone: "(800) 902-5311",
  phoneHref: "18009025311",
  imageKitFolder: "elite-basement-solutions",
  email: "info@elitebasementsolutions.com",
  contactServices: [
    { value: "waterproofing", label: "Waterproofing" },
    { value: "mold-remediation", label: "Mold Remediation" },
    { value: "basement-renovations", label: "Basement Renovations" }
  ],
  contactHeading: "Let's protect your investment together.",
  contactIntro:
    "Ready to solve your water and mold problems for good? Fill out the form below and one of our experts will reach out within 24 hours to schedule your free, no-obligation inspection.",
  navLinks: [
    { name: "Services", href: "services" },
    { name: "Projects", href: "projects" },
    { name: "About", href: "about" }
  ],
  trustItems: ["Licensed & Insured", "Lifetime Warranty", "Free Estimates"],
  commandPalettePages: [
    { name: "Home", href: "/", icon: Home, keywords: ["start", "main", "landing"] },
    { name: "About", href: "/about", icon: BookOpenText, keywords: ["about", "who we are"] },
    {
      name: "Residential",
      href: "/residential",
      icon: Home,
      keywords: ["home", "homeowner", "house", "residential services"]
    },
    {
      name: "Commercial",
      href: "/commercial",
      icon: Building2,
      keywords: ["business", "commercial", "property", "building", "office", "warehouse"]
    },
    {
      name: "Waterproofing",
      href: "/waterproofing",
      icon: CloudRain,
      keywords: ["water", "basement", "leak", "drainage", "sump", "pump", "flood"]
    },
    {
      name: "Mold Remediation",
      href: "/mold-remediation",
      icon: Biohazard,
      keywords: ["mold", "mildew", "removal", "health", "air quality"]
    },
    {
      name: "Basement Renovations",
      href: "/basement-renovations",
      icon: HousePlus,
      keywords: ["renovation", "remodel", "basement finishing", "kitchen", "bathroom"]
    },
    {
      name: "Projects",
      href: "/projects",
      icon: Images,
      keywords: ["gallery", "photos", "pictures", "portfolio", "work", "examples"]
    },
    {
      name: "Service Areas",
      href: "/service-areas",
      icon: Map,
      keywords: ["maps", "locations", "regions", "coverage", "where we go", "where we work"]
    },
    {
      name: "Resources",
      href: "/resources",
      icon: Library,
      keywords: ["knowledge", "faq", "learn", "glossary", "terms", "help", "guide"]
    },
    {
      name: "Contact",
      href: "/contact",
      icon: Mail,
      keywords: ["quote", "estimate", "call", "email"]
    }
  ]
};
