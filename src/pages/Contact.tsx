import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/contact-hero.jpg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MapPin, Phone, Clock, Star, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TrackedPhone } from "@/components/shared/TrackedPhone";
import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";

// Extend Window interface for dataLayer
declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const offices = [
  {
    name: "Centre, Alabama",
    subtitle: "(Headquarters)",
    dba: "DBA: Cody Coffey Agency",
    address: "1913 W Main Street",
    cityStateZip: "Centre, AL 35960",
    phone: "(256) 927-6287",
    phoneRaw: "2569276287",
    hours: "Monday–Friday\n8:00 AM – 5:00 PM",
    rating: "4.7",
    reviews: "116",
    placeId: "ChIJJ80TpQ5hiogRn3tzQbqNLMA",
    mapEmbed: "https://maps.google.com/maps?q=1913+W+Main+Street,+Centre,+AL+35960&t=m&z=15&output=embed",
    mapAddress: "1913 W Main Street, Centre, AL 35960",
  },
  {
    name: "Rome, Georgia",
    subtitle: "",
    dba: "DBA: Millican & Coffey Agency",
    address: "1703 Turner McCall Blvd SE",
    cityStateZip: "Rome, GA 30161",
    phone: "(706) 784-6511",
    phoneRaw: "7067846511",
    hours: "Monday–Friday\n8:30 AM – 4:30 PM",
    rating: "4.6",
    reviews: "90",
    placeId: "ChIJZQwKAM-kiogR_bIpdOhQm7o",
    mapEmbed: "https://maps.google.com/maps?q=1703+Turner+McCall+Blvd+SE,+Rome,+GA+30161&t=m&z=15&output=embed",
    mapAddress: "1703 Turner McCall Blvd SE, Rome, GA 30161",
  },
];

const Contact = () => {
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactSchema = {
    "@type": "ContactPage",
    "@id": "https://coffeyagencies.com/contact",
    "name": "Contact Coffey Agencies",
    "description": "Get in touch with Coffey Agencies for insurance quotes and service",
    "url": "https://coffeyagencies.com/contact",
    "mainEntity": {
      "@id": "https://coffeyagencies.com/#organization"
    }
  };

  // BreadcrumbList Schema for SEO
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
        "name": "Contact",
        "item": "https://coffeyagencies.com/contact"
      }
    ]
  };

  // Organization schema
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
    }
  };

  // LocalBusiness schema for Centre office
  const centreOfficeSchema = {
    "@type": "LocalBusiness",
    "@id": "https://coffeyagencies.com/#centre-office",
    "name": "Coffey Agencies - Centre, AL",
    "telephone": "(256) 927-6287",
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
      "latitude": 34.1520,
      "longitude": -85.6789
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "parentOrganization": {
      "@id": "https://coffeyagencies.com/#organization"
    },
    "priceRange": "$$",
    "image": "https://coffeyagencies.com/coffey-logo.png"
  };

  // LocalBusiness schema for Rome office
  const romeOfficeSchema = {
    "@type": "LocalBusiness",
    "@id": "https://coffeyagencies.com/#rome-office",
    "name": "Coffey Agencies - Rome, GA",
    "telephone": "(706) 784-6511",
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
      "latitude": 34.2570,
      "longitude": -85.1647
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:30",
        "closes": "16:30"
      }
    ],
    "parentOrganization": {
      "@id": "https://coffeyagencies.com/#organization"
    },
    "priceRange": "$$",
    "image": "https://coffeyagencies.com/coffey-logo.png"
  };

  // Combine all schemas into a single @graph structure for reliable rendering
  const allSchemas = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      contactSchema,
      centreOfficeSchema,
      romeOfficeSchema,
      breadcrumbSchema
    ]
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      // Push form submit event to dataLayer for GTM
      if (window.dataLayer) {
        window.dataLayer.push({
          event: "netlify_form_submit",
          form_name: "contact-form",
          form_location: "contact_page",
          page_url: location.pathname,
          timestamp: new Date().toISOString(),
        });
      }

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within one business day.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Coffey Agencies | Alabama & Georgia Insurance</title>
        <meta name="description" content="Contact Coffey Agencies for insurance quotes. Offices in Centre, AL (256) 927-6287 and Rome, GA (706) 784-6511. Get a free quote today." />
        <link rel="canonical" href="https://coffeyagencies.com/contact" />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="Contact Us | Coffey Agencies | Alabama & Georgia Insurance" />
        <meta property="og:description" content="Contact Coffey Agencies for insurance quotes. Offices in Centre, AL (256) 927-6287 and Rome, GA (706) 784-6511. Get a free quote today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coffeyagencies.com/contact" />
        <meta property="og:site_name" content="Coffey Agencies" />
        <meta property="og:image" content="https://coffeyagencies.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Coffey Agencies" />
        <meta name="twitter:description" content="Contact Coffey Agencies for insurance quotes. Offices in Centre, AL and Rome, GA. Get a free quote today." />
        <meta name="twitter:image" content="https://coffeyagencies.com/og-image.jpg" />
        
        {/* Combined Schema Graph - All schemas in one JSON-LD block for reliable rendering */}
        <script type="application/ld+json">
          {JSON.stringify(allSchemas)}
        </script>
      </Helmet>

      <Header />

      {/* Custom Hero Section with Background Image */}
      <section 
        role="banner"
        aria-label="Contact us hero section"
        className="relative min-h-[600px] flex items-center overflow-hidden"
      >
        <img 
          src={heroBackground} 
          alt="Insurance agent helping customer at desk"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        
        {/* Content */}
        <div className="relative z-10 w-full py-20 px-4">
          <div className="container mx-auto max-w-5xl flex items-end min-h-[500px]">
            <div className="w-full text-center">
              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
                <ol className="flex items-center gap-2 text-sm text-white/80">
                  <li>
                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                  </li>
                  <li>/</li>
                  <li className="text-white font-medium">Contact</li>
                </ol>
              </nav>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-8 drop-shadow-md max-w-3xl mx-auto leading-relaxed">
                Whether you need a quote, have a question about your policy, or want to file a claim — our team is ready to help. Expect quick responses and personal attention from real people who live in your community.
              </p>
              
              {/* Trust indicator bullet points - horizontal grid */}
              <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
                <div className="flex items-start gap-2 text-left">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5 drop-shadow-md" />
                  <p className="text-sm text-white drop-shadow-md">Response within 1 business day — usually same day</p>
                </div>
                <div className="flex items-start gap-2 text-left">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5 drop-shadow-md" />
                  <p className="text-sm text-white drop-shadow-md">Speak directly with licensed agents — no call centers</p>
                </div>
                <div className="flex items-start gap-2 text-left">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5 drop-shadow-md" />
                  <p className="text-sm text-white drop-shadow-md">Two convenient offices in Centre, AL and Rome, GA</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200" asChild>
                  <a href="/contact#contact-form">Get Quote</a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white hover:bg-white text-primary border border-primary shadow-sm hover:shadow-md" asChild>
                  <TrackedPhone
                    phone="(256) 927-6287"
                    phoneRaw="2569276287"
                    location="Centre, AL"
                    office="centre"
                    pageType="contact"
                    pageUrl={location.pathname}
                    ariaLabel="Call Centre, Alabama office at (256) 927-6287"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Alabama: (256) 927-6287
                  </TrackedPhone>
                </Button>
                <Button size="lg" variant="outline" className="bg-white hover:bg-white text-primary border border-primary shadow-sm hover:shadow-md" asChild>
                  <TrackedPhone
                    phone="(706) 784-6511"
                    phoneRaw="7067846511"
                    location="Rome, GA"
                    office="rome"
                    pageType="contact"
                    pageUrl={location.pathname}
                    ariaLabel="Call Rome, Georgia office at (706) 784-6511"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Georgia: (706) 784-6511
                  </TrackedPhone>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <SectionHeading centered className="mb-4">Send Us a Message</SectionHeading>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fill out the form below and we'll get back to you within one business day.
            </p>
          </div>
          
          <Card className="shadow-lg">
            <CardContent className="pt-6">
              <form 
                name="contact-form" 
                method="POST" 
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact-form" />
                <input type="hidden" name="bot-field" aria-hidden="true" tabIndex={-1} />
                
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="John Smith" 
                    required 
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      placeholder="(256) 555-1234" 
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service-interest">Service Interest *</Label>
                  <Select name="service-interest" required>
                    <SelectTrigger id="service-interest">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">Auto Insurance</SelectItem>
                      <SelectItem value="home">Home Insurance</SelectItem>
                      <SelectItem value="renters">Renters Insurance</SelectItem>
                      <SelectItem value="condo">Condo Insurance</SelectItem>
                      <SelectItem value="life">Life Insurance</SelectItem>
                      <SelectItem value="bundling">Multiple/Bundling</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">How Can We Help?</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tell us about your insurance needs..."
                    rows={5}
                  />
                </div>

                <div className="space-y-3">
                  <Label>Preferred Contact Method *</Label>
                  <RadioGroup name="contact-method" defaultValue="either" required>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="phone-method" />
                      <Label htmlFor="phone-method" className="font-normal cursor-pointer">Phone</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email-method" />
                      <Label htmlFor="email-method" className="font-normal cursor-pointer">Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="either" id="either-method" />
                      <Label htmlFor="either-method" className="font-normal cursor-pointer">Either</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                  disabled={isSubmitting}
                  aria-label="Send contact message"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We typically respond within one business day. Need immediate help? Call us directly.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Quick Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="shadow-md hover:shadow-lg hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
              <CardContent className="p-6 pt-4 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <div className="text-muted-foreground">Centre:</div>
                    <TrackedPhone
                      phone="(256) 927-6287"
                      phoneRaw="2569276287"
                      location="Centre, AL"
                      office="centre"
                      pageType="contact"
                      pageUrl={location.pathname}
                      className="text-primary hover:underline"
                      ariaLabel="Call Centre, Alabama office at (256) 927-6287"
                    >
                      (256) 927-6287
                    </TrackedPhone>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Rome:</div>
                    <TrackedPhone
                      phone="(706) 784-6511"
                      phoneRaw="7067846511"
                      location="Rome, GA"
                      office="rome"
                      pageType="contact"
                      pageUrl={location.pathname}
                      className="text-primary hover:underline"
                      ariaLabel="Call Rome, Georgia office at (706) 784-6511"
                    >
                      (706) 784-6511
                    </TrackedPhone>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
              <CardContent className="p-6 pt-4 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Office Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Centre: Mon–Fri, 8 AM – 5 PM</div>
                  <div>Rome: Mon–Fri, 8:30 AM – 4:30 PM</div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
              <CardContent className="p-6 pt-4 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Visit Us</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Two locations in Centre, AL and Rome, GA<br />
                  Walk-ins welcome during business hours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations with Maps */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <SectionHeading centered className="mb-4">Our Offices</SectionHeading>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Visit us in person or connect remotely — we serve all of Alabama and Georgia from these two locations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground">
                    {office.name} {office.subtitle && <span className="text-lg font-normal text-muted-foreground">{office.subtitle}</span>}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{office.dba}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-muted-foreground">{office.address}</div>
                        <div className="text-muted-foreground">{office.cityStateZip}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <TrackedPhone
                        phone={office.phone}
                        phoneRaw={office.phoneRaw}
                        location={office.name}
                        office={office.name.includes("Centre") ? "centre" : "rome"}
                        pageType="contact-office"
                        pageUrl={location.pathname}
                        className="text-primary hover:underline"
                        ariaLabel={`Call ${office.name} office at ${office.phone}`}
                      >
                        {office.phone}
                      </TrackedPhone>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground whitespace-pre-line">{office.hours}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 pt-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-foreground">{office.rating}★</span>
                      <span className="text-muted-foreground">({office.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden mb-4 border border-border">
                    <iframe
                      src={office.mapEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map of ${office.name}`}
                    />
                  </div>

                   <div className="grid sm:grid-cols-2 gap-3">
                    <Button 
                      variant="outline"
                      className="shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                      asChild
                    >
                      <a 
                        href={`https://www.google.com/maps/dir/?api=1&destination_place_id=${office.placeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Get directions to ${office.name} office`}
                      >
                        Get Directions
                      </a>
                    </Button>
                    <Button 
                      className="shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                      asChild
                    >
                      <TrackedPhone
                        phone={office.phone}
                        phoneRaw={office.phoneRaw}
                        location={office.name}
                        office={office.name.includes("Centre") ? "centre" : "rome"}
                        pageType="contact-office"
                        pageUrl={location.pathname}
                        ariaLabel={`Call ${office.name.split(',')[0]} office at ${office.phone}`}
                      >
                        Call {office.name.split(',')[0]} Office
                      </TrackedPhone>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <SectionHeading centered className="mb-4">Serving All of Alabama & Georgia</SectionHeading>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            From our offices in Centre and Rome, we provide insurance coverage to families throughout both states. No matter where you live in Alabama or Georgia, we can help — no office visit required.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200" asChild>
            <a href="/service-areas">View All Service Areas</a>
          </Button>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-[#1e3a5f]">
        <div className="container mx-auto max-w-4xl text-center">
          <SectionHeading variant="white" centered className="mb-4">Ready to Get Started?</SectionHeading>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Get a free quote in about 15 minutes. No obligation, no pressure.
          </p>
          
          {/* CTA Button - Green */}
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white min-w-[200px] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200" 
            asChild 
            aria-label="Get your free insurance quote"
          >
            <a href="#contact-form">Get Quote</a>
          </Button>
          
          {/* Phone Numbers */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-white/90">
            <span>Or call us:</span>
            <TrackedPhone
              phone="(256) 927-6287"
              phoneRaw="2569276287"
              location="Centre, AL"
              office="centre"
              pageType="contact-cta"
              pageUrl={location.pathname}
              className="text-white hover:text-accent transition-colors"
              ariaLabel="Call Centre, Alabama office at (256) 927-6287"
            >
              (256) 927-6287
            </TrackedPhone>
            <span className="hidden sm:inline">|</span>
            <TrackedPhone
              phone="(706) 784-6511"
              phoneRaw="7067846511"
              location="Rome, GA"
              office="rome"
              pageType="contact-cta"
              pageUrl={location.pathname}
              className="text-white hover:text-accent transition-colors"
              ariaLabel="Call Rome, Georgia office at (706) 784-6511"
            >
              (706) 784-6511
            </TrackedPhone>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              Licensed in AL & GA
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              Hablamos Español
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              Family Owned
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              100+ Years Combined Experience
            </span>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
