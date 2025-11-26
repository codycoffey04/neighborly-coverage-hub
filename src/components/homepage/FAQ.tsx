import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of insurance do you offer?",
    answer: "We offer Auto Insurance, Home Insurance, Renters Insurance, Condo Insurance, and Life Insurance. Our team can help you find the right coverage for your specific needs across all these categories."
  },
  {
    question: "Are you licensed in both Alabama and Georgia?",
    answer: "Yes! Coffey Agencies is fully licensed and authorized to sell insurance in both Alabama and Georgia. We have physical offices in Centre, AL and Rome, GA to serve you locally."
  },
  {
    question: "How quickly can I get a quote?",
    answer: "You can get a quote in as little as 15 minutes! Fill out our online form, give us a call, or stop by one of our offices. We'll gather the necessary information and present you with competitive options from top-rated carriers."
  },
  {
    question: "Do I have to come into an office, or can I do everything online?",
    answer: "It's up to you! We offer the convenience of online quotes and digital policy management, but we also love meeting customers in person at our Centre or Rome offices. Choose what works best for your schedule and preferences."
  },
  {
    question: "What makes Coffey Agencies different from other insurance companies?",
    answer: "We're a local, family-owned agency with over 16 years of experience serving Alabama and Georgia. Unlike big corporate insurers, you'll always talk to real people who know your community and genuinely care about finding you the best coverage at the best price."
  },
  {
    question: "Can you help me if I have a claim?",
    answer: "Absolutely. We don't just sell policies—we're here for you when you need us most. Our team will guide you through the claims process, answer your questions, and work with your insurance carrier to ensure a smooth experience."
  },
  {
    question: "How do I know if I have the right amount of coverage?",
    answer: "That's what we're here for! During your quote, we'll review your situation, discuss your assets and risks, and recommend coverage levels that protect you without overpaying. We'll explain everything in plain English so you can make an informed decision."
  },
  {
    question: "Do you work with multiple insurance carriers?",
    answer: "Yes! As an independent agency, we partner with multiple top-rated insurance carriers. This means we can shop around on your behalf to find you the best coverage at the most competitive price—not just one option."
  },
  {
    question: "What are your office hours?",
    answer: "Our Centre, AL office is open Monday-Friday, 8:30 AM - 5:00 PM. Our Rome, GA office is open Monday-Friday, 9:00 AM - 5:30 PM. You can also reach us by phone or submit a quote request online anytime."
  },
  {
    question: "Can I bundle my auto and home insurance?",
    answer: "Yes! Bundling your auto and home insurance is one of the easiest ways to save money. We'll help you find multi-policy discounts and streamline your coverage under one convenient plan."
  },
  {
    question: "How much does insurance cost?",
    answer: "Insurance costs vary based on factors like your coverage needs, location, driving record, and more. The best way to get an accurate price is to request a free quote—we'll work with you to find coverage that fits your budget."
  },
  {
    question: "What if I need to make changes to my policy?",
    answer: "Just give us a call or stop by one of our offices. Our team can update your policy, add or remove coverage, adjust payment plans, and answer any questions you have. We make policy changes quick and easy."
  }
];

export const FAQ = () => {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-balance">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Got questions? We've got answers. Here are some of the most common questions we hear from customers like you.
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
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <button className="btn-primary px-6 py-3 rounded-lg font-semibold">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};
