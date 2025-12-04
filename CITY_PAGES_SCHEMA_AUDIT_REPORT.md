# City Pages Schema Audit Report
**Date:** 2025-01-27  
**Template:** `/src/components/city/CityPageTemplate.tsx`  
**Data Source:** `/src/data/cityData.ts`  
**Total City Pages:** 24

---

## Executive Summary

All 24 city pages use a shared template with **good schema implementation** for most required schemas. However, there are **critical issues** with Place schema (missing geo coordinates), LocalBusiness schema (wrong type, missing properties), and missing Organization schema reference.

---

## Required Schemas Checklist

| Schema Type | Required | Status |
|------------|----------|--------|
| Place schema | ✅ | ⚠️ Present but incomplete |
| LocalBusiness schema | ✅ | ⚠️ Present but incorrect (office cities only) |
| Organization schema (reference) | ✅ | ❌ Missing |
| FAQPage schema | ✅ | ✅ Present |
| BreadcrumbList schema | ✅ | ✅ Present |

---

## City Pages Breakdown

### Total Cities: 24
- **Alabama Cities:** 11 (Centre, Trussville, Birmingham, Montgomery, Mobile, Dothan, Auburn, Phenix City, Foley, Troy, Enterprise)
- **Georgia Cities:** 13 (Rome, Atlanta, Lawrenceville, Duluth, Cartersville, Calhoun, Cedartown, Summerville, Suwanee, Alpharetta, Forsyth, Rockmart, Powder Springs)

### Office Cities: 2
- **Centre, AL** (`centre-al`) - Office city, nearestOffice: centre
- **Rome, GA** (`rome-ga`) - Office city, nearestOffice: rome

### Non-Office Cities: 22
- **Alabama:** 10 cities (all use nearestOffice: centre)
- **Georgia:** 12 cities (all use nearestOffice: rome)

---

## Schema Analysis

### 1. Place Schema
**Status:** ⚠️ Present but incomplete  
**Location:** Lines 213-227 in `CityPageTemplate.tsx`

#### Present Properties:
- ✅ @type: Place
- ✅ @id: `https://coffeyagencies.com/${city.slug}#place` (unique per city)
- ✅ name: `${city.city}, ${city.state}`
- ✅ description: City-specific description
- ✅ address: PostalAddress with city, state, ZIP codes
- ✅ containsPlace: Neighborhoods array ✅

#### Missing Properties:
- ❌ **geo coordinates** (latitude/longitude)
  - Required for local SEO and map integration
  - Should include GeoCoordinates object

#### Neighborhoods Verification:
- ✅ All cities have neighborhoods in `containsPlace`
- ✅ Neighborhood counts range from 12-16 per city
- ✅ Format: `{ "@type": "Place", "name": neighborhood }`

---

### 2. LocalBusiness Schema
**Status:** ⚠️ Present but incorrect (office cities only)  
**Location:** Lines 188-210 in `CityPageTemplate.tsx`

#### Present Properties:
- ✅ Only renders for office cities (`city.isOfficeCity && office`)
- ✅ name: `Coffey Agencies - ${office.dba}`
- ✅ address: PostalAddress
- ✅ telephone
- ✅ priceRange, image, url
- ✅ openingHours
- ✅ aggregateRating

#### Missing/Incorrect Properties:
- ❌ **@type:** Uses `InsuranceAgency` instead of `LocalBusiness`
- ❌ **@id:** Missing (should be `https://coffeyagencies.com/#centre-office` or `#rome-office`)
- ❌ **geo coordinates:** Missing latitude/longitude
- ❌ **parentOrganization:** Missing reference to Organization @id
- ❌ **openingHoursSpecification:** Uses string format instead of array format

#### Office Assignment Verification:
- ✅ **Alabama cities:** All correctly use Centre office (`nearestOffice: "centre"`)
- ✅ **Georgia cities:** All correctly use Rome office (`nearestOffice: "rome"`)
- ✅ **Office cities:** Centre and Rome correctly identified as `isOfficeCity: true`

---

### 3. Organization Schema (Reference)
**Status:** ❌ Missing  
**Location:** Not present in template

#### Required:
- Organization schema or reference to `https://coffeyagencies.com/#organization`
- Should be included in @graph array for all city pages

#### Current State:
- No Organization schema present
- No reference to Organization @id
- Service pages reference Organization via `provider` @id, but city pages don't have this

---

### 4. FAQPage Schema
**Status:** ✅ Present and correct  
**Location:** Lines 173-185 in `CityPageTemplate.tsx`

#### Verification:
- ✅ All 24 cities have 8 FAQs each
- ✅ FAQPage schema maps from `city.faqs` array
- ✅ Questions are city-specific
- ✅ Format: `{ "@type": "Question", "name": question, "acceptedAnswer": { "@type": "Answer", "text": answer } }`

#### FAQ Counts:
- ✅ Centre, AL: 8 FAQs
- ✅ All other cities: 8 FAQs each

---

### 5. BreadcrumbList Schema
**Status:** ✅ Present and correct  
**Location:** Lines 230-254 in `CityPageTemplate.tsx`

#### Verification:
- ✅ All city pages have BreadcrumbList
- ✅ Format: Home → Service Areas → City Name
- ✅ Correct URLs and positions

---

## Critical Issues Found

### Issue #1: Place Schema Missing Geo Coordinates
**Severity:** 🔴 High  
**Affected:** All 24 city pages

**Problem:**
Place schema does not include `geo` property with latitude/longitude coordinates.

**Required:**
```json
"geo": {
  "@type": "GeoCoordinates",
  "latitude": "34.1519",
  "longitude": "-85.6789"
}
```

**Impact:**
- Missing geo coordinates reduces local SEO effectiveness
- Search engines can't accurately map service areas
- Missing data for map integrations

---

### Issue #2: LocalBusiness Schema Uses Wrong Type
**Severity:** 🔴 High  
**Affected:** 2 office city pages (Centre, Rome)

**Problem:**
LocalBusiness schema uses `@type: "InsuranceAgency"` instead of `@type: "LocalBusiness"`.

**Current:**
```json
{
  "@type": "InsuranceAgency",  // ❌ Should be LocalBusiness
  "name": "Coffey Agencies - Cody Coffey Agency",
  // ... missing @id, geo, parentOrganization
}
```

**Required:**
```json
{
  "@type": "LocalBusiness",
  "@id": "https://coffeyagencies.com/#centre-office",
  "geo": { "@type": "GeoCoordinates", "latitude": "...", "longitude": "..." },
  "parentOrganization": { "@id": "https://coffeyagencies.com/#organization" },
  // ... other properties
}
```

---

### Issue #3: LocalBusiness Schema Missing Properties
**Severity:** 🔴 High  
**Affected:** 2 office city pages (Centre, Rome)

**Missing Properties:**
- ❌ @id (should match homepage office @ids)
- ❌ geo coordinates
- ❌ parentOrganization reference
- ⚠️ openingHoursSpecification (uses string instead of array)

---

### Issue #4: Missing Organization Schema Reference
**Severity:** 🟡 Medium  
**Affected:** All 24 city pages

**Problem:**
No Organization schema or reference in city page schemas.

**Required:**
Add Organization schema or reference to `https://coffeyagencies.com/#organization` in @graph array.

---

### Issue #5: LocalBusiness Schema Only for Office Cities
**Severity:** 🟡 Medium  
**Affected:** 22 non-office city pages

**Current Behavior:**
- Office cities (Centre, Rome): Have LocalBusiness schema
- Non-office cities: No LocalBusiness schema

**Question:**
Should non-office cities also have LocalBusiness schema for the nearest office? This would provide better local SEO for all cities.

**Recommendation:**
Consider adding LocalBusiness schema for nearest office on all city pages, not just office cities.

---

## Schema Structure Verification

### Current @graph Array Structure:
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      // ... FAQPage properties
    },
    {
      "@type": "Place",
      "@id": "https://coffeyagencies.com/{city-slug}#place",
      // ... Place properties (missing geo)
    },
    {
      "@type": "BreadcrumbList",
      // ... BreadcrumbList properties
    },
    // LocalBusiness only if city.isOfficeCity
    {
      "@type": "InsuranceAgency",  // ❌ Should be LocalBusiness
      // ... LocalBusiness properties (missing @id, geo, parentOrganization)
    }
  ]
}
```

### Required @graph Array Structure:
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://coffeyagencies.com/#organization"
      // ... or reference via @id
    },
    {
      "@type": "FAQPage",
      // ... FAQPage properties
    },
    {
      "@type": "Place",
      "@id": "https://coffeyagencies.com/{city-slug}#place",
      "geo": { "@type": "GeoCoordinates", "latitude": "...", "longitude": "..." },
      // ... Place properties
    },
    {
      "@type": "BreadcrumbList",
      // ... BreadcrumbList properties
    },
    {
      "@type": "LocalBusiness",  // ✅ Correct type
      "@id": "https://coffeyagencies.com/#{office}-office",
      "geo": { "@type": "GeoCoordinates", "latitude": "...", "longitude": "..." },
      "parentOrganization": { "@id": "https://coffeyagencies.com/#organization" },
      // ... LocalBusiness properties
    }
  ]
}
```

---

## @id Reference Consistency

### Place Schema @ids:
- ✅ Format: `https://coffeyagencies.com/{city-slug}#place`
- ✅ All 24 cities have unique @ids
- ✅ Matches format used in service page `areaServed` references

### LocalBusiness Schema @ids:
- ❌ Missing @id on office city pages
- **Required:** 
  - Centre: `https://coffeyagencies.com/#centre-office`
  - Rome: `https://coffeyagencies.com/#rome-office`

---

## Neighborhoods Verification

### All Cities Have Neighborhoods:
- ✅ Centre, AL: 14 neighborhoods
- ✅ Trussville, AL: 12 neighborhoods
- ✅ Birmingham, AL: 16 neighborhoods
- ✅ Montgomery, AL: 16 neighborhoods
- ✅ Mobile, AL: 16 neighborhoods
- ✅ Dothan, AL: 16 neighborhoods
- ✅ Auburn, AL: 14 neighborhoods
- ✅ Phenix City, AL: 12 neighborhoods
- ✅ Foley, AL: 12 neighborhoods
- ✅ Troy, AL: 12 neighborhoods
- ✅ Enterprise, AL: 12 neighborhoods
- ✅ Rome, GA: 12 neighborhoods
- ✅ Atlanta, GA: 12 neighborhoods
- ✅ Lawrenceville, GA: 16 neighborhoods
- ✅ Duluth, GA: 16 neighborhoods
- ✅ Cartersville, GA: 12 neighborhoods
- ✅ Calhoun, GA: 12 neighborhoods
- ✅ Cedartown, GA: 12 neighborhoods
- ✅ Summerville, GA: 12 neighborhoods
- ✅ Suwanee, GA: 12 neighborhoods
- ✅ Alpharetta, GA: 12 neighborhoods
- ✅ Forsyth, GA: 12 neighborhoods
- ✅ Rockmart, GA: 12 neighborhoods
- ✅ Powder Springs, GA: 12 neighborhoods

**All neighborhoods correctly included in Place schema `containsPlace` property.** ✅

---

## FAQPage Schema Verification

### FAQ Counts:
- ✅ All 24 cities: 8 FAQs each
- ✅ Questions are city-specific
- ✅ Answers reference city name and local context

**All FAQPage schemas correctly map from `city.faqs` array.** ✅

---

## Office Assignment Verification

### Alabama Cities (11 total):
- ✅ All use `nearestOffice: "centre"`
- ✅ Centre is correctly marked as `isOfficeCity: true`

### Georgia Cities (13 total):
- ✅ All use `nearestOffice: "rome"`
- ✅ Rome is correctly marked as `isOfficeCity: true`

**Office assignments are correct for all cities.** ✅

---

## Rendering Verification

### All Schemas Render in HTML:
- ✅ All schemas consolidated in single `@graph` array
- ✅ Renders via `<script type="application/ld+json">` in Helmet (line 295-297)
- ✅ Single JSON-LD block ensures reliable rendering

**Status:** All schemas will render correctly in HTML. ✅

---

## Summary

### ✅ What's Working:
- Place schema present on all 24 city pages with unique @ids
- Neighborhoods correctly included in `containsPlace` for all cities
- FAQPage schema present with 8 city-specific FAQs per page
- BreadcrumbList schema correct on all pages
- Office assignments correct (AL cities → Centre, GA cities → Rome)
- All schemas render in single @graph array

### ⚠️ What Needs Fixing:
- **Critical:** Place schema missing geo coordinates (all 24 pages)
- **Critical:** LocalBusiness schema uses wrong type (InsuranceAgency instead of LocalBusiness)
- **Critical:** LocalBusiness schema missing @id, geo coordinates, parentOrganization
- **Important:** Missing Organization schema reference
- **Optional:** Consider adding LocalBusiness schema for nearest office on non-office city pages

### 📊 Overall Score: 3/5 Required Schemas Fully Correct (60%)

**Breakdown:**
- ✅ Place schema: 80% complete (missing geo)
- ⚠️ LocalBusiness schema: 50% complete (wrong type, missing properties, office cities only)
- ❌ Organization schema: 0% (missing)
- ✅ FAQPage schema: 100% complete
- ✅ BreadcrumbList schema: 100% complete

---

## Recommendations

### Priority 1 (Critical):
1. **Add geo coordinates to Place schema** (all 24 pages)
   - Add GeoCoordinates object with latitude/longitude for each city
   - Use city center coordinates or primary ZIP code coordinates

2. **Fix LocalBusiness schema type** (2 office city pages)
   - Change `@type` from `InsuranceAgency` to `LocalBusiness`
   - Add `@id` matching homepage office @ids
   - Add geo coordinates
   - Add parentOrganization reference
   - Change openingHours to openingHoursSpecification array format

### Priority 2 (Important):
3. **Add Organization schema reference** (all 24 pages)
   - Add Organization schema to @graph array
   - Or add reference via @id to existing Organization schema

### Priority 3 (Optional):
4. **Consider LocalBusiness for all cities**
   - Add LocalBusiness schema for nearest office on non-office city pages
   - Would improve local SEO for all 24 cities

---

**Next Steps:** Fix Priority 1 issues to bring Place and LocalBusiness schemas to full compliance, matching homepage and service page standards.

