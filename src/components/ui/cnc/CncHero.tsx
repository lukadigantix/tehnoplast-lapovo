import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import ImagePlaceholder from "../category/ImagePlaceholder";

type LinkItem = { name: string; link: string };

// CNC hero — heavier, more cinematic: breadcrumb + huge title, then a large
// full-width VIDEO placeholder as the centrepiece.
const CncHero: React.FC = () => {
  const t = useTranslations("Cnc");
  const tMenu = useTranslations("Menu");
  const pages = tMenu.raw("linx") as LinkItem[];
  const home = pages[0]?.name ?? "Početna";

  return (
    <section className="relative overflow-hidden bg-[#111] pb-16 pt-32 text-white md:pt-36">
      {/* Blueprint texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 12.5%), repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 88px)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, #000 10%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, #000 10%, transparent 85%)",
        }}
      />

      <div className="wrapper relative z-10">
        <nav className="mb-10 flex flex-wrap items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-white/40">
          <Link href="/" className="transition-colors duration-200 hover:text-white">
            {home}
          </Link>
          <span className="text-white/25">/</span>
          <Link
            href="/#kategorije"
            className="transition-colors duration-200 hover:text-white"
          >
            {tMenu("proizvodi")}
          </Link>
          <span className="text-white/25">/</span>
          <span className="text-[#e87722]">{t("title")}</span>
        </nav>

        <span className="mb-6 inline-flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-[#e87722]">
          <span className="h-px w-8 bg-[#e87722]" />
          {t("eyebrow")}
        </span>

        <h1 className="max-w-[16ch] break-words text-[3rem] font-black uppercase leading-[0.9] tracking-tight md:text-[5.5rem] xl:text-[7rem]">
          {t("title")}
        </h1>

        <p className="mt-8 max-w-[64ch] text-[1.1rem] leading-relaxed text-white/55">
          {t("subtitle")}
        </p>

        {/* Hero video placeholder */}
        <div className="mt-16">
          <ImagePlaceholder
            label={t("video")}
            theme="dark"
            className="aspect-video w-full md:aspect-[21/9]"
          />
        </div>
      </div>
    </section>
  );
};

export default CncHero;
