import { MapPin, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const featuredCities = [
  {
    city: "Centre",
    state: "AL",
    descriptor: "Alabama Headquarters",
    link: "/centre-al"
  },
  {
    city: "Rome",
    state: "GA",
    descriptor: "Georgia Office",
    link: "/rome-ga"
  },
  {
    city: "Cedartown",
    state: "GA",
    descriptor: "Serving Polk County",
    link: "/cedartown-ga"
  },
  {
    city: "Rockmart",
    state: "GA",
    descriptor: "Serving Polk County",
    link: "/rockmart-ga"
  },
  {
    city: "Cartersville",
    state: "GA",
    descriptor: "Serving Bartow County",
    link: "/cartersville-ga"
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
                  <CardHeader>
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{city.city}, {city.state}</CardTitle>
                    <CardDescription className="text-base">{city.descriptor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="inline-flex items-center text-primary font-medium group/btn">
                      Get a Quote
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
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
                    <CardHeader>
                      <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{city.city}, {city.state}</CardTitle>
                      <CardDescription className="text-base">{city.descriptor}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="inline-flex items-center text-primary font-medium group/btn">
                        Get a Quote
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center space-y-6 mt-12">
          <div className="space-y-3">
            <p className="text-muted-foreground font-medium">
              Statewide coverage. Hometown service.
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
