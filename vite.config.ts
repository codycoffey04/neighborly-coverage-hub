import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { heroImagePreload } from "./vite-plugin-hero-preload";
import { cssPreload } from "./vite-plugin-css-preload";

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
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
