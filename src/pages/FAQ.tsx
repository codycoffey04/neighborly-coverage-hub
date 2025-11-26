import { PageLayout } from "@/components/shared/PageLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    category: "General Questions",
    questions: [
      {
        question: "What types of insurance do you offer?",
        answer: "We offer comprehensive coverage including auto, home, life, business, health, and specialty insurance. As an independent agency, we work with multiple carriers to find the best coverage for your specific needs.",
      },
      {
        question: "Why should I choose an independent insurance agency?",
        answer: "Independent agencies like Coffey Agencies work for you, not the insurance company. We shop multiple carriers to find the best coverage at competitive prices, and we provide personalized service throughout your policy's lifetime.",
      },
      {
        question: "Do you serve both Alabama and Georgia?",
        answer: "Yes! We have offices in Centre, Alabama and Rome, Georgia. We're licensed to serve customers throughout both states and surrounding areas.",
      },
      {
        question: "How do I get a quote?",
        answer: "Getting a quote is easy! You can call either of our offices, fill out our online contact form, or stop by in person. We'll ask a few questions about your needs and provide you with customized coverage options.",
      },
    ],
  },
  {
    category: "Coverage & Policies",
    questions: [
      {
        question: "How much insurance coverage do I need?",
        answer: "The right amount of coverage depends on your individual situation—assets, liabilities, family needs, and budget. Our experienced agents will work with you to assess your needs and recommend appropriate coverage levels.",
      },
      {
        question: "Can I bundle multiple policies?",
        answer: "Absolutely! Bundling policies like auto and home insurance often results in significant discounts. We'll help you identify all available savings opportunities.",
      },
      {
        question: "What factors affect my insurance rates?",
        answer: "Rates vary based on factors including coverage type, coverage limits, deductibles, your location, driving record (for auto), property characteristics (for home), and more. We'll explain how each factor impacts your premium.",
      },
      {
        question: "Can I change my coverage mid-policy?",
        answer: "Yes, you can typically adjust your coverage during your policy period. Contact us to discuss changes, and we'll help you make modifications that fit your evolving needs.",
      },
    ],
  },
  {
    category: "Claims & Service",
    questions: [
      {
        question: "How do I file a claim?",
        answer: "Contact us immediately when you need to file a claim. We'll guide you through the process, help you contact your insurance carrier, and advocate on your behalf throughout the claims process.",
      },
      {
        question: "Will my rates go up if I file a claim?",
        answer: "It depends on the type and severity of the claim, as well as your claims history. Not all claims result in rate increases. We'll explain how a claim might impact your rates and explore options to minimize increases.",
      },
      {
        question: "What happens if I need to make changes to my policy?",
        answer: "Simply contact our office! Our team can help you add or remove coverage, update your information, add drivers or vehicles, and make any other policy adjustments quickly and easily.",
      },
      {
        question: "Do you offer 24/7 claim support?",
        answer: "While our office hours are Monday–Friday, most of our carrier partners offer 24/7 claim reporting. We'll provide you with all necessary contact information when you purchase your policy.",
      },
    ],
  },
  {
    category: "Payments & Account Management",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept various payment methods including checks, credit/debit cards, and electronic fund transfers. Many carriers also offer automatic payment options for your convenience.",
      },
      {
        question: "Can I pay my premium in installments?",
        answer: "Yes, most policies can be paid monthly, quarterly, semi-annually, or annually. We'll help you choose a payment schedule that fits your budget.",
      },
      {
        question: "How do I access my policy documents?",
        answer: "Contact our office and we'll provide your policy documents via email, mail, or in person. Many carriers also offer online portals where you can access your documents 24/7.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <PageLayout
      title="Frequently Asked Questions"
      description="Find answers to common questions about insurance coverage, claims, and our services."
    >
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {faqs.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">
                  {section.category}
                </h2>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {section.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${sectionIndex}-${faqIndex}`}
                      className="border border-border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-semibold text-foreground pr-4">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pt-2 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8 text-center">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our friendly team is here to help. 
                Reach out and we'll get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg">
                    Contact Us
                  </Button>
                </Link>
                <a href="tel:(256)927-6287">
                  <Button variant="outline" size="lg">
                    Call (256) 927-6287
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default FAQ;
