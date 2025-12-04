# Contact Page Schema Audit Report
**Date:** 2025-01-27  
**Page:** `/src/pages/Contact.tsx`  
**URL:** `https://coffeyagencies.com/contact`

---

## Executive Summary

The Contact page has **partial schema implementation** with ContactPage and BreadcrumbList schemas present. However, there are **critical issues** with `@context` properties inside schemas, and **missing** Organization and both LocalBusiness schemas (Centre and Rome offices).

---

## Required Schemas Checklist

| Schema Type | Required | Status |
|------------|----------|--------|
| ContactPage schema | ✅ | ⚠️ Present but has @context issue |
| Organization schema | ✅ | ❌ Missing |
| LocalBusiness schema (Centre) | ✅ | ❌ Missing |
| LocalBusiness schema (Rome) | ✅ | ❌ Missing |
| BreadcrumbList schema | ✅ | ⚠️ Present but has @context issue |

---

## Schema Analysis

### 1. ContactPage Schema
**Status:** ⚠️ Present but has @context issue  
**Location:** Lines 64-73 in `Contact.tsx`

#### Present Properties:
- ✅ @type: ContactPage
- ✅ name: "Contact Coffey Agencies"
- ✅ description: "Get in touch with Coffey Agencies for insurance quotes and service"
- ✅ url: "https://coffeyagencies.com/contact"
- ✅ mainEntity: References Organization @id

#### Issues:
- ❌ **Has @context property** (line 65)
  - Should be removed since schema is inside @graph array
  - @context should only be at top level of @graph container
- ❌ **Missing @id property**
  - Should be: `"@id": "https://coffeyagencies.com/contact"`

---

### 2. Organization Schema
**Status:** ❌ Missing  
**Location:** Not present in `Contact.tsx`

#### Required:
- @type: InsuranceAgency
- @id: `https://coffeyagencies.com/#organization`
- Full NAP (Name, Address, Phone) for the business

#### Current State:
- No Organization schema present
- No reference to Organization @id in schemas

---

### 3. LocalBusiness Schema (Centre Office)
**Status:** ❌ Missing  
**Location:** Not present in `Contact.tsx`

#### Required:
- @type: LocalBusiness (NOT InsuranceAgency)
- @id: `https://coffeyagencies.com/#centre-office`
- name: "Coffey Agencies - Cody Coffey Agency"
- address: Full PostalAddress
  - streetAddress: "1913 W Main Street"
  - addressLocality: "Centre"
  - addressRegion: "AL"
  - postalCode: "35960"
  - addressCountry: "US"
- telephone: "(256) 927-6287"
- geo: GeoCoordinates
  - latitude: "34.1520"
  - longitude: "-85.6789"
- openingHoursSpecification: Array format
  - Monday-Friday, 08:00-17:00
- parentOrganization: Reference to Organization @id

#### Office Data Verification:
- ✅ Phone: "(256) 927-6287" (matches site header)
- ✅ Address: "1913 W Main Street, Centre, AL 35960" (matches requirement)
- ✅ Hours: Monday–Friday, 8:00 AM – 5:00 PM

---

### 4. LocalBusiness Schema (Rome Office)
**Status:** ❌ Missing  
**Location:** Not present in `Contact.tsx`

#### Required:
- @type: LocalBusiness (NOT InsuranceAgency)
- @id: `https://coffeyagencies.com/#rome-office`
- name: "Coffey Agencies - Millican & Coffey Agency"
- address: Full PostalAddress
  - streetAddress: "1703 Turner McCall Blvd SE"
  - addressLocality: "Rome"
  - addressRegion: "GA"
  - postalCode: "30161"
  - addressCountry: "US"
- telephone: "(706) 784-6511"
- geo: GeoCoordinates
  - latitude: "34.2570"
  - longitude: "-85.1647"
- openingHoursSpecification: Array format
  - Monday-Friday, 08:30-16:30
- parentOrganization: Reference to Organization @id

#### Office Data Verification:
- ✅ Phone: "(706) 784-6511" (matches site header)
- ✅ Address: "1703 Turner McCall Blvd SE, Rome, GA 30161" (matches requirement)
- ✅ Hours: Monday–Friday, 8:30 AM – 4:30 PM

---

### 5. BreadcrumbList Schema
**Status:** ⚠️ Present but has @context issue  
**Location:** Lines 76-94 in `Contact.tsx`

#### Present Properties:
- ✅ @type: BreadcrumbList
- ✅ name: "Breadcrumb Navigation"
- ✅ itemListElement: Array with 2 items
  - Home → https://coffeyagencies.com
  - Contact → https://coffeyagencies.com/contact

#### Issues:
- ❌ **Has @context property** (line 77)
  - Should be removed since schema is inside @graph array
  - @context should only be at top level of @graph container

---

## NAP (Name, Address, Phone) Verification

### Centre Office:
- ✅ **Name:** "Coffey Agencies - Cody Coffey Agency" (from office data)
- ✅ **Address:** "1913 W Main Street, Centre, AL 35960" (matches requirement)
- ✅ **Phone:** "(256) 927-6287" (matches site header)

### Rome Office:
- ✅ **Name:** "Coffey Agencies - Millican & Coffey Agency" (from office data)
- ✅ **Address:** "1703 Turner McCall Blvd SE, Rome, GA 30161" (matches requirement)
- ✅ **Phone:** "(706) 784-6511" (matches site header)

**All NAP data is accurate and matches requirements.** ✅

---

## @graph Array Structure

### Current Structure:
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@context": "https://schema.org",  // ❌ Should be removed
      "@type": "ContactPage",
      "name": "Contact Coffey Agencies",
      "url": "https://coffeyagencies.com/contact"
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
      "address": { ... },
      "telephone": ["(256) 927-6287", "(706) 784-6511"]
    },
    {
      "@type": "ContactPage",
      "@id": "https://coffeyagencies.com/contact",
      "name": "Contact Coffey Agencies",
      "url": "https://coffeyagencies.com/contact",
      "description": "..."
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://coffeyagencies.com/#centre-office",
      "name": "Coffey Agencies - Cody Coffey Agency",
      "address": { ... },
      "telephone": "(256) 927-6287",
      "geo": { ... },
      "openingHoursSpecification": [ ... ],
      "parentOrganization": { "@id": "https://coffeyagencies.com/#organization" }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://coffeyagencies.com/#rome-office",
      "name": "Coffey Agencies - Millican & Coffey Agency",
      "address": { ... },
      "telephone": "(706) 784-6511",
      "geo": { ... },
      "openingHoursSpecification": [ ... ],
      "parentOrganization": { "@id": "https://coffeyagencies.com/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "name": "Breadcrumb Navigation",
      "itemListElement": [ ... ]
    }
  ]
}
```

---

## Critical Issues Found

### Issue #1: @context Properties Inside Schemas
**Severity:** 🔴 High  
**Affected:** ContactPage schema, BreadcrumbList schema

**Problem:**
- Both ContactPage and BreadcrumbList schemas have `@context` properties
- When schemas are inside a `@graph` array, they should NOT have their own `@context`
- `@context` should only be at the top level of the `@graph` container

**Impact:**
- May cause schema validation errors
- Inconsistent with other pages (homepage, service pages, city pages, FAQ page)
- Could prevent proper schema rendering

**Required Fix:**
Remove `@context` from:
- ContactPage schema (line 65)
- BreadcrumbList schema (line 77)

---

### Issue #2: Missing Organization Schema
**Severity:** 🔴 High  
**Affected:** Contact page

**Problem:**
- No Organization schema in @graph array
- ContactPage schema references Organization via mainEntity, but Organization schema itself is missing

**Required Fix:**
Add Organization schema to @graph array with full NAP:
```json
{
  "@type": "InsuranceAgency",
  "@id": "https://coffeyagencies.com/#organization",
  "name": "Coffey Agencies Inc.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1913 W Main Street",
    "addressLocality": "Centre",
    "addressRegion": "AL",
    "postalCode": "35960",
    "addressCountry": "US"
  },
  "telephone": ["(256) 927-6287", "(706) 784-6511"],
  "url": "https://coffeyagencies.com"
}
```

---

### Issue #3: Missing LocalBusiness Schema (Centre Office)
**Severity:** 🔴 High  
**Affected:** Contact page

**Problem:**
- No LocalBusiness schema for Centre office
- Office data exists in `offices` array but not in schema

**Required Fix:**
Add LocalBusiness schema for Centre office with:
- @type: LocalBusiness (NOT InsuranceAgency)
- @id: `https://coffeyagencies.com/#centre-office`
- Full address, phone, geo coordinates
- openingHoursSpecification array format
- parentOrganization reference

---

### Issue #4: Missing LocalBusiness Schema (Rome Office)
**Severity:** 🔴 High  
**Affected:** Contact page

**Problem:**
- No LocalBusiness schema for Rome office
- Office data exists in `offices` array but not in schema

**Required Fix:**
Add LocalBusiness schema for Rome office with:
- @type: LocalBusiness (NOT InsuranceAgency)
- @id: `https://coffeyagencies.com/#rome-office`
- Full address, phone, geo coordinates
- openingHoursSpecification array format
- parentOrganization reference

---

### Issue #5: ContactPage Missing @id
**Severity:** 🟡 Medium  
**Affected:** ContactPage schema

**Problem:**
- ContactPage schema does not have `@id` property
- Should be: `"@id": "https://coffeyagencies.com/contact"`

**Required Fix:**
Add `@id` property to ContactPage schema.

---

## Verification Results

### Office Data Accuracy:
- ✅ Centre phone: "(256) 927-6287" (matches site header)
- ✅ Rome phone: "(706) 784-6511" (matches site header)
- ✅ Centre address: "1913 W Main Street, Centre, AL 35960" (matches requirement)
- ✅ Rome address: "1703 Turner McCall Blvd SE, Rome, GA 30161" (matches requirement)

### Schema Structure:
- ✅ All schemas in single @graph array
- ❌ ContactPage schema has @context (should be removed)
- ❌ BreadcrumbList schema has @context (should be removed)
- ❌ Missing Organization schema
- ❌ Missing LocalBusiness schema (Centre)
- ❌ Missing LocalBusiness schema (Rome)
- ❌ ContactPage missing @id

---

## Summary

### ✅ What's Working:
- ContactPage schema present with name, url, description
- BreadcrumbList schema present and correct
- Office data (NAP) is accurate and matches requirements
- All schemas render in single @graph array

### ⚠️ What Needs Fixing:
- **Critical:** Remove @context from ContactPage schema
- **Critical:** Remove @context from BreadcrumbList schema
- **Critical:** Add Organization schema with full NAP
- **Critical:** Add LocalBusiness schema for Centre office
- **Critical:** Add LocalBusiness schema for Rome office
- **Important:** Add @id to ContactPage schema

### 📊 Overall Score: 2/5 Required Schemas Fully Correct (40%)

**Breakdown:**
- ⚠️ ContactPage schema: 80% complete (has @context issue, missing @id)
- ❌ Organization schema: 0% (missing)
- ❌ LocalBusiness schema (Centre): 0% (missing)
- ❌ LocalBusiness schema (Rome): 0% (missing)
- ⚠️ BreadcrumbList schema: 90% complete (has @context issue)

---

## Recommendations

### Priority 1 (Critical):
1. **Remove @context from ContactPage schema**
   - Remove `"@context": "https://schema.org"` from line 65
   - Add `"@id": "https://coffeyagencies.com/contact"`

2. **Remove @context from BreadcrumbList schema**
   - Remove `"@context": "https://schema.org"` from line 77

3. **Add Organization schema**
   - Add to @graph array with full NAP
   - Reference `https://coffeyagencies.com/#organization`

4. **Add LocalBusiness schema (Centre)**
   - @type: LocalBusiness (NOT InsuranceAgency)
   - @id: `https://coffeyagencies.com/#centre-office`
   - Full address, phone, geo, openingHoursSpecification
   - parentOrganization reference

5. **Add LocalBusiness schema (Rome)**
   - @type: LocalBusiness (NOT InsuranceAgency)
   - @id: `https://coffeyagencies.com/#rome-office`
   - Full address, phone, geo, openingHoursSpecification
   - parentOrganization reference

---

**Next Steps:** Fix Priority 1 issues to bring Contact page to full compliance with other pages and provide complete local business information for both offices.

