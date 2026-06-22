import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { ArrowRight } from "lucide-react";

// Section 7 — full-bleed orange CTA above the footer. Left-aligned, heavy
// uppercase headline against a flat ink button (no centering, no shadow). A
// faint blueprint texture + brand wordmark fill the otherwise empty band.
const CtaBanner: React.FC = () => {
  const t = useTranslations("Home");

  return (
    <section className="relative overflow-hidden bg-[#e87722] py-24 text-[#111] md:py-32">
      {/* Faint blueprint grid — strongest in the centre, fading out to the
          edges via a radial mask */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(17,17,17,0.08) 0 1px, transparent 1px 12.5%), repeating-linear-gradient(0deg, rgba(17,17,17,0.08) 0 1px, transparent 1px 88px)",
          maskImage:
            "radial-gradient(ellipse 55% 68% at 50% 50%, #000 8%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 55% 68% at 50% 50%, #000 8%, transparent 80%)",
        }}
      />

      <div className="wrapper relative z-10 grid items-center gap-10 lg:grid-cols-12">
        <h2 className="text-[2.5rem] font-black uppercase leading-[0.92] tracking-tight lg:col-span-7 md:text-[4.6rem]">
          {t("ctaBanner.title")}
        </h2>

        <div className="lg:col-span-4 lg:col-start-9">
          {/* Brand wordmark (placeholder for the logo) */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-[#111]" />
            <span className="text-[1.3rem] font-black uppercase tracking-tight text-[#111]">
              Tehnoplast
            </span>
          </div>

          <p className="mb-7 text-[1.05rem] leading-relaxed text-[#111]/80">
            {t("ctaBanner.subtitle")}
          </p>

          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-3 bg-[#111] px-8 py-5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-black"
          >
            {t("ctaBanner.button")}
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>

          {/* Direct contact */}
          <div className="mt-8 flex flex-col gap-1 border-t border-[#111]/20 pt-6 text-[0.92rem] font-semibold text-[#111]/75">
            <a
              href="mailto:office@tehnoplast.co.rs"
              className="w-fit transition-colors duration-200 hover:text-[#111]"
            >
              office@tehnoplast.co.rs
            </a>
            <a
              href="tel:+381604665590"
              className="w-fit transition-colors duration-200 hover:text-[#111]"
            >
              +381 60 466 5590
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
