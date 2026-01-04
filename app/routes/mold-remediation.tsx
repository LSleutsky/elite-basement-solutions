import {
  AirVent,
  ArrowRight,
  Biohazard,
  Check,
  Clock,
  Droplets,
  Eye,
  HeartPulse,
  ShieldCheck,
  Skull,
  SprayCan,
  Stone,
  Wind
} from "lucide-react";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "Mold Remediation Services | Elite Basement Solutions" },
    {
      name: "description",
      content:
        "Professional mold remediation in PA, NJ & DE. Certified mold removal, air quality restoration, and moisture control. Protect your family's health."
    }
  ];
}

const healthEffects = [
  "Respiratory issues and breathing difficulties",
  "Severe allergies and sinus problems",
  "Eye irritation and blurry vision",
  "Skin rashes and irritation",
  "Headaches and fatigue",
  "Compromised immune response"
];

const remediationSteps = [
  "Containment setup around affected area",
  "Negative air machine installation",
  "HEPA vacuum all surfaces",
  "Remove contaminated materials",
  "Anti-fungal treatment application",
  "Air quality verification"
];

const moldTypes = [
  {
    name: "Stachybotrys",
    description: "Black mold causing eye irritation, allergies, and skin problems"
  },
  { name: "Aspergillus", description: "Green mold causing respiratory issues and eye irritation" },
  { name: "Penicillium", description: "Blue-green mold causing allergies and sore throats" },
  { name: "Cladosporium", description: "Olive-green mold triggering asthma and skin rashes" }
];

export default function MoldRemediationPage() {
  return (
    <article className="mx-auto max-w-6xl pb-24 md:pb-0">
      <header className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2">
          <p className="text-elite-olive mb-2 text-xs font-medium tracking-[0.2em]">
            MOLD REMEDIATION
          </p>
          <h1 className="text-primary font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
            Eliminate the threat. Restore healthy air.
          </h1>
          <div className="bg-elite-teal/20 my-6 h-px w-24" />
          <p className="text-muted mt-4 text-base md:text-lg">
            Mold is a living organism that thrives in your home. What you see is only 15% of the
            problem. Our certified technicians eliminate mold at the source and rejuvenate your
            indoor air quality.
          </p>
        </div>
        <div className="bg-elite-teal flex flex-col items-center justify-center rounded-2xl p-6 text-center">
          <ShieldCheck className="mb-2 h-10 w-10 text-white/90" />
          <span className="text-2xl font-semibold text-white">Certified</span>
          <p className="text-sm text-white/80">MICRO & EPA Trained</p>
        </div>
      </header>
      {/* Understanding Mold */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="order-2 overflow-hidden rounded-2xl lg:order-0 lg:col-start-1 lg:row-start-1">
          <img
            alt="Mold growth on basement walls"
            className="h-full w-full object-cover"
            src="/public/mold-growth.jpg"
          />
        </div>
        <div className="bg-surface order-1 rounded-2xl p-6 md:p-8 lg:order-0 lg:col-span-2">
          <div className="bg-elite-olive/20 mb-4 inline-flex rounded-full p-3">
            <Biohazard className="text-elite-olive h-6 w-6" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">Understanding Mold</h2>
          <p className="text-muted mb-4 text-base leading-relaxed">
            We are all exposed to thousands of mold species daily. While some molds like penicillin
            save lives, others can make your home unlivable. Mold evolves constantly, changing
            shapes, sizes, and chemical structures. Different species carry vastly different
            properties.
          </p>
          <p className="text-muted mb-4 text-base leading-relaxed">
            The mold you see on your walls is just the tip of the iceberg. Approximately 85% of mold
            growth is invisible, hidden inside walls, beneath flooring, and within your HVAC system.
            That musty smell? It means mold has already taken hold.
          </p>
        </div>
      </section>
      {/* Health Risks You Cannot Ignore */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2 lg:col-start-1 lg:row-start-1">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
            <HeartPulse className="text-elite-teal h-6 w-6" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">
            Health Risks You Cannot Ignore
          </h2>
          <p className="text-muted mb-4 text-base leading-relaxed">
            Mold causes breathing difficulties and fungal infections, especially in people prone to
            allergies or asthma. Some molds are deadly to certain individuals while others may not
            notice immediate effects. With tens of thousands of species, it is best not to push your
            luck.
          </p>
          <ul className="mb-4 grid gap-2 sm:grid-cols-2">
            {healthEffects.map((effect) => (
              <li key={effect} className="text-muted flex items-start gap-2 text-sm">
                <Check className="text-elite-teal mt-0.5 shrink-0" size={16} />
                <span>{effect}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl bg-[#0d0d0d] p-6 text-center">
          <Eye className="mb-2 h-8 w-8 text-white/80" />
          <span className="text-3xl font-semibold text-white">85%</span>
          <p className="mt-1 text-sm text-white/60">Invisible to the eye</p>
          <p className="mt-1 text-xs text-white/40">Hidden inside walls and ducts</p>
        </div>
      </section>
      {/* Professional Remediation Process */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="grid grid-cols-2 gap-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:grid-cols-1 lg:grid-rows-2">
          <div className="bg-elite-olive flex flex-col items-center justify-center rounded-2xl p-6 text-center">
            <Clock className="mb-2 h-8 w-8 text-white/80" />
            <span className="text-3xl font-semibold text-white">24-48 hrs</span>
            <p className="mt-1 text-sm text-white/60">Mold growth begins</p>
            <p className="mt-1 text-xs text-white/60">After water damage occurs</p>
          </div>
          <div className="bg-surface flex items-center justify-center rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="bg-elite-teal/20 rounded-full p-3">
                <AirVent className="text-elite-teal h-6 w-6" />
              </div>
              <div>
                <h3 className="text-primary font-semibold">HEPA Filtration</h3>
                <p className="text-muted text-sm">99.97% particle capture</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2 lg:row-span-2">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
            <SprayCan className="text-elite-teal h-6 w-6" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">
            Professional Remediation Process
          </h2>
          <p className="text-muted mb-4 text-base leading-relaxed">
            Despite what you may have heard, remediating mold is not as simple as washing it with
            bleach. Certain molds actually use bleach as a food source once it dries. Proper mold
            remediation is an extensive process that should never be underestimated.
          </p>
          <p className="text-muted mb-6 text-base leading-relaxed">
            Our crew sets up containment around the affected area. A negative air machine prevents
            spores from spreading to uncontaminated areas. Everything containing mold is removed -
            sheetrock, carpeting, furniture. All surfaces are HEPA vacuumed and treated with
            anti-fungal solutions.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {remediationSteps.map((step) => (
              <div key={step} className="text-muted flex items-center gap-2 text-sm">
                <Check className="text-elite-teal h-4 w-4 shrink-0" />
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contamination & Airborne Spread */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2 lg:col-start-1 lg:row-start-1">
          <div className="bg-elite-olive/20 mb-4 inline-flex rounded-full p-3">
            <Wind className="text-elite-olive h-6 w-6" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">
            Contamination & Airborne Spread
          </h2>
          <p className="text-muted mb-4 text-base leading-relaxed">
            Think that stagnant mold colony is isolated to one area? Walking past a mold colony
            causes an explosion of spores. These spores seep into walls to form new colonies, attach
            to your clothes, or enter your ducts and spread throughout the house whenever you run
            the heat or A/C.
          </p>
          <p className="text-muted text-base leading-relaxed">
            Mold wants to breed. It wants to spread. A dark, damp environment is the ideal breeding
            ground. Combine that with the fact that most mold is invisible, and your house may be
            hosting an entire ecosystem you cannot see. It is your job to prevent that from
            happening, permanently.
          </p>
        </div>
        <div className="bg-surface flex items-center justify-center rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="bg-elite-olive/20 rounded-full p-3">
              <Stone className="text-elite-olive h-6 w-6" />
            </div>
            <div>
              <h3 className="text-primary font-semibold">Efflorescence</h3>
              <p className="text-muted text-sm">White crystals signal hidden water</p>
            </div>
          </div>
        </div>
      </section>
      {/* Water Damage Breeds Mold */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="order-2 overflow-hidden rounded-2xl lg:order-0 lg:col-start-1 lg:row-start-1">
          <img
            alt="Water damage leading to mold"
            className="h-full w-full object-cover"
            src="/public/mold-water-damage.jpg"
          />
        </div>
        <div className="bg-surface order-1 rounded-2xl p-6 md:p-8 lg:order-0 lg:col-span-2">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
            <Droplets className="text-elite-teal h-6 w-6" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">
            Water Damage Breeds Mold
          </h2>
          <p className="text-muted mb-4 text-base leading-relaxed">
            If your home has experienced water damage, chances are better than good you will become
            a victim of mold intrusion. Whether your basement leaked, pipes burst, or humidity
            levels increased, mold begins growing within 24 to 48 hours. The darker and damper the
            area, the more mold loves it.
          </p>
          <p className="text-muted text-base leading-relaxed">
            The mold will continue to grow, breed, and spread rapidly until something destroys the
            actual mold, eliminates the food source, and removes the toxic environment. Mold is not
            prejudiced - whether your house was built in 1903 or 2023, if you have a moisture
            problem, you will find mold.
          </p>
        </div>
      </section>
      {/* Common Toxic Mold Species */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <div className="bg-elite-olive/20 mb-4 inline-flex rounded-full p-3">
            <Skull className="text-elite-olive h-6 w-6" />
          </div>
          <h2 className="text-primary mb-3 font-serif text-2xl md:text-3xl">
            Common Toxic Mold Species
          </h2>
          <p className="text-muted mb-6 text-base leading-relaxed">
            Different mold species carry different dangers. We identify and eliminate all types,
            ensuring your home is thoroughly decontaminated and safe for your family.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {moldTypes.map((mold) => (
              <div key={mold.name} className="bg-canvas rounded-xl p-4">
                <h4 className="text-primary mb-1 font-semibold">{mold.name}</h4>
                <p className="text-muted text-sm">{mold.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:row-span-2 lg:grid-cols-1 lg:grid-rows-2">
          <div className="overflow-hidden rounded-2xl">
            <img
              alt="Mold testing equipment"
              className="h-full w-full object-cover"
              src="/public/mold-testing.jpg"
            />
          </div>
          <div className="bg-surface flex items-center justify-center rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="bg-elite-olive/20 rounded-full p-3">
                <Biohazard className="text-elite-olive h-6 w-6" />
              </div>
              <div>
                <h3 className="text-primary font-semibold">Lab Testing</h3>
                <p className="text-muted text-sm">Species identification</p>
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
          <h3 className="text-primary mb-2 text-lg font-semibold">Certified Technicians</h3>
          <p className="text-muted text-sm">
            MICRO, CMI, and EPA certified professionals using industry-standard protocols and
            equipment.
          </p>
        </div>
        <div className="bg-surface rounded-2xl p-6">
          <div className="bg-elite-olive/20 mb-4 inline-flex rounded-full p-3">
            <AirVent className="text-elite-olive h-6 w-6" />
          </div>
          <h3 className="text-primary mb-2 text-lg font-semibold">Air Quality Restoration</h3>
          <p className="text-muted text-sm">
            We do not just remove visible mold. We restore your indoor air quality to safe,
            breathable levels.
          </p>
        </div>
        <div className="bg-surface rounded-2xl p-6">
          <div className="bg-elite-teal/20 mb-4 inline-flex rounded-full p-3">
            <Droplets className="text-elite-teal h-6 w-6" />
          </div>
          <h3 className="text-primary mb-2 text-lg font-semibold">Source Elimination</h3>
          <p className="text-muted text-sm">
            We identify and eliminate the moisture source that allowed mold to thrive in the first
            place.
          </p>
        </div>
      </section>
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#0d0d0d] p-6 md:flex-row md:p-8">
        <div>
          <p className="text-lg font-medium text-white md:text-xl">Suspect mold in your home?</p>
          <p className="text-center text-sm text-white/60 md:text-left">
            Get a professional inspection
          </p>
        </div>
        <Link
          className="bg-elite-olive inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          to="/contact"
        >
          Schedule Mold Inspection <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
