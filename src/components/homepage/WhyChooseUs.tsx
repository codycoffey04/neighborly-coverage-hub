import { MapPin, Users, Zap } from "lucide-react";

const pillars = [
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "With offices in Centre, AL and Rome, GA, we understand the unique insurance needs of Alabama and Georgia residents. We're your neighbors, not a faceless corporation."
  },
  {
    icon: Users,
    title: "Real People, Real Service",
    description: "Talk to actual humans who care about your coverage. No endless phone trees, no bots—just friendly experts ready to help you find the right protection."
  },
  {
    icon: Zap,
    title: "Simple, Fast Process",
    description: "Get quotes online in minutes or visit us in person. We make insurance easy to understand and even easier to buy, so you can get covered and get on with your life."
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
            We're more than just an insurance agency—we're your trusted partner in protecting what matters most.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
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
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">2</p>
              <p className="text-muted-foreground">Convenient Locations</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">8,000+</p>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
