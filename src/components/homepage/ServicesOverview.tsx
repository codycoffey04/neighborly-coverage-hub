import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Home, Building2, Key, Heart, Bike, Sailboat, Truck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/shared/SectionHeading";

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
  }
];

export const ServicesOverview = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <SectionHeading centered>Insurance Solutions for Every Need</SectionHeading>
          <p className="text-lg text-muted-foreground text-balance">
            Coverage that fits your life — not the other way around. Get a personalized quote in minutes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card key={index} className="bg-white border border-[#1e3a5f]/20 shadow-md rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:border-[#22c55e] transition-all duration-300 ease-in-out group overflow-hidden flex flex-col h-full">
              {/* Compact gray header with icon + title inline */}
              <div className="bg-gray-200 px-6 py-4 flex items-center gap-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary transition-colors">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </div>
              
              {/* White area with description + CTA */}
              <CardContent className="p-6 flex-grow flex flex-col">
                <CardDescription className="text-base mb-4 flex-grow">
                  {service.description}
                </CardDescription>
                <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary-dark" asChild>
                  <Link to={service.link} aria-label={`Learn more about ${service.title}`}>
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gray-50 rounded-xl py-12 px-6 text-center">
          <p className="text-lg text-muted-foreground mb-6">Not sure which coverages you need? Start with a quick quote and we'll walk you through options.</p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            asChild
          >
            <Link to="/#quote-form">
              Get My Free Quote
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
