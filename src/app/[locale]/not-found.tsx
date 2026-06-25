import MainLayout from "@/components/layout/MainLayout";
import NotFound from "@/components/ui/NotFound";

// Localized 404 page — rendered inside the standard layout (nav + footer).
export default function NotFoundPage() {
  return (
    <MainLayout color="white">
      <NotFound />
    </MainLayout>
  );
}
