import "leaflet/dist/leaflet.css";
import MainLayout from "@/components/layout/MainLayout";
import ContactHero from "@/components/ui/contact/ContactHero";
import ContactForm from "@/components/ui/contact/ContactForm";
import ContactOffices from "@/components/ui/contact/ContactOffices";
import ContactMap from "@/components/ui/contact/ContactMap";

// Redesigned Contact page on the homepage design system: dark hero with direct
// contact, an inquiry form (mailto), the offices grid and a full-bleed map.
export default function Kontakt() {
  return (
    <MainLayout color="white">
      <main>
        <ContactHero />
        <ContactForm />
        <ContactOffices />
        <ContactMap />
      </main>
    </MainLayout>
  );
}
