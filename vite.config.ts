import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    modules: {
      generateScopedName: "[folder]--[local]-[hash:base64:5]",
      localsConvention: "camelCase",
    },
  },
  test: {
    includeSource: ["src/**/*.{ts}"],
  },
});
