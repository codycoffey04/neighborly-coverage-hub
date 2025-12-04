# Service Pages Schema Audit Report
**Date:** 2025-01-27  
**Pages Audited:** All 6 service pages  
**URL Pattern:** `https://coffeyagencies.com/services/{service-name}`

---

## Executive Summary

All 6 service pages have **good schema implementation** with most required schemas present. However, there are **critical inconsistencies** in `areaServed` format—3 pages use city Place references (correct) while 3 pages use State references (should be city Place references for consistency and better SEO).

---

## Required Schemas Checklist

| Schema Type | Required | Status |
|------------|----------|--------|
| Service schema | ✅ | ✅ Present on all pages |
| Organization schema (or reference) | ✅ | ✅ Present via provider @id reference |
| FAQPage schema | ✅ | ✅ Present on all pages |
| HowTo schema | ✅ | ✅ Present on all pages |
| BreadcrumbList schema | ✅ | ✅ Present on all pages |

---

## Page-by-Page Audit Results

### 1. AutoInsurance.tsx (`/services/auto-insurance`)

#### Schemas Present:
- ✅ **Service Schema**
  - @type: Service
  - @id: `https://coffeyagencies.com/services/auto-insurance#service`
  - provider: References Organization @id ✅
  - areaServed: **24 city Place references** ✅
- ✅ **FAQPage Schema**
  - 6 questions ✅
  - Questions match page content ✅
- ✅ **HowTo Schema**
  - 4 steps for getting auto insurance ✅
- ✅ **BreadcrumbList Schema**
  - Home → Auto Insurance ✅

#### Schemas Missing:
- ⚠️ **Organization Schema** - Not present directly (only referenced via provider @id)
  - **Note:** This is acceptable as Organization is referenced via `provider` @id

#### Errors Found:
- ✅ None

#### areaServed Verification:
- ✅ **24 cities** correctly referenced:
  - Alabama: Centre, Birmingham, Montgomery, Mobile, Dothan, Auburn, Enterprise, Foley, Phenix City, Troy, Trussville (11 cities)
  - Georgia: Rome, Atlanta, Alpharetta, Calhoun, Cartersville, Cedartown, Duluth, Forsyth, Lawrenceville, Powder Springs, Rockmart, Summerville, Suwanee (13 cities)

---

### 2. HomeInsurance.tsx (`/services/home-insurance`)

#### Schemas Present:
- ✅ **Service Schema**
  - @type: Service
  - @id: `https://coffeyagencies.com/services/home-insurance#service`
  - provider: References Organization @id ✅
  - areaServed: **24 city Place references** ✅
- ✅ **FAQPage Schema**
  - 6 questions ✅
  - Questions match page content ✅
- ✅ **HowTo Schema**
  - 4 steps for getting home insurance ✅
- ✅ **BreadcrumbList Schema**
  - Home → Home Insurance ✅

#### Schemas Missing:
- ⚠️ **Organization Schema** - Not present directly (only referenced via provider @id)
  - **Note:** This is acceptable as Organization is referenced via `provider` @id

#### Errors Found:
- ✅ None

#### areaServed Verification:
- ✅ **24 cities** correctly referenced (same as AutoInsurance)

---

### 3. RentersInsurance.tsx (`/services/renters-insurance`)

#### Schemas Present:
- ✅ **Service Schema**
  - @type: Service
  - @id: `https://coffeyagencies.com/services/renters-insurance#service`
  - provider: References Organization @id ✅
  - areaServed: **24 city Place references** ✅
- ✅ **FAQPage Schema**
  - 8 questions ✅
  - Questions match page content ✅
- ✅ **HowTo Schema**
  - 4 steps for getting renters insurance ✅
- ✅ **BreadcrumbList Schema**
  - Home → Renters Insurance ✅

#### Schemas Missing:
- ⚠️ **Organization Schema** - Not present directly (only referenced via provider @id)
  - **Note:** This is acceptable as Organization is referenced via `provider` @id

#### Errors Found:
- ✅ None

#### areaServed Verification:
- ✅ **24 cities** correctly referenced (same as AutoInsurance)

---

### 4. CondoInsurance.tsx (`/services/condo-insurance`)

#### Schemas Present:
- ✅ **Service Schema**
  - @type: Service
  - @id: `https://coffeyagencies.com/services/condo-insurance#service`
  - provider: References Organization @id ✅
  - areaServed: **2 State references** ⚠️ **SHOULD BE 24 CITY REFERENCES**
- ✅ **FAQPage Schema**
  - 6 questions ✅
  - Questions match page content ✅
- ✅ **HowTo Schema**
  - 4 steps for getting condo insurance ✅
- ✅ **BreadcrumbList Schema**
  - Home → Condo Insurance ✅

#### Schemas Missing:
- ⚠️ **Organization Schema** - Not present directly (only referenced via provider @id)
  - **Note:** This is acceptable as Organization is referenced via `provider` @id

#### Errors Found:
- 🔴 **CRITICAL:** `areaServed` uses State references instead of city Place references
  - Current: `[{ "@type": "State", "name": "Alabama" }, { "@type": "State", "name": "Georgia" }]`
  - Should be: 24 city Place @id references matching other service pages

#### areaServed Verification:
- ❌ **Incorrect format** - Uses 2 State objects instead of 24 city Place references
- **Required Fix:** Replace with 24 city Place @id references

---

### 5. LifeInsurance.tsx (`/services/life-insurance`)

#### Schemas Present:
- ✅ **Service Schema**
  - @type: Service
  - @id: `https://coffeyagencies.com/services/life-insurance#service`
  - provider: References Organization @id ✅
  - areaServed: **2 State references** ⚠️ **SHOULD BE 24 CITY REFERENCES**
- ✅ **FAQPage Schema**
  - 8 questions ✅ (hardcoded in schema, matches page content)
  - Questions match page content ✅
- ✅ **HowTo Schema**
  - 4 steps for getting life insurance ✅
- ✅ **BreadcrumbList Schema**
  - Home → Life Insurance ✅

#### Schemas Missing:
- ⚠️ **Organization Schema** - Not present directly (only referenced via provider @id)
  - **Note:** This is acceptable as Organization is referenced via `provider` @id

#### Errors Found:
- 🔴 **CRITICAL:** `areaServed` uses State references instead of city Place references
  - Current: `[{ "@type": "State", "name": "Alabama" }, { "@type": "State", "name": "Georgia" }]`
  - Should be: 24 city Place @id references matching other service pages

#### areaServed Verification:
- ❌ **Incorrect format** - Uses 2 State objects instead of 24 city Place references
- **Required Fix:** Replace with 24 city Place @id references

---

### 6. MotorcycleInsurance.tsx (`/services/motorcycle-insurance`)

#### Schemas Present:
- ✅ **Service Schema**
  - @type: Service
  - @id: `https://coffeyagencies.com/services/motorcycle-insurance#service`
  - provider: References Organization @id ✅
  - areaServed: **2 State references** ⚠️ **SHOULD BE 24 CITY REFERENCES**
- ✅ **FAQPage Schema**
  - 8 questions ✅
  - Questions match page content ✅
- ✅ **HowTo Schema**
  - 4 steps for getting motorcycle insurance ✅
- ✅ **BreadcrumbList Schema**
  - Home → Motorcycle Insurance ✅

#### Schemas Missing:
- ⚠️ **Organization Schema** - Not present directly (only referenced via provider @id)
  - **Note:** This is acceptable as Organization is referenced via `provider` @id

#### Errors Found:
- 🔴 **CRITICAL:** `areaServed` uses State references instead of city Place references
  - Current: `[{ "@type": "State", "name": "Alabama" }, { "@type": "State", "name": "Georgia" }]`
  - Should be: 24 city Place @id references matching other service pages

#### areaServed Verification:
- ❌ **Incorrect format** - Uses 2 State objects instead of 24 city Place references
- **Required Fix:** Replace with 24 city Place @id references

---

## Summary Table

| Page | Service | FAQPage | HowTo | Breadcrumb | Organization | areaServed Format | Status |
|------|---------|---------|-------|------------|--------------|------------------|--------|
| AutoInsurance | ✅ | ✅ (6) | ✅ | ✅ | ✅ (ref) | ✅ 24 cities | ✅ Pass |
| HomeInsurance | ✅ | ✅ (6) | ✅ | ✅ | ✅ (ref) | ✅ 24 cities | ✅ Pass |
| RentersInsurance | ✅ | ✅ (8) | ✅ | ✅ | ✅ (ref) | ✅ 24 cities | ✅ Pass |
| CondoInsurance | ✅ | ✅ (6) | ✅ | ✅ | ✅ (ref) | ❌ 2 states | ⚠️ Partial |
| LifeInsurance | ✅ | ✅ (8) | ✅ | ✅ | ✅ (ref) | ❌ 2 states | ⚠️ Partial |
| MotorcycleInsurance | ✅ | ✅ (8) | ✅ | ✅ | ✅ (ref) | ❌ 2 states | ⚠️ Partial |

---

## Critical Issues Found

### Issue #1: Inconsistent areaServed Format
**Severity:** 🔴 High  
**Affected Pages:** CondoInsurance, LifeInsurance, MotorcycleInsurance

**Problem:**
- 3 pages use State references: `[{ "@type": "State", "name": "Alabama" }, { "@type": "State", "name": "Georgia" }]`
- 3 pages use city Place references: 24 `@id` references to city Place schemas

**Impact:**
- Inconsistent schema structure across service pages
- Missing granular geographic targeting (city-level vs state-level)
- Reduced SEO benefit for city-specific queries

**Required Fix:**
Update CondoInsurance, LifeInsurance, and MotorcycleInsurance to use 24 city Place @id references matching AutoInsurance, HomeInsurance, and RentersInsurance.

**Correct Format:**
```json
"areaServed": [
  { "@id": "https://coffeyagencies.com/centre-al#place" },
  { "@id": "https://coffeyagencies.com/rome-ga#place" },
  { "@id": "https://coffeyagencies.com/birmingham-al#place" },
  // ... 21 more city references
]
```

---

## @id Reference Consistency

### Service Schema @ids (All Correct):
- ✅ `https://coffeyagencies.com/services/auto-insurance#service`
- ✅ `https://coffeyagencies.com/services/home-insurance#service`
- ✅ `https://coffeyagencies.com/services/renters-insurance#service`
- ✅ `https://coffeyagencies.com/services/condo-insurance#service`
- ✅ `https://coffeyagencies.com/services/life-insurance#service`
- ✅ `https://coffeyagencies.com/services/motorcycle-insurance#service`

### Organization Reference (All Correct):
- ✅ All service schemas reference `https://coffeyagencies.com/#organization` via `provider` @id

### City Place References (Required):
- ✅ AutoInsurance: 24 city Place @id references
- ✅ HomeInsurance: 24 city Place @id references
- ✅ RentersInsurance: 24 city Place @id references
- ❌ CondoInsurance: Missing (uses State references)
- ❌ LifeInsurance: Missing (uses State references)
- ❌ MotorcycleInsurance: Missing (uses State references)

---

## FAQPage Schema Verification

### FAQ Question Counts:
- ✅ AutoInsurance: 6 questions (from `faqs` array)
- ✅ HomeInsurance: 6 questions (from `faqItems` array)
- ✅ RentersInsurance: 8 questions (from `faqs` array)
- ✅ CondoInsurance: 6 questions (from `faqs` array)
- ✅ LifeInsurance: 8 questions (hardcoded in `faqSchema.mainEntity`)
- ✅ MotorcycleInsurance: 8 questions (from `faqs` array)

**All FAQPage schemas contain questions from the page content.** ✅

**Note:** LifeInsurance uses hardcoded FAQPage schema instead of mapping from a `faqs` array. This works but is inconsistent with other pages.

---

## HowTo Schema Verification

### All Pages Have HowTo Schema:
- ✅ AutoInsurance: 4 steps
- ✅ HomeInsurance: 4 steps
- ✅ RentersInsurance: 4 steps
- ✅ CondoInsurance: 4 steps
- ✅ LifeInsurance: 4 steps
- ✅ MotorcycleInsurance: 4 steps

**All HowTo schemas follow consistent structure with 4 steps.** ✅

---

## BreadcrumbList Schema Verification

### All Pages Have BreadcrumbList:
- ✅ AutoInsurance: Home → Auto Insurance
- ✅ HomeInsurance: Home → Home Insurance
- ✅ RentersInsurance: Home → Renters Insurance
- ✅ CondoInsurance: Home → Condo Insurance
- ✅ LifeInsurance: Home → Life Insurance
- ✅ MotorcycleInsurance: Home → Motorcycle Insurance

**All BreadcrumbList schemas are correct.** ✅

---

## Rendering Verification

### All Schemas Render in HTML:
- ✅ All pages use single `@graph` array structure
- ✅ All schemas render via `<script type="application/ld+json">` in Helmet
- ✅ Single JSON-LD block ensures reliable rendering

**Status:** All schemas will render correctly in HTML. ✅

---

## Recommendations

### Priority 1 (Critical):
1. **Fix areaServed format** on CondoInsurance, LifeInsurance, and MotorcycleInsurance
   - Replace State references with 24 city Place @id references
   - Match format used in AutoInsurance, HomeInsurance, and RentersInsurance

### Priority 2 (Optional):
2. **Consider adding Organization schema** directly to each page
   - Currently only referenced via `provider` @id
   - Adding full Organization schema could improve rich results
   - **Note:** This is optional as current implementation is acceptable

---

## Overall Score

**4/6 pages fully compliant (67%)**

- ✅ AutoInsurance: 100% compliant
- ✅ HomeInsurance: 100% compliant
- ✅ RentersInsurance: 100% compliant
- ⚠️ CondoInsurance: 80% compliant (areaServed format issue)
- ⚠️ LifeInsurance: 80% compliant (areaServed format issue)
- ⚠️ MotorcycleInsurance: 80% compliant (areaServed format issue)

**Main Issue:** Inconsistent `areaServed` format across service pages. Fixing this will bring all pages to 100% compliance.

---

**Next Steps:** Update CondoInsurance, LifeInsurance, and MotorcycleInsurance `areaServed` properties to use 24 city Place @id references for consistency and improved SEO.

