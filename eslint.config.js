import esLint from "@eslint/js";
import svelteESLint from "eslint-plugin-svelte";
import tsESLint from "typescript-eslint";

export default tsESLint.config(
  esLint.configs.recommended,
  tsESLint.configs.recommended,
  svelteESLint.configs["flat/recommended"],
);
