import { defineRouting } from "next-intl/routing";

// Shared routing config used by the middleware, navigation helpers and the
// request config (next-intl v4).
export const routing = defineRouting({
  locales: ["sr", "de", "fr", "en"],
  defaultLocale: "sr",
});
