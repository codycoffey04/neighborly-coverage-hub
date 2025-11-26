import { PageLayout } from "@/components/shared/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Car, Home as HomeIcon, Key, Building2, Heart, 
  Zap, MapPin, Star, Phone, Shield, Users, Clock,
  CheckCircle, Building, Quote
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet";
import { CityData } from "@/data/cityData";

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

const testimonials = [
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

  return (
    <>
      <Helmet>
        <title>Insurance Agency in {city.city}, {city.state} | Coffey Agencies</title>
        <meta 
          name="description" 
          content={`Local insurance agency serving ${city.city}, ${city.state}. Auto, home, renters, condo, and life insurance with personalized service. Serving ${city.zipCodes.length > 1 ? 'ZIP codes' : 'ZIP code'} ${city.zipCodes.join(', ')}.`}
        />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        {localBusinessSchema && (
          <script type="application/ld+json">
            {JSON.stringify(localBusinessSchema)}
          </script>
        )}
      </Helmet>

      <PageLayout
        title={`Insurance Agency in ${city.city}, ${city.state}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/service-areas" },
          { label: `${city.city}, ${city.stateAbbr}`, href: "" }
        ]}
      >
        {/* Section 1: Hero */}
        <section className="py-12 px-4 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center space-y-6">
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Local expertise for {city.city} families — auto, home, renters, condo, and life insurance
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Quotes in minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Serving {city.city}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-accent fill-accent" />
                  <span className="text-sm font-medium">4.7★ rated service</span>
                </div>
              </div>

              {/* ZIP Codes */}
              {city.zipCodes.length > 0 && (
                <p className="text-sm text-muted-foreground">
                  Serving ZIP {city.zipCodes.length > 1 ? 'codes' : 'code'}: <span className="font-semibold text-foreground">{city.zipCodes.join(', ')}</span>
                </p>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild>
                  <Link to="/contact">Get Your Free Quote</Link>
                </Button>
                <div className="flex flex-col sm:flex-row gap-2 items-center">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Alabama:</span>
                    <a href="tel:256-927-6287" className="text-primary hover:underline">(256) 927-6287</a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Georgia:</span>
                    <a href="tel:706-784-6511" className="text-primary hover:underline">(706) 784-6511</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: City Introduction */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-6">
              {city.introduction.map((paragraph, index) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Office Details (if this is an office city) */}
            {city.isOfficeCity && office && (
              <Card className="mt-12 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Building className="h-7 w-7 text-primary" />
                    <CardTitle className="text-2xl">Visit Our {city.city} Office</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">DBA: {office.dba}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-primary shrink-0" />
                        <a href={`tel:${office.phone.replace(/[^0-9]/g, '')}`} className="text-primary font-semibold hover:underline">
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-muted-foreground">{office.hours}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-accent fill-accent shrink-0" />
                        <span className="font-semibold">{office.rating}★</span>
                        <span className="text-muted-foreground">({office.reviews} reviews)</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Our {city.city} Team:</h4>
                      <ul className="space-y-1">
                        {office.team.map((member, index) => (
                          <li key={index} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                            {member}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Button className="w-full mt-4" asChild>
                    <Link to="/contact">Visit Our {city.city} Office</Link>
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Nearest Office Reference (non-office cities) */}
            {!city.isOfficeCity && (
              <Card className="mt-8 bg-muted/30">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    <strong>Nearest Office:</strong> Our {nearestOfficeInfo.dba === "Cody Coffey Agency" ? "Centre, AL" : "Rome, GA"} office serves {city.city} residents. 
                    Call <a href={`tel:${nearestOfficeInfo.phone.replace(/[^0-9]/g, '')}`} className="text-primary font-semibold hover:underline">{nearestOfficeInfo.phone}</a> or <Link to="/contact" className="text-primary font-semibold hover:underline">request a quote online</Link>.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Section 3: Services We Offer */}
        <section className="py-16 px-4 bg-muted/30">
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
                      <div className="p-3 rounded-lg bg-accent/10 w-fit mb-3">
                        <Icon className="h-6 w-6 text-accent" />
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

        {/* Section 4: Why Choose Coffey Agencies */}
        <section className="py-16 px-4">
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

        {/* Section 5: Local Considerations */}
        <section className="py-16 px-4 bg-muted/30">
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

        {/* Section 6: Neighborhoods We Serve */}
        <section className="py-16 px-4">
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

        {/* Section 7: FAQ */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {city.city} Insurance Questions Answered
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {city.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Section 8: Nearby Cities */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nearby Cities We Serve
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {city.nearbyCities.map((citySlug, index) => (
                <Link key={index} to={`/${citySlug}`}>
                  <Card className="card-hover border-2 h-full">
                    <CardContent className="pt-6 text-center">
                      <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold text-lg mb-2">
                        {citySlug.split('-')[0].charAt(0).toUpperCase() + citySlug.split('-')[0].slice(1).replace('-', ' ')}, {citySlug.split('-')[1].toUpperCase()}
                      </h3>
                      <p className="text-sm text-primary hover:underline">
                        View Insurance Options →
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8">
              Don't see your city? <Link to="/service-areas" className="text-primary font-semibold hover:underline">View all service areas</Link> or <Link to="/contact" className="text-primary font-semibold hover:underline">contact us</Link> — we serve all of {city.state}.
            </p>
          </div>
        </section>

        {/* Section 9: Testimonials */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <p className="font-semibold text-foreground">— {testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">(Google Review)</p>
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

        {/* Section 10: Final CTA */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to protect what matters in {city.city}?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a quote that fits your {city.city} family's needs and budget
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Alabama Office</h3>
                  <a href="tel:256-927-6287" className="text-2xl font-bold text-primary hover:underline">
                    (256) 927-6287
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">Centre, AL</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Georgia Office</h3>
                  <a href="tel:706-784-6511" className="text-2xl font-bold text-primary hover:underline">
                    (706) 784-6511
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">Rome, GA</p>
                </CardContent>
              </Card>
            </div>

            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/contact">Get Your Free Quote</Link>
            </Button>
          </div>
        </section>
      </PageLayout>
    </>
  );
};
