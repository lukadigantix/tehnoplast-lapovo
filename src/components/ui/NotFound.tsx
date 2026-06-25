"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// 404 screen — dark, editorial, matching the category hero language: faint
// blueprint texture, giant code numeral, eyebrow + heavy uppercase title.
const NotFound: React.FC = () => {
  const t = useTranslations("NotFound");

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#111] pb-24 pt-40 text-white md:pt-44">
      {/* Faint blueprint grid, fading out via a radial mask */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 12.5%), repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 88px)",
          maskImage:
            "radial-gradient(ellipse 60% 70% at 50% 45%, #000 6%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 70% at 50% 45%, #000 6%, transparent 78%)",
        }}
      />

      <div className="wrapper relative z-10">
        <span className="mb-8 inline-flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-[#e87722]">
          <span className="h-px w-8 bg-[#e87722]" />
          {t("eyebrow")}
        </span>

        <h1 className="text-[6rem] font-black uppercase leading-[0.82] tracking-tighter sm:text-[9rem] md:text-[14rem] xl:text-[16rem]">
          {t("code")}
        </h1>

        <h2 className="mt-6 max-w-[20ch] text-[1.8rem] font-black uppercase leading-[0.95] tracking-tight md:text-[3rem]">
          {t("title")}
        </h2>

        <p className="mt-7 max-w-[56ch] text-[1.05rem] leading-relaxed text-white/55">
          {t("text")}
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-3 bg-[#e87722] px-8 py-5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#111] transition-colors duration-200 hover:bg-[#ff8a2e]"
          >
            {t("home")}
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/#kategorije"
            className="group inline-flex items-center justify-center gap-3 border border-white/20 px-8 py-5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:border-white/60"
          >
            {t("categories")}
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
