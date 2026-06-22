import React from "react";
import { useTranslations } from "next-intl";
import HeroStats, { HeroStat } from "../home/HeroStats";

// Highlighted CNC stats (24+ / 5000+ / 2000m² / 30+) with animated counters.
const CncStats: React.FC = () => {
  const t = useTranslations("Cnc");
  const stats = t.raw("stats") as HeroStat[];

  return (
    <section className="border-t border-white/10 bg-[#161616] py-20 text-white md:py-24">
      <div className="wrapper">
        <span className="mb-10 inline-flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-white/40">
          <span className="h-px w-8 bg-[#e87722]" />
          {t("statsLabel")}
        </span>
        <HeroStats stats={stats} />
      </div>
    </section>
  );
};

export default CncStats;
