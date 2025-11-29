import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import heroBackground from "@/assets/motorcycle-insurance-hero.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, Car, Umbrella, Users, Heart, Wrench,
  FileCheck, CreditCard, DollarSign, TrendingDown, Target, Home,
  Phone, MapPin, Star, CheckCircle, Bike, Award, Key, Building2
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet";

const coverageTypes = [
  {
    icon: Shield,
    title: "Liability (BI/PD)",
    description: "Required in both Alabama and Georgia at 25/50/25 minimums. Pays for injuries and property damage you cause to others. Higher limits protect your assets if you're sued after a serious accident—especially important given medical costs and litigation trends."
  },
  {
    icon: Car,
    title: "Collision",
    description: "Covers damage to your motorcycle from crashes with vehicles or objects, regardless of fault. Required if your bike is financed. Choose a deductible that matches your emergency fund—higher deductibles lower premiums but increase out-of-pocket costs at claim time."
  },
  {
    icon: Umbrella,
    title: "Comprehensive",
    description: "Protects against theft, vandalism, fire, falling objects, and weather damage. With motorcycle theft rates significantly higher than cars and Alabama's severe storm season, comprehensive coverage is worth considering even on older bikes."
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
    description: "The Motorcycle Safety Foundation course satisfies licensing requirements and earns premium discounts with most carriers. The skills pay dividends beyond the savings."
  },
  {
    icon: Home,
    title: "Bundle policies",
    description: "Combining motorcycle with auto, home, or renters insurance unlocks multi-policy discounts and simplifies your coverage."
  },
  {
    icon: Bike,
    title: "Choose your bike wisely",
    description: "Cruisers and touring motorcycles cost less to insure than sport bikes. If you're shopping for a new ride, insurance cost is worth factoring in."
  },
  {
    icon: Shield,
    title: "Secure storage",
    description: "Garaging your bike and installing anti-theft devices (alarms, GPS trackers, disc locks) can reduce comprehensive premiums."
  },
  {
    icon: DollarSign,
    title: "Pay in full",
    description: "Annual payment typically costs less than monthly installments. We'll quote both so you can compare."
  },
  {
    icon: Target,
    title: "Maintain a clean record",
    description: "Tickets and claims increase rates. Consistent safe riding habits pay off over time."
  }
];

const faqs = [
  {
    question: "Do I need motorcycle insurance in Alabama and Georgia?",
    answer: "Yes, motorcycle insurance is legally required in both states. Alabama and Georgia mandate identical minimum liability limits: $25,000 bodily injury per person, $50,000 per accident, and $25,000 property damage (25/50/25). Riding without insurance in Alabama carries fines up to $500 and registration suspension. Georgia penalties range from $200–$300 plus suspension. We recommend limits above minimums for real-world protection."
  },
  {
    question: "How much does motorcycle insurance cost in Alabama and Georgia?",
    answer: "Liability-only coverage averages around $160/year in Alabama and $190/year in Georgia. Full coverage (adding collision and comprehensive) typically runs $400–$600 annually depending on your bike type, riding history, and location. Sport bikes cost more to insure than cruisers or touring motorcycles. We'll quote your specific situation so you know exactly what to expect."
  },
  {
    question: "Is motorcycle insurance cheaper than car insurance?",
    answer: "Generally yes. Motorcycles typically cost less to insure because they cause less property damage in accidents. However, medical coverage and liability limits should still be adequate since riders face higher injury risk. Many riders find comprehensive coverage worthwhile given theft rates and weather exposure in the Southeast."
  },
  {
    question: "What does motorcycle insurance cover?",
    answer: "Motorcycle insurance covers liability for injuries and damage you cause, collision damage to your bike, comprehensive losses (theft, weather, vandalism), uninsured motorist protection, medical payments, and accessory coverage for custom parts. Optional add-ons include roadside assistance, trip interruption, total loss replacement, and trailer coverage for transport."
  },
  {
    question: "Does motorcycle insurance cover passengers in Alabama?",
    answer: "Alabama's guest passenger statute limits a passenger's ability to sue the rider for ordinary negligence, which affects how standard policies respond. Many Alabama riders add guest passenger liability coverage to ensure passengers are fully protected. Georgia treats passengers as third parties with standard coverage. We'll structure your policy appropriately based on where you ride."
  },
  {
    question: "Are custom parts and accessories covered?",
    answer: "Standard policies include $1,000–$3,000 in accessory coverage. If you've added chrome, saddlebags, custom exhaust, or upgraded components, you can increase this limit up to $30,000 depending on your carrier. Document modifications with photos and receipts for smoother claims. We'll help you determine the right limit for your setup."
  },
  {
    question: "Can I suspend motorcycle insurance during winter?",
    answer: "Laid-up or storage coverage keeps comprehensive active while suspending liability during months you're not riding. However, Alabama requires continuous liability on registered vehicles. If you suspend coverage, you may need to surrender your registration temporarily. We'll structure the right approach for your situation—keeping you protected without overpaying during the off-season."
  },
  {
    question: "Do motorcycle safety courses lower insurance premiums?",
    answer: "Yes, completing an MSF (Motorcycle Safety Foundation) course qualifies you for discounts with most carriers. The course also satisfies licensing requirements in both Alabama and Georgia. Other available discounts include multi-policy bundles, anti-theft devices, paid-in-full payments, and claims-free history. We'll identify every discount you qualify for."
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

const MotorcycleInsurance = () => {
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
    "serviceType": "Motorcycle Insurance",
    "provider": {
      "@type": "InsuranceAgency",
      "name": "Coffey Agencies",
      "url": "https://coffeyagencies.com"
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Alabama"
      },
      {
        "@type": "State",
        "name": "Georgia"
      }
    ],
    "description": "Motorcycle insurance coverage for cruisers, sport bikes, and touring machines including liability, collision, comprehensive, and custom parts protection up to $30,000.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <Helmet>
        <title>Motorcycle Insurance in Alabama & Georgia | Coffey Agencies</title>
        <meta name="description" content="Coverage built for riders—cruisers, sport bikes, and touring machines. Custom parts coverage, local agents who ride, and honest advice on limits." />
        <link rel="canonical" href="https://coffeyagencies.com/services/motorcycle-insurance" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <Header />

      {/* Custom Hero Section with Background Image */}
      <section 
        className="relative min-h-[600px] flex items-end bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        
        {/* Content */}
        <div className="relative z-10 w-full py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                Motorcycle Insurance in Alabama & Georgia
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-6 drop-shadow-md max-w-3xl mx-auto">
                Hit the road with confidence. Custom coverage for your bike, your gear, and your riding style—whether you're cruising backroads or commuting daily.
              </p>
              
              {/* CTA Buttons - styled for dark background */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200" asChild>
                  <Link to="/contact">Get Your Free Quote</Link>
                </Button>
                <Button size="lg" className="bg-white hover:bg-white text-primary border border-primary shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200" asChild>
                  <a href="tel:+12569276287" aria-label="Call Centre, Alabama office at (256) 927-6287">
                    <Phone className="mr-2 h-5 w-5" />
                    Alabama: (256) 927-6287
                  </a>
                </Button>
                <Button size="lg" className="bg-white hover:bg-white text-primary border border-primary shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200" asChild>
                  <a href="tel:+17067846511" aria-label="Call Rome, Georgia office at (706) 784-6511">
                    <Phone className="mr-2 h-5 w-5" />
                    Georgia: (706) 784-6511
                  </a>
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
              <h2 className="text-3xl font-bold mb-4">Build a Policy That Protects You and Your Bike</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Motorcycle insurance works differently than auto insurance. Riders face unique exposures—no steel cage around you, higher theft rates, and custom modifications that standard policies don't cover. We structure coverage to address these realities while keeping premiums reasonable. Bundle with home or auto for multi-policy savings.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coverageTypes.map((coverage, index) => {
                const Icon = coverage.icon;
                return (
                  <Card key={index} className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
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

        {/* Regional Considerations Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-6">Riding Risks in Alabama and Georgia</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                The Southeast offers year-round riding but comes with hazards that shape how we recommend coverage. Georgia recorded 221 motorcyclist fatalities in 2022—the highest in a decade. Alabama saw motorcycle deaths jump 36% from 2023 to 2024. Understanding these risks helps you choose appropriate limits and deductibles.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3">Seasonal weather</h3>
                    <p className="text-muted-foreground">Spring storms bring sudden rain and hail. Summer heat causes fatigue. Fall means leaves on pavement and peak deer season from October through December. Comprehensive coverage addresses weather and animal strikes.</p>
                  </CardContent>
                </Card>

                <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3">High-risk corridors</h3>
                    <p className="text-muted-foreground">I-20, I-65, I-75, I-85, and US-431 (nicknamed "Highway to Hell") see disproportionate motorcycle incidents. Higher liability and UM/UIM limits make sense if you ride these routes regularly.</p>
                  </CardContent>
                </Card>

                <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3">Urban vs. rural</h3>
                    <p className="text-muted-foreground">Metro areas like Atlanta and Birmingham have more crashes overall, while rural roads see more fatalities due to higher speeds and delayed emergency response. Either environment warrants adequate medical coverage.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Ways to Save Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Ways to Lower Your Motorcycle Insurance Premium</h2>
            
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
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <Card className="border-2 bg-accent/5">
              <CardHeader>
                <CardTitle className="text-2xl">Alabama's Guest Passenger Law</CardTitle>
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
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Motorcycle Insurance Questions We Answer Every Day</h2>
            
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
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <CardContent className="pt-6 flex-grow flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
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

        {/* Complete Your Coverage Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Complete Your Coverage</h2>
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
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Protect your vehicles with comprehensive coverage across Alabama and Georgia. Competitive rates with multi-policy discounts.
                  </p>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white" asChild>
                    <Link to="/services/auto-insurance">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

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
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white" asChild>
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
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white" asChild>
                    <Link to="/services/renters-insurance">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Bottom row: 2 cards centered */}
            <div className="grid md:grid-cols-2 gap-6 max-w-[680px] mx-auto">
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
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white" asChild>
                    <Link to="/services/condo-insurance">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

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
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white" asChild>
                    <Link to="/services/life-insurance">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Areas We Serve Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Motorcycle Insurance Across Alabama & Georgia</h2>
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
        <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary-light text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Your Motorcycle Covered?</h2>
            <p className="text-lg mb-8 opacity-90">
              Call us today or request a free quote online. We'll walk you through your options and answer every question.
            </p>
            
            <div className="mb-6">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent-light text-lg px-8 py-6 h-auto shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                asChild
              >
                <Link to="/contact">Get Your Free Quote</Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-white/90">
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
