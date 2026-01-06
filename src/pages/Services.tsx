import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Car, Home, Key, Building2, Heart, Bike, Sailboat, Truck } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import heroImage from "@/assets/alabama-hero.jpg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const services = [
  {
    icon: Car,
    title: "Auto Insurance",
    description: "Protection that travels with you. Liability, collision, comprehensive, and uninsured motorist coverage with rates that reward good drivers.",
    link: "/services/auto-insurance"
  },
  {
    icon: Home,
    title: "Home Insurance",
    description: "Your home faces Alabama storms and Georgia heat. We build policies around regional risks — wind, hail, water damage — so nothing catches you off guard.",
    link: "/services/home-insurance"
  },
  {
    icon: Key,
    title: "Renters Insurance",
    description: "Your landlord's insurance covers the building, not your stuff. Protect your belongings and add liability coverage starting under $20/month.",
    link: "/services/renters-insurance"
  },
  {
    icon: Building2,
    title: "Condo Insurance",
    description: "Your HOA policy has gaps. We fill them — covering your unit's interior, your belongings, and liability that master policies ignore.",
    link: "/services/condo-insurance"
  },
  {
    icon: Heart,
    title: "Life Insurance",
    description: "The conversation nobody wants to have, but everyone needs. Term and permanent options that protect your family's future without wrecking today's budget.",
    link: "/services/life-insurance"
  },
  {
    icon: Bike,
    title: "Motorcycle Insurance",
    description: "Coverage built for riders—cruisers, sport bikes, and touring machines. Custom parts coverage and honest advice on limits.",
    link: "/services/motorcycle-insurance"
  },
  {
    icon: Sailboat,
    title: "Boat Insurance",
    description: "Coverage for pontoons, bass boats, jet skis, and sailboats on Weiss Lake, Allatoona, and waterways across Alabama and Georgia.",
    link: "/services/boat-insurance"
  },
  {
    icon: Truck,
    title: "ATV/UTV Insurance",
    description: "Coverage for four-wheelers, side-by-sides, and dirt bikes on trails at Indian Mountain, Highland Park, and riding areas across Alabama and Georgia.",
    link: "/services/atv-utv-insurance"
  },
  {
    icon: Home,
    title: "Mobile Home Insurance",
    description: "Coverage for manufactured homes that other agencies won't insure. We work with specialty carriers for older mobile homes too.",
    link: "/services/mobile-home-insurance"
  }
];

const Services = () => {
  // CollectionPage schema
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Insurance Services",
    "description": "Insurance services in Alabama & Georgia. Auto, home, renters, condo, life, motorcycle, boat, ATV coverage. Compare quotes from 25+ carriers.",
    "url": "https://coffeyagencies.com/services",
    "hasPart": services.map(service => ({
      "@type": "Service",
      "url": `https://coffeyagencies.com${service.link}`,
      "name": service.title
    }))
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        "name": "Services",
        "item": "https://coffeyagencies.com/services"
      }
    ]
  };

  // Combine all schemas into a single @graph structure
  const allSchemas = {
    "@context": "https://schema.org",
    "@graph": [
      collectionSchema,
      breadcrumbSchema
    ]
  };

  return (
    <>
      <Helmet>
        <title>Insurance Services | Auto, Home, Life & More | Coffey Agencies</title>
        <meta name="description" content="Explore our full range of insurance services: auto, home, life, renters, boat, motorcycle, ATV/UTV, condo, and mobile home coverage across Alabama & Georgia." />
        <link rel="canonical" href="https://coffeyagencies.com/services" />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="Insurance Services | Auto, Home, Life & More | Coffey Agencies" />
        <meta property="og:description" content="Explore our full range of insurance services: auto, home, life, renters, boat, motorcycle, ATV/UTV, condo, and mobile home coverage across Alabama & Georgia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coffeyagencies.com/services" />
        <meta property="og:site_name" content="Coffey Agencies" />
        <meta property="og:image" content="https://coffeyagencies.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Insurance Services | Auto, Home, Life & More | Coffey Agencies" />
        <meta name="twitter:description" content="Insurance services in Alabama & Georgia. Auto, home, renters, condo, life, motorcycle, boat, ATV coverage." />
        <meta name="twitter:image" content="https://coffeyagencies.com/og-image.jpg" />
        
        {/* Combined Schema Graph */}
        <script type="application/ld+json">
          {JSON.stringify(allSchemas)}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section with Background Image */}
      <section 
        className="relative min-h-[400px] flex items-end pt-32 pb-16 px-4"
        style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        aria-label="Insurance Services hero section"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/60" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">Services</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Our Insurance Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
            Coverage that fits your life — not the other way around. We represent 25+ top-rated carriers to find you the right protection at the right price.
          </p>
        </div>
      </section>

      <main>
        {/* Intro Section */}
        <section className="py-12 px-4 bg-background">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-lg text-muted-foreground">
              Whether you need auto, home, life, or specialty coverage, we'll shop multiple carriers to find your best options. Get a personalized quote in minutes.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <SectionHeading className="mb-8">Our Insurance Products</SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.title} className="border-border hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:border-[#22c55e] hover:scale-105 transition-all duration-300 ease-in-out group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h2>
                      
                      <p className="text-sm text-muted-foreground mb-4">
                        {service.description}
                      </p>

                      <Link to={service.link}>
                        <Button variant="link" className="p-0 h-auto text-accent hover:text-accent/80" aria-label={`Learn more about ${service.title}`}>
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-4 bg-primary text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <SectionHeading variant="white" className="mb-4">Not Sure Where to Start?</SectionHeading>
            <p className="text-lg text-white/90 mb-8">
              Tell us what you need to protect and we'll walk you through your options. No pressure, no obligations — just honest advice.
            </p>
            <Link to="/#quote-form">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent-light" aria-label="Get your free insurance quote">
                Get Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Services;
