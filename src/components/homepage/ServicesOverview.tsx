import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Home, Building2, Key, Heart, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Auto Insurance",
    description: "Comprehensive coverage for your vehicles with competitive rates and flexible payment options.",
    link: "/services/auto-insurance"
  },
  {
    icon: Home,
    title: "Home Insurance",
    description: "Protect your home and belongings with tailored coverage that fits your needs and budget.",
    link: "/services/home-insurance"
  },
  {
    icon: Key,
    title: "Renters Insurance",
    description: "Affordable protection for your personal property and liability as a renter.",
    link: "/services/renters-insurance"
  },
  {
    icon: Building2,
    title: "Condo Insurance",
    description: "Specialized coverage for condo owners that complements your HOA's master policy.",
    link: "/services/condo-insurance"
  },
  {
    icon: Heart,
    title: "Life Insurance",
    description: "Secure your family's financial future with term or permanent life insurance solutions.",
    link: "/services/life-insurance"
  }
];

export const ServicesOverview = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-balance">Insurance Solutions for Every Need</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Whether you're protecting your car, home, or loved ones, we've got you covered with personalized service and expert guidance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="card-hover border-2 group">
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary-dark">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Not sure which coverage you need?</p>
          <Button size="lg" variant="outline" className="border-2">
            Talk to an Expert
          </Button>
        </div>
      </div>
    </section>
  );
};
