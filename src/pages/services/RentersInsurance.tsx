import { PageLayout } from "@/components/shared/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Sofa, Shield, BedDouble, Heart, Zap, Home as HomeIcon, Star, Phone, MapPin, ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const coverageTypes = [
  {
    icon: Sofa,
    title: "Personal Property",
    description: "Furniture, electronics, clothing, appliances, and personal belongings. Coverage typically ranges from $15,000 to $50,000. Choose replacement cost coverage to get full value for new items, not depreciated value."
  },
  {
    icon: Shield,
    title: "Personal Liability",
    description: "Protects you if someone is injured in your rental or you accidentally damage property. Standard coverage is $100,000, but we recommend $300,000 for better protection—the added cost is just a few dollars monthly."
  },
  {
    icon: BedDouble,
    title: "Loss of Use",
    description: "Pays for hotel stays and additional living expenses if your rental becomes uninhabitable. Typically 20-30% of your personal property coverage (about $9,000 on a $30,000 policy)."
  },
  {
    icon: Heart,
    title: "Medical Payments",
    description: "Covers medical bills if a guest is injured in your rental, regardless of fault. Usually $1,000-$5,000 per person, helping avoid potential lawsuits for minor injuries."
  }
];

const savingsTips = [
  {
    title: "Bundle with Auto Insurance",
    description: "Save 15-25% on both policies by combining renters and auto insurance. Most customers qualify for rates as low as $8-19/month on renters coverage when bundled."
  },
  {
    title: "High-Value Item Scheduling",
    description: "Schedule expensive jewelry, electronics, or collections separately at appraised value for full coverage beyond standard sub-limits (typically $1,500 for jewelry)."
  },
  {
    title: "Replacement Cost Coverage",
    description: "Upgrade from actual cash value to replacement cost coverage for just a few dollars monthly—pays full replacement value without depreciation."
  },
  {
    title: "Water Backup Coverage",
    description: "Add protection against sewer or drain backup damage, particularly relevant in older Alabama and Georgia rental properties."
  },
  {
    title: "Right-Size Your Deductible",
    description: "Balance premium savings with affordable out-of-pocket costs. We'll model multiple deductible options ($500 or $1,000) to find your sweet spot."
  }
];

const faqs = [
  {
    question: "How do I qualify for $8/month renters insurance?",
    answer: "The $8/month rate is available when you bundle renters insurance with your auto policy. Most customers pay $15-30/month depending on coverage amount, location, and bundling. Rates vary based on your ZIP code, coverage limits ($15K-$50K personal property), deductible choice ($500 or $1,000), and multi-policy discounts (15-25% savings when bundled with auto insurance)."
  },
  {
    question: "What does renters insurance cover in Alabama and Georgia?",
    answer: "Standard renters insurance covers personal property (furniture, electronics, clothing) from fire, theft, vandalism, wind/hail, and water damage from burst pipes. It includes personal liability protection if someone is injured in your rental, and loss of use coverage for temporary housing if your rental becomes uninhabitable. Tornado wind damage is covered, but flood damage requires a separate flood policy."
  },
  {
    question: "Is renters insurance required in Alabama or Georgia?",
    answer: "Neither Alabama nor Georgia requires renters insurance by law. However, many landlords require it as a lease condition. Even if not required, renters insurance is highly recommended—about 50% of renters lack coverage and risk significant financial loss. The average renters insurance claim in Alabama and Georgia ranges from $3,000-$5,000."
  },
  {
    question: "Does renters insurance cover tornado damage in Alabama?",
    answer: "Yes, renters insurance covers wind damage from tornadoes, which is crucial since Alabama ranks in the top 10 states for tornado activity and experiences peak season from March through May. Your personal property and additional living expenses are covered if a tornado damages your rental unit. However, flood damage from tornado-related flooding requires separate flood insurance."
  },
  {
    question: "How much can I save by bundling renters and auto insurance?",
    answer: "Bundling renters and auto insurance typically saves 15-25% on both policies. For example, if you pay $15/month for renters and $90/month for auto separately, bundling could save approximately $150-200 per year. Many customers qualify for rates as low as $8-19/month on renters coverage when bundled with auto insurance."
  },
  {
    question: "What's the difference between actual cash value and replacement cost coverage?",
    answer: "Actual cash value pays the depreciated value of your belongings (what they're worth today), while replacement cost coverage pays to replace items with new ones of similar quality. Replacement cost coverage costs slightly more but provides better protection. For example, a 5-year-old laptop might have an actual cash value of $300, but replacement cost would pay $800 for a comparable new model."
  },
  {
    question: "Does my landlord's insurance cover my belongings?",
    answer: "No. Your landlord's insurance only covers the building structure, not your personal belongings or liability. If there's a fire, theft, or storm damage, you'll have to replace everything out-of-pocket without renters insurance. Renters insurance is the only way to protect your furniture, electronics, clothing, and other personal property."
  },
  {
    question: "How quickly can I get renters insurance coverage?",
    answer: "Most renters insurance policies can begin immediately upon approval. Our digital process means you can receive a quote within minutes and have active coverage the same day. We serve Alabama and Georgia residents from our Centre, AL and Rome, GA offices with complete online service—no office visit required."
  }
];

const testimonials = [
  {
    name: "Teresa Gardiner",
    text: "Lexi was very patient and helpful when I stopped by yesterday to ask multiple questions. She is truly an asset to your office!"
  },
  {
    name: "Steve Smith",
    text: "Customer service at Cody Coffey's Center office is amazing, a lost art, a total delight. Give them 1000 out of 100 :). Friendly, knowledgeable. So grateful to have found them when moving to a new town."
  },
  {
    name: "Ricky Salas",
    text: "I was with this agency for several years and had nothing but positive experiences with Cody and the other agents. When I had to move out of state, Kathy made it incredibly easy to end my Georgia policy and settle things up. I can't recommend them enough."
  }
];

const crossSellServices = [
  {
    title: "Auto Insurance",
    description: "Bundle with renters insurance and save 15-25% on both policies. Complete protection for your vehicles across Alabama and Georgia.",
    link: "/services/auto-insurance"
  },
  {
    title: "Life Insurance",
    description: "Protect your family's financial future with affordable term or whole life coverage starting at $25/month for $500K protection.",
    link: "/services/life-insurance"
  },
  {
    title: "Home Insurance",
    description: "Comprehensive homeowners coverage for Alabama and Georgia properties with protection against regional weather risks and competitive rates.",
    link: "/services/home-insurance"
  },
  {
    title: "Condo Insurance",
    description: "Specialized coverage for condo owners protecting your unit improvements, personal property, and liability with flexible policy options.",
    link: "/services/condo-insurance"
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
  { name: "Enterprise", slug: "enterprise-al" }
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
  { name: "Marietta", slug: "marietta-ga" }
];

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

const RentersInsurance = () => {
  return (
    <>
      <Helmet>
        <title>Renters Insurance Alabama & Georgia | From $8/Month | Coffey Agencies</title>
        <meta 
          name="description" 
          content="Renters insurance from $8/month when bundled with auto. Protect your belongings, liability, and temporary housing. 4.8★ rated service across Alabama and Georgia." 
        />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <PageLayout
        title="Renters Insurance in Alabama & Georgia"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/auto-insurance" },
          { label: "Renters Insurance", href: "" }
        ]}
      >
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-b from-background to-muted/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                Protect Your Belongings Starting at Just $8/Month
              </h2>
              <p className="text-xl text-muted-foreground text-balance">
                Renters insurance from $8/month when bundled with auto. Most customers pay $15-30/month for complete protection. Cover your belongings, liability, and temporary housing with 4.8★ rated service across Alabama and Georgia.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Quotes in minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <HomeIcon className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">$15-30/month typical</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-accent fill-accent" />
                  <span className="text-sm font-medium">4.8★ rated service</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="#quote-form">Get Your Free Quote</a>
                </Button>
                <div className="flex flex-col sm:flex-row gap-2 items-center">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Alabama:</span>
                    <a href="tel:256-927-6287" className="text-primary hover:underline">(256) 927-6287</a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Georgia:</span>
                    <a href="tel:706-784-6511" className="text-primary hover:underline">(706) 784-6511</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Intro Content */}
            <div className="max-w-3xl mx-auto mt-12 space-y-6 text-center">
              <h3 className="text-2xl font-bold">Affordable Protection for Alabama & Georgia Renters</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nearly 50% of renters across Alabama and Georgia lack insurance coverage, leaving themselves vulnerable to devastating financial loss. The reality is stark: a single apartment fire, burglary, or storm can destroy everything you own, with average claims ranging from $3,000 to $5,000. Without renters insurance, you're responsible for replacing every item out of pocket—furniture, electronics, clothing, and irreplaceable personal items.
              </p>
              <div className="bg-muted/50 border-l-4 border-accent p-6 rounded-lg">
                <p className="font-semibold text-lg mb-2">Starting at $8/month with auto bundle | Most pay $15-30/month</p>
                <p className="text-sm text-muted-foreground">
                  Rates vary based on coverage amount, location, and bundling. Alabama average: $27-30/month | Georgia average: $33-35/month
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Bundle with <Link to="/services/auto-insurance" className="text-primary hover:underline font-medium">auto insurance</Link> and save 15-25% on both policies—many customers qualify for rates as low as $8-19/month.
              </p>
            </div>
          </div>
        </section>

        {/* Coverage Types Section */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <h2>What Renters Insurance Covers</h2>
              <p className="text-lg text-muted-foreground text-balance">
                Renters insurance provides comprehensive protection far beyond what most people realize. Your policy covers personal property loss from fire, theft, vandalism, wind damage, water damage from burst pipes, and more.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {coverageTypes.map((coverage, index) => {
                const Icon = coverage.icon;
                return (
                  <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-accent/10">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{coverage.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{coverage.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <a href="#quote-form">
                  Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Ready to protect your belongings for less than your monthly streaming subscriptions?
              </p>
            </div>
          </div>
        </section>

        {/* Regional Risk Factors Section */}
        <section className="section-spacing bg-muted/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2>Alabama & Georgia Risk Factors</h2>
                <p className="text-lg text-muted-foreground text-balance">
                  Living in Alabama or Georgia means facing unique weather and crime risks that make renters insurance essential.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2">
                  <CardContent className="pt-6 space-y-4">
                    <h3 className="text-xl font-semibold">Alabama Risks</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Tornado Activity:</strong> Alabama ranks in the top 10 states for tornado frequency and sits in the heart of "Dixie Alley" with peak season from March through May.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>High Burglary Rate:</strong> 7th highest in the nation at approximately 532 burglaries per 100,000 people, with property theft accounting for roughly 40% of all renters insurance claims statewide.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6 space-y-4">
                    <h3 className="text-xl font-semibold">Georgia Risks</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Severe Weather:</strong> Hurricanes, tropical storms, and tornado outbreaks bring destructive winds and flooding. Coastal areas like Savannah and inland cities experience hurricane impacts regularly.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Property Crime:</strong> Urban centers including Atlanta, Columbus, and Augusta see elevated property crime rates, with theft and vandalism among the most common insurance claims.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg">
                <p className="font-semibold mb-2">Important Coverage Note</p>
                <p className="text-muted-foreground">
                  Standard renters insurance covers wind damage from tornadoes and hurricanes, protecting your belongings and providing temporary housing if storm damage makes your rental uninhabitable. However, <strong>flood damage is not covered</strong> under standard policies. Renters on ground floors near rivers, in coastal areas like Mobile or Savannah, or in flood-prone zones should consider separate flood insurance through the National Flood Insurance Program.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bundle Savings & Customer Stories Section */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2>Bundle and Save Up to 25%</h2>
                <p className="text-lg text-muted-foreground text-balance">
                  The single most effective way to reduce your renters insurance cost is bundling it with your auto insurance policy. When you combine both policies with the same carrier, you typically save 15-25% on both premiums—essentially getting one of the policies at a steep discount.
                </p>
              </div>

              {/* Customer Story 1 - Marcus */}
              <Card className="border-2 border-accent/20 bg-accent/5">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Quote className="h-8 w-8 text-accent flex-shrink-0" />
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold">Real Customer: Birmingham Renter Saves with Bundle</h3>
                      <p className="text-muted-foreground">
                        Marcus, a 28-year-old software developer in Birmingham, was paying $90/month for auto insurance and had no renters coverage. After a coworker's apartment was burglarized, Marcus realized he needed protection for his electronics and furniture worth approximately $25,000.
                      </p>
                      <p className="text-muted-foreground">
                        When he contacted us, we bundled his auto and renters policies with the same carrier. The result? His auto premium dropped to $81/month (10% discount), and he got $30,000 in renters coverage for just $8/month—a total savings of $12 annually while gaining complete protection.
                      </p>
                      <blockquote className="border-l-4 border-accent pl-4 italic text-foreground">
                        "I was shocked that bundling actually saved me money while adding renters insurance. For $8 a month, there's no reason not to have it. Best decision I've made."
                      </blockquote>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ways to Save Grid */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-center">Coverage Options and Add-Ons</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savingsTips.map((tip, index) => (
                    <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <h4 className="font-semibold mb-2 text-lg">{tip.title}</h4>
                        <p className="text-muted-foreground text-sm">{tip.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Customer Story 2 - Sarah & Mike */}
              <Card className="border-2 border-accent/20 bg-accent/5">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Quote className="h-8 w-8 text-accent flex-shrink-0" />
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold">Real Customer: Tornado Coverage Saves Tuscaloosa Family</h3>
                      <p className="text-muted-foreground">
                        Sarah and Mike rented a house in Tuscaloosa with their young daughter. After hearing about a nearby tornado touchdown, they decided to get renters insurance for $19/month with $40,000 in coverage. Six months later, an EF-2 tornado struck their neighborhood, destroying their rental home and everything inside.
                      </p>
                      <p className="text-muted-foreground">
                        Their renters insurance covered $38,000 in damaged belongings—furniture, electronics, appliances, clothing, and their daughter's toys. The policy also paid for three months in a hotel and covered meal expenses while they found a new rental. Without insurance, they would have lost everything.
                      </p>
                      <blockquote className="border-l-4 border-accent pl-4 italic text-foreground">
                        "We almost didn't get renters insurance because we thought tornadoes wouldn't happen to us. That $19 a month saved us from financial ruin. We'll never rent without coverage again."
                      </blockquote>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-spacing bg-muted/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2>Renters Insurance Questions Answered</h2>
                <p className="text-lg text-muted-foreground text-balance">
                  Get answers to the most common questions about renters insurance in Alabama and Georgia.
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <h2>What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground text-balance">
                Real reviews from renters we've helped protect across Alabama and Georgia.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Quote className="h-8 w-8 text-accent/20 mb-4" />
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Google Review</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="secondary" asChild>
                <Link to="/reviews">
                  Read All 200+ Google Reviews <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Cross-Sell Section */}
        <section className="section-spacing bg-muted/30">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <h2>Complete Your Coverage</h2>
              <p className="text-lg text-muted-foreground text-balance">
                Explore additional insurance options to protect every aspect of your life.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {crossSellServices.map((service, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow group">
                  <CardContent className="pt-6 space-y-4">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                    <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground" asChild>
                      <Link to={service.link}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Areas We Serve Section */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <h2>Renters Insurance Across Alabama & Georgia</h2>
              <p className="text-lg text-muted-foreground text-balance">
                We proudly serve renters in major cities and communities throughout both states.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    Alabama Cities
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {alabamaCities.map((city) => (
                      <Link
                        key={city.slug}
                        to={`/${city.slug}`}
                        className="text-primary hover:underline text-sm"
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    Georgia Cities
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {georgiaCities.map((city) => (
                      <Link
                        key={city.slug}
                        to={`/${city.slug}`}
                        className="text-primary hover:underline text-sm"
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-muted-foreground mt-8">
              Don't see your city? <Link to="/contact" className="text-primary hover:underline font-medium">Contact us</Link> — we serve all of Alabama and Georgia.
            </p>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-spacing bg-gradient-to-b from-muted/30 to-background" id="quote-form">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">
                  Ready to protect your belongings for less than your monthly streaming subscriptions?
                </h2>
                <p className="text-xl text-muted-foreground text-balance">
                  Get a quote that fits your budget starting at $8/month
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="pt-6 text-center space-y-2">
                    <Phone className="h-8 w-8 text-primary mx-auto" />
                    <p className="font-semibold">Alabama Office</p>
                    <a 
                      href="tel:256-927-6287" 
                      className="text-2xl font-bold text-primary hover:underline block"
                    >
                      (256) 927-6287
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="pt-6 text-center space-y-2">
                    <Phone className="h-8 w-8 text-primary mx-auto" />
                    <p className="font-semibold">Georgia Office</p>
                    <a 
                      href="tel:706-784-6511" 
                      className="text-2xl font-bold text-primary hover:underline block"
                    >
                      (706) 784-6511
                    </a>
                  </CardContent>
                </Card>
              </div>

              <Button size="lg" className="text-lg px-12" asChild>
                <Link to="/contact">Get Your Free Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default RentersInsurance;