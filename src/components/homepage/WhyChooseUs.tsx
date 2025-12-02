import { MapPin, Users, Zap, DollarSign } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const pillars = [
  {
    icon: MapPin,
    title: "Local to Alabama & Georgia",
    description: "Agents in Centre, AL and Rome, GA who know your roads, weather, and lenders."
  },
  {
    icon: Users,
    title: "Real People, Every Call",
    description: "You talk to a licensed agent, not a bot or phone tree—start to finish."
  },
  {
    icon: Zap,
    title: "Fast, Simple Quotes",
    description: "Tell us the basics once; we usually have options for you in under 15 minutes."
  },
  {
    icon: DollarSign,
    title: "Bundle & Save Big",
    description: "Most families save 15–25%—up to about $600 a year—when they bundle home + auto."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="section-spacing bg-primary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <SectionHeading variant="white" centered className="lg:text-5xl tracking-tight">Why Drivers and Homeowners Choose Coffey Agencies</SectionHeading>
          <p className="text-lg text-white/80 text-balance">
            Four reasons Alabama & Georgia families trust us with their coverage.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-xl hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300 ease-in-out group text-center space-y-4">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1e3a5f] shadow-md group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white">{pillar.title}</h3>
                <p className="text-white/80 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-secondary mb-2">100+</p>
              <p className="text-lg font-semibold text-white mb-1">Years of Experience</p>
              <p className="text-sm text-white/70">Combined insurance experience across our team.</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-secondary mb-2">4.7★</p>
              <p className="text-lg font-semibold text-white mb-1">200+ Google Reviews</p>
              <p className="text-sm text-white/70">Combined rating across our Centre & Rome offices.</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-secondary mb-2">Hablamos Español</p>
              <p className="text-lg font-semibold text-white mb-1">Bilingual Support</p>
              <p className="text-sm text-white/70">Spanish-speaking agents available for quotes and service.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
