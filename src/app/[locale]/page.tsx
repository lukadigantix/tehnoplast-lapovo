import MainLayout from "@/components/layout/MainLayout";
import HomeHero from "@/components/ui/home/HomeHero";
import HomeCategories from "@/components/ui/home/HomeCategories";
import WhyTehnoplast from "@/components/ui/home/WhyTehnoplast";
import ProcessStrip from "@/components/ui/home/ProcessStrip";
import ReferenceStrip from "@/components/ui/home/ReferenceStrip";
import CtaBanner from "@/components/ui/home/CtaBanner";

// Redesigned homepage. MainLayout provides the shared chrome (Nav + Sidemenu +
// Footer); the sections below are the homepage-only content. color="white"
// gives the light logo, since the hero sits on the dark brand background.
export default function Home() {
  return (
    <MainLayout color="white">
      <main>
        <HomeHero />
        <HomeCategories />
        <WhyTehnoplast />
        <ProcessStrip />
        <ReferenceStrip />
        <CtaBanner />
      </main>
    </MainLayout>
  );
}
