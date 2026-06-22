import React from "react";
import { useTranslations } from "next-intl";
import SectionHeading from "../home/SectionHeading";
import HeroStats, { HeroStat } from "../home/HeroStats";

// Section 02 — the brand numbers (reusing the homepage stat data + animated
// counters) on near-black.
const AboutStats: React.FC = () => {
  const t = useTranslations("O-nama");
  const tHome = useTranslations("Home");
  const stats = tHome.raw("heroStats") as HeroStat[];

  return (
    <section className="bg-[#111] py-28 text-white md:py-40">
      <div className="wrapper">
        <SectionHeading
          index="02"
          eyebrow={t("about.statsLabel")}
          title={t("about.statsTitle")}
        />
        <div className="mt-12">
          <HeroStats stats={stats} />
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
