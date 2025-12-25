import { Link } from "react-router";

import Logo from "@/components/Logo";
import { Route } from "./+types/home";

export function meta() {
  return [
    { title: "Elite Basement Solutions" },
    { name: "description", content: "Welcome to Elite Basement Solutions!" }
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_EXPRESS };
}

const services = [
  { name: "Residential", description: "Stop leaks forever", href: "/waterproofing" },
  { name: "Commercial", description: "Certified & safe", href: "/mold-remediation" },
  { name: "Industrial", description: "Specialized systems", href: "/" }
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl pb-24 md:pb-0">
      {/* BENTO GRID */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Logo Card - FIRST on mobile and tablet, row-span-3 on desktop, col 1 */}
        <div className="bg-surface order-1 flex items-center justify-center rounded-2xl p-8 md:col-span-2 lg:col-span-1 lg:col-start-1 lg:row-span-3">
          <Logo
            className="h-auto w-full max-w-[280px] md:max-w-[300px] lg:max-w-[220px]"
            linkToHome={false}
            variant="full"
          />
        </div>

        {/* Hero Text Block - spans full width on tablet, 2 cols and 2 rows on desktop */}
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
            <div className="bg-elite-teal/20 h-px w-16 md:w-24" />
            <h1 className="font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
              <span className="text-primary">We make </span>
              <span className="text-primary">homes </span>
              <span className="text-elite-teal">healthy.</span>
            </h1>
            <div className="bg-elite-olive/20 h-px w-16 md:w-24" />
            <h1 className="font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
              <span className="text-primary">We make </span>
              <span className="text-primary">spaces </span>
              <span className="text-elite-teal">elite.</span>
            </h1>
          </div>
        </div>

        {/* Stats Card - Years */}
        <div className="bg-elite-teal order-3 flex flex-col items-center justify-center rounded-2xl p-6 text-center lg:col-start-2">
          <span className="text-4xl font-semibold text-white md:text-5xl">35+</span>
          <p className="mt-2 text-sm text-white/80">Years of excellence</p>
          <p className="text-xs text-white/60">in Greater Philadelphia</p>
        </div>

        {/* Rating Card */}
        <div className="bg-surface order-4 flex flex-col items-center justify-center rounded-2xl p-6 text-center lg:col-start-3">
          <p className="text-muted mb-2 text-xs tracking-wider">GOOGLE REVIEWS</p>
          <span className="text-primary text-4xl font-medium">4.9</span>
          <p className="text-elite-olive mt-1 text-sm">★★★★★</p>
        </div>

        {/* Service Pills Row - horizontal scroll on mobile */}
        <div className="order-5 col-span-1 md:col-span-2 lg:col-span-3">
          <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0 md:pb-0">
            {services.map((service) => (
              <Link
                key={service.name}
                className="bg-surface hover:bg-surface/80 flex min-w-[140px] shrink-0 flex-col items-center rounded-2xl px-4 py-4 transition-all hover:-translate-y-0.5 hover:shadow-lg md:min-w-0 md:flex-1"
                to={service.href}
              >
                <span className="text-primary text-sm font-medium">{service.name}</span>
                <span className="text-elite-teal mt-1 text-xs">{service.description} →</span>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div className="bg-elite-olive order-6 col-span-1 flex flex-col items-center justify-between gap-4 rounded-2xl p-5 md:col-span-2 md:flex-row lg:col-span-3">
          <p className="text-center text-sm font-medium text-white md:text-left md:text-base">
            Ready to transform your property?
          </p>
          <Link
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-[#6d7a51] transition-opacity hover:opacity-90"
            to="/"
          >
            Start →
          </Link>
        </div>
      </div>

      {/* Service Feature Cards - Masonry Style */}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Waterproofing - Tall card */}
        <div className="bg-surface group relative overflow-hidden rounded-2xl p-6 md:row-span-2 md:p-8">
          <div className="bg-elite-teal/10 absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl transition-all group-hover:scale-150" />
          <div className="relative">
            <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
              <svg
                className="text-elite-teal h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19.5 12c0 4.14-3.36 7.5-7.5 7.5S4.5 16.14 4.5 12c0-2.97 3.75-7.5 7.5-12 3.75 4.5 7.5 9.03 7.5 12z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                />
              </svg>
            </div>
            <h3 className="text-primary mb-2 text-xl font-semibold md:text-2xl">Waterproofing</h3>
            <p className="text-muted mb-4 text-sm leading-relaxed md:text-base">
              Stop leaks permanently with our proven basement waterproofing systems. Interior
              drains, sump pumps, and wall encapsulation.
            </p>
            <ul className="text-muted mb-6 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-elite-teal">&#10003;</span> Interior & Exterior Solutions
              </li>
              <li className="flex items-center gap-2">
                <span className="text-elite-teal">&#10003;</span> French Drain Systems
              </li>
              <li className="flex items-center gap-2">
                <span className="text-elite-teal">&#10003;</span> Sump Pump Installation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-elite-teal">&#10003;</span> Lifetime Transferable Warranty
              </li>
            </ul>
            <Link
              className="text-elite-teal inline-flex items-center gap-1 text-sm font-medium transition-all hover:gap-2"
              to="/waterproofing"
            >
              Learn more <span>→</span>
            </Link>
          </div>
        </div>

        {/* Mold Remediation - Short card */}
        <div className="bg-surface group relative overflow-hidden rounded-2xl p-6">
          <div className="bg-elite-olive/10 absolute -top-8 -right-8 h-24 w-24 rounded-full blur-2xl transition-all group-hover:scale-150" />
          <div className="relative">
            <div className="bg-elite-olive/20 mb-4 inline-flex rounded-full p-3">
              <svg
                className="text-elite-olive h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                />
              </svg>
            </div>
            <h3 className="text-primary mb-2 text-lg font-semibold">Mold Remediation</h3>
            <p className="text-muted mb-4 text-sm leading-relaxed">
              {`Certified mold removal that protects your family's health. We eliminate mold at the`}
              source.
            </p>
            <Link
              className="text-elite-teal inline-flex items-center gap-1 text-sm font-medium transition-all hover:gap-2"
              to="/mold-remediation"
            >
              Learn more <span>→</span>
            </Link>
          </div>
        </div>

        {/* Home Remodeling - Short card */}
        <div className="bg-surface group relative overflow-hidden rounded-2xl p-6">
          <div className="bg-elite-teal/10 absolute -top-8 -right-8 h-24 w-24 rounded-full blur-2xl transition-all group-hover:scale-150" />
          <div className="relative">
            <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
              <svg
                className="text-elite-teal h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                />
              </svg>
            </div>
            <h3 className="text-primary mb-2 text-lg font-semibold">Remodeling</h3>
            <p className="text-muted mb-4 text-sm leading-relaxed">
              Transform your basement into a beautiful living space. Full renovations, custom
              finishes.
            </p>
            <Link
              className="text-elite-teal inline-flex items-center gap-1 text-sm font-medium transition-all hover:gap-2"
              to="/remodeling"
            >
              Learn more <span>→</span>
            </Link>
          </div>
        </div>

        {/* Additional visual card - spans remaining space on larger screens */}
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-[#0d0d0d] to-[#1a1a1a] p-6 md:col-span-2 lg:col-span-2">
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
    </div>
  );
}
