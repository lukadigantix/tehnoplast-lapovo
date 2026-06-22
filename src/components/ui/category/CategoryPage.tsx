import React from "react";
import { useTranslations } from "next-intl";
import CategoryHero from "./CategoryHero";
import SubcategoryBlock, { Subcategory } from "./SubcategoryBlock";
import CtaBanner from "../home/CtaBanner";

interface CategoryPageProps {
  namespace: string;
}

// Shared category page body — hero + alternating system blocks (dark/paper) +
// CTA. Driven entirely by the given message namespace, so each category route
// is a one-liner that passes its namespace.
const CategoryPage: React.FC<CategoryPageProps> = ({ namespace }) => {
  const t = useTranslations(namespace);
  const subs = t.raw("subcategories") as Subcategory[];
  const labels = {
    specs: t("specsLabel"),
    features: t("featuresLabel"),
    image: t("image"),
  };

  return (
    <main>
      <CategoryHero namespace={namespace} />

      {subs.map((sub, i) => (
        <SubcategoryBlock
          key={i}
          sub={sub}
          index={i}
          theme={i % 2 === 0 ? "light" : "dark"}
          imageSide={i % 2 === 0 ? "left" : "right"}
          labels={labels}
        />
      ))}

      <CtaBanner />
    </main>
  );
};

export default CategoryPage;
