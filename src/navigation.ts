import { createNavigation } from "next-intl/navigation";
import { routing } from "./i18n/routing";

// Locale-aware navigation helpers — Link/redirect/etc. keep the active locale
// prefix on internal navigation.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
