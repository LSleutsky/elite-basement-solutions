import {
  Check,
  ChefHat,
  CookingPot,
  Drill,
  Hammer,
  HardHat,
  Home,
  HouseHeart,
  Lightbulb,
  PaintBucket,
  Ruler,
  ShieldCheck,
  ShowerHead,
  SmilePlus,
  Sofa,
  Sparkles,
  Timer,
  Toilet,
  Wrench
} from "lucide-react";
import { Link } from "react-router";

import { createMeta } from "@/utils";

export function meta() {
  return createMeta({
    title: "Basement Renovations | Elite Basement Solutions",
    description:
      "Professional basement remodeling services including basement finishing, kitchen renovations, and bathroom upgrades in Southeastern Pennsylvania, New Jersey, and Northern Delaware.",
    path: "basement-renovations"
  });
}

const basementFeatures = [
  "Home offices & workspaces",
  "Entertainment & media rooms",
  "Home gyms & fitness areas",
  "Guest suites & in-law apartments",
  "Playrooms & recreation spaces"
];

const kitchenFeatures = [
  "Custom cabinetry & storage",
  "Premium countertops",
  "Modern appliance integration",
  "Tile & hardwood flooring",
  "Kitchen islands & breakfast bars"
];

const bathroomFeatures = [
  "Walk-in showers & soaking tubs",
  "Double vanities & custom sinks",
  "Heated flooring systems",
  "Modern lighting & ventilation",
  "Accessible & universal design"
];

export default function BasementRenovations() {
  return (
    <article className="mx-auto max-w-6xl pb-24 md:pb-0">
      <header className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2">
          <p className="text-elite-teal mb-2 text-xs font-medium tracking-[0.2em]">
            BASEMENT RENOVATIONS
          </p>
          <h1 className="text-primary font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
            Transform your house into your dream home
          </h1>
          <div className="bg-elite-teal/20 my-6 h-px w-24" />
          <p className="text-muted mt-4 text-base md:text-lg">
            Your home is your most valuable investment. Whether you want to finish your basement,
            upgrade your kitchen, or renovate your bathroom, we bring your vision to life with
            expert craftsmanship and premium materials.
          </p>
        </div>
        <div className="bg-elite-teal flex flex-col items-center justify-center rounded-2xl p-6 text-center">
          <Home className="mb-2 h-8 w-8 text-white/80" />
          <span className="text-3xl font-semibold text-white">500+</span>
          <p className="mt-1 text-sm text-white/80">Homes transformed</p>
        </div>
      </header>
      {/* More Than Just a House */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface order-1 rounded-2xl p-6 md:p-8 lg:col-span-2 lg:row-span-2">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-4">
            <HouseHeart className="text-elite-teal h-8 w-8" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">
            More Than Just a House
          </h2>
          <p className="text-muted mb-4 text-base leading-relaxed md:text-lg">
            {`A home you're proud to return to every day is priceless. No matter how old or new your
            house is, there's always potential waiting to be unlocked. We specialize in turning
            underutilized spaces into functional, beautiful areas that add real value to your life
            and property.`}
          </p>
          <p className="text-muted text-base leading-relaxed md:text-lg">
            As experts in basement waterproofing and mold remediation, we understand what it takes
            to create spaces that are not only stunning but built to last. Our renovations division
            combines that foundation expertise with design excellence.
          </p>
        </div>
        <div className="order-2 grid grid-cols-2 gap-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:grid-cols-1 lg:grid-rows-2">
          <div className="bg-elite-olive flex flex-col items-center justify-center rounded-2xl p-6 text-center">
            <SmilePlus className="mb-2 h-8 w-8 text-white/80" />
            <span className="text-3xl font-semibold text-white">100%</span>
            <p className="mt-1 text-sm text-white/80">Customer satisfaction</p>
          </div>
          <div className="bg-surface flex items-center justify-center rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="bg-elite-teal/20 rounded-full p-3">
                <ShieldCheck className="text-elite-teal h-6 w-6" />
              </div>
              <div>
                <h3 className="text-primary font-semibold">Quality Guaranteed</h3>
                <p className="text-muted text-sm">Premium materials only</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Planning & Design */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface order-1 rounded-2xl p-6 md:p-8 lg:order-0 lg:col-span-2 lg:row-span-2">
          <div className="bg-elite-olive/20 mb-4 inline-flex rounded-full p-4">
            <Ruler className="text-elite-olive h-8 w-8" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">Planning & Design</h2>
          <p className="text-muted mb-6 text-base leading-relaxed md:text-lg">
            {`Every great renovation starts with a conversation. We sit down with you to understand
            your vision, discuss possibilities, and develop a comprehensive plan. Whether you have a
            clear idea or just a spark of inspiration, we'll help shape it into reality.`}
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Check className="text-elite-olive mt-0.5 shrink-0" size={20} />
              <div>
                <p className="text-primary font-medium">In-depth consultation</p>
                <p className="text-muted text-sm">Understanding your lifestyle and needs</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-elite-olive mt-0.5 shrink-0" size={20} />
              <div>
                <p className="text-primary font-medium">Design visualization</p>
                <p className="text-muted text-sm">See your space before construction begins</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-elite-olive mt-0.5 shrink-0" size={20} />
              <div>
                <p className="text-primary font-medium">Transparent pricing</p>
                <p className="text-muted text-sm">Detailed estimates with no hidden costs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="order-2 grid grid-cols-2 gap-4 lg:order-0 lg:row-span-2 lg:grid-cols-1 lg:grid-rows-2">
          <div className="flex flex-col items-center justify-center rounded-2xl bg-[#0d0d0d] p-6 text-center">
            <Timer className="mb-2 h-8 w-8 text-white/80" />
            <span className="text-3xl font-semibold text-white">On-Time</span>
            <p className="mt-1 text-sm text-white/60">Project delivery</p>
          </div>
          <div className="bg-surface flex items-center justify-center rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="bg-elite-olive/20 rounded-full p-3">
                <HardHat className="text-elite-olive h-6 w-6" />
              </div>
              <div>
                <h3 className="text-primary font-semibold">Expert Crews</h3>
                <p className="text-muted text-sm">Skilled tradespeople</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Premium Materials */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface order-1 rounded-2xl p-6 md:p-8 lg:col-span-2 lg:row-span-2">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-4">
            <Hammer className="text-elite-teal h-8 w-8" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">Premium Materials</h2>
          <p className="text-muted mb-4 text-base leading-relaxed md:text-lg">
            {`We don't cut corners on materials. Every project uses professional-grade drywall,
            premium ceiling tiles, quality flooring, and top-tier fixtures. When we're done, your
            renovation will look as stunning 15 years later as the day we finished.`}
          </p>
          <p className="text-muted text-base leading-relaxed md:text-lg">
            {`If you have specific materials in mind, we'll work with you to source them and ensure
            they're the right fit for your project. Our supplier relationships often mean savings we
            can pass on to you.`}
          </p>
        </div>
        <div className="order-2 grid grid-cols-2 gap-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:grid-cols-1 lg:grid-rows-2">
          <div className="bg-elite-teal flex flex-col items-center justify-center rounded-2xl p-6 text-center">
            <Sparkles className="mb-2 h-8 w-8 text-white/80" />
            <span className="text-3xl font-semibold text-white">20+ yrs</span>
            <p className="mt-1 text-sm text-white/80">Lasting quality</p>
          </div>
          <div className="bg-surface flex items-center justify-center rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="bg-elite-teal/20 rounded-full p-3">
                <Wrench className="text-elite-teal h-6 w-6" />
              </div>
              <div>
                <h3 className="text-primary font-semibold">No Shortcuts</h3>
                <p className="text-muted text-sm">Built to last</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Basement Finishing */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface order-1 rounded-2xl p-6 md:p-8 lg:order-0 lg:col-span-2 lg:row-span-2">
          <div className="bg-elite-olive/20 mb-4 inline-flex rounded-full p-4">
            <Sofa className="text-elite-olive h-8 w-8" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">Basement Finishing</h2>
          <p className="text-muted mb-6 text-base leading-relaxed md:text-lg">
            {`Basements are often the most underutilized spaces in a home. After waterproofing and
            mold remediation, finishing your basement adds valuable living space and significantly
            increases your home's value. Transform it into anything you can imagine.`}
          </p>
          <ul className="mb-6 grid gap-2 sm:grid-cols-2">
            {basementFeatures.map((feature) => (
              <li key={feature} className="text-muted flex items-start gap-2 text-sm">
                <Check className="text-elite-olive mt-0.5 shrink-0" size={16} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-2 grid grid-cols-2 gap-4 lg:order-0 lg:row-span-2 lg:grid-cols-1 lg:grid-rows-2">
          <div className="flex flex-col items-center justify-center rounded-2xl bg-[#0d0d0d] p-6 text-center">
            <Home className="mb-2 h-8 w-8 text-white/80" />
            <span className="text-2xl font-semibold text-white">+20%</span>
            <p className="mt-1 text-sm text-white/60">Home value increase</p>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              alt="Finished basement"
              className="h-full w-full object-cover"
              src="/finished-basement.jpg"
            />
          </div>
        </div>
      </section>
      {/* Kitchen Renovations */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2 lg:col-start-2 lg:row-span-2">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-4">
            <CookingPot className="text-elite-teal h-8 w-8" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">Kitchen Renovations</h2>
          <p className="text-muted mb-6 text-base leading-relaxed md:text-lg">
            {`The kitchen is the heart of every home. New cabinets, modern countertops, stylish tile
            floors, and updated appliances transform your cooking space into a place where memories
            are made. We create kitchens you'll love cooking in every single day.`}
          </p>
          <ul className="mb-6 grid gap-2 sm:grid-cols-2">
            {kitchenFeatures.map((feature) => (
              <li key={feature} className="text-muted flex items-start gap-2 text-sm">
                <Check className="text-elite-teal mt-0.5 shrink-0" size={16} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:grid-cols-1 lg:grid-rows-2">
          <div className="bg-elite-teal flex flex-col items-center justify-center rounded-2xl p-6 text-center">
            <ChefHat className="mb-2 h-8 w-8 text-white/80" />
            <span className="text-2xl font-semibold text-white">Custom</span>
            <p className="mt-1 text-sm text-white/80">Design solutions</p>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              alt="Modern kitchen"
              className="h-full w-full object-cover"
              src="/kitchen-remodel.jpg"
            />
          </div>
        </div>
      </section>
      {/* Bathroom Upgrades */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface order-1 rounded-2xl p-6 md:p-8 lg:order-0 lg:col-span-2 lg:row-span-2">
          <div className="bg-elite-olive/20 mb-4 inline-flex rounded-full p-4">
            <Toilet className="text-elite-olive h-8 w-8" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">Bathroom Upgrades</h2>
          <p className="text-muted mb-6 text-base leading-relaxed md:text-lg">
            {`Today's bathroom design options are endless. From vacation-like retreats with soaking tubs to
            sleek modern spaces with walk-in showers, we create bathrooms that combine luxury with
            functionality. Every detail matters, from fixtures to flooring.`}
          </p>
          <ul className="mb-6 grid gap-2 sm:grid-cols-2">
            {bathroomFeatures.map((feature) => (
              <li key={feature} className="text-muted flex items-start gap-2 text-sm">
                <Check className="text-elite-olive mt-0.5 shrink-0" size={16} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-2 grid grid-cols-2 gap-4 lg:order-0 lg:row-span-2 lg:grid-cols-1 lg:grid-rows-2">
          <div className="flex flex-col items-center justify-center rounded-2xl bg-[#0d0d0d] p-6 text-center">
            <ShowerHead className="mb-2 h-8 w-8 text-white/80" />
            <span className="text-2xl font-semibold text-white">Spa-Like</span>
            <p className="mt-1 text-sm text-white/60">Luxury retreats</p>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              alt="Modern bathroom"
              className="h-full w-full object-cover"
              src="/bathroom-remodel.jpg"
            />
          </div>
        </div>
      </section>

      {/* More Services */}
      <section className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
            <PaintBucket className="text-elite-teal h-6 w-6" />
          </div>
          <h3 className="text-primary mb-2 text-lg font-semibold">Interior Painting</h3>
          <p className="text-muted text-sm">
            Fresh paint transforms any room. From accent walls to complete repaints, we deliver
            flawless finishes.
          </p>
        </div>
        <div className="bg-surface rounded-2xl p-6">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
            <Drill className="text-elite-teal h-6 w-6" />
          </div>
          <h3 className="text-primary mb-2 text-lg font-semibold">Custom Carpentry</h3>
          <p className="text-muted text-sm">
            Built-ins, trim work, doors, and custom storage solutions tailored to your space and
            style.
          </p>
        </div>
        <div className="bg-surface rounded-2xl p-6">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
            <Lightbulb className="text-elite-teal h-6 w-6" />
          </div>
          <h3 className="text-primary mb-2 text-lg font-semibold">Electrical & Lighting</h3>
          <p className="text-muted text-sm">
            Modern lighting design, ceiling fans, outlets, and complete electrical upgrades for any
            room.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#0d0d0d] p-6 md:flex-row md:p-8">
        <div>
          <p className="text-lg font-medium text-white md:text-xl">
            Ready to revolutionize your home?
          </p>
          <p className="text-center text-sm text-white/60 md:text-left">{`Share your vision and we'll bring it to life`}</p>
        </div>
        <Link
          className="bg-elite-teal rounded-full px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          to="/contact"
        >
          Get Free Consultation
        </Link>
      </div>
    </article>
  );
}
