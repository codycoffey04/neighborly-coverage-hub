// This file generates the full list of routes to pre-render
// Used by vite.config.ts during production builds

import { cityData } from '../src/data/cityData';
import { learnArticles } from '../src/data/learnArticles';

export function generateRoutes(): string[] {
  // Static pages
  const staticRoutes = [
    '/',
    '/about',
    '/contact',
    '/faq',
    '/reviews',
    '/claims',
    '/refer',
    '/privacy',
    '/terms',
    '/service-areas',
    '/services',
    '/learn',
    '/powersports-insurance',
    '/resources/centre-al',
    '/resources/rome-ga',
  ];

  // Service pages
  const serviceRoutes = [
    '/services/auto-insurance',
    '/services/home-insurance',
    '/services/renters-insurance',
    '/services/condo-insurance',
    '/services/life-insurance',
    '/services/motorcycle-insurance',
    '/services/boat-insurance',
    '/services/atv-utv-insurance',
    '/services/mobile-home-insurance',
  ];

  // City pages (from cityData.ts)
  const cityRoutes = Object.keys(cityData).map(slug => `/${slug}`);

  // Learn articles (from learnArticles.ts)
  const learnRoutes = learnArticles.map(article => `/learn/${article.slug}`);

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...learnRoutes];
  
  console.log(`[Prerender] Generated ${allRoutes.length} routes to pre-render`);
  console.log(`  - Static: ${staticRoutes.length}`);
  console.log(`  - Services: ${serviceRoutes.length}`);
  console.log(`  - Cities: ${cityRoutes.length}`);
  console.log(`  - Learn articles: ${learnRoutes.length}`);
  
  return allRoutes;
}
