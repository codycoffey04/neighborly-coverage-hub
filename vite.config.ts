import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { heroImagePreload } from "./vite-plugin-hero-preload";
import { cssPreload } from "./vite-plugin-css-preload";
import prerender from '@prerenderer/rollup-plugin';
import { generateRoutes } from './scripts/generate-prerender-routes';

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
    // Pre-render only in production builds
    mode === "production" && prerender({
      routes: generateRoutes(),
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        // Wait for React to fully render via custom event
        renderAfterDocumentEvent: 'prerender-ready',
        // Puppeteer launch options
        headless: true,
      },
      postProcess(renderedRoute) {
        // Fix any localhost references in the rendered HTML
        renderedRoute.html = renderedRoute.html
          .replace(/http:\/\/localhost:\d+/g, 'https://coffeyagencies.com');
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
