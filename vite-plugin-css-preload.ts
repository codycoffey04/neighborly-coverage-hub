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
      handler(html) {
        // More flexible regex to match CSS links regardless of attribute order
        // Matches: <link href="..." rel="stylesheet"> OR <link rel="stylesheet" href="...">
        const cssLinkRegex = /<link\s+[^>]*href="([^"]*\.css)"[^>]*>/gi;
        
        return html.replace(cssLinkRegex, (match, cssPath) => {
          // Only process if it's a stylesheet link
          if (!match.includes('rel="stylesheet"')) {
            return match;
          }
          
          // Skip if already a preload
          if (match.includes('rel="preload"')) {
            return match;
          }
          
          // Replace blocking stylesheet link with preload pattern
          return `<link rel="preload" href="${cssPath}" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="${cssPath}"></noscript>`;
        });
      },
    },
  };
}
