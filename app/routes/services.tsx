import {
  ArrowRight,
  Biohazard,
  Check,
  CloudRain,
  Droplets,
  HardHat,
  HousePlus,
  ListOrdered,
  Paintbrush,
  ShieldCheck,
  Sparkles,
  Timer,
  Wrench
} from "lucide-react";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "Our Services | Elite Basement Solutions" },
    {
      name: "description",
      content:
        "Professional basement waterproofing, mold remediation, and home remodeling services in Southeastern Pennsylvania, New Jersey, and Northern Delaware."
    }
  ];
}

const moldFeatures = [
  "Certified mold inspection & testing",
  "Complete mold removal & treatment",
  "Air quality restoration",
  "Moisture source elimination",
  "Prevention & maintenance plans"
];

const remodelingFeatures = [
  "Full basement finishing",
  "Custom design & layout",
  "Electrical & plumbing",
  "Flooring & ceiling installation",
  "Egress windows & lighting"
];

const waterproofingFeatures = [
  "Interior & exterior drainage systems",
  "Sump pump installation & backup",
  "Wall encapsulation & vapor barriers",
  "Foundation crack repair",
  "Lifetime transferable warranty"
];

export default function Services() {
  return (
    <article className="mx-auto max-w-6xl pb-24 md:pb-0">
      <header className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2">
          <p className="text-elite-teal mb-2 text-xs font-medium tracking-[0.2em]">WHAT WE DO</p>
          <h1 className="text-primary font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
            Expert services for every basement need
          </h1>
          <p className="text-muted mt-4 text-base md:text-lg">
            From keeping water out to transforming your dream space, we deliver proven quality
            craftsmanship backed by decades of experience.
          </p>
        </div>
        <div className="bg-elite-teal flex flex-col items-center justify-center rounded-2xl p-6 text-center">
          <span className="mt-2 text-3xl font-semibold text-white">100%</span>
          <p className="text-white/80">Satisfaction Guaranteed</p>
        </div>
      </header>
      {/* Waterproofing */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2 lg:col-start-2 lg:row-span-2">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-4">
            <CloudRain className="text-elite-teal h-8 w-8" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">Waterproofing</h2>
          <p className="text-muted mb-6 max-w-xl text-base leading-relaxed md:text-lg">
            Water intrusion destroys basements, foundations, and property values. Our comprehensive
            waterproofing systems stop leaks permanently, protecting your home from the ground up.
            We address the root cause, not just the symptoms.
          </p>
          <ul className="mb-6 grid gap-2 sm:grid-cols-2">
            {waterproofingFeatures.map((feature) => (
              <li key={feature} className="text-muted flex items-start gap-2 text-sm">
                <Check className="text-elite-teal mt-0.5 shrink-0" size={16} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Link
            className="bg-elite-teal inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            to="/waterproofing"
          >
            Learn more <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:grid-cols-1 lg:grid-rows-2">
          <div className="bg-elite-olive flex flex-col items-center justify-center rounded-2xl p-6 text-center">
            <Droplets className="mb-2 h-8 w-8 text-white/80" />
            <span className="text-3xl font-semibold text-white">1,000+</span>
            <p className="mt-1 text-sm text-white/80">Basements waterproofed</p>
          </div>
          <div className="bg-surface flex items-center justify-center rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="bg-elite-teal/20 rounded-full p-3">
                <ShieldCheck className="text-elite-teal h-6 w-6" />
              </div>
              <div>
                <h3 className="text-primary font-semibold">Lifetime Warranty</h3>
                <p className="text-muted text-sm">Fully transferable to new owners</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mold Remediation */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2 lg:row-span-2">
          <div className="bg-elite-olive/20 mb-4 inline-flex rounded-full p-4">
            <Biohazard className="text-elite-olive h-8 w-8" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">Mold Remediation</h2>
          <p className="text-muted mb-6 max-w-xl text-base leading-relaxed md:text-lg">
            {`Mold is more than unsightly, it's a health hazard. Our certified technicians safely
              remove mold, treat affected areas, and eliminate the moisture sources that allow mold
              to thrive. Breathe easy knowing your home is truly clean.`}
          </p>
          <ul className="mb-6 grid gap-2 sm:grid-cols-2">
            {moldFeatures.map((feature) => (
              <li key={feature} className="text-muted flex items-start gap-2 text-sm">
                <Check className="text-elite-olive mt-0.5 shrink-0" size={16} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Link
            className="bg-elite-teal inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            to="/mold-remediation"
          >
            Learn more <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:row-span-2 lg:grid-cols-1 lg:grid-rows-2">
          <div className="flex flex-col items-center justify-center rounded-2xl bg-[#0d0d0d] p-6 text-center">
            <Sparkles className="mb-2 h-8 w-8 text-white/80" />
            <span className="text-3xl font-semibold text-white">99%</span>
            <p className="mt-1 text-sm text-white/60">Mold elimination rate</p>
          </div>
          <div className="bg-surface flex items-center justify-center rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="bg-elite-olive/20 rounded-full p-3">
                <HardHat className="text-elite-olive h-6 w-6" />
              </div>
              <div>
                <h3 className="text-primary font-semibold">Certified Experts</h3>
                <p className="text-muted text-sm">MICRO, CMI & EPA certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Remodeling */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2 lg:col-start-2 lg:row-span-2">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-4">
            <HousePlus className="text-elite-teal h-8 w-8" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">Home Remodeling</h2>
          <p className="text-muted mb-6 max-w-xl text-base leading-relaxed md:text-lg">
            {`Your basement has untapped potential. Whether you envision a home theater, gym, office,
              or extra living space, we bring your vision to life with expert know-how and
              attention to every minute detail. No project is too big or too small.`}
          </p>
          <ul className="mb-6 grid gap-2 sm:grid-cols-2">
            {remodelingFeatures.map((feature) => (
              <li key={feature} className="text-muted flex items-start gap-2 text-sm">
                <Check className="text-elite-teal mt-0.5 shrink-0" size={16} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Link
            className="bg-elite-teal inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            to="/home-remodeling"
          >
            Learn more <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:grid-cols-1 lg:grid-rows-2">
          <div className="bg-elite-teal flex flex-col items-center justify-center rounded-2xl p-6 text-center">
            <Paintbrush className="mb-2 h-8 w-8 text-white/80" />
            <span className="text-3xl font-semibold text-white">500+</span>
            <p className="mt-1 text-sm text-white/80">Basements transformed</p>
          </div>
          <div className="bg-surface flex items-center justify-center rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="bg-elite-teal/20 rounded-full p-3">
                <Timer className="text-elite-teal h-6 w-6" />
              </div>
              <div>
                <h3 className="text-primary font-semibold">On-Time Delivery</h3>
                <p className="text-muted text-sm">Projects completed as promised</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
            <ShieldCheck className="text-elite-teal h-6 w-6" />
          </div>
          <h3 className="text-primary mb-2 text-lg font-semibold">Licensed & Insured</h3>
          <p className="text-muted text-sm">
            Fully licensed contractors with comprehensive insurance coverage for your peace of mind.
          </p>
        </div>
        <div className="bg-surface rounded-2xl p-6">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
            <Wrench className="text-elite-teal h-6 w-6" />
          </div>
          <h3 className="text-primary mb-2 text-lg font-semibold">Quality Materials</h3>
          <p className="text-muted text-sm">
            We use only professional-grade materials and equipment, never knock-offs or shortcuts.
          </p>
        </div>
        <div className="bg-surface rounded-2xl p-6">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
            <ListOrdered className="text-elite-teal h-6 w-6" />
          </div>
          <h3 className="text-primary mb-2 text-lg font-semibold">Free Estimates</h3>
          <p className="text-muted text-sm">
            No-obligation inspections and detailed quotes so you know exactly what to expect.
          </p>
        </div>
      </section>
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#0d0d0d] p-6 md:flex-row md:p-8">
        <div>
          <p className="text-lg font-medium text-white md:text-xl">Ready to get started?</p>
          <p className="text-sm text-white/60">Schedule your free consultation today</p>
        </div>
        <Link
          className="bg-elite-teal rounded-full px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          to="/contact"
        >
          Get Free Quote
        </Link>
      </div>
    </article>
  );
}
