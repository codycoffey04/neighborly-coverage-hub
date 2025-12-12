# AI Search Visibility (AEO/GEO) Audit Report
## Coffey Agencies Website
**Audit Date:** January 2025

---

## 1. ROBOTS.TXT

**Location:** `/public/robots.txt`

**Full Contents:**
```
User-agent: Googlebot
Allow: /
Disallow: /thank-you

User-agent: Bingbot
Allow: /
Disallow: /thank-you

User-agent: Twitterbot
Allow: /
Disallow: /thank-you

User-agent: facebookexternalhit
Allow: /
Disallow: /thank-you

User-agent: *
Allow: /
Disallow: /thank-you

Sitemap: https://coffeyagencies.com/sitemap.xml
```

**AI Bot Rules Status:** ❌ **MISSING**
- No rules for GPTBot (OpenAI)
- No rules for PerplexityBot (Perplexity)
- No rules for ClaudeBot (Anthropic)
- No rules for Anthropic-ai (Anthropic)
- No rules for CCBot (Common Crawl)
- No rules for ChatGPT-User (OpenAI)

**Recommendation:** Add explicit Allow rules for AI crawlers to ensure content is accessible for AI search engines.

---

## 2. HOMEPAGE (/)

**File:** `/src/pages/Index.tsx`

### H1 Tag:
```html
<h1>
  <span>Alabama & Georgia's</span>
  <span>Trusted Insurance Partner</span>
</h1>
```

### Meta Tags:
```html
<title>Coffey Agencies | Auto & Home Insurance in Alabama & Georgia</title>
<meta name="description" content="Alabama & Georgia's trusted insurance partner. Get free quotes on auto, home, renters, condo, life, and motorcycle insurance. Family-owned with local offices." />
```

### FAQ Section (Questions + Answers):

**Location:** `/src/components/homepage/FAQ.tsx`

1. **Q:** "What types of insurance do you offer?"  
   **A:** "Coffey Agencies offers comprehensive auto insurance, homeowners insurance, condo insurance (HO-6), renters insurance, life insurance, and motorcycle insurance throughout Alabama and Georgia. We specialize in helping families find the right coverage at competitive rates, whether you need basic liability protection or comprehensive policies with higher limits. Our team can also help you bundle multiple policies together—combining auto and home insurance typically saves 15-25%, which translates to up to $600 per year for most families while simplifying your coverage with one renewal date and one point of contact."

2. **Q:** "Do you serve both Alabama and Georgia?"  
   **A:** "Yes, Coffey Agencies is fully licensed and actively serves families throughout both Alabama and Georgia. We hold Alabama Resident Agency License #416438 and Georgia Non-Resident Agency License #149612. Our Centre, Alabama office serves clients across the state including Birmingham, Montgomery, Mobile, Auburn, and surrounding communities. Our Rome, Georgia office covers the Atlanta metro area, North Georgia, and cities like Alpharetta, Cartersville, and Lawrenceville. Whether you live in rural Cherokee County or metro Atlanta, we provide the same personalized service through phone, email, or in-person visits."

3. **Q:** "How do I get a quote?"  
   **A:** "Getting a quote from Coffey Agencies is simple and takes just a few minutes. You can request a quote online through our website anytime—day or night—by filling out a brief form with your basic information and coverage needs. A licensed insurance agent will personally call you back within 24 hours during business hours to discuss your options, answer questions, and provide accurate pricing. There are no automated phone trees or chatbots—you'll speak with a real person who can explain your coverage in plain English and help you make an informed decision about protecting your family."

4. **Q:** "Do I need to visit an office?"  
   **A:** "No office visit is required. We've designed our service model around convenience, so everything can be handled by phone, email, or through our website. You can get quotes, purchase policies, make changes to your coverage, and even start claims without ever leaving your home. That said, if you prefer face-to-face service or happen to be near one of our locations, you're always welcome to stop by. Our Centre, Alabama office is located at 1913 W Main Street, and our Rome, Georgia office is at 1703 Turner McCall Blvd SE. Our friendly team is happy to meet with you in person."

5. **Q:** "How fast can I get covered?"  
   **A:** "Most insurance policies can be activated the same day you apply, often within just a few hours of completing your application. If you need proof of insurance quickly—for example, to finalize a car purchase at the dealership, satisfy a lender requirement, or provide documentation to a landlord before signing a lease—we can typically issue your insurance ID cards and declarations page within hours. Our team understands that life doesn't always wait, so we prioritize fast turnaround times while still ensuring you have the right coverage for your situation. Just let us know your timeline and we'll work to meet it."

6. **Q:** "How much can I save by bundling?"  
   **A:** "Bundling your home and auto insurance together typically saves 15-25% on both policies, which translates to up to $600 annually for most Alabama and Georgia families. Beyond the dollar savings, bundling offers practical benefits: one agency handling all your coverage, one renewal date to remember, one point of contact when you have questions, and streamlined billing. You can also bundle renters insurance with auto, add motorcycle coverage to an existing policy, or combine condo insurance with your other lines. We'll price your coverage both ways—bundled and separate—so you can see exactly how much you'll save."

7. **Q:** "What are your office hours?"  
   **A:** "Our Centre, Alabama office is open Monday through Friday from 8:00 AM to 5:00 PM Central Time. Our Rome, Georgia office is open Monday through Friday from 8:30 AM to 4:30 PM Eastern Time. While we're closed on weekends and major holidays, you can request quotes online anytime and we'll respond the next business day. If you have a claims emergency outside business hours, you can file directly through your insurance company's 24/7 claims line—the number is on your policy documents or insurance ID card—and then contact us the next business day so we can follow up and advocate on your behalf."

8. **Q:** "How do I file a claim?"  
   **A:** "When you need to file a claim, call our office first before contacting the insurance company directly. Our team will guide you through the entire claims process step by step: we'll explain what's covered under your policy, help you gather the necessary documentation (photos, police reports, receipts), walk you through reporting the claim correctly, and follow up to make sure your claim is progressing. We act as your advocate throughout the process, answering questions and helping resolve any issues that arise. You shouldn't have to navigate the claims process alone or fight with your insurance company—that's what we're here for."

9. **Q:** "What makes Coffey Agencies different?"  
   **A:** "What sets Coffey Agencies apart is simple: we answer the phone. We call you back. We explain things in plain English without industry jargon. After 16 years serving Alabama and Georgia families, we've learned that good insurance is really just good service. We're not a call center or a website—we're real people who live in the same communities we serve. When you call, you'll reach someone who knows your name and your policy. When you have a claim, we advocate for you until it's resolved. We believe insurance should be personal, straightforward, and local—and that's exactly what we deliver every day."

### JSON-LD Schema Blocks:

**Full Schema Code:**
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "InsuranceAgency",
      "@id": "https://coffeyagencies.com/#organization",
      "name": "Coffey Agencies",
      "legalName": "Coffey Agencies Inc.",
      "description": "Alabama & Georgia's trusted insurance partner offering auto, home, condo, renters, life, and motorcycle insurance with local expertise and digital convenience.",
      "url": "https://coffeyagencies.com",
      "telephone": ["(256) 927-6287", "(706) 784-6511"],
      "foundingDate": "2009",
      "founder": {
        "@type": "Person",
        "name": "Cody Coffey"
      },
      "areaServed": [
        { "@id": "https://coffeyagencies.com/centre-al#place" },
        { "@id": "https://coffeyagencies.com/rome-ga#place" },
        { "@id": "https://coffeyagencies.com/birmingham-al#place" },
        { "@id": "https://coffeyagencies.com/montgomery-al#place" },
        { "@id": "https://coffeyagencies.com/mobile-al#place" },
        { "@id": "https://coffeyagencies.com/dothan-al#place" },
        { "@id": "https://coffeyagencies.com/auburn-al#place" },
        { "@id": "https://coffeyagencies.com/enterprise-al#place" },
        { "@id": "https://coffeyagencies.com/foley-al#place" },
        { "@id": "https://coffeyagencies.com/phenix-city-al#place" },
        { "@id": "https://coffeyagencies.com/troy-al#place" },
        { "@id": "https://coffeyagencies.com/trussville-al#place" },
        { "@id": "https://coffeyagencies.com/atlanta-ga#place" },
        { "@id": "https://coffeyagencies.com/alpharetta-ga#place" },
        { "@id": "https://coffeyagencies.com/calhoun-ga#place" },
        { "@id": "https://coffeyagencies.com/cartersville-ga#place" },
        { "@id": "https://coffeyagencies.com/cedartown-ga#place" },
        { "@id": "https://coffeyagencies.com/duluth-ga#place" },
        { "@id": "https://coffeyagencies.com/forsyth-ga#place" },
        { "@id": "https://coffeyagencies.com/lawrenceville-ga#place" },
        { "@id": "https://coffeyagencies.com/powder-springs-ga#place" },
        { "@id": "https://coffeyagencies.com/rockmart-ga#place" },
        { "@id": "https://coffeyagencies.com/summerville-ga#place" },
        { "@id": "https://coffeyagencies.com/suwanee-ga#place" }
      ],
      "priceRange": "$$",
      "paymentAccepted": ["Cash", "Credit Card", "Check", "Electronic Payment"],
      "currenciesAccepted": "USD",
      "logo": "https://coffeyagencies.com/coffey-logo.png",
      "image": "https://coffeyagencies.com/coffey-logo.png",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "1913 W Main Street",
          "addressLocality": "Centre",
          "addressRegion": "AL",
          "postalCode": "35960",
          "addressCountry": "US"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "1703 Turner McCall Blvd SE",
          "addressLocality": "Rome",
          "addressRegion": "GA",
          "postalCode": "30161",
          "addressCountry": "US"
        }
      ],
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "minValue": 6,
        "maxValue": 10
      },
      "slogan": "Your trusted insurance partner in Alabama & Georgia",
      "hasCredential": [
        {
          "@type": "GovernmentPermit",
          "name": "Alabama Resident Agency License",
          "identifier": "#416438",
          "validIn": {
            "@type": "AdministrativeArea",
            "name": "Alabama"
          }
        },
        {
          "@type": "GovernmentPermit",
          "name": "Georgia Non-Resident Agency License",
          "identifier": "#149612",
          "validIn": {
            "@type": "AdministrativeArea",
            "name": "Georgia"
          }
        }
      ],
      "knowsAbout": [
        "Auto Insurance",
        "Home Insurance",
        "Renters Insurance",
        "Condo Insurance",
        "Life Insurance",
        "Motorcycle Insurance",
        "Liability Coverage",
        "Comprehensive Coverage",
        "Collision Coverage",
        "Uninsured Motorist Coverage",
        "Bundle Insurance",
        "Property Insurance",
        "Alabama Insurance Requirements",
        "Georgia Insurance Requirements",
        "Dwelling Coverage",
        "Personal Property Coverage",
        "Loss of Use Coverage",
        "Medical Payments Coverage",
        "HO-6 Condo Insurance",
        "Term Life Insurance",
        "Whole Life Insurance"
      ],
      "award": [
        {
          "@type": "Award",
          "name": "A+ BBB Rating",
          "awardedBy": {
            "@type": "Organization",
            "name": "Better Business Bureau"
          }
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Insurance Services",
        "itemListElement": [
          { "@id": "https://coffeyagencies.com/services/auto-insurance#service" },
          { "@id": "https://coffeyagencies.com/services/home-insurance#service" },
          { "@id": "https://coffeyagencies.com/services/renters-insurance#service" },
          { "@id": "https://coffeyagencies.com/services/condo-insurance#service" },
          { "@id": "https://coffeyagencies.com/services/life-insurance#service" },
          { "@id": "https://coffeyagencies.com/services/motorcycle-insurance#service" }
        ]
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "17:00",
          "description": "Centre, AL Office Hours"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:30",
          "closes": "16:30",
          "description": "Rome, GA Office Hours"
        }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "(256) 927-6287",
          "contactType": "customer service",
          "areaServed": "Alabama",
          "availableLanguage": ["English", "Spanish"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "(706) 784-6511",
          "contactType": "customer service",
          "areaServed": "Georgia",
          "availableLanguage": "English"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/codycoffeyagency",
        "https://www.google.com/maps/place/?cid=ChIJJ80TpQ5hiogRn3tzQbqNLMA",
        "https://www.google.com/maps/place/?cid=ChIJZQwKAM-kiogR_bIpdOhQm7o"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://coffeyagencies.com/#centre-office",
      "name": "Coffey Agencies - Centre, AL (Cody Coffey Agency)",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1913 W Main Street",
        "addressLocality": "Centre",
        "addressRegion": "AL",
        "postalCode": "35960",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "34.1519",
        "longitude": "-85.6789"
      },
      "telephone": "(256) 927-6287",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "116",
        "bestRating": "5",
        "worstRating": "1"
      },
      "parentOrganization": {
        "@id": "https://coffeyagencies.com/#organization"
      },
      "priceRange": "$$",
      "image": "https://coffeyagencies.com/centre-office.jpg"
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://coffeyagencies.com/#rome-office",
      "name": "Coffey Agencies - Rome, GA (Millican & Coffey Agency)",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1703 Turner McCall Blvd SE",
        "addressLocality": "Rome",
        "addressRegion": "GA",
        "postalCode": "30161",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "34.2558",
        "longitude": "-85.1644"
      },
      "telephone": "(706) 784-6511",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:30",
          "closes": "16:30"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.6",
        "reviewCount": "90",
        "bestRating": "5",
        "worstRating": "1"
      },
      "parentOrganization": {
        "@id": "https://coffeyagencies.com/#organization"
      },
      "priceRange": "$$",
      "image": "https://coffeyagencies.com/rome-office.jpg"
    },
    {
      "@type": "WebSite",
      "@id": "https://coffeyagencies.com/#website",
      "url": "https://coffeyagencies.com",
      "name": "Coffey Agencies",
      "description": "Auto, Home, Life & Motorcycle Insurance in Alabama & Georgia",
      "publisher": {
        "@id": "https://coffeyagencies.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://coffeyagencies.com/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Service",
      "@id": "https://coffeyagencies.com/#insurance-services",
      "serviceType": "Insurance Agency Services",
      "provider": {
        "@id": "https://coffeyagencies.com/#organization"
      },
      "areaServed": [
        {
          "@type": "State",
          "name": "Alabama",
          "containsPlace": [
            { "@type": "City", "name": "Auburn" },
            { "@type": "City", "name": "Birmingham" },
            { "@type": "City", "name": "Centre" },
            { "@type": "City", "name": "Dothan" },
            { "@type": "City", "name": "Enterprise" },
            { "@type": "City", "name": "Foley" },
            { "@type": "City", "name": "Mobile" },
            { "@type": "City", "name": "Montgomery" },
            { "@type": "City", "name": "Phenix City" },
            { "@type": "City", "name": "Troy" },
            { "@type": "City", "name": "Trussville" }
          ]
        },
        {
          "@type": "State",
          "name": "Georgia",
          "containsPlace": [
            { "@type": "City", "name": "Alpharetta" },
            { "@type": "City", "name": "Atlanta" },
            { "@type": "City", "name": "Calhoun" },
            { "@type": "City", "name": "Cartersville" },
            { "@type": "City", "name": "Cedartown" },
            { "@type": "City", "name": "Duluth" },
            { "@type": "City", "name": "Forsyth" },
            { "@type": "City", "name": "Lawrenceville" },
            { "@type": "City", "name": "Powder Springs" },
            { "@type": "City", "name": "Rockmart" },
            { "@type": "City", "name": "Rome" },
            { "@type": "City", "name": "Summerville" },
            { "@type": "City", "name": "Suwanee" }
          ]
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Insurance Products",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Auto Insurance" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Home Insurance" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Renters Insurance" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Condo Insurance" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Life Insurance" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Motorcycle Insurance" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://coffeyagencies.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://coffeyagencies.com/"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://coffeyagencies.com/#webpage",
      "url": "https://coffeyagencies.com/",
      "name": "Insurance Agency in Centre, AL & Rome, GA | Coffey Agencies",
      "description": "Alabama & Georgia's trusted insurance partner. Get free quotes on auto, home, renters, condo, life, and motorcycle insurance. Family-owned with offices in Centre, AL and Rome, GA.",
      "isPartOf": {
        "@id": "https://coffeyagencies.com/#website"
      },
      "about": {
        "@id": "https://coffeyagencies.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://coffeyagencies.com/#breadcrumb"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://coffeyagencies.com/#faqpage",
      "name": "Frequently Asked Questions",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What types of insurance do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Coffey Agencies offers comprehensive auto insurance, homeowners insurance, condo insurance (HO-6), renters insurance, life insurance, and motorcycle insurance throughout Alabama and Georgia. We specialize in helping families find the right coverage at competitive rates, whether you need basic liability protection or comprehensive policies with higher limits. Our team can also help you bundle multiple policies together—combining auto and home insurance typically saves 15-25%, which translates to up to $600 per year for most families while simplifying your coverage with one renewal date and one point of contact."
          }
        },
        {
          "@type": "Question",
          "name": "Do you serve both Alabama and Georgia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Coffey Agencies is fully licensed and actively serves families throughout both Alabama and Georgia. We hold Alabama Resident Agency License #416438 and Georgia Non-Resident Agency License #149612. Our Centre, Alabama office serves clients across the state including Birmingham, Montgomery, Mobile, Auburn, and surrounding communities. Our Rome, Georgia office covers the Atlanta metro area, North Georgia, and cities like Alpharetta, Cartersville, and Lawrenceville. Whether you live in rural Cherokee County or metro Atlanta, we provide the same personalized service through phone, email, or in-person visits."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get a quote?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Getting a quote from Coffey Agencies is simple and takes just a few minutes. You can request a quote online through our website anytime—day or night—by filling out a brief form with your basic information and coverage needs. A licensed insurance agent will personally call you back within 24 hours during business hours to discuss your options, answer questions, and provide accurate pricing. There are no automated phone trees or chatbots—you'll speak with a real person who can explain your coverage in plain English and help you make an informed decision about protecting your family."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to visit an office?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No office visit is required. We've designed our service model around convenience, so everything can be handled by phone, email, or through our website. You can get quotes, purchase policies, make changes to your coverage, and even start claims without ever leaving your home. That said, if you prefer face-to-face service or happen to be near one of our locations, you're always welcome to stop by. Our Centre, Alabama office is located at 1913 W Main Street, and our Rome, Georgia office is at 1703 Turner McCall Blvd SE. Our friendly team is happy to meet with you in person."
          }
        },
        {
          "@type": "Question",
          "name": "How fast can I get covered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most insurance policies can be activated the same day you apply, often within just a few hours of completing your application. If you need proof of insurance quickly—for example, to finalize a car purchase at the dealership, satisfy a lender requirement, or provide documentation to a landlord before signing a lease—we can typically issue your insurance ID cards and declarations page within hours. Our team understands that life doesn't always wait, so we prioritize fast turnaround times while still ensuring you have the right coverage for your situation. Just let us know your timeline and we'll work to meet it."
          }
        },
        {
          "@type": "Question",
          "name": "How much can I save by bundling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bundling your home and auto insurance together typically saves 15-25% on both policies, which translates to up to $600 annually for most Alabama and Georgia families. Beyond the dollar savings, bundling offers practical benefits: one agency handling all your coverage, one renewal date to remember, one point of contact when you have questions, and streamlined billing. You can also bundle renters insurance with auto, add motorcycle coverage to an existing policy, or combine condo insurance with your other lines. We'll price your coverage both ways—bundled and separate—so you can see exactly how much you'll save."
          }
        },
        {
          "@type": "Question",
          "name": "What are your office hours?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Centre, Alabama office is open Monday through Friday from 8:00 AM to 5:00 PM Central Time. Our Rome, Georgia office is open Monday through Friday from 8:30 AM to 4:30 PM Eastern Time. While we're closed on weekends and major holidays, you can request quotes online anytime and we'll respond the next business day. If you have a claims emergency outside business hours, you can file directly through your insurance company's 24/7 claims line—the number is on your policy documents or insurance ID card—and then contact us the next business day so we can follow up and advocate on your behalf."
          }
        },
        {
          "@type": "Question",
          "name": "How do I file a claim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When you need to file a claim, call our office first before contacting the insurance company directly. Our team will guide you through the entire claims process step by step: we'll explain what's covered under your policy, help you gather the necessary documentation (photos, police reports, receipts), walk you through reporting the claim correctly, and follow up to make sure your claim is progressing. We act as your advocate throughout the process, answering questions and helping resolve any issues that arise. You shouldn't have to navigate the claims process alone or fight with your insurance company—that's what we're here for."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Coffey Agencies different?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "What sets Coffey Agencies apart is simple: we answer the phone. We call you back. We explain things in plain English without industry jargon. After 16 years serving Alabama and Georgia families, we've learned that good insurance is really just good service. We're not a call center or a website—we're real people who live in the same communities we serve. When you call, you'll reach someone who knows your name and your policy. When you have a claim, we advocate for you until it's resolved. We believe insurance should be personal, straightforward, and local—and that's exactly what we deliver every day."
          }
        }
      ]
    }
  ]
}
```

---

## 3. CITY PAGE (/birmingham-al)

**File:** `/src/components/city/CityPageTemplate.tsx`  
**Data Source:** `/src/data/cityData.ts` (slug: "birmingham-al")

### H1 Tag:
```html
<h1>Auto Insurance Quote Birmingham, AL - Compare Rates & Save Up to $600</h1>
```

### Meta Tags:
```html
<title>Auto Insurance Quote Birmingham, AL - Compare Rates & Save Up to $600 | Coffey Agencies</title>
<meta name="description" content="Local help with auto insurance in the 35215 and 35235 areas, homeowners coverage, and condo protection. Bundle home + auto for value and simplicity—one team, one call." />
```

### FAQ Section (Questions + Answers):

1. **Q:** "Do I need to visit your office to get insurance in Birmingham?"  
   **A:** "No office visit required. We provide complete insurance services digitally from our Centre, AL office. Everything from quotes to policy changes to claims support happens online or by phone. Birmingham residents in 35215 and 35235 save time while receiving comprehensive coverage analysis and personal attention from licensed Alabama agents who understand Jefferson County's specific risks."

2. **Q:** "How significant is flood risk near the Cahaba River and Village Creek?"  
   **A:** "Properties near the Cahaba River and Village Creek face meaningful flood risk, particularly during spring storms and tropical remnants in fall. Standard homeowners policies exclude flood damage entirely — you need separate flood insurance through the National Flood Insurance Program or private insurers. Low-lying portions of Roebuck, Center Point, and areas near Village Creek should treat flood coverage as essential. We analyze FEMA flood maps for your specific address to determine risk levels and coverage needs."

3. **Q:** "What bundle savings are available for Birmingham residents?"  
   **A:** "Bundling home and auto insurance typically saves 15-25% on combined premiums — often $400-600 annually for Birmingham families. You can maximize savings by combining multiple policies: home and auto, renters and auto, or adding condo and life insurance to your package. One household, one agency, one discount."

4. **Q:** "What are Alabama's minimum auto insurance requirements?"  
   **A:** "Alabama requires minimum liability coverage of 25/50/25: $25,000 bodily injury per person, $50,000 per accident, and $25,000 property damage. However, these minimums rarely provide adequate protection for Birmingham drivers. A serious accident on I-59 or I-20 can easily generate claims exceeding $100,000. We typically recommend 50/100/50 or higher limits, plus matching uninsured motorist coverage."

5. **Q:** "How does tornado season affect insurance in Birmingham?"  
   **A:** "Birmingham sits in Dixie Alley — the southeastern extension of Tornado Alley with peak activity March through May. This elevated tornado risk affects homeowners insurance rates throughout Jefferson County. Premiums reflect the reality that Birmingham homes face greater wind damage probability than homes in other regions. Your policy's wind and hail deductible may be higher than your standard deductible. Adequate dwelling coverage ensures you can actually rebuild after a catastrophic storm."

6. **Q:** "Do neighborhoods like Center Point and Roebuck have different insurance needs?"  
   **A:** "Absolutely. Center Point is an incorporated city with its own fire department, which can improve homeowners rates. Roebuck's older housing stock and mature trees create different risk profiles than newer subdivisions in Clay or Pinson. Property values, construction types, crime statistics, and proximity to fire protection all vary across 35215 and 35235 neighborhoods. We customize coverage for each address, not just each ZIP code."

7. **Q:** "What factors affect auto insurance rates in Birmingham?"  
   **A:** "Your specific address in 35215 or 35235, driving record, vehicle types, annual mileage, and commute patterns all affect rates. Urban traffic density in Roebuck differs from rural roads in Pinson. Garaging location affects theft and vandalism risk. We consider all these factors — plus available discounts for safe drivers, good students, bundled policies, and more — to find your best rate."

8. **Q:** "How quickly can I get coverage for my property?"  
   **A:** "Most insurance policies can begin the same day you apply, often within just a few hours of completing your application. Our streamlined digital process means Birmingham residents in 35215 and 35235 receive quotes within about 15 minutes online or by phone, and have active coverage the same day you apply. Once you've reviewed your options and made a decision, coverage activates immediately. If you need proof of insurance quickly—for example, to finalize a car purchase at a dealership, satisfy a lender requirement, or provide documentation to a landlord before signing a lease—we can typically issue your insurance ID cards and declarations page within hours. Our team understands that life doesn't always wait, especially in a busy metro area like Birmingham, so we prioritize fast turnaround times while still ensuring you have the right coverage for your situation. Just let us know your timeline and we'll work to meet it, whether you're protecting a home in Roebuck, Center Point, or any other neighborhood throughout the 35215 and 35235 areas."

### JSON-LD Schema Blocks:

**Full Schema Code:**
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "InsuranceAgency",
      "@id": "https://coffeyagencies.com/#organization",
      "name": "Coffey Agencies Inc.",
      "url": "https://coffeyagencies.com",
      "telephone": ["(256) 927-6287", "(706) 784-6511"],
      "email": "info@coffeyagencies.com",
      "priceRange": "$$",
      "image": "https://coffeyagencies.com/coffey-logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1913 W Main Street",
        "addressLocality": "Centre",
        "addressRegion": "AL",
        "postalCode": "35960",
        "addressCountry": "US"
      }
    },
    {
      "@type": "FAQPage",
      "name": "Insurance FAQs for Birmingham, Alabama",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do I need to visit your office to get insurance in Birmingham?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No office visit required. We provide complete insurance services digitally from our Centre, AL office. Everything from quotes to policy changes to claims support happens online or by phone. Birmingham residents in 35215 and 35235 save time while receiving comprehensive coverage analysis and personal attention from licensed Alabama agents who understand Jefferson County's specific risks."
          }
        },
        {
          "@type": "Question",
          "name": "How significant is flood risk near the Cahaba River and Village Creek?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Properties near the Cahaba River and Village Creek face meaningful flood risk, particularly during spring storms and tropical remnants in fall. Standard homeowners policies exclude flood damage entirely — you need separate flood insurance through the National Flood Insurance Program or private insurers. Low-lying portions of Roebuck, Center Point, and areas near Village Creek should treat flood coverage as essential. We analyze FEMA flood maps for your specific address to determine risk levels and coverage needs."
          }
        },
        {
          "@type": "Question",
          "name": "What bundle savings are available for Birmingham residents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bundling home and auto insurance typically saves 15-25% on combined premiums — often $400-600 annually for Birmingham families. You can maximize savings by combining multiple policies: home and auto, renters and auto, or adding condo and life insurance to your package. One household, one agency, one discount."
          }
        },
        {
          "@type": "Question",
          "name": "What are Alabama's minimum auto insurance requirements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Alabama requires minimum liability coverage of 25/50/25: $25,000 bodily injury per person, $50,000 per accident, and $25,000 property damage. However, these minimums rarely provide adequate protection for Birmingham drivers. A serious accident on I-59 or I-20 can easily generate claims exceeding $100,000. We typically recommend 50/100/50 or higher limits, plus matching uninsured motorist coverage."
          }
        },
        {
          "@type": "Question",
          "name": "How does tornado season affect insurance in Birmingham?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Birmingham sits in Dixie Alley — the southeastern extension of Tornado Alley with peak activity March through May. This elevated tornado risk affects homeowners insurance rates throughout Jefferson County. Premiums reflect the reality that Birmingham homes face greater wind damage probability than homes in other regions. Your policy's wind and hail deductible may be higher than your standard deductible. Adequate dwelling coverage ensures you can actually rebuild after a catastrophic storm."
          }
        },
        {
          "@type": "Question",
          "name": "Do neighborhoods like Center Point and Roebuck have different insurance needs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Center Point is an incorporated city with its own fire department, which can improve homeowners rates. Roebuck's older housing stock and mature trees create different risk profiles than newer subdivisions in Clay or Pinson. Property values, construction types, crime statistics, and proximity to fire protection all vary across 35215 and 35235 neighborhoods. We customize coverage for each address, not just each ZIP code."
          }
        },
        {
          "@type": "Question",
          "name": "What factors affect auto insurance rates in Birmingham?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your specific address in 35215 or 35235, driving record, vehicle types, annual mileage, and commute patterns all affect rates. Urban traffic density in Roebuck differs from rural roads in Pinson. Garaging location affects theft and vandalism risk. We consider all these factors — plus available discounts for safe drivers, good students, bundled policies, and more — to find your best rate."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can I get coverage for my property?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most insurance policies can begin the same day you apply, often within just a few hours of completing your application. Our streamlined digital process means Birmingham residents in 35215 and 35235 receive quotes within about 15 minutes online or by phone, and have active coverage the same day you apply. Once you've reviewed your options and made a decision, coverage activates immediately. If you need proof of insurance quickly—for example, to finalize a car purchase at a dealership, satisfy a lender requirement, or provide documentation to a landlord before signing a lease—we can typically issue your insurance ID cards and declarations page within hours. Our team understands that life doesn't always wait, especially in a busy metro area like Birmingham, so we prioritize fast turnaround times while still ensuring you have the right coverage for your situation. Just let us know your timeline and we'll work to meet it, whether you're protecting a home in Roebuck, Center Point, or any other neighborhood throughout the 35215 and 35235 areas."
          }
        }
      ]
    },
    {
      "@type": "Place",
      "@id": "https://coffeyagencies.com/birmingham-al#place",
      "name": "Birmingham, Alabama",
      "description": "Insurance services for Birmingham, Alabama residents. Serving ZIP codes 35215, 35235.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Birmingham",
        "addressRegion": "AL",
        "postalCode": "35215, 35235",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "33.5207",
        "longitude": "-86.8025"
      },
      "containsPlace": [
        { "@type": "Place", "name": "Roebuck" },
        { "@type": "Place", "name": "Killough Springs" },
        { "@type": "Place", "name": "Huffman" },
        { "@type": "Place", "name": "East Lake" },
        { "@type": "Place", "name": "Center Point" },
        { "@type": "Place", "name": "Pinson" },
        { "@type": "Place", "name": "Clay" },
        { "@type": "Place", "name": "Chalkville" }
      ]
    },
    {
      "@type": "BreadcrumbList",
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
          "name": "Service Areas",
          "item": "https://coffeyagencies.com/service-areas"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Birmingham, AL",
          "item": "https://coffeyagencies.com/birmingham-al"
        }
      ]
    }
  ]
}
```

---

## 4. SERVICE PAGE (/services/auto-insurance)

**File:** `/src/pages/services/AutoInsurance.tsx`

### H1 Tag:
```html
<h1>Auto Insurance in Alabama & Georgia</h1>
```

### Meta Tags:
```html
<title>Auto Insurance in Alabama & Georgia | Coffey Agencies</title>
<meta name="description" content="Clear options, fast quotes, and a team that actually picks up the phone. Get auto insurance coverage in Alabama and Georgia with local expertise." />
```

### FAQ Section (Questions + Answers):

1. **Q:** "What liability limits do you usually recommend in Alabama and Georgia?"  
   **A:** "State minimums are designed to make policies legal, not necessarily adequate. Many households choose higher limits to protect wages, savings, and future earnings after a serious accident. If you own property, have significant income, or regularly drive interstates, consider higher bodily injury and property damage limits, plus matching UM/UIM. We'll price a few tiers side-by-side so you can see the cost difference and choose confidently."

2. **Q:** "How do deductibles affect my premium?"  
   **A:** "Deductibles are what you pay out of pocket before coverage kicks in. Higher deductibles usually mean lower premiums, but they should always match your cash-on-hand. For hail-prone areas, a moderate Comprehensive deductible can prevent surprises. For Collision, raising the deductible often makes sense if the vehicle's value is declining. We'll show several options so you can balance savings with practical affordability."

3. **Q:** "What does UM/UIM cover?"  
   **A:** "Uninsured/Underinsured Motorist coverage helps when the other driver has little or no insurance. It can pay for medical bills, lost wages, and, in some cases, property damage depending on the specific form. Because medical costs and litigation can be significant, many drivers choose UM/UIM limits that mirror their liability limits. It's an important layer that protects you, not just other people."

4. **Q:** "How can I lower my rate without underinsuring my car?"  
   **A:** "Start with bundling and autopay/paperless. Next, confirm that liability and UM/UIM limits are appropriately high, then explore deductibles that fit your emergency fund. Consider a telematics program if your driving patterns are steady and daytime-heavy. Finally, review vehicles you're insuring—dropping Collision on an older car may make sense while keeping Comprehensive for hail and theft risks."

5. **Q:** "What documents do I need to get an auto quote?"  
   **A:** "Driver's license info for each driver, garaging address, prior insurance details (if any), and vehicle VINs or year/make/model. We'll also ask about mileage and usage. If you've had tickets or accidents in the last few years, approximate dates help us price accurately. With that, most quotes take only a few minutes."

6. **Q:** "What are the first steps if I have a claim?"  
   **A:** "Make sure everyone is safe, contact authorities if needed, take photos, and collect the other driver's info. Then call us—we'll help you start the claim and outline next steps like repairs, rental reimbursement, and medical care. Keep your policy number handy and avoid admitting fault at the scene. Our role is to make this process as smooth as possible."

### JSON-LD Schema Blocks:

**Full Schema Code:**
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "name": "Auto Insurance Frequently Asked Questions",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What liability limits do you usually recommend in Alabama and Georgia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "State minimums are designed to make policies legal, not necessarily adequate. Many households choose higher limits to protect wages, savings, and future earnings after a serious accident. If you own property, have significant income, or regularly drive interstates, consider higher bodily injury and property damage limits, plus matching UM/UIM. We'll price a few tiers side-by-side so you can see the cost difference and choose confidently."
          }
        },
        {
          "@type": "Question",
          "name": "How do deductibles affect my premium?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deductibles are what you pay out of pocket before coverage kicks in. Higher deductibles usually mean lower premiums, but they should always match your cash-on-hand. For hail-prone areas, a moderate Comprehensive deductible can prevent surprises. For Collision, raising the deductible often makes sense if the vehicle's value is declining. We'll show several options so you can balance savings with practical affordability."
          }
        },
        {
          "@type": "Question",
          "name": "What does UM/UIM cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Uninsured/Underinsured Motorist coverage helps when the other driver has little or no insurance. It can pay for medical bills, lost wages, and, in some cases, property damage depending on the specific form. Because medical costs and litigation can be significant, many drivers choose UM/UIM limits that mirror their liability limits. It's an important layer that protects you, not just other people."
          }
        },
        {
          "@type": "Question",
          "name": "How can I lower my rate without underinsuring my car?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start with bundling and autopay/paperless. Next, confirm that liability and UM/UIM limits are appropriately high, then explore deductibles that fit your emergency fund. Consider a telematics program if your driving patterns are steady and daytime-heavy. Finally, review vehicles you're insuring—dropping Collision on an older car may make sense while keeping Comprehensive for hail and theft risks."
          }
        },
        {
          "@type": "Question",
          "name": "What documents do I need to get an auto quote?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Driver's license info for each driver, garaging address, prior insurance details (if any), and vehicle VINs or year/make/model. We'll also ask about mileage and usage. If you've had tickets or accidents in the last few years, approximate dates help us price accurately. With that, most quotes take only a few minutes."
          }
        },
        {
          "@type": "Question",
          "name": "What are the first steps if I have a claim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Make sure everyone is safe, contact authorities if needed, take photos, and collect the other driver's info. Then call us—we'll help you start the claim and outline next steps like repairs, rental reimbursement, and medical care. Keep your policy number handy and avoid admitting fault at the scene. Our role is to make this process as smooth as possible."
          }
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://coffeyagencies.com/services/auto-insurance#service",
      "serviceType": "Auto Insurance",
      "provider": {
        "@id": "https://coffeyagencies.com/#organization"
      },
      "areaServed": [
        { "@id": "https://coffeyagencies.com/centre-al#place" },
        { "@id": "https://coffeyagencies.com/rome-ga#place" },
        { "@id": "https://coffeyagencies.com/birmingham-al#place" },
        { "@id": "https://coffeyagencies.com/montgomery-al#place" },
        { "@id": "https://coffeyagencies.com/mobile-al#place" },
        { "@id": "https://coffeyagencies.com/dothan-al#place" },
        { "@id": "https://coffeyagencies.com/auburn-al#place" },
        { "@id": "https://coffeyagencies.com/enterprise-al#place" },
        { "@id": "https://coffeyagencies.com/foley-al#place" },
        { "@id": "https://coffeyagencies.com/phenix-city-al#place" },
        { "@id": "https://coffeyagencies.com/troy-al#place" },
        { "@id": "https://coffeyagencies.com/trussville-al#place" },
        { "@id": "https://coffeyagencies.com/atlanta-ga#place" },
        { "@id": "https://coffeyagencies.com/alpharetta-ga#place" },
        { "@id": "https://coffeyagencies.com/calhoun-ga#place" },
        { "@id": "https://coffeyagencies.com/cartersville-ga#place" },
        { "@id": "https://coffeyagencies.com/cedartown-ga#place" },
        { "@id": "https://coffeyagencies.com/duluth-ga#place" },
        { "@id": "https://coffeyagencies.com/forsyth-ga#place" },
        { "@id": "https://coffeyagencies.com/lawrenceville-ga#place" },
        { "@id": "https://coffeyagencies.com/powder-springs-ga#place" },
        { "@id": "https://coffeyagencies.com/rockmart-ga#place" },
        { "@id": "https://coffeyagencies.com/summerville-ga#place" },
        { "@id": "https://coffeyagencies.com/suwanee-ga#place" }
      ],
      "description": "Comprehensive auto insurance coverage including liability, collision, comprehensive, and uninsured motorist protection for Alabama and Georgia drivers.",
      "serviceOutput": "Insurance Policy",
      "termsOfService": "https://coffeyagencies.com/terms",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "BreadcrumbList",
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
          "name": "Auto Insurance",
          "item": "https://coffeyagencies.com/services/auto-insurance"
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How to Get Auto Insurance in Alabama & Georgia",
      "description": "Get auto insurance coverage from a local independent agent in 4 simple steps.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Request a Quote",
          "text": "Tell us about your coverage needs online or by phone. Takes about 2 minutes."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Review Your Options",
          "text": "A licensed agent presents 2-3 coverage options from multiple carriers."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Select Your Coverage",
          "text": "Choose the policy that fits your needs and budget."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Get Covered",
          "text": "We bind your coverage and send ID cards same-day in most cases."
        }
      ],
      "totalTime": "PT15M"
    }
  ]
}
```

---

## 5. SITEMAP LOCATION

**File:** `/public/sitemap.xml`  
**URL:** `https://coffeyagencies.com/sitemap.xml`

**Status:** ✅ **EXISTS**

**URL Structure:**
- Homepage: `https://coffeyagencies.com/`
- Static Pages: `/about`, `/contact`, `/faq`, `/reviews`, `/learn`, `/privacy`, `/terms`, `/claims`
- Service Pages: `/services/auto-insurance`, `/services/home-insurance`, `/services/renters-insurance`, `/services/condo-insurance`, `/services/life-insurance`, `/services/motorcycle-insurance`
- City Pages: `/{city-slug}` (e.g., `/birmingham-al`, `/centre-al`, `/rome-ga`)
- Learn Articles: `/learn/{article-slug}`

**Total URLs in Sitemap:** 50+ URLs

**Last Modified:** 2025-12-02 (Note: This appears to be a future date, likely a placeholder)

---

## 6. DOMAIN AGE / SITE LAUNCH DATE

**Business Founding Date:** 2009 (from schema: `"foundingDate": "2009"`)

**Current Site Version Launch:** Unknown
- Implementation reports indicate schema enhancements were completed in December 2024
- No explicit launch date found in codebase
- Site appears to be a modern React/Vite application, likely launched recently (2024)

**Recommendation:** Check domain registration date via WHOIS or hosting provider records to determine exact domain age.

---

## SUMMARY & RECOMMENDATIONS

### ✅ Strengths:
1. **Comprehensive Schema Markup:** Excellent JSON-LD implementation with Organization, LocalBusiness, Service, FAQPage, Place, BreadcrumbList, and HowTo schemas
2. **Rich FAQ Content:** Detailed FAQ sections on homepage, city pages, and service pages with proper FAQPage schema
3. **Geographic Targeting:** Strong GEO optimization with Place schemas, city-specific content, and ZIP code targeting
4. **Sitemap:** Well-structured XML sitemap with all major pages included
5. **Meta Tags:** Proper title and description tags on all pages

### ❌ Critical Issues:
1. **Missing AI Bot Rules in robots.txt:** No explicit Allow rules for GPTBot, PerplexityBot, ClaudeBot, or other AI crawlers
2. **Potential Crawlability Barrier:** Without explicit Allow rules, AI search engines may not crawl the site effectively

### 🔧 Recommended Actions:

1. **Update robots.txt** to explicitly allow AI crawlers:
```
User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Anthropic-ai
Allow: /

User-agent: CCBot
Allow: /

User-agent: ChatGPT-User
Allow: /
```

2. **Verify Domain Age:** Check actual domain registration and site launch dates for accurate reporting

3. **Monitor AI Search Visibility:** Track how the site appears in AI search results (ChatGPT, Perplexity, Claude, etc.) after robots.txt update

---

**Report Generated:** January 2025  
**Auditor:** AI Search Visibility Analysis

