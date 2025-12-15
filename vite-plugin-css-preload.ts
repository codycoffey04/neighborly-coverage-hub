import type { Plugin } from 'vite';

/**
 * Vite plugin to inject CSS preload hints into HTML head
 * This makes CSS non-blocking by using preload + onload swap pattern
 */
export function cssPreload(): Plugin {
  return {
    name: 'css-preload',
    transformIndexHtml: {
      order: 'post', // Run after other transforms
      handler(html, ctx) {
        // Find CSS files in the built HTML (Vite generates hashed filenames)
        // Match both /assets/index-*.css and assets/index-*.css patterns
        const cssLinkRegex = /<link\s+rel="stylesheet"\s+href="([^"]*\/assets\/index-[^"]*\.css)"[^>]*>/g;
        const cssMatches = Array.from(html.matchAll(cssLinkRegex));
        
        if (cssMatches.length > 0) {
          // Process each CSS link found (in reverse to avoid index issues)
          for (let i = cssMatches.length - 1; i >= 0; i--) {
            const match = cssMatches[i];
            const cssPath = match[1];
            const fullLinkTag = match[0];
            
            // Ensure path starts with /
            const normalizedPath = cssPath.startsWith('/') ? cssPath : '/' + cssPath;
            
            // Replace blocking stylesheet link with preload pattern
            const preloadPattern = `<link rel="preload" href="${normalizedPath}" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="${normalizedPath}"></noscript>`;
            
            // Replace the original link tag
            html = html.replace(fullLinkTag, preloadPattern);
          }
        }
        
        return html;
      },
    },
  };
}

