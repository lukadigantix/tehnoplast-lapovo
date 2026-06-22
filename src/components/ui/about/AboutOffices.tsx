"use client";

import React from "react";
import { useTranslations } from "next-intl";
import OfficesGrid, { Office } from "../shared/OfficesGrid";

// Section 04 — the offices/locations on the About page (localized O-nama data).
const AboutOffices: React.FC = () => {
  const t = useTranslations("O-nama");
  const offices = t.raw("kontakt") as Office[];

  return (
    <OfficesGrid
      index="04"
      eyebrow={t("about.officesLabel")}
      title={t("about.officesTitle")}
      offices={offices}
    />
  );
};

export default AboutOffices;
