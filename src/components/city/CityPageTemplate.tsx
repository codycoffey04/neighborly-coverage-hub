import { useEffect } from "react";
import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Car, Home as HomeIcon, Key, Building2, Heart, Bike,
  Zap, MapPin, Star, Phone, Shield, Users, Clock,
  CheckCircle, Building, Quote, ArrowRight
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";
import { CityData, cityData } from "@/data/cityData";

// Extend Window interface for Tidio page context
declare global {
  interface Window {
    coffeyPageContext?: {
      pageType: string;
      city: string | null;
      state: string | null;
      stateAbbr: string | null;
      nearestOffice: string | null;
    };
  }
}

interface CityPageTemplateProps {
  city: CityData;
}

const services = [
  {
    icon: Car,
    title: "Auto Insurance",
    description: "Comprehensive auto coverage with competitive rates and multi-policy discounts.",
    link: "/services/auto-insurance"
  },
  {
    icon: HomeIcon,
    title: "Home Insurance",
    description: "Protect your home with coverage tailored to local weather risks and property needs.",
    link: "/services/home-insurance"
  },
  {
    icon: Key,
    title: "Renters Insurance",
    description: "Affordable renters coverage from $8/month when bundled with auto insurance.",
    link: "/services/renters-insurance"
  },
  {
    icon: Building2,
    title: "Condo Insurance",
    description: "HO-6 coverage protecting your unit, belongings, and liability with master policy coordination.",
    link: "/services/condo-insurance"
  },
  {
    icon: Heart,
    title: "Life Insurance",
    description: "Term and whole life coverage from $25/month protecting your family's financial future.",
    link: "/services/life-insurance"
  },
  {
    icon: Bike,
    title: "Motorcycle Insurance",
    description: "Rider-specific coverage for motorcycles, custom parts, and accessories with competitive rates.",
    link: "/services/motorcycle-insurance"
  }
];

const whyChoosePillars = [
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "understanding unique insurance needs and weather risks."
  },
  {
    icon: Users,
    title: "Real People",
    description: "When you call, a real person answers—no automated mazes or offshore call centers."
  },
  {
    icon: Clock,
    title: "Simple Process",
    description: "Get quotes in minutes, not days. We make insurance straightforward and stress-free."
  }
];

const defaultTestimonials = [
  {
    name: "Teresa Gardiner",
    text: "Lexi was very patient and helpful when I stopped by yesterday to ask multiple questions. She is truly an asset to your office!"
  },
  {
    name: "Steve Smith",
    text: "Customer service at Cody Coffey's Centre office is amazing, a lost art, a total delight. Give them 1000 out of 100 :). Friendly, knowledgeable. So grateful to have found them when moving to a new town."
  },
  {
    name: "Ricky Salas",
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
    team: ["Kimberly Fletcher", "Crystal Brozio", "Maria Rocha-Guzman"]
  },
  rome: {
    dba: "Millican & Coffey Agency",
    address: "1703 Turner McCall Blvd SE, Rome, GA 30161",
    phone: "(706) 784-6511",
    hours: "Monday–Friday 8:30 AM – 4:30 PM",
    rating: "4.6",
    reviews: "90",
    team: ["Kathy Sewell", "Brandy Wilkins"]
  }
};

export const CityPageTemplate = ({ city }: CityPageTemplateProps) => {
  const office = city.isOfficeCity ? officeDetails[city.nearestOffice] : null;
  const nearestOfficeInfo = officeDetails[city.nearestOffice];
  const testimonials = city.testimonials || defaultTestimonials;

  // Set page context for Tidio chatbot
  useEffect(() => {
    window.coffeyPageContext = {
      pageType: 'city',
      city: city.city,
      state: city.state,
      stateAbbr: city.stateAbbr,
      nearestOffice: city.nearestOffice
    };
    
    // Cleanup: reset to default when leaving city page
    return () => {
      window.coffeyPageContext = {
        pageType: 'general',
        city: null,
        state: null,
        stateAbbr: null,
        nearestOffice: null
      };
    };
  }, [city]);

  // JSON-LD Schema for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": `Coffey Agencies - ${office.dba}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": office.address.split(",")[0],
      "addressLocality": city.city,
      "addressRegion": city.stateAbbr,
      "postalCode": city.zipCodes[0],
      "addressCountry": "US"
    },
    "telephone": office.phone,
    "openingHours": "Mo-Fr 08:00-17:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": office.rating,
      "reviewCount": office.reviews
    }
  } : null;

  // JSON-LD Schema for Place (all cities)
  const placeSchema = {
    "@context": "https://schema.org",
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
    "containsPlace": city.neighborhoods.map(n => ({ "@type": "Place", "name": n }))
  };

  return (
    <>
      <Helmet>
        <title>{city.customHeroTitle || `Insurance Agency in ${city.city}, ${city.state} | Coffey Agencies`}</title>
        <meta 
          name="description" 
          content={city.customHeroSubhead || `Local insurance agency serving ${city.city}, ${city.state}. Auto, home, renters, condo, and life insurance with personalized service. Serving ${city.zipCodes.length > 1 ? 'ZIP codes' : 'ZIP code'} ${city.zipCodes.join(', ')}.`}
        />
        <link rel="canonical" href={`https://coffeyagencies.com/${city.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        {localBusinessSchema && (
          <script type="application/ld+json">
            {JSON.stringify(localBusinessSchema)}
          </script>
        )}
        <script type="application/ld+json">
          {JSON.stringify(placeSchema)}
        </script>
      </Helmet>

      <Header />

      {/* Custom Hero with Background Image */}
      <section 
        className="relative min-h-[400px] flex items-end pb-16 pt-32"
        role="banner"
        aria-label={`Insurance services for ${city.city}, ${city.state}`}
      >
        {/* Background Image */}
        {city.heroImage && (
          <img
            src={new URL(`../../assets/${city.heroImage}`, import.meta.url).href}
            alt={city.state === "Alabama" ? "Rolling hills and pine forests of rural Alabama countryside" : "Georgia Appalachian foothills with mountain landscapes"}
            className="absolute inset-0 w-full h-full object-cover"
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
              4.7★ rated service
            </span>
          </div>
          
          {/* ZIP Codes */}
          <p className="text-sm text-white/80 mb-6">
            Serving ZIP {city.zipCodes.length > 1 ? 'codes' : 'code'}: <span className="font-semibold text-white">{city.zipCodes.join(', ')}</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-md hover:shadow-lg" asChild>
              <Link to="/contact">
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <a 
              href="tel:+12569276287" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-white/95 text-primary font-medium rounded-md shadow-sm hover:shadow-md transition-all"
              aria-label="Call Centre, Alabama office at (256) 927-6287"
            >
              <Phone className="w-4 h-4" />
              (256) 927-6287
            </a>
            <a 
              href="tel:+17067846511" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-white/95 text-primary font-medium rounded-md shadow-sm hover:shadow-md transition-all"
              aria-label="Call Rome, Georgia office at (706) 784-6511"
            >
              <Phone className="w-4 h-4" />
              (706) 784-6511
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: City Introduction with Services - WHITE */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Insurance Services in {city.city}
            </h2>
            <p className="text-lg text-muted-foreground">
              Complete protection for {city.city} families and businesses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="card-hover border-2">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={service.link}>Learn More →</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Coffey Agencies - GRAY */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Coffey Agencies in {city.city}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChoosePillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{pillar.title}</h3>
                  <p className="text-muted-foreground">
                    We understand {city.city}'s {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Local Considerations - WHITE */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Shield className="h-7 w-7 text-primary" />
                <CardTitle className="text-2xl">{city.city} Insurance Considerations</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {city.localConsiderations}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 5: Neighborhoods We Serve - GRAY */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Neighborhoods We Serve in {city.city}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {city.neighborhoods.map((neighborhood, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-card border rounded-lg text-sm font-medium hover:border-primary hover:text-primary transition-colors"
              >
                {neighborhood}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: FAQ - WHITE */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {city.city} Insurance Questions Answered
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {city.faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-background border-2 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow">
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Section 7: Nearby Cities - GRAY */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nearby Cities We Serve
            </h2>
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

      {/* Section 8: Testimonials - WHITE */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What {city.city} Customers Say
            </h2>
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
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/reviews">Read All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 9: Final CTA - NAVY */}
      <section className="py-16 px-4 bg-[#1e3a5f]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to protect what matters in {city.city}?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Get a quote that fits your {city.city} family's needs and budget
          </p>
          
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white min-w-[200px] shadow-md hover:shadow-lg" asChild>
            <Link to="/contact">
              Get Your Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          
          {/* Phone Numbers */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-white/90">
            <span>Or call us:</span>
            <a href="tel:+12569276287" className="text-white hover:text-accent transition-colors" aria-label="Call Centre, Alabama office">(256) 927-6287</a>
            <span className="hidden sm:inline">|</span>
            <a href="tel:+17067846511" className="text-white hover:text-accent transition-colors" aria-label="Call Rome, Georgia office">(706) 784-6511</a>
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
