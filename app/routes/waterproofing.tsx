import {
  ArrowRight,
  BrickWall,
  Check,
  Droplets,
  Gauge,
  Layers,
  PipetteIcon,
  Proportions,
  ShieldCheck,
  Toolbox,
  Waves,
  WavesArrowDown,
  WindArrowDown
} from "lucide-react";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "Waterproofing Services | Elite Basement Solutions" },
    {
      name: "description",
      content:
        "Professional basement waterproofing in PA, NJ & DE. Interior drainage, sump pumps, foundation repair, and moisture control with lifetime warranty."
    }
  ];
}

const seepageSources = [
  "Floor-to-wall joint (cove joint)",
  "Foundation wall cracks",
  "Window wells and bulkheads",
  "Utility penetrations",
  "Porous concrete and block walls"
];

const sealingSolutions = [
  "Vent dryers and appliances outside",
  "Insulate A/C ducts against condensation",
  "Install proper gutter and downspout extensions",
  "Slope grading away from foundation",
  "Seal sump pit covers airtight",
  "Install check valves in floor drains",
  "Caulk all gaps, joints, and penetrations",
  "Apply penetrating concrete sealers"
];

const crackRepairMethods = [
  { name: "V-Grooving", description: "Chisel and cement for small to moderate cracks" },
  { name: "Epoxy Injection", description: "Strong adhesive for narrow, dry cracks" },
  { name: "Hydraulic Cement", description: "Fast-curing waterproof cement for minor leaks" },
  { name: "Carbon Fiber Straps", description: "Kevlar reinforcement for structural stability" },
  { name: "Wall Pins & Staples", description: "Steel reinforcement for vertical cracks" },
  { name: "Roughcasting", description: "Complete wall resurfacing for deteriorated foundations" }
];

export default function WaterproofingPage() {
  return (
    <article className="mx-auto max-w-6xl pb-24 md:pb-0">
      <header className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2">
          <p className="text-elite-teal mb-2 text-xs font-medium tracking-[0.2em]">WATERPROOFING</p>
          <h1 className="text-primary font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
            Stop water at the source. Protect what you value.
          </h1>
          <div className="bg-elite-teal/20 my-6 h-px w-24" />
          <p className="text-muted mt-4 text-base md:text-lg">
            Water is the second strongest force on Earth. You cannot stop it, but you can manage it.
            Our pressure relief systems divert water away from your home permanently.
          </p>
        </div>
        <div className="bg-elite-teal flex flex-col items-center justify-center rounded-2xl p-6 text-center">
          <ShieldCheck className="mb-2 h-10 w-10 text-white/90" />
          <span className="text-2xl font-semibold text-white">Lifetime</span>
          <p className="text-sm text-white/80">Transferable Warranty</p>
        </div>
      </header>
      {/* Understanding Water Seepage */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface order-2 overflow-hidden rounded-2xl lg:order-0 lg:col-start-1 lg:row-start-1">
          <img
            alt="Water entry points in basement"
            className="h-full w-full object-cover"
            src="/public/water-seepage.jpg"
          />
        </div>
        <div className="bg-surface order-1 rounded-2xl p-6 md:p-8 lg:order-0 lg:col-span-2">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
            <Droplets className="text-elite-teal h-6 w-6" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">
            Understanding Water Seepage
          </h2>
          <p className="text-muted mb-4 text-base leading-relaxed">
            Once water finds an entry point, the problem escalates rapidly. That initial breach
            relieves pressure, creating a free-flowing path directly into your home. Water seepage
            typically occurs at the seam where floors meet walls, but can also penetrate through
            wall cracks, foundation tops, or basement windows.
          </p>
          <ul className="mb-4 grid gap-2 sm:grid-cols-2">
            {seepageSources.map((source) => (
              <li key={source} className="text-muted flex items-start gap-2 text-sm">
                <Check className="text-elite-teal mt-0.5 shrink-0" size={16} />
                <span>{source}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Water Management, Not Prevention */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2 lg:col-start-1 lg:row-start-1">
          <div className="bg-elite-olive/20 mb-4 inline-flex rounded-full p-3">
            <PipetteIcon className="text-elite-olive h-6 w-6" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">
            Water Management, Not Prevention
          </h2>
          <p className="text-muted mb-4 text-base leading-relaxed">
            {`Anyone claiming they can `}
            <em>
              <strong>stop</strong>
            </em>
            {` water is selling smoke and mirrors. It's simply not possible, that's basic physics.
            What is possible, and what must be done, is proper water management.`}
          </p>
          <p className="text-muted text-base leading-relaxed">
            We allow water to run its natural course while diverting it exactly where we want it to
            go, then pump it safely away from your foundation. Managing water properly is not just
            possible, it is our expertise.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl bg-[#0d0d0d] p-6 text-center">
          <Gauge className="mb-2 h-8 w-8 text-white/80" />
          <span className="text-3xl font-semibold text-white">15+ gallons</span>
          <p className="mt-1 text-sm text-white/60">Moisture enters daily</p>
          <p className="mt-1 text-xs text-white/40">More than cooking & showering combined</p>
        </div>
      </section>
      {/* Pressure Relief System */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="grid grid-cols-2 gap-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:grid-cols-1 lg:grid-rows-2">
          <div className="bg-elite-olive flex flex-col items-center justify-center rounded-2xl p-6 text-center">
            <WindArrowDown className="mb-2 h-8 w-8 text-white/80" />
            <span className="text-3xl font-semibold text-white">2,000 lbs</span>
            <p className="mt-1 text-sm text-white/60">Pressure per sq. ft.</p>
            <p className="mt-1 text-xs text-white/60">Hydrostatic force on your foundation</p>
          </div>
          <div className="bg-surface flex items-center justify-center rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="bg-elite-teal/20 rounded-full p-3">
                <Proportions className="text-elite-teal h-6 w-6" />
              </div>
              <div>
                <h3 className="text-primary font-semibold">Custom Solutions</h3>
                <p className="text-muted text-sm">Engineered for your home</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2 lg:row-span-2">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
            <WavesArrowDown className="text-elite-teal h-6 w-6" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">
            Pressure Relief Systems
          </h2>
          <p className="text-muted mb-4 text-base leading-relaxed">
            {`This is not your run-of-the-mill French drain. This is not a generic cookie-cutter
            system installed identically from one house to the next. At our level of expertise, no
            two homes are the same.`}
          </p>
          <p className="text-muted mb-6 text-base leading-relaxed">
            Our trained technicians first diagnose and evaluate your specific situation. Only then
            do we design a custom pressure relief system tailored to keep your home dry and healthy.
            We install perimeter drains, sump pump systems, vapor barriers, and wall encapsulation,
            all engineered for your unique conditions.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Interior drainage systems",
              "Sump pump installation",
              "Battery backup systems",
              "Vapor barriers",
              "Wall encapsulation",
              "Crawlspace solutions"
            ].map((item) => (
              <div key={item} className="text-muted flex items-center gap-2 text-sm">
                <Check className="text-elite-teal h-4 w-4 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Moisture Control & Sealing */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2 lg:col-start-1 lg:row-start-1">
          <div className="bg-elite-olive/20 mb-4 inline-flex rounded-full p-3">
            <Layers className="text-elite-olive h-6 w-6" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">
            Moisture Control & Sealing
          </h2>
          <p className="text-muted mb-4 text-base leading-relaxed">
            Basements are the largest source of moisture in homes. Finished walls and floor
            coverings trap moisture, creating perfect conditions for mold growth. That musty
            basement smell? It is mold growing inside walls, carpet, or furniture.
          </p>
          <ul className="mb-4 grid gap-2 sm:grid-cols-2">
            {sealingSolutions.slice(0, 6).map((solution) => (
              <li key={solution} className="text-muted flex items-start gap-2 text-sm">
                <Check className="text-elite-olive mt-0.5 shrink-0" size={16} />
                <span>{solution}</span>
              </li>
            ))}
          </ul>
          <p className="text-elite-teal text-sm font-medium">
            Before finishing your basement, seal it properly against moisture.
          </p>
        </div>
        <div className="bg-surface flex items-center justify-center rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="bg-elite-olive/20 rounded-full p-3">
              <Layers className="text-elite-olive h-6 w-6" />
            </div>
            <div>
              <h3 className="text-primary font-semibold">12-20% Air</h3>
              <p className="text-muted text-sm">In porous concrete</p>
            </div>
          </div>
        </div>
      </section>
      {/* Outside Drainage */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="order-2 overflow-hidden rounded-2xl lg:order-0 lg:col-start-1 lg:row-start-1">
          <img
            alt="Outside drainage system"
            className="h-full w-full object-cover"
            src="/public/gravity-drain.jpg"
          />
        </div>
        <div className="bg-surface order-1 rounded-2xl p-6 md:p-8 lg:order-0 lg:col-span-2">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
            <Droplets className="text-elite-teal h-6 w-6" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">Outside Drainage</h2>
          <p className="text-muted mb-4 text-base leading-relaxed">
            When terrain allows, we drain water away from foundations by gravity rather than
            pumping. Perimeter drains around the building outlet downhill, lowering the water table
            and preventing water from ever reaching your basement.
          </p>
          <p className="text-muted text-base leading-relaxed">
            We set drain pipes deep enough to reduce capillary wicking, use proper bedding materials
            to prevent silting, and install cleanouts for long-term maintenance. The advantage over
            sump pumps? No mechanical dependence, no power failure worries.
          </p>
        </div>
      </section>
      {/* Foundation & Crack Repair */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <div className="bg-elite-olive/20 mb-4 inline-flex rounded-full p-3">
            <BrickWall className="text-elite-olive h-6 w-6" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">
            Foundation & Crack Repair
          </h2>
          <p className="text-muted mb-6 text-base leading-relaxed">
            Cracks in poured concrete are common, usually from shrinkage during curing or normal
            settling. While most pose no structural threat, they create pathways for water
            intrusion. Foundation repair can be simple and cost-effective when addressed early.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {crackRepairMethods.map((method) => (
              <div key={method.name} className="bg-canvas rounded-xl p-4">
                <h4 className="text-primary mb-1 font-semibold">{method.name}</h4>
                <p className="text-muted text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:row-span-2 lg:grid-cols-1 lg:grid-rows-2">
          <div className="overflow-hidden rounded-2xl">
            <img
              alt="Foundation crack repair"
              className="h-full w-full object-cover"
              src="/public/crack-repair.jpg"
            />
          </div>
          <div className="bg-surface flex items-center justify-center rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="bg-elite-olive/20 rounded-full p-3">
                <Layers className="text-elite-olive h-6 w-6" />
              </div>
              <div>
                <h3 className="text-primary font-semibold">Carbon Fiber</h3>
                <a
                  className="text-muted text-sm"
                  href="https://www.hj3.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  HJ3 certified installers
                </a>
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
          <h3 className="text-primary mb-2 text-lg font-semibold">Lifetime Warranty</h3>
          <p className="text-muted text-sm">
            Our waterproofing systems come with a fully transferable lifetime warranty that protects
            your investment.
          </p>
        </div>
        <div className="bg-surface rounded-2xl p-6">
          <div className="bg-elite-olive/20 mb-4 inline-flex rounded-full p-3">
            <Toolbox className="text-elite-olive h-6 w-6" />
          </div>
          <h3 className="text-primary mb-2 text-lg font-semibold">Custom Engineering</h3>
          <p className="text-muted text-sm">
            Every system is designed specifically for your home. No cookie-cutter solutions that
            fail over time.
          </p>
        </div>
        <div className="bg-surface rounded-2xl p-6">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
            <Waves className="text-elite-teal h-6 w-6" />
          </div>
          <h3 className="text-primary mb-2 text-lg font-semibold">Root Cause Focus</h3>
          <p className="text-muted text-sm">
            We address why water enters, not just where. Permanent solutions that work with nature,
            not against it.
          </p>
        </div>
      </section>
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#0d0d0d] p-6 md:flex-row md:p-8">
        <div>
          <p className="text-lg font-medium text-white md:text-xl">Water problems getting worse?</p>
          <p className="text-sm text-white/60">Get a free inspection and custom solution design</p>
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
