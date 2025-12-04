# FAQ Page Schema Audit Report
**Date:** 2025-01-27  
**Page:** `/src/pages/FAQ.tsx`  
**URL:** `https://coffeyagencies.com/faq`

---

## Executive Summary

The FAQ page has **good schema implementation** with FAQPage and BreadcrumbList schemas present. However, there are **critical issues** with `@context` properties inside schemas (should only be at top level), and **missing** Organization and WebPage schemas.

---

## Required Schemas Checklist

| Schema Type | Required | Status |
|------------|----------|--------|
| FAQPage schema | ✅ | ⚠️ Present but has @context issue |
| Organization schema (or reference) | ✅ | ❌ Missing |
| BreadcrumbList schema | ✅ | ⚠️ Present but has @context issue |
| WebPage schema | ✅ | ❌ Missing |

---

## FAQ Questions Verification

### Total FAQ Questions Displayed on Page: **24**

**Breakdown by Category:**
- General Insurance: 5 questions
- Auto Insurance: 5 questions
- Home Insurance: 5 questions
- Renters & Condo Insurance: 3 questions
- Life Insurance: 3 questions
- Billing & Policy Management: 3 questions

### Total Questions in FAQPage Schema: **24**

**Verification:**
- ✅ Question count matches: 24 displayed = 24 in schema
- ✅ All questions included via `allQuestions.flatMap(section => section.questions)`
- ✅ No duplicate questions detected
- ✅ All answers are complete (not truncated)

---

## Schema Analysis

### 1. FAQPage Schema
**Status:** ⚠️ Present but has @context issue  
**Location:** Lines 145-157 in `FAQ.tsx`

#### Present Properties:
- ✅ @type: FAQPage
- ✅ name: "Frequently Asked Questions"
- ✅ mainEntity: Array of 24 Question objects
- ✅ Each Question has @type: Question
- ✅ Each Answer has @type: Answer with full text

#### Issues:
- ❌ **Has @context property** (line 146)
  - Should be removed since schema is inside @graph array
  - @context should only be at top level of @graph container

#### Question Structure Verification:
```json
{
  "@type": "Question",
  "name": "[Full question text]",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "[Full answer text - not truncated]"
  }
}
```
✅ All 24 questions follow this structure correctly

---

### 2. Organization Schema
**Status:** ❌ Missing  
**Location:** Not present in `FAQ.tsx`

#### Required:
- Organization schema or reference to `https://coffeyagencies.com/#organization`
- Should be included in @graph array

#### Current State:
- No Organization schema present
- No reference to Organization @id

---

### 3. BreadcrumbList Schema
**Status:** ⚠️ Present but has @context issue  
**Location:** Lines 160-178 in `FAQ.tsx`

#### Present Properties:
- ✅ @type: BreadcrumbList
- ✅ name: "Breadcrumb Navigation"
- ✅ itemListElement: Array with 2 items
  - Home → https://coffeyagencies.com
  - FAQ → https://coffeyagencies.com/faq

#### Issues:
- ❌ **Has @context property** (line 161)
  - Should be removed since schema is inside @graph array
  - @context should only be at top level of @graph container

---

### 4. WebPage Schema
**Status:** ❌ Missing  
**Location:** Not present in `FAQ.tsx`

#### Required:
- @type: WebPage
- name: Page title
- url: https://coffeyagencies.com/faq
- isPartOf: Reference to WebSite @id

#### Current State:
- No WebPage schema present

---

## @graph Array Structure

### Current Structure:
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@context": "https://schema.org",  // ❌ Should be removed
      "@type": "FAQPage",
      ...
    },
    {
      "@context": "https://schema.org",  // ❌ Should be removed
      "@type": "BreadcrumbList",
      ...
    }
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
      "@type": "FAQPage",
      "name": "Frequently Asked Questions",
      "mainEntity": [...]
    },
    {
      "@type": "BreadcrumbList",
      "name": "Breadcrumb Navigation",
      "itemListElement": [...]
    },
    {
      "@type": "WebPage",
      "name": "Frequently Asked Questions | Coffey Agencies",
      "url": "https://coffeyagencies.com/faq",
      "isPartOf": {
        "@id": "https://coffeyagencies.com/#website"
      }
    }
  ]
}
```

---

## Critical Issues Found

### Issue #1: @context Properties Inside Schemas
**Severity:** 🔴 High  
**Affected:** FAQPage schema, BreadcrumbList schema

**Problem:**
- Both FAQPage and BreadcrumbList schemas have `@context` properties
- When schemas are inside a `@graph` array, they should NOT have their own `@context`
- `@context` should only be at the top level of the `@graph` container

**Impact:**
- May cause schema validation errors
- Inconsistent with other pages (homepage, service pages, city pages)
- Could prevent proper schema rendering

**Required Fix:**
Remove `@context` from:
- FAQPage schema (line 146)
- BreadcrumbList schema (line 161)

---

### Issue #2: Missing Organization Schema
**Severity:** 🟡 Medium  
**Affected:** FAQ page

**Problem:**
- No Organization schema or reference in @graph array
- Other pages (homepage, service pages, city pages) include Organization schema

**Required Fix:**
Add Organization schema to @graph array:
```json
{
  "@type": "InsuranceAgency",
  "@id": "https://coffeyagencies.com/#organization",
  "name": "Coffey Agencies Inc.",
  "url": "https://coffeyagencies.com"
}
```

---

### Issue #3: Missing WebPage Schema
**Severity:** 🟡 Medium  
**Affected:** FAQ page

**Problem:**
- No WebPage schema in @graph array
- Other pages (homepage, service pages) include WebPage schema

**Required Fix:**
Add WebPage schema to @graph array:
```json
{
  "@type": "WebPage",
  "name": "Frequently Asked Questions | Coffey Agencies",
  "url": "https://coffeyagencies.com/faq",
  "isPartOf": {
    "@id": "https://coffeyagencies.com/#website"
  }
}
```

---

## Verification Results

### FAQ Questions:
- ✅ **24 questions displayed on page**
- ✅ **24 questions in FAQPage schema**
- ✅ **Perfect match** - no missing or duplicate questions
- ✅ All answers are complete (not truncated)

### Schema Structure:
- ✅ All schemas in single @graph array
- ❌ FAQPage schema has @context (should be removed)
- ❌ BreadcrumbList schema has @context (should be removed)
- ❌ Missing Organization schema
- ❌ Missing WebPage schema

---

## Summary

### ✅ What's Working:
- FAQPage schema includes all 24 questions correctly
- All questions have complete answers (not truncated)
- BreadcrumbList schema is correct (except @context issue)
- All schemas render in single @graph array

### ⚠️ What Needs Fixing:
- **Critical:** Remove @context from FAQPage schema
- **Critical:** Remove @context from BreadcrumbList schema
- **Important:** Add Organization schema reference
- **Important:** Add WebPage schema

### 📊 Overall Score: 2/4 Required Schemas Fully Correct (50%)

**Breakdown:**
- ⚠️ FAQPage schema: 90% complete (has @context issue)
- ❌ Organization schema: 0% (missing)
- ⚠️ BreadcrumbList schema: 90% complete (has @context issue)
- ❌ WebPage schema: 0% (missing)

---

## Recommendations

### Priority 1 (Critical):
1. **Remove @context from FAQPage schema**
   - Remove `"@context": "https://schema.org"` from line 146
   - Keep only @type, name, and mainEntity properties

2. **Remove @context from BreadcrumbList schema**
   - Remove `"@context": "https://schema.org"` from line 161
   - Keep only @type, name, and itemListElement properties

### Priority 2 (Important):
3. **Add Organization schema**
   - Add to @graph array
   - Reference `https://coffeyagencies.com/#organization`

4. **Add WebPage schema**
   - Add to @graph array
   - Include name, url, and isPartOf reference

---

**Next Steps:** Fix Priority 1 issues (remove @context properties) and Priority 2 issues (add missing schemas) to bring FAQ page to full compliance with other pages.

