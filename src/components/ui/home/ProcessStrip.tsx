"use client";

import React from "react";
import { useTranslations } from "next-intl";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";

interface ProcItem {
  title: string;
  list: string[];
}
interface ProcStep {
  category: string;
  description?: string;
  items?: ProcItem[];
}

// Turn a phone/email list entry into a link; leave everything else as text.
function renderLine(value: string) {
  const v = value.trim();
  if (/^\+?[\d\s/]+$/.test(v)) {
    return (
      <a
        href={`tel:${v.replace(/[\s/]/g, "")}`}
        className="transition-colors duration-200 hover:text-[#e87722]"
      >
        {v}
      </a>
    );
  }
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
    return (
      <a
        href={`mailto:${v}`}
        className="transition-colors duration-200 hover:text-[#e87722]"
      >
        {v}
      </a>
    );
  }
  return <span>{v}</span>;
}

// Section 5 — the real five-step process as a minimal accordion on near-black.
// Radix drives accessibility + smooth height animation; the first step opens by
// default, the index/title turn orange when active, and + rotates into ×.
const ProcessStrip: React.FC = () => {
  const t = useTranslations("Home");
  const steps = t.raw("proces") as ProcStep[];

  return (
    <section className="bg-[#111] py-28 text-white md:py-40">
      <div className="wrapper">
        <SectionHeading
          index="03"
          eyebrow={t("process.eyebrow")}
          title={t("process.title")}
          subtitle={t("process.subtitle")}
        />

        <Accordion.Root
          type="single"
          collapsible
          defaultValue="step-0"
          className="mt-16 border-t border-white/15"
        >
          {steps.map((step, i) => {
            // The category already carries a "1. " prefix; strip it so the
            // accordion's own index numeral is the only number shown.
            const title = step.category.replace(/^\s*\d+[.)]?\s*/, "");

            return (
              <Accordion.Item
                key={i}
                value={`step-${i}`}
                className="border-b border-white/15"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center gap-6 py-7 text-left outline-none md:gap-10 md:py-9">
                    <span className="w-[2ch] shrink-0 text-[1.1rem] font-black tabular-nums text-white/30 transition-colors duration-300 group-data-[state=open]:text-[#e87722] md:text-[1.4rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="min-w-0 flex-1 break-words text-[1.45rem] font-black uppercase leading-[1.05] tracking-tight transition-colors duration-300 group-hover:text-[#e87722] group-data-[state=open]:text-[#e87722] md:text-[2.2rem]">
                      {title}
                    </span>

                    <Plus
                      size={26}
                      strokeWidth={1.6}
                      className="shrink-0 text-white/40 transition-all duration-300 group-hover:text-white group-data-[state=open]:rotate-[135deg] group-data-[state=open]:text-[#e87722]"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="pb-11 pl-12 pr-6 md:pl-[4.5rem] md:pr-12">
                    {step.description && (
                      <p className="max-w-[68ch] text-[0.98rem] leading-relaxed text-white/55 md:text-[1.05rem]">
                        {step.description}
                      </p>
                    )}

                    {step.items && step.items.length > 0 && (
                      <div className="mt-9 grid gap-x-12 gap-y-9 border-t border-white/10 pt-9 sm:grid-cols-2">
                        {step.items.map((item, j) => (
                          <div key={j}>
                            <h5 className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#e87722]">
                              {item.title}
                            </h5>
                            {item.list && item.list.length > 0 && (
                              <ul className="space-y-2.5">
                                {item.list.map((li, k) => (
                                  <li
                                    key={k}
                                    className="flex gap-3 text-[0.92rem] leading-relaxed text-white/65"
                                  >
                                    <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-[#e87722]" />
                                    {renderLine(li)}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            );
          })}
        </Accordion.Root>
      </div>
    </section>
  );
};

export default ProcessStrip;
