"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../home/SectionHeading";

const OFFICE_EMAIL = "office@tehnoplast.co.rs";
const OFFICE_PHONE = "+381 60 466 5590";
const OFFICE_ADDRESS = "Kosovskih junaka 20, 34220 Lapovo, Srbija";

// Section 01 — inquiry form on warm paper. With no backend wired up, submitting
// composes a pre-filled email via the visitor's mail client (mailto). The right
// column carries the direct contact details.
const ContactForm: React.FC = () => {
  const t = useTranslations("Kontakt");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Upit — ${form.name || "Tehnoplast"}`;
    const body = [
      `${t("contact.name")}: ${form.name}`,
      `${t("contact.email")}: ${form.email}`,
      `${t("contact.phone")}: ${form.phone}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${OFFICE_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const inputClass =
    "w-full border border-black/15 bg-white px-4 py-3.5 text-[0.95rem] text-[#111] outline-none transition-colors duration-200 placeholder:text-black/35 focus:border-[#e87722]";
  const labelClass =
    "mb-2 block text-[0.65rem] font-bold uppercase tracking-[0.22em] text-black/45";

  return (
    <section className="bg-[#f4f2ef] py-28 text-[#111] md:py-40">
      <div className="wrapper">
        <SectionHeading
          index="01"
          eyebrow={t("contact.formLabel")}
          title={t("contact.formTitle")}
          theme="light"
        />

        <div className="mt-14 grid gap-x-16 gap-y-12 lg:grid-cols-12">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7"
          >
            <div>
              <label htmlFor="name" className={labelClass}>
                {t("contact.name")}
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>
                {t("contact.phone")}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className={labelClass}>
                {t("contact.email")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className={labelClass}>
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
            </div>
            <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-3 bg-[#111] px-8 py-4 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-[#e87722]"
              >
                {t("contact.submit")}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>
              <p className="text-[0.78rem] text-black/45">
                {t("contact.formNote")}
              </p>
            </div>
          </form>

          {/* Direct contact */}
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="mb-6 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-black/45">
              {t("contact.directLabel")}
            </p>
            <div className="flex flex-col gap-5 border-t border-black/15 pt-6">
              <a
                href={`mailto:${OFFICE_EMAIL}`}
                className="text-[1.1rem] font-black tracking-tight transition-colors duration-200 hover:text-[#e87722]"
              >
                {OFFICE_EMAIL}
              </a>
              <a
                href="tel:+381604665590"
                className="text-[1.1rem] font-black tracking-tight transition-colors duration-200 hover:text-[#e87722]"
              >
                {OFFICE_PHONE}
              </a>
              <p className="text-[0.95rem] leading-relaxed text-black/60">
                {OFFICE_ADDRESS}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
