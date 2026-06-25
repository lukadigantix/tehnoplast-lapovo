import React from "react";
import { useTranslations } from "next-intl";
import { FaInstagram } from "react-icons/fa";
import { ArrowDown } from "lucide-react";

// Contact hero — clean dark statement (no video here, for variety) with the
// primary email + phone shown large and clickable.
const ContactHero: React.FC = () => {
  const t = useTranslations("Kontakt");
  const tMenu = useTranslations("Menu");

  return (
    <section className="relative flex min-h-[88svh] flex-col justify-between overflow-hidden bg-[#111] pb-12 pt-28 text-white md:pt-36">
      {/* Faint blueprint guide lines + soft orange glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12.5%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(110% 70% at 90% 0%, rgba(232,119,34,0.12) 0%, transparent 55%)",
        }}
      />

      {/* Top meta */}
      <div className="wrapper relative z-10 flex items-start justify-between">
        <span className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-[#e87722]">
          <span className="h-px w-8 bg-[#e87722]" />
          {tMenu("kontakt")}
        </span>
        <div className="hidden text-right text-[0.68rem] font-bold uppercase leading-5 tracking-[0.28em] text-white/40 md:block">
          <div>Lapovo — Srbija</div>
          <div>Est. 25+ Godina</div>
        </div>
      </div>

      {/* Headline + direct contact */}
      <div className="wrapper relative z-10">
        <h1 className="max-w-[16ch] text-[2.1rem] font-black uppercase leading-[0.95] tracking-tight sm:text-[2.8rem] sm:leading-[0.92] md:text-[5rem] xl:text-[6rem]">
          {t("contact.heroTitle")}
        </h1>

        <div className="mt-10 grid items-end gap-8 sm:mt-12 lg:grid-cols-12">
          <p className="text-[0.98rem] leading-relaxed text-white/55 sm:text-[1.05rem] lg:col-span-5 lg:max-w-[42ch]">
            {t("mainSubtitle")}
          </p>

          <div className="flex flex-col gap-2 lg:col-span-6 lg:col-start-7 lg:items-end">
            <a
              href="mailto:office@tehnoplast.co.rs"
              className="break-words text-[1.2rem] font-black tracking-tight transition-colors duration-200 hover:text-[#e87722] sm:text-[1.5rem] md:text-[2.4rem]"
            >
              office@tehnoplast.co.rs
            </a>
            <a
              href="tel:+381604665590"
              className="text-[1.2rem] font-black tracking-tight text-white/70 transition-colors duration-200 hover:text-[#e87722] sm:text-[1.5rem] md:text-[2.4rem]"
            >
              +381 60 466 5590
            </a>
            <a
              href="https://www.instagram.com/tehnoplast.co.rs/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="mt-4 text-white/50 transition-colors duration-200 hover:text-[#e87722]"
            >
              <FaInstagram size={26} />
            </a>
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

export default ContactHero;
