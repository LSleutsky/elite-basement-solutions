import { LucideIcon } from "lucide-react";

export interface NavLink {
  name: string;
  href: string;
}

export interface CommandPalettePage {
  name: string;
  href: string;
  icon: LucideIcon;
  keywords: string[];
}

export interface ContactService {
  value: string;
  label: string;
}

export interface SiteConfig {
  brandName: string;
  baseUrl: string;
  defaultOgImage: string;
  phone: string;
  phoneHref: string;
  navLinks: NavLink[];
  trustItems: string[];
  commandPalettePages: CommandPalettePage[];
  imageKitFolder: string;
  email: string;
  contactServices: ContactService[];
  contactHeading: string;
  contactIntro: string;
}
