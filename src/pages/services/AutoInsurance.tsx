import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { TrackedPhone } from "@/components/shared/TrackedPhone";
import { 
  Shield, Car, Umbrella, Users, Heart, Wrench,
  Cloud, Target, DollarSign, FileCheck, CreditCard, TrendingDown,
  Phone, MapPin, Star, CheckCircle, Home, Key, Building2, Bike
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
    description: "Covers non-crash losses like hail, wind, flood, fire, theft, vandalism, and falling objects. Often paired with Collision when your vehicle still has meaningful value."
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
    description: "Combining auto with your home or condo can deliver sizable multi-policy savings and simplify billing. Even renters can benefit when packaging policies together."
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
  { name: "Forsyth", slug: "forsyth-ga" }
];

const AutoInsurance = () => {
  const location = useLocation();
  // JSON-LD Schema for FAQ
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
    "description": "Comprehensive auto insurance coverage including liability, collision, comprehensive, and uninsured motorist protection for Alabama and Georgia drivers.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  };

  // BreadcrumbList Schema
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
        "name": "Auto Insurance",
        "item": "https://coffeyagencies.com/services/auto-insurance"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Auto Insurance in Alabama & Georgia | Coffey Agencies</title>
        <meta name="description" content="Clear options, fast quotes, and a team that actually picks up the phone. Get auto insurance coverage in Alabama and Georgia with local expertise." />
        <link rel="canonical" href="https://coffeyagencies.com/services/auto-insurance" />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="Auto Insurance in Alabama & Georgia | Coffey Agencies" />
        <meta property="og:description" content="Clear options, fast quotes, and a team that actually picks up the phone. Get auto insurance coverage in Alabama and Georgia with local expertise." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coffeyagencies.com/services/auto-insurance" />
        <meta property="og:site_name" content="Coffey Agencies" />
        <meta property="og:image" content="https://coffeyagencies.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Auto Insurance in Alabama & Georgia" />
        <meta name="twitter:description" content="Clear options, fast quotes, and a team that actually picks up the phone. Get auto insurance in AL and GA." />
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
                <li><Link to="/#services" className="hover:text-white">Services</Link></li>
                <li>/</li>
                <li className="text-white font-medium">Auto Insurance</li>
              </ol>
            </nav>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                Auto Insurance in Alabama & Georgia
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-6 drop-shadow-md">
                Clear options, fast quotes, and a team that actually picks up the phone
              </p>
              <p className="text-lg text-white/90 max-w-3xl mx-auto mb-6 drop-shadow-md">
                We help you choose coverages that protect your budget and your daily life. Expect straight talk on limits and deductibles, quick paperwork, and follow-through at claim time. Bundle with home insurance or condo insurance to unlock additional savings.
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
                  <Link to="/contact">Get Your Free Quote</Link>
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
                  Alabama and Georgia drivers face a blend of rural highways, busy metro interstates, and seasonal severe weather. Spring and summer storms can bring hail and wind; fall brings deer activity; year-round, traffic density varies widely. These conditions influence how we balance deductibles and coverages.
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

        {/* Complete Your Coverage Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Complete Your Coverage</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore additional insurance options to protect every aspect of your life.
              </p>
            </div>
            
            {/* Top row: 3 cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {/* Home Insurance */}
              <Card className="h-full flex flex-col border border-gray-200 border-t-4 border-t-accent shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center mb-3">
                    <Home className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>Home Insurance</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Comprehensive homeowners coverage for Alabama and Georgia properties with protection against regional weather risks.
                  </p>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white" asChild aria-label="Learn more about Home Insurance">
                    <Link to="/services/home-insurance">Learn More →</Link>
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
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Affordable renters insurance starting at $8/month with auto bundle. Protect your belongings and liability.
                  </p>
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
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Specialized coverage for condo owners protecting your unit improvements, personal property, and liability.
                  </p>
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
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Protect your family's financial future with affordable term or whole life coverage starting at $25/month.
                  </p>
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
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Coverage built for riders—cruisers, sport bikes, and touring machines. Custom parts coverage and honest advice.
                  </p>
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
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Auto Insurance Across Alabama & Georgia</h2>
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

        {/* Final CTA */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary-light">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready for a clearer, smarter auto policy?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start online or talk with a friendly local agent today.
            </p>
            
            <form
              name="coffey-insurance-lead"
              method="POST"
              data-netlify="true"
              className="max-w-md mx-auto mb-4"
            >
              <input type="hidden" name="form-name" value="coffey-insurance-lead" />
              <Button 
                type="submit"
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent-light text-lg px-8 py-6 h-auto shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                Get Your Free Quote
              </Button>
            </form>

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
