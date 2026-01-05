import { ArrowRight, Biohazard, Check, CloudRain, HousePlus, Library } from "lucide-react";
import { Link } from "react-router";

import Logo from "@/components/Logo";

import { getYearsOfExperience } from "@/utils";

export function meta() {
  return [
    { title: "Elite Basement Solutions" },
    { name: "description", content: "Welcome to Elite Basement Solutions!" }
  ];
}

const services = [
  { name: "Residential", description: "Stop leaks forever", href: "/waterproofing" },
  { name: "Commercial", description: "Certified & safe", href: "/mold-remediation" }
];

const yearsOfExcellence = getYearsOfExperience();

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl pb-24 md:pb-0">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-surface order-1 flex items-center justify-center rounded-2xl p-8 md:col-span-2 lg:col-span-1 lg:col-start-1 lg:row-span-3">
          <Logo
            className="h-auto w-full max-w-[440px] md:max-w-[480px] lg:max-w-[400px]"
            linkToHome={false}
            variant="full"
          />
        </div>
        <div className="bg-surface order-2 rounded-2xl p-6 md:col-span-2 md:p-8 lg:col-span-2 lg:col-start-2 lg:row-span-2">
          <p className="text-elite-teal mb-4 text-xs font-medium tracking-[0.2em] md:text-sm">
            HOME IMPROVEMENT EXPERTS
          </p>
          <div className="space-y-3 md:space-y-4">
            <h1 className="font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
              <span className="text-primary">We make </span>
              <span className="text-primary">basements </span>
              <span className="text-elite-teal">beautiful.</span>
            </h1>
            <h1 className="font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
              <span className="text-primary">We make </span>
              <span className="text-primary">homes </span>
              <span className="text-elite-teal">healthy.</span>
            </h1>
            <h1 className="font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
              <span className="text-primary">We make </span>
              <span className="text-primary">spaces </span>
              <span className="text-elite-teal">elite.</span>
            </h1>
          </div>
        </div>
        <div className="bg-elite-teal order-3 flex flex-col items-center justify-center rounded-2xl p-6 text-center lg:col-start-2">
          <span className="text-4xl font-semibold text-white md:text-5xl">
            {yearsOfExcellence}+
          </span>
          <p className="mt-2 text-sm text-white/80">Years of excellence</p>
        </div>
        <div className="bg-surface order-4 flex flex-col items-center justify-center rounded-2xl p-6 text-center lg:col-start-3">
          <p className="text-muted mb-2 text-xs tracking-wider">GOOGLE REVIEWS</p>
          <span className="text-primary text-4xl font-medium">4.9</span>
          <p className="text-elite-olive mt-1 text-sm">★★★★★</p>
        </div>
        <div className="order-5 col-span-1 md:col-span-2 lg:col-span-3">
          <div className="grid grid-cols-2 gap-4">
            {services.map((service) => (
              <Link
                key={service.name}
                className="bg-surface hover:bg-surface/80 flex flex-col items-center rounded-2xl px-4 py-4 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                to={service.href}
              >
                <span className="text-primary text-sm font-medium">{service.name}</span>
                <span className="text-elite-teal mt-1 flex items-center justify-center text-xs">
                  {service.description} <ArrowRight className="ml-0.5" size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="bg-elite-olive order-6 col-span-1 flex flex-col items-center justify-between gap-4 rounded-2xl p-5 md:col-span-2 md:flex-row lg:col-span-3">
          <p className="text-center text-sm font-medium text-white md:text-left md:text-base">
            {`Protect what matters. Transform what's possible.`}
          </p>
          <Link
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-[#6d7a51] transition-opacity hover:opacity-90"
            to="/contact"
          >
            Start →
          </Link>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Waterproofing */}
        <div className="bg-surface group relative overflow-hidden rounded-2xl p-6 md:row-span-2 md:p-8">
          <div className="bg-elite-teal/10 absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl transition-all group-hover:scale-150" />
          <div className="relative">
            <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
              <CloudRain className="text-elite-olive" />
            </div>
            <h3 className="text-primary mb-2 text-xl font-semibold">Waterproofing</h3>
            <p className="text-muted mb-4 text-sm leading-relaxed md:text-base">
              Stop leaks permanently with our proven basement waterproofing systems. Interior
              drains, sump pumps, and wall encapsulation.
            </p>
            <ul className="text-muted mb-6 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Check className="text-elite-teal" size={16} />
                Interior & Exterior Solutions
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-elite-teal" size={16} />
                Precise Drainage Systems
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-elite-teal" size={16} />
                Sump Pump Installations
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-elite-teal" size={16} />
                Lifetime Transferable Warranty
              </li>
            </ul>
            <Link
              className="text-elite-teal inline-flex items-center gap-1 text-sm font-medium"
              to="/waterproofing"
            >
              Learn more <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        {/* Mold Remediation */}
        <div className="bg-surface group relative overflow-hidden rounded-2xl p-6">
          <div className="bg-elite-olive/10 absolute -top-8 -right-8 h-24 w-24 rounded-full blur-2xl transition-all group-hover:scale-150" />
          <div className="relative">
            <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
              <Biohazard className="text-elite-olive" />
            </div>
            <h3 className="text-primary mb-2 text-xl font-semibold">Mold Remediation</h3>
            <p className="text-muted mb-4 leading-relaxed">
              {`Certified mold removal that protects your family's health. We eliminate mold at the source.`}
            </p>
            <Link
              className="text-elite-teal inline-flex items-center gap-1 text-sm font-medium"
              to="/mold-remediation"
            >
              Learn more <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        {/* Home Remodeling */}
        <div className="bg-surface group relative overflow-hidden rounded-2xl p-6">
          <div className="bg-elite-teal/10 absolute -top-8 -right-8 h-24 w-24 rounded-full blur-2xl transition-all group-hover:scale-150" />
          <div className="relative">
            <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
              <HousePlus className="text-elite-olive" />
            </div>
            <h3 className="text-primary mb-2 text-xl font-semibold">Home Remodeling</h3>
            <p className="text-muted mb-4 leading-relaxed">
              Transform your basement into a beautiful living space. Full renovations, custom
              finishes.
            </p>
            <Link
              className="text-elite-teal inline-flex items-center gap-1 text-sm font-medium"
              to="/home-remodeling"
            >
              Learn more <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        {/* Custom Solutions */}
        <div className="relative overflow-hidden rounded-2xl bg-[#0d0d0d] p-6 md:col-span-2 lg:col-span-2">
          <div className="flex flex-col items-center justify-center gap-4 py-4 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <p className="text-lg font-medium text-white md:text-xl">Need a custom solution?</p>
              <p className="text-sm text-white/60">
                {`Every home is unique. Let's discuss your project.`}
              </p>
            </div>
            <Link
              className="bg-elite-teal rounded-full px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              to="/contact"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Link
          className="bg-surface group hover:bg-surface/80 flex items-center justify-between gap-4 rounded-2xl p-6 transition-colors"
          to="/resources"
        >
          <div className="flex items-center gap-4">
            <div className="bg-elite-teal/20 rounded-full p-3">
              <Library className="text-elite-teal h-6 w-6" />
            </div>
            <div>
              <h3 className="text-primary font-semibold">Visit Our Learning Center</h3>
              <p className="text-muted text-sm">FAQs, guides, and expert tips for home care</p>
            </div>
          </div>
          <span className="text-elite-teal flex items-center justify-center text-sm font-medium">
            Explore <ArrowRight className="mt-0.5" size={16} />
          </span>
        </Link>
      </div>
    </div>
  );
}
