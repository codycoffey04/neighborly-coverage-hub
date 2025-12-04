# SEO + AEO + GEO Optimization Audit Checklist
## Coffey Agencies Website Audit - December 2024

---

## ✅ ALREADY IMPLEMENTED (Good!)

### Core SEO Elements
- ✅ Canonical tags on all pages
- ✅ Meta descriptions and title tags
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ XML Sitemap
- ✅ Robots.txt
- ✅ HTML lang attribute
- ✅ Mobile-responsive viewport
- ✅ Image optimization plugin (ViteImageOptimizer)
- ✅ Alt text on images
- ✅ Proper H1 structure (one per page)
- ✅ Breadcrumbs (just fixed!)

### Structured Data (JSON-LD)
- ✅ Organization/InsuranceAgency schema (homepage)
- ✅ LocalBusiness schema (office cities)
- ✅ FAQPage schema (FAQ page, service pages, articles)
- ✅ Service schema (all service pages)
- ✅ Article schema (Learn articles)
- ✅ Place schema (city pages)
- ✅ BreadcrumbList schema (all pages - just fixed!)
- ✅ HowTo schema (Claims page)
- ✅ ContactPage schema (Contact page)
- ✅ AboutPage schema (About page)

---

## 🎯 PRIORITY FIXES FOR OPTIMAL SEO/AEO/GEO

### 1. Review Schema Enhancement (HIGH PRIORITY)
**Current:** Reviews page has AggregateRating in WebPage schema
**Issue:** Not using Review schema for individual reviews

**Action Required:**
- Add Review schema with individual customer reviews
- Enhance AggregateRating schema with proper author information
- This will enable review rich snippets in search results

**Benefits:** 
- Review stars in Google search results
- Better click-through rates
- Increased trust signals

---

### 2. HowTo Schema on Service Pages (HIGH PRIORITY)
**Current:** Only on Claims page
**Missing:** HowTo schema on service pages explaining "How to get insurance"

**Action Required:**
- Add HowTo schema to each service page
- Steps: "Get a Quote", "Review Options", "Select Coverage", etc.
- Improves AEO/GEO for "how to" queries

**Example Query:** "How to get auto insurance in Alabama"
**Current:** May not appear in AI overviews
**After Fix:** Will be eligible for AI-powered search features

---

### 3. ServiceArea Schema Enhancement (MEDIUM PRIORITY)
**Current:** Service pages list cities in areaServed
**Missing:** Explicit ServiceArea schema

**Action Required:**
- Add ServiceArea schema to homepage
- Links service areas to specific geographic locations
- Better local SEO signals

---

### 4. Video Schema (IF YOU HAVE VIDEOS)
**Current:** Not checked
**Action:** If you have YouTube videos or embedded videos:
- Add VideoObject schema
- Enables video rich results
- Better engagement in search

---

### 5. Internal Linking Optimization (MEDIUM PRIORITY)

**Current Issues:**
- Service pages could link more to city pages
- City pages could link to relevant service pages
- Learn articles could cross-link better

**Action Required:**
- Add contextual internal links
- Use descriptive anchor text
- Create topic clusters (service → cities → articles)

**Example:**
- Auto Insurance page → link to "Auto Insurance in Centre, AL"
- Centre, AL page → link to "Auto Insurance", "Home Insurance"
- Better crawl depth and topical authority

---

### 6. Page Speed & Core Web Vitals (HIGH PRIORITY)

**Check:**
- ✅ Image optimization plugin installed
- ❓ Lazy loading on images
- ❓ Font loading optimization
- ❓ JavaScript bundle size
- ❓ Critical CSS inlining

**Tools to Test:**
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

**Target Metrics:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

---

### 7. AEO-Specific Optimizations (HIGH PRIORITY)

**Answer Engine Optimization (for ChatGPT, Gemini, Perplexity):**

**Current:** FAQ pages exist
**Enhancement Needed:**
- Ensure FAQ answers are comprehensive (50-200 words)
- Add more conversational Q&A format
- Include direct answers to common queries

**Example Questions to Add:**
- "What's the cheapest auto insurance in Alabama?"
- "How much does home insurance cost in Georgia?"
- "Do I need renters insurance in Alabama?"

**Action:** Review FAQ page answers - make them more detailed and conversational

---

### 8. GEO-Specific Optimizations (HIGH PRIORITY)

**Generative Engine Optimization (for AI-powered search):**

**Current:** Good structured data
**Enhancement Needed:**
1. **Entity Relationships:**
   - Link Organization → Services → Locations more explicitly
   - Add sameAs links for social profiles
   - Connect to Google Business Profile

2. **Semantic Markup:**
   - Add more descriptive properties to schemas
   - Include keywords naturally in schema descriptions
   - Use @id references consistently

3. **Knowledge Graph Signals:**
   - Ensure consistent NAP (Name, Address, Phone)
   - Add more structured data properties
   - Connect related entities

---

### 9. Local SEO Enhancements (MEDIUM PRIORITY)

**Current:** LocalBusiness schema on office cities
**Enhancement Needed:**

1. **Google Business Profile Integration:**
   - Verify schema matches GMB listings
   - Add openingHours more accurately
   - Include service areas explicitly

2. **NAP Consistency:**
   - Ensure phone/address consistent everywhere
   - Add to schema on all pages (not just city pages)

3. **Local Citations:**
   - Ensure consistent business information
   - Claim local directory listings

---

### 10. Accessibility & Technical SEO (MEDIUM PRIORITY)

**Check:**
- ✅ Alt text on images
- ✅ Semantic HTML
- ❓ Skip links (need to verify)
- ❓ ARIA labels on interactive elements
- ❓ Keyboard navigation
- ❓ Color contrast ratios

**Benefits:** Better user experience + SEO ranking factor

---

### 11. Content Optimization for AEO/GEO

**Current:** Good content
**Enhancement Opportunities:**

1. **Conversational Queries:**
   - Add content that answers "why", "how", "what if" questions
   - Example: "Why is uninsured motorist coverage important in Alabama?"

2. **Direct Answers:**
   - Use "Featured Snippet" format (short answer + detailed explanation)
   - Bullet points for quick scanning
   - Tables for comparisons

3. **Long-tail Keywords:**
   - Target questions people ask AI
   - "best auto insurance rates in [city]"
   - "cheapest home insurance [state]"

---

### 12. Schema Markup Improvements (MEDIUM PRIORITY)

**Enhance Existing Schemas:**

1. **Organization Schema:**
   - Add more social profiles (if available)
   - Include awards/credentials
   - Add more detailed descriptions

2. **Service Schema:**
   - Add offers/price ranges
   - Include service hours
   - Add more detailed descriptions

3. **Article Schema:**
   - Add images to articles
   - Include author details
   - Add updated dates (currently using static dates)

---

### 13. Mobile Optimization (MEDIUM PRIORITY)

**Check:**
- ✅ Mobile-responsive design
- ✅ Touch-friendly buttons
- ❓ Mobile page speed
- ❓ Mobile-first indexing compliance
- ❓ AMP (if needed for news/blog content)

---

### 14. HTTPS & Security (LOW PRIORITY - Likely Already Done)

**Verify:**
- ✅ HTTPS enforced
- ✅ Security headers
- ✅ SSL certificate valid

---

### 15. Additional Structured Data Opportunities

**Consider Adding:**

1. **Course Schema** (if you offer educational content):
   - For "Learn" articles with step-by-step guides

2. **Product Schema** (if you want):
   - For insurance products as "products"
   - Less common but possible

3. **Event Schema** (if you have events):
   - Webinars, seminars, etc.

---

## 📊 MEASUREMENT & MONITORING

### Tools to Set Up:
1. **Google Search Console** - Track search performance
2. **Google Analytics 4** - User behavior
3. **Google Business Profile** - Local visibility
4. **Schema Markup Validator** - Test structured data
5. **Rich Results Test** - Verify rich snippets
6. **PageSpeed Insights** - Performance monitoring

### Key Metrics to Track:
- Organic traffic growth
- Click-through rate (CTR)
- Average position in search
- Rich result impressions
- Core Web Vitals scores
- Local search visibility
- AI overview appearances (when available)

---

## 🚀 QUICK WINS (Implement First)

### Priority 1 (Do This Week):
1. ✅ Breadcrumbs fixed (DONE!)
2. Add Review schema to Reviews page
3. Enhance FAQ answers (make them more comprehensive)
4. Add HowTo schema to service pages

### Priority 2 (Do This Month):
1. Optimize internal linking structure
2. Add ServiceArea schema
3. Enhance existing schema markup
4. Test and optimize page speed

### Priority 3 (Ongoing):
1. Monitor and improve Core Web Vitals
2. Create more AEO-friendly content
3. Build more internal links
4. Track and optimize based on data

---

## 📝 NOTES

### AEO (Answer Engine Optimization):
- Focus on direct, comprehensive answers
- Use conversational language
- Answer "why" and "how" questions
- Include statistics and data

### GEO (Generative Engine Optimization):
- Optimize for AI-powered search features
- Focus on entity relationships
- Use semantic markup extensively
- Connect related topics

### Local SEO:
- Consistency is key (NAP)
- Local citations matter
- Google Business Profile optimization
- Local content creation

---

## 🔍 VALIDATION CHECKLIST

Before considering optimization complete, verify:

- [ ] All structured data validates in Google's Rich Results Test
- [ ] All pages have unique title tags (< 60 chars)
- [ ] All pages have unique meta descriptions (150-160 chars)
- [ ] All images have descriptive alt text
- [ ] Mobile usability test passes
- [ ] PageSpeed Insights score > 90
- [ ] No duplicate content issues
- [ ] Sitemap includes all important pages
- [ ] Robots.txt doesn't block important pages
- [ ] HTTPS everywhere
- [ ] Canonical tags on all pages
- [ ] Breadcrumbs work on all pages
- [ ] Internal linking is logical and helpful

---

## 📞 NEXT STEPS

1. **Immediate:** Implement Priority 1 items
2. **Week 1:** Test all structured data with Rich Results Test
3. **Week 2:** Submit updated sitemap to Google Search Console
4. **Week 3:** Monitor Google Search Console for breadcrumb detection
5. **Week 4:** Review performance data and iterate

---

*Last Updated: December 2024*
*Next Review: January 2025*

