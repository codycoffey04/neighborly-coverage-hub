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
    answer: "Coffey Agencies offers comprehensive auto insurance, homeowners insurance, condo insurance (HO-6), renters insurance, life insurance, and motorcycle insurance throughout Alabama and Georgia. We specialize in helping families find the right coverage at competitive rates, whether you need basic liability protection or comprehensive policies with higher limits. Our team can also help you bundle multiple policies together—combining auto and home insurance typically saves 15-25%, which translates to up to $600 per year for most families while simplifying your coverage with one renewal date and one point of contact."
  },
  {
    question: "Do you serve both Alabama and Georgia?",
    answer: "Yes, Coffey Agencies is fully licensed and actively serves families throughout both Alabama and Georgia. We hold Alabama Resident Agency License #416438 and Georgia Non-Resident Agency License #149612. Our Centre, Alabama office serves clients across the state including Birmingham, Montgomery, Mobile, Auburn, and surrounding communities. Our Rome, Georgia office covers the Atlanta metro area, North Georgia, and cities like Alpharetta, Cartersville, and Lawrenceville. Whether you live in rural Cherokee County or metro Atlanta, we provide the same personalized service through phone, email, or in-person visits."
  },
  {
    question: "How do I get a quote?",
    answer: "Getting a quote from Coffey Agencies is simple and takes just a few minutes. You can request a quote online through our website anytime—day or night—by filling out a brief form with your basic information and coverage needs. A licensed insurance agent will personally call you back within 24 hours during business hours to discuss your options, answer questions, and provide accurate pricing. There are no automated phone trees or chatbots—you'll speak with a real person who can explain your coverage in plain English and help you make an informed decision about protecting your family."
  },
  {
    question: "Do I need to visit an office?",
    answer: "No office visit is required. We've designed our service model around convenience, so everything can be handled by phone, email, or through our website. You can get quotes, purchase policies, make changes to your coverage, and even start claims without ever leaving your home. That said, if you prefer face-to-face service or happen to be near one of our locations, you're always welcome to stop by. Our Centre, Alabama office is located at 1913 W Main Street, and our Rome, Georgia office is at 1703 Turner McCall Blvd SE. Our friendly team is happy to meet with you in person."
  },
  {
    question: "How fast can I get covered?",
    answer: "Most insurance policies can be activated the same day you apply, often within just a few hours of completing your application. If you need proof of insurance quickly—for example, to finalize a car purchase at the dealership, satisfy a lender requirement, or provide documentation to a landlord before signing a lease—we can typically issue your insurance ID cards and declarations page within hours. Our team understands that life doesn't always wait, so we prioritize fast turnaround times while still ensuring you have the right coverage for your situation. Just let us know your timeline and we'll work to meet it."
  },
  {
    question: "How much can I save by bundling?",
    answer: "Bundling your home and auto insurance together typically saves 15-25% on both policies, which translates to up to $600 annually for most Alabama and Georgia families. Beyond the dollar savings, bundling offers practical benefits: one agency handling all your coverage, one renewal date to remember, one point of contact when you have questions, and streamlined billing. You can also bundle renters insurance with auto, add motorcycle coverage to an existing policy, or combine condo insurance with your other lines. We'll price your coverage both ways—bundled and separate—so you can see exactly how much you'll save."
  },
  {
    question: "What are your office hours?",
    answer: "Our Centre, Alabama office is open Monday through Friday from 8:00 AM to 5:00 PM Central Time. Our Rome, Georgia office is open Monday through Friday from 8:30 AM to 4:30 PM Eastern Time. While we're closed on weekends and major holidays, you can request quotes online anytime and we'll respond the next business day. If you have a claims emergency outside business hours, you can file directly through your insurance company's 24/7 claims line—the number is on your policy documents or insurance ID card—and then contact us the next business day so we can follow up and advocate on your behalf."
  },
  {
    question: "How do I file a claim?",
    answer: "When you need to file a claim, call our office first before contacting the insurance company directly. Our team will guide you through the entire claims process step by step: we'll explain what's covered under your policy, help you gather the necessary documentation (photos, police reports, receipts), walk you through reporting the claim correctly, and follow up to make sure your claim is progressing. We act as your advocate throughout the process, answering questions and helping resolve any issues that arise. You shouldn't have to navigate the claims process alone or fight with your insurance company—that's what we're here for."
  },
  {
    question: "What makes Coffey Agencies different?",
    answer: "What sets Coffey Agencies apart is simple: we answer the phone. We call you back. We explain things in plain English without industry jargon. After 16 years serving Alabama and Georgia families, we've learned that good insurance is really just good service. We're not a call center or a website—we're real people who live in the same communities we serve. When you call, you'll reach someone who knows your name and your policy. When you have a claim, we advocate for you until it's resolved. We believe insurance should be personal, straightforward, and local—and that's exactly what we deliver every day."
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
                className="bg-background border-2 rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
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
