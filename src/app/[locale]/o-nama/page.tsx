import MainLayout from "@/components/layout/MainLayout";
import AboutHero from "@/components/ui/about/AboutHero";
import Marquee from "@/components/ui/about/Marquee";
import AboutStory from "@/components/ui/about/AboutStory";
import AboutStats from "@/components/ui/about/AboutStats";
import AboutCapabilities from "@/components/ui/about/AboutCapabilities";
import AboutOffices from "@/components/ui/about/AboutOffices";
import VideoSection from "@/components/ui/VideoSection";
import CtaBanner from "@/components/ui/home/CtaBanner";

// Redesigned "O nama" page, built on the homepage design system with a few new
// elements (video hero, keyword marquee, animated stats, scroll reveals).
export default function ONama() {
  return (
    <MainLayout color="white">
      <main>
        <AboutHero />
        <Marquee />
        <AboutStory />
        <AboutStats />
        <VideoSection />
        <AboutCapabilities />
        <AboutOffices />
        <CtaBanner />
      </main>
    </MainLayout>
  );
}
