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

        <div className="mt-14 grid gap-x-12 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-[1.7rem] font-black uppercase leading-[1.1] tracking-tight md:text-[2.2rem]">
              <span className="text-[#e87722]">“</span>
              Precizno. Pouzdano. Kvalitetno.
              <span className="text-[#e87722]">”</span>
            </p>
            <p className="mt-8 max-w-[60ch] text-[1rem] leading-relaxed text-black/60">
              {t("subheading2")}
            </p>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="mb-8 h-px w-full bg-black/15" />
            <p className="text-[1rem] leading-relaxed text-black/60">
              {t("subheading1")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
