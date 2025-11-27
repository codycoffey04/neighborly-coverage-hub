import { FileText, Search, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Get Your Quote",
    description: "Fill out our quick form online or give us a call. Tell us what you need — auto, home, condo, renters, life, or bundle it all."
  },
  {
    icon: Search,
    number: "02",
    title: "Review Your Options",
    description: "A licensed agent calls you back within 24 hours. We walk through coverage options, answer questions, and find the policy that fits your life and budget."
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Get Covered",
    description: "Approve your policy and you're protected — often the same day. Welcome to the Coffey Agencies family."
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
            Three steps stand between you and peace of mind. Let's make it simple.
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
            Most quotes take about 15 minutes. No obligations, no pressure — just honest answers and real options.
          </p>
          <button className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 hover:scale-105 transition-transform">
            Get Your Free Quote
          </button>
        </div>
      </div>
    </section>
  );
};
