import { FileText, Search, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Helmet } from "react-helmet-async";

const steps = [
  {
    icon: FileText,
    number: "1",
    title: "Get Your Quote",
    description: "Tell us a few details online or by phone (takes ~2 minutes)."
  },
  {
    icon: Search,
    number: "2",
    title: "Review Your Options",
    description: "A licensed agent walks you through 2–3 options."
  },
  {
    icon: ShieldCheck,
    number: "3",
    title: "Get Covered",
    description: "We bind coverage and send ID cards the same day in most cases."
  }
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Get Insurance Coverage with Coffey Agencies",
  "description": "Three simple steps to get insured: request a quote, review options with a licensed agent, and get covered — often the same day.",
  "totalTime": "PT15M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "0"
  },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Get Your Quote",
      "text": "Tell us a few details online or by phone (takes ~2 minutes).",
      "url": "https://coffeyagencies.com/#quote-form"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Review Your Options",
      "text": "A licensed agent walks you through 2–3 options."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Get Covered",
      "text": "We bind coverage and send ID cards the same day in most cases."
    }
  ]
};

export const HowItWorks = () => {
  return (
    <section className="section-spacing bg-background">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
        </script>
      </Helmet>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <SectionHeading centered className="lg:text-5xl tracking-tight">Getting Covered is Easy</SectionHeading>
          <p className="text-lg text-muted-foreground text-balance">
            Three steps stand between you and peace of mind. Let's make it simple.
          </p>
        </div>

        {/* Steps with Connecting Lines */}
        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <div key={index} className="relative bg-white rounded-xl p-6 shadow-md hover:scale-105 hover:shadow-xl hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300 ease-in-out">
                {/* Step Row */}
                <div className="flex items-start gap-6">
                  {/* Icon Circle with Step Number Badge */}
                  <div className="relative shrink-0">
                    {/* Navy Circle with Icon */}
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary shadow-md">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary text-white text-xs font-bold flex items-center justify-center shadow-sm">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Connecting Line (except for last step) */}
                {!isLast && (
                  <div className="absolute left-7 top-16 w-0.5 h-8 bg-gray-200"></div>
                )}
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
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            asChild
          >
            <Link to="/#quote-form">Get Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
