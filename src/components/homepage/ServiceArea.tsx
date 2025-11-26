import { MapPin, Building2, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const offices = [
  {
    city: "Centre",
    state: "Alabama",
    address: "1913 W Main Street, Centre, AL 35960",
    phone: "(256) 927-6287",
    hours: "Monday–Friday, 8:00 AM – 5:00 PM",
    type: "Headquarters"
  },
  {
    city: "Rome",
    state: "Georgia",
    address: "1703 Turner McCall Blvd SE, Rome, GA 30161",
    phone: "(706) 784-6511",
    hours: "Monday–Friday, 8:30 AM – 4:30 PM",
    type: "Branch Office"
  }
];

const alabamaCities = [
  "Birmingham", "Montgomery", "Mobile", "Dothan", "Auburn", 
  "Phenix City", "Foley", "Troy", "Enterprise", "Centre"
];

const georgiaCities = [
  "Atlanta", "Lawrenceville", "Duluth", "Columbus", "Cartersville", 
  "Calhoun", "Cedartown", "Summerville", "Suwanee", "Alpharetta", "Marietta", "Rome"
];

export const ServiceArea = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-balance">Serving Alabama & Georgia</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Two convenient office locations and comprehensive coverage across both states. Wherever you are, we're here to help.
          </p>
        </div>

        {/* Office Locations */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {offices.map((office, index) => (
            <Card key={index} className="border-2 overflow-hidden">
              <div className="bg-gradient-primary h-2"></div>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-2xl font-bold">{office.city}, {office.state}</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-secondary/20 text-secondary font-semibold">
                        {office.type}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <a href={`tel:${office.phone.replace(/[^0-9]/g, '')}`} className="font-semibold text-foreground text-lg hover:text-primary transition-colors">
                      {office.phone}
                    </a>
                  </p>
                  <p className="text-sm">
                    {office.hours}
                  </p>
                </div>

                <Link to="/contact">
                  <button className="mt-6 w-full btn-primary py-3 rounded-lg font-semibold">
                    Get Directions
                  </button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statewide Coverage */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Statewide Coverage</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Serving all of Alabama and Georgia
          </p>
          
          <Link to="/service-areas" className="inline-block">
            <button className="btn-primary px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              View All Service Areas →
            </button>
          </Link>

          <p className="text-muted-foreground mt-8">
            Don't see your city? <Link to="/contact" className="text-primary font-semibold hover:underline">Contact us</Link> to see if we can help.
          </p>
        </div>
      </div>
    </section>
  );
};
