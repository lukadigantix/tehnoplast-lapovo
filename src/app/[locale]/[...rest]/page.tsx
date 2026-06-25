import { notFound } from "next/navigation";

// Catch-all for unknown paths under a locale — forces Next to render the
// localized not-found.tsx (inside the [locale] layout, so it gets i18n + nav).
export default function CatchAllPage() {
  notFound();
}
