import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      // We serve images via plain <img> on purpose (avoids next/image
      // optimization limits/cost), so silence this advisory rule.
      "@next/next/no-img-element": "off",
      // Standard Embla carousel init syncs snap state in an effect — this
      // opinionated rule is a false positive there.
      "react-hooks/set-state-in-effect": "off",
    },
  },
];

export default eslintConfig;
