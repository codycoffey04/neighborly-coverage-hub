import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Home, Building2, Key, Heart, ArrowRight } from "lucide-react";

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
            Coverage that fits your life — not the other way around. Get a personalized quote in minutes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card key={index} className="card-hover border-2 group overflow-hidden">
              {/* Compact gray header with icon + title inline */}
              <div className="bg-muted px-6 py-4 flex items-center gap-3">
                <div className="inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </div>
              
              {/* White area with description + CTA */}
              <CardContent className="p-6">
                <CardDescription className="text-base mb-4">
                  {service.description}
                </CardDescription>
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
