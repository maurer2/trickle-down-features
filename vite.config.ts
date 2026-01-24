import { defineConfig, type PluginOption } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// virtual module to wrap each svelte component style in "@layer components {}"
// https://github.com/maurer2/tailwind-config-via-vite-virtual-module/blob/main/vite.config.ts
const layerInjector = (): PluginOption => {
  const moduleId = "virtual:princess-leia";
  const moduleIdResolved = `\0${moduleId}`;

  const styleStartRegex = /<style>/i;
  const styleEndRegex = /<\/style>/i;
  const layerString = ["@layer components {", "}"] as const;

  return {
    name: "layer-injector",
    enforce: "pre",
    resolveId(id) {
      if (id === moduleId) {
        return moduleIdResolved;
      }
      return undefined;
    },
    transform(fileContent, fileName) {
      if (!fileName.endsWith(".svelte")) {
        return fileContent;
      }

      // test
      if (fileName.endsWith("Home.svelte")) {
        const startMatch = fileContent.match(styleStartRegex);
        const endMatch = fileContent.match(styleEndRegex);

        if (startMatch !== null && endMatch !== null) {
          const startPosition = startMatch?.index ?? 0;
          const endPosition = endMatch?.index ?? 0;

          const fileContentWithLayer = [
            [
              // string before end of opening "<style>"
              fileContent.slice(0, startPosition + startMatch?.[0].length),
              layerString[0],
            ],
            [
              // string between opening and closing "<style>" tag
              fileContent.slice(
                startPosition + startMatch?.[0].length,
                endPosition,
              ),
              layerString[1],
              // closing "</style>" tag
              fileContent.slice(-startMatch?.[0].length - 2),
            ],
          ]
            .flat()
            .join("");

          return fileContentWithLayer;
        }
      }

      return fileContent;
    },
  };
};

// https://vite.dev/config/
export default defineConfig({
  base: "/trickle-down-features/",
  plugins: [layerInjector(), svelte()],
});
