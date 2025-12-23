import { Header } from "@/components/homepage/Header";
import { Hero } from "@/components/homepage/Hero";
import { TrustBar } from "@/components/homepage/TrustBar";
import { ServicesOverview } from "@/components/homepage/ServicesOverview";
import { WhyChooseUs } from "@/components/homepage/WhyChooseUs";
import { HowItWorks } from "@/components/homepage/HowItWorks";
import { ServiceArea } from "@/components/homepage/ServiceArea";
import { FinalCTA } from "@/components/homepage/FinalCTA";
import { BottomCTA } from "@/components/homepage/BottomCTA";
import { Footer } from "@/components/homepage/Footer";
import { Helmet } from "react-helmet-async";
import heroBackground from "@/assets/hero-background.jpg";
import { useScrollToQuoteForm } from "@/hooks/useScrollToQuoteForm";
import { lazy, Suspense } from "react";

// Lazy load below-the-fold components to reduce initial bundle size
const Testimonials = lazy(() => import("@/components/homepage/Testimonials").then(m => ({ default: m.Testimonials })));
const FAQ = lazy(() => import("@/components/homepage/FAQ").then(m => ({ default: m.FAQ })));

const Index = () => {
  useScrollToQuoteForm();
  // Comprehensive Schema.org JSON-LD for homepage
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "InsuranceAgency",
        "@id": "https://coffeyagencies.com/#organization",
        "name": "Coffey Agencies",
        "legalName": "Coffey Agencies Inc.",
        "description": "Alabama & Georgia's smarter way to insure. Bundle home + auto and save up to 25%. Auto, home, renters, condo, life, and motorcycle insurance with local expertise.",
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
        "slogan": "Alabama & Georgia's smarter way to insure",
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
          "reviewCount": "117",
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
          "reviewCount": "93",
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
        "description": "Alabama & Georgia's smarter way to insure. Bundle home + auto and save up to 25%. Free quotes on auto, home, renters, condo, life, and motorcycle insurance. Family-owned agency.",
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
  };

  return (
    <>
      <Helmet>
        <title>Auto & Home Insurance Alabama & Georgia | Coffey Agencies</title>
        <meta name="description" content="Alabama & Georgia's smarter way to insure. 4.7★ (117+ reviews). Bundle home + auto and save up to 25%. Real people who answer the phone. Free quotes from family-owned agency." />
        <link rel="canonical" href="https://coffeyagencies.com/" />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="Coffey Agencies Inc. | Insurance in Alabama & Georgia" />
        <meta property="og:description" content="Alabama & Georgia's smarter way to insure. Bundle home + auto and save up to 25%. Free quotes on auto, home, renters, condo, life, and motorcycle insurance. Family-owned agency." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coffeyagencies.com/" />
        <meta property="og:site_name" content="Coffey Agencies" />
        <meta property="og:image" content="https://coffeyagencies.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Coffey Agencies Inc. | Insurance in Alabama & Georgia" />
        <meta name="twitter:description" content="Alabama & Georgia's smarter way to insure. Bundle home + auto and save up to 25%. Real people who answer the phone. Free quotes." />
        <meta name="twitter:image" content="https://coffeyagencies.com/og-image.jpg" />
        
        <link rel="preload" as="image" href={heroBackground} />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main id="main-content">
          <Hero />
          <TrustBar />
          <WhyChooseUs />
          <ServicesOverview />
          <HowItWorks />
          <Suspense fallback={null}>
            <Testimonials />
          </Suspense>
          <ServiceArea />
          <Suspense fallback={null}>
            <FAQ />
          </Suspense>
          <FinalCTA />
          <BottomCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
