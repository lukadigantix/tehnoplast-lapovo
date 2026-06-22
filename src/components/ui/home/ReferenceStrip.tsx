import React from "react";
import { useTranslations } from "next-intl";
import SectionHeading from "./SectionHeading";

// Section 6 — references anchored by one oversized statistic on warm paper,
// with the locations as a hairline-divided list beside it.
const ReferenceStrip: React.FC = () => {
  const t = useTranslations("Home");
  const locations = t.raw("references.locations") as string[];

  return (
    <section className="bg-[#f4f2ef] py-28 text-[#111] md:py-40">
      <div className="wrapper">
        <SectionHeading
          index="04"
          eyebrow={t("references.eyebrow")}
          title={t("references.title")}
          subtitle={t("references.subtitle")}
          theme="light"
        />

        <div className="mt-16 grid gap-x-12 gap-y-12 lg:grid-cols-12">
          {/* Hero statistic */}
          <div className="lg:col-span-4">
            <div className="text-[5.5rem] font-black leading-[0.82] tracking-tighter md:text-[8rem]">
              5000<span className="text-[#e87722]">+</span>
            </div>
            <div className="mt-5 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-black/50">
              {t("references.countLabel")}
            </div>
          </div>

          {/* Locations list */}
          <div className="grid border-l border-t border-black/10 sm:grid-cols-2 lg:col-span-8 lg:col-start-5">
            {locations.map((location, i) => (
              <div
                key={i}
                className="group flex items-center justify-between border-b border-r border-black/10 px-6 py-6 transition-colors duration-200 hover:bg-white"
              >
                <span className="text-[1.05rem] font-black uppercase tracking-tight transition-colors duration-200 group-hover:text-[#e87722]">
                  {location}
                </span>
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-black/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferenceStrip;
