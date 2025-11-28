import { Helmet } from "react-helmet";
import { PageLayout } from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Home, Building2, Sofa, BedDouble, Shield, Heart, CloudRain, Droplets, Hammer, Zap, Phone, Quote, Star, FileCheck, CreditCard, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const coverageTypes = [
  {
    icon: Home,
    title: "Dwelling (Coverage A)",
    description: "Pays to rebuild the home itself after a covered loss. We estimate replacement cost—not market value—so materials, labor, and debris removal are factored in."
  },
  {
    icon: Building2,
    title: "Other Structures (B)",
    description: "Covers detached items like fences, sheds, and detached garages. Limits are often a percentage of Coverage A; we can adjust if you've added outbuildings."
  },
  {
    icon: Sofa,
    title: "Personal Property (C)",
    description: "Protects belongings (furniture, clothing, electronics). Choose Replacement Cost (RCV) to avoid depreciation; Actual Cash Value (ACV) lowers cost but pays less at claim time."
  },
  {
    icon: BedDouble,
    title: "Loss of Use (D)",
    description: "Helps with temporary living expenses if your home is uninhabitable after a covered loss—think hotels, short-term rentals, meals, and extra mileage."
  },
  {
    icon: Shield,
    title: "Personal Liability (E)",
    description: "Protects you if someone is injured or you cause property damage away from home. Higher limits help safeguard wages and savings."
  },
  {
    icon: Heart,
    title: "Medical Payments (F)",
    description: "Pays small medical bills for guests hurt on your property, regardless of fault. It's a goodwill coverage that can help minor injuries go smoothly."
  },
  {
    icon: CloudRain,
    title: "Wind/Hail Deductibles",
    description: "In storm-exposed areas, wind or named-storm deductibles may apply, sometimes as a flat dollar amount or a percentage of the dwelling limit. We'll model choices you can afford to pay tomorrow."
  },
  {
    icon: Droplets,
    title: "Water Backup",
    description: "Adds coverage for damage from backed-up sewers or drains and sump pump overflows—typically not covered by default. Consider adding if you have a basement or low-lying plumbing."
  },
  {
    icon: Hammer,
    title: "Roof Age & Surfaces",
    description: "Older roofs may get ACV settlements for wind/hail unless upgraded to RCV. Disclosing roof age and materials upfront helps us price accurately and avoid surprises."
  }
];

const savingsTips = [
  {
    icon: FileCheck,
    title: "Bundle home & auto",
    description: "One account, fewer headaches, and meaningful multi-policy savings. We'll price both ways so you can see the difference."
  },
  {
    icon: Shield,
    title: "Protective devices",
    description: "Monitored security systems, smoke/CO detectors, water shut-off valves, and leak sensors can reduce loss risk—and may qualify for discounts."
  },
  {
    icon: Home,
    title: "Newer roof",
    description: "Updating an aging roof can improve insurability and pricing. Document materials and install date; some carriers favor impact-resistant shingles."
  },
  {
    icon: CreditCard,
    title: "Autopay & paperless",
    description: "Set-and-forget billing helps avoid lapses and can trim premium. Paperless delivery keeps everything in one place."
  },
  {
    icon: DollarSign,
    title: "Right-size deductibles",
    description: "Raising deductibles lowers premium, but keep them at a level you could comfortably pay after a storm. We'll model a few options."
  }
];

const faqItems = [
  {
    question: "How do wind/hail or named-storm deductibles work?",
    answer: "These special deductibles apply to wind or hail claims (and sometimes only to named storms). They can be a fixed dollar amount or a percentage of your dwelling limit. Higher deductibles cut premium but raise what you'll owe after a storm. We'll show side-by-side options and help you pick an amount that balances savings with cash-on-hand."
  },
  {
    question: "What's the difference between RCV and ACV for personal property?",
    answer: "Replacement Cost (RCV) pays what it costs to replace items with new ones of similar kind and quality (subject to limits). Actual Cash Value (ACV) subtracts depreciation for age and wear. RCV usually costs more but pays better at claim time. We'll price both if you want to compare."
  },
  {
    question: "What documents do I need for a home quote?",
    answer: "Your property address, year built, roof age/material, square footage, and details on updates (roof, plumbing, electrical, HVAC). Prior insurance info and recent claim dates help us price accurately. Photos of the exterior and roof are useful but not required."
  },
  {
    question: "Which factors most affect home insurance price?",
    answer: "Replacement cost, roof age/material, claim history, credit-based factors, location-driven weather exposure, and the deductibles/endorsements you select. We can often soften price by bundling and right-sizing deductibles—without hollowing out coverage."
  },
  {
    question: "Is water backup covered automatically?",
    answer: "Typically no. Water or sewer backup and sump overflow are usually excluded unless you add a specific endorsement with its own limit and deductible. If you have a basement or older plumbing, consider it seriously."
  },
  {
    question: "Will roof age change how a claim is paid?",
    answer: "It can. Some policies pay ACV (depreciated value) for older roofs on wind/hail claims, while newer roofs or certain materials may qualify for RCV. Accurate roof details let us align expectations before a storm, not after."
  }
];

const testimonials = [
  {
    name: "Teresa Gardiner",
    location: "Centre, AL",
    text: "Lexi was very patient and helpful when I stopped by yesterday to ask multiple questions. She is truly an asset to your office!",
    rating: 5
  },
  {
    name: "Steve Smith",
    location: "Centre, AL",
    text: "Customer service at Cody Coffey's Centre office is amazing, a lost art, a total delight. Give them 1000 out of 100 :). Friendly, knowledgeable. So grateful to have found them when moving to a new town.",
    rating: 5
  },
  {
    name: "Ricky Salas",
    location: "Rome, GA",
    text: "I was with this agency for several years and had nothing but positive experiences with Cody and the other agents. When I had to move out of state, Kathy made it incredibly easy to end my Georgia policy and settle things up. I can't recommend them enough.",
    rating: 5
  }
];

const alabamaCities = [
  { name: "Centre", slug: "centre-al" },
  { name: "Birmingham", slug: "birmingham-al" },
  { name: "Montgomery", slug: "montgomery-al" },
  { name: "Mobile", slug: "mobile-al" },
  { name: "Dothan", slug: "dothan-al" },
  { name: "Auburn", slug: "auburn-al" },
  { name: "Phenix City", slug: "phenix-city-al" },
  { name: "Foley", slug: "foley-al" },
  { name: "Troy", slug: "troy-al" },
  { name: "Enterprise", slug: "enterprise-al" },
  { name: "Trussville", slug: "trussville-al" }
];

const georgiaCities = [
  { name: "Rome", slug: "rome-ga" },
  { name: "Atlanta", slug: "atlanta-ga" },
  { name: "Lawrenceville", slug: "lawrenceville-ga" },
  { name: "Duluth", slug: "duluth-ga" },
  { name: "Cartersville", slug: "cartersville-ga" },
  { name: "Calhoun", slug: "calhoun-ga" },
  { name: "Cedartown", slug: "cedartown-ga" },
  { name: "Summerville", slug: "summerville-ga" },
  { name: "Suwanee", slug: "suwanee-ga" },
  { name: "Alpharetta", slug: "alpharetta-ga" },
  { name: "Powder Springs", slug: "powder-springs-ga" },
  { name: "Rockmart", slug: "rockmart-ga" },
  { name: "Forsyth", slug: "forsyth-ga" }
];

const HomeInsurance = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://coffeyagencies.com/services/home-insurance#service",
    "serviceType": "Home Insurance",
    "provider": {
      "@id": "https://coffeyagencies.com/#organization"
    },
    "areaServed": [
      { "@id": "https://coffeyagencies.com/centre-al#place" },
      { "@id": "https://coffeyagencies.com/rome-ga#place" },
      { "@id": "https://coffeyagencies.com/birmingham-al#place" },
      { "@id": "https://coffeyagencies.com/montgomery-al#place" },
      { "@id": "https://coffeyagencies.com/mobile-al#place" },
      { "@id": "https://coffeyagencies.com/dothan-al#place" },
      { "@id": "https://coffeyagencies.com/auburn-al#place" },
      { "@id": "https://coffeyagencies.com/enterprise-al#place" },
      { "@id": "https://coffeyagencies.com/foley-al#place" },
      { "@id": "https://coffeyagencies.com/phenix-city-al#place" },
      { "@id": "https://coffeyagencies.com/troy-al#place" },
      { "@id": "https://coffeyagencies.com/trussville-al#place" },
      { "@id": "https://coffeyagencies.com/atlanta-ga#place" },
      { "@id": "https://coffeyagencies.com/alpharetta-ga#place" },
      { "@id": "https://coffeyagencies.com/calhoun-ga#place" },
      { "@id": "https://coffeyagencies.com/cartersville-ga#place" },
      { "@id": "https://coffeyagencies.com/cedartown-ga#place" },
      { "@id": "https://coffeyagencies.com/duluth-ga#place" },
      { "@id": "https://coffeyagencies.com/forsyth-ga#place" },
      { "@id": "https://coffeyagencies.com/lawrenceville-ga#place" },
      { "@id": "https://coffeyagencies.com/powder-springs-ga#place" },
      { "@id": "https://coffeyagencies.com/rockmart-ga#place" },
      { "@id": "https://coffeyagencies.com/summerville-ga#place" },
      { "@id": "https://coffeyagencies.com/suwanee-ga#place" }
    ],
    "description": "Complete homeowners insurance protection covering dwelling, personal property, liability, and additional living expenses for Alabama and Georgia properties.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <Helmet>
        <title>Home Insurance in Alabama & Georgia | Coffey Agencies</title>
        <meta name="description" content="Clear coverage built around your roof, rebuild cost, and risk. Get home insurance with local expertise in Alabama and Georgia." />
        <link rel="canonical" href="https://coffeyagencies.com/services/home-insurance" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <PageLayout
        title="Home Insurance in Alabama & Georgia"
        description="Clear coverage built around your roof, rebuild cost, and risk"
      >
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Home Insurance in Alabama & Georgia
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Clear coverage built around your roof, rebuild cost, and risk. We price multiple coverage levels side-by-side and explain them in plain English. Expect straight talk on dwelling limits, deductibles, and how roof age affects claims.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" asChild>
                  <a href="#quote-form">Get Your Quote</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+12569276287" aria-label="Call Centre, Alabama office at (256) 927-6287">
                    <Phone className="mr-2 h-5 w-5" />
                    Alabama: (256) 927-6287
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+17067846511" aria-label="Call Rome, Georgia office at (706) 784-6511">
                    <Phone className="mr-2 h-5 w-5" />
                    Georgia: (706) 784-6511
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>Quotes in minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-primary" />
                  <span>Verified rebuild costs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Live, local team</span>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <p className="text-muted-foreground">
                Build a policy that mirrors real-world risk. Bundle with{" "}
                <Link to="/services/auto-insurance" className="text-primary hover:underline">
                  auto insurance
                </Link>{" "}
                or align a condo with proper walls-in coverage via{" "}
                <Link to="/services/condo-insurance" className="text-primary hover:underline">
                  condo insurance
                </Link>{" "}
                for additional savings and cleaner billing.
              </p>
            </div>
          </div>
        </section>

        {/* Coverage Types Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Build a Policy That Mirrors Real-World Risk
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coverageTypes.map((coverage, index) => {
                  const Icon = coverage.icon;
                  return (
                    <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col h-full">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-3">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-lg">{coverage.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm leading-relaxed">
                          {coverage.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Regional Considerations */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Severe Storms, Tornado Tracks, and Occasional Tropical Impacts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Alabama and Georgia see spring and summer thunderstorms, tornado outbreaks, and, at times, tropical remnants that push intense rain and wind inland. Roofing and siding take the brunt, while lightning and surge can affect electronics. We tailor wind/hail deductibles, verify roof details, and confirm whether your personal property is covered at RCV or ACV so your plan matches the realities of our region.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Prefer a local touch? Many homeowners we serve are near Birmingham 35242 and Lawrenceville 30044, but our quoting process works anywhere in Alabama or Georgia.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ways to Save Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ways to Reduce Cost Without Underinsuring
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savingsTips.map((tip, index) => {
                  const Icon = tip.icon;
                  return (
                    <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col h-full">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-3">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-lg">{tip.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm leading-relaxed">
                          {tip.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Home Insurance Questions We Answer Every Day
                </h2>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold pr-4">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  What Our Clients Say
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col h-full">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Quote className="h-5 w-5 text-primary" />
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col h-full">
                      <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                        "{testimonial.text}"
                      </p>
                      <div className="mt-auto">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/reviews">
                Read All Reviews →
              </Link>
            </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Home Insurance Across Alabama & Georgia
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Alabama</h3>
                  <div className="flex flex-wrap gap-3">
                    {alabamaCities.map((city) => (
                      <Link
                        key={city.slug}
                        to={`/${city.slug}`}
                        className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Georgia</h3>
                  <div className="flex flex-wrap gap-3">
                    {georgiaCities.map((city) => (
                      <Link
                        key={city.slug}
                        to={`/${city.slug}`}
                        className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-center text-muted-foreground">
                Don't see your city?{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  Contact us
                </Link>{" "}
                — we serve all of Alabama and Georgia.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Protect Your Home?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get a quote that fits your home, roof, and budget.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center gap-2">
                      <Phone className="h-5 w-5" />
                      Alabama
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="tel:+12569276287"
                      aria-label="Call Centre, Alabama office at (256) 927-6287"
                      className="text-2xl font-bold text-primary hover:underline"
                    >
                      (256) 927-6287
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center gap-2">
                      <Phone className="h-5 w-5" />
                      Georgia
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="tel:+17067846511"
                      aria-label="Call Rome, Georgia office at (706) 784-6511"
                      className="text-2xl font-bold text-primary hover:underline"
                    >
                      (706) 784-6511
                    </a>
                  </CardContent>
                </Card>
              </div>

              <Button size="lg" className="text-lg px-8" asChild>
                <a href="#quote-form">Get Your Free Quote</a>
              </Button>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default HomeInsurance;