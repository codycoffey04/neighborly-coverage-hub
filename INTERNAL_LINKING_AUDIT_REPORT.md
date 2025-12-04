# Internal Linking Audit Report

## Site Inventory

### 1. City Pages: **24 total**
- **Alabama (11 cities)**: Centre, Trussville, Birmingham, Montgomery, Mobile, Dothan, Auburn, Phenix City, Foley, Troy, Enterprise
- **Georgia (13 cities)**: Rome, Atlanta, Lawrenceville, Duluth, Cartersville, Calhoun, Cedartown, Summerville, Suwanee, Alpharetta, Powder Springs, Rockmart, Forsyth
- **Routes**: `/:citySlug` (e.g., `/centre-al`, `/rome-ga`)

### 2. Service Pages: **6 total**
- `/services/auto-insurance`
- `/services/home-insurance`
- `/services/renters-insurance`
- `/services/condo-insurance`
- `/services/life-insurance`
- `/services/motorcycle-insurance`

### 3. Learn Articles: **8 total**
- `auto-insurance-guide`
- `home-insurance-guide`
- `renters-insurance-guide`
- `condo-insurance-guide`
- `life-insurance-guide`
- `alabama-insurance-requirements`
- `georgia-insurance-requirements`
- `bundling-home-and-auto`

## Current Internal Linking State

### ✅ **Service Pages → City Pages: COMPLETE**
**Status**: Already implemented ✓
- All 6 service pages have "Areas We Serve" sections
- Each section links to all 24 cities (11 Alabama + 13 Georgia)
- Links use descriptive anchor text (city names)
- Example: AutoInsurance.tsx lines 681-710 link all cities

### ✅ **City Pages → Service Pages: COMPLETE**
**Status**: Already implemented ✓
- All 24 city pages use CityPageTemplate component
- Services array (lines 41-78) includes all 6 service pages with links
- Service cards are clickable and link to respective service pages
- Example: `/services/auto-insurance`, `/services/home-insurance`, etc.

### ✅ **Service Pages → Related Services: COMPLETE**
**Status**: Already implemented ✓
- All service pages have "Complete Your Coverage" sections
- Each section links to the other 5 related services
- Links use descriptive anchor text and service names
- Example: AutoInsurance.tsx lines 558-664 shows all other services

### ⚠️ **Learn Articles → Service Pages: NEEDS IMPROVEMENT**
**Status**: Partially implemented
- Learn articles have `internalLinks` array
- Current links mostly go to `/contact` and other Learn articles
- **Missing**: Direct links to relevant service pages
- Example: `auto-insurance-guide` should link to `/services/auto-insurance`

### ❌ **Learn Articles → City Pages: NOT IMPLEMENTED**
**Status**: Missing
- No city page links in Learn articles
- No contextual mentions of specific cities
- **Need**: Add 2-3 relevant city links per article

## Improvement Plan

### Priority 1: Learn Articles → Service Pages
**Action**: Add service page links to each Learn article's `internalLinks` array

- `auto-insurance-guide` → Link to `/services/auto-insurance`
- `home-insurance-guide` → Link to `/services/home-insurance`
- `renters-insurance-guide` → Link to `/services/renters-insurance`
- `condo-insurance-guide` → Link to `/services/condo-insurance`
- `life-insurance-guide` → Link to `/services/life-insurance`
- `alabama-insurance-requirements` → Link to relevant services
- `georgia-insurance-requirements` → Link to relevant services
- `bundling-home-and-auto` → Link to `/services/auto-insurance` and `/services/home-insurance`

### Priority 2: Learn Articles → City Pages
**Action**: Add 2-3 relevant city links to each Learn article

**Strategy for city selection**:
- Service-specific articles: Link to office cities + major metros
- State requirement articles: Link to major cities in that state
- Bundle articles: Link to office cities + high-value markets

**City link suggestions**:
- `auto-insurance-guide`: Centre (AL), Rome (GA), Birmingham (AL)
- `home-insurance-guide`: Centre (AL), Rome (GA), Trussville (AL)
- `renters-insurance-guide`: Auburn (AL - student), Atlanta (GA - metro), Birmingham (AL)
- `condo-insurance-guide`: Atlanta (GA), Birmingham (AL), Montgomery (AL)
- `life-insurance-guide`: Centre (AL), Rome (GA), Birmingham (AL)
- `alabama-insurance-requirements`: Centre (AL), Birmingham (AL), Montgomery (AL)
- `georgia-insurance-requirements`: Rome (GA), Atlanta (GA), Lawrenceville (GA)
- `bundling-home-and-auto`: Centre (AL), Rome (GA), Trussville (AL)

### Priority 3: Contextual Body Links
**Action**: Add contextual links within article body content (if appropriate)

- Consider adding inline links within article paragraphs where natural
- Only where contextually relevant (not forced)
- Example: "Alabama minimums" text could link to `/centre-al` or `/birmingham-al`

## Implementation Notes

1. **Descriptive anchor text**: Use service/city names, not "click here"
2. **Natural placement**: Links should feel contextual, not forced
3. **Limit over-linking**: 3-5 contextual links per page is sufficient
4. **Only link to existing pages**: All 24 cities and 6 services verified

## Expected Improvements

- Better crawlability for service pages from Learn articles
- Better crawlability for city pages from Learn articles
- Enhanced user experience with relevant cross-linking
- Improved SEO value through internal link equity distribution
- Better discovery of location-specific content

## Summary

**Current State**: 75% complete
- Service ↔ City linking: ✅ Complete
- Service ↔ Service linking: ✅ Complete  
- Learn → Service linking: ⚠️ Needs improvement
- Learn → City linking: ❌ Missing

**Work Required**:
- Update 8 Learn articles with service page links
- Add 2-3 city links to each of 8 Learn articles
- Total: ~24 new links added

