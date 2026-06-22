import MainLayout from "@/components/layout/MainLayout";
import CategoryPage from "@/components/ui/category/CategoryPage";

// "Pergole i Stakleni Sistemi" category page.
export default function PergoleStakleniSistemi() {
  return (
    <MainLayout color="white">
      <CategoryPage namespace="PergoleStakleni" />
    </MainLayout>
  );
}
