import MainLayout from "@/components/layout/MainLayout";
import CategoryPage from "@/components/ui/category/CategoryPage";

// "Pergole i Stakleni Sistemi" category page. Photos indexed to the subcategory
// order: Bioklimatska Pergola TP 160, Tekstilna Pergola TP-TEXTILE, Stakleni
// Sistemi, ZIP Screen Sistemi.
const PERGOLE_IMAGES = [
  "/images/pergole/bioklimatska.webp",
  "/images/pergole/tekstilne.webp",
  "/images/pergole/stakleni.webp",
  "/images/pergole/zip.webp",
];

export default function PergoleStakleniSistemi() {
  return (
    <MainLayout color="white">
      <CategoryPage
        namespace="PergoleStakleni"
        heroImage="/images/pergole/pergole-hero.webp"
        images={PERGOLE_IMAGES}
      />
    </MainLayout>
  );
}
