import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set up FlatCompat with the base directory
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Combine ESLint configurations for Next.js core web vitals and typescript
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Disable the `react/no-unescaped-entities` rule
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
