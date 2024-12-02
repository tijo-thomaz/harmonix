import { defineConfig } from "vite";

export default defineConfig({
  root: "./templates", // Your root folder for templates
  base: "/harmonix/", // Set the base path for GitHub Pages
  build: {
    outDir: "../docs", // Output to the docs/ folder
    emptyOutDir: true,
  },
  server: {
    open: true,
  },
});
