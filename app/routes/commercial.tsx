import {
  ArrowRight,
  Biohazard,
  Building2,
  Check,
  Clock,
  CloudRain,
  FileCheck,
  HardHat,
  HeartPulse,
  Scale,
  ShieldCheck,
  Store,
  Users,
  Warehouse
} from "lucide-react";
import { Link } from "react-router";

import { createMeta, getYearsOfExperience } from "@/utils";

export function meta() {
  return createMeta({
    title: "Commercial Services | Elite Basement Solutions",
    description:
      "Professional commercial waterproofing, mold remediation, and facility restoration for businesses in PA, NJ & DE. Minimize downtime, maximize protection.",
    path: "commercial"
  });
}

const yearsOfExperience = getYearsOfExperience();

const commercialServices = [
  {
    icon: CloudRain,
    title: "Commercial Waterproofing",
    description:
      "Large-scale waterproofing solutions for commercial foundations, parking structures, warehouses, and multi-unit buildings. Engineered for durability and code compliance.",
    features: [
      "Foundation waterproofing",
      "Parking structure protection",
      "Below-grade sealing",
      "Drainage system design"
    ]
  },
  {
    icon: Biohazard,
    title: "Mold Remediation",
    description:
      "Certified commercial mold removal that meets OSHA and EPA standards. We work around your schedule to minimize business disruption and liability exposure.",
    features: [
      "OSHA-compliant protocols",
      "Air quality certification",
      "Documentation for insurers",
      "Preventive maintenance plans"
    ]
  },
  {
    icon: Building2,
    title: "Facility Restoration",
    description:
      "Complete restoration services for commercial spaces affected by water damage, mold, or structural issues. Fast turnaround to get you back in business.",
    features: [
      "Water damage restoration",
      "Structural repairs",
      "Interior buildouts",
      "Code compliance updates"
    ]
  }
];

const industriesServed = [
  { icon: Building2, name: "Office Buildings", description: "Protect your investment and tenants" },
  { icon: Store, name: "Retail Spaces", description: "Keep customers safe and comfortable" },
  { icon: Warehouse, name: "Warehouses", description: "Protect inventory from moisture damage" },
  {
    icon: HeartPulse,
    name: "Healthcare Facilities",
    description: "Meet strict health and safety codes"
  },
  {
    icon: Users,
    name: "Multi-Family Housing",
    description: "Protect residents and reduce liability"
  },
  {
    icon: HardHat,
    name: "Industrial Facilities",
    description: "Heavy-duty solutions for harsh conditions"
  }
];

const management = [
  "Priority emergency response",
  "Volume pricing available",
  "Preventive maintenance plans",
  "Multi-property coordination",
  "Detailed inspection reports",
  "Financing options available"
];

const whyCommercialClients = [
  {
    icon: Clock,
    title: "Minimal Downtime",
    description:
      "We understand time is money. Our crews work efficiently, often during off-hours, to minimize disruption to your operations."
  },
  {
    icon: FileCheck,
    title: "Full Documentation",
    description:
      "Complete documentation for insurance claims, property records, and regulatory compliance. We make paperwork painless."
  },
  {
    icon: Scale,
    title: "Liability Protection",
    description:
      "Proper remediation protects you from tenant complaints, employee health claims, and potential lawsuits."
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description:
      "Fully licensed contractors with comprehensive liability coverage. Your property and our work are protected."
  }
];

const commercialStats = [
  { value: "500+", label: "Commercial Projects", subLabel: "Completed successfully" },
  { value: "24hr", label: "Emergency Response", subLabel: "Round-the-clock availability" },
  { value: "100%", label: "Code Compliance", subLabel: "Every project, every time" }
];

export default function CommercialPage() {
  return (
    <article className="mx-auto max-w-6xl pb-24 md:pb-0">
      <header className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2">
          <p className="text-elite-teal mb-2 text-xs font-medium tracking-[0.2em]">
            COMMERCIAL SERVICES
          </p>
          <h1 className="text-primary font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
            Protect your property. Protect your business.
          </h1>
          <div className="bg-elite-teal/20 my-6 h-px w-24" />
          <p className="text-muted mt-4 text-base md:text-lg">
            Commercial properties face unique challenges. Water intrusion, mold growth, and
            structural issues can disrupt operations, create liability, and damage your bottom line.
            With {yearsOfExperience}+ years of experience, we deliver solutions that work at scale.
          </p>
        </div>
        <div className="bg-elite-olive flex flex-col items-center justify-center rounded-2xl p-6 text-center">
          <Building2 className="mb-2 h-10 w-10 text-white/90" />
          <span className="text-2xl font-semibold text-white">500+</span>
          <p className="text-sm text-white/80">Commercial Projects</p>
        </div>
      </header>
      <section className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {commercialStats.map((stat) => (
          <div
            key={stat.label}
            className="bg-surface flex items-center justify-center rounded-2xl p-6 text-center"
          >
            <div>
              <span className="text-elite-teal text-3xl font-semibold">{stat.value}</span>
              <p className="text-primary mt-1 font-medium">{stat.label}</p>
              <p className="text-muted text-sm">{stat.subLabel}</p>
            </div>
          </div>
        ))}
      </section>
      {/* Services */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {commercialServices.map((service) => (
          <div key={service.title} className="bg-surface rounded-2xl p-6 md:p-8">
            <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
              <service.icon className="text-elite-teal h-6 w-6" />
            </div>
            <h2 className="text-primary mb-3 text-xl font-semibold">{service.title}</h2>
            <p className="text-muted mb-4 text-sm leading-relaxed">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="text-muted flex items-center gap-2 text-sm">
                  <Check className="text-elite-teal shrink-0" size={16} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      {/* Industries We Serve */}
      <section className="mb-4">
        <div className="bg-surface rounded-2xl p-6 md:p-8">
          <h2 className="text-primary mb-6 text-center font-serif text-2xl md:text-3xl">
            Industries We Serve
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industriesServed.map((industry) => (
              <div key={industry.name} className="bg-canvas flex items-center gap-4 rounded-xl p-4">
                <div className="bg-elite-olive/20 rounded-full p-3">
                  <industry.icon className="text-elite-olive h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-primary font-semibold">{industry.name}</h3>
                  <p className="text-muted text-sm">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Commercial Clients Choose Us */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {whyCommercialClients.map((item) => (
          <div key={item.title} className="bg-surface rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="bg-elite-teal/20 shrink-0 rounded-full p-3">
                <item.icon className="text-elite-teal h-6 w-6" />
              </div>
              <div>
                <h3 className="text-primary mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
      {/* Property Managers & Building Owners */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2">
          <h2 className="text-primary mb-4 font-serif text-2xl md:text-3xl">
            Property Managers & Building Owners
          </h2>
          <p className="text-muted mb-4 text-base leading-relaxed">
            Managing multiple properties means managing multiple risks. Water damage and mold
            {` don't`} just affect one unit, they can spread quickly and create building-wide
            problems. Tenant complaints, health concerns, and potential litigation can follow.
          </p>
          <p className="text-muted mb-6 text-base leading-relaxed">
            We offer priority service agreements for property managers, including regular
            inspections, preventive maintenance, and guaranteed response times. Stay ahead of
            problems before they become emergencies.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {management.map((item) => (
              <div key={item} className="text-muted flex items-center gap-2 text-sm">
                <Check className="text-elite-olive h-4 w-4 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-elite-teal flex flex-1 flex-col items-center justify-center rounded-2xl p-6 text-center">
            <span className="text-3xl font-semibold text-white">2-Hour</span>
            <p className="mt-1 text-sm text-white/80">Emergency Response</p>
            <p className="text-xs text-white/60">For priority accounts</p>
          </div>
          <div className="bg-surface flex flex-1 items-center justify-center rounded-2xl p-6 text-center">
            <div>
              <span className="text-elite-teal text-2xl font-semibold">Preventive</span>
              <p className="text-primary mt-1 font-medium">Maintenance Plans</p>
              <p className="text-muted text-sm">Stop problems before they start</p>
            </div>
          </div>
        </div>
      </section>
      {/* Emergency Commercial Response */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="flex flex-col items-center justify-center rounded-2xl bg-[#0d0d0d] p-6 text-center lg:col-span-1">
          <Clock className="mb-2 h-8 w-8 text-white/80" />
          <span className="text-3xl font-semibold text-white">24/7</span>
          <p className="mt-1 text-sm text-white/60">Emergency Service</p>
          <p className="text-xs text-white/40">Water {`doesn't`} wait, neither do we</p>
        </div>
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2">
          <h2 className="text-primary mb-4 font-serif text-2xl md:text-3xl">
            Emergency Commercial Response
          </h2>
          <p className="text-muted mb-4 text-base leading-relaxed">
            When water intrusion or mold is discovered in a commercial space, every hour counts.
            Inventory damage, business interruption, and liability exposure grow exponentially. Our
            commercial emergency team is equipped to handle large-scale incidents quickly and
            professionally.
          </p>
          <p className="text-muted text-base leading-relaxed">
            We coordinate with your insurance company, document everything for claims, and work
            around your business hours to minimize disruption. {`You'll`} have a single point of
            contact throughout the entire process.
          </p>
        </div>
      </section>
      {/* Compliance & Certifications */}
      <section className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="bg-surface rounded-2xl p-6 text-center">
          <div className="bg-elite-teal/20 mx-auto mb-3 inline-flex rounded-full p-3">
            <FileCheck className="text-elite-teal h-5 w-5" />
          </div>
          <p className="text-primary text-sm font-semibold">OSHA Compliant</p>
          <p className="text-muted text-xs">Safety first, always</p>
        </div>
        <div className="bg-surface rounded-2xl p-6 text-center">
          <div className="bg-elite-olive/20 mx-auto mb-3 inline-flex rounded-full p-3">
            <ShieldCheck className="text-elite-olive h-5 w-5" />
          </div>
          <p className="text-primary text-sm font-semibold">Fully Insured</p>
          <p className="text-muted text-xs">Liability coverage</p>
        </div>
        <div className="bg-surface rounded-2xl p-6 text-center">
          <div className="bg-elite-teal/20 mx-auto mb-3 inline-flex rounded-full p-3">
            <Biohazard className="text-elite-teal h-5 w-5" />
          </div>
          <p className="text-primary text-sm font-semibold">Mold Certified</p>
          <p className="text-muted text-xs">EPA & IICRC standards</p>
        </div>
        <div className="bg-surface rounded-2xl p-6 text-center">
          <div className="bg-elite-olive/20 mx-auto mb-3 inline-flex rounded-full p-3">
            <HardHat className="text-elite-olive h-5 w-5" />
          </div>
          <p className="text-primary text-sm font-semibold">Licensed</p>
          <p className="text-muted text-xs">PA, NJ & DE</p>
        </div>
      </section>
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#0d0d0d] p-6 md:flex-row md:p-8">
        <div>
          <p className="text-center text-lg font-medium text-white md:text-left md:text-xl">
            Need a commercial assessment?
          </p>
          <p className="text-center text-sm text-white/60 md:text-left">
            Free site evaluation for property managers and business owners
          </p>
        </div>
        <Link
          className="bg-elite-teal inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          to="/contact"
        >
          Request Quote <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
