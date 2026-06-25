import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { ArrowRight, ArrowDown } from "lucide-react";

// About hero — same dark, video-backed treatment as the homepage hero, with
// an "about" headline and a scroll cue at the bottom.
const AboutHero: React.FC = () => {
  const t = useTranslations("O-nama");
  const tHome = useTranslations("Home");

  return (
    <section className="relative flex min-h-svh flex-col justify-between overflow-hidden bg-[#111] pb-12 pt-28 text-white md:pt-36">
      {/* Ambient production footage */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 grayscale"
      >
        <source src="/video/onama-video.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 85% -10%, rgba(232,119,34,0.12) 0%, transparent 50%), linear-gradient(90deg, #111 0%, rgba(17,17,17,0.92) 42%, rgba(17,17,17,0.6) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#111] to-transparent"
      />

      {/* Top meta row */}
      <div className="wrapper relative z-10 flex items-start justify-between">
        <span className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-[#e87722]">
          <span className="h-px w-8 bg-[#e87722]" />
          {t("about.eyebrow")}
        </span>
        <div className="hidden text-right text-[0.68rem] font-bold uppercase leading-5 tracking-[0.28em] text-white/40 md:block">
          <div>Lapovo — Srbija</div>
          <div>Est. 25+ Godina</div>
        </div>
      </div>

      {/* Headline */}
      <div className="wrapper relative z-10">
        <h1 className="max-w-[20ch] text-[2.1rem] font-black uppercase leading-[0.95] tracking-tight sm:text-[2.6rem] md:text-[4.6rem] xl:text-[5.6rem]">
          {t("about.heroTitle")}
        </h1>

        <div className="mt-10 grid items-end gap-8 lg:grid-cols-12">
          <p className="text-[0.98rem] leading-relaxed text-white/55 sm:text-[1.05rem] lg:col-span-6 lg:max-w-[46ch]">
            {t("mainSubtitle")}
          </p>
          <div className="flex lg:col-span-6 lg:justify-end">
            <Link
              href="/kontakt"
              className="group inline-flex w-full items-center justify-center gap-3 bg-[#e87722] px-8 py-5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-[#ff8a2e] sm:w-auto"
            >
              {tHome("hero.ctaSecondary")}
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="wrapper relative z-10">
        <ArrowDown size={20} className="animate-bounce text-[#e87722]" />
      </div>
    </section>
  );
};

export default AboutHero;
