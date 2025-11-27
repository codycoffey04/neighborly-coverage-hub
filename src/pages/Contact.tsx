import { PageLayout } from "@/components/shared/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MapPin, Phone, Clock, Star } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";

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
    // TODO: Replace with real Google Maps embed code for Centre office
    mapEmbed: "https://www.google.com/maps/embed?pb=CENTRE_OFFICE_EMBED_CODE",
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
    // TODO: Replace with real Google Maps embed code for Rome office
    mapEmbed: "https://www.google.com/maps/embed?pb=ROME_OFFICE_EMBED_CODE",
    mapAddress: "1703 Turner McCall Blvd SE, Rome, GA 30161",
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Coffey Agencies",
    "description": "Get in touch with Coffey Agencies for insurance quotes and service",
    "url": "https://coffeyagencies.com/contact",
    "mainEntity": {
      "@id": "https://coffeyagencies.com/#organization"
    }
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
    <PageLayout
      title="Contact Us"
      description="Get in Touch"
      breadcrumbs={[{ label: "Contact", href: "/contact" }]}
    >
      <Helmet>
        <title>Contact Us | Coffey Agencies | Alabama & Georgia Insurance</title>
        <meta name="description" content="Contact Coffey Agencies for insurance quotes. Offices in Centre, AL (256) 927-6287 and Rome, GA (706) 784-6511. Get a free quote today." />
        <link rel="canonical" href="https://coffeyagencies.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>
      {/* Intro */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg text-muted-foreground">
            Whether you need a quote, have a question, or want to make a policy change — we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form 
                name="contact-form" 
                method="POST" 
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact-form" />
                <input type="hidden" name="bot-field" />
                
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
                  className="w-full"
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
            <Card>
              <CardContent className="pt-6 text-center">
                <Phone className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                <div className="space-y-1 text-sm">
                  <div>
                    <div className="text-muted-foreground">Centre:</div>
                    <a href="tel:+12569276287" className="text-primary hover:underline" aria-label="Call Centre, Alabama office at (256) 927-6287">
                      (256) 927-6287
                    </a>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Rome:</div>
                    <a href="tel:+17067846511" className="text-primary hover:underline" aria-label="Call Rome, Georgia office at (706) 784-6511">
                      (706) 784-6511
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Office Hours</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div>Centre: Mon–Fri, 8 AM – 5 PM</div>
                  <div>Rome: Mon–Fri, 8:30 AM – 4:30 PM</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <MapPin className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
                <p className="text-sm text-muted-foreground">
                  Two locations in Centre, AL and Rome, GA<br />
                  Walk-ins welcome during business hours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations with Maps */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Offices</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground">
                    {office.name} {office.subtitle && <span className="text-lg font-normal text-muted-foreground">{office.subtitle}</span>}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">{office.dba}</p>
                  
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
                      <a href={`tel:+1${office.phoneRaw}`} className="text-primary hover:underline" aria-label={`Call ${office.name} office at ${office.phone}`}>
                        {office.phone}
                      </a>
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
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
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
                      asChild
                    >
                      <a 
                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(office.mapAddress)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Get directions to ${office.name} office`}
                      >
                        Get Directions
                      </a>
                    </Button>
                    <Button 
                      asChild
                    >
                      <a href={`tel:+1${office.phoneRaw}`} aria-label={`Call ${office.name.split(',')[0]} office at ${office.phone}`}>
                        Call {office.name.split(',')[0]} Office
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Serving All of Alabama & Georgia</h2>
          <p className="text-lg text-muted-foreground mb-8">
            From our offices in Centre and Rome, we provide insurance coverage to families throughout both states. No matter where you live in Alabama or Georgia, we can help — no office visit required.
          </p>
          <Button size="lg" variant="outline" asChild>
            <a href="/service-areas">View All Service Areas</a>
          </Button>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get a free quote in about 15 minutes. No obligation, no pressure.
          </p>
          <Button size="lg" asChild aria-label="Get your free insurance quote">
            <a href="#contact-form">Get Your Free Quote</a>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
