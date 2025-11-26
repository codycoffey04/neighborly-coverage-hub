import { FileText, Search, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Get Your Quote",
    description: "Fill out our quick online form or call one of our offices. We'll gather the info we need to find you the best coverage options."
  },
  {
    icon: Search,
    number: "02",
    title: "Review Your Options",
    description: "We'll present you with tailored insurance options from top carriers. Our team will walk you through each policy so you understand exactly what you're getting."
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Get Covered",
    description: "Choose the coverage that fits your needs and budget, complete the paperwork (we make it easy), and you're protected. It's that simple."
  }
];

export const HowItWorks = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-balance">Getting Covered is Easy</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Three simple steps to the protection you need. No hassle, no confusion—just straightforward service.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
            {/* Connection Lines (desktop only) */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" 
                 style={{ top: '80px' }}></div>
            
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative text-center space-y-4">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl font-bold text-primary/10">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="relative inline-flex p-5 rounded-2xl bg-primary text-primary-foreground shadow-lg mx-auto">
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold pt-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-muted/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Request your free quote today and see why thousands of Alabama and Georgia families trust Coffey Agencies with their insurance needs.
          </p>
          <button className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 hover:scale-105 transition-transform">
            Get Your Free Quote
          </button>
        </div>
      </div>
    </section>
  );
};
