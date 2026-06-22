import React from "react";
import { useTranslations } from "next-intl";
import SectionHeading from "../home/SectionHeading";

// Section 01 — editorial story on warm paper: a large brand pull-quote on the
// left, supporting paragraphs split across the asymmetric grid.
const AboutStory: React.FC = () => {
  const t = useTranslations("O-nama");

  return (
    <section className="bg-[#f4f2ef] py-28 text-[#111] md:py-40">
      <div className="wrapper">
        <SectionHeading
          index="01"
          eyebrow={t("about.storyLabel")}
          title={t("heading2")}
          theme="light"
        />

        <div className="mt-14 grid gap-x-12 gap-y-6 lg:grid-cols-12">
          {/* Headline row — pull-quote and aside label share a baseline */}
          <p className="self-end text-[1.7rem] font-black uppercase leading-[1.1] tracking-tight md:text-[2.2rem] lg:col-span-7 lg:row-start-1">
            <span className="text-[#e87722]">“</span>
            Precizno. Pouzdano. Kvalitetno.
            <span className="text-[#e87722]">”</span>
          </p>
          <h3 className="self-end text-[1.3rem] font-black uppercase leading-[1.05] tracking-tight md:text-[1.6rem] lg:col-span-4 lg:col-start-9 lg:row-start-1">
            {t("heading1")}
          </h3>

          {/* Body row — both paragraphs align on one baseline */}
          <p className="max-w-[60ch] border-t border-black/15 pt-6 text-[1rem] leading-relaxed text-black/60 lg:col-span-7 lg:row-start-2">
            {t("subheading2")}
          </p>
          <p className="border-t border-black/15 pt-6 text-[1rem] leading-relaxed text-black/60 lg:col-span-4 lg:col-start-9 lg:row-start-2">
            {t("subheading1")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
