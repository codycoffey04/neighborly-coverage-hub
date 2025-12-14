import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Home, Building2, Sofa, BedDouble, Shield, Heart, CloudRain, Droplets, Hammer, Zap, Phone, Star, FileCheck, CreditCard, DollarSign, CheckCircle, MapPin, Calendar, Car, Key, Bike, AlertTriangle, Wind, Umbrella } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { TrackedPhone } from "@/components/shared/TrackedPhone";
import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import heroBackground from "@/assets/home-insurance-hero.jpg";
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
  },
  {
    icon: Calendar,
    title: "Review coverage annually",
    description: "Life changes—renovations, paid-off mortgages, new valuables. An annual review ensures you're not overpaying or underprotected. We'll help you adjust."
  }
];

const faqItems = [
  {
    question: "How much does homeowners insurance cost in Alabama vs Georgia?",
    answer: "Alabama homeowners pay an average of $3,000+ per year—among the highest in the nation due to severe weather exposure, tornado risk, and percentage-based wind/hail deductibles. Georgia homeowners typically pay $1,800-2,300 per year, about 25-40% less than AL for similar coverage. Atlanta metro rates trend higher due to property values, while rural GA often sees lower premiums. Factors affecting your rate include location, home age, roof condition, claims history, credit score, coverage amount, deductible choice, and bundling discounts. Given Alabama's higher-than-average costs, comparing homeowners insurance quotes regularly is essential."
  },
  {
    question: "How do wind and hail deductibles work in Alabama and Georgia?",
    answer: "Unlike your standard deductible (a flat amount like $1,000 or $2,500), wind and hail deductibles in AL and GA are often percentage-based. A 1% or 2% wind/hail deductible means you pay that percentage of your dwelling coverage before insurance kicks in. On a $300,000 home with a 2% wind deductible, you'd pay the first $6,000 of any wind or hail claim. Coastal Alabama properties may also have separate hurricane deductibles (2-5%) triggered by named storms. Understanding these deductibles before storm season is critical—we'll explain exactly what your homeowners insurance policy includes."
  },
  {
    question: "Does homeowners insurance cover tornado damage?",
    answer: "Yes, tornado damage is covered under the wind/hail portion of your homeowners insurance policy. If a tornado damages your roof, siding, windows, or interior, your policy pays for repairs minus your deductible. However, the wind/hail deductible (often percentage-based in Alabama and Georgia) applies rather than your standard deductible. Given Alabama's position in Dixie Alley and Georgia's spring storm activity, adequate wind coverage is essential for home insurance in both states."
  },
  {
    question: "What's the difference between RCV and ACV for personal property?",
    answer: "Replacement Cost (RCV) pays what it costs to replace items with new ones of similar kind and quality (subject to limits). Actual Cash Value (ACV) subtracts depreciation for age and wear. RCV homeowners insurance usually costs more but pays better at claim time. We'll price both if you want to compare your home insurance options."
  },
  {
    question: "What documents do I need for a homeowners insurance quote?",
    answer: "To provide an accurate homeowners insurance quote for your Alabama or Georgia property, we'll need your complete property address, the year your home was built, detailed information about your roof (age, material, and any recent replacements), total square footage, and details about updates to plumbing, electrical, or HVAC. Prior insurance information and claims history (last 3-5 years) helps us price your home insurance more accurately. Photos of your home's exterior and roof are helpful but not required to get started."
  },
  {
    question: "Is home insurance required in Alabama or Georgia?",
    answer: "While homeowners insurance isn't legally required in Alabama or Georgia, mortgage lenders require it to protect their investment. Even if you own your home outright, house insurance protects your most valuable asset from fire, storms, theft, and liability claims. Given the severe weather in AL and GA—tornadoes, hurricanes, hail—going without home insurance puts your financial security at serious risk."
  },
  {
    question: "Can I bundle home and auto insurance for savings?",
    answer: "Yes! Bundling your homeowners insurance with auto coverage saves 15-25% on both policies—up to $600 or more annually. For Alabama homeowners facing above-average premiums, bundling is one of the most effective ways to reduce home insurance costs without sacrificing coverage. We'll quote both policies together to maximize your savings on house insurance."
  },
  {
    question: "Will roof age change how a homeowners insurance claim is paid?",
    answer: "Yes, roof age significantly affects how home insurance claims are paid. Some policies pay Actual Cash Value (ACV)—the depreciated value—for older roofs when wind or hail damage occurs. A 15-year-old roof might only be covered for 30-40% of replacement cost. Newer roofs (typically less than 10 years old) or impact-resistant materials may qualify for Replacement Cost Value (RCV) coverage. Understanding your homeowners insurance roof coverage before a storm hits prevents costly surprises."
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
  const location = useLocation();
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Home Insurance Frequently Asked Questions",
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
    "serviceType": "Homeowners Insurance",
    "alternateName": ["Home Insurance", "House Insurance"],
    "provider": {
      "@id": "https://coffeyagencies.com/#organization"
    },
    "areaServed": [
      { "@type": "State", "name": "Alabama" },
      { "@type": "State", "name": "Georgia" }
    ],
    "description": "Complete homeowners insurance protection covering dwelling, personal property, liability, and additional living expenses for Alabama and Georgia properties. Also known as home insurance or house insurance.",
    "serviceOutput": "Insurance Policy",
    "termsOfService": "https://coffeyagencies.com/terms",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  };

  // BreadcrumbList Schema
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
        "name": "Home Insurance",
        "item": "https://coffeyagencies.com/services/home-insurance"
      }
    ]
  };

  // HowTo Schema for AEO/GEO optimization
  const howToSchema = {
    "@type": "HowTo",
    "name": "How to Get Home Insurance in Alabama & Georgia",
    "description": "Get home insurance coverage from a local independent agent in 4 simple steps.",
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
        <title>Homeowners Insurance Quotes Alabama & Georgia | Compare Rates | Coffey Agencies</title>
        <meta name="description" content="Homeowners insurance quotes in Alabama & Georgia. Compare home insurance rates, coverage options, bundle discounts. 4.7★ Google rating. Serving AL & GA families." />
        <link rel="canonical" href="https://coffeyagencies.com/services/home-insurance" />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="Homeowners Insurance Quotes Alabama & Georgia | Compare Rates | Coffey Agencies" />
        <meta property="og:description" content="Homeowners insurance quotes in Alabama & Georgia. Compare home insurance rates, coverage options, bundle discounts. 4.7★ Google rating. Serving AL & GA families." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coffeyagencies.com/services/home-insurance" />
        <meta property="og:site_name" content="Coffey Agencies" />
        <meta property="og:image" content="https://coffeyagencies.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Homeowners Insurance Quotes Alabama & Georgia | Compare Rates" />
        <meta name="twitter:description" content="Homeowners insurance quotes in AL & GA. Compare home insurance rates, coverage, bundle discounts. 4.7★ rating." />
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
        aria-label="Home insurance hero section"
        className="relative min-h-[600px] flex items-end overflow-hidden"
      >
        <img 
          src={heroBackground} 
          alt="Family home exterior protected by homeowners insurance" 
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
                <li className="text-white font-medium">Home Insurance</li>
              </ol>
            </nav>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                Homeowners Insurance in Alabama & Georgia
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-6 drop-shadow-md">
                Whether you're buying your first home or comparing homeowners insurance rates, we protect Alabama (AL) and Georgia (GA) families with clear, honest coverage
              </p>
              <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md">
                Also known as house insurance, your home insurance policy covers your dwelling, personal belongings, liability, and more. From Birmingham suburbs to Atlanta's growing neighborhoods, we serve AL and GA homeowners with personalized coverage. Bundle with{" "}
                <Link to="/services/auto-insurance" className="text-accent hover:underline font-semibold">
                  auto insurance
                </Link>{" "}
                to save 15-25%.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200" asChild>
                  <Link to="/#quote-form">Get Quote</Link>
                </Button>
                <Button size="lg" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200" asChild>
                  <TrackedPhone
                    phone="(256) 927-6287"
                    phoneRaw="2569276287"
                    location="Centre, AL"
                    office="centre"
                    pageType="service-home"
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
                    pageType="service-home"
                    pageUrl={location.pathname}
                    ariaLabel="Call Rome, Georgia office at (706) 784-6511"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Georgia: (706) 784-6511
                  </TrackedPhone>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-accent drop-shadow-md" />
                  <span className="drop-shadow-md">Quotes in minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-accent drop-shadow-md" />
                  <span className="drop-shadow-md">Verified rebuild costs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent drop-shadow-md" />
                  <span className="drop-shadow-md">Live, local team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Coverage Types Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  What Does Home Insurance Cover?
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coverageTypes.map((coverage, index) => {
                  const Icon = coverage.icon;
                  return (
                    <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200 flex flex-col h-full">
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

        {/* Weather Risks & Regional Considerations */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  What Weather Risks Affect Home Insurance in AL & GA?
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Tornado Risk */}
                <Card className="border-2 border-primary/20 bg-primary/5">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-3">
                      <Wind className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">Tornado Risk (Both States)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Central Alabama sits in "Dixie Alley"—the Southern tornado corridor with peak activity from March through May. Northwest Georgia, including Floyd and Bartow counties, also experiences significant tornado activity. Standard homeowners insurance covers tornado damage, but wind/hail deductibles may apply separately from your standard deductible.
                    </p>
                  </CardContent>
                </Card>

                {/* Hurricane Risk */}
                <Card className="border-2 border-primary/20 bg-primary/5">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-3">
                      <Umbrella className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">Hurricane Risk (Coastal Areas)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Coastal Alabama (Mobile, Baldwin County, Gulf Shores) and coastal Georgia (Savannah, Chatham County) face hurricane exposure. Many home insurance policies include separate hurricane deductibles—typically 2-5% of your dwelling coverage—that apply when a named storm causes damage.
                    </p>
                  </CardContent>
                </Card>

                {/* Wind/Hail Deductibles */}
                <Card className="border-2 border-primary/20 bg-primary/5">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-3">
                      <AlertTriangle className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">Wind and Hail Deductibles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Unlike your standard deductible (a flat dollar amount like $1,000), wind/hail deductibles in AL and GA are often percentage-based. A 2% wind/hail deductible on a $300,000 home means you pay the first $6,000 of any wind or hail claim. Understanding this distinction is critical for your homeowners insurance before storm season.
                    </p>
                  </CardContent>
                </Card>

                {/* Water Damage */}
                <Card className="border-2 border-primary/20 bg-primary/5">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-3">
                      <Droplets className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">Water Damage & Flooding</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Burst pipes, appliance leaks, and water heater failures are covered by home insurance. However, flooding from rising water (rivers, storm surge, heavy rain accumulation) is NOT covered—you need separate flood insurance. Georgia's older homes in Atlanta and Alabama properties near rivers or the Gulf should consider flood coverage.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Comparison Section - Critical for AL */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  How Much Does Homeowners Insurance Cost in Alabama vs Georgia?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Home insurance costs vary dramatically between Alabama and Georgia—understanding why can help you find better rates.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Alabama Cost */}
                <Card className="border-2 border-primary/20">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="text-xl text-center">Alabama (AL)</CardTitle>
                    <p className="text-3xl font-bold text-center text-primary">~$3,000+/year</p>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground text-sm mb-4">
                      Alabama has some of the highest homeowners insurance premiums in the nation. Factors driving costs include:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        Severe weather exposure (tornadoes, Gulf Coast hurricanes)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        High frequency of wind and hail claims
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        Percentage-based wind/hail deductibles (often 1-2%)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        Older housing stock in some areas
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Georgia Cost */}
                <Card className="border-2 border-accent/20">
                  <CardHeader className="bg-accent/5">
                    <CardTitle className="text-xl text-center">Georgia (GA)</CardTitle>
                    <p className="text-3xl font-bold text-center text-accent">~$1,800-2,300/year</p>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground text-sm mb-4">
                      Georgia homeowners typically pay 25-40% less than Alabama residents for similar home insurance coverage:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        Atlanta metro rates trend higher due to property values
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        Rural Georgia often sees lower premiums
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        Less coastal hurricane exposure than AL
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        Newer housing stock in metro suburbs
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Factors Affecting Rate */}
              <Card className="bg-background border">
                <CardHeader>
                  <CardTitle className="text-lg">Factors Affecting Your Homeowners Insurance Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Location</strong> — Coastal AL (Mobile, Gulf Shores) and tornado-prone areas cost more</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Home className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Home age & construction</strong> — Newer homes with updated roofs pay less</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Hammer className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Roof age</strong> — Roofs over 15 years significantly increase premiums</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileCheck className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Claims history</strong> — Previous claims raise rates for 3-5 years</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <DollarSign className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Deductible choice</strong> — Raising from $1,000 to $2,500 can save 10-15%</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Car className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Bundling</strong> — Adding auto to home insurance saves 15-25%</span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Given Alabama's higher-than-average costs, shopping your homeowners insurance regularly is essential. We compare multiple carriers to find the best combination of coverage and price for AL and GA homeowners.
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
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  How Can I Save on Home Insurance?
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
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  Home Insurance Questions We Answer Every Day
                </h2>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-background border-2 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow">
                    <AccordionTrigger className="text-left hover:no-underline py-5">
                      <span className="font-semibold text-lg pr-4">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Cross-Link to Learn Pages */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto max-w-4xl px-4">
            <SectionHeading className="mb-6 text-center">Learn More About Home Insurance</SectionHeading>
            <p className="text-center text-muted-foreground mb-6">
              Want to understand coverage types, deductibles, and how to protect your Alabama or Georgia home? Explore our guides:
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Link to="/learn/home-insurance-guide" className="flex items-center justify-center gap-2 text-primary font-semibold hover:underline">
                → Home Insurance Coverage Guide: Alabama & Georgia
              </Link>
              <Link to="/learn/bundling-home-and-auto" className="flex items-center justify-center gap-2 text-primary font-semibold hover:underline">
                → How Bundling Home and Auto Saves You Money
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  What Our Clients Say
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
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

        {/* Complete Your Coverage Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Complete Your Coverage</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore additional insurance options to protect every aspect of your life.
              </p>
            </div>
            
            {/* Top row: 3 cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {/* Auto Insurance */}
              <Card className="h-full flex flex-col border border-gray-200 border-t-4 border-t-accent shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center mb-3">
                    <Car className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>Auto Insurance</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-4 flex-grow">
                    Protect your vehicles with comprehensive coverage across Alabama and Georgia. Competitive rates with multi-policy discounts.
                  </CardDescription>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white" asChild aria-label="Learn more about Auto Insurance">
                    <Link to="/services/auto-insurance">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Renters Insurance */}
              <Card className="h-full flex flex-col border border-gray-200 border-t-4 border-t-accent shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center mb-3">
                    <Key className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>Renters Insurance</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-4 flex-grow">
                    Affordable renters insurance starting at $8/month with auto bundle. Protect your belongings and liability.
                  </CardDescription>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white" asChild aria-label="Learn more about Renters Insurance">
                    <Link to="/services/renters-insurance">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Condo Insurance */}
              <Card className="h-full flex flex-col border border-gray-200 border-t-4 border-t-accent shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center mb-3">
                    <Building2 className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>Condo Insurance</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-4 flex-grow">
                    Specialized coverage for condo owners protecting your unit improvements, personal property, and liability.
                  </CardDescription>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white" asChild aria-label="Learn more about Condo Insurance">
                    <Link to="/services/condo-insurance">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Bottom row: 2 cards centered */}
            <div className="grid md:grid-cols-2 gap-6 max-w-[680px] mx-auto">
              {/* Life Insurance */}
              <Card className="h-full flex flex-col border border-gray-200 border-t-4 border-t-accent shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center mb-3">
                    <Heart className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>Life Insurance</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-4 flex-grow">
                    Protect your family's financial future with affordable term or whole life coverage starting at $25/month.
                  </CardDescription>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white" asChild aria-label="Learn more about Life Insurance">
                    <Link to="/services/life-insurance">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Motorcycle Insurance */}
              <Card className="h-full flex flex-col border border-gray-200 border-t-4 border-t-accent shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center mb-3">
                    <Bike className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>Motorcycle Insurance</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-4 flex-grow">
                    Coverage built for riders—cruisers, sport bikes, and touring machines. Custom parts coverage and honest advice.
                  </CardDescription>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white" asChild aria-label="Learn more about Motorcycle Insurance">
                    <Link to="/services/motorcycle-insurance">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  Homeowners Insurance Across Alabama & Georgia
                </h2>
              </div>

              {/* Counties and ZIP Codes */}
              <div className="bg-muted/30 rounded-lg p-6 mb-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We provide homeowners insurance across <strong>Alabama</strong> — including Jefferson County (Birmingham), Montgomery County, Mobile County, Madison County (Huntsville), Baldwin County (Gulf Shores), Cherokee County (Centre), Tuscaloosa County, and Etowah County (Gadsden) — as well as <strong>Georgia</strong> communities in Fulton County (Atlanta), Gwinnett County (Lawrenceville), Cobb County, DeKalb County, Floyd County (Rome), Bartow County (Cartersville), and Chatham County (Savannah).
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our home insurance coverage extends to ZIP codes including <strong>35242, 35215, 35173</strong> (Birmingham area), <strong>36117</strong> (Montgomery), <strong>36695</strong> (Mobile), <strong>35960</strong> (Centre), <strong>35801</strong> (Huntsville), <strong>36561</strong> (Gulf Shores), <strong>30044, 30043</strong> (Gwinnett), <strong>30161</strong> (Rome), <strong>30120</strong> (Cartersville), <strong>30349</strong> (South Atlanta), and communities throughout AL and GA.
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
                    {alabamaCities.map((city) => (
                      <Link
                        key={city.slug}
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
                    {georgiaCities.map((city) => (
                      <Link
                        key={city.slug}
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
                Don't see your city?{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  Contact us
                </Link>{" "}
                — we serve all of Alabama and Georgia with homeowners insurance.
              </p>
            </div>
          </div>
        </section>

        {/* Internal Linking Section */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-muted-foreground leading-relaxed">
              Protect your whole household. Explore our{" "}
              <Link to="/services/auto-insurance" className="text-primary hover:underline font-medium">auto insurance</Link>{" "}
              for your vehicles,{" "}
              <Link to="/services/life-insurance" className="text-primary hover:underline font-medium">life insurance</Link>{" "}
              for your family's future, or{" "}
              <Link to="/services/condo-insurance" className="text-primary hover:underline font-medium">condo insurance</Link>{" "}
              if you own a condo. As a local agency with offices in Centre, AL and Rome, GA, we understand regional risks that national carriers often miss—that local knowledge translates to better homeowners insurance coverage and better pricing for AL and GA families.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary-light">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Protect Your Home?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a quote that fits your home, roof, and budget.
            </p>
            
            {/* Primary CTA - Green Button */}
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent-light text-lg px-8 py-6 h-auto shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 mb-4"
              asChild
            >
              <Link to="/#quote-form">Get Quote</Link>
            </Button>

            {/* Phone Links - Secondary CTAs */}
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-white/90 mb-6">
              <span>Or call us:</span>
              <TrackedPhone
                phone="(256) 927-6287"
                phoneRaw="2569276287"
                location="Centre, AL"
                office="centre"
                pageType="service-home-cta"
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
                pageType="service-home-cta"
                pageUrl={location.pathname}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                ariaLabel="Call Rome, Georgia office at (706) 784-6511"
              >
                <Phone className="h-4 w-4" />
                (706) 784-6511
              </TrackedPhone>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
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

export default HomeInsurance;