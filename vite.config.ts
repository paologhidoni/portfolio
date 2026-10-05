/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  build: {
    target: "es2020",
  },
  // esbuild 0.28+ cannot downlevel nested destructuring in react-icons during pre-bundle
  optimizeDeps: {
    esbuildOptions: {
      target: "esnext",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: "./src/test/setup.ts",
  },
});
