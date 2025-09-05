import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig({
  // base: "/trickle-down-features/",
  base: "/trickle-down-features/",
  plugins: [svelte()],
});
