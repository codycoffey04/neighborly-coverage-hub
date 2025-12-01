import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import heroBackground from "@/assets/renters-insurance-hero.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Sofa, Shield, BedDouble, Heart, Zap, Home as HomeIcon, Star, Phone, MapPin, ArrowRight, CheckCircle, Car, Gem, RefreshCw, DollarSign, Umbrella, Key, Quote, Building2, Bike } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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
    icon: Car,
    title: "Bundle with Auto Insurance",
    description: "Save 15-25% on both policies by combining renters and auto insurance. Most customers qualify for rates as low as $8-19/month on renters coverage when bundled.",
  },
  {
    icon: Gem,
    title: "High-Value Item Scheduling",
    description: "Schedule expensive jewelry, electronics, or collections separately at appraised value for full coverage beyond standard sub-limits (typically $1,500 for jewelry).",
  },
  {
    icon: RefreshCw,
    title: "Replacement Cost Coverage",
    description: "Upgrade from actual cash value to replacement cost coverage for just a few dollars monthly—pays full replacement value without depreciation.",
  },
  {
    icon: Umbrella,
    title: "Liability Protection",
    description: "Covers you if someone is injured in your rental or you accidentally damage someone else's property. Most policies include $100,000, with options to increase.",
  },
  {
    icon: DollarSign,
    title: "Right-Size Your Deductible",
    description: "Balance premium savings with affordable out-of-pocket costs. We'll model multiple deductible options ($500 or $1,000) to find your sweet spot.",
  },
  {
    icon: Key,
    title: "Loss of Use Coverage",
    description: "Pays for temporary housing, meals, and living expenses if your rental becomes uninhabitable due to a covered loss. Essential protection often overlooked.",
  },
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
    location: "Centre, AL",
    text: "Lexi was very patient and helpful when I stopped by yesterday to ask multiple questions. She is truly an asset to your office!"
  },
  {
    name: "Steve Smith",
    location: "Centre, AL",
    text: "Customer service at Cody Coffey's Centre office is amazing, a lost art, a total delight. Give them 1000 out of 100 :). Friendly, knowledgeable. So grateful to have found them when moving to a new town."
  },
  {
    name: "Ricky Salas",
    location: "Rome, GA",
    text: "I was with this agency for several years and had nothing but positive experiences with Cody and the other agents. When I had to move out of state, Kathy made it incredibly easy to end my Georgia policy and settle things up. I can't recommend them enough."
  }
];

const crossSellServices = [
  {
    icon: Car,
    title: "Auto Insurance",
    description: "Bundle with renters insurance and save 15-25% on both policies. Complete protection for your vehicles across Alabama and Georgia.",
    link: "/services/auto-insurance"
  },
  {
    icon: Heart,
    title: "Life Insurance",
    description: "Protect your family's financial future with affordable term or whole life coverage starting at $25/month for $500K protection.",
    link: "/services/life-insurance"
  },
  {
    icon: HomeIcon,
    title: "Home Insurance",
    description: "Comprehensive homeowners coverage for Alabama and Georgia properties with protection against regional weather risks and competitive rates.",
    link: "/services/home-insurance"
  },
  {
    icon: Building2,
    title: "Condo Insurance",
    description: "Specialized coverage for condo owners protecting your unit improvements, personal property, and liability with flexible policy options.",
    link: "/services/condo-insurance"
  },
  {
    icon: Bike,
    title: "Motorcycle Insurance",
    description: "Coverage built for riders—cruisers, sport bikes, and touring machines. Custom parts coverage and honest advice on limits.",
    link: "/services/motorcycle-insurance"
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://coffeyagencies.com/services/renters-insurance#service",
  "serviceType": "Renters Insurance",
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
  "description": "Affordable renters insurance starting at $8/month when bundled, protecting personal property, liability, and providing temporary housing coverage.",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "8.00",
      "priceCurrency": "USD",
      "unitText": "MONTH"
    }
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://coffeyagencies.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://coffeyagencies.com/#services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Renters Insurance",
      "item": "https://coffeyagencies.com/services/renters-insurance"
    }
  ]
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
        <link rel="canonical" href="https://coffeyagencies.com/services/renters-insurance" />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="Renters Insurance Alabama & Georgia | From $8/Month | Coffey Agencies" />
        <meta property="og:description" content="Renters insurance from $8/month when bundled with auto. Protect your belongings, liability, and temporary housing. 4.8★ rated service across Alabama and Georgia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coffeyagencies.com/services/renters-insurance" />
        <meta property="og:site_name" content="Coffey Agencies" />
        <meta property="og:image" content="https://coffeyagencies.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Renters Insurance from $8/Month | Alabama & Georgia" />
        <meta name="twitter:description" content="Protect your belongings, liability, and temporary housing with affordable renters insurance in AL and GA." />
        <meta name="twitter:image" content="https://coffeyagencies.com/og-image.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />

      {/* Custom Hero Section with Background Image */}
      <section
        role="banner"
        aria-label="Renters insurance hero section"
        className="relative min-h-[600px] flex items-end overflow-hidden"
      >
        <img 
          src={heroBackground} 
          alt="Apartment living room with personal belongings covered by renters insurance" 
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        
        {/* Content */}
        <div className="relative z-10 w-full py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            {/* Breadcrumbs */}
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center justify-center gap-2 text-sm text-white/80">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li>/</li>
                <li><Link to="/#services" className="hover:text-white">Services</Link></li>
                <li>/</li>
                <li className="text-white font-medium">Renters Insurance</li>
              </ol>
            </nav>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                Renters Insurance in Alabama & Georgia
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-6 drop-shadow-md">
                Protect your belongings starting at just $8/month when bundled
              </p>
              
              {/* CTA Buttons - styled for dark background */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200" asChild>
                  <Link to="/contact">Get Your Free Quote</Link>
                </Button>
                <Button size="lg" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200" asChild>
                  <a href="tel:+12569276287" aria-label="Call Centre, Alabama office at (256) 927-6287">
                    <Phone className="mr-2 h-5 w-5" />
                    Alabama: (256) 927-6287
                  </a>
                </Button>
                <Button size="lg" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200" asChild>
                  <a href="tel:+17067846511" aria-label="Call Rome, Georgia office at (706) 784-6511">
                    <Phone className="mr-2 h-5 w-5" />
                    Georgia: (706) 784-6511
                  </a>
                </Button>
              </div>

              {/* Trust indicators with white text */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-accent drop-shadow-md" />
                  <span className="drop-shadow-md">Quotes in minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <HomeIcon className="h-5 w-5 text-accent drop-shadow-md" />
                  <span className="drop-shadow-md">$15-30/month typical</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 drop-shadow-md" />
                  <span className="drop-shadow-md">4.8★ rated service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section - outside hero */}
      <section className="py-12 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Affordable Protection for Alabama & Georgia Renters</h2>
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
                  <Card key={index} className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-white" />
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
                <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
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

                <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
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
              {savingsTips.map((tip, index) => {
                const Icon = tip.icon;
                return (
                  <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200 flex flex-col h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-3">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{tip.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {tip.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
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

              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-background border-2 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow">
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
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground text-balance">
                Real reviews from renters we've helped protect across Alabama and Georgia.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col h-full">
                  <CardContent className="pt-6 flex flex-col h-full">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                      "{testimonial.text}"
                    </p>
                    <div className="mt-auto">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link to="/reviews">Read All Reviews →</Link>
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

            {/* Top row: 3 cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {crossSellServices.slice(0, 3).map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="bg-white h-full flex flex-col border border-gray-200 border-t-4 border-t-accent shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
                  <CardContent className="pt-6 space-y-4 flex-grow flex flex-col">
                    <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-white mt-auto" asChild aria-label={`Learn more about ${service.title}`}>
                      <Link to={service.link}>Learn More →</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
            </div>

            {/* Bottom row: 2 cards centered */}
            <div className="grid md:grid-cols-2 gap-6 max-w-[680px] mx-auto">
            {crossSellServices.slice(3, 5).map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="bg-white h-full flex flex-col border border-gray-200 border-t-4 border-t-accent shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
                  <CardContent className="pt-6 space-y-4 flex-grow flex flex-col">
                    <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-white mt-auto" asChild aria-label={`Learn more about ${service.title}`}>
                      <Link to={service.link}>Learn More →</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
            </div>
          </div>
        </section>

        {/* Areas We Serve Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Renters Insurance Across Alabama & Georgia</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Alabama */}
              <div className="bg-gray-50 shadow-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Alabama
                </h3>
                <div className="flex flex-wrap gap-3">
                  {alabamaCities.map((city, index) => (
                    <Link 
                      key={index}
                      to={`/${city.slug}`}
                      className="px-4 py-2 bg-white rounded-full text-sm border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Georgia */}
              <div className="bg-gray-50 shadow-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Georgia
                </h3>
                <div className="flex flex-wrap gap-3">
                  {georgiaCities.map((city, index) => (
                    <Link 
                      key={index}
                      to={`/${city.slug}`}
                      className="px-4 py-2 bg-white rounded-full text-sm border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-center text-muted-foreground">
              Don't see your city? <Link to="/contact" className="text-primary font-semibold hover:underline">Contact us</Link> — we serve all of Alabama and Georgia.
            </p>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary-light" id="quote-form">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to protect your belongings for less than your monthly streaming subscriptions?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a quote that fits your budget starting at $8/month
            </p>
            
            {/* Primary CTA - Green Button */}
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent-light text-lg px-8 py-6 h-auto shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              asChild
            >
              <Link to="/contact">Get Your Free Quote</Link>
            </Button>

            {/* Phone Links - Secondary CTAs */}
            <div className="flex flex-wrap justify-center items-center gap-4 mt-4 text-sm text-white/90">
              <span>Or call us:</span>
              <a 
                href="tel:+12569276287"
                aria-label="Call Centre, Alabama office at (256) 927-6287"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                (256) 927-6287
              </a>
              <span className="text-white/50">|</span>
              <a 
                href="tel:+17067846511"
                aria-label="Call Rome, Georgia office at (706) 784-6511"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                (706) 784-6511
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6">
              <span className="flex items-center gap-1.5 text-sm text-white">
                <CheckCircle className="h-4 w-4" />
                Licensed in AL & GA
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white">
                <CheckCircle className="h-4 w-4" />
                Hablamos Español
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white">
                <CheckCircle className="h-4 w-4" />
                Family Owned
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white">
                <CheckCircle className="h-4 w-4" />
                100+ Years Combined Experience
              </span>
            </div>
          </div>
        </section>
      <Footer />
    </>
  );
};

export default RentersInsurance;