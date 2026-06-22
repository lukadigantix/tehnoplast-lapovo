"use client";

import React from "react";
import { useTranslations } from "next-intl";
import OfficesGrid, { Office } from "../shared/OfficesGrid";

// Section 02 — the offices/locations on the Contact page (localized Kontakt data).
const ContactOffices: React.FC = () => {
  const t = useTranslations("Kontakt");
  const offices = t.raw("kontakt") as Office[];

  return (
    <OfficesGrid
      index="02"
      eyebrow={t("contact.officesLabel")}
      title={t("contact.officesTitle")}
      offices={offices}
    />
  );
};

export default ContactOffices;
