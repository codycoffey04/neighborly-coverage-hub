# Learn Articles Schema Audit Report
**Date:** 2025-01-27  
**Template:** `/src/pages/LearnArticle.tsx`  
**Data Source:** `/src/data/learnArticles.ts`  
**Total Learn Articles:** 8

---

## Executive Summary

All 8 Learn articles use a shared template with **partial schema implementation**. Article and BreadcrumbList schemas are present, but there are **critical issues** with `@context` properties inside schemas, missing `@id` on Article schema, missing Organization schema, and author should reference Organization @id instead of inline object.

---

## Required Schemas Checklist

| Schema Type | Required | Status |
|------------|----------|--------|
| Article schema | ✅ | ⚠️ Present but incomplete |
| Organization schema (or reference) | ✅ | ❌ Missing |
| FAQPage schema (if FAQs exist) | ✅ | ⚠️ Present but has @context issue |
| BreadcrumbList schema | ✅ | ⚠️ Present but has @context issue |

---

## Learn Articles Breakdown

### Total Learn Articles: **8**

**Article Slugs:**
1. `auto-insurance-guide`
2. `home-insurance-guide`
3. `renters-insurance-guide`
4. `condo-insurance-guide`
5. `life-insurance-guide`
6. `motorcycle-insurance-guide`
7. `bundle-insurance-savings`
8. `understanding-deductibles`

### Articles with FAQs: **0**
- None of the 8 articles have FAQs
- FAQPage schema is conditional and will not render for any articles

---

## Schema Analysis

### 1. Article Schema
**Status:** ⚠️ Present but incomplete  
**Location:** Lines 167-191 in `LearnArticle.tsx`

#### Present Properties:
- ✅ @type: Article
- ✅ headline: Article title
- ✅ description: Meta description
- ✅ url: Article URL
- ✅ image: Hero image or og-image fallback
- ✅ author: Organization object
- ✅ publisher: Organization with logo
- ✅ mainEntityOfPage: Article URL

#### Missing/Incorrect Properties:
- ❌ **@id property** - Missing unique @id per article
  - Should be: `"@id": "https://coffeyagencies.com/learn/{article-slug}#article"`
- ❌ **Has @context property** (line 168)
  - Should be removed since schema is inside @graph array
- ⚠️ **Author reference** - Uses inline Organization object
  - Should reference: `{ "@id": "https://coffeyagencies.com/#organization" }`
  - Current: Inline Organization object with name and url

#### Publisher Logo Verification:
- ✅ Publisher has logo property
- ✅ Logo has width: 250
- ✅ Logo has height: 60
- ✅ Logo has @type: ImageObject

#### Date Properties:
- ✅ **No datePublished** - Correct (not present, avoids inaccurate dates)
- ✅ **No dateModified** - Correct (not present, avoids inaccurate dates)

---

### 2. Organization Schema
**Status:** ❌ Missing  
**Location:** Not present in `LearnArticle.tsx`

#### Required:
- Organization schema or reference to `https://coffeyagencies.com/#organization`
- Should be included in @graph array

#### Current State:
- No Organization schema present
- Author uses inline Organization object instead of @id reference
- Publisher uses inline Organization object instead of @id reference

---

### 3. FAQPage Schema
**Status:** ⚠️ Present but has @context issue (not rendered for any articles)  
**Location:** Lines 194-206 in `LearnArticle.tsx`

#### Present Properties:
- ✅ Conditional: Only renders if `article.faqs.length > 0`
- ✅ @type: FAQPage
- ✅ name: Article title + " - Frequently Asked Questions"
- ✅ mainEntity: Maps from article.faqs array

#### Issues:
- ❌ **Has @context property** (line 195)
  - Should be removed since schema is inside @graph array
  - **Note:** This schema doesn't render for any articles (all 8 have empty FAQs)

---

### 4. BreadcrumbList Schema
**Status:** ⚠️ Present but has @context issue  
**Location:** Lines 209-233 in `LearnArticle.tsx`

#### Present Properties:
- ✅ @type: BreadcrumbList
- ✅ name: "Breadcrumb Navigation"
- ✅ itemListElement: Array with 3 items
  - Home → https://coffeyagencies.com
  - Learn → https://coffeyagencies.com/learn
  - Article Title → https://coffeyagencies.com/learn/{slug}

#### Issues:
- ❌ **Has @context property** (line 210)
  - Should be removed since schema is inside @graph array

---

## @graph Array Structure

### Current Structure:
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@context": "https://schema.org",  // ❌ Should be removed
      "@type": "Article",
      "headline": "...",
      "author": {
        "@type": "Organization",  // ⚠️ Should reference @id
        "name": "Coffey Agencies",
        "url": "https://coffeyagencies.com"
      },
      "publisher": {
        "@type": "Organization",  // ⚠️ Should reference @id
        "name": "Coffey Agencies",
        "logo": { "width": 250, "height": 60 }
      }
      // Missing: @id
    },
    {
      "@context": "https://schema.org",  // ❌ Should be removed
      "@type": "BreadcrumbList",
      ...
    }
    // Missing: Organization schema
    // FAQPage only if article.faqs.length > 0 (none of 8 articles have FAQs)
  ]
}
```

### Required Structure:
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "InsuranceAgency",
      "@id": "https://coffeyagencies.com/#organization",
      "name": "Coffey Agencies Inc.",
      "url": "https://coffeyagencies.com"
    },
    {
      "@type": "Article",
      "@id": "https://coffeyagencies.com/learn/{article-slug}#article",
      "headline": "...",
      "description": "...",
      "url": "https://coffeyagencies.com/learn/{article-slug}",
      "image": "...",
      "author": {
        "@id": "https://coffeyagencies.com/#organization"
      },
      "publisher": {
        "@id": "https://coffeyagencies.com/#organization"
      },
      "mainEntityOfPage": "..."
    },
    {
      "@type": "BreadcrumbList",
      "name": "Breadcrumb Navigation",
      "itemListElement": [...]
    }
    // FAQPage only if article has FAQs (none currently do)
  ]
}
```

---

## Critical Issues Found

### Issue #1: @context Properties Inside Schemas
**Severity:** 🔴 High  
**Affected:** Article schema, BreadcrumbList schema, FAQPage schema

**Problem:**
- All schemas have `@context` properties
- When schemas are inside a `@graph` array, they should NOT have their own `@context`
- `@context` should only be at the top level of the `@graph` container

**Impact:**
- May cause schema validation errors
- Inconsistent with other pages (homepage, service pages, city pages, FAQ page, Contact page)
- Could prevent proper schema rendering

**Required Fix:**
Remove `@context` from:
- Article schema (line 168)
- BreadcrumbList schema (line 210)
- FAQPage schema (line 195)

---

### Issue #2: Missing @id on Article Schema
**Severity:** 🔴 High  
**Affected:** All 8 Learn articles

**Problem:**
- Article schema does not have `@id` property
- Should be: `"@id": "https://coffeyagencies.com/learn/{article-slug}#article"`

**Required Fix:**
Add `@id` property to Article schema for each article.

---

### Issue #3: Missing Organization Schema
**Severity:** 🔴 High  
**Affected:** All 8 Learn articles

**Problem:**
- No Organization schema in @graph array
- Author and publisher use inline Organization objects instead of @id references

**Required Fix:**
Add Organization schema to @graph array and update author/publisher to reference it:
```json
{
  "@type": "InsuranceAgency",
  "@id": "https://coffeyagencies.com/#organization",
  "name": "Coffey Agencies Inc.",
  "url": "https://coffeyagencies.com"
}
```

Then update author and publisher to:
```json
"author": {
  "@id": "https://coffeyagencies.com/#organization"
},
"publisher": {
  "@id": "https://coffeyagencies.com/#organization"
}
```

**Note:** Publisher logo should remain in Organization schema, not in Article publisher reference.

---

### Issue #4: Author/Publisher Should Reference Organization @id
**Severity:** 🟡 Medium  
**Affected:** All 8 Learn articles

**Problem:**
- Author uses inline Organization object
- Publisher uses inline Organization object
- Should reference Organization @id instead

**Current:**
```json
"author": {
  "@type": "Organization",
  "name": "Coffey Agencies",
  "url": "https://coffeyagencies.com"
}
```

**Required:**
```json
"author": {
  "@id": "https://coffeyagencies.com/#organization"
}
```

**Note:** Publisher logo information should be in the Organization schema itself, not duplicated in Article publisher.

---

## Verification Results

### Article Count:
- ✅ **8 Learn articles total**
- ✅ All articles use the same schema template
- ✅ **0 articles have FAQs** (FAQPage schema won't render)

### Date Properties:
- ✅ **No datePublished** - Correct (not present, avoids inaccurate dates)
- ✅ **No dateModified** - Correct (not present, avoids inaccurate dates)

### Publisher Logo:
- ✅ Publisher logo has width: 250
- ✅ Publisher logo has height: 60
- ✅ Publisher logo has @type: ImageObject

### Schema Structure:
- ✅ All schemas in single @graph array
- ❌ Article schema has @context (should be removed)
- ❌ BreadcrumbList schema has @context (should be removed)
- ❌ FAQPage schema has @context (should be removed, but doesn't render anyway)
- ❌ Missing Organization schema
- ❌ Article schema missing @id
- ⚠️ Author uses inline Organization (should reference @id)
- ⚠️ Publisher uses inline Organization (should reference @id)

---

## Summary

### ✅ What's Working:
- Article schema present with headline, description, url, image
- Publisher logo has width and height properties
- BreadcrumbList schema present and correct (except @context issue)
- No inaccurate datePublished/dateModified properties
- All articles use the same schema template

### ⚠️ What Needs Fixing:
- **Critical:** Remove @context from Article schema
- **Critical:** Remove @context from BreadcrumbList schema
- **Critical:** Remove @context from FAQPage schema
- **Critical:** Add @id to Article schema
- **Critical:** Add Organization schema to @graph
- **Important:** Update author to reference Organization @id
- **Important:** Update publisher to reference Organization @id

### 📊 Overall Score: 1/4 Required Schemas Fully Correct (25%)

**Breakdown:**
- ⚠️ Article schema: 70% complete (has @context issue, missing @id, author/publisher should reference @id)
- ❌ Organization schema: 0% (missing)
- ⚠️ FAQPage schema: 90% complete (has @context issue, but doesn't render for any articles)
- ⚠️ BreadcrumbList schema: 90% complete (has @context issue)

---

## Recommendations

### Priority 1 (Critical):
1. **Remove @context from all schemas**
   - Article schema (line 168)
   - BreadcrumbList schema (line 210)
   - FAQPage schema (line 195)

2. **Add @id to Article schema**
   - Format: `"@id": "https://coffeyagencies.com/learn/{article-slug}#article"`

3. **Add Organization schema**
   - Add to @graph array
   - Reference `https://coffeyagencies.com/#organization`

4. **Update author and publisher to reference Organization @id**
   - Change from inline Organization objects to @id references
   - Move publisher logo to Organization schema

---

**Next Steps:** Fix Priority 1 issues to bring Learn articles to full compliance with other pages and ensure proper schema structure for all 8 articles.

