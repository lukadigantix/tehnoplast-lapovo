"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import { AppWindow, Sun, Fence, Cog, LucideIcon } from "lucide-react";
import SectionHeading from "../home/SectionHeading";

interface CategoryCard {
  title: string;
  description: string;
}

const ICONS: LucideIcon[] = [AppWindow, Sun, Fence, Cog];

const gridVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const cellVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// Section 03 — what Tehnoplast produces, as a 2×2 hairline grid on warm paper.
// Reuses the localized homepage category data in a calmer layout; cells flip to
// a dark tile on hover, rising in as the section scrolls into view.
const AboutCapabilities: React.FC = () => {
  const t = useTranslations("O-nama");
  const tHome = useTranslations("Home");
  const cards = tHome.raw("categoryCards") as CategoryCard[];

  return (
    <section className="bg-[#f4f2ef] py-28 text-[#111] md:py-40">
      <div className="wrapper">
        <SectionHeading
          index="03"
          eyebrow={t("about.capabilitiesLabel")}
          title={t("about.capabilitiesTitle")}
          theme="light"
        />

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid border-l border-t border-black/10 sm:grid-cols-2"
        >
          {cards.map((card, i) => {
            const Icon = ICONS[i] ?? AppWindow;
            return (
              <motion.div
                key={i}
                variants={cellVariants}
                className="group flex min-h-[260px] flex-col border-b border-r border-black/10 p-9 transition-colors duration-300 hover:bg-[#111] md:min-h-[300px] md:p-12"
              >
                <div className="flex items-start justify-between">
                  <Icon size={34} strokeWidth={1.5} className="text-[#e87722]" />
                  <span className="text-[1.8rem] font-black tabular-nums leading-none text-black/[0.08] transition-colors duration-300 group-hover:text-white/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-auto pt-12">
                  <div className="mb-4 h-px w-10 bg-[#e87722] transition-all duration-300 group-hover:w-16" />
                  <h3 className="text-[1.4rem] font-black uppercase leading-tight tracking-tight transition-colors duration-300 group-hover:text-white md:text-[1.7rem]">
                    {card.title}
                  </h3>
                  <p className="mt-3 max-w-[44ch] text-[0.95rem] leading-relaxed text-black/55 transition-colors duration-300 group-hover:text-white/60">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCapabilities;
