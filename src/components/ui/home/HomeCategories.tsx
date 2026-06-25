import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

interface CategoryCard {
  title: string;
  description: string;
  subcategories: string[];
}

// Section 3 — the four catalog categories as a full-bleed editorial list.
// Each row is a hairline-divided band that floods orange on hover; the index
// numeral, title, subcategory run and arrow all invert to ink. Cards link to
// "#" until the new category pages exist.
// Live category routes, indexed to the categoryCards order. "#" until built.
const CARD_LINKS = [
  "/pvc-alu-stolarija",
  "/pergole-stakleni-sistemi",
  "/ograde-i-kapije",
  "/cnc-obrada",
];

const HomeCategories: React.FC = () => {
  const t = useTranslations("Home");
  const cards = t.raw("categoryCards") as CategoryCard[];

  return (
    <section id="kategorije" className="bg-[#111] py-28 text-white md:py-40">
      <div className="wrapper">
        <SectionHeading
          index="01"
          eyebrow={t("categoriesSection.eyebrow")}
          title={t("categoriesSection.title")}
          subtitle={t("categoriesSection.subtitle")}
        />

        <div className="mt-16 border-t border-white/15">
          {cards.map((card, i) => (
            <Link
              key={i}
              href={CARD_LINKS[i] ?? "#"}
              className={`group block px-1 transition-colors duration-200 hover:bg-[#e87722] md:px-4 ${
                i < cards.length - 1 ? "border-b border-white/15" : ""
              }`}
            >
              <div className="flex items-start gap-3 py-7 sm:gap-4 md:grid md:grid-cols-12 md:items-center md:py-12">
                <span className="mt-1 shrink-0 text-[0.85rem] font-black tabular-nums text-white/30 transition-colors duration-200 group-hover:text-[#111] md:col-span-2 md:mt-0 md:text-[1.4rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1 md:col-span-8">
                  <h3 className="break-words text-[1.3rem] font-black uppercase leading-[1.05] tracking-tight transition-colors duration-200 group-hover:text-[#111] md:text-[2.9rem]">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 break-words text-[0.7rem] uppercase tracking-[0.1em] text-white/35 transition-colors duration-200 group-hover:text-[#111]/70 sm:mt-4 sm:text-[0.82rem] sm:tracking-[0.12em]">
                    {card.subcategories.join("  ·  ")}
                  </p>
                </div>

                <div className="shrink-0 self-center md:col-span-2 md:flex md:justify-end">
                  <ArrowUpRight
                    strokeWidth={1.4}
                    className="h-6 w-6 text-white/30 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#111] md:h-[34px] md:w-[34px]"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCategories;
