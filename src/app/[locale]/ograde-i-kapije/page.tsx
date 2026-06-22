import MainLayout from "@/components/layout/MainLayout";
import CategoryPage from "@/components/ui/category/CategoryPage";

// "Ograde i Kapije" category page. Photos indexed to the subcategory order:
// ALU Ograde, Čelične Ograde CNC Laser, Klizne Kapije CNC Laser + Automatika.
const OGRADE_IMAGES = [
  "/images/ograde-new/alu-ograde.webp",
  "/images/ograde-new/celicne.webp",
  "/images/ograde-new/klizne.webp",
];

export default function OgradeIKapije() {
  return (
    <MainLayout color="white">
      <CategoryPage
        namespace="OgradeKapije"
        heroImage="/images/ograde-new/ograde-hero.webp"
        images={OGRADE_IMAGES}
      />
    </MainLayout>
  );
}
