
import { useLocation } from "react-router-dom";
import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import { TrackedPhone } from "@/components/shared/TrackedPhone";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Zap, MapPin, Star, Phone,
  CheckCircle, Quote, ArrowRight
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { CityData, cityData } from "@/data/cityData";


interface CityPageTemplateProps {
  city: CityData;
}

const defaultTestimonials: Array<{ name: string; text: string; location?: string }> = [
  {
    name: "Teresa Gardiner",
    location: "Centre, AL",
    text: "Lexi was very patient and helpful when I stopped by yesterday to ask multiple questions. She is truly an asset to your office!"
  },
  {
    name: "Steve Smith",
    location: "Centre, AL",
    text: "Customer service at Cody Coffey's Centre office is amazing, a lost art, a total delight. Give them 1000 out of 100 :). Friendly, knowledgeable. So grateful to have found them when moving to a new town."
  },
  {
    name: "Ricky Salas",
    location: "Rome, GA",
    text: "I was with this agency for several years and had nothing but positive experiences with Cody and the other agents. When I had to move out of state, Kathy made it incredibly easy to end my Georgia policy and settle things up. I can't recommend them enough."
  }
];

// Office data for Centre and Rome
const officeDetails = {
  centre: {
    dba: "Cody Coffey Agency",
    address: "1913 W Main Street, Centre, AL 35960",
    phone: "(256) 927-6287",
    hours: "Monday–Friday 8:00 AM – 5:00 PM",
    rating: "4.7",
    reviews: "116",
    team: ["Kimberly Fletcher", "Crystal Brozio", "Maria Rocha-Guzman"],
    geo: {
      latitude: "34.1520",
      longitude: "-85.6789"
    },
    city: "Centre"
  },
  rome: {
    dba: "Millican & Coffey Agency",
    address: "1703 Turner McCall Blvd SE, Rome, GA 30161",
    phone: "(706) 784-6511",
    hours: "Monday–Friday 8:30 AM – 4:30 PM",
    rating: "4.6",
    reviews: "90",
    team: ["Kathy Sewell", "Brandy Wilkins"],
    geo: {
      latitude: "34.2570",
      longitude: "-85.1647"
    },
    city: "Rome"
  }
};

// City coordinates mapping for Place schema geo coordinates
const cityCoordinates: Record<string, { latitude: string; longitude: string }> = {
  // Alabama cities
  "auburn-al": { latitude: "32.6099", longitude: "-85.4808" },
  "birmingham-al": { latitude: "33.5207", longitude: "-86.8025" },
  "centre-al": { latitude: "34.1520", longitude: "-85.6789" },
  "dothan-al": { latitude: "31.2234", longitude: "-85.3908" },
  "enterprise-al": { latitude: "31.3152", longitude: "-85.8552" },
  "foley-al": { latitude: "30.4066", longitude: "-87.6836" },
  "mobile-al": { latitude: "30.6954", longitude: "-88.0399" },
  "montgomery-al": { latitude: "32.3668", longitude: "-86.3000" },
  "phenix-city-al": { latitude: "32.4710", longitude: "-85.0008" },
  "troy-al": { latitude: "31.8088", longitude: "-85.9700" },
  "trussville-al": { latitude: "33.6198", longitude: "-86.6089" },
  // Georgia cities
  "alpharetta-ga": { latitude: "34.0754", longitude: "-84.2941" },
  "atlanta-ga": { latitude: "33.7489", longitude: "-84.3900" },
  "calhoun-ga": { latitude: "34.5026", longitude: "-84.9511" },
  "canton-ga": { latitude: "34.2368", longitude: "-84.4908" },
  "cartersville-ga": { latitude: "34.1651", longitude: "-84.7999" },
  "cedartown-ga": { latitude: "34.0153", longitude: "-85.2539" },
  "dallas-ga": { latitude: "33.9243", longitude: "-84.8407" },
  "duluth-ga": { latitude: "34.0029", longitude: "-84.1446" },
  "forsyth-ga": { latitude: "33.0350", longitude: "-83.9381" },
  "lawrenceville-ga": { latitude: "33.9562", longitude: "-83.9880" },
  "powder-springs-ga": { latitude: "33.8595", longitude: "-84.6838" },
  "rockmart-ga": { latitude: "34.0026", longitude: "-85.0416" },
  "rome-ga": { latitude: "34.2570", longitude: "-85.1647" },
  "summerville-ga": { latitude: "34.4797", longitude: "-85.3481" },
  "suwanee-ga": { latitude: "34.0515", longitude: "-84.0713" }
};

export const CityPageTemplate = ({ city }: CityPageTemplateProps) => {
  const location = useLocation();
  const office = city.isOfficeCity ? officeDetails[city.nearestOffice] : null;
  const nearestOfficeInfo = officeDetails[city.nearestOffice];
  const testimonials = city.testimonials || defaultTestimonials;
  
  // Get phone number for this city - use localPhone if available, otherwise use nearest office phone
  const displayPhone = city.localPhone || nearestOfficeInfo.phone;
  const phoneNumber = displayPhone.replace(/\D/g, ''); // Remove non-digits for tel: link
  
  // Determine office type for tracking
  const officeType = city.isOfficeCity 
    ? (city.nearestOffice === "centre" ? "centre" : "rome")
    : "city";

  // Get office city name for "Digital Excellence" section
  const officeCity = nearestOfficeInfo.city;

  // JSON-LD Schema for FAQ
  const faqSchema = {
    "@type": "FAQPage",
    "name": `Insurance FAQs for ${city.city}, ${city.state}`,
    "mainEntity": city.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // JSON-LD Schema for LocalBusiness (office cities only)
  const localBusinessSchema = city.isOfficeCity && office ? {
    "@type": "LocalBusiness",
    "@id": city.nearestOffice === "centre" 
      ? "https://coffeyagencies.com/#centre-office"
      : "https://coffeyagencies.com/#rome-office",
    "name": `Coffey Agencies - ${office.dba}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": office.address.split(",")[0],
      "addressLocality": city.city,
      "addressRegion": city.stateAbbr,
      "postalCode": city.zipCodes[0],
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": office.geo.latitude,
      "longitude": office.geo.longitude
    },
    "telephone": city.localPhone || office.phone,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": city.nearestOffice === "centre" ? "08:00" : "08:30",
        "closes": city.nearestOffice === "centre" ? "17:00" : "16:30"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": office.rating,
      "reviewCount": office.reviews,
      "bestRating": "5",
      "worstRating": "1"
    },
    "parentOrganization": {
      "@id": "https://coffeyagencies.com/#organization"
    },
    "priceRange": "$$",
    "image": "https://coffeyagencies.com/coffey-logo.png"
  } : null;

  // JSON-LD Schema for Place (all cities)
  const cityGeo = cityCoordinates[city.slug];
  const placeSchema = {
    "@type": "Place",
    "@id": `https://coffeyagencies.com/${city.slug}#place`,
    "name": `${city.city}, ${city.state}`,
    "description": `Insurance services for ${city.city}, ${city.state} residents. Serving ${city.zipCodes.length > 1 ? 'ZIP codes' : 'ZIP code'} ${city.zipCodes.join(', ')}.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.city,
      "addressRegion": city.stateAbbr,
      "postalCode": city.zipCodes.join(", "),
      "addressCountry": "US"
    },
    ...(cityGeo && {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": cityGeo.latitude,
        "longitude": cityGeo.longitude
      }
    }),
    "containsPlace": city.neighborhoods.map(n => ({ "@type": "Place", "name": n }))
  };

  // JSON-LD Schema for BreadcrumbList
  const breadcrumbSchema = {
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
        "name": `${city.city}, ${city.stateAbbr}`,
        "item": `https://coffeyagencies.com/${city.slug}`
      }
    ]
  };

  // Organization schema reference
  const organizationSchema = {
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
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "bestRating": "5",
      "ratingCount": "206"
    }
  };

  // Service Schema
  const serviceSchema = {
    "@type": "Service",
    "serviceType": "Insurance Services",
    "provider": {
      "@type": "InsuranceAgency",
      "name": "Coffey Agencies Inc.",
      "url": "https://coffeyagencies.com"
    },
    "areaServed": {
      "@type": "City",
      "name": city.city,
      "addressRegion": city.state
    }
  };

  // WebPage Schema
  const webpageSchema = {
    "@type": "WebPage",
    "url": `https://coffeyagencies.com/${city.slug}`,
    "name": `Insurance in ${city.city}, ${city.state} | Coffey Agencies`
  };

  // Review Schemas (3 reviews)
  const reviewSchemas = [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Teresa Gardiner" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Lexi was very patient and helpful when I stopped by yesterday to ask multiple questions. She is truly an asset to your office!",
      "itemReviewed": {
        "@type": "InsuranceAgency",
        "name": "Coffey Agencies Inc.",
        "address": { "@type": "PostalAddress", "addressLocality": "Centre", "addressRegion": "AL" }
      }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Steve Smith" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Customer service at Cody Coffey's Centre office is amazing, a lost art, a total delight. Give them 1000 out of 100 :). Friendly, knowledgeable. So grateful to have found them when moving to a new town.",
      "itemReviewed": {
        "@type": "InsuranceAgency",
        "name": "Coffey Agencies Inc.",
        "address": { "@type": "PostalAddress", "addressLocality": "Centre", "addressRegion": "AL" }
      }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Ricky Salas" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "I was with this agency for several years and had nothing but positive experiences with Cody and the other agents. When I had to move out of state, Kathy made it incredibly easy to end my Georgia policy and settle things up. I can't recommend them enough.",
      "itemReviewed": {
        "@type": "InsuranceAgency",
        "name": "Coffey Agencies Inc.",
        "address": { "@type": "PostalAddress", "addressLocality": "Rome", "addressRegion": "GA" }
      }
    }
  ];

  // Combine all schemas into a single @graph structure for reliable rendering
  const allSchemas = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      serviceSchema,
      webpageSchema,
      faqSchema,
      placeSchema,
      breadcrumbSchema,
      ...reviewSchemas,
      ...(localBusinessSchema ? [localBusinessSchema] : [])
    ]
  };

  // Helper function to render prose paragraphs from text with \n\n separators
  const renderProseParagraphs = (text: string | string[] | undefined) => {
    if (!text) return null;
    
    // Handle array of paragraphs (like introduction)
    if (Array.isArray(text)) {
      return text.map((paragraph, index) => (
        <p key={index} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
          {paragraph}
        </p>
      ));
    }
    
    // Handle string with \n\n separators
    const paragraphs = text.split('\n\n').filter(p => p.trim());
    return paragraphs.map((paragraph, index) => (
      <p key={index} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
        {paragraph}
      </p>
    ));
  };

  return (
    <>
      <Helmet>
        <title>{city.customMetaTitle || city.customHeroTitle || `Insurance Agency in ${city.city}, ${city.state} | Coffey Agencies`}</title>
        <meta 
          name="description" 
          content={city.customHeroSubhead || `Local insurance agency serving ${city.city}, ${city.state}. Auto, home, renters, condo, and life insurance with personalized service. Serving ${city.zipCodes.length > 1 ? 'ZIP codes' : 'ZIP code'} ${city.zipCodes.join(', ')}.`}
        />
        <link rel="canonical" href={`https://coffeyagencies.com${location.pathname}`} />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content={city.customMetaTitle || city.customHeroTitle || `Insurance Agency in ${city.city}, ${city.state} | Coffey Agencies`} />
        <meta property="og:description" content={city.customHeroSubhead || `Local insurance agency serving ${city.city}, ${city.state}. Auto, home, renters, condo, and life insurance with personalized service.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://coffeyagencies.com/${city.slug}`} />
        <meta property="og:site_name" content="Coffey Agencies" />
        <meta property="og:image" content="https://coffeyagencies.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Insurance in ${city.city}, ${city.stateAbbr} | Coffey Agencies`} />
        <meta name="twitter:description" content={`Local insurance agency serving ${city.city}, ${city.state}. Auto, home, renters, condo, and life insurance.`} />
        <meta name="twitter:image" content="https://coffeyagencies.com/og-image.jpg" />
        
        {/* Combined Schema Graph */}
        <script type="application/ld+json">
          {JSON.stringify(allSchemas)}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section 
        className="relative min-h-[400px] flex items-end pb-16 pt-32"
        role="banner"
        aria-label={`Insurance services for ${city.city}, ${city.state}`}
      >
        {/* Background Image */}
        {city.heroImage && (
          <img
            src={new URL(`../../assets/${city.heroImage}`, import.meta.url).href}
            alt={`${city.city}, ${city.state} neighborhood residential street`}
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
          />
        )}
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        
        {/* Hero Content */}
        <div className="container mx-auto max-w-5xl px-4 relative z-10">
          {/* Breadcrumbs */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-white/80">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li><Link to="/service-areas" className="hover:text-white">Service Areas</Link></li>
              <li>/</li>
              <li className="text-white font-medium">{city.city}, {city.stateAbbr}</li>
            </ol>
          </nav>
          
          {/* Title & Subhead */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            {city.customHeroTitle || `Insurance Agency in ${city.city}, ${city.state}`}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-6 drop-shadow">
            {city.customHeroSubhead || `Local expertise for ${city.city} families — auto, home, renters, condo, and life insurance`}
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="flex items-center gap-2 text-white/90 text-sm">
              <Zap className="h-4 w-4 text-accent" />
              Quotes in minutes
            </span>
            <span className="flex items-center gap-2 text-white/90 text-sm">
              <MapPin className="h-4 w-4 text-accent" />
              Serving {city.city}
            </span>
            <span className="flex items-center gap-2 text-white/90 text-sm">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              {city.state === "Georgia" && city.city === "Rome" ? "4.6" : "4.7"} rated service
            </span>
          </div>
          
          {/* ZIP Codes */}
          <p className="text-sm text-white/80 mb-6">
            Serving ZIP {city.zipCodes.length > 1 ? 'codes' : 'code'}: <span className="font-semibold text-white">{city.zipCodes.join(', ')}</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-md hover:shadow-lg" asChild>
              <Link to="/#quote-form">
                Get Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <TrackedPhone
              phone={displayPhone}
              phoneRaw={phoneNumber}
              location={`${city.city}, ${city.stateAbbr}`}
              office={officeType}
              pageType="city"
              pageUrl={location.pathname}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-white/95 text-primary font-medium rounded-md shadow-sm hover:shadow-md transition-all"
              ariaLabel={`Call ${city.city} office at ${displayPhone}`}
            >
              <Phone className="w-4 h-4" />
              {displayPhone}
            </TrackedPhone>
          </div>
        </div>
      </section>

      {/* Opening Paragraphs - WHITE */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <article className="prose prose-lg max-w-none">
            {renderProseParagraphs(city.introduction)}
          </article>
        </div>
      </section>

      {/* H2: Protecting Residents with Comprehensive Coverage - GRAY */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading className="mb-8">
            Protecting {city.city} Residents with Comprehensive Coverage
          </SectionHeading>
          <article className="prose prose-lg max-w-none">
            {renderProseParagraphs(city.localConsiderations)}
          </article>
        </div>
      </section>

      {/* H3: Weather Risks and Insurance Implications - WHITE */}
      {city.weatherRisks && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              Weather Risks and Insurance Implications
            </h3>
            <article className="prose prose-lg max-w-none">
              {renderProseParagraphs(city.weatherRisks)}
            </article>
          </div>
        </section>
      )}

      {/* H3: Neighborhood Coverage Solutions - GRAY */}
      {city.neighborhoodCoverage && (
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              Neighborhood Coverage Solutions
            </h3>
            <article className="prose prose-lg max-w-none">
              {renderProseParagraphs(city.neighborhoodCoverage)}
            </article>
          </div>
        </section>
      )}

      {/* H3: Supporting the Local Economy - WHITE */}
      {city.economyInfo && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              Supporting the Local Economy
            </h3>
            <article className="prose prose-lg max-w-none">
              {renderProseParagraphs(city.economyInfo)}
            </article>
            
            {/* ZIP Codes listing */}
            <p className="text-muted-foreground leading-relaxed mt-6">
              <strong>ZIP Codes:</strong> {city.zipCodes.join(', ')}
            </p>
          </div>
        </section>
      )}

      {/* H3: Digital Excellence from [Office City] - GRAY */}
      {city.localExcellence && (
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              Digital Excellence from {officeCity}
            </h3>
            <article className="prose prose-lg max-w-none">
              {renderProseParagraphs(city.localExcellence)}
            </article>
          </div>
        </section>
      )}

      {/* H3: Cheap Car Insurance - WHITE */}
      {city.cheapCarInsurance && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              Cheap Car Insurance in {city.city}
            </h3>
            <article className="prose prose-lg max-w-none">
              {renderProseParagraphs(city.cheapCarInsurance)}
            </article>
          </div>
        </section>
      )}

      {/* H3: Auto Insurance Companies - GRAY */}
      {city.autoInsuranceCompanies && (
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              {city.city} Auto Insurance Companies Near You
            </h3>
            <article className="prose prose-lg max-w-none">
              {renderProseParagraphs(city.autoInsuranceCompanies)}
            </article>
          </div>
        </section>
      )}

      {/* H3: Home Insurance - WHITE */}
      {city.homeInsurance && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              {city.city} Home Insurance
            </h3>
            <article className="prose prose-lg max-w-none">
              {renderProseParagraphs(city.homeInsurance)}
            </article>
          </div>
        </section>
      )}

      {/* H3: Renters Insurance - WHITE */}
      {city.rentersInsurance && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              {city.city} {city.stateAbbr} Renters Insurance
            </h3>
            <article className="prose prose-lg max-w-none">
              {renderProseParagraphs(city.rentersInsurance)}
            </article>
          </div>
        </section>
      )}

      {/* H3: County Insurance - GRAY */}
      {city.countyInsurance && (
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              {city.city === "Centre" ? "Cherokee County Insurance Services" : `${city.city} County Insurance Services`}
            </h3>
            <article className="prose prose-lg max-w-none">
              {renderProseParagraphs(city.countyInsurance)}
            </article>
          </div>
        </section>
      )}

      {/* FAQ Section - Simple Q&A Format - WHITE */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading className="mb-8">
            {city.city} Insurance Questions Answered
          </SectionHeading>
          <div className="space-y-8">
            {city.faqs.map((faq, index) => (
              <div key={index} className="border-b border-border pb-6 last:border-b-0">
                <p className="font-semibold text-lg text-foreground mb-2">
                  <strong>Q{index + 1}:</strong> {faq.question}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>A{index + 1}:</strong> {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - GRAY */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <SectionHeading centered className="mb-4">
              What {city.city} Customers Say
            </SectionHeading>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="font-semibold text-sm">
                    {testimonial.name}
                    {testimonial.location && (
                      <>
                        , {testimonial.location}
                        <span className="text-muted-foreground font-normal"> (Google Review)</span>
                      </>
                    )}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/reviews">Read All 200+ Google Reviews →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Nearby Cities - WHITE */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <SectionHeading centered className="mb-4">
              Nearby Cities We Serve
            </SectionHeading>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {city.nearbyCities.map((citySlug, index) => {
              const nearbyCity = cityData[citySlug];
              const displayName = nearbyCity 
                ? `${nearbyCity.city}, ${nearbyCity.stateAbbr}`
                : citySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
              
              return (
                <Link key={index} to={`/${citySlug}`}>
                  <Card className="card-hover border-2 h-full">
                    <CardContent className="pt-6 text-center">
                      <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold text-lg mb-2">
                        {displayName}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        View insurance services
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA - NAVY */}
      <section className="py-16 px-4 bg-[#1e3a5f]">
        <div className="container mx-auto max-w-4xl text-center">
          <SectionHeading variant="white" centered className="mb-4">
            Ready to protect what matters in {city.city}?
          </SectionHeading>
          <p className="text-lg text-white/90 mb-8">
            Get a quote that fits your {city.city} family's needs and budget
          </p>
          
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white min-w-[200px] shadow-md hover:shadow-lg" asChild>
            <Link to="/#quote-form">
              Get Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          
          {/* Phone Number */}
          <div className="mt-6 flex items-center justify-center gap-2 text-white/90">
            <span>Or call us:</span>
            <TrackedPhone
              phone={displayPhone}
              phoneRaw={phoneNumber}
              location={`${city.city}, ${city.stateAbbr}`}
              office={officeType}
              pageType="city-cta"
              pageUrl={location.pathname}
              className="text-white hover:text-accent transition-colors"
              ariaLabel={`Call ${city.city} office at ${displayPhone}`}
            >
              {displayPhone}
            </TrackedPhone>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" />Licensed in AL & GA</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" />Hablamos Español</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" />Family Owned</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
