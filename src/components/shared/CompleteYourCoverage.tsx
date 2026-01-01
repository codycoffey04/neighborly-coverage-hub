import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Home, Key, Building2, Heart, Bike, Anchor, Truck, Building } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ServiceKey = 'auto' | 'home' | 'renters' | 'condo' | 'life' | 'motorcycle' | 'boat' | 'atv' | 'mobile-home';

interface ServiceInfo {
  key: ServiceKey;
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

const allServices: ServiceInfo[] = [
  {
    key: 'auto',
    icon: Car,
    title: "Auto Insurance",
    description: "Coverage for cars, trucks, and SUVs with liability, collision, and comprehensive options.",
    link: "/services/auto-insurance"
  },
  {
    key: 'home',
    icon: Home,
    title: "Home Insurance",
    description: "Protect your home and belongings from storms, fire, theft, and liability claims.",
    link: "/services/home-insurance"
  },
  {
    key: 'mobile-home',
    icon: Building,
    title: "Mobile Home Insurance",
    description: "Coverage for manufactured homes that other agencies won't touch. Specialty carriers for older mobile homes.",
    link: "/services/mobile-home-insurance"
  },
  {
    key: 'renters',
    icon: Key,
    title: "Renters Insurance",
    description: "Affordable coverage for your belongings, liability, and temporary housing from $8/month.",
    link: "/services/renters-insurance"
  },
  {
    key: 'condo',
    icon: Building2,
    title: "Condo Insurance",
    description: "HO-6 walls-in coverage, loss assessment protection, and master policy coordination.",
    link: "/services/condo-insurance"
  },
  {
    key: 'life',
    icon: Heart,
    title: "Life Insurance",
    description: "Term life, whole life, and final expense options to protect your family's future.",
    link: "/services/life-insurance"
  },
  {
    key: 'motorcycle',
    icon: Bike,
    title: "Motorcycle Insurance",
    description: "Coverage for cruisers, sport bikes, and touring machines with custom parts protection.",
    link: "/services/motorcycle-insurance"
  },
  {
    key: 'boat',
    icon: Anchor,
    title: "Boat Insurance",
    description: "Protect your boat, PWC, or watercraft with liability, hull coverage, and on-water towing.",
    link: "/services/boat-insurance"
  },
  {
    key: 'atv',
    icon: Truck,
    title: "ATV/UTV Insurance",
    description: "Coverage for ATVs, UTVs, and side-by-sides whether you ride trails, hunt, or work the land.",
    link: "/services/atv-utv-insurance"
  }
];

interface CompleteYourCoverageProps {
  excludeService: ServiceKey;
  className?: string;
}

export const CompleteYourCoverage = ({ excludeService, className = "" }: CompleteYourCoverageProps) => {
  const services = allServices.filter(service => service.key !== excludeService);

  return (
    <section className={`py-16 px-4 bg-muted/30 ${className}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Complete Your Coverage</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore additional insurance options to protect every aspect of your life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.key} 
                className="h-full flex flex-col border border-border border-t-4 border-t-accent shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-3">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col pt-0">
                  <CardDescription className="mb-4 flex-grow text-sm">
                    {service.description}
                  </CardDescription>
                  <Button 
                    className="w-full bg-accent hover:bg-accent/90 text-white" 
                    asChild 
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <Link to={service.link}>Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompleteYourCoverage;
