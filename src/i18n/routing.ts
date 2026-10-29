import { defineRouting } from "next-intl/routing";

// Shared routing config used by the middleware, navigation helpers and the
// request config (next-intl v4). Srpski je osnovni jezik: otvara se bez
// prefiksa na "/", bez obzira na jezik browsera; ostali jezici su /en, /de, /fr.
export const routing = defineRouting({
  locales: ["sr", "de", "fr", "en"],
  defaultLocale: "sr",
  localePrefix: "as-needed",
  localeDetection: false,
});
