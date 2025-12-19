import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";

const featuredCities = [
  { city: "Centre", state: "AL", link: "/centre-al" },
  { city: "Rome", state: "GA", link: "/rome-ga" },
  { city: "Cedartown", state: "GA", link: "/cedartown-ga" },
  { city: "Rockmart", state: "GA", link: "/rockmart-ga" },
  { city: "Cartersville", state: "GA", link: "/cartersville-ga" }
];

export const ServiceArea = () => {
  return (
    <section className="section-spacing bg-primary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <SectionHeading variant="white" centered>Areas We Serve</SectionHeading>
          <p className="text-lg text-white/80 text-balance">
            Protecting families across Alabama and Georgia with local expertise and personal service.
          </p>
        </div>

        {/* Featured Cities Grid - Card-Based Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 mb-16">
          {featuredCities.map((city, index) => (
            <Link key={index} to={city.link} className="block" aria-label={`Get insurance quote for ${city.city}, ${city.state}`}>
              <Card className="border-2 group overflow-hidden hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:border-[#22c55e] hover:scale-105 transition-all duration-300 ease-in-out h-full">
                {/* Gray header with inline icon + city name */}
                <div className="bg-gray-200 px-4 py-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <h3 className="text-lg font-bold text-primary">
                    {city.city}, {city.state}
                  </h3>
                </div>
                
                {/* White body with CTA */}
                <CardContent className="p-4 flex items-center justify-center">
                  <span className="inline-flex items-center text-sm font-medium text-[#0D7D4D] group-hover:underline">
                    Get a Quote
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Additional Info Line */}
        <div className="text-center mb-8">
          <p className="text-white/90 text-lg">
            Wherever you are in Alabama or Georgia, we can quote and bind coverage remotely.
          </p>
        </div>

        {/* Footer Section */}
        <div className="text-center space-y-4 mt-16">
          {/* Tagline */}
          <p className="font-semibold text-white">
            Statewide coverage. Hometown service.
          </p>
          
          {/* View All link */}
          <Link 
            to="/service-areas" 
            className="inline-flex items-center gap-2 text-white/80 font-medium hover:text-white hover:underline relative z-10 pointer-events-auto px-2 py-1 -mx-2 -my-1 rounded transition-colors"
            aria-label="View all insurance service locations in Alabama and Georgia"
            onClick={(e) => {
              // Ensure navigation happens
              e.stopPropagation();
            }}
          >
            View All Locations
            <ArrowRight className="h-4 w-4" />
          </Link>
          
          {/* Contact fallback */}
          <p className="text-white/70 text-sm">
            Don't see your city?{" "}
            <Link to="/contact" className="text-white/80 font-medium hover:text-white hover:underline">
              Contact us
            </Link>{" "}
            to see if we can help.
          </p>
        </div>
      </div>
    </section>
  );
};
