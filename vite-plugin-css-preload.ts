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
        // Look for <link rel="stylesheet" href="/assets/index-*.css">
        const cssLinkRegex = /<link\s+rel="stylesheet"\s+href="([^"]*\/assets\/index-[^"]*\.css)"/g;
        const cssMatches = Array.from(html.matchAll(cssLinkRegex));
        
        if (cssMatches.length > 0) {
          // Process each CSS link found
          cssMatches.forEach(match => {
            const cssPath = match[1];
            const fullLinkTag = match[0];
            
            // Replace blocking stylesheet link with preload pattern
            const preloadPattern = `<link rel="preload" href="${cssPath}" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="${cssPath}"></noscript>`;
            
            // Replace the original link tag
            html = html.replace(fullLinkTag, preloadPattern);
          });
        }
        
        return html;
      },
    },
  };
}

