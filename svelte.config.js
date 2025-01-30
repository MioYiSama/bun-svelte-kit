import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "svelte-adapter-bun";

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      precompress: true,
    }),
    typescript: {
      config(config) {
        return {
          ...config,
          include: [
            "../src/**/*",
            "../static/**/*.js",
            "../*.config.js",
            "../*.config.ts",
          ],
        };
      },
    },
  },
};
