import { PageLayout } from "@/components/shared/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Building2, Phone } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Link, useLocation } from "react-router-dom";
import { TrackedPhone } from "@/components/shared/TrackedPhone";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const offices = [
  {
    city: "Centre",
    state: "Alabama",
    address: "1913 W Main Street, Centre, AL 35960",
    phone: "(256) 927-6287",
    hours: "Monday–Friday, 8:00 AM – 5:00 PM",
    type: "Headquarters"
  },
  {
    city: "Rome",
    state: "Georgia",
    address: "1703 Turner McCall Blvd SE, Rome, GA 30161",
    phone: "(706) 784-6511",
    hours: "Monday–Friday, 8:30 AM – 4:30 PM",
    type: "Branch Office"
  }
];

const alabamaCities = [
  { name: "Centre", slug: "centre-al" },
  { name: "Birmingham", slug: "birmingham-al" },
  { name: "Montgomery", slug: "montgomery-al" },
  { name: "Mobile", slug: "mobile-al" },
  { name: "Dothan", slug: "dothan-al" },
  { name: "Auburn", slug: "auburn-al" },
  { name: "Phenix City", slug: "phenix-city-al" },
  { name: "Foley", slug: "foley-al" },
  { name: "Troy", slug: "troy-al" },
  { name: "Enterprise", slug: "enterprise-al" },
  { name: "Trussville", slug: "trussville-al" }
];

const georgiaCities = [
  { name: "Rome", slug: "rome-ga" },
  { name: "Atlanta", slug: "atlanta-ga" },
  { name: "Lawrenceville", slug: "lawrenceville-ga" },
  { name: "Duluth", slug: "duluth-ga" },
  { name: "Cartersville", slug: "cartersville-ga" },
  { name: "Calhoun", slug: "calhoun-ga" },
  { name: "Cedartown", slug: "cedartown-ga" },
  { name: "Summerville", slug: "summerville-ga" },
  { name: "Suwanee", slug: "suwanee-ga" },
  { name: "Alpharetta", slug: "alpharetta-ga" },
  { name: "Powder Springs", slug: "powder-springs-ga" },
  { name: "Rockmart", slug: "rockmart-ga" },
  { name: "Forsyth", slug: "forsyth-ga" }
];

const ServiceAreas = () => {
  const location = useLocation();
  const serviceAreasSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Service Areas - Coffey Agencies",
    "description": "Insurance services across Alabama and Georgia with offices in Centre, AL and Rome, GA",
    "url": "https://coffeyagencies.com/service-areas",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": 24,
      "itemListElement": [
        ...alabamaCities.map((city, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Place",
            "@id": `https://coffeyagencies.com/${city.slug}#place`,
            "name": `${city.name}, Alabama`,
            "url": `https://coffeyagencies.com/${city.slug}`
          }
        })),
        ...georgiaCities.map((city, index) => ({
          "@type": "ListItem",
          "position": alabamaCities.length + index + 1,
          "item": {
            "@type": "Place",
            "@id": `https://coffeyagencies.com/${city.slug}#place`,
            "name": `${city.name}, Georgia`,
            "url": `https://coffeyagencies.com/${city.slug}`
          }
        }))
      ]
    }
  };

  return (
    <PageLayout
      title="Service Areas"
      description="Proudly serving Alabama and Georgia with two convenient office locations and comprehensive statewide coverage."
      breadcrumbs={[{ label: "Service Areas", href: "/service-areas" }]}
    >
      <Helmet>
        <title>Service Areas | Alabama & Georgia Insurance | Coffey Agencies</title>
        <meta name="description" content="Coffey Agencies serves 24 cities across Alabama and Georgia with offices in Centre, AL and Rome, GA. Find local insurance coverage near you." />
        <link rel="canonical" href="https://coffeyagencies.com/service-areas" />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="Service Areas | Alabama & Georgia Insurance | Coffey Agencies" />
        <meta property="og:description" content="Coffey Agencies serves 24 cities across Alabama and Georgia with offices in Centre, AL and Rome, GA. Find local insurance coverage near you." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coffeyagencies.com/service-areas" />
        <meta property="og:site_name" content="Coffey Agencies" />
        <meta property="og:image" content="https://coffeyagencies.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Service Areas | Alabama & Georgia Insurance" />
        <meta name="twitter:description" content="Coffey Agencies serves 24 cities across Alabama and Georgia. Find local insurance coverage near you." />
        <meta name="twitter:image" content="https://coffeyagencies.com/og-image.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify(serviceAreasSchema)}
        </script>
      </Helmet>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Service Areas</h2>
            <p className="text-lg text-muted-foreground">
              Two convenient office locations and comprehensive coverage across Alabama and Georgia. 
              Wherever you are, we're here to help.
            </p>
          </div>

          {/* Office Locations */}
          <div className="mb-16">
            <SectionHeading centered className="mb-8">Our Office Locations</SectionHeading>
            <div className="grid md:grid-cols-2 gap-8">
              {offices.map((office, index) => (
                <Card key={index} className="border-2 overflow-hidden">
                  <div className="bg-gradient-primary h-2"></div>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-2xl font-bold">{office.city}, {office.state}</h3>
                          <span className="text-xs px-2 py-1 rounded-full bg-secondary/20 text-secondary font-semibold">
                            {office.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 text-muted-foreground">
                      <p className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{office.address}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-primary shrink-0" />
                        <TrackedPhone
                          phone={office.phone}
                          phoneRaw={office.phone.replace(/[^0-9]/g, '')}
                          location={`${office.city}, ${office.state}`}
                          office={office.city === "Centre" ? "centre" : "rome"}
                          pageType="service-areas"
                          pageUrl={location.pathname}
                          className="font-semibold text-foreground text-lg hover:text-primary transition-colors"
                          ariaLabel={`Call ${office.city}, ${office.state} office at ${office.phone}`}
                        >
                          {office.phone}
                        </TrackedPhone>
                      </p>
                      <p className="text-sm">
                        {office.hours}
                      </p>
                    </div>

                    <Link to="/contact">
                      <Button className="mt-6 w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                        Get Directions
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Cities We Serve */}
          <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
            <SectionHeading centered className="mb-8">Cities We Serve</SectionHeading>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Alabama */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Alabama
                </h3>
                <div className="flex flex-wrap gap-2">
                  {alabamaCities.map((city) => (
                    <Link
                      key={city.slug}
                      to={`/${city.slug}`}
                      className="px-3 py-1.5 bg-background rounded-lg text-sm border hover:border-primary hover:text-primary transition-colors"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Georgia */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-secondary flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Georgia
                </h3>
                <div className="flex flex-wrap gap-2">
                  {georgiaCities.map((city) => (
                    <Link
                      key={city.slug}
                      to={`/${city.slug}`}
                      className="px-3 py-1.5 bg-background rounded-lg text-sm border hover:border-secondary hover:text-secondary transition-colors"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-center text-muted-foreground mt-8">
              Don't see your city? <Link to="/contact" className="text-primary font-semibold hover:underline">Contact us</Link> to see if we can help.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <SectionHeading centered className="mb-4">Ready to Get Started?</SectionHeading>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              No matter where you are in Alabama or Georgia, we're here to help protect what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#quote-form">
                <Button size="lg" className="min-w-[200px]">
                  Get Quote
                </Button>
              </Link>
              <TrackedPhone
                phone="(256) 927-6287"
                phoneRaw="2569276287"
                location="Centre, AL"
                office="centre"
                pageType="service-areas-cta"
                pageUrl={location.pathname}
                ariaLabel="Call Centre, Alabama office at (256) 927-6287"
              >
                <Button variant="outline" size="lg" className="min-w-[200px]">
                  Call Us Today
                </Button>
              </TrackedPhone>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServiceAreas;
