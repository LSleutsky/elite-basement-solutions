import ContactView from "@elite/ui/components/ContactView";

import { siteConfig } from "@/config/site";
import { createMeta } from "@/utils";

export function meta() {
  return createMeta({
    title: "Contact Us | Elite Basement Solutions",
    description:
      "Get a free estimate for basement waterproofing, mold remediation, or basement remodeling in PA and NJ. Contact Elite Basement Solutions today.",
    path: "contact"
  });
}

export default function Contact() {
  return <ContactView config={siteConfig} />;
}
