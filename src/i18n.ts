import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales = ["sr", "de", "fr", "en"];

const defaultLocale = "sr";

type Dict = Record<string, unknown>;

// Deep-merge a translation over the Serbian base so any key missing from a
// locale falls back to Serbian instead of throwing. Arrays and primitives are
// replaced wholesale; nested objects (namespaces) merge recursively.
function deepMerge(base: Dict, override: Dict): Dict {
  const out: Dict = { ...base };
  for (const key of Object.keys(override)) {
    const b = base[key];
    const o = override[key];
    if (
      o &&
      typeof o === "object" &&
      !Array.isArray(o) &&
      b &&
      typeof b === "object" &&
      !Array.isArray(b)
    ) {
      out[key] = deepMerge(b as Dict, o as Dict);
    } else {
      out[key] = o;
    }
  }
  return out;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !locales.includes(locale)) {
    notFound();
  }

  const localeMessages = (await import(`@/messages/${locale}.json`)).default;

  // The Serbian file is the source of truth; other locales fall back to it.
  if (locale === defaultLocale) {
    return { locale, messages: localeMessages };
  }

  const baseMessages = (await import(`@/messages/${defaultLocale}.json`))
    .default;

  return {
    locale,
    messages: deepMerge(baseMessages as Dict, localeMessages as Dict),
  };
});
