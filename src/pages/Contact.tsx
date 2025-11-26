import { PageLayout } from "@/components/shared/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Clock, Mail, Star } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const offices = [
  {
    name: "Centre, Alabama Office",
    address: "1913 W Main Street, Centre, AL 35960",
    phone: "(256) 927-6287",
    hours: "Monday–Friday: 8:00 AM – 5:00 PM",
    rating: "4.7",
    reviews: "116",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.123!2d-85.678!3d34.151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA5JzAzLjYiTiA4NcKwNDAnNDAuOCJX!5e0!3m2!1sen!2sus!4v1234567890",
  },
  {
    name: "Rome, Georgia Office",
    address: "1703 Turner McCall Blvd SE, Rome, GA 30161",
    phone: "(706) 784-6511",
    hours: "Monday–Friday: 8:30 AM – 4:30 PM",
    rating: "4.6",
    reviews: "90",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.123!2d-85.234!3d34.257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDE1JzI1LjIiTiA4NcKwMTQnMDIuNCJX!5e0!3m2!1sen!2sus!4v1234567890",
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
        description: "We'll get back to you within 24 hours.",
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
      description="Get in touch with our team for personalized insurance solutions. We're here to help!"
    >
      {/* Contact Form & Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Get Your Free Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <form 
                  name="coffey-insurance-lead" 
                  method="POST" 
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="coffey-insurance-lead" />
                  
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
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
                    <Label htmlFor="insurance-type">Insurance Type *</Label>
                    <Select name="insurance-type" required>
                      <SelectTrigger id="insurance-type">
                        <SelectValue placeholder="Select insurance type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="auto">Auto Insurance</SelectItem>
                        <SelectItem value="home">Home Insurance</SelectItem>
                        <SelectItem value="life">Life Insurance</SelectItem>
                        <SelectItem value="business">Business Insurance</SelectItem>
                        <SelectItem value="health">Health Insurance</SelectItem>
                        <SelectItem value="multiple">Multiple Types</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell us about your insurance needs..."
                      rows={5}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Get My Free Quote"}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We typically respond within 24 hours
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Quick Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Prefer to Call?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Centre, AL Office</h4>
                    <a 
                      href="tel:(256)927-6287" 
                      className="text-2xl font-bold text-primary hover:underline"
                    >
                      (256) 927-6287
                    </a>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-foreground mb-2">Rome, GA Office</h4>
                    <a 
                      href="tel:(706)784-6511" 
                      className="text-2xl font-bold text-primary hover:underline"
                    >
                      (706) 784-6511
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">Email Us</div>
                      <a 
                        href="mailto:info@coffeyagencies.com" 
                        className="text-primary hover:underline"
                      >
                        info@coffeyagencies.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">Business Hours</div>
                      <p className="text-muted-foreground text-sm">
                        Monday–Friday<br />
                        Centre: 8:00 AM – 5:00 PM<br />
                        Rome: 8:30 AM – 4:30 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations with Maps */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Visit Our Offices</h2>
            <p className="text-muted-foreground">
              Stop by for in-person service at either of our convenient locations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">{office.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{office.address}</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <a href={`tel:${office.phone}`} className="text-primary hover:underline">
                        {office.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{office.hours}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 pt-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-foreground">{office.rating}</span>
                      <span className="text-muted-foreground">({office.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Map Placeholder */}
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
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

                  <Button 
                    variant="outline" 
                    className="w-full mt-4"
                    asChild
                  >
                    <a 
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(office.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
