# Schema Markup Audit & Enhancement Report

## Executive Summary
This report reviews existing schema markup implementations and identifies enhancements needed for optimal SEO/AEO/GEO performance.

---

## 1. Organization Schema (Homepage) - `/src/pages/Index.tsx`

### ✅ **Already Present:**
- `sameAs`: Facebook URL (`https://www.facebook.com/codycoffeyagency`)
- `slogan`: "Your trusted insurance partner in Alabama & Georgia"
- `foundingDate`: "2009"
- `numberOfEmployees`: "6-10"
- `knowsAbout`: Comprehensive list of 20+ insurance-related topics

### ❌ **Missing Properties:**
1. **`award`**: A+ BBB Rating mentioned on TrustBar and About page, but not in schema
   - Found: TrustBar shows "A+ BBB Rating"
   - Should add: `award` property with BBB A+ rating

2. **Additional `sameAs` URLs**: Only Facebook is present
   - Could add: Google Business Profile URLs (if available)
   - Could add: LinkedIn profile (if exists)

### 📝 **Findings:**
- Organization schema is quite comprehensive already
- Main gap is the BBB A+ rating not being marked up as an award
- Social media presence limited to Facebook (only one URL in `sameAs`)

---

## 2. Service Schema (All 6 Service Pages)

### **Current State by Service:**

#### ✅ **AutoInsurance.tsx** (`/services/auto-insurance`):
- `@type`: Service ✓
- `serviceType`: "Auto Insurance" ✓
- `provider`: References organization ✓
- `areaServed`: All 24 cities ✓
- `description`: Present ✓
- `offers.availability`: "InStock" ✓
- ❌ `offers.priceSpecification`: Missing
- ❌ `serviceOutput`: Missing
- ❌ `termsOfService`: Missing

#### ✅ **HomeInsurance.tsx** (`/services/home-insurance`):
- Same structure as AutoInsurance
- ❌ `offers.priceSpecification`: Missing
- ❌ `serviceOutput`: Missing
- ❌ `termsOfService`: Missing

#### ✅ **RentersInsurance.tsx** (`/services/renters-insurance`):
- Same structure as AutoInsurance
- ❌ `offers.priceSpecification`: Missing
- ❌ `serviceOutput`: Missing
- ❌ `termsOfService`: Missing

#### ✅ **CondoInsurance.tsx** (`/services/condo-insurance`):
- Same structure as AutoInsurance
- ❌ `offers.priceSpecification`: Missing
- ❌ `serviceOutput`: Missing
- ❌ `termsOfService`: Missing

#### ✅ **LifeInsurance.tsx** (`/services/life-insurance`):
- Same structure as AutoInsurance
- ✅ `offers.priceSpecification`: **PRESENT** (price: "25.00", currency: "USD", unit: "MONTH")
- ❌ `serviceOutput`: Missing
- ❌ `termsOfService`: Missing

#### ✅ **MotorcycleInsurance.tsx** (`/services/motorcycle-insurance`):
- Same structure as AutoInsurance
- ✅ `offers.availability`: "InStock" ✓
- ❌ `offers.priceSpecification`: Missing
- ❌ `serviceOutput`: Missing
- ❌ `termsOfService`: Missing

### ❌ **Missing Across All Service Pages:**
1. **`serviceOutput`**: What the service produces/delivers (e.g., "Insurance Policy", "Quote", "Coverage")
2. **`termsOfService`**: Link to `/terms` page (exists at `/terms`)

### ⚠️ **Inconsistent:**
- Only LifeInsurance has `priceSpecification`
- Other services only have `availability: InStock`

---

## 3. Article Schema (Learn Articles) - `/src/pages/LearnArticle.tsx`

### ✅ **Already Present:**
- `@type`: Article ✓
- `headline`: Article title ✓
- `description`: Meta description ✓
- `author`: Organization ("Coffey Agencies") ✓
- `publisher`: Organization with logo ✓
- `mainEntityOfPage`: URL ✓

### ❌ **Issues Found:**
1. **`datePublished`**: Hardcoded to `"2025-01-01"` (not accurate)
   - Should be: Based on article data or actual publish date

2. **`dateModified`**: Hardcoded to `"2025-11-01"` (not accurate)
   - Should be: Dynamic based on last update or article metadata

3. **`author`**: Currently Organization
   - Could enhance: Add Person (Cody Coffey) as author
   - Or: Keep Organization but add more detail

4. **`publisher.logo`**: Present but missing `width` and `height`
   - Current: Only `url`
   - Should add: `width: 250, height: 60` (matching Organization schema)

---

## Summary Table

| Schema Type | Existing Properties | Missing Properties | Issues |
|-------------|-------------------|-------------------|--------|
| **Organization** | sameAs (Facebook), slogan, foundingDate, numberOfEmployees, knowsAbout | award (BBB A+), additional sameAs URLs | Missing BBB award markup |
| **Service** | @type, serviceType, provider, areaServed, description, offers.availability | offers.priceSpecification (5/6), serviceOutput (all), termsOfService (all) | Inconsistent pricing info |
| **Article** | @type, headline, description, author, publisher, mainEntityOfPage | datePublished/Modified accuracy, publisher.logo dimensions | Hardcoded dates, missing logo dimensions |

---

## Recommended Enhancements

### Priority 1: High Impact
1. **Add `award` to Organization schema** (BBB A+ Rating)
2. **Add `termsOfService` to all Service schemas** (link to `/terms`)
3. **Fix Article schema dates** (use accurate or dynamic dates)

### Priority 2: Medium Impact
4. **Add `serviceOutput` to all Service schemas**
5. **Add `offers.priceSpecification` to remaining 5 service pages** (or remove from LifeInsurance for consistency)

### Priority 3: Low Impact (Optional)
6. **Add Google Business Profile to `sameAs`** (if URL is available)
7. **Enhance Article `publisher.logo`** with dimensions
8. **Consider adding Person author to Articles** (Cody Coffey)

---

## Implementation Plan

### Phase 1: Organization Schema Enhancement
- Add `award` property for BBB A+ Rating
- Verify and add any additional social media URLs if available

### Phase 2: Service Schema Standardization
- Add `termsOfService` link to all 6 service pages
- Add `serviceOutput` property to all service pages
- Decide on priceSpecification strategy (add to all or remove from LifeInsurance)

### Phase 3: Article Schema Accuracy
- Fix hardcoded dates (use article metadata or remove if not available)
- Add logo dimensions to publisher
- Consider author enhancements

---

## Questions for Confirmation

1. **BBB Award**: Should we mark up the A+ BBB Rating as an award?
2. **Service Pricing**: Should all services have priceSpecification, or only LifeInsurance (which has a clear starting price)?
3. **Article Dates**: Do Learn articles have actual publish/modified dates, or should we remove these properties?
4. **Google Business Profile**: Is there a Google Business Profile URL we should add to `sameAs`?
5. **Service Output**: What should `serviceOutput` be? "Insurance Policy", "Quote", or something else?

---

## Files to Modify

1. `/src/pages/Index.tsx` - Organization schema
2. `/src/pages/services/AutoInsurance.tsx` - Service schema
3. `/src/pages/services/HomeInsurance.tsx` - Service schema
4. `/src/pages/services/RentersInsurance.tsx` - Service schema
5. `/src/pages/services/CondoInsurance.tsx` - Service schema
6. `/src/pages/services/LifeInsurance.tsx` - Service schema
7. `/src/pages/services/MotorcycleInsurance.tsx` - Service schema
8. `/src/pages/LearnArticle.tsx` - Article schema

---

**Status**: Ready for implementation after confirmation on questions above.

