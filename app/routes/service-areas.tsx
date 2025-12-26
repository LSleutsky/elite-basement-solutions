import { ChevronDown, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";

import {
  delawareData,
  newJerseyData,
  pennsylvaniaData,
  ServiceAreaData
} from "@/data/serviceAreas";

export function meta() {
  return [
    { title: "Service Areas | Elite Basement Solutions" },
    {
      name: "description",
      content:
        "Elite Basement Solutions serves Southeastern Pennsylvania, New Jersey, and Northern Delaware. Find your town and zip code in our service area."
    }
  ];
}

interface StateCardProps {
  data: ServiceAreaData;
  id: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const StateCard = ({ data, id, isExpanded, onToggle }: StateCardProps) => {
  const stateCardRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={stateCardRef} className="bg-surface scroll-mt-24 overflow-hidden rounded-2xl" id={id}>
      <button
        className="flex w-full cursor-pointer items-center justify-between p-6 text-left"
        onClick={onToggle}
      >
        <div className="flex items-center gap-3">
          <div className="bg-elite-teal/20 rounded-full p-3">
            <MapPin className="text-elite-teal h-6 w-6" />
          </div>
          <div>
            <h2 className="text-primary text-xl font-semibold">{data.state}</h2>
            <p className="text-muted text-sm">
              {data.counties.length} {data.counties.length === 1 ? "county" : "counties"} ·{" "}
              {data.counties.reduce((acc, c) => acc + c.towns.length, 0)} towns
            </p>
          </div>
        </div>
        <ChevronDown
          className={`text-muted h-5 w-5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
        />
      </button>
      {isExpanded && (
        <div className="border-t border-white/10 px-6 pb-6">
          {data.counties.map((county) => (
            <div key={county.name} className="mt-6">
              <h3 className="text-elite-teal mb-3 text-sm font-medium tracking-wide">
                {county.name.toUpperCase()} COUNTY
              </h3>
              <div
                className={
                  county.towns.length === 1
                    ? "grid grid-cols-1"
                    : "grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
                }
              >
                {county.towns.map((town) => (
                  <div
                    key={town.name}
                    className={`bg-canvas rounded-lg px-3 py-2 ${
                      county.towns.length === 1
                        ? "flex flex-col gap-2"
                        : "flex items-center justify-between"
                    }`}
                  >
                    <span className="text-primary text-sm">{town.name}</span>
                    <span
                      className={`text-muted text-xs ${county.towns.length === 1 ? "flex flex-wrap gap-x-2 gap-y-1" : ""}`}
                    >
                      {county.towns.length === 1
                        ? town.zips.map((zip) => (
                            <span key={zip} className="inline-block">
                              {zip}
                            </span>
                          ))
                        : town.zips.join(", ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function ServiceAreas() {
  const location = useLocation();
  const initialHash = location.hash.replace("#", "");

  const [expandedStates, setExpandedStates] = useState<Set<string>>(
    initialHash ? new Set([initialHash]) : new Set()
  );

  const stateCards = [
    { id: "pennsylvania", data: pennsylvaniaData },
    { id: "new-jersey", data: newJerseyData },
    { id: "delaware", data: delawareData }
  ];

  useEffect(() => {
    const hash = location.hash.replace("#", "");

    if (hash) {
      // delay scroll a bit to allow render
      setTimeout(() => {
        const element = document.getElementById(hash);

        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location.hash]);

  const toggleState = (stateId: string) => {
    setExpandedStates((prevStates) => {
      const nextState = new Set(prevStates);

      if (nextState.has(stateId)) {
        nextState.delete(stateId);
      } else {
        nextState.add(stateId);
      }

      return nextState;
    });
  };

  return (
    <article className="mx-auto max-w-6xl pb-24 md:pb-0">
      <header className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 lg:col-span-2">
          <p className="text-elite-teal mb-2 text-xs font-medium tracking-[0.2em]">SERVICE AREAS</p>
          <h1 className="text-primary font-serif text-3xl leading-tight md:text-4xl">
            Towns & Zip Codes We Serve
          </h1>
          <p className="text-muted mt-4 text-base">
            Elite Basement Solutions proudly serves the Tri-State area. Find your town below to
            confirm we service your location.
          </p>
        </div>
        <div className="bg-elite-teal flex flex-col items-center justify-center rounded-2xl p-6 text-center">
          <span className="text-4xl font-semibold text-white">3</span>
          <p className="mt-1 text-sm text-white/80">States Served</p>
          <span className="mt-2 text-2xl font-semibold text-white">
            {pennsylvaniaData.counties.length +
              newJerseyData.counties.length +
              delawareData.counties.length}
          </span>
          <p className="text-sm text-white/80">Counties</p>
        </div>
      </header>
      <section className="space-y-4">
        {stateCards.map(({ id, data }) => (
          <StateCard
            key={id}
            data={data}
            id={id}
            isExpanded={expandedStates.has(id)}
            onToggle={() => toggleState(id)}
          />
        ))}
      </section>
      <div className="mt-4">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#0d0d0d] p-6 md:flex-row md:p-8">
          <div>
            <p className="text-lg font-medium text-white md:text-xl">{`Don't see your town listed?`}</p>
            <p className="text-sm text-white/60">Contact us - we may still be able to help!</p>
          </div>
          <Link
            className="bg-elite-teal rounded-full px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            to="/contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </article>
  );
}
