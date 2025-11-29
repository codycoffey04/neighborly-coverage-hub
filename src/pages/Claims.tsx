import { Phone, CheckCircle, Shield, Camera, AlertTriangle, Car, Home, Key, Building2, Heart, FileText, Clock, Users, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/claims-hero.jpg";

const callUsFirstBenefits = [
  { icon: FileText, text: "We explain what's covered and what to expect" },
  { icon: Users, text: "We help you gather the right documentation" },
  { icon: CheckCircle, text: "We walk you through the reporting process step by step" },
  { icon: Clock, text: "We follow up to make sure your claim is progressing" },
  { icon: Heart, text: "We answer questions throughout — you're not alone in this" }
];

const immediateSteps = [
  { 
    step: 1, 
    title: "Make sure everyone is safe", 
    description: "Your safety comes first. If anyone is injured, call 911 immediately." 
  },
  { 
    step: 2, 
    title: "Call the police if required", 
    description: "For auto accidents, theft, vandalism, or break-ins — always file a police report. You'll need the report number for your claim." 
  },
  { 
    step: 3, 
    title: "Document everything", 
    description: "Take photos and videos of all damage before moving anything or making repairs. The more documentation, the smoother your claim." 
  },
  { 
    step: 4, 
    title: "Prevent further damage", 
    description: "Take reasonable steps to protect your property from additional damage (tarp a roof, board a window). Keep receipts for any emergency repairs." 
  },
  { 
    step: 5, 
    title: "Contact us", 
    description: "Call Coffey Agencies so we can help you report the claim correctly and explain what happens next." 
  }
];

const faqs = [
  {
    question: "Should I file a claim or pay out of pocket?",
    answer: "It depends on the damage amount versus your deductible. If the cost is close to or below your deductible, paying out of pocket may make sense. For larger losses, filing is usually the right move. Call us and we'll help you weigh the options."
  },
  {
    question: "Will my rates go up if I file a claim?",
    answer: "It depends on the type of claim and your history. At-fault auto accidents often result in a surcharge. Weather-related home claims and not-at-fault incidents typically have less impact. We can give you a realistic picture before you decide."
  },
  {
    question: "How long do I have to file a claim?",
    answer: "Report incidents as soon as possible. Delaying can complicate your claim or even jeopardize coverage. When in doubt, call us right away."
  },
  {
    question: "What if I'm not sure whether something is covered?",
    answer: "Call us. We'll review your policy and explain what applies to your situation — before you file anything."
  },
  {
    question: "What happens after I file?",
    answer: "An adjuster will be assigned to your claim. They'll contact you to gather information, assess the damage, and explain next steps. Timeline varies by claim size, but we follow up to keep things moving."
  },
  {
    question: "Can you help me file the claim?",
    answer: "Yes. We can walk you through the process, help you gather documentation, and make sure everything is submitted correctly. That's what we're here for."
  },
  {
    question: "What if I have a claims emergency after hours?",
    answer: "You can file directly through your insurance company's 24/7 claims line — the number is on your policy or ID card. Then call us the next business day so we can follow up."
  },
  {
    question: "Who decides if my claim is approved?",
    answer: "Your insurance company makes all claim decisions. Our role is to help you understand the process, submit accurate information, and advocate for you along the way."
  }
];

const Claims = () => {
  return (
    <>
      <Helmet>
        <title>How to File an Insurance Claim | Coffey Agencies Inc.</title>
        <meta 
          name="description" 
          content="Step-by-step guidance for filing auto, home, renters, condo, or life insurance claims. Call Coffey Agencies first — we'll help you through the process." 
        />
        <link rel="canonical" href="https://coffeyagencies.com/claims" />
        
        {/* FAQPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section 
        className="relative min-h-[600px] flex items-end bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        
        {/* Content */}
        <div className="relative z-10 w-full py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Need to File a Claim? We're Here to Help.
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
              Accidents and losses are stressful. You don't have to figure this out alone — call us first and we'll guide you through every step.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                asChild 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all"
              >
                <a href="tel:+12569276287" aria-label="Call Centre, Alabama office at (256) 927-6287">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Centre Office: (256) 927-6287
                </a>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="bg-white hover:bg-white text-primary border border-primary shadow-sm hover:shadow-md"
              >
                <a href="tel:+17067846511" aria-label="Call Rome, Georgia office at (706) 784-6511">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Rome Office: (706) 784-6511
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>Available during business hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>We stay involved throughout</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>Hablamos Español</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Call Us First */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center">
              Before You Do Anything Else — Call Us
            </h2>
            <p className="text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto text-foreground/80">
              When something happens, your first instinct might be to call the insurance company directly. But calling us first can save you time, confusion, and costly mistakes.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {callUsFirstBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card 
                    key={index}
                    className="border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center h-full">
                      <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-base leading-relaxed">{benefit.text}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Phone Numbers Display */}
            <div className="bg-muted/30 rounded-lg p-8 mb-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">Call Us First</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <a 
                  href="tel:+12569276287" 
                  className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
                  aria-label="Call Centre, Alabama office at (256) 927-6287"
                >
                  Centre, AL: (256) 927-6287
                </a>
                <span className="hidden sm:block text-muted-foreground">|</span>
                <a 
                  href="tel:+17067846511" 
                  className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
                  aria-label="Call Rome, Georgia office at (706) 784-6511"
                >
                  Rome, GA: (706) 784-6511
                </a>
              </div>
            </div>

            {/* After-Hours Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex gap-4">
                <Clock className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">After-Hours Claims</h4>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    If you have an emergency outside business hours, you can file a claim directly through your insurance company's 24/7 claims line. The number is on your policy documents or insurance ID card. Then call us the next business day so we can follow up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What to Do Right Away */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
              Immediate Steps After an Incident
            </h2>

            <div className="space-y-6">
              {immediateSteps.map((step) => (
                <Card 
                  key={step.step}
                  className="border-gray-200 shadow-sm hover:shadow-md transition-all"
                >
                  <CardContent className="p-6 flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center flex-shrink-0 shadow-md">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-primary">{step.title}</h3>
                      <p className="text-base leading-relaxed text-foreground/80">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Auto Insurance Claims */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center">
                <Car className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Filing an Auto Insurance Claim
              </h2>
            </div>

            <div className="bg-muted/20 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold mb-4 text-primary">When to file:</h3>
              <ul className="space-y-2 text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Car accident (at-fault or not-at-fault)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Hit and run</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Theft or vandalism</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Weather damage (hail, flood, falling tree)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Collision with animal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Windshield damage</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted/20 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold mb-4 text-primary">Information you'll need:</h3>
              <ul className="space-y-2 text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Date, time, and location of the incident</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Police report number (if applicable)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Other driver's name, phone, and insurance information</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Photos of damage to all vehicles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Photos of the scene (skid marks, debris, road conditions)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Contact information for any witnesses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Description of what happened</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">What happens next:</h3>
              <p className="text-base leading-relaxed text-foreground/80">
                After you report the claim, an adjuster will contact you — usually within 24-48 hours. They'll review your documentation, assess the damage, and explain your repair options. We stay involved to make sure things move forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Home Insurance Claims */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center">
                <Home className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Filing a Home Insurance Claim
              </h2>
            </div>

            <div className="bg-white rounded-lg p-8 mb-8 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">When to file:</h3>
              <ul className="space-y-2 text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Storm damage (wind, hail, tornado)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Fire or smoke damage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Water damage (burst pipes, roof leaks)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Theft or vandalism</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Fallen trees or branches</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 mb-8 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">Information you'll need:</h3>
              <ul className="space-y-2 text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Date and time of the incident</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Cause of damage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Police or fire department report (if applicable)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Photos and videos of all damage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>List of damaged items and their approximate value</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Receipts for any emergency repairs</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">What happens next:</h3>
              <p className="text-base leading-relaxed text-foreground/80 mb-4">
                An adjuster will schedule an inspection of your property to assess the damage. They'll document everything and provide an estimate for repairs. Don't make permanent repairs until the adjuster has completed their assessment (temporary repairs to prevent further damage are okay and often required).
              </p>
              <p className="text-base leading-relaxed text-foreground/80">
                If your home is uninhabitable, your policy may include Additional Living Expense (ALE) coverage to help with temporary housing costs. We'll help you understand what's available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Renters & Condo Insurance Claims */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center">
                <Key className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Filing a Renters or Condo Insurance Claim
              </h2>
            </div>

            <div className="bg-muted/20 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold mb-4 text-primary">When to file:</h3>
              <ul className="space-y-2 text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Theft of personal belongings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Fire or smoke damage to your belongings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Water damage to personal property</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Vandalism</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Liability incidents (someone injured in your unit)</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted/20 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold mb-4 text-primary">Information you'll need:</h3>
              <ul className="space-y-2 text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Date and time of the incident</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Police report (for theft or vandalism)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Photos of damaged or stolen items</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>List of affected belongings with approximate values</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Receipts or proof of purchase if available</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex gap-4">
                <Building2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Special Note for Condo Owners</h4>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    Your HO-6 policy covers your unit's interior and personal property — not the building's exterior or common areas. If damage involves shared spaces, your HOA's master policy may also be involved. We can help you understand what's covered under each policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Life Insurance Claims */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Filing a Life Insurance Claim
              </h2>
            </div>

            <p className="text-lg leading-relaxed mb-8 text-center text-foreground/80">
              We understand this is a difficult time. We're here to help your family navigate the process with care.
            </p>

            <div className="bg-white rounded-lg p-8 mb-8 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">What beneficiaries need:</h3>
              <ul className="space-y-2 text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Certified copy of the death certificate</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Policy number</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Deceased's full name and date of birth</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Beneficiary identification</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">How to start:</h3>
              <p className="text-base leading-relaxed text-foreground/80">
                Call our office and we'll help you locate the policy details and guide you through the claim submission. Most life insurance claims are processed within 30-60 days once documentation is complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
              Claims Questions We Hear Every Day
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-foreground/80">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We're With You Through the Entire Process
            </h2>
            <p className="text-xl mb-8 leading-relaxed text-white/95">
              Filing a claim can feel overwhelming, but you don't have to do it alone. Call us first — we'll make sure you understand your options and help you every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                asChild 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>

            <p className="text-lg mb-8 text-white/90">
              Or call us:{" "}
              <a href="tel:+12569276287" className="font-bold hover:underline" aria-label="Call Centre, Alabama office at (256) 927-6287">
                (256) 927-6287
              </a>
              {" "}|{" "}
              <a href="tel:+17067846511" className="font-bold hover:underline" aria-label="Call Rome, Georgia office at (706) 784-6511">
                (706) 784-6511
              </a>
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Licensed in AL & GA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Hablamos Español</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Family Owned</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>100+ Years Combined Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-muted/30 py-6">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
            Coverage varies by policy. This page provides general guidance only. Your insurance company makes all claim decisions. Always report incidents promptly and refer to your policy documents for specific terms and conditions.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Claims;