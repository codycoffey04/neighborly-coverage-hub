import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { heroImagePreload } from "./vite-plugin-hero-preload";
import { cssPreload } from "./vite-plugin-css-preload";
import prerender from "@prerenderer/rollup-plugin";
import puppeteerRenderer from "@prerenderer/renderer-puppeteer";
import { getPrerenderRoutes } from "./scripts/generate-prerender-routes.js";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    heroImagePreload(),
    cssPreload(),
    ViteImageOptimizer({
      jpg: {
        quality: 80,
        progressive: true,
        mozjpeg: true,
      },
      jpeg: {
        quality: 80,
        progressive: true,
        mozjpeg: true,
      },
      png: {
        quality: 80,
        compressionLevel: 9,
      },
      webp: {
        quality: 80,
        lossless: false,
      },
      cache: true,
      cacheLocation: '.cache/vite-plugin-image-optimizer',
    }),
    mode === "production" && prerender({
      routes: getPrerenderRoutes(),
      renderer: new puppeteerRenderer({
        // Wait 3 seconds for lazy-loaded components to finish rendering
        renderAfterTime: 3000,
        headless: true,
      }),
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
