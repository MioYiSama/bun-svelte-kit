import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "svelte-adapter-bun";

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    typescript: {
      config(config) {
        return {
          ...config,
          include: ["../src/**/*", "../*.config.js", "../*.config.ts"],
        };
      },
    },
  },
};
