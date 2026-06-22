import MainLayout from "@/components/layout/MainLayout";
import CncHero from "@/components/ui/cnc/CncHero";
import CncStats from "@/components/ui/cnc/CncStats";
import CncProcess from "@/components/ui/cnc/CncProcess";
import CncCapabilities from "@/components/ui/cnc/CncCapabilities";
import CtaBanner from "@/components/ui/home/CtaBanner";

// "CNC Obrada i Čelične Konstrukcije" — the showcase category page, designed
// more visually/dynamically than the other categories.
export default function CncObrada() {
  return (
    <MainLayout color="white">
      <main>
        <CncHero />
        <CncStats />
        <CncProcess />
        <CncCapabilities />
        <CtaBanner />
      </main>
    </MainLayout>
  );
}
