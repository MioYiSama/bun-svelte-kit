import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import ts from "typescript-eslint";

export default ts.config(
  js.configs.recommended,
  ts.configs.strictTypeChecked,
  ts.configs.stylisticTypeChecked,
  svelte.configs["flat/recommended"],
  svelte.configs["flat/prettier"],
  prettier,
  {
    ignores: [".svelte-kit/**/*", "node_modules/**/*", "build/**/*"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        Bun: "readonly",
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["**/*.svelte"],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
        extraFileExtensions: ["svelte"],
      },
    },
  },
);
