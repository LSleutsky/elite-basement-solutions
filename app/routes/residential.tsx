import {
  ArrowRight,
  Biohazard,
  Check,
  CloudRain,
  HeartHandshake,
  Home,
  HousePlus,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench
} from "lucide-react";
import { Link } from "react-router";

import { createMeta, getYearsOfExperience } from "@/utils";

export function meta() {
  return createMeta({
    title: "Residential Services | Elite Basement Solutions",
    description:
      "Comprehensive home improvement services for homeowners in PA, NJ & DE. Basement waterproofing, mold remediation, and complete home remodeling with lifetime warranty.",
    path: "residential"
  });
}

const yearsOfExperience = getYearsOfExperience();

const residentialServices = [
  {
    icon: CloudRain,
    title: "Basement Waterproofing",
    description:
      "Stop water infiltration permanently with custom-engineered drainage systems, sump pumps, and vapor barriers designed specifically for your home.",
    features: [
      "Interior drainage systems",
      "Sump pump installation",
      "Foundation crack repair",
      "Lifetime transferable warranty"
    ],
    href: "/waterproofing",
    color: "elite-teal"
  },
  {
    icon: Biohazard,
    title: "Mold Remediation",
    description:
      "Protect your family's health with certified mold removal, air quality restoration, and moisture control that eliminates mold at its source.",
    features: [
      "Certified mold inspection",
      "Complete removal & treatment",
      "Air quality restoration",
      "Prevention strategies"
    ],
    href: "/mold-remediation",
    color: "elite-olive"
  },
  {
    icon: HousePlus,
    title: "Home Remodeling",
    description:
      "Transform unused basement space into beautiful living areas. From home offices to entertainment rooms, we bring your vision to life.",
    features: [
      "Basement finishing",
      "Bathroom additions",
      "Custom renovations",
      "Full design services"
    ],
    href: "/home-remodeling",
    color: "elite-teal"
  }
];

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "Lifetime Warranty",
    description:
      "Our work is backed by a fully transferable lifetime warranty that protects your investment."
  },
  {
    icon: Users,
    title: "Family-Owned",
    description:
      "We treat every home like our own. Your family's safety and satisfaction come first."
  },
  {
    icon: Wrench,
    title: "Master Craftsmen",
    description: "Our technicians are trained experts with decades of combined experience."
  },
  {
    icon: HeartHandshake,
    title: "No Pressure",
    description:
      "Free estimates with honest advice. We help you make the right decision for your home."
  }
];

const commonProblems = [
  "Water pooling on basement floor",
  "Musty odors or visible mold",
  "Cracks in foundation walls",
  "High humidity levels",
  "Efflorescence (white mineral deposits)",
  "Peeling paint or drywall damage",
  "Warped or buckling floors",
  "Pest infiltration through gaps"
];

export default function ResidentialPage() {
  return (
    <article className="mx-auto max-w-6xl pb-24 md:pb-0">
      <header className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2">
          <p className="text-elite-teal mb-2 text-xs font-medium tracking-[0.2em]">
            RESIDENTIAL SERVICES
          </p>
          <h1 className="text-primary font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
            Your home deserves the best. We deliver it.
          </h1>
          <div className="bg-elite-teal/20 my-6 h-px w-24" />
          <p className="text-muted mt-4 text-base md:text-lg">
            For over {yearsOfExperience} years, families throughout Pennsylvania, New Jersey, and
            Delaware have trusted us to protect their homes and transform their living spaces. From
            emergency water problems to dream basement renovations, we handle it all.
          </p>
        </div>
        <div className="bg-elite-teal flex flex-col items-center justify-center rounded-2xl p-6 text-center">
          <Home className="mb-2 h-10 w-10 text-white/90" />
          <span className="text-2xl font-semibold text-white">2,500+</span>
          <p className="text-sm text-white/80">Homes Protected</p>
        </div>
      </header>
      {/* Services */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {residentialServices.map((service) => (
          <div
            key={service.title}
            className="bg-surface group relative overflow-hidden rounded-2xl p-6 md:p-8"
          >
            <div
              className={`bg-${service.color}/10 absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl transition-all group-hover:scale-150`}
            />
            <div className="relative">
              <div className={`bg-${service.color}/20 mb-4 inline-flex rounded-full p-3`}>
                <service.icon className={`text-${service.color} h-6 w-6`} />
              </div>
              <h2 className="text-primary mb-3 text-xl font-semibold">{service.title}</h2>
              <p className="text-muted mb-4 text-sm leading-relaxed">{service.description}</p>
              <ul className="mb-6 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="text-muted flex items-center gap-2 text-sm">
                    <Check className={`text-${service.color} shrink-0`} size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                className={`text-${service.color} inline-flex items-center gap-1 text-sm font-medium`}
                to={service.href}
              >
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </section>
      {/* Recognize These Warning Signs */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2">
          <div className="bg-elite-olive/20 mb-4 inline-flex rounded-full p-3">
            <Sparkles className="text-elite-olive h-6 w-6" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">
            Recognize These Warning Signs?
          </h2>
          <p className="text-muted mb-6 text-base leading-relaxed">
            {`Basement problems don't fix themselves. In fact, they get exponentially worse over time.
            What starts as a minor inconvenience can become a major structural issue or health
            hazard. If you're experiencing any of these signs, it's time to call the experts.`}
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {commonProblems.map((problem) => (
              <li key={problem} className="text-muted flex items-start gap-2 text-sm">
                <Check className="text-elite-olive mt-0.5 shrink-0" size={16} />
                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl bg-[#0d0d0d] p-6 text-center">
          <span className="text-4xl font-semibold text-white">98%</span>
          <p className="mt-2 text-sm text-white/60">of basements will experience</p>
          <p className="text-sm text-white/60">water problems at some point</p>
        </div>
      </section>
      {/* Why Homeowners Choose Us */}
      <section className="mb-4">
        <div className="bg-surface rounded-2xl p-6 md:p-8">
          <h2 className="text-primary mb-6 text-center font-serif text-2xl md:text-3xl">
            Why Homeowners Choose Us
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="bg-elite-teal/20 mx-auto mb-4 inline-flex rounded-full p-3">
                  <item.icon className="text-elite-teal h-6 w-6" />
                </div>
                <h3 className="text-primary mb-2 font-semibold">{item.title}</h3>
                <p className="text-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Simple Process */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2">
          <h2 className="text-primary mb-6 font-serif text-2xl md:text-3xl">Our Simple Process</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="bg-canvas rounded-xl p-4">
              <div className="bg-elite-teal mb-3 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-white">
                1
              </div>
              <h3 className="text-primary mb-1 font-semibold">Free Inspection</h3>
              <p className="text-muted text-sm">
                We thoroughly assess your situation and explain all findings in plain language.
              </p>
            </div>
            <div className="bg-canvas rounded-xl p-4">
              <div className="bg-elite-teal mb-3 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-white">
                2
              </div>
              <h3 className="text-primary mb-1 font-semibold">Custom Solution</h3>
              <p className="text-muted text-sm">
                We design a solution specifically for your home, not a one-size-fits-all approach.
              </p>
            </div>
            <div className="bg-canvas rounded-xl p-4">
              <div className="bg-elite-teal mb-3 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-white">
                3
              </div>
              <h3 className="text-primary mb-1 font-semibold">Expert Installation</h3>
              <p className="text-muted text-sm">
                Our master craftsmen complete the work efficiently with minimal disruption.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-elite-olive flex flex-col items-center justify-center rounded-2xl p-6 text-center">
          <span className="text-3xl font-semibold text-white">Same-Day</span>
          <p className="mt-2 text-sm text-white/80">Emergency response available</p>
          <p className="text-xs text-white/60">When water {`won't`} wait, neither do we</p>
        </div>
      </section>
      <section className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 text-center">
          <span className="text-elite-teal text-3xl font-semibold">4.9</span>
          <div className="text-elite-olive my-2">★★★★★</div>
          <p className="text-muted text-sm">Google Reviews</p>
        </div>
        <div className="bg-surface rounded-2xl p-6 text-center">
          <span className="text-elite-teal text-3xl font-semibold">A+</span>
          <p className="text-muted mt-2 text-sm">BBB Rating</p>
          <p className="text-muted text-xs">Accredited Business</p>
        </div>
        <div className="bg-surface rounded-2xl p-6 text-center">
          <span className="text-elite-teal text-3xl font-semibold">{yearsOfExperience}+</span>
          <p className="text-muted mt-2 text-sm">Years in Business</p>
          <p className="text-muted text-xs">Since 1987</p>
        </div>
      </section>
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#0d0d0d] p-6 md:flex-row md:p-8">
        <div>
          <p className="text-center text-lg font-medium text-white md:text-left md:text-xl">
            Ready to protect your home?
          </p>
          <p className="text-center text-sm text-white/60 md:text-left">
            Free inspection, honest advice, no obligation
          </p>
        </div>
        <Link
          className="bg-elite-teal inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          to="/contact"
        >
          Schedule Free Inspection <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
