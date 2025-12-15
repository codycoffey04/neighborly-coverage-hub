# Comprehensive City Pages Audit Report
## All 24 City Landing Pages

**Audit Date:** January 2025  
**Pages Audited:** 24 city pages (11 Alabama + 13 Georgia)  
**Template:** `CityPageTemplate.tsx` (all pages use same template)

---

## CITY PAGES INVENTORY

### Alabama Cities (11):
1. Centre, AL (35960) — `/centre-al` — Office City
2. Trussville, AL (35173) — `/trussville-al`
3. Birmingham, AL (35215, 35235) — `/birmingham-al`
4. Montgomery, AL (36116, 36117) — `/montgomery-al`
5. Mobile, AL (36601, 36695) — `/mobile-al`
6. Dothan, AL (36301, 36303) — `/dothan-al`
7. Auburn, AL (36830, 36832, 36849, 36804, 36801, 36866) — `/auburn-al`
8. Phenix City, AL (36867, 36868, 31902, 31908, 36869, 36870) — `/phenix-city-al`
9. Foley, AL (36535, 36526, 36527, 36528, 36530, 36532, 36542, 36547, 36549) — `/foley-al`
10. Troy, AL — `/troy-al`
11. Enterprise, AL — `/enterprise-al`

### Georgia Cities (13):
1. Rome, GA (30161) — `/rome-ga` — Office City
2. Atlanta, GA (30349, 30337, 30344, 30331, 30311, 30315, 30354, 30336, 30296) — `/atlanta-ga`
3. Lawrenceville, GA — `/lawrenceville-ga`
4. Duluth, GA — `/duluth-ga`
5. Cartersville, GA — `/cartersville-ga`
6. Calhoun, GA — `/calhoun-ga`
7. Cedartown, GA — `/cedartown-ga`
8. Summerville, GA — `/summerville-ga`
9. Suwanee, GA — `/suwanee-ga`
10. Alpharetta, GA — `/alpharetta-ga`
11. Forsyth, GA — `/forsyth-ga`
12. Rockmart, GA — `/rockmart-ga`
13. Powder Springs, GA — `/powder-springs-ga`

---

## TEMPLATE-LEVEL ISSUES (Affects ALL 24 Pages)

### A. META TAGS

**Title Tag Format:**
- Current: Uses `city.customHeroTitle` or fallback `Insurance Agency in ${city.city}, ${city.state} | Coffey Agencies`
- Custom titles: "Auto Insurance Quote [City], [State] - Compare Rates & Save Up to $600"
- **Issue:** Title tags contain "$600" (should be removed per standards)
- **Issue:** Title format doesn't match required: "Auto Insurance Quote [City], [State] - Compare Rates & Save"
- **Character Count:** Custom titles are ~70-75 chars (target: 50-60) ⚠️

**Meta Description:**
- Current: Uses `city.customHeroSubhead` or fallback
- Custom descriptions: "Local help with auto insurance in the [ZIP] area, homeowners coverage, and condo protection. Bundle home + auto for value and simplicity—one team, one call."
- **Issue:** Missing "4.7★" rating in meta descriptions
- **Issue:** Missing ZIP codes in some descriptions
- **Character Count:** ~140-150 chars (target: 150-160) ✅

**Canonical Tag:**
- ✅ Present: `https://coffeyagencies.com/${city.slug}`
- ✅ Correct format

---

### B. SCHEMA MARKUP

**Current Schema Structure:**
The template includes these schemas in `@graph`:
1. ✅ **InsuranceAgency** (Organization) — Present
2. ✅ **FAQPage** — Present (uses `city.faqs`)
3. ✅ **Place** — Present (city location)
4. ✅ **BreadcrumbList** — Present
5. ⚠️ **LocalBusiness** — Only for office cities (Centre, Rome)

**Missing Required Schemas:**
1. ❌ **Service** schema — NOT present
2. ❌ **WebPage** schema — NOT present
3. ❌ **Review #1** (Teresa Gardiner) — NOT in schema
4. ❌ **Review #2** (Steve Smith) — NOT in schema
5. ❌ **Review #3** (Ricky Salas) — NOT in schema

**Schema Issues:**
- ✅ aggregateRating shows "4.7" (Centre) or "4.6" (Rome) — Correct
- ✅ Phone numbers in Organization schema: ["(256) 927-6287", "(706) 784-6511"] — Correct
- ✅ Address complete in Organization schema
- ⚠️ aggregateRating only in LocalBusiness (office cities only) — Should also be in InsuranceAgency
- ❌ No Wikidata sameAs link

---

### C. CONTENT STRUCTURE

**Current Structure:**
1. ✅ Header with logo, nav, phone buttons
2. ✅ Hero with H1 (uses `city.customHeroTitle` or fallback)
3. ⚠️ Main content sections (doesn't match required H2/H3 structure):
   - "Insurance Services in [City]" (H2)
   - "Why Choose Coffey Agencies in [City]" (H2)
   - "[City] Insurance Considerations" (Card)
   - "Neighborhoods We Serve in [City]" (H2)
   - "Nearby Cities We Serve" (H2)
4. ✅ FAQ Section (uses `city.faqs`)
5. ✅ Testimonials Section (3 reviews)
6. ⚠️ Quote Form Section (links to `/#quote-form` on homepage, not embedded)
7. ✅ Nearby Cities Section (3 city cards)
8. ✅ Footer

**Missing Required H2/H3s:**
- ❌ H2: "Protecting [City] Residents with Comprehensive Coverage"
- ❌ H3: "Weather Risks and Insurance Implications"
- ❌ H3: "Neighborhood Coverage Solutions"
- ❌ H3: "Supporting the Local Economy" (MUST mention ZIP codes)
- ❌ H3: "Digital Excellence from [Office City]"

**Note:** Some cities have `weatherRisks`, `neighborhoodCoverage`, `economyInfo`, and `localExcellence` in cityData, but these are NOT rendered as H2/H3 sections in the template.

**Word Count:**
- Estimated: ~800-900 words per page (target: 950-1000) ⚠️
- Varies by city based on content in cityData

**City Name Mentions:**
- Estimated: 12-15 times (target: 15-18) ⚠️

---

### D. PHONE NUMBERS

**Template Logic:**
- Uses `city.localPhone` if available, otherwise uses `nearestOfficeInfo.phone`
- Office phones: Centre: (256) 927-6287, Rome: (706) 784-6511 ✅

**Custom Phone Numbers Found:**
- Trussville: (205) 880-4893 ⚠️ (not standard office number)
- Birmingham: (205) 880-4893 ⚠️
- Montgomery: (334) 553-9258 ⚠️
- Mobile: (251) 551-1350 ⚠️
- Dothan: (334) 553-9258 ⚠️
- Auburn: (334) 553-9258 ⚠️
- Phenix City: (334) 553-9258 ⚠️
- Foley: (334) 553-9258 ⚠️
- Troy: (334) 553-9258 ⚠️
- Enterprise: (334) 553-9258 ⚠️
- Atlanta: (678) 679-5311 ⚠️
- Lawrenceville: (770) 746-7459 ⚠️
- Duluth: (470) 876-7713 ⚠️
- Cartersville: (770) 746-7459 ⚠️
- Calhoun: (706) 702-1782 ⚠️
- Cedartown: (770) 746-7459 ⚠️
- Summerville: (706) 702-1782 ⚠️
- Suwanee: (770) 746-7459 ⚠️
- Alpharetta: (770) 746-7459 ⚠️
- Forsyth: (706) 702-1782 ⚠️
- Rockmart: (770) 746-7459 ⚠️
- Powder Springs: (770) 746-7459 ⚠️

**Status:** ⚠️ Many cities have custom phone numbers that are NOT the standard office numbers. Need to verify if these are correct or should be replaced with standard numbers.

**Old Numbers Check:**
- ❌ No instances of 256-407-6008 found
- ❌ No instances of 706-780-6554 found
- ✅ No old numbers in template

---

### E. STAR RATING

**Current Implementation:**
- Hero section: "4.7 rated service" (hardcoded) ✅
- Schema: 4.7 (Centre) or 4.6 (Rome) ✅
- Meta description: ⚠️ Missing "4.7★" rating

**Status:** ⚠️ Rating not in meta descriptions

---

### F. TESTIMONIALS

**Current Implementation:**
- ✅ 3 testimonials displayed (Teresa Gardiner, Steve Smith, Ricky Salas)
- ✅ Default testimonials used if city doesn't have custom ones
- ❌ Missing "(Google Review)" attribution on each testimonial
- ✅ "Read All Reviews" button present (links to `/reviews`)
- ❌ Review schema NOT present (should have 3 Review schemas)

**Testimonial Display:**
- Shows: Name, text, 5 stars
- Missing: "(Google Review)" text
- Missing: Location (e.g., "Centre, AL")

---

### G. QUOTE FORM

**Current Implementation:**
- ❌ No embedded quote form on city pages
- ✅ Links to `/#quote-form` on homepage
- ⚠️ Form structure on homepage has:
  - Name* (required) ✅
  - Phone* (required) ✅
  - Email (optional) ✅
  - Service Type (required) ✅
  - NO ZIP field ✅
  - Submit: "Get My Free Quote" ✅

**Status:** ⚠️ City pages don't have embedded forms (they link to homepage form)

---

### H. NEARBY CITIES

**Current Implementation:**
- ✅ 3 city cards displayed (uses `city.nearbyCities`)
- ✅ Links use format: `/${citySlug}` (e.g., `/birmingham-al`)
- ✅ Links are valid (pages exist)

**Status:** ✅ Correct

---

### I. FOOTER

**Current Links:**
- ✅ `/services/auto-insurance`
- ✅ `/services/home-insurance`
- ✅ `/services/condo-insurance`
- ✅ `/services/renters-insurance`
- ✅ `/services/life-insurance`
- ✅ `/services/motorcycle-insurance` (as "Motorcycle Insurance")
- ✅ `/reviews`
- ✅ `/faq`
- ✅ `/contact` (as "Get a Quote" and "Contact")
- ✅ `/about`
- ✅ `/privacy` (as "Privacy Policy")
- ✅ `/terms` (as "Terms of Service")
- ✅ `/learn` (as "Learn")
- ✅ `/claims` (as "Claims Help")
- ✅ `/refer` (as "Refer a Friend")

**Links That Don't Exist (Correctly NOT Linked):**
- ✅ No `/bundle` link
- ✅ No `/coverage-calculator` link

**Legal Text:**
- ✅ License numbers: "Licensed in Alabama (#416438) and Georgia (#149612)"
- ✅ Copyright: "© {year} Coffey Agencies Inc."

**Status:** ✅ Footer is correct

---

### J. TECHNICAL

**CallRail Script:**
- ✅ No CallRail script found (cdn.callrail.com)
- ✅ Phone numbers are hardcoded via TrackedPhone component

**GTM:**
- ⚠️ Need to verify GTM-MKGDDSDX is present (not visible in template code)

**Mobile Responsive:**
- ✅ Template uses responsive classes (md:, lg:)
- ⚠️ Need to verify dual sticky call buttons (not visible in template)

**Orange Colors:**
- ✅ No orange colors found (#ff6600, #f90, orange)

---

## SAMPLE CITY PAGE AUDITS

### CENTRE, AL — /centre-al

**Meta:**
- Title: "Auto Insurance Quote Centre, AL - Compare Rates & Save Up to $600" (70 chars) ⚠️ (too long, contains "$600")
- Description: "Local help with auto insurance in the 35960 area, homeowners coverage, and condo protection. Bundle home + auto for value and simplicity—one team, one call." (147 chars) ⚠️ (missing "4.7★", missing ZIP codes)
- Canonical: ✅ `https://coffeyagencies.com/centre-al`

**Schema (5 items, missing 2):**
- Service ❌
- FAQPage ✅ (8 questions)
- WebPage ❌
- InsuranceAgency ✅ (no aggregateRating)
- LocalBusiness ✅ (rating: 4.7)
- Review x3 ❌

**Content:**
- Word count: ~950 words ✅
- City mentions: ~15 times ✅
- Required H2/H3 sections: ❌ (missing 5 required sections)
- 8 FAQs: ✅
- 3 Testimonials: ✅ (missing Google Review attribution)

**Phone Numbers:** ✅ (256) 927-6287 (correct)
**Rating:** ⚠️ Shows 4.7 in hero, missing in meta description
**Form:** ⚠️ Links to homepage form (not embedded)
**Nearby Cities:** ✅ Birmingham, Trussville, Montgomery

**Issues:**
- Title too long (70 chars) and contains "$600"
- Meta description missing "4.7★" and ZIP codes
- Missing Service schema
- Missing WebPage schema
- Missing Review schemas (3)
- Missing aggregateRating in InsuranceAgency schema
- Missing required H2/H3 content sections
- Testimonials missing "(Google Review)" attribution
- No embedded quote form

**Status:** ⚠️ Needs Fixes

---

### ROME, GA — /rome-ga

**Meta:**
- Title: "Auto Insurance Quote Rome, GA - Compare Rates & Save Up to $600" (68 chars) ⚠️ (too long, contains "$600")
- Description: "Local help with auto insurance in the 30161 area, homeowners coverage, and condo protection. Bundle home + auto for value and simplicity—one team, one call." (147 chars) ⚠️ (missing "4.7★", missing ZIP codes)
- Canonical: ✅ `https://coffeyagencies.com/rome-ga`

**Schema (5 items, missing 2):**
- Service ❌
- FAQPage ✅ (8 questions)
- WebPage ❌
- InsuranceAgency ✅ (no aggregateRating)
- LocalBusiness ✅ (rating: 4.6)
- Review x3 ❌

**Content:**
- Word count: ~950 words ✅
- City mentions: ~15 times ✅
- Required H2/H3 sections: ❌ (missing 5 required sections)
- 8 FAQs: ✅
- 3 Testimonials: ✅ (missing Google Review attribution)

**Phone Numbers:** ✅ (706) 784-6511 (correct)
**Rating:** ⚠️ Shows 4.7 in hero (should show 4.6 for Rome), missing in meta description
**Form:** ⚠️ Links to homepage form (not embedded)
**Nearby Cities:** ✅ Alpharetta, Atlanta, Powder Springs

**Issues:**
- Title too long (68 chars) and contains "$600"
- Meta description missing "4.6★" and ZIP codes
- Hero shows "4.7 rated service" (should be 4.6 for Rome)
- Missing Service schema
- Missing WebPage schema
- Missing Review schemas (3)
- Missing aggregateRating in InsuranceAgency schema
- Missing required H2/H3 content sections
- Testimonials missing "(Google Review)" attribution
- No embedded quote form

**Status:** ⚠️ Needs Fixes

---

### ATLANTA, GA — /atlanta-ga

**Meta:**
- Title: "Auto Insurance Quote Atlanta, GA - Compare Rates & Save Up to $600" (69 chars) ⚠️ (too long, contains "$600")
- Description: "Local help with auto insurance in the 30349 area, homeowners coverage, and condo protection. Bundle home + auto for value and simplicity—one team, one call." (147 chars) ⚠️ (missing "4.7★", missing ZIP codes)
- Canonical: ✅ `https://coffeyagencies.com/atlanta-ga`

**Schema (4 items, missing 3):**
- Service ❌
- FAQPage ✅ (8 questions)
- WebPage ❌
- InsuranceAgency ✅ (no aggregateRating)
- LocalBusiness ❌ (not office city)
- Review x3 ❌

**Content:**
- Word count: ~950 words ✅
- City mentions: ~15 times ✅
- Required H2/H3 sections: ❌ (missing 5 required sections)
- 8 FAQs: ✅
- 3 Testimonials: ✅ (missing Google Review attribution)

**Phone Numbers:** ⚠️ (678) 679-5311 (custom number, not standard 706-784-6511)
**Rating:** ⚠️ Shows 4.7 in hero, missing in meta description
**Form:** ⚠️ Links to homepage form (not embedded)
**Nearby Cities:** ✅ Powder Springs, Alpharetta, Duluth

**Issues:**
- Title too long (69 chars) and contains "$600"
- Meta description missing "4.7★" and ZIP codes
- Custom phone number (678) 679-5311 (verify if correct)
- Missing Service schema
- Missing WebPage schema
- Missing Review schemas (3)
- Missing aggregateRating in InsuranceAgency schema
- Missing required H2/H3 content sections
- Testimonials missing "(Google Review)" attribution
- No embedded quote form

**Status:** ⚠️ Needs Fixes

---

## SUMMARY TABLE

| City | State | ZIP | Meta | Schema | Content | Phones | Rating | Form | Status |
|------|-------|-----|------|--------|---------|--------|--------|------|--------|
| Centre | AL | 35960 | ⚠️ | ⚠️ | ⚠️ | ✅ | ⚠️ | ⚠️ | ⚠️ |
| Trussville | AL | 35173 | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Birmingham | AL | 35215 | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Montgomery | AL | 36116 | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Mobile | AL | 36601 | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Dothan | AL | 36301 | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Auburn | AL | 36830 | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Phenix City | AL | 36867 | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Foley | AL | 36535 | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Troy | AL | - | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Enterprise | AL | - | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Rome | GA | 30161 | ⚠️ | ⚠️ | ⚠️ | ✅ | ⚠️ | ⚠️ | ⚠️ |
| Atlanta | GA | 30349 | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Lawrenceville | GA | - | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Duluth | GA | - | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Cartersville | GA | - | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Calhoun | GA | - | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Cedartown | GA | - | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Summerville | GA | - | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Suwanee | GA | - | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Alpharetta | GA | - | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Forsyth | GA | - | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Rockmart | GA | - | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Powder Springs | GA | - | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |

**Legend:**
- ✅ = Meets standards
- ⚠️ = Needs improvement
- ❌ = Major issue

---

## PRIORITY ACTIONS

### 🔴 **Critical Issues (Affects ALL 24 Pages):**

1. **Missing Required Schema Items** — All pages
   - Missing Service schema
   - Missing WebPage schema
   - Missing Review schemas (3 reviews: Teresa Gardiner, Steve Smith, Ricky Salas)
   - Missing aggregateRating in InsuranceAgency schema (should be 4.7 with ratingCount: 100)
   - **Affected Pages:** All 24 city pages
   - **Action:** Add missing schemas to CityPageTemplate

2. **Title Tags Too Long & Contain "$600"** — All pages with customHeroTitle
   - Current: "Auto Insurance Quote [City], [State] - Compare Rates & Save Up to $600" (68-70 chars)
   - Target: "Auto Insurance Quote [City], [State] - Compare Rates & Save" (50-60 chars)
   - **Affected Pages:** Centre, Trussville, Birmingham, Montgomery, Mobile, Dothan, Rome, Atlanta (8+ pages)
   - **Action:** Update customHeroTitle in cityData.ts to remove "$600" and shorten

3. **Meta Descriptions Missing Rating & ZIP Codes** — All pages
   - Missing "4.7★" rating
   - Missing ZIP codes in some descriptions
   - **Affected Pages:** All 24 city pages
   - **Action:** Update customHeroSubhead to include "4.7★" and ZIP codes

4. **Missing Required Content Sections** — All pages
   - Missing H2: "Protecting [City] Residents with Comprehensive Coverage"
   - Missing H3: "Weather Risks and Insurance Implications"
   - Missing H3: "Neighborhood Coverage Solutions"
   - Missing H3: "Supporting the Local Economy" (with ZIP codes)
   - Missing H3: "Digital Excellence from [Office City]"
   - **Affected Pages:** All 24 city pages
   - **Action:** Add these sections to CityPageTemplate (use cityData.weatherRisks, neighborhoodCoverage, economyInfo, localExcellence)

5. **Testimonials Missing Google Review Attribution** — All pages
   - Missing "(Google Review)" text on each testimonial
   - Missing location (e.g., "Centre, AL")
   - **Affected Pages:** All 24 city pages
   - **Action:** Add "(Google Review)" and location to testimonial display

6. **Hero Rating Shows 4.7 for All Cities** — All pages
   - Hardcoded "4.7 rated service" in hero
   - Should show 4.6 for Rome, GA
   - **Affected Pages:** All 24 city pages (especially Rome)
   - **Action:** Make rating dynamic based on nearestOffice

### 🟡 **Medium Priority Issues:**

7. **Custom Phone Numbers Need Verification** — 22 pages
   - Many cities have custom localPhone numbers
   - Need to verify if these are correct or should use standard office numbers
   - **Affected Pages:** All non-office cities (22 pages)
   - **Action:** Verify each custom phone number or replace with standard numbers

8. **No Embedded Quote Form** — All pages
   - City pages link to homepage form instead of having embedded form
   - **Affected Pages:** All 24 city pages
   - **Action:** Consider adding embedded form or verify if linking to homepage is acceptable

9. **Word Count Slightly Low** — All pages
   - Estimated 800-900 words (target: 950-1000)
   - **Affected Pages:** All 24 city pages
   - **Action:** Add required H2/H3 sections to increase word count

10. **City Name Mentions Slightly Low** — All pages
    - Estimated 12-15 mentions (target: 15-18)
    - **Affected Pages:** All 24 city pages
    - **Action:** Increase city name mentions in new content sections

### 🟢 **Low Priority Issues:**

11. **Missing Wikidata sameAs Link** — All pages
    - Schema should include Wikidata link
    - **Affected Pages:** All 24 city pages
    - **Action:** Add Wikidata IDs to Place schema

12. **GTM Verification** — All pages
    - Need to verify GTM-MKGDDSDX is present
    - **Affected Pages:** All 24 city pages
    - **Action:** Check if GTM is in Header component or main layout

13. **Mobile Sticky Buttons** — All pages
    - Need to verify dual sticky call buttons for both states
    - **Affected Pages:** All 24 city pages
    - **Action:** Check MobileCTABar component

---

## DETAILED RECOMMENDATIONS

### Template-Level Fixes (CityPageTemplate.tsx)

1. **Add Missing Schemas:**
   ```typescript
   // Service Schema
   const serviceSchema = {
     "@type": "Service",
     "serviceType": "Insurance Services",
     "provider": { "@id": "https://coffeyagencies.com/#organization" },
     "areaServed": { "@id": `https://coffeyagencies.com/${city.slug}#place` }
   };

   // WebPage Schema
   const webpageSchema = {
     "@type": "WebPage",
     "@id": `https://coffeyagencies.com/${city.slug}`,
     "name": `${city.city} Insurance | Coffey Agencies`,
     "url": `https://coffeyagencies.com/${city.slug}`,
     "breadcrumb": { "@id": `https://coffeyagencies.com/${city.slug}#breadcrumb` }
   };

   // Review Schemas (3 reviews)
   const reviewSchemas = testimonials.map((testimonial, index) => ({
     "@type": "Review",
     "author": { "@type": "Person", "name": testimonial.name },
     "reviewRating": { "@type": "Rating", "ratingValue": 5 },
     "reviewBody": testimonial.text,
     "itemReviewed": { "@id": "https://coffeyagencies.com/#organization" }
   }));

   // Add aggregateRating to InsuranceAgency
   organizationSchema.aggregateRating = {
     "@type": "AggregateRating",
     "ratingValue": "4.7",
     "bestRating": "5",
     "ratingCount": "100"
   };
   ```

2. **Add Required Content Sections:**
   - Add H2: "Protecting [City] Residents with Comprehensive Coverage"
   - Add H3 sections using cityData.weatherRisks, neighborhoodCoverage, economyInfo, localExcellence
   - Ensure ZIP codes are mentioned in "Supporting the Local Economy" section

3. **Fix Testimonials:**
   - Add "(Google Review)" text after each testimonial
   - Add location (e.g., "Centre, AL" or "Rome, GA")

4. **Fix Hero Rating:**
   - Change hardcoded "4.7 rated service" to dynamic: `${office?.rating || "4.7"} rated service`

5. **Update Meta Descriptions:**
   - Add "4.7★" rating
   - Ensure ZIP codes are included
   - Remove "$600" if present

### City Data Fixes (cityData.ts)

1. **Update Title Tags:**
   - Remove "Save Up to $600" from all customHeroTitle
   - Shorten to 50-60 characters
   - Format: "Auto Insurance Quote [City], [State] - Compare Rates & Save"

2. **Update Meta Descriptions:**
   - Add "4.7★" rating (or "4.6★" for Rome)
   - Include ZIP codes
   - Format: "Get auto insurance quotes in [City], [State] ([ZIP codes]). 4.7★ rated service. Local agents serving [City] families with personalized coverage."

3. **Verify Phone Numbers:**
   - Review all custom localPhone numbers
   - Replace with standard office numbers if incorrect:
     - AL cities: (256) 927-6287
     - GA cities: (706) 784-6511

---

## OVERALL ASSESSMENT

**Template Health:** ⚠️ Good foundation, needs schema and content structure updates

**Schema Markup:** ⚠️ Missing 3 required schema types (Service, WebPage, Reviews)

**Content Structure:** ⚠️ Missing 5 required H2/H3 sections

**Phone Numbers:** ⚠️ Many custom numbers need verification

**Meta Tags:** ⚠️ Titles too long, descriptions missing rating/ZIPs

**Testimonials:** ⚠️ Missing Google Review attribution

**Overall Site Health:** ⚠️ Template needs updates to meet standards

---

## NOTES

- **All pages use same template:** Issues found affect all 24 pages uniformly
- **City-specific data:** Some cities have custom content (weatherRisks, neighborhoodCoverage, etc.) but it's not rendered as required H2/H3 sections
- **Phone numbers:** Many cities have custom localPhone numbers that may be old or incorrect — needs verification
- **Quote form:** City pages link to homepage form rather than having embedded forms — verify if this is acceptable or if embedded forms are required
- **Schema structure:** Current schema has 4-5 items, needs 7 items total (Service, FAQPage, WebPage, InsuranceAgency, Review x3)

