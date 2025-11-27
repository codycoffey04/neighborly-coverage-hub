import { MapPin, ArrowRight } from "lucide-react";
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
        <div className="mb-16">
          {/* Top Row - 3 Locations */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 mb-8 lg:mb-12">
            {featuredCities.slice(0, 3).map((city, index) => (
              <Link key={index} to={city.link} className="group text-center space-y-3">
                {/* Small solid navy pin icon */}
                <div className="flex justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                
                {/* City name - bold, navy */}
                <h3 className="text-xl font-bold text-primary">
                  {city.city}, {city.state}
                </h3>
                
                {/* Descriptor - lighter, smaller */}
                <p className="text-muted-foreground text-sm">
                  {city.descriptor}
                </p>
                
                {/* CTA link with arrow animation */}
                <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                  Get a Quote
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          {/* Bottom Row - 2 Locations Centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-xl">
              {featuredCities.slice(3, 5).map((city, index) => (
                <Link key={index + 3} to={city.link} className="group text-center space-y-3">
                  {/* Small solid navy pin icon */}
                  <div className="flex justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  
                  {/* City name - bold, navy */}
                  <h3 className="text-xl font-bold text-primary">
                    {city.city}, {city.state}
                  </h3>
                  
                  {/* Descriptor - lighter, smaller */}
                  <p className="text-muted-foreground text-sm">
                    {city.descriptor}
                  </p>
                  
                  {/* CTA link with arrow animation */}
                  <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                    Get a Quote
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center space-y-4 mt-16">
          {/* Tagline */}
          <p className="font-semibold text-primary">
            Statewide coverage. Hometown service.
          </p>
          
          {/* View All link */}
          <Link 
            to="/service-areas" 
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View All Locations
            <ArrowRight className="h-4 w-4" />
          </Link>
          
          {/* Contact fallback */}
          <p className="text-muted-foreground text-sm">
            Don't see your city?{" "}
            <Link to="/contact" className="text-primary font-medium hover:underline">
              Contact us
            </Link>{" "}
            to see if we can help.
          </p>
        </div>
      </div>
    </section>
  );
};
