import { MapPin, Building2, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const featuredCities = [
  {
    city: "Centre",
    state: "AL",
    label: "Alabama Headquarters",
    link: "/centre-al",
    cta: "Get a Quote",
    isOffice: true
  },
  {
    city: "Rome",
    state: "GA",
    label: "Georgia Office",
    link: "/rome-ga",
    cta: "Get a Quote",
    isOffice: true
  },
  {
    city: "Cedartown",
    state: "GA",
    label: "Polk County",
    link: "/cedartown-ga",
    cta: "Learn More",
    isOffice: false
  },
  {
    city: "Rockmart",
    state: "GA",
    label: "Polk County",
    link: "/rockmart-ga",
    cta: "Learn More",
    isOffice: false
  },
  {
    city: "Cartersville",
    state: "GA",
    label: "Bartow County",
    link: "/cartersville-ga",
    cta: "Learn More",
    isOffice: false
  }
];

export const ServiceArea = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-balance">Areas We Serve</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Protecting families across Alabama and Georgia with local expertise and personal service.
          </p>
        </div>

        {/* Featured Cities Grid */}
        <div className="mb-12">
          {/* Top Row - 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {featuredCities.slice(0, 3).map((city, index) => (
              <Link key={index} to={city.link}>
                <Card className="card-hover border-2 group h-full">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      {/* Icon */}
                      <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <MapPin className="h-8 w-8 text-primary" />
                      </div>
                      
                      {/* City Name */}
                      <div>
                        <h3 className="text-2xl font-bold mb-1">
                          {city.city}, {city.state}
                        </h3>
                        <p className="text-sm text-muted-foreground font-semibold">
                          {city.label}
                        </p>
                        
                        {/* Office Location Badge */}
                        {city.isOffice && (
                          <div className="flex items-center justify-center gap-1 mt-2">
                            <Building2 className="h-3 w-3 text-secondary" />
                            <span className="text-xs px-2 py-1 rounded-full bg-secondary/20 text-secondary font-semibold">
                              Office Location
                            </span>
                          </div>
                        )}
                      </div>

                      {/* CTA Button */}
                      <Button 
                        variant={city.isOffice ? "default" : "outline"}
                        className="w-full"
                      >
                        {city.cta}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Bottom Row - 2 Cards Centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl w-full">
              {featuredCities.slice(3, 5).map((city, index) => (
                <Link key={index + 3} to={city.link}>
                  <Card className="card-hover border-2 group h-full">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center space-y-4">
                        {/* Icon */}
                        <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <MapPin className="h-8 w-8 text-primary" />
                        </div>
                        
                        {/* City Name */}
                        <div>
                          <h3 className="text-2xl font-bold mb-1">
                            {city.city}, {city.state}
                          </h3>
                          <p className="text-sm text-muted-foreground font-semibold">
                            {city.label}
                          </p>
                        </div>

                        {/* CTA Button */}
                        <Button variant="outline" className="w-full">
                          {city.cta}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center space-y-6">
          <div className="space-y-3">
            <p className="text-muted-foreground">
              Licensed in Alabama and Georgia. Local expertise wherever you are.
            </p>
            <Link to="/service-areas" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              View All Locations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <p className="text-muted-foreground">
            Don't see your city? <Link to="/contact" className="text-primary font-semibold hover:underline">Contact us</Link> to see if we can help.
          </p>
        </div>
      </div>
    </section>
  );
};
