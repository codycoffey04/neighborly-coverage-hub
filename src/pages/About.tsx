import { PageLayout } from "@/components/shared/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Heart, TrendingUp, MapPin, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "We build lasting relationships through honest advice and transparent service.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "As a local, family-owned agency, we're invested in the success of our neighbors.",
  },
  {
    icon: Heart,
    title: "Personal Service",
    description: "You're not just a policy number—you're part of the Coffey family.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "We stay ahead of industry changes to provide you the best coverage options.",
  },
];

const offices = [
  {
    name: "Centre, Alabama",
    address: "1010 Centre Plaza, Centre, AL 35960",
    phone: "(256) 927-6287",
    hours: "Monday–Friday: 8:00 AM – 5:00 PM",
    rating: "4.7",
    reviews: "116",
  },
  {
    name: "Rome, Georgia",
    address: "2 Riverside Parkway, Rome, GA 30161",
    phone: "(706) 784-6511",
    hours: "Monday–Friday: 8:30 AM – 4:30 PM",
    rating: "4.6",
    reviews: "90",
  },
];

const About = () => {
  return (
    <PageLayout
      title="About Coffey Agencies"
      description="Your trusted insurance partner since 2008, serving families and businesses across Alabama and Georgia."
    >
      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2008, Coffey Agencies began with a simple mission: to provide personalized 
                  insurance solutions that truly protect what matters most to families and businesses in 
                  our community.
                </p>
                <p>
                  As a family-owned and operated independent insurance agency, we've grown from serving 
                  our neighbors in Centre, Alabama to expanding throughout the region, opening our second 
                  office in Rome, Georgia.
                </p>
                <p>
                  What sets us apart is our commitment to being more than just an insurance provider—we're 
                  your advocate, your advisor, and your partner in protecting your future. Our team takes 
                  the time to understand your unique needs and find coverage that fits your life and budget.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 border border-border">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">16+</div>
                  <div className="text-muted-foreground">Years Serving Our Community</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">2</div>
                  <div className="text-muted-foreground">Office Locations</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">4.7★</div>
                  <div className="text-muted-foreground">Average Customer Rating</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <div className="text-muted-foreground">Five-Star Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission & Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're guided by principles that put your needs first and strengthen our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Coffey Agencies?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the Coffey difference—local expertise with personalized service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Independent Agency</h3>
              <p className="text-muted-foreground">
                We shop multiple carriers to find you the best coverage at the best price—we work for you, not the insurance company.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Local & Family-Owned</h3>
              <p className="text-muted-foreground">
                We live and work in the communities we serve. Your success is our success.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Expert Guidance</h3>
              <p className="text-muted-foreground">
                With 16+ years of experience, we provide personalized advice to help you make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Visit Our Offices</h2>
            <p className="text-muted-foreground">
              Stop by one of our convenient locations to discuss your insurance needs in person.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="border-border">
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
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-500">★</span>
                        ))}
                      </div>
                      <span className="text-muted-foreground">
                        {office.rating} ({office.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button variant="outline" className="w-full">
                      Get Directions
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Experience the Coffey Difference?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let us help you find the perfect coverage for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="min-w-[200px]">
                Get Your Free Quote
              </Button>
            </Link>
            <a href="tel:(256)927-6287">
              <Button variant="outline" size="lg" className="min-w-[200px]">
                Call Us Today
              </Button>
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
