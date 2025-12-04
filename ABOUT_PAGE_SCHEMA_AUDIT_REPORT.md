# About Page Schema Audit Report
**Date:** 2025-01-27  
**Page:** `/src/pages/About.tsx`  
**URL:** `https://coffeyagencies.com/about`

---

## Executive Summary

The About page has **good schema implementation** with most required schemas present. However, there are **critical issues** with the office schemas (wrong type, missing @id, missing geo coordinates) that need to be fixed to match homepage standards.

---

## 1. Schema Presence Analysis

### ✅ **PRESENT Schemas:**

#### 1.1 Organization/InsuranceAgency Schema
- **Status:** ✅ Present
- **@id:** `https://coffeyagencies.com/#organization` ✅ Matches homepage
- **@type:** `InsuranceAgency`
- **Location:** Lines 107-142 in `About.tsx`
- **Key Properties Present:**
  - ✅ name, legalName, description, url
  - ✅ telephone (array with 2 numbers)
  - ✅ foundingDate: "2009"
  - ✅ founder (Person object)
  - ✅ logo, image
  - ✅ address (2 PostalAddress objects)
  - ✅ priceRange, areaServed
- **Issue:** Missing some properties from homepage version (e.g., `sameAs`, `hasCredential`, `knowsAbout`, `award`)

#### 1.2 Centre Office Schema
- **Status:** ⚠️ Present but incorrect type and missing properties
- **@id:** ❌ Missing
- **@type:** `InsuranceAgency` ❌ Should be `LocalBusiness`
- **Location:** Lines 145-166 in `About.tsx`
- **Properties Present:**
  - ✅ name: "Coffey Agencies - Centre"
  - ✅ address (PostalAddress)
  - ✅ telephone: "(256) 927-6287"
  - ✅ openingHours
  - ✅ aggregateRating (4.7, 116 reviews)
  - ✅ priceRange, image, url
- **Missing Properties:**
  - ❌ @id (should be `https://coffeyagencies.com/#centre-office`)
  - ❌ geo coordinates (latitude/longitude)
  - ❌ parentOrganization reference
  - ❌ Wrong @type (should be LocalBusiness)

#### 1.3 Rome Office Schema
- **Status:** ⚠️ Present but incorrect type and missing properties
- **@id:** ❌ Missing
- **@type:** `InsuranceAgency` ❌ Should be `LocalBusiness`
- **Location:** Lines 169-190 in `About.tsx`
- **Properties Present:**
  - ✅ name: "Coffey Agencies - Rome"
  - ✅ address (PostalAddress)
  - ✅ telephone: "(706) 784-6511"
  - ✅ openingHours
  - ✅ aggregateRating (4.6, 90 reviews)
  - ✅ priceRange, image, url
- **Missing Properties:**
  - ❌ @id (should be `https://coffeyagencies.com/#rome-office`)
  - ❌ geo coordinates (latitude/longitude)
  - ❌ parentOrganization reference
  - ❌ Wrong @type (should be LocalBusiness)

#### 1.4 AboutPage Schema
- **Status:** ✅ Present
- **@type:** `AboutPage`
- **Location:** Lines 193-205 in `About.tsx`
- **Properties Present:**
  - ✅ name: "About Coffey Agencies"
  - ✅ description: "Your Local Insurance Team Since 2009"
  - ✅ url: "https://coffeyagencies.com/about"
  - ✅ isPartOf reference to WebSite
  - ✅ mainEntity reference to Organization

#### 1.5 Person Schema (Founder - Cody Coffey)
- **Status:** ✅ Present
- **@id:** `https://coffeyagencies.com/#founder`
- **@type:** `Person`
- **Location:** Lines 229-254 in `About.tsx`
- **Properties Present:**
  - ✅ name: "Cody Coffey"
  - ✅ jobTitle: "CEO & Founder"
  - ✅ description
  - ✅ image (ImageObject)
  - ✅ worksFor reference to Organization ✅
  - ✅ founderOf reference to Organization
  - ✅ knowsAbout array

#### 1.6 Person Schemas (Team Members)
- **Status:** ✅ Present
- **Total Count:** 5 team members
- **Location:** Lines 257-315 in `About.tsx`
- **Team Members:**
  1. ✅ Kimberly Fletcher - Office Manager & Senior Sales Producer
  2. ✅ Crystal Brozio - Customer Service Manager
  3. ✅ Maria Rocha-Guzman - Senior Sales Producer (Bilingual)
  4. ✅ Kathy Sewell - Customer Service Specialist
  5. ✅ Brandy Wilkins - Senior Sales Producer
- **Properties Present (all members):**
  - ✅ name, jobTitle, description
  - ✅ worksFor reference to Organization ✅
  - ✅ knowsLanguage array

#### 1.7 BreadcrumbList Schema
- **Status:** ✅ Present
- **@id:** `https://coffeyagencies.com/about#breadcrumb`
- **@type:** `BreadcrumbList`
- **Location:** Lines 318-337 in `About.tsx`
- **Properties Present:**
  - ✅ name: "Breadcrumb Navigation"
  - ✅ itemListElement with 2 items:
    - Home (position 1)
    - About (position 2)

---

### ❌ **MISSING Schemas:**

#### 2.1 WebPage Schema
- **Status:** ⚠️ Present but separate (not in @graph)
- **Note:** There is a `webpageSchema` defined (lines 208-226) but it's included in the @graph array, so this is actually ✅ Present

---

## 2. Critical Issues Found

### Issue #1: Office Schemas Use Wrong Type
**Severity:** 🔴 High  
**Location:** Lines 145-166 (Centre) and 169-190 (Rome)

Both office schemas use `@type: "InsuranceAgency"` instead of `@type: "LocalBusiness"`.

**Problem:** Should match homepage implementation which uses `LocalBusiness` type.

**Recommendation:** Change both office schemas to `@type: "LocalBusiness"`.

---

### Issue #2: Office Schemas Missing @id
**Severity:** 🔴 High

Both office schemas are missing `@id` properties.

**Required @ids:**
- Centre: `https://coffeyagencies.com/#centre-office`
- Rome: `https://coffeyagencies.com/#rome-office`

**Problem:** Without @id, these schemas cannot be properly referenced and don't match homepage structure.

---

### Issue #3: Office Schemas Missing Geo Coordinates
**Severity:** 🟡 Medium

Both office schemas are missing `geo` properties with latitude/longitude.

**Required Geo Coordinates:**
- Centre: `34.1519, -85.6789`
- Rome: `34.2558, -85.1644`

**Problem:** Geo coordinates help with local SEO and map integration.

---

### Issue #4: Office Schemas Missing parentOrganization Reference
**Severity:** 🟡 Medium

Both office schemas should reference the parent organization.

**Required:**
```json
"parentOrganization": {
  "@id": "https://coffeyagencies.com/#organization"
}
```

---

### Issue #5: Organization Schema Missing Properties
**Severity:** 🟡 Low

The Organization schema on About page is simpler than the homepage version. Missing:
- `sameAs` (social media links)
- `hasCredential` (license information)
- `knowsAbout` (insurance topics)
- `award` (BBB rating)
- `contactPoint` (detailed contact info)
- `openingHoursSpecification` (detailed hours)

**Note:** This is acceptable if intentional simplification, but should match homepage for consistency.

---

## 3. Actual JSON-LD That Will Render

### Current Schema Structure (as rendered):

The page renders a single `<script type="application/ld+json">` tag containing:

<details>
<summary><b>Click to expand full @graph array structure</b></summary>

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "InsuranceAgency",
      "@id": "https://coffeyagencies.com/#organization",
      "name": "Coffey Agencies",
      "legalName": "Coffey Agencies Inc.",
      "description": "Alabama & Georgia's trusted insurance partner...",
      "url": "https://coffeyagencies.com",
      "telephone": ["(256) 927-6287", "(706) 784-6511"],
      "foundingDate": "2009",
      "founder": { "@type": "Person", "name": "Cody Coffey" },
      "logo": "https://coffeyagencies.com/coffey-logo.png",
      "image": "https://coffeyagencies.com/coffey-logo.png",
      "address": [/* 2 PostalAddress objects */],
      "priceRange": "$$",
      "areaServed": ["Alabama", "Georgia"]
    },
    {
      "@type": "InsuranceAgency",  // ⚠️ Should be LocalBusiness
      // ⚠️ Missing @id (should be: https://coffeyagencies.com/#centre-office)
      "name": "Coffey Agencies - Centre",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1913 W Main Street",
        "addressLocality": "Centre",
        "addressRegion": "AL",
        "postalCode": "35960",
        "addressCountry": "US"
      },
      "telephone": "(256) 927-6287",
      "priceRange": "$$",
      "image": "https://coffeyagencies.com/coffey-logo.png",
      "url": "https://coffeyagencies.com",
      "openingHours": "Mo-Fr 08:00-17:00",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "116"
      }
      // ⚠️ Missing: geo coordinates
      // ⚠️ Missing: parentOrganization reference
    },
    {
      "@type": "InsuranceAgency",  // ⚠️ Should be LocalBusiness
      // ⚠️ Missing @id (should be: https://coffeyagencies.com/#rome-office)
      "name": "Coffey Agencies - Rome",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1703 Turner McCall Blvd SE",
        "addressLocality": "Rome",
        "addressRegion": "GA",
        "postalCode": "30161",
        "addressCountry": "US"
      },
      "telephone": "(706) 784-6511",
      "priceRange": "$$",
      "image": "https://coffeyagencies.com/coffey-logo.png",
      "url": "https://coffeyagencies.com",
      "openingHours": "Mo-Fr 08:00-17:00",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.6",
        "reviewCount": "90"
      }
      // ⚠️ Missing: geo coordinates
      // ⚠️ Missing: parentOrganization reference
    },
    {
      "@type": "AboutPage",
      "name": "About Coffey Agencies",
      "description": "Your Local Insurance Team Since 2009",
      "url": "https://coffeyagencies.com/about",
      "isPartOf": { "@id": "https://coffeyagencies.com/#website" },
      "mainEntity": { "@id": "https://coffeyagencies.com/#organization" }
    },
    {
      "@type": "WebPage",
      "name": "About Coffey Agencies",
      "description": "Meet the Coffey Agencies team...",
      "url": "https://coffeyagencies.com/about",
      "isPartOf": { "@id": "https://coffeyagencies.com/#website" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://coffeyagencies.com/cody-coffey-headshot.png",
        "width": 192,
        "height": 192
      },
      "breadcrumb": { "@id": "https://coffeyagencies.com/about#breadcrumb" }
    },
    {
      "@type": "Person",
      "@id": "https://coffeyagencies.com/#founder",
      "name": "Cody Coffey",
      "jobTitle": "CEO & Founder",
      "description": "Founder and CEO of Coffey Agencies Inc...",
      "image": {
        "@type": "ImageObject",
        "url": "https://coffeyagencies.com/cody-coffey-headshot.png",
        "width": 192,
        "height": 192
      },
      "worksFor": { "@id": "https://coffeyagencies.com/#organization" },
      "founderOf": { "@id": "https://coffeyagencies.com/#organization" },
      "knowsAbout": ["Insurance", "Business Management", ...]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://coffeyagencies.com/about#breadcrumb",
      "name": "Breadcrumb Navigation",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://coffeyagencies.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://coffeyagencies.com/about"
        }
      ]
    },
    {
      "@type": "Person",
      "name": "Kimberly Fletcher",
      "jobTitle": "Office Manager & Senior Sales Producer",
      "description": "Kimberly joined our team on day one...",
      "worksFor": { "@id": "https://coffeyagencies.com/#organization" },
      "knowsLanguage": ["English"]
    },
    {
      "@type": "Person",
      "name": "Crystal Brozio",
      "jobTitle": "Customer Service Manager",
      "description": "Crystal leads our customer service team...",
      "worksFor": { "@id": "https://coffeyagencies.com/#organization" },
      "knowsLanguage": ["English"]
    },
    {
      "@type": "Person",
      "name": "Maria Rocha-Guzman",
      "jobTitle": "Senior Sales Producer (Bilingual)",
      "description": "Maria serves our English and Spanish-speaking clients...",
      "worksFor": { "@id": "https://coffeyagencies.com/#organization" },
      "knowsLanguage": ["English", "Spanish"]
    },
    {
      "@type": "Person",
      "name": "Kathy Sewell",
      "jobTitle": "Customer Service Specialist",
      "description": "Kathy joined our team with over 10 years...",
      "worksFor": { "@id": "https://coffeyagencies.com/#organization" },
      "knowsLanguage": ["English"]
    },
    {
      "@type": "Person",
      "name": "Brandy Wilkins",
      "jobTitle": "Senior Sales Producer",
      "description": "Brandy joined our team bringing 8 years...",
      "worksFor": { "@id": "https://coffeyagencies.com/#organization" },
      "knowsLanguage": ["English"]
    }
  ]
}
```

</details>

**Total Schemas in @graph:** 12
- 1 Organization/InsuranceAgency
- 2 Office schemas (Centre + Rome)
- 1 AboutPage
- 1 WebPage
- 1 Person (Founder - Cody Coffey)
- 1 BreadcrumbList
- 5 Person schemas (Team Members)

**All schemas render in a single JSON-LD block via Helmet (line 380-382).** ✅

---

## 4. Schema Validation Checklist

| Schema Type | Required | Present | Correct Type | Has @id | In @graph | Status |
|------------|----------|---------|--------------|---------|-----------|--------|
| Organization/InsuranceAgency | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ Pass |
| LocalBusiness (Centre) | ✅ | ✅ | ⚠️ Wrong | ❌ | ✅ | ⚠️ Partial |
| LocalBusiness (Rome) | ✅ | ✅ | ⚠️ Wrong | ❌ | ✅ | ⚠️ Partial |
| AboutPage | ✅ | ✅ | ✅ | N/A | ✅ | ✅ Pass |
| Person (Founder) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ Pass |
| Person (Team Members) | ✅ | ✅ | ✅ | N/A | ✅ | ✅ Pass |
| BreadcrumbList | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ Pass |
| WebPage | ✅ | ✅ | ✅ | N/A | ✅ | ✅ Pass |

---

## 5. @id Reference Consistency

### Current @id References:
- ✅ `https://coffeyagencies.com/#organization` - Used correctly, matches homepage
- ✅ `https://coffeyagencies.com/#founder` - Used correctly
- ✅ `https://coffeyagencies.com/about#breadcrumb` - Used correctly
- ❌ Missing: `https://coffeyagencies.com/#centre-office`
- ❌ Missing: `https://coffeyagencies.com/#rome-office`

### Issues:
- ⚠️ Office schemas missing @id values
- ⚠️ Office schemas don't match homepage structure

---

## 6. Person Schema Verification

### Founder Schema:
- ✅ **Name:** Cody Coffey
- ✅ **Job Title:** CEO & Founder
- ✅ **Description:** Present
- ✅ **worksFor:** Links to Organization via @id ✅
- ✅ **@id:** `https://coffeyagencies.com/#founder`

### Team Member Schemas (5 total):
1. ✅ **Kimberly Fletcher** - worksFor: Organization @id ✅
2. ✅ **Crystal Brozio** - worksFor: Organization @id ✅
3. ✅ **Maria Rocha-Guzman** - worksFor: Organization @id ✅
4. ✅ **Kathy Sewell** - worksFor: Organization @id ✅
5. ✅ **Brandy Wilkins** - worksFor: Organization @id ✅

**All Person schemas correctly link to Organization via `worksFor` @id reference.** ✅

---

## 7. Rendering Verification

### Schemas Render in HTML:
- ✅ All schemas consolidated in single `@graph` array
- ✅ Renders via `<script type="application/ld+json">` in Helmet (line 380-382)
- ✅ Single JSON-LD block ensures reliable rendering

**Status:** All schemas will render correctly in HTML.

---

## 8. Comparison with Homepage

| Feature | Homepage | About Page | Match? |
|---------|----------|------------|--------|
| Organization @id | ✅ `#organization` | ✅ `#organization` | ✅ Yes |
| Centre Office @type | ✅ `LocalBusiness` | ❌ `InsuranceAgency` | ❌ No |
| Centre Office @id | ✅ `#centre-office` | ❌ Missing | ❌ No |
| Centre Office geo | ✅ Present | ❌ Missing | ❌ No |
| Rome Office @type | ✅ `LocalBusiness` | ❌ `InsuranceAgency` | ❌ No |
| Rome Office @id | ✅ `#rome-office` | ❌ Missing | ❌ No |
| Rome Office geo | ✅ Present | ❌ Missing | ❌ No |

**Recommendation:** Update About page office schemas to match homepage structure exactly.

---

## Summary

### ✅ What's Working:
- Organization schema matches homepage @id
- AboutPage schema present and correct
- Founder Person schema complete with worksFor link
- All 5 team member Person schemas present with worksFor links
- BreadcrumbList schema correct
- All schemas in single @graph array
- All schemas render in HTML

### ⚠️ What Needs Fixing:
- **Critical:** Change office schemas from `InsuranceAgency` to `LocalBusiness`
- **Critical:** Add @id to both office schemas
- **Important:** Add geo coordinates to both office schemas
- **Important:** Add parentOrganization reference to both office schemas
- **Optional:** Consider adding missing Organization properties for consistency

### 📊 Overall Score: 6/7 Required Schemas Present (86%)
**Note:** Office schemas are present but incorrect type and missing properties.

---

## Recommendations

### Priority 1 (Critical):
1. Change Centre office `@type` from `InsuranceAgency` to `LocalBusiness`
2. Change Rome office `@type` from `InsuranceAgency` to `LocalBusiness`
3. Add `@id: "https://coffeyagencies.com/#centre-office"` to Centre schema
4. Add `@id: "https://coffeyagencies.com/#rome-office"` to Rome schema

### Priority 2 (Important):
5. Add geo coordinates to Centre office schema
6. Add geo coordinates to Rome office schema
7. Add `parentOrganization` reference to both office schemas

### Priority 3 (Optional):
8. Consider enhancing Organization schema to match homepage (add `sameAs`, `hasCredential`, etc.)

---

**Next Steps:** Fix Priority 1 and Priority 2 issues to ensure office schemas match homepage standards and provide complete local business information.

