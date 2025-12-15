import type { Plugin } from 'vite';

/**
 * Vite plugin to inject CSS preload hints into HTML head
 * This makes CSS non-blocking by using preload + onload swap pattern
 */
export function cssPreload(): Plugin {
  return {
    name: 'css-preload',
    transformIndexHtml: {
      order: 'post', // Run after other transforms, especially after Vite's HTML injection
      handler(html, ctx) {
        // Find CSS files in the built HTML (Vite generates hashed filenames like index-D7fjF7Z9.css)
        // Match <link rel="stylesheet" href="/assets/index-*.css"> with any attributes
        const cssLinkRegex = /<link([^>]*)\s+rel=["']stylesheet["']([^>]*)\s+href=["']([^"]*\/assets\/index-[^"]*\.css)["']([^>]*)>/gi;
        
        // Replace all CSS links with preload pattern
        html = html.replace(cssLinkRegex, (match, beforeRel, afterRel, href, afterHref) => {
          // Extract just the href path
          const cssPath = href;
          const normalizedPath = cssPath.startsWith('/') ? cssPath : '/' + cssPath;
          
          // Create preload pattern with onload swap
          return `<link rel="preload" href="${normalizedPath}" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="${normalizedPath}"></noscript>`;
        });
        
        return html;
      },
    },
  };
}

