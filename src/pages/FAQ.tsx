import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MessageCircle, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet";
import faqHeroBackground from "@/assets/faq-hero.jpg";

const faqs = [
  {
    category: "General Insurance",
    questions: [
      {
        question: "What types of insurance does Coffey Agencies offer?",
        answer: "We offer auto insurance, home insurance, renters insurance, condo insurance, and life insurance for families across Alabama and Georgia. Whether you need coverage for your vehicle, protection for your home or apartment, or financial security for your loved ones, we can help you find the right policy. Many of our clients bundle multiple policies together to save money and simplify their coverage — bundling auto and home insurance can save up to $600 annually. Contact us for a free quote on any coverage type.",
      },
      {
        question: "Do I need to visit your office to get a quote or make changes to my policy?",
        answer: "No office visit is required. We offer full service by phone, email, and online — you can get a quote, make policy changes, add vehicles, update your address, or ask questions without ever leaving your home. That said, our doors are always open if you prefer face-to-face service. Our Centre, Alabama office is open Monday through Friday, 8:00 AM to 5:00 PM, and our Rome, Georgia office is open Monday through Friday, 8:30 AM to 4:30 PM.",
      },
      {
        question: "How quickly can I get coverage?",
        answer: "In most cases, we can have you covered the same day. Our quote process takes about 15 minutes, and once you've reviewed your options and chosen a policy, coverage can begin immediately. If you need proof of insurance for a vehicle purchase, apartment lease, or mortgage closing, we can provide documentation right away. Just let us know your timeline and we'll make it happen.",
      },
      {
        question: "What's the difference between an exclusive agent and an independent agent?",
        answer: "An exclusive agent represents one insurance company and knows their products inside and out. An independent agent represents multiple companies and shops around on your behalf. Both models have advantages — exclusive agents often have deeper expertise in their carrier's products and may have access to specific discounts or programs, while independent agents can compare across carriers. At Coffey Agencies, we focus on finding you the best coverage within our carrier's options and helping you understand exactly what you're getting.",
      },
      {
        question: "How do I file a claim?",
        answer: "If you need to file a claim, call us first. We'll walk you through the process, help you gather the necessary information, and make sure your claim is submitted correctly. For after-hours emergencies, you can also file directly with your carrier, but we recommend following up with us the next business day so we can track your claim and advocate on your behalf. We're here to support you through the entire claims process — that's what local agents are for.",
      },
    ],
  },
  {
    category: "Auto Insurance",
    questions: [
      {
        question: "What does auto insurance actually cover?",
        answer: "Auto insurance typically includes several types of coverage working together. Liability coverage pays for damage you cause to others. Collision coverage pays to repair your own vehicle after an accident. Comprehensive coverage protects against theft, vandalism, weather damage, and animal strikes. Medical payments or personal injury protection covers medical expenses. Uninsured/underinsured motorist coverage protects you if you're hit by someone without adequate insurance. We'll help you understand each component and choose limits that make sense for your situation.",
      },
      {
        question: "What are the minimum auto insurance requirements in Alabama and Georgia?",
        answer: "Alabama requires minimum liability limits of 25/50/25 — that's $25,000 per person for bodily injury, $50,000 per accident for bodily injury, and $25,000 for property damage. Georgia requires 25/50/25 as well. However, these minimums often aren't enough to fully protect you in a serious accident. We typically recommend higher limits, especially for liability and uninsured motorist coverage, because medical bills and vehicle repairs can easily exceed minimum coverage amounts.",
      },
      {
        question: "Why is uninsured motorist coverage so important?",
        answer: "Alabama and Georgia both have high rates of uninsured drivers — some estimates put it at 15-20% of drivers on the road. If an uninsured driver hits you, your own uninsured motorist coverage pays for your medical bills, lost wages, and vehicle repairs. Without it, you'd be responsible for those costs yourself, even though the accident wasn't your fault. We strongly recommend carrying uninsured motorist coverage equal to your liability limits. It's one of the most valuable protections you can add to your policy.",
      },
      {
        question: "Will my rates go up if I file a claim?",
        answer: "It depends on the type of claim and your claims history. At-fault accidents typically affect your rates more than not-at-fault accidents or comprehensive claims like hail damage or theft. Your overall driving record, how long you've been with your carrier, and whether you have accident forgiveness also factor in. We're happy to review your specific situation and give you honest guidance about what to expect before you file a claim.",
      },
      {
        question: "How can I lower my auto insurance premium?",
        answer: "Several factors can help reduce your premium. Bundling auto with home or renters insurance often provides the biggest discount — up to $600 per year. Maintaining a clean driving record, taking defensive driving courses, and keeping good credit also help. Ask us about available discounts for safe drivers, good students, military members, and more. We'll review all the options and make sure you're getting every discount you qualify for.",
      },
    ],
  },
  {
    category: "Home Insurance",
    questions: [
      {
        question: "What does home insurance cover?",
        answer: "Standard home insurance covers your dwelling (the structure itself), other structures like detached garages or fences, personal property inside your home, liability if someone is injured on your property, and additional living expenses if you're displaced by a covered loss. However, policies have limits, exclusions, and deductibles that vary. Flood and earthquake damage typically require separate policies. We'll review your policy with you so you understand exactly what's covered and identify any gaps in your protection.",
      },
      {
        question: "Why is home insurance more expensive in Alabama and Georgia?",
        answer: "Both states face significant weather risks that drive up claims costs. Tornadoes, hail, hurricanes (along the coast), severe thunderstorms, and wind damage are common in our region. Insurance companies price policies based on risk, and our region sees more weather-related claims than many parts of the country. Building costs have also increased, making it more expensive to repair or rebuild homes. We help you balance adequate coverage with affordability by reviewing your options and finding available discounts.",
      },
      {
        question: "What's the difference between replacement cost and actual cash value?",
        answer: "Replacement cost pays to repair or replace your property with new items of similar quality. Actual cash value pays the depreciated value — what your property was worth at the time of the loss, accounting for age and wear. For example, if your 10-year-old roof is damaged, replacement cost would pay for a new roof, while actual cash value would pay for a roof that's already 10 years old (much less money). We typically recommend replacement cost coverage for both your dwelling and personal property whenever possible.",
      },
      {
        question: "Do I need flood insurance?",
        answer: "Standard home insurance does not cover flood damage. If you're in a FEMA-designated flood zone, your mortgage lender will require flood insurance. But floods can happen anywhere — over 20% of flood claims come from properties outside high-risk zones. Given Alabama and Georgia's heavy rainfall and river systems, we recommend considering flood insurance even if it's not required. It's a separate policy through the National Flood Insurance Program or private insurers, and we can help you get a quote.",
      },
      {
        question: "How do I make sure I have enough coverage?",
        answer: "Your dwelling coverage should be based on the cost to rebuild your home — not the market value or purchase price. Construction costs have risen significantly, so policies written a few years ago may no longer provide adequate coverage. We recommend reviewing your policy annually and updating your coverage if you've made improvements, added square footage, or if building costs in your area have increased. We'll help you evaluate your current coverage and make recommendations.",
      },
    ],
  },
  {
    category: "Renters & Condo Insurance",
    questions: [
      {
        question: "Do I really need renters insurance?",
        answer: "Yes. Your landlord's insurance covers the building, but it doesn't cover your personal belongings — furniture, electronics, clothing, and everything else you own. If there's a fire, theft, or water damage, you'd have to replace everything out of pocket. Renters insurance also provides liability protection if someone is injured in your apartment and covers additional living expenses if you're temporarily displaced. It's surprisingly affordable — often $15-30 per month — and provides significant peace of mind.",
      },
      {
        question: "What's the difference between renters insurance and condo insurance?",
        answer: "Renters insurance covers your personal belongings and liability, but not the structure — your landlord owns that. Condo insurance (often called HO-6) covers your personal belongings, liability, and also the interior of your unit — walls, floors, fixtures, cabinets, and any improvements you've made. Your condo association's master policy covers common areas and the building exterior, but there's often a gap between where their coverage ends and yours begins. We'll help you understand what your HOA policy covers so your condo insurance fills the gaps.",
      },
      {
        question: "How much renters or condo insurance do I need?",
        answer: "Start by estimating the value of everything you own — furniture, electronics, appliances, clothing, jewelry, and other personal items. Most people underestimate this; a typical apartment can easily contain $20,000-50,000 worth of belongings. For liability coverage, we typically recommend at least $100,000, though higher limits are available and affordable. For condo owners, you'll also need dwelling coverage for interior improvements and any deductible your HOA might pass through to you after a claim.",
      },
    ],
  },
  {
    category: "Life Insurance",
    questions: [
      {
        question: "How much life insurance do I need?",
        answer: "A common guideline is 10-12 times your annual income, but the right amount depends on your specific situation. Consider your mortgage balance, other debts, future expenses like college tuition, and how many years of income replacement your family would need. We'll help you calculate a number that makes sense based on your family's needs, existing assets, and budget. Having some coverage is almost always better than having none.",
      },
      {
        question: "What's the difference between term and whole life insurance?",
        answer: "Term life insurance provides coverage for a specific period — typically 10, 20, or 30 years — and is significantly more affordable. It's pure protection with no cash value. Whole life insurance provides coverage for your entire life and builds cash value over time, but premiums are much higher. Most families find term insurance gives them the most protection for their budget. We can explain both options and help you decide which makes sense for your situation and goals.",
      },
      {
        question: "Do I need life insurance if I'm single with no dependents?",
        answer: "It depends. If someone would be responsible for your debts — a co-signer on loans, for example — life insurance could protect them. If you want to leave money to a parent, sibling, or charity, life insurance can do that. There's also a financial benefit to buying life insurance while you're young and healthy: you lock in lower rates. If you think you'll want coverage in the future, buying now could save money in the long run.",
      },
    ],
  },
  {
    category: "Billing & Policy Management",
    questions: [
      {
        question: "How can I make a payment?",
        answer: "You can pay online through your carrier's customer portal, by phone, by mail, or through automatic bank draft. Many of our clients prefer automatic payments because it ensures you never miss a due date and may qualify you for additional discounts. If you need help setting up online access or automatic payments, contact our office and we'll walk you through it.",
      },
      {
        question: "Can I change my coverage mid-policy?",
        answer: "Yes. Life changes — you buy a new car, move to a new address, add a driver, finish paying off your mortgage — and your coverage should change with it. Contact us anytime to update your policy. Some changes take effect immediately, others at your next renewal. We'll make sure your coverage stays current with your life.",
      },
      {
        question: "What happens if I miss a payment?",
        answer: "If you miss a payment, you'll typically receive a notice and have a grace period to pay before your policy lapses. The length of the grace period depends on your carrier and state regulations. If your policy does lapse, you may need to go through underwriting again to reinstate coverage, which could affect your rates. If you're having trouble making a payment, contact us before the due date — we may be able to help you find options.",
      },
    ],
  },
];

const FAQ = () => {
  // Flatten all FAQ questions for schema
  const allQuestions = faqs.flatMap(section => section.questions);
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allQuestions.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Coffey Agencies</title>
        <meta name="description" content="Get answers to common insurance questions about auto, home, renters, condo, and life insurance in Alabama and Georgia." />
        <link rel="canonical" href="https://coffeyagencies.com/faq" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <Header />

      {/* Custom Hero Section with Background Image */}
      <section 
        className="relative min-h-[500px] flex items-end bg-cover bg-center"
        style={{ backgroundImage: `url(${faqHeroBackground})` }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        
        {/* Content */}
        <div className="relative z-10 w-full py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center">
              {/* Breadcrumbs */}
              <nav className="mb-6">
                <ol className="flex justify-center gap-2 text-sm text-white/80">
                  <li><Link to="/" className="hover:text-white">Home</Link></li>
                  <li>/</li>
                  <li className="text-white">FAQ</li>
                </ol>
              </nav>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-6 drop-shadow-md">
                Insurance Questions, Answered
              </p>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm">Plain English answers</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm">Expert local guidance</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm">Real help when you need it</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Intro paragraph */}
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Get clear answers to common insurance questions. Can't find what you're looking for? Contact us — we're happy to help.
          </p>

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
                      <AccordionTrigger className="text-left hover:no-underline py-5">
                        <span className="font-semibold text-lg text-foreground pr-4">
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
                We're here to help. Contact us by phone or email, or stop by one of our offices.
              </p>
              <Link to="/contact">
                <Button size="lg">
                  Contact Us
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FAQ;
