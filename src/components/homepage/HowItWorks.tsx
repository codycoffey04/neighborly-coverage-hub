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
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl tracking-tight">Getting Covered is Easy</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Three steps stand between you and peace of mind. Let's make it simple.
          </p>
        </div>

        {/* Steps - Staggered Timeline */}
        <div className="max-w-6xl mx-auto space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCenter = index === 1;
              const alignmentClass = isCenter ? "text-center mx-auto" : "text-left md:ml-0";
              const layoutClass = isCenter ? "flex-col items-center" : "flex-col md:flex-row items-start";
              
              return (
                <div key={index} className={`relative flex ${layoutClass} gap-6 ${alignmentClass} max-w-3xl ${!isCenter && index === 0 ? '' : isCenter ? 'mx-auto' : 'md:ml-24'}`}>
                  {/* Step Number Background */}
                  <div className={`absolute -top-8 ${isCenter ? 'left-1/2 -translate-x-1/2' : 'left-0'} text-8xl md:text-9xl font-bold text-primary/5 leading-none`}>
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="relative inline-flex p-6 rounded-2xl bg-primary text-primary-foreground shadow-xl shrink-0 z-10">
                    <Icon className="h-10 w-10" />
                  </div>
                  
                  {/* Content */}
                  <div className={`space-y-3 ${isCenter ? 'text-center' : 'text-left'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
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
