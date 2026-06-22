import MainLayout from "@/components/layout/MainLayout";
import CategoryPage from "@/components/ui/category/CategoryPage";

// "Ograde i Kapije" category page.
export default function OgradeIKapije() {
  return (
    <MainLayout color="white">
      <CategoryPage namespace="OgradeKapije" />
    </MainLayout>
  );
}
