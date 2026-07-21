import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    // Plasmic-generated skeleton component wrappers use an empty interface
    // (`interface XProps extends DefaultXProps {}`) as a deliberate placeholder
    // for props you may add later — that's intentional, not a smell.
    files: ["components/*.tsx"],
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
    },
  },
]);

export default eslintConfig;
