import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Extracts city slugs from cityData.ts
 * The file exports: export const cityData: Record<string, CityData> = { "slug": {...}, ... }
 */
function getCitySlugs() {
  const cityDataPath = resolve(__dirname, '../src/data/cityData.ts');
  const content = readFileSync(cityDataPath, 'utf-8');

  // Match pattern: "city-slug": { at the start of city entries
  const slugRegex = /"([a-z0-9-]+)":\s*\{[\s\S]*?slug:\s*"([a-z0-9-]+)"/g;
  const slugs = [];
  let match;

  while ((match = slugRegex.exec(content)) !== null) {
    // Use the key (first capture group) as it's the slug used in routes
    slugs.push(match[1]);
  }

  return [...new Set(slugs)]; // Remove duplicates
}

/**
 * Extracts article slugs from learnArticles.ts
 * The file exports: export const learnArticles: LearnArticle[] = [{ slug: "...", ... }]
 */
function getLearnArticleSlugs() {
  const articlesPath = resolve(__dirname, '../src/data/learnArticles.ts');
  const content = readFileSync(articlesPath, 'utf-8');

  // Match pattern: slug: "article-slug"
  const slugRegex = /slug:\s*"([a-z0-9-]+)"/g;
  const slugs = [];
  let match;

  while ((match = slugRegex.exec(content)) !== null) {
    slugs.push(match[1]);
  }

  return [...new Set(slugs)]; // Remove duplicates
}

/**
 * Returns all static routes that don't depend on dynamic data
 */
function getStaticRoutes() {
  return [
    '/',
    '/about',
    '/contact',
    '/faq',
    '/reviews',
    '/service-areas',
    '/privacy',
    '/terms',
    '/claims',
    '/thank-you',
    '/refer',
    '/learn',
    '/services',
    '/services/auto-insurance',
    '/services/home-insurance',
    '/services/renters-insurance',
    '/services/condo-insurance',
    '/services/life-insurance',
    '/services/motorcycle-insurance',
    '/services/boat-insurance',
    '/services/atv-utv-insurance',
    '/services/mobile-home-insurance',
    '/powersports-insurance',
    '/resources/centre-al',
    '/resources/rome-ga',
  ];
}

/**
 * Returns all routes that should be pre-rendered
 */
export function getPrerenderRoutes() {
  const staticRoutes = getStaticRoutes();
  const citySlugs = getCitySlugs();
  const articleSlugs = getLearnArticleSlugs();

  const cityRoutes = citySlugs.map(slug => `/${slug}`);
  const articleRoutes = articleSlugs.map(slug => `/learn/${slug}`);

  const allRoutes = [
    ...staticRoutes,
    ...articleRoutes,
    ...cityRoutes,
  ];

  console.log(`[Prerender] Found ${staticRoutes.length} static routes`);
  console.log(`[Prerender] Found ${citySlugs.length} city pages`);
  console.log(`[Prerender] Found ${articleSlugs.length} learn articles`);
  console.log(`[Prerender] Total routes to prerender: ${allRoutes.length}`);

  return allRoutes;
}

// Allow running directly for testing
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const routes = getPrerenderRoutes();
  console.log('\nAll routes:');
  routes.forEach(r => console.log(`  ${r}`));
}
