import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { ArrowRight } from "lucide-react";
import HeroStats, { HeroStat } from "./HeroStats";

// Section 1 — full-screen industrial hero on near-black.
// MainLayout renders the Nav (logo + hamburger) on top of this, so the top
// padding clears it. Faint vertical rules evoke an engineering drawing.
const HomeHero: React.FC = () => {
  const t = useTranslations("Home");
  const stats = t.raw("heroStats") as HeroStat[];

  return (
    <section className="relative flex min-h-svh flex-col justify-between overflow-hidden bg-[#111] pb-10 pt-28 text-white md:pt-36">
      {/* Ambient production footage — barely visible, desaturated, behind everything */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.22] grayscale"
      >
        <source src="/video/onama-video.mp4" type="video/mp4" />
      </video>

      {/* Mood + legibility overlay: keeps the headline side dark, lets the
          footage breathe on the right, with a soft orange glow up top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 85% -10%, rgba(232,119,34,0.12) 0%, transparent 50%), linear-gradient(90deg, #111 0%, rgba(17,17,17,0.92) 42%, rgba(17,17,17,0.6) 100%)",
        }}
      />
      {/* Bottom fade so the stat strip stays readable */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#111] to-transparent"
      />
      {/* Faint blueprint vertical guide lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12.5%)",
        }}
      />

      {/* Top meta row */}
      <div className="wrapper relative z-10 flex items-start justify-between">
        <span className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-[#e87722]">
          <span className="h-px w-8 bg-[#e87722]" />
          {t("hero.tagline")}
        </span>
        <div className="hidden text-right text-[0.68rem] font-bold uppercase leading-5 tracking-[0.28em] text-white/40 md:block">
          <div>Lapovo — Srbija</div>
          <div>Est. 25+ Godina</div>
        </div>
      </div>

      {/* Headline + CTAs */}
      <div className="wrapper relative z-10 my-10 sm:my-14">
        <h1 className="max-w-[18ch] text-[2.1rem] font-black uppercase leading-[0.95] tracking-tight sm:text-[2.7rem] sm:leading-[0.92] md:text-[5rem] xl:text-[6.2rem]">
          {t("hero.titleLead")}{" "}
          <span className="text-[#e87722]">{t("hero.titleAccent")}</span>
        </h1>

        <div className="mt-10 grid items-end gap-8 sm:gap-10 sm:mt-12 lg:grid-cols-12">
          <p className="text-[0.98rem] leading-relaxed text-white/55 sm:text-[1.05rem] lg:col-span-6 lg:max-w-[44ch]">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-0 lg:col-span-6 lg:justify-end">
            <a
              href="#kategorije"
              className="group inline-flex w-full items-center justify-center gap-3 bg-[#e87722] px-8 py-5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-[#ff8a2e] sm:w-auto"
            >
              {t("hero.ctaPrimary")}
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            <Link
              href="/kontakt"
              className="inline-flex w-full items-center justify-center gap-3 border border-white/25 px-8 py-5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:border-white hover:bg-white/5 sm:w-auto sm:border-l-0"
            >
              {t("hero.ctaSecondary")}
            </Link>
          </div>
        </div>
      </div>

      {/* Stat strip */}
      <div className="wrapper relative z-10">
        <HeroStats stats={stats} />
      </div>
    </section>
  );
};

export default HomeHero;
