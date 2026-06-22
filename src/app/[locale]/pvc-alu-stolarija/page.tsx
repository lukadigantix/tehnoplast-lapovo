import MainLayout from "@/components/layout/MainLayout";
import CategoryPage from "@/components/ui/category/CategoryPage";

// "PVC i ALU Stolarija" category page. Photos indexed to the subcategory order:
// Decco 83 PVC, Schüco LIVIng82 PVC, Elvial W59 SI² ALU, Schüco AWS 75.SI ALU,
// HST Klizni Sistemi.
const PVC_IMAGES = [
  "/images/pvc-new/deco83.webp",
  "/images/pvc-new/schuco.webp",
  "/images/pvc-new/elvial.webp",
  "/images/pvc-new/schuco2.webp",
  "/images/pvc-new/hst.webp",
];

export default function PvcAluStolarija() {
  return (
    <MainLayout color="white">
      <CategoryPage
        namespace="PvcAlu"
        heroImage="/images/pvc-new/pvc-hero.webp"
        images={PVC_IMAGES}
      />
    </MainLayout>
  );
}
