import { defineConfig } from "vite";

export default defineConfig({
  root: "./templates",
  build: {
    outDir: "../docs", // Output for GH Pages
    emptyOutDir: true,
  },
  server: {
    open: true,
  },
});
