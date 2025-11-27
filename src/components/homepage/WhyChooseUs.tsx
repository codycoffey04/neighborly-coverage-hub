import { MapPin, Users, Zap, DollarSign } from "lucide-react";

const pillars = [
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Two offices. Two states. One team that actually knows your roads, your weather, and your risks. We're not a call center — we're your neighbors."
  },
  {
    icon: Users,
    title: "Real People, Real Service",
    description: "Request a quote online, get a callback within 24 hours from a licensed agent who answers your questions — not a script."
  },
  {
    icon: Zap,
    title: "Simple, Fast Process",
    description: "Quote in minutes. Coverage the same day. No paperwork maze, no endless hold music, no 'your call is important to us.'"
  },
  {
    icon: DollarSign,
    title: "Bundle & Save Up to $600",
    description: "Combine auto + home and keep more money where it belongs. One policy, one renewal, one team — maximum savings."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-balance">Why Choose Coffey Agencies?</h2>
          <p className="text-lg text-muted-foreground text-balance">
            16 years of protecting Alabama and Georgia families. Here's why 8,000+ policyholders trust us.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="text-center space-y-4 group">
                {/* Icon */}
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">16+</p>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">2</p>
              <p className="text-muted-foreground">Office Locations</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">8,000+</p>
              <p className="text-muted-foreground">Policies Protected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
