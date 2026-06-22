"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import {
  Factory,
  Ruler,
  Cog,
  Wrench,
  BadgeCheck,
  Phone,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

interface WhyItem {
  title: string;
  text: string;
}

// Thin line icons (not emoji), indexed to match why.items in the messages.
const ICONS: LucideIcon[] = [Factory, Ruler, Cog, Wrench, BadgeCheck, Phone];

// Section 4 — advantages as a horizontal carousel on warm paper (swipe / drag /
// arrow keys). Distinct from every other section: it scrolls sideways instead
// of stacking. Cards flip to a dark tile on hover with the orange icon popping.
const WhyTehnoplast: React.FC = () => {
  const t = useTranslations("Home");
  const items = t.raw("why.items") as WhyItem[];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [snaps, setSnaps] = useState<number[]>([]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
    setSelected(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);
    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-[#f4f2ef] py-28 text-[#111] md:py-40">
      <div className="wrapper">
        {/* Header — consistent with the other sections, with the carousel
            arrows tucked to the right on desktop */}
        <div className="flex items-end justify-between gap-8">
          <div className="flex-1">
            <SectionHeading
              index="02"
              eyebrow={t("why.eyebrow")}
              title={t("why.title")}
              subtitle={t("why.subtitle")}
              theme="light"
            />
          </div>
          <div className="hidden shrink-0 gap-3 lg:flex">
            <CarouselButton
              direction="prev"
              disabled={!canPrev}
              onClick={() => emblaApi?.scrollPrev()}
            />
            <CarouselButton
              direction="next"
              disabled={!canNext}
              onClick={() => emblaApi?.scrollNext()}
            />
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-14 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {items.map((item, i) => {
              const Icon = ICONS[i] ?? BadgeCheck;
              return (
                <div
                  key={i}
                  className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[48%] lg:basis-[32%]"
                >
                  <div className="group flex h-full min-h-[320px] flex-col border border-black/12 bg-white/50 p-8 transition-colors duration-300 hover:bg-[#111] md:p-9">
                    <div className="flex items-start justify-between">
                      <Icon
                        size={32}
                        strokeWidth={1.5}
                        className="text-[#e87722]"
                      />
                      <span className="text-[1.6rem] font-black tabular-nums leading-none text-black/[0.08] transition-colors duration-300 group-hover:text-white/10">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-auto pt-12">
                      <div className="mb-4 h-px w-10 bg-[#e87722] transition-all duration-300 group-hover:w-16" />
                      <h4 className="text-[1.2rem] font-black uppercase leading-tight tracking-tight transition-colors duration-300 group-hover:text-white">
                        {item.title}
                      </h4>
                      <p className="mt-3 text-[0.92rem] leading-relaxed text-black/55 transition-colors duration-300 group-hover:text-white/60">
                        {item.text}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.6}
                      className="mt-6 text-[#e87722] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls — progress dots + arrows (arrows visible on mobile here) */}
        <div className="mt-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {snaps.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  i === selected
                    ? "w-8 bg-[#e87722]"
                    : "w-4 bg-black/20 hover:bg-black/40"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-3 lg:hidden">
            <CarouselButton
              direction="prev"
              disabled={!canPrev}
              onClick={() => emblaApi?.scrollPrev()}
            />
            <CarouselButton
              direction="next"
              disabled={!canNext}
              onClick={() => emblaApi?.scrollNext()}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Sharp, hairline-bordered arrow button — fills to ink on hover, dims when disabled.
const CarouselButton: React.FC<{
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}> = ({ direction, disabled, onClick }) => (
  <button
    aria-label={direction === "prev" ? "Prethodno" : "Sledeće"}
    onClick={onClick}
    disabled={disabled}
    className="grid h-12 w-12 place-content-center border border-black/15 text-[#111] transition-colors duration-200 hover:border-[#111] hover:bg-[#111] hover:text-white disabled:pointer-events-none disabled:opacity-25"
  >
    {direction === "prev" ? (
      <ArrowLeft size={18} strokeWidth={1.8} />
    ) : (
      <ArrowRight size={18} strokeWidth={1.8} />
    )}
  </button>
);

export default WhyTehnoplast;
