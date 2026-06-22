import MainLayout from "@/components/layout/MainLayout";
import CategoryPage from "@/components/ui/category/CategoryPage";

// "PVC i ALU Stolarija" category page.
export default function PvcAluStolarija() {
  return (
    <MainLayout color="white">
      <CategoryPage namespace="PvcAlu" />
    </MainLayout>
  );
}
