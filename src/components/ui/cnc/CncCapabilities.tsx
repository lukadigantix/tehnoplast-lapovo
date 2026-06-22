"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import ImagePlaceholder from "../category/ImagePlaceholder";

interface Spec {
  label: string;
  value: string;
}
interface Capability {
  name: string;
  kind: string;
  media: "video" | "image";
  specs: Spec[];
  features: string[];
}

const reveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

// The four technologies as large alternating blocks on near-black, each with a
// big VIDEO / SLIKA placeholder, a spec table and feature tags.
const CncCapabilities: React.FC = () => {
  const t = useTranslations("Cnc");
  const caps = t.raw("subcategories") as Capability[];

  return (
    <section className="bg-[#111] py-28 text-white md:py-40">
      <div className="wrapper">
        <div className="mb-20 max-w-[760px]">
          <span className="mb-6 inline-flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-white/40">
            <span className="h-px w-8 bg-[#e87722]" />
            {t("capabilitiesLabel")}
          </span>
          <h2 className="text-[2.2rem] font-black uppercase leading-[0.95] tracking-tight md:text-[3.4rem]">
            {t("capabilitiesTitle")}
          </h2>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {caps.map((cap, i) => {
            const right = i % 2 === 1;
            return (
              <motion.div
                key={i}
                {...reveal}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={right ? "lg:order-2" : ""}>
                  <ImagePlaceholder
                    label={cap.media === "video" ? t("video") : t("image")}
                    theme="dark"
                    className="aspect-video w-full"
                  />
                </div>

                <div className={`min-w-0 ${right ? "lg:order-1" : ""}`}>
                  <div className="mb-5 flex items-center gap-4">
                    <span className="text-[1.1rem] font-black tabular-nums text-[#e87722] md:text-[1.3rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.62rem] font-bold uppercase tracking-[0.28em] text-white/50">
                      {cap.kind}
                    </span>
                  </div>

                  <h3 className="break-words text-[1.9rem] font-black uppercase leading-[1.0] tracking-tight md:text-[2.7rem]">
                    {cap.name}
                  </h3>

                  <p className="mb-3 mt-9 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-white/50">
                    {t("specsLabel")}
                  </p>
                  <dl className="divide-y divide-white/10 border-t border-white/15">
                    {cap.specs.map((s, k) => (
                      <div
                        key={k}
                        className="flex items-baseline justify-between gap-6 py-3.5"
                      >
                        <dt className="text-[0.9rem] text-white/50">{s.label}</dt>
                        <dd className="text-right text-[1rem] font-black">
                          {s.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  {cap.features?.length > 0 && (
                    <>
                      <p className="mb-3 mt-9 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-white/50">
                        {t("featuresLabel")}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cap.features.map((f, k) => (
                          <span
                            key={k}
                            className="border border-white/20 px-3.5 py-2 text-[0.78rem] font-semibold text-white/75"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CncCapabilities;
