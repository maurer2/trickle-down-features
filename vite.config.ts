import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import type { PreprocessorGroup } from "svelte/compiler";

const componentLayerInjector = (): PreprocessorGroup => ({
  style({ content, filename }) {
    if (content.includes("@layer")) {
      console.info(
        `Skipping component layer injection for ${filename} as it already contains a "@layer" directive.`,
      );

      return;
    }

    const layeredContent = `@layer components { ${content} }`;

    return { code: layeredContent };
  },
});

// https://vite.dev/config/
export default defineConfig({
  base: "/trickle-down-features/",
  plugins: [
    svelte({
      preprocess: [componentLayerInjector()],
    }),
  ],
});
