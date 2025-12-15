import type { Plugin } from 'vite';

/**
 * Vite plugin to inject hero image preload hints into HTML head
 * This ensures LCP images are discoverable in initial HTML document
 */
export function heroImagePreload(): Plugin {
  return {
    name: 'hero-image-preload',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        // Find hero image assets in the built HTML
        // Look for assets/hero-background-mobile*.webp and assets/hero-background*.webp
        const heroMobileRegex = /assets\/hero-background-mobile[^"']*\.webp/g;
        const heroDesktopRegex = /assets\/hero-background[^"']*\.webp/g;
        
        const heroMobileMatches = html.match(heroMobileRegex);
        const heroDesktopMatches = html.match(heroDesktopRegex);
        
        if (heroMobileMatches || heroDesktopMatches) {
          const preloadTags: string[] = [];
          
          // Add mobile hero preload (use first match)
          if (heroMobileMatches && heroMobileMatches.length > 0) {
            const mobilePath = heroMobileMatches[0].startsWith('/') ? heroMobileMatches[0] : '/' + heroMobileMatches[0];
            preloadTags.push(
              `<link rel="preload" as="image" href="${mobilePath}" media="(max-width: 768px)" fetchpriority="high" />`
            );
          }
          
          // Add desktop hero preload (exclude mobile if it matches desktop pattern)
          if (heroDesktopMatches && heroDesktopMatches.length > 0) {
            const desktopPath = heroDesktopMatches[0].startsWith('/') ? heroDesktopMatches[0] : '/' + heroDesktopMatches[0];
            // Only add if it's different from mobile
            if (!heroMobileMatches || !heroMobileMatches.includes(heroDesktopMatches[0])) {
              preloadTags.push(
                `<link rel="preload" as="image" href="${desktopPath}" media="(min-width: 769px)" fetchpriority="high" />`
              );
            }
          }
          
          // Insert preload tags right after preconnect hints, before Google Fonts
          if (preloadTags.length > 0) {
            const preconnectEnd = html.indexOf('<!-- Google Fonts');
            if (preconnectEnd !== -1) {
              html = html.slice(0, preconnectEnd) + 
                     '\n    ' + preloadTags.join('\n    ') +
                     html.slice(preconnectEnd);
            } else {
              // Fallback: insert before closing </head>
              const headEnd = html.indexOf('</head>');
              if (headEnd !== -1) {
                html = html.slice(0, headEnd) + 
                       '\n    ' + preloadTags.join('\n    ') +
                       html.slice(headEnd);
              }
            }
          }
        }
        
        return html;
      },
    },
  };
}

