import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    question: "What types of insurance do you offer?",
    answer: "Auto, home, condo, renters, and life insurance across Alabama and Georgia. We also help you bundle policies for maximum savings — up to $600/year when you combine auto and home."
  },
  {
    question: "Do you serve both Alabama and Georgia?",
    answer: "Yes. We're licensed in Alabama (#416438) and Georgia (#149612), with offices in Centre, AL and Rome, GA. We serve families across both states."
  },
  {
    question: "How do I get a quote?",
    answer: "Request a quote online anytime. A licensed agent will call you back within 24 hours to discuss your options — no robots, no runaround."
  },
  {
    question: "Do I need to visit an office?",
    answer: "Nope. Everything can be handled by phone or online. But if you're near Centre or Rome, you're welcome to stop by."
  },
  {
    question: "How fast can I get covered?",
    answer: "Most policies activate the same day you apply. Need proof of insurance for a car purchase or apartment lease? We can usually get it to you within hours."
  },
  {
    question: "How much can I save by bundling?",
    answer: "Bundling home and auto typically saves 15-25% — that's up to $600 annually for most families. One agency, one renewal date, one point of contact."
  },
  {
    question: "What are your office hours?",
    answer: "Centre, AL: Monday-Friday, 8:00 AM – 5:00 PM CST. Rome, GA: Monday-Friday, 8:30 AM – 4:30 PM EST."
  },
  {
    question: "How do I file a claim?",
    answer: "Call us first. We'll guide you through your carrier's claims process and advocate for you until it's resolved. You shouldn't have to fight your insurance company alone."
  },
  {
    question: "What makes Coffey Agencies different?",
    answer: "We answer the phone. We call you back. We explain things in plain English. After 16 years serving Alabama and Georgia families, we've learned that good insurance is really just good service."
  }
];

export const FAQ = () => {
  // Generate FAQPage schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="section-spacing bg-muted/30">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-balance">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Got questions? We've got answers. Here are the most common things customers ask.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border-2 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <div className="text-[0.925rem] text-muted-foreground leading-relaxed border-l-2 border-[#22c55e] pl-4">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            asChild
          >
            <Link to="/contact">Get Your Free Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
