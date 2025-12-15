import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { TrackedPhone } from "@/components/shared/TrackedPhone";
import { CompleteYourCoverage } from "@/components/shared/CompleteYourCoverage";
import { 
  Shield, Car, Umbrella, Users, Heart, Wrench,
  Cloud, Target, DollarSign, FileCheck, CreditCard, TrendingDown,
  Phone, MapPin, Star, CheckCircle
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import heroBackground from "@/assets/auto-insurance-hero.jpg";

const coverageTypes = [
  {
    icon: Shield,
    title: "Liability (BI/PD)",
    description: "Pays others when you're legally responsible for injury (bodily injury) or property damage. Higher limits protect income, savings, and future earnings. Many households choose limits above state minimums for real-world protection."
  },
  {
    icon: Car,
    title: "Collision",
    description: "Repairs or replaces your vehicle after a crash with another car or object, regardless of fault. You'll pick a deductible; a higher deductible generally lowers your premium."
  },
  {
    icon: Umbrella,
    title: "Comprehensive",
    description: "Covers non-crash losses like hail, wind, flood, fire, theft, vandalism, and falling objects — particularly important during Alabama's tornado season (March-May) and Georgia's severe thunderstorm season. Often paired with Collision when your vehicle still has meaningful value."
  },
  {
    icon: Users,
    title: "Uninsured/Underinsured Motorist (UM/UIM)",
    description: "Protects you and passengers if you're hit by a driver with little or no insurance. In many cases it mirrors your liability limits and can be the most important add-on you buy."
  },
  {
    icon: Heart,
    title: "Medical Payments (MedPay)",
    description: "Helps pay medical bills for you and your passengers after an accident, regardless of fault. Useful if you have high-deductible health insurance or want extra cushion for out-of-pocket costs."
  },
  {
    icon: Wrench,
    title: "Popular Endorsements",
    description: "Rental Reimbursement (paid rental car while yours is in the shop), Roadside Assistance (tows, jumps, lockouts), New Car Replacement and Custom Equipment where eligible."
  }
];

const regionalConsiderations = [
  {
    title: "Comprehensive & deductibles",
    description: "If hail or wind claims are a concern, consider a moderate deductible you're comfortable paying quickly."
  },
  {
    title: "Liability & UM/UIM",
    description: "Higher limits make sense where interstate speeds and medical costs are significant."
  },
  {
    title: "Collision choices",
    description: "On older vehicles, removing Collision may be sensible once the car's value drops below your annual premium + deductible."
  }
];

const savingsTips = [
  {
    icon: FileCheck,
    title: "Bundle with property",
    description: "Combining your car insurance with your home or condo can deliver sizable multi-policy savings (15-25%) and simplify billing. AL and GA both allow credit-based insurance scoring, so maintaining good credit can also lower your auto insurance premium."
  },
  {
    icon: Shield,
    title: "Safe driver / claims-free",
    description: "Maintaining a clean record typically reduces rates over time. Defensive driving courses can help in certain scenarios; ask us if one makes sense for you."
  },
  {
    icon: Target,
    title: "Telematics-ready",
    description: "Usage-based programs may reward smooth braking, steady speeds, and limited late-night driving. Opt in when it fits your habits; it's not for everyone."
  },
  {
    icon: CreditCard,
    title: "Autopay & paperless",
    description: "Set-and-forget payments and digital documents can trim costs and prevent accidental lapses that might spike your rate later."
  },
  {
    icon: DollarSign,
    title: "Paid-in-full",
    description: "Paying the term upfront typically lowers total cost compared with monthly installments. We'll price both ways so you can choose."
  },
  {
    icon: TrendingDown,
    title: "Right-sized deductibles",
    description: "Raising deductibles lowers premium, but don't push them beyond what you could comfortably pay tomorrow. We'll model options before you decide."
  }
];

const faqs = [
  {
    question: "What liability limits do you usually recommend in Alabama and Georgia?",
    answer: "State minimums are designed to make policies legal, not necessarily adequate. Many households choose higher limits to protect wages, savings, and future earnings after a serious accident. If you own property, have significant income, or regularly drive interstates, consider higher bodily injury and property damage limits, plus matching UM/UIM. We'll price a few tiers side-by-side so you can see the cost difference and choose confidently."
  },
  {
    question: "How do deductibles affect my premium?",
    answer: "Deductibles are what you pay out of pocket before coverage kicks in. Higher deductibles usually mean lower premiums, but they should always match your cash-on-hand. For hail-prone areas, a moderate Comprehensive deductible can prevent surprises. For Collision, raising the deductible often makes sense if the vehicle's value is declining. We'll show several options so you can balance savings with practical affordability."
  },
  {
    question: "What does UM/UIM cover?",
    answer: "Uninsured/Underinsured Motorist coverage helps when the other driver has little or no insurance. It can pay for medical bills, lost wages, and, in some cases, property damage depending on the specific form. Because medical costs and litigation can be significant, many drivers choose UM/UIM limits that mirror their liability limits. It's an important layer that protects you, not just other people."
  },
  {
    question: "How can I lower my rate without underinsuring my car?",
    answer: "Start with bundling and autopay/paperless. Next, confirm that liability and UM/UIM limits are appropriately high, then explore deductibles that fit your emergency fund. Consider a telematics program if your driving patterns are steady and daytime-heavy. Finally, review vehicles you're insuring—dropping Collision on an older car may make sense while keeping Comprehensive for hail and theft risks."
  },
  {
    question: "What documents do I need to get an auto quote?",
    answer: "Driver's license info for each driver, garaging address, prior insurance details (if any), and vehicle VINs or year/make/model. We'll also ask about mileage and usage. If you've had tickets or accidents in the last few years, approximate dates help us price accurately. With that, most quotes take only a few minutes."
  },
  {
    question: "What are the first steps if I have a claim?",
    answer: "Make sure everyone is safe, contact authorities if needed, take photos, and collect the other driver's info. Then call us—we'll help you start the claim and outline next steps like repairs, rental reimbursement, and medical care. Keep your policy number handy and avoid admitting fault at the scene. Our role is to make this process as smooth as possible."
  },
  {
    question: "Does Georgia require uninsured motorist coverage?",
    answer: "No, Georgia does not require uninsured motorist (UM) coverage by law. However, Georgia insurers must offer UM coverage to every policyholder — you have to actively decline it in writing. With approximately 12% of Georgia drivers uninsured, adding UM coverage protects you if you're hit by someone without insurance. We recommend UM coverage for both AL and GA drivers given the financial risk of an uninsured accident."
  },
  {
    question: "Is car insurance cheaper in Alabama or Georgia?",
    answer: "Generally, yes — Alabama car insurance averages about $200 less per year than Georgia. Alabama's average full coverage premium runs approximately $1,550 annually compared to Georgia's $1,760. Factors include Alabama's more rural population, lower traffic density outside Birmingham, and fewer uninsured motorist claims. However, individual rates vary significantly based on your specific location, vehicle, and driving history. Atlanta-area drivers typically pay the highest premiums in the region due to traffic congestion and vehicle theft rates."
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
  { name: "Forsyth", slug: "forsyth-ga" },
  { name: "Canton", slug: "canton-ga" },
  { name: "Dallas", slug: "dallas-ga" }
];

const AutoInsurance = () => {
  const location = useLocation();
  // JSON-LD Schema for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Auto Insurance Frequently Asked Questions",
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
    "@id": "https://coffeyagencies.com/services/auto-insurance#service",
    "serviceType": "Auto Insurance",
    "provider": {
      "@id": "https://coffeyagencies.com/#organization"
    },
    "areaServed": [
      { "@type": "State", "name": "Alabama" },
      { "@type": "State", "name": "Georgia" }
    ],
    "description": "Comprehensive auto insurance coverage including liability, collision, comprehensive, and uninsured motorist protection for Alabama and Georgia drivers.",
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
        "name": "Auto Insurance",
        "item": "https://coffeyagencies.com/services/auto-insurance"
      }
    ]
  };

  // HowTo Schema for AEO/GEO optimization
  const howToSchema = {
    "@type": "HowTo",
    "name": "How to Get Auto Insurance in Alabama & Georgia",
    "description": "Get auto insurance coverage from a local independent agent in 4 simple steps.",
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
        <title>Car Insurance Quotes Alabama & Georgia | Compare Rates | Coffey Agencies</title>
        <meta name="description" content="Car insurance quotes in Alabama & Georgia. Compare auto insurance rates, save with bundling discounts. 4.7★ Google rating. Serving AL & GA from Centre and Rome offices." />
        <link rel="canonical" href="https://coffeyagencies.com/services/auto-insurance" />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="Car Insurance Quotes Alabama & Georgia | Compare Rates | Coffey Agencies" />
        <meta property="og:description" content="Car insurance quotes in Alabama & Georgia. Compare auto insurance rates, save with bundling discounts. 4.7★ Google rating. Serving AL & GA from Centre and Rome offices." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coffeyagencies.com/services/auto-insurance" />
        <meta property="og:site_name" content="Coffey Agencies" />
        <meta property="og:image" content="https://coffeyagencies.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Car Insurance Quotes Alabama & Georgia | Compare Rates" />
        <meta name="twitter:description" content="Car insurance quotes in Alabama & Georgia. Compare auto insurance rates, save with bundling discounts. Serving AL & GA." />
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
        aria-label="Auto insurance hero section"
        className="relative min-h-[600px] flex items-end overflow-hidden"
      >
        <img 
          src={heroBackground} 
          alt="Car keys and auto insurance documents on desk" 
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
                <li className="text-white font-medium">Auto Insurance</li>
              </ol>
            </nav>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                Car Insurance in Alabama & Georgia
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-6 drop-shadow-md">
                Clear options, fast quotes, and a team that actually picks up the phone
              </p>
              <p className="text-lg text-white/90 max-w-3xl mx-auto mb-6 drop-shadow-md">
                Whether you need car insurance in Birmingham or coverage in Atlanta, we help Alabama (AL) and Georgia (GA) drivers choose coverages that protect your budget and your daily life. Expect straight talk on limits and deductibles, quick paperwork, and follow-through at claim time. Bundle your car insurance with home insurance or condo insurance to unlock additional savings.
              </p>
              <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
                {[
                  "Most quotes in minutes with the info you already have",
                  "We explain coverages in plain English—no jargon, no upsell pressure",
                  "Local help if something goes wrong, from fender-benders to major storms"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 text-left">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5 drop-shadow-md" />
                    <p className="text-sm text-white drop-shadow-md">{item}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200" asChild>
                  <Link to="/#quote-form">Get Quote</Link>
                </Button>
                <Button size="lg" className="bg-white hover:bg-white text-primary border border-primary shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200" asChild>
                  <TrackedPhone
                    phone="(256) 927-6287"
                    phoneRaw="2569276287"
                    location="Centre, AL"
                    office="centre"
                    pageType="service-auto"
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
                    pageType="service-auto"
                    pageUrl={location.pathname}
                    ariaLabel="Call Rome, Georgia office at (706) 784-6511"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Georgia: (706) 784-6511
                  </TrackedPhone>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Coverage Types */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Build a policy that actually fits your risk</h2>
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
                      <CardTitle className="text-xl">{coverage.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {coverage.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Regional Considerations */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Cloud className="h-7 w-7 text-primary" />
                  <CardTitle className="text-2xl">Storms, hail, and mixed driving environments</CardTitle>
                </div>
                <p className="text-muted-foreground">
                  Alabama (AL) and Georgia (GA) drivers face a blend of rural highways, busy metro interstates, and seasonal severe weather. Whether you commute on I-20 through Birmingham, I-75 through Atlanta, I-65 through Montgomery, or US-431 through Anniston, we structure car insurance coverage for your specific driving patterns and risks. Spring and summer storms bring hail and wind; fall brings deer activity; year-round, traffic density varies widely. These conditions influence how we balance deductibles and coverages.
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {regionalConsiderations.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-1.5 rounded-full bg-primary/10 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* County & ZIP Code Geographic Content */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h3 className="text-xl md:text-2xl font-bold mb-6">Coverage Across Alabama & Georgia Counties and Communities</h3>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground mb-4">
                Auto insurance needs vary dramatically across our service territory. <strong>Jefferson County</strong> drivers navigate some of Alabama's busiest roads—I-65 through Birmingham handles over 160,000 vehicles daily, with the notorious "Malfunction Junction" interchange recording accident frequencies that push premiums to the state's highest tier. <strong>Tuscaloosa County</strong> faces unique challenges during the academic year when University of Alabama students flood the streets, spiking accident rates on McFarland Boulevard and I-59/20, particularly during football season. In <strong>Cherokee County</strong>, rural highways like U.S. 411 and 278 present different risks—deer collisions and longer response times, though traffic congestion is minimal compared to metro areas.
              </p>
              <p className="text-muted-foreground mb-4">
                Georgia's metro counties tell a similar story. <strong>Fulton County</strong> drivers in Atlanta contend with the I-75/85 Downtown Connector carrying 300,000+ vehicles per day, contributing to average premiums around $3,400-$3,500 annually—the state's highest. <strong>Gwinnett County</strong> sees heavy I-85 corridor traffic with 150,000+ daily vehicles, while <strong>Cobb County's</strong> I-75 segment brings its own congestion challenges. <strong>Floyd County</strong> in Rome offers more manageable traffic on U.S. 27 and Georgia 20, though the Coosa River bridges and downtown corridors see their share of fender-benders.
              </p>
              <p className="text-muted-foreground mb-4">
                Uninsured motorist coverage is crucial across both states—Alabama's uninsured driver rate sits around 14%, while Georgia's reaches 18%. Whether you're commuting on <strong>Madison County's</strong> I-565 to Huntsville's aerospace employers or navigating <strong>DeKalb County's</strong> Perimeter highways, adequate UM/UIM protection matters. <strong>Etowah County</strong> drivers on I-59 and U.S. 431 face similar exposure, as do <strong>Bartow County</strong> residents on I-75's busy Cartersville corridor.
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">
                Specific ZIP codes reveal even more granular risk profiles. Birmingham's <strong>35242</strong> (Greystone/Hoover area) sees moderate premiums despite Jefferson County's high average—newer infrastructure and lower crime keep rates below downtown Birmingham's 35203. <strong>35215</strong> (northeast Birmingham near Roebuck) faces higher theft rates that elevate comprehensive coverage costs. <strong>35173</strong> (Trussville) enjoys some of Jefferson County's lowest rates thanks to newer subdivisions, strong fire protection, and family-focused demographics.
              </p>
              <p className="text-muted-foreground mb-4">
                Montgomery's <strong>36117</strong> (EastChase/Deer Creek area) combines busy Eastern Boulevard traffic with proximity to Maxwell Air Force Base, creating a mix of commuter and military family insurance needs. Alabama's statewide average hovers around $1,500 annually for minimum coverage, but Jefferson and Tuscaloosa counties often run 20-30% higher.
              </p>
              <p className="text-muted-foreground mb-4">
                In Georgia, <strong>30044</strong> and <strong>30043</strong> (Lawrenceville) reflect Gwinnett County's suburban growth—newer homes, dual-income households, and I-85 corridor commutes. These ZIP codes see premiums around $2,800-$3,200 for full coverage. Atlanta's <strong>30349</strong> (near College Park and the airport) carries higher theft risk and accident frequency, pushing premiums above county averages. <strong>30161</strong> (Rome) maintains more moderate rates around $2,400-$2,600, reflecting Floyd County's smaller-city dynamics. <strong>30120</strong> (Cartersville in Bartow County) balances I-75 corridor exposure with less urban crime, settling in the $2,500-$2,800 range.
              </p>
              <p className="text-muted-foreground">
                <strong>35960</strong> (Centre in Cherokee County) consistently delivers some of Alabama's most competitive rates—rural roads, low theft, and tight-knit community culture keep annual premiums often below $1,400 for full coverage when bundled with home insurance.
              </p>
            </div>
          </div>
        </section>

        {/* Ways to Save */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">How Can I Lower My Auto Insurance Premium?</h2>
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
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Auto insurance questions we answer every day</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
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

        {/* Testimonials */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Real feedback from our community</h2>
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
          </div>
        </section>

        <CompleteYourCoverage excludeService="auto" />

        {/* Cost Comparison Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="h-7 w-7 text-accent" />
                  <CardTitle className="text-2xl">How Much Does Car Insurance Cost in Alabama vs Georgia?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Car insurance costs vary by state, driving record, vehicle, and coverage level. On average, <strong>Alabama drivers pay approximately $1,550 per year</strong> for full coverage auto insurance, while <strong>Georgia drivers pay around $1,760</strong> — about $200 more annually. Alabama's lower population density and fewer urban traffic risks contribute to generally lower premiums.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  However, your individual rate depends on factors like your ZIP code, credit history, vehicle type, and driving record. Drivers in Atlanta typically pay more than drivers in rural AL or GA counties due to higher traffic density and theft rates.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Both states require minimum liability coverage of <strong>25/50/25</strong> — that's $25,000 bodily injury per person, $50,000 per accident, and $25,000 property damage. While this meets legal requirements, most drivers benefit from higher limits, especially on busy corridors like I-20, I-65, I-75, and I-85.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Car Insurance Across AL & GA</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We serve drivers across Alabama — including Jefferson County (Birmingham), Montgomery County, Mobile County, Cherokee County (Centre), Calhoun County, and Etowah County — as well as Georgia communities in Floyd County (Rome), Fulton County (Atlanta), Gwinnett County, Cobb County, and Bartow County.
              </p>
            </div>

            {/* ZIP Codes */}
            <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Coverage extends to ZIP codes including:</strong> 35242, 35215, 35173 (Birmingham area), 36116, 36117 (Montgomery), 36695 (Mobile), 35960 (Centre), 30161 (Rome), 30349 (Atlanta), 30043, 30044 (Lawrenceville), and surrounding communities throughout AL and GA.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Alabama */}
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Alabama (AL)
                </h3>
                <div className="flex flex-wrap gap-3">
                  {alabamaCities.map((city, index) => (
                    <Link 
                      key={index}
                      to={`/${city.slug}`}
                      className="px-4 py-2 bg-muted/50 rounded-full text-sm border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Georgia */}
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Georgia (GA)
                </h3>
                <div className="flex flex-wrap gap-3">
                  {georgiaCities.map((city, index) => (
                    <Link 
                      key={index}
                      to={`/${city.slug}`}
                      className="px-4 py-2 bg-muted/50 rounded-full text-sm border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
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

        {/* Cross-Link to Learn Pages */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <SectionHeading className="mb-6 text-center">Learn More About Auto Insurance</SectionHeading>
            <p className="text-center text-muted-foreground mb-6">
              Want to understand coverage types, state requirements, and how to save? Explore our guides:
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 text-center">
              <Link to="/learn/auto-insurance-guide" className="text-primary font-semibold hover:underline">
                → Complete Auto Insurance Guide for AL & GA
              </Link>
              <Link to="/learn/alabama-insurance-requirements" className="text-primary font-semibold hover:underline">
                → Alabama Insurance Requirements
              </Link>
              <Link to="/learn/georgia-insurance-requirements" className="text-primary font-semibold hover:underline">
                → Georgia Insurance Requirements
              </Link>
              <Link to="/learn/bundling-home-and-auto" className="text-primary font-semibold hover:underline">
                → How Bundling Saves You Money
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Linking Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-lg text-muted-foreground">
              Looking for more than auto coverage? Explore our{" "}
              <Link to="/services/home-insurance" className="text-primary font-semibold hover:underline">home insurance</Link>,{" "}
              <Link to="/services/renters-insurance" className="text-primary font-semibold hover:underline">renters insurance</Link>, or{" "}
              <Link to="/services/motorcycle-insurance" className="text-primary font-semibold hover:underline">motorcycle insurance</Link> options. 
              Bundle multiple policies to maximize your savings across AL and GA.
            </p>
          </div>
        </section>

        {/* Local Guide: Auto Insurance Costs in Rome, GA */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto max-w-3xl text-center">
            <SectionHeading centered className="mb-4">
              Driving in Rome, GA?
            </SectionHeading>
            <p className="text-lg text-muted-foreground mb-6">
              See what drivers in Rome actually pay for auto insurance, what impacts your premium, and how to save with local discounts.
            </p>
            <Button asChild>
              <Link to="/learn/auto-insurance-costs-rome-ga">
                Read the Rome, GA Auto Insurance Cost Guide
              </Link>
            </Button>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary-light">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready for a clearer, smarter auto policy?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start online or talk with a friendly local agent today.
            </p>
            
            <div className="max-w-md mx-auto mb-4">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent-light text-lg px-8 py-6 h-auto shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                asChild
              >
                <Link to="/#quote-form">Get Quote</Link>
              </Button>
            </div>

            {/* Phone Links - Secondary CTAs */}
            <div className="flex flex-wrap justify-center items-center gap-4 mt-4 text-sm text-white/90">
              <span>Or call us:</span>
              <TrackedPhone
                phone="(256) 927-6287"
                phoneRaw="2569276287"
                location="Centre, AL"
                office="centre"
                pageType="service-auto-cta"
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
                pageType="service-auto-cta"
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

export default AutoInsurance;
