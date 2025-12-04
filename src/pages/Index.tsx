import { Header } from "@/components/homepage/Header";
import { Hero } from "@/components/homepage/Hero";
import { TrustBar } from "@/components/homepage/TrustBar";
import { ServicesOverview } from "@/components/homepage/ServicesOverview";
import { WhyChooseUs } from "@/components/homepage/WhyChooseUs";
import { HowItWorks } from "@/components/homepage/HowItWorks";
import { Testimonials } from "@/components/homepage/Testimonials";
import { ServiceArea } from "@/components/homepage/ServiceArea";
import { FAQ } from "@/components/homepage/FAQ";
import { FinalCTA } from "@/components/homepage/FinalCTA";
import { BottomCTA } from "@/components/homepage/BottomCTA";
import { Footer } from "@/components/homepage/Footer";
import { Helmet } from "react-helmet-async";
import heroBackground from "@/assets/hero-background.jpg";
import { useScrollToQuoteForm } from "@/hooks/useScrollToQuoteForm";

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
        "award": [
          {
            "@type": "Award",
            "name": "A+ BBB Rating",
            "awardedBy": {
              "@type": "Organization",
              "name": "Better Business Bureau"
            }
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://coffeyagencies.com/#organization",
        "name": "Coffey Agencies",
        "url": "https://coffeyagencies.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://coffeyagencies.com/coffey-logo.png",
          "width": 250,
          "height": 60
        },
        "founder": {
          "@type": "Person",
          "name": "Cody Coffey",
          "jobTitle": "CEO & Founder"
        },
        "foundingDate": "2009",
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "minValue": 6,
          "maxValue": 10
        },
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
        "sameAs": [
          "https://www.facebook.com/codycoffeyagency",
          "https://www.google.com/maps/place/?cid=ChIJJ80TpQ5hiogRn3tzQbqNLMA",
          "https://www.google.com/maps/place/?cid=ChIJZQwKAM-kiogR_bIpdOhQm7o"
        ]
      },
      {
        "@type": "InsuranceAgency",
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
        "@type": "InsuranceAgency",
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
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Insurance Agency in Centre, AL & Rome, GA | Coffey Agencies</title>
        <meta name="description" content="Alabama & Georgia's trusted insurance partner. Get free quotes on auto, home, renters, condo, life, and motorcycle insurance. Family-owned with offices in Centre, AL and Rome, GA." />
        <link rel="canonical" href="https://coffeyagencies.com/" />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="Coffey Agencies Inc. | Insurance in Alabama & Georgia" />
        <meta property="og:description" content="Alabama & Georgia's trusted insurance partner. Get free quotes on auto, home, renters, condo, life, and motorcycle insurance. Family-owned with offices in Centre, AL and Rome, GA." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coffeyagencies.com/" />
        <meta property="og:site_name" content="Coffey Agencies" />
        <meta property="og:image" content="https://coffeyagencies.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Coffey Agencies Inc. | Insurance in Alabama & Georgia" />
        <meta name="twitter:description" content="Alabama & Georgia's trusted insurance partner. Get free quotes on auto, home, renters, condo, life, and motorcycle insurance." />
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
          <Testimonials />
          <ServiceArea />
          <FAQ />
          <FinalCTA />
          <BottomCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
