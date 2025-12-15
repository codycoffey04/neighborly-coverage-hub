import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import heroBackground from "@/assets/renters-insurance-hero.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Sofa, Shield, BedDouble, Heart, Zap, Home as HomeIcon, Star, Phone, MapPin, ArrowRight, CheckCircle, Car, Gem, RefreshCw, DollarSign, Umbrella, Key, Quote, Building2, Bike, GraduationCap, BookOpen } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { TrackedPhone } from "@/components/shared/TrackedPhone";
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
    description: "Save 15-25% on both policies by combining renters and auto insurance in AL or GA. Most customers qualify for rates as low as $8-19/month on apartment insurance when bundled.",
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
    description: "Covers you if someone is injured in your rental or you accidentally damage someone else's property. Most tenant insurance policies include $100,000, with options to increase.",
  },
  {
    icon: DollarSign,
    title: "Right-Size Your Deductible",
    description: "Balance premium savings with affordable out-of-pocket costs. We'll model multiple deductible options ($500 or $1,000) to find your sweet spot for apartment insurance in AL and GA.",
  },
  {
    icon: Key,
    title: "Loss of Use Coverage",
    description: "Pays for temporary housing, meals, and living expenses if your rental becomes uninhabitable due to a covered loss. Essential protection often overlooked by AL and GA renters.",
  },
];

const faqs = [
  {
    question: "How do I qualify for $8/month renters insurance?",
    answer: "The $8/month rate is available when you bundle renters insurance with your auto policy in AL or GA. Most customers pay $15-30/month depending on coverage amount, location, and bundling. Rates vary based on your ZIP code, coverage limits ($15K-$50K personal property), deductible choice ($500 or $1,000), and multi-policy discounts (15-25% savings when bundled with auto insurance)."
  },
  {
    question: "What does renters insurance cover in Alabama and Georgia?",
    answer: "Standard renters insurance covers personal property (furniture, electronics, clothing) from fire, theft, vandalism, wind/hail, and water damage from burst pipes. It includes personal liability protection if someone is injured in your rental, and loss of use coverage for temporary housing if your rental becomes uninhabitable. Tornado wind damage is covered, but flood damage requires a separate flood policy."
  },
  {
    question: "Is renters insurance required in Alabama or Georgia?",
    answer: "Neither Alabama nor Georgia requires renters insurance by law. However, many landlords require it as a lease condition. Even if not required, apartment insurance is highly recommended—about 50% of renters lack coverage and risk significant financial loss. The average renters insurance claim in AL and GA ranges from $3,000-$5,000."
  },
  {
    question: "Does renters insurance cover tornado damage in Alabama?",
    answer: "Yes, renters insurance covers wind damage from tornadoes, which is crucial since Alabama ranks in the top 10 states for tornado activity and experiences peak season from March through May. Your personal property and additional living expenses are covered if a tornado damages your rental unit. However, flood damage from tornado-related flooding requires separate flood insurance."
  },
  {
    question: "How much can I save by bundling renters and auto insurance?",
    answer: "Bundling renters and auto insurance typically saves 15-25% on both policies in AL and GA. For example, if you pay $15/month for renters and $90/month for auto separately, bundling could save approximately $150-200 per year. Many customers qualify for rates as low as $8-19/month on apartment insurance when bundled with auto insurance."
  },
  {
    question: "What's the difference between actual cash value and replacement cost coverage?",
    answer: "Actual cash value pays the depreciated value of your belongings (what they're worth today), while replacement cost coverage pays to replace items with new ones of similar quality. Replacement cost coverage costs slightly more but provides better protection. For example, a 5-year-old laptop might have an actual cash value of $300, but replacement cost would pay $800 for a comparable new model."
  },
  {
    question: "Does my landlord's insurance cover my belongings?",
    answer: "No. Your landlord's insurance only covers the building structure, not your personal belongings or liability. If there's a fire, theft, or storm damage, you'll have to replace everything out-of-pocket without tenant insurance. Renters insurance is the only way to protect your furniture, electronics, clothing, and other personal property in AL or GA."
  },
  {
    question: "How quickly can I get renters insurance coverage?",
    answer: "Most renters insurance policies can begin immediately upon approval. Our digital process means you can receive a quote within minutes and have active coverage the same day. If your landlord requires proof of insurance before move-in, we can provide a certificate of insurance (COI) the same day. Many apartment complexes in Birmingham, Atlanta, and other metro areas require this documentation before handing over keys."
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
  "name": "Renters Insurance Frequently Asked Questions",
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
  "alternateName": ["Apartment Insurance", "Tenant Insurance"],
  "provider": {
    "@id": "https://coffeyagencies.com/#organization"
  },
  "areaServed": [
    { "@type": "State", "name": "Alabama" },
    { "@type": "State", "name": "Georgia" }
  ],
  "description": "Affordable renters insurance starting at $8/month when bundled, protecting personal property, liability, and providing temporary housing coverage for AL and GA tenants.",
  "serviceOutput": "Insurance Policy",
  "termsOfService": "https://coffeyagencies.com/terms",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "name": "Breadcrumb Navigation",
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
      "name": "Renters Insurance",
      "item": "https://coffeyagencies.com/services/renters-insurance"
    }
  ]
};

const RentersInsurance = () => {
  const location = useLocation();

  // HowTo Schema for AEO/GEO optimization
  const howToSchema = {
    "@type": "HowTo",
    "name": "How to Get Renters Insurance in Alabama & Georgia",
    "description": "Get renters insurance coverage from a local independent agent in 4 simple steps.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Request a Quote",
        "text": "Tell us about your coverage needs online or by phone. Takes about 2 minutes."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Review Your Options",
        "text": "A licensed agent presents 2-3 coverage options from multiple carriers."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Select Your Coverage",
        "text": "Choose the policy that fits your needs and budget."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Get Covered",
        "text": "We bind your coverage and send ID cards same-day in most cases."
      }
    ],
    "totalTime": "PT15M"
  };

  // Combine all schemas into a single @graph structure for reliable rendering
  const allSchemas = {
    "@context": "https://schema.org",
    "@graph": [
      faqSchema,
      serviceSchema,
      breadcrumbSchema,
      howToSchema
    ]
  };

  return (
    <>
      <Helmet>
        <title>Renters Insurance Alabama & Georgia | From $8/Month | Coffey Agencies</title>
        <meta name="description" content="Renters insurance from $8/month when bundled with auto. Protect belongings, liability, and temporary housing. 4.7★ rated across Alabama & Georgia." />
        <link rel="canonical" href="https://coffeyagencies.com/services/renters-insurance" />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="Renters Insurance Alabama & Georgia | From $8/Month | Coffey Agencies" />
        <meta property="og:description" content="Renters insurance in Alabama & Georgia from $8/month. Apartment & tenant coverage for personal property, liability, theft. 4.7★ Google rating." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coffeyagencies.com/services/renters-insurance" />
        <meta property="og:site_name" content="Coffey Agencies" />
        <meta property="og:image" content="https://coffeyagencies.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Renters Insurance from $8/Month | Alabama & Georgia" />
        <meta name="twitter:description" content="Apartment & tenant insurance protecting your belongings, liability, and temporary housing in AL and GA." />
        <meta name="twitter:image" content="https://coffeyagencies.com/og-image.jpg" />
        
        {/* Combined Schema Graph - All schemas in one JSON-LD block for reliable rendering */}
        <script type="application/ld+json">
          {JSON.stringify(allSchemas)}
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
                <li className="text-white font-medium">Renters Insurance</li>
              </ol>
            </nav>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                Renters Insurance in Alabama & Georgia
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-6 drop-shadow-md">
                Whether you call it renters insurance or apartment insurance, we protect your belongings starting at just $8/month when bundled. Coverage for AL and GA tenants.
              </p>

              {/* CTA Buttons - styled for dark background */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200" asChild>
                  <Link to="/#quote-form">Get Apartment Insurance Quote</Link>
                </Button>
                <Button size="lg" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200" asChild>
                  <TrackedPhone
                    phone="(256) 927-6287"
                    phoneRaw="2569276287"
                    location="Centre, AL"
                    office="centre"
                    pageType="service-renters"
                    pageUrl={location.pathname}
                    ariaLabel="Call Centre, Alabama office at (256) 927-6287"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Alabama: (256) 927-6287
                  </TrackedPhone>
                </Button>
                <Button size="lg" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200" asChild>
                  <TrackedPhone
                    phone="(706) 784-6511"
                    phoneRaw="7067846511"
                    location="Rome, GA"
                    office="rome"
                    pageType="service-renters"
                    pageUrl={location.pathname}
                    ariaLabel="Call Rome, Georgia office at (706) 784-6511"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Georgia: (706) 784-6511
                  </TrackedPhone>
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
                  <span className="drop-shadow-md">4.7★ rated service</span>
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Affordable Apartment Insurance for Alabama (AL) & Georgia (GA) Renters</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nearly 50% of renters across Alabama and Georgia lack insurance coverage, leaving themselves vulnerable to devastating financial loss. Also known as tenant insurance, this protection is essential—a single apartment fire, burglary, or storm can destroy everything you own, with average claims ranging from $3,000 to $5,000. Without renters insurance, you're responsible for replacing every item out-of-pocket—furniture, electronics, clothing, and irreplaceable personal items.
            </p>
            <div className="bg-muted/50 border-l-4 border-accent p-6 rounded-lg">
              <p className="font-semibold text-lg mb-2">Starting at $8/month with auto bundle | Most pay $15-30/month</p>
              <p className="text-sm text-muted-foreground">
                Rates vary based on coverage amount, location, and bundling. AL average: $20-25/month | GA average: $16-18/month
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Bundle with <Link to="/services/auto-insurance" className="text-primary hover:underline font-medium">auto insurance</Link> and save 15-25% on both policies—many customers in AL and GA qualify for rates as low as $8-19/month on their apartment insurance.
            </p>
          </div>
        </div>
      </section>

        {/* Coverage Types Section */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <h2>What Does Renters Insurance Cover?</h2>
              <p className="text-lg text-muted-foreground text-balance">
                Renters insurance—also called apartment insurance or tenant insurance—provides comprehensive protection far beyond what most people realize. Your policy covers personal property loss from fire, theft, vandalism, wind damage, water damage from burst pipes, and more.
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
                  Get Tenant Insurance Quote <ArrowRight className="ml-2 h-5 w-5" />
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
                <h2>What Regional Risks Affect Alabama & Georgia Renters?</h2>
                <p className="text-lg text-muted-foreground text-balance">
                  Living in AL or GA means facing unique weather and crime risks that make apartment insurance essential for tenants.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <CardContent className="pt-6 space-y-4">
                    <h3 className="text-xl font-semibold">Alabama (AL) Risks</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Tornado Activity:</strong> Alabama ranks in the top 10 states for tornado frequency and sits in the heart of "Dixie Alley" with peak season from March through May. Renters in Jefferson County, Madison County, and Tuscaloosa County face elevated tornado risk.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>High Burglary Rate:</strong> 7th highest in the nation at approximately 532 burglaries per 100,000 people, with property theft accounting for roughly 40% of all renters insurance claims statewide. Urban areas like Birmingham (ZIP 35215, 35242) and Montgomery (ZIP 36117) see elevated theft rates.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <CardContent className="pt-6 space-y-4">
                    <h3 className="text-xl font-semibold">Georgia (GA) Risks</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Severe Weather:</strong> Hurricanes, tropical storms, and tornado outbreaks bring destructive winds and flooding. Coastal areas and inland cities experience hurricane impacts regularly. Fulton County, DeKalb County, and Gwinnett County residents should consider comprehensive tenant insurance.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Property Crime:</strong> Urban centers including Atlanta (ZIP 30303, 30332), Lawrenceville (ZIP 30043), and Augusta see elevated property crime rates, with theft and vandalism among the most common apartment insurance claims.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg">
                <p className="font-semibold mb-2">Important Coverage Note</p>
                <p className="text-muted-foreground">
                  Standard renters insurance covers wind damage from tornadoes and hurricanes, protecting your belongings and providing temporary housing if storm damage makes your rental uninhabitable. However, <strong>flood damage is not covered</strong> under standard policies. Renters on ground floors near rivers, in coastal areas like Mobile (ZIP 36695) or Savannah, or in flood-prone zones should consider separate flood insurance through the National Flood Insurance Program.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Geographic Content: Counties and ZIP Codes */}
        <section className="section-spacing bg-background">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto space-y-8">
              <h3 className="text-xl md:text-2xl font-bold text-center">Rental Markets Across Alabama and Georgia</h3>
              
              <div className="prose prose-slate max-w-none space-y-4">
                <p className="text-muted-foreground">
                  Renters insurance needs across our service territory reflect each county's rental market dynamics, student populations, and urban development patterns. <strong>Jefferson County</strong> has Alabama's largest rental market—Birmingham's neighborhoods like Highland Park, Forest Park, and East Lake feature everything from historic duplexes to modern apartment complexes. The county's mix of young professionals, UAB students, and service industry workers creates diverse renter demographics, with many qualifying for bundle discounts when adding renters coverage to their auto policies. Property crime varies widely by neighborhood—downtown Birmingham and areas near UAB see higher theft rates requiring robust personal property coverage, while suburbs like Hoover and Vestavia Hills offer safer environments with lower premiums.
                </p>
                
                <p className="text-muted-foreground">
                  <strong>Tuscaloosa County's</strong> rental market revolves around the University of Alabama. During the academic year, over 38,000 students flood Tuscaloosa, many living in purpose-built student housing complexes, older homes converted to rentals near campus, or apartments along McFarland Boulevard. Renters insurance here must account for student-specific risks—frequent moves, roommate situations, and higher liability exposure from social gatherings. The April 2011 tornado devastated rental properties across Tuscaloosa, teaching hard lessons about the importance of personal property coverage when landlord policies only protect the building structure.
                </p>
                
                <p className="text-muted-foreground">
                  <strong>Cherokee County</strong> has limited traditional rental stock—most housing is owner-occupied (75% homeownership rate). The rentals that exist tend to be mobile homes, older houses in Centre, or seasonal lakeside properties near Weiss Lake. Rural renters here face different considerations: longer distances from fire protection, potential well water issues, and the reality that replacement costs for personal property may be higher due to limited local shopping options. <strong>Etowah County</strong> (Gadsden) offers more urban rental inventory, particularly in downtown Gadsden and Rainbow City, with working-class renters who often underinsure despite the area's tornado exposure.
                </p>
                
                <p className="text-muted-foreground">
                  Georgia's rental markets tell different stories. <strong>Fulton County</strong> dominates with Atlanta's massive renter population—over 60% of city residents rent rather than own. Midtown's high-rise apartments, Old Fourth Ward's renovated lofts, and Virginia-Highland's bungalow conversions each present unique insurance needs. Urban renters face higher theft risk (comprehensive personal property coverage is essential), potential water damage from aging plumbing in older buildings, and liability concerns in dense multi-family environments. Average renters insurance in Fulton runs $180-$240 annually for $30,000 personal property coverage, but bundling with auto drops costs to the $8-$12/month range that makes coverage a no-brainer.
                </p>
                
                <p className="text-muted-foreground">
                  <strong>Gwinnett County</strong> has emerged as a major rental market as millennials priced out of Atlanta seek affordable alternatives in Lawrenceville, Duluth, and Norcross. Many complexes near I-85 offer proximity to Atlanta jobs without city rent prices. The county's diverse immigrant communities often include renters unfamiliar with US insurance norms—we frequently educate Gwinnett renters that landlord policies don't cover their belongings. <strong>Cobb County</strong> (Marietta area) features a mix of upscale apartment communities around the Battery and more affordable options along Cobb Parkway, each with different coverage needs and premium ranges.
                </p>
                
                <p className="text-muted-foreground">
                  <strong>Floyd County</strong> (Rome) maintains a smaller but steady rental market—Berry College students, Redmond Regional Medical Center staff, and young families often rent before buying. Downtown Rome's loft conversions and apartment complexes near the Coosa River serve professionals, while more affordable rentals spread across the county. <strong>DeKalb</strong> and <strong>Bartow</strong> counties each contribute to metro Atlanta's rental ecosystem with their own local characteristics.
                </p>
              </div>
              
              <div className="prose prose-slate max-w-none space-y-4">
                <p className="text-muted-foreground">
                  Specific ZIP codes reveal granular rental market patterns and risk profiles. Birmingham's <strong>35215</strong> (northeast Birmingham near Roebuck and Center Point) has significant rental stock in older apartment complexes and converted single-family homes. This ZIP code sees moderate theft rates and many working-class renters who benefit from our bundle-and-save approach—adding $15,000-$20,000 renters coverage to an existing auto policy often costs just $8-$10/month. <strong>35242</strong> (Hoover/Greystone) features upscale apartment communities with amenities where renters carry higher personal property values—$40,000-$50,000 coverage is common for professionals with electronics, furniture, and recreational equipment. <strong>35173</strong> (Trussville) has limited rental inventory but what exists tends toward newer townhome communities with lower crime and competitive premiums.
                </p>
                
                <p className="text-muted-foreground">
                  Tuscaloosa's rental-heavy <strong>35401</strong> (city proper including campus areas) contains thousands of student renters in purpose-built complexes like The Woodlands, The Exchange, and numerous smaller properties. Student renters here typically need $10,000-$20,000 personal property coverage (enough for laptops, gaming systems, bikes, and clothing), liability coverage for apartment parties, and possibly additional living expense coverage given the challenge of finding alternative housing mid-semester if a fire or storm damages their unit. Many parents purchasing coverage for college students discover that bundling renters insurance with the student's auto policy (still on the family plan) delivers significant savings.
                </p>
                
                <p className="text-muted-foreground">
                  <strong>35960</strong> (Centre in Cherokee County) has minimal rental activity—what exists includes older houses for rent in town and some mobile homes in rural areas. Renters here often overlook insurance despite tornado risk and the reality that replacing belongings would require shopping trips to Gadsden or even Birmingham. Our agents emphasize that even $10,000 coverage provides meaningful protection at low cost.
                </p>
                
                <p className="text-muted-foreground">
                  Georgia's <strong>30044</strong> and <strong>30043</strong> (Lawrenceville/Snellville in Gwinnett County) represent major rental markets—large apartment complexes line Pleasant Hill Road, Sugarloaf Parkway, and near I-85 exits. Median household incomes around $65,000-$70,000 mean many renters carry $25,000-$35,000 personal property coverage. These ZIPs see moderate property crime (car break-ins in apartment parking lots are the main concern), making comprehensive auto coverage equally important when bundling. The presence of immigrant communities means we frequently educate renters that in America, landlord insurance only covers the building—your belongings require separate coverage.
                </p>
                
                <p className="text-muted-foreground">
                  Atlanta's <strong>30349</strong> (College Park/airport area in south Fulton County) has extensive rental stock serving airport workers, Delta employees, and service industry staff. Higher crime rates in parts of this ZIP code mean theft coverage is critical—break-ins at apartment complexes near I-85 occur regularly. Premiums run slightly higher here ($200-$250 annually for standard coverage) due to claims history, but bundling with auto still delivers the $8-$15/month sweet spot that makes coverage accessible. <strong>30303</strong> and <strong>30332</strong> (downtown Atlanta and Georgia Tech area) serve urban renters and students with very different needs—high-rise apartments downtown require different liability considerations than Tech's campus-adjacent housing.
                </p>
                
                <p className="text-muted-foreground">
                  <strong>30161</strong> (Rome in Floyd County) offers affordable rental options with correspondingly moderate insurance costs—$150-$180 annually for $20,000-$25,000 coverage is typical, dropping to $10-$12/month when bundled with auto. The ZIP code's small-city character means lower theft risk than metro Atlanta but still enough rental activity to support a healthy renters insurance market. <strong>30120</strong> (Cartersville in Bartow County) serves I-75 corridor renters, many employed at nearby manufacturing facilities or commuting to Atlanta, with similar moderate pricing and bundle opportunities.
                </p>
                
                <p className="text-muted-foreground">
                  Across all locations, renters insurance delivers exceptional value—even standalone policies rarely exceed $200 annually, and bundling with auto insurance typically reduces the effective cost to less than two streaming subscriptions per month while providing $20,000-$30,000 personal property protection, liability coverage, and additional living expenses if your rental becomes uninhabitable due to covered loss.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* College Town Section */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary shadow-md flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h2>Renters Insurance for College Students in Alabama & Georgia</h2>
                <p className="text-lg text-muted-foreground text-balance">
                  College students living off-campus need apartment insurance just like any other renter. Whether you're attending Auburn University, University of Alabama, University of Georgia, Georgia Tech, Alabama State, or Troy University, tenant insurance protects your laptop, furniture, clothing, and other belongings from theft, fire, and covered perils.
                </p>
              </div>

              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-lg">
                <p className="font-semibold mb-2">Parents' Policy Limitation</p>
                <p className="text-muted-foreground">
                  Many students assume their parents' homeowners policy covers them—and it might, partially. But coverage is often limited (typically 10% of the parents' personal property limit) and may not cover liability if someone is injured in your apartment. A standalone renters insurance policy costs as little as $8-15/month and provides dedicated protection for students in AL and GA.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="border border-gray-200 shadow-sm">
                  <CardContent className="pt-4 text-center">
                    <p className="font-semibold">Laptop & Electronics</p>
                    <p className="text-sm text-muted-foreground">Protection for your devices</p>
                  </CardContent>
                </Card>
                <Card className="border border-gray-200 shadow-sm">
                  <CardContent className="pt-4 text-center">
                    <p className="font-semibold">Theft Coverage</p>
                    <p className="text-sm text-muted-foreground">Including from vehicles</p>
                  </CardContent>
                </Card>
                <Card className="border border-gray-200 shadow-sm">
                  <CardContent className="pt-4 text-center">
                    <p className="font-semibold">Guest Liability</p>
                    <p className="text-sm text-muted-foreground">If visitors are injured</p>
                  </CardContent>
                </Card>
                <Card className="border border-gray-200 shadow-sm">
                  <CardContent className="pt-4 text-center">
                    <p className="font-semibold">Temporary Housing</p>
                    <p className="text-sm text-muted-foreground">If apartment is uninhabitable</p>
                  </CardContent>
                </Card>
              </div>

              <p className="text-center text-muted-foreground">
                <strong>Parents:</strong> Adding your student to a renters policy—or helping them get their own apartment insurance—is one of the most affordable ways to protect their belongings while away at school in Auburn (ZIP 36849), Tuscaloosa (ZIP 35401), Athens (ZIP 30602), or Atlanta (ZIP 30332 near Georgia Tech).
              </p>
            </div>
          </div>
        </section>

        {/* Cost Comparison Section */}
        <section className="section-spacing bg-muted/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2>How Much Does Renters Insurance Cost in Alabama vs Georgia?</h2>
                <p className="text-lg text-muted-foreground text-balance">
                  Apartment insurance is one of the most affordable coverage types available for AL and GA tenants.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-primary/20">
                  <CardContent className="pt-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">Georgia (GA)</h3>
                    <p className="text-3xl font-bold text-primary mb-2">$16-18/month</p>
                    <p className="text-sm text-muted-foreground">$192-216/year average</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary/20">
                  <CardContent className="pt-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">Alabama (AL)</h3>
                    <p className="text-3xl font-bold text-primary mb-2">$20-25/month</p>
                    <p className="text-sm text-muted-foreground">$240-300/year (higher weather claims)</p>
                  </CardContent>
                </Card>
              </div>

              <p className="text-center text-muted-foreground">
                However, many renters in both states find policies starting as low as <strong>$8-12/month</strong> depending on coverage limits, deductible, and location.
              </p>

              <div className="bg-background border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Factors Affecting Your Tenant Insurance Rate</h3>
                <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span><strong>Location</strong> — Urban apartments in Atlanta cost more than rural AL rentals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span><strong>Coverage amount</strong> — Higher personal property limits = higher premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span><strong>Deductible</strong> — Choosing $500 vs $1,000 deductible affects monthly cost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span><strong>Claims history</strong> — Previous claims may increase rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span><strong>Bundling</strong> — Adding renters to your auto policy saves 10-15%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span><strong>Building type</strong> — Newer apartments may qualify for lower rates</span>
                  </li>
                </ul>
              </div>

              <p className="text-center text-muted-foreground italic">
                Despite Alabama's slightly higher average due to tornado and storm claims, renters insurance remains extremely affordable—often less than a streaming subscription.
              </p>
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
                  The single most effective way to reduce your apartment insurance cost is bundling it with your auto insurance policy. When you combine both policies with the same carrier in AL or GA, you typically save 15-25% on both premiums—essentially getting one of the policies at a steep discount.
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
                        Marcus, a 28-year-old software developer in Birmingham (Jefferson County), was paying $90/month for auto insurance and had no renters coverage. After a coworker's apartment was burglarized, Marcus realized he needed protection for his electronics and furniture worth approximately $25,000.
                      </p>
                      <p className="text-muted-foreground">
                        When he contacted us, we bundled his auto and apartment insurance policies with the same carrier. The result? His auto premium dropped to $81/month (10% discount), and he got $30,000 in renters coverage for just $8/month—a total savings of $12 annually while gaining complete protection.
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
                        Sarah and Mike rented a house in Tuscaloosa (Tuscaloosa County, AL) with their young daughter. After hearing about a nearby tornado touchdown, they decided to get tenant insurance for $19/month with $40,000 in coverage. Six months later, an EF-2 tornado struck their neighborhood, destroying their rental home and everything inside.
                      </p>
                      <p className="text-muted-foreground">
                        Their renters insurance covered $38,000 in damaged belongings—furniture, electronics, appliances, clothing, and their daughter's toys. The policy also paid for three months in a hotel and covered meal expenses while they found a new rental. Without apartment insurance, they would have lost everything.
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
                  Get answers to the most common questions about apartment insurance in Alabama and Georgia.
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

        {/* Cross-Link to Learn Page */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="pt-6 flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-2">Learn More About Renters Insurance</h3>
                  <p className="text-muted-foreground mb-4">
                    Want to understand exactly what renters insurance covers and why it's worth the investment? Explore answers to common questions like "Does renters insurance cover theft?" and "What happens if my apartment floods?" in our detailed coverage breakdown.
                  </p>
                  <Button asChild>
                    <Link to="/learn/renters-insurance-guide">
                      Read Our Renters Insurance Guide <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
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
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Renters Insurance Across AL & GA</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                We provide apartment insurance across Alabama — including Jefferson County (Birmingham), Montgomery County, Mobile County, Madison County (Huntsville), Cherokee County (Centre), Lee County (Auburn), and Tuscaloosa County — as well as Georgia communities in Fulton County (Atlanta), Gwinnett County (Lawrenceville), DeKalb County, Cobb County, Floyd County (Rome), and Clarke County (Athens).
              </p>
            </div>

            <div className="bg-muted/50 border-l-4 border-accent p-4 rounded-lg mb-8 text-center">
              <p className="text-sm text-muted-foreground">
                <strong>ZIP Codes We Serve:</strong> Our tenant insurance coverage extends to ZIP codes including 35294 (UAB area), 36849 (Auburn), 35401 (Tuscaloosa), 36104 (Montgomery), 35960 (Centre), 30602 (Athens), 30332 (Georgia Tech), 30303 (Downtown Atlanta), 30043 (Lawrenceville), 30161 (Rome), and surrounding communities throughout AL and GA.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Alabama */}
              <div className="bg-gray-50 shadow-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Alabama (AL)
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
                  Georgia (GA)
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
              Don't see your city? <Link to="/contact" className="text-primary font-semibold hover:underline">Contact us</Link> — we serve all of AL and GA.
            </p>
          </div>
        </section>

        {/* Internal Linking Section */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-lg text-muted-foreground">
              Protect more than your apartment. Explore our{" "}
              <Link to="/services/auto-insurance" className="text-primary font-semibold hover:underline">auto insurance</Link> for your vehicle,{" "}
              <Link to="/services/life-insurance" className="text-primary font-semibold hover:underline">life insurance</Link> for your family, or ask about bundling multiple policies to save 10-15% on your premiums across AL and GA.
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
              Get an apartment insurance quote that fits your budget starting at $8/month
            </p>
            
            {/* Primary CTA - Green Button */}
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent-light text-lg px-8 py-6 h-auto shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              asChild
            >
              <Link to="/#quote-form">Get Tenant Insurance Quote</Link>
            </Button>

            {/* Phone Links - Secondary CTAs */}
            <div className="flex flex-wrap justify-center items-center gap-4 mt-4 text-sm text-white/90">
              <span>Or call us:</span>
              <TrackedPhone
                phone="(256) 927-6287"
                phoneRaw="2569276287"
                location="Centre, AL"
                office="centre"
                pageType="service-renters-cta"
                pageUrl={location.pathname}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                ariaLabel="Call Centre, Alabama office at (256) 927-6287"
              >
                <Phone className="h-4 w-4" />
                (256) 927-6287
              </TrackedPhone>
              <span className="text-white/50">|</span>
              <TrackedPhone
                phone="(706) 784-6511"
                phoneRaw="7067846511"
                location="Rome, GA"
                office="rome"
                pageType="service-renters-cta"
                pageUrl={location.pathname}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                ariaLabel="Call Rome, Georgia office at (706) 784-6511"
              >
                <Phone className="h-4 w-4" />
                (706) 784-6511
              </TrackedPhone>
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
