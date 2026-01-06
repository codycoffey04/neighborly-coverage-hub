import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CompleteYourCoverage } from "@/components/shared/CompleteYourCoverage";
import heroBackground from "@/assets/motorcycle-insurance-hero.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { TrackedPhone } from "@/components/shared/TrackedPhone";
import { 
  Shield, Car, Umbrella, Users, Heart, Wrench,
  FileCheck, CreditCard, DollarSign, TrendingDown, Target, Home,
  Phone, MapPin, Star, CheckCircle, Bike, Award,
  CloudRain, AlertTriangle, ShieldOff, Mountain, Route
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

const coverageTypes = [
  {
    icon: Shield,
    title: "Liability (BI/PD)",
    description: "Required in both Alabama (AL) and Georgia (GA) at 25/50/25 minimums. Pays for injuries and property damage you cause to others. Higher limits protect your assets if you're sued after a serious accident—especially important given medical costs and litigation trends."
  },
  {
    icon: Car,
    title: "Collision",
    description: "Covers damage to your motorcycle from crashes with vehicles or objects, regardless of fault. Required if your bike is financed. Choose a deductible that matches your emergency fund—higher deductibles lower premiums but increase out-of-pocket costs at claim time."
  },
  {
    icon: Umbrella,
    title: "Comprehensive",
    description: "Protects against theft, vandalism, fire, falling objects, and weather damage. Alabama and Georgia's mild winters mean year-round riding, but spring and fall bring peak season — and peak risk. Comprehensive bike insurance protects against theft (motorcycle theft spikes in warmer months), storm damage, and vandalism whether you're riding or parked."
  },
  {
    icon: Users,
    title: "Uninsured/Underinsured Motorist (UM/UIM)",
    description: "Covers your injuries when an at-fault driver has no insurance or not enough. Riders are more vulnerable than car occupants, making adequate UM/UIM limits critical. Many riders match these to their liability limits for balanced protection."
  },
  {
    icon: Heart,
    title: "Medical Payments (MedPay)",
    description: "Pays medical bills for you and your passenger regardless of fault. Useful if you have high-deductible health insurance or want immediate coverage for emergency care. Neither Alabama nor Georgia requires PIP, so MedPay fills this gap."
  },
  {
    icon: Wrench,
    title: "Accessory & Custom Parts",
    description: "Standard policies include $1,000–$3,000 for aftermarket parts. Chrome, custom exhaust, saddlebags, upgraded seats, and performance modifications can push values much higher. We can increase limits up to $30,000 to match your investment."
  }
];

const savingsTips = [
  {
    icon: FileCheck,
    title: "Complete an MSF course",
    description: "The Motorcycle Safety Foundation course satisfies licensing requirements and earns 10-15% premium discounts with most carriers. The skills pay dividends beyond the savings."
  },
  {
    icon: Home,
    title: "Bundle policies",
    description: "Combining your bike insurance with auto, home, or renters insurance unlocks 10-15% multi-policy discounts and simplifies billing. Works for AL and GA riders."
  },
  {
    icon: Bike,
    title: "Choose your bike wisely",
    description: "Cruisers and touring motorcycles cost less to insure than sport bikes. If you're shopping for a new ride, insurance cost is worth factoring in."
  },
  {
    icon: Shield,
    title: "Secure storage",
    description: "Garaging your bike and installing anti-theft devices (alarms, GPS trackers, disc locks) can reduce comprehensive premiums significantly."
  },
  {
    icon: DollarSign,
    title: "Pay in full",
    description: "Annual payment typically costs less than monthly installments. We'll quote both options so you can compare and maximize savings."
  },
  {
    icon: Target,
    title: "Mature rider & multi-bike discounts",
    description: "Experienced riders 25+ often qualify for mature rider discounts. Insure two or more motorcycles together for additional multi-bike savings."
  }
];

const faqs = [
  {
    question: "Do I need motorcycle insurance in Alabama and Georgia?",
    answer: "Yes, motorcycle insurance is legally required in both states. Alabama and Georgia mandate identical minimum liability limits: $25,000 bodily injury per person, $50,000 per accident, and $25,000 property damage (25/50/25). Riding without insurance in Alabama carries fines up to $500 and registration suspension. Georgia penalties range from $200–$300 plus suspension. We recommend limits above minimums for real-world protection."
  },
  {
    question: "How much does motorcycle insurance cost in Alabama and Georgia?",
    answer: "In Alabama, average full coverage motorcycle insurance runs approximately $369/year (~$31/month). Georgia riders typically pay $400-450/year due to higher urban density and theft rates in the Atlanta metro. Liability-only coverage starts as low as $15-20/month in both states. Sport bikes cost more to insure than cruisers or touring motorcycles. We'll quote your specific situation so you know exactly what to expect."
  },
  {
    question: "Is motorcycle insurance cheaper than car insurance?",
    answer: "Typically yes. Liability-only motorcycle insurance often costs $15-25/month compared to $100+ for auto liability. However, full coverage for an expensive sport bike can rival car insurance costs. In AL, average full coverage runs about $369/year — roughly 75% less than the average car insurance premium. Factors like bike value, your age, and riding experience affect pricing."
  },
  {
    question: "What does motorcycle insurance cover?",
    answer: "Motorcycle insurance covers liability for injuries and damage you cause, collision damage to your bike, comprehensive losses (theft, weather, vandalism), uninsured motorist protection, medical payments, and accessory coverage for custom parts. Optional add-ons include roadside assistance, trip interruption, total loss replacement, and trailer coverage for transport."
  },
  {
    question: "Does motorcycle insurance cover passengers in Alabama?",
    answer: "Yes. Motorcycle policies in Alabama and Georgia include guest passenger liability, covering injuries to passengers riding with you. Alabama's guest statute limits a passenger's ability to sue the rider for ordinary negligence, which affects how standard policies respond. Many Alabama riders add guest passenger liability coverage to ensure passengers are fully protected. Georgia treats passengers as standard third parties with full coverage. We'll structure your policy appropriately based on where you ride."
  },
  {
    question: "Are custom parts and accessories covered?",
    answer: "Standard policies include $1,000–$3,000 in accessory coverage. If you've added chrome, saddlebags, custom exhaust, or upgraded components, you can increase this limit up to $30,000 depending on your carrier. Document modifications with photos and receipts for smoother claims. We recommend itemizing expensive accessories and adjusting limits accordingly, especially for heavily customized Harleys and custom builds."
  },
  {
    question: "Can I suspend motorcycle insurance during winter?",
    answer: "Some insurers offer \"lay-up\" or seasonal policies that suspend liability and collision coverage while maintaining comprehensive (theft and fire) protection during storage months. However, if your bike remains registered in AL or GA, state law technically requires continuous liability coverage. Options include: lay-up coverage, reducing to comprehensive-only (if allowed), or temporarily canceling registration. Talk to us about the best approach for your situation."
  },
  {
    question: "Does a motorcycle safety course lower insurance?",
    answer: "Yes. Completing an MSF (Motorcycle Safety Foundation) course or similar approved program typically earns a 10-15% discount with most insurers. The discount often lasts 3-5 years and can be renewed by taking a refresher course. Beyond savings, these courses significantly improve riding skills and accident avoidance — we strongly encourage all riders to complete one."
  }
];

import { serviceTestimonialSets } from "@/data/testimonialData";

const testimonials = serviceTestimonialSets["motorcycle-insurance"];

const alabamaCities = [
  { name: "Centre", slug: "centre-al" },
  { name: "Birmingham", slug: "birmingham-al" },
  { name: "Decatur", slug: "decatur-al" },
  { name: "Florence", slug: "florence-al" },
  { name: "Huntsville", slug: "huntsville-al" },
  { name: "Montgomery", slug: "montgomery-al" },
  { name: "Tuscaloosa", slug: "tuscaloosa-al" },
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
  { name: "Forsyth", slug: "forsyth-ga" },
  { name: "Canton", slug: "canton-ga" },
  { name: "Dallas", slug: "dallas-ga" },
  { name: "Cumming", slug: "cumming-ga" }
];

const scenicRoutes = {
  alabama: [
    { name: "Cheaha Mountain", description: "Alabama's highest point with sweeping curves through Talladega National Forest" },
    { name: "Little River Canyon Parkway", description: "23 miles of scenic riding along the canyon rim in DeKalb County" },
    { name: "Natchez Trace Parkway", description: "Historic route through northwest Alabama with no commercial traffic" },
    { name: "US-431 through Anniston and Gadsden", description: "Popular cruiser corridor connecting northeast Alabama" }
  ],
  georgia: [
    { name: "GA-60 to Suches", description: "Known as \"The Dragon's Lair\" with 60+ miles of mountain curves" },
    { name: "GA-180/Brasstown Bald", description: "Climb to Georgia's highest peak on twisting mountain roads" },
    { name: "GA-52 through Ellijay", description: "Apple country with rolling hills and light traffic" },
    { name: "Richard B. Russell Scenic Highway (GA-348)", description: "14 miles of Alpine-style switchbacks" }
  ]
};

const motorcycleBrands = [
  { name: "Harley-Davidson", models: "Road King, Street Glide, Sportster, and the full touring lineup" },
  { name: "Honda", models: "Gold Wing, Rebel, Shadow, Africa Twin, and CBR sport bikes" },
  { name: "Yamaha", models: "V-Star cruisers, MT series, YZF sport bikes, and Super Ténéré adventure bikes" },
  { name: "Kawasaki", models: "Vulcan cruisers, Ninja sport bikes, and Versys adventure models" },
  { name: "Indian", models: "Chief, Scout, Chieftain, and the Challenger lineup" },
  { name: "BMW", models: "R series, K series, and GS adventure bikes" },
  { name: "Triumph", models: "Bonneville, Street Triple, Tiger, and Rocket 3" }
];

const MotorcycleInsurance = () => {
  const location = useLocation();
  // JSON-LD Schema for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Motorcycle Insurance Frequently Asked Questions",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://coffeyagencies.com/services/motorcycle-insurance#service",
    "serviceType": "Motorcycle Insurance",
    "provider": {
      "@id": "https://coffeyagencies.com/#organization"
    },
    "areaServed": [
      { "@type": "State", "name": "Alabama" },
      { "@type": "State", "name": "Georgia" }
    ],
    "description": "Motorcycle insurance coverage for cruisers, sport bikes, and touring machines including liability, collision, comprehensive, and custom parts protection up to $30,000.",
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
        "name": "Motorcycle Insurance",
        "item": "https://coffeyagencies.com/services/motorcycle-insurance"
      }
    ]
  };

  // HowTo Schema for AEO/GEO optimization
  const howToSchema = {
    "@type": "HowTo",
    "name": "How to Get Motorcycle Insurance in Alabama & Georgia",
    "description": "Get motorcycle insurance coverage from a local independent agent in 4 simple steps.",
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
        <title>Motorcycle Insurance Centre AL & Rome GA | Coffey Agencies</title>
        <meta name="description" content="Ride protected with motorcycle insurance from Coffey Agencies. Liability, collision, comprehensive & custom parts coverage in Alabama & Georgia. Free quotes." />
        <link rel="canonical" href="https://coffeyagencies.com/services/motorcycle-insurance" />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="Motorcycle Insurance Centre AL & Rome GA | Coffey Agencies" />
        <meta property="og:description" content="Ride protected with motorcycle insurance from Coffey Agencies. Liability, collision, comprehensive & custom parts coverage in Alabama & Georgia. Free quotes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coffeyagencies.com/services/motorcycle-insurance" />
        <meta property="og:site_name" content="Coffey Agencies" />
        <meta property="og:image" content="https://coffeyagencies.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Motorcycle Insurance Alabama | Bike Coverage Quotes" />
        <meta name="twitter:description" content="Motorcycle insurance quotes in Alabama & Georgia. Bike coverage for cruisers, sport bikes, Harleys. Custom parts up to $30,000." />
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
        aria-label="Motorcycle insurance hero section"
        className="relative min-h-[600px] flex items-end overflow-hidden"
      >
        <img 
          src={heroBackground} 
          alt="Motorcycle parked on scenic road in Alabama or Georgia" 
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
                <li className="text-white font-medium">Motorcycle Insurance</li>
              </ol>
            </nav>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                Motorcycle Insurance Alabama - Get Bike Coverage Quotes
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-6 drop-shadow-md max-w-3xl mx-auto">
                Whether you call it motorcycle insurance or bike insurance, we've got you covered. Hit the road with confidence on Cheaha Mountain, Georgia's Dragon's Lair, or the Natchez Trace. Custom coverage for AL and GA riders—cruisers, sport bikes, touring machines—protecting your bike, your gear, and your riding style.
              </p>
              
              {/* CTA Buttons - styled for dark background */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200" asChild>
                  <Link to="/#quote-form">Get Bike Insurance Quote</Link>
                </Button>
                <Button size="lg" className="bg-white hover:bg-white text-primary border border-primary shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200" asChild>
                  <TrackedPhone
                    phone="(256) 927-6287"
                    phoneRaw="2569276287"
                    location="Centre, AL"
                    office="centre"
                    pageType="service-motorcycle"
                    pageUrl={location.pathname}
                    ariaLabel="Call Centre, Alabama office at (256) 927-6287"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Alabama: (256) 927-6287
                  </TrackedPhone>
                </Button>
                <Button size="lg" className="bg-white hover:bg-white text-primary border border-primary shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200" asChild>
                  <TrackedPhone
                    phone="(706) 784-6511"
                    phoneRaw="7067846511"
                    location="Rome, GA"
                    office="rome"
                    pageType="service-motorcycle"
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
                  <Bike className="h-5 w-5 text-accent drop-shadow-md" />
                  <span className="drop-shadow-md">Custom parts coverage available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent drop-shadow-md" />
                  <span className="drop-shadow-md">Uninsured motorist protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent drop-shadow-md" />
                  <span className="drop-shadow-md">Safety course discounts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Coverage Types Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">What Motorcycle Insurance Coverage Do I Need?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Motorcycle insurance works differently than auto insurance. Riders face unique exposures—no steel cage around you, higher theft rates, and custom modifications that standard policies don't cover. We structure bike insurance to address these realities while keeping premiums reasonable. Bundle with home or auto for multi-policy savings.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coverageTypes.map((coverage, index) => {
                const Icon = coverage.icon;
                return (
                  <Card key={index} className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-2">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{coverage.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{coverage.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cost Comparison Section - NEW */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">How Much Does Motorcycle Insurance Cost in Alabama?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                How much is motorcycle insurance in Alabama? Most AL riders pay significantly less than car insurance. Average full coverage motorcycle insurance in Alabama runs approximately <strong>$369 per year</strong> — about $31 per month. That's typically 30-40% less than what you'd pay for auto insurance on a similar vehicle. Whether you're riding in Birmingham, Mobile, Huntsville, or smaller towns like Centre, Alabama motorcycle insurance costs benefit from the state's lower population density and fewer urban theft risks compared to other states.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                When choosing Alabama motorcycle insurance, you'll decide between liability-only and full coverage motorcycle insurance. Liability-only bike insurance starts as low as $15-20 per month in Alabama, meeting the state's legal minimum of 25/50/25 ($25,000 bodily injury per person, $50,000 per accident, $25,000 property damage). However, we recommend full coverage motorcycle insurance for financed bikes and any motorcycle worth more than a few thousand dollars. Full coverage protects your investment and includes collision and comprehensive coverage for theft, vandalism, and weather damage — important considerations for Alabama riders who face tornado season and severe storms.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Comprehensive motorcycle insurance covers damage from theft, vandalism, fire, falling objects, and weather events. In Alabama, this protection matters especially during tornado season (March through May) and severe thunderstorm season. Comprehensive coverage also protects against theft, which can be a concern in urban areas like Birmingham and Mobile. While comprehensive motorcycle insurance adds to your premium, it provides peace of mind knowing your bike is protected whether you're riding or it's parked in your garage in Centre or stored outside.
              </p>
              
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg mb-4">Factors Affecting Your Motorcycle Insurance Rate:</h3>
                <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Bike type (cruisers cost less than sport bikes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Engine size and horsepower</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Your riding experience and age</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Annual mileage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Where you store the bike (garage vs. outside)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Safety course completion (typically 10-15% discount)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cheapest Motorcycle Coverage Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Cheapest Motorcycle Insurance in Alabama</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Finding the cheapest motorcycle insurance in Alabama starts with understanding what you actually need. Liability-only policies are the most affordable option, typically $15-20 per month, but they only cover damage you cause to others—not your bike. If you're riding an older motorcycle you own outright and can afford to replace, liability might be enough. However, if your bike is financed, worth more than a few thousand dollars, or you simply want protection for your investment, full coverage is usually worth the extra cost.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                The cheapest motorcycle insurance in Alabama often comes from bundling. When you combine car and motorcycle insurance combined, you typically save 10-15% on all policies. Many riders in Birmingham, Mobile, and Huntsville find that bundling their car and motorcycle insurance combined with the same carrier simplifies billing and maximizes savings. We also help you qualify for discounts like safe rider programs, motorcycle safety course completion, and multi-bike policies if you own more than one motorcycle. Riders throughout Alabama can save by working with an independent agency that compares rates from multiple carriers rather than going directly to a single insurance company.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Remember that the cheapest motorcycle insurance in Alabama isn't always the best value. Alabama's 18% uninsured driver rate means adequate uninsured motorist coverage is essential. We help you find the right balance between affordable premiums and protection that actually covers you when you need it, whether you're commuting in Birmingham or taking weekend rides through the Alabama countryside.
              </p>
            </div>
          </div>
        </section>

        {/* Best Motorcycle Insurance Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Best Motorcycle Insurance in Alabama</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                The best motorcycle insurance in Alabama balances comprehensive protection with affordable premiums. It includes adequate liability limits (we recommend at least 50/100/50, higher than Alabama's 25/50/25 minimum), matching uninsured motorist coverage, and full coverage for your bike if it's financed or worth more than a few thousand dollars. The best policies also offer flexible deductibles, custom parts coverage for modifications, and roadside assistance for breakdowns on Alabama highways. Whether you're riding in Birmingham's urban traffic, cruising Mobile's coastal roads, or exploring Huntsville's mountain routes, the best motorcycle insurance adapts to your riding style and local risks.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Coffey Agencies offers competitive motorcycle insurance options in Alabama by comparing rates from multiple carriers. We're an independent agency, which means we're not limited to one insurance company's products. This allows us to find the best motorcycle insurance in Alabama for each rider's unique situation—whether you need basic liability for an older bike in Centre or comprehensive coverage for a new Harley in Birmingham. Our licensed Alabama agents understand state requirements and local riding conditions, ensuring you get coverage that protects you without overpaying. We also help you maximize discounts through bundling, safety courses, and multi-bike policies.
              </p>
            </div>
          </div>
        </section>

        {/* Motorcycle Insurance for New Riders Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Motorcycle Insurance for New Riders</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Motorcycle insurance for new riders in Alabama typically costs more than for experienced riders, but there are ways to keep premiums manageable. New riders often pay 20-30% more than riders with several years of experience, reflecting the higher accident risk during the first few years. However, completing a Motorcycle Safety Foundation (MSF) course can reduce your premium by 10-15% and teaches essential skills for safe riding. Many new riders in Birmingham, Mobile, and Huntsville start with liability-only coverage to keep costs down, then add full coverage once they've gained experience and confidence. We help new riders understand their coverage options and find policies that protect them without breaking the bank.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                When shopping for motorcycle insurance for new riders, consider starting with a smaller, less powerful bike—insurance costs are significantly lower for cruisers and standard motorcycles compared to sport bikes. New riders should also prioritize uninsured motorist coverage given Alabama's 18% uninsured driver rate, which is higher than the national average. We recommend new riders in Alabama maintain higher liability limits (at least 50/100/50) since inexperience increases the likelihood of at-fault accidents. As you gain experience and maintain a clean riding record, your premiums will decrease. Many of our new rider clients in Centre and throughout Alabama see their rates drop by 15-25% after their first year of safe riding.
              </p>
            </div>
          </div>
        </section>

        {/* Scenic Routes Section - NEW */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">What Scenic Routes Do We Insure Riders For?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Alabama and Georgia offer some of the Southeast's best motorcycle roads. Whether you're cruising Cheaha, carving corners on GA-60, or riding the Natchez Trace, your bike insurance should match the roads you travel.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Alabama Routes */}
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                  <Mountain className="h-5 w-5" />
                  Alabama Scenic Routes
                </h3>
                <div className="space-y-4">
                  {scenicRoutes.alabama.map((route, index) => (
                    <div key={index} className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold">{route.name}</h4>
                      <p className="text-muted-foreground text-sm">{route.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Georgia Routes */}
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                  <Route className="h-5 w-5" />
                  Georgia Scenic Routes
                </h3>
                <div className="space-y-4">
                  {scenicRoutes.georgia.map((route, index) => (
                    <div key={index} className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold">{route.name}</h4>
                      <p className="text-muted-foreground text-sm">{route.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Motorcycle Brands Section - NEW */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">What Motorcycle Brands Do We Cover?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We provide bike insurance for all major brands. From a vintage Harley Sportster to a new Honda Gold Wing, we match your bike with the right coverage at competitive rates. Custom builds, trikes, and three-wheelers welcome.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {motorcycleBrands.map((brand, index) => (
                <Card key={index} className="h-full border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2 text-primary">{brand.name}</h3>
                    <p className="text-muted-foreground text-sm">{brand.models}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Regional Considerations Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">What Risks Do Alabama & Georgia Riders Face?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                The Southeast offers year-round riding but comes with hazards that shape how we recommend coverage. Georgia recorded 221 motorcyclist fatalities in 2022—the highest in a decade. Alabama saw motorcycle deaths jump 36% from 2023 to 2024. Whether you commute on I-20 through Birmingham, I-75 through Atlanta, I-65 through Montgomery, or US-431 through Anniston, understanding these risks helps AL and GA riders choose appropriate limits and deductibles.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <CardContent className="pt-6 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-4">
                      <CloudRain className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-3">Seasonal weather</h3>
                    <p className="text-muted-foreground flex-grow">Spring storms bring sudden rain and hail. Summer heat causes fatigue. Fall means leaves on pavement and peak deer season from October through December. Comprehensive coverage addresses weather and animal strikes.</p>
                  </CardContent>
                </Card>

                <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <CardContent className="pt-6 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-4">
                      <AlertTriangle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-3">High-risk corridors</h3>
                    <p className="text-muted-foreground flex-grow">I-20, I-65, I-75, I-85, and US-431 (nicknamed "Highway to Hell") see disproportionate motorcycle incidents. Higher liability and UM/UIM limits make sense if you ride these routes regularly.</p>
                  </CardContent>
                </Card>

                <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <CardContent className="pt-6 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-3">Urban vs. rural</h3>
                    <p className="text-muted-foreground flex-grow">Metro areas like Atlanta and Birmingham have more crashes overall, while rural roads see more fatalities due to higher speeds and delayed emergency response. Either environment warrants adequate medical coverage.</p>
                  </CardContent>
                </Card>

                <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <CardContent className="pt-6 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-4">
                      <ShieldOff className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-3">Uninsured motorists</h3>
                    <p className="text-muted-foreground flex-grow">Alabama and Georgia rank among the highest for uninsured drivers. UM/UIM coverage protects you when the at-fault party has no insurance or insufficient limits.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* County & ZIP Code Geographic Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h3 className="text-xl md:text-2xl font-bold mb-6">Rider Communities Across Our Service Area</h3>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground mb-4">
                Motorcycle riders across our territory face distinct regional challenges shaped by terrain, traffic patterns, and local riding culture. <strong>Jefferson County</strong> motorcyclists navigate Alabama's busiest urban corridors—I-65, I-20/59, and the I-459 beltway—where heavy traffic and distracted drivers contributed to Alabama's 92 motorcyclist fatalities in 2023. The Birmingham metro offers scenic routes like Highway 119 through Cahaba Valley and access to Barber Motorsports Park, but urban theft risk means comprehensive coverage is essential for bikes parked downtown or in apartment complexes.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Tuscaloosa County</strong> riders enjoy cruises along Lake Tuscaloosa and AL-69's countryside, but the University of Alabama's student population creates traffic unpredictability—especially on game days when McFarland Boulevard and I-59/20 see congestion spikes. <strong>Etowah County</strong> has embraced motorcycle culture with popular meet-ups at Noccalula Falls and scenic routes like AL-211 up Lookout Mountain. Gadsden's position on the I-59 corridor (Birmingham-Chattanooga route) brings through-traffic that riders must navigate carefully.
              </p>
              <p className="text-muted-foreground mb-4">
                In <strong>Cherokee County</strong>, rural highways around Weiss Lake and connecting routes to the Talladega Scenic Drive attract weekend riders. The open roads and mountain foothills offer beautiful rides but present challenges—narrow two-lanes, wildlife crossings, and higher speeds on country roads mean even infrequent accidents can be severe. <strong>Madison County</strong> riders access Huntsville's growing urban grid and quick escapes to rural routes, while <strong>Tuscaloosa</strong> and <strong>Etowah</strong> counties each averaged about one tornado per year historically—a reminder that comprehensive coverage protects bikes from storm damage during Alabama's severe weather season.
              </p>
              <p className="text-muted-foreground mb-4">
                Georgia's riders enjoy different dynamics. <strong>Floyd County</strong> provides access to scenic northwest Georgia routes—riders from Rome cruise U.S. 27 to Lookout Mountain or explore backroads toward the Appalachian foothills. <strong>Fulton County</strong> presents Atlanta's challenging urban riding environment: the Downtown Connector and I-285 Perimeter demand defensive riding skills, and Georgia's 217 motorcyclist deaths in 2022 (12% of all traffic fatalities) underscore the risk. Metro Atlanta's vibrant bike nights in East Atlanta Village and charity rides reflect strong rider culture, but bike theft remains a serious concern—high-end sport bikes and custom Harleys disappear from parking decks and apartments.
              </p>
              <p className="text-muted-foreground">
                <strong>Gwinnett County</strong> riders balance suburban routes with I-85 corridor challenges, while <strong>Cobb County</strong> offers both Marietta's city streets and quick access to north Georgia mountain roads. <strong>DeKalb</strong> and <strong>Bartow</strong> counties each see their share of commuter riders and weekend warriors heading to the mountains.
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">
                ZIP code-level considerations matter for motorcycle insurance pricing and risk. Birmingham's <strong>35242</strong> (Hoover/Greystone) offers suburban garaging advantages—lower theft risk than downtown while maintaining access to Jefferson County's riding community and events. <strong>35215</strong> (northeast Birmingham) sees higher urban theft exposure, making comprehensive coverage critical. <strong>35173</strong> (Trussville) combines safe garaging with proximity to scenic rides toward Pell City and Logan Martin Lake.
              </p>
              <p className="text-muted-foreground mb-4">
                Montgomery's <strong>36117</strong> includes EastChase's newer developments where garage parking is common, plus military riders from Maxwell Air Force Base who often carry solid coverage given deployment considerations. <strong>35960</strong> (Centre in Cherokee County) delivers rural garaging benefits—minimal theft risk, lower overall premiums, and easy access to Weiss Lake's scenic loop roads and connections to mountain routes.
              </p>
              <p className="text-muted-foreground mb-4">
                Georgia's <strong>30044</strong> and <strong>30043</strong> (Lawrenceville area) reflect Gwinnett's suburban character—many riders garage bikes in newer subdivisions before weekend runs to Helen or Dahlonega. <strong>30161</strong> (Rome) balances small-city affordability with northwest Georgia's riding opportunities. <strong>30120</strong> (Cartersville) provides I-75 corridor access while staying clear of Atlanta's urban theft hotspots. Atlanta's <strong>30349</strong> (College Park area) carries higher theft risk—sport bikes and cruisers need comprehensive coverage and preferably secured parking.
              </p>
              <p className="text-muted-foreground">
                Seasonal patterns affect all these areas: Alabama and Georgia riders enjoy long seasons (March through November), but summer thunderstorms create afternoon hazards, and winter sees reduced riding in December-February. Many riders carry year-round policies to protect against off-season theft and storm damage, though some carriers offer lay-up discounts for stored bikes.
              </p>
            </div>
          </div>
        </section>

        {/* Ways to Save Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">How Can I Save on Motorcycle Insurance?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savingsTips.map((tip, index) => {
                const Icon = tip.icon;
                return (
                  <Card key={index} className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-2">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{tip.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{tip.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Alabama Guest Passenger Law Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <Card className="border-2 bg-accent/5">
              <CardHeader>
                <CardTitle className="text-2xl">How Does Alabama's Guest Passenger Law Affect Coverage?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  Alabama's guest statute limits a passenger's ability to sue the rider for ordinary negligence. This affects how standard liability coverage responds if your passenger is injured. Many Alabama riders add guest passenger liability coverage to ensure passengers have full protection. Georgia does not have this limitation—passengers there are treated as standard third parties. We'll explain how this affects your specific situation during the quote process.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center">Motorcycle Insurance Questions We Answer Every Day</h2>
            
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
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center">What Our Clients Say</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <CardContent className="pt-6 flex-grow flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic flex-grow">"{testimonial.text}"</p>
                    <div className="border-t pt-4 mt-auto">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg" asChild aria-label="Read all customer reviews on Google">
                <Link to="/reviews">Read All Reviews →</Link>
              </Button>
            </div>
          </div>
        </section>

        <CompleteYourCoverage excludeService="motorcycle" />

        {/* Areas We Serve Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Motorcycle Insurance Across AL & GA</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We insure riders across Alabama (AL) — including Jefferson County (Birmingham), Montgomery County, Mobile County, Cherokee County (Centre), Etowah County (Gadsden), and Calhoun County (Anniston) — as well as Georgia (GA) communities in Floyd County (Rome), Bartow County (Cartersville), Gordon County (Calhoun), Whitfield County (Dalton), Fulton County (Atlanta), and Gwinnett County.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm mb-8">
              <p className="text-center text-muted-foreground">
                <strong>ZIP Codes We Serve:</strong> 35242, 35215 (Birmingham area), 36117 (Montgomery), 36695 (Mobile), 35960 (Centre), 30161 (Rome), 30120 (Cartersville), 30701 (Calhoun), 30720 (Dalton), and surrounding communities throughout AL and GA.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Alabama */}
              <div className="bg-background shadow-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Alabama (AL)
                </h3>
                <div className="flex flex-wrap gap-3">
                  {alabamaCities.map((city, index) => (
                    <Link 
                      key={index}
                      to={`/${city.slug}`}
                      className="px-4 py-2 bg-muted rounded-full text-sm border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Georgia */}
              <div className="bg-background shadow-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Georgia (GA)
                </h3>
                <div className="flex flex-wrap gap-3">
                  {georgiaCities.map((city, index) => (
                    <Link 
                      key={index}
                      to={`/${city.slug}`}
                      className="px-4 py-2 bg-muted rounded-full text-sm border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
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

        {/* Cross-Link to Learn Page */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <SectionHeading className="mb-6 text-center">Learn More About Motorcycle Insurance</SectionHeading>
            <p className="text-center text-muted-foreground mb-6">
              Want to understand coverage types, gear protection, and riding legally in Alabama and Georgia? Read our comprehensive guide:
            </p>
            <div className="flex justify-center">
              <Link to="/learn/motorcycle-insurance-guide" className="text-primary font-semibold hover:underline text-lg">
                → Motorcycle Insurance in Alabama & Georgia: A Rider's Guide
              </Link>
            </div>
            <p className="text-center text-muted-foreground mt-4 text-sm">
              We cover everything from liability requirements to custom parts coverage, seasonal lay-up options, and how to save on your premium.
            </p>
          </div>
        </section>

        {/* Internal Linking Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-lg text-muted-foreground">
              Protect more than your bike. Explore our{" "}
              <Link to="/services/auto-insurance" className="text-primary font-semibold hover:underline">auto insurance</Link> for your car or truck,{" "}
              <Link to="/services/home-insurance" className="text-primary font-semibold hover:underline">home insurance</Link> for your property, or{" "}
              <Link to="/services/boat-insurance" className="text-primary font-semibold hover:underline">boat insurance</Link> for your watercraft. 
              Bundle multiple policies to save 10-15% across all your coverage in AL and GA.
            </p>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary-light text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Ready to Get Your Motorcycle Covered?</h2>
            <p className="text-lg mb-8 opacity-90">
              Call us today or request a free bike insurance quote online. We'll walk you through your options and answer every question.
            </p>
            
            <div className="mb-6">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent-light text-lg px-8 py-6 h-auto shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                asChild
              >
                <Link to="/#quote-form">Get Bike Insurance Quote</Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-white/90">
              <span>Or call us:</span>
              <TrackedPhone
                phone="(256) 927-6287"
                phoneRaw="2569276287"
                location="Centre, AL"
                office="centre"
                pageType="service-motorcycle-cta"
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
                pageType="service-motorcycle-cta"
                pageUrl={location.pathname}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                ariaLabel="Call Rome, Georgia office at (706) 784-6511"
              >
                <Phone className="h-4 w-4" />
                (706) 784-6511
              </TrackedPhone>
            </div>

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

export default MotorcycleInsurance;

