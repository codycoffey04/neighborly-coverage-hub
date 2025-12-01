import { Helmet } from "react-helmet-async";
import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroBackground from "@/assets/condo-insurance-hero.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Hammer, 
  Sofa, 
  BedDouble, 
  Shield, 
  Heart, 
  Users, 
  Plus, 
  FileCheck,
  Phone,
  Zap,
  ClipboardList,
  Building,
  AlertCircle,
  Camera,
  PhoneCall,
  Wrench,
  Star,
  MapPin,
  CheckCircle,
  ArrowRight,
  Car,
  Home,
  Key,
  Bike
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const coverageTypes = [
  {
    icon: Building2,
    title: "Building Property (Walls-In)",
    description: "Protects the interior of your unit: drywall, paint, built-ins, cabinets, flooring, and fixtures you're responsible for under your condo documents. We'll confirm what the master policy covers so there's no overlap or gaps."
  },
  {
    icon: Hammer,
    title: "Betterments & Improvements",
    description: "Upgrades you've added—premium flooring, custom cabinetry, or bathroom remodels—may exceed standard finishes. We can increase limits so your investment is protected at today's prices."
  },
  {
    icon: Sofa,
    title: "Personal Property",
    description: "Covers belongings like furniture, clothing, and electronics. Choose Replacement Cost (RCV) to avoid depreciation; Actual Cash Value (ACV) reduces premium but pays less at claim time."
  },
  {
    icon: BedDouble,
    title: "Loss of Use",
    description: "Helps with temporary living costs if your unit is uninhabitable after a covered loss—hotel stays, short-term rentals, meals, and extra mileage."
  },
  {
    icon: Shield,
    title: "Personal Liability",
    description: "Protects you if a guest is injured or you accidentally damage someone else's property. Higher limits help safeguard wages and savings."
  },
  {
    icon: Heart,
    title: "Medical Payments",
    description: "Pays small medical bills for guests injured at your condo, regardless of fault—useful for minor incidents to avoid disputes."
  },
  {
    icon: Users,
    title: "Loss Assessment",
    description: "Helps pay your share when the HOA assesses unit owners after a covered loss to common areas or for a deductible. We'll right-size this limit based on your HOA's master policy."
  },
  {
    icon: Plus,
    title: "Popular Add-Ons",
    description: "Water Backup (sump/sewer/drain), Scheduled Valuables (jewelry, art, collectibles), and Electronics or Bike endorsements where available. We'll model options so you can decide."
  },
  {
    icon: FileCheck,
    title: "Master Policy Coordination",
    description: "We request the condominium declarations and master policy summary to identify who covers what, then align your HO-6 to fill the gaps—especially for interior finishes, water damage, and master deductibles."
  }
];

const coverageTable = [
  {
    coverage: "Walls-in Building Property",
    summary: "The finishes and fixtures you insure inside the unit (drywall, cabinets, flooring, built-ins)."
  },
  {
    coverage: "Betterments/Improvements",
    summary: "Upgrades you added—premium floors, custom kitchens or baths—above original specs."
  },
  {
    coverage: "Personal Property",
    summary: "Furniture, clothing, electronics—choose RCV to avoid depreciation at claim time."
  },
  {
    coverage: "Loss Assessment",
    summary: "Helps with your share if the HOA assesses unit owners after a covered loss or large deductible."
  },
  {
    coverage: "Liability & Med Pay",
    summary: "Injuries or property damage you're responsible for; Med Pay helps with small guest injuries."
  }
];

const savingsTips = [
  {
    icon: Building2,
    title: "Bundle home/condo & auto",
    description: "One account, fewer headaches, and meaningful multi-policy savings. We'll price it both ways so you can decide."
  },
  {
    icon: Hammer,
    title: "Newer construction & updates",
    description: "Fire sprinklers, monitored alarms, and recent plumbing/electrical updates can improve insurability and pricing."
  },
  {
    icon: Shield,
    title: "Protective devices",
    description: "Monitored security, smoke/CO detection, water leak sensors and shut-off valves may qualify for credits."
  },
  {
    icon: FileCheck,
    title: "Autopay & paperless",
    description: "Set-and-forget billing helps avoid lapses and can trim premium while keeping documents organized."
  }
];

const claimsSteps = [
  {
    number: "1",
    icon: AlertCircle,
    title: "Check Safety First",
    description: "Make sure everyone is safe and call 911 if needed."
  },
  {
    number: "2",
    icon: Shield,
    title: "Limit Further Damage",
    description: "Shut off water/power if safe; save receipts for emergency work."
  },
  {
    number: "3",
    icon: Camera,
    title: "Document Everything",
    description: "Photos/video of affected areas and a list of damaged items."
  },
  {
    number: "4",
    icon: PhoneCall,
    title: "Call Our Office",
    description: "We'll help open the claim and coordinate with the HOA if needed."
  },
  {
    number: "5",
    icon: Wrench,
    title: "Repair & Follow-Up",
    description: "Arrange estimates and repairs; we'll track progress to settlement."
  }
];

const faqs = [
  {
    question: "How does an HO-6 policy differ from the condo's master policy?",
    answer: "The master policy insures the building and common elements; your HO-6 protects the interior of your unit, your belongings, and your liability. Some associations are \"all-in,\" others are \"bare walls\" or \"walls-in.\" We review your declarations to see what's covered where, then tailor your HO-6 to fill gaps—especially for interior finishes and master deductibles."
  },
  {
    question: "What is Loss Assessment coverage and how much do I need?",
    answer: "If a covered loss affects common areas—roofs, hallways, amenities—the HOA may assess unit owners to cover deductibles or shortfalls. Loss Assessment helps pay your share, up to its limit. We size this amount based on the master policy's deductible and your building's features so a big assessment doesn't become a big surprise."
  },
  {
    question: "Are improvements and betterments covered?",
    answer: "Yes—if you've upgraded flooring, kitchens, or baths beyond what the association originally provided, we can increase your building-property limit for those improvements. Keep receipts or photos when possible; they help document value at claim time."
  },
  {
    question: "How do I protect valuables like jewelry, bikes, or collectibles?",
    answer: "Standard HO-6 policies include sub-limits for certain items. Scheduling valuables provides higher limits, broader causes of loss, and often no deductible for those items. Tell us what you own, and we'll price options for jewelry riders, fine art, instruments, or high-end bikes."
  },
  {
    question: "What information do you need for a condo quote?",
    answer: "Your address, unit details (square footage, floor level), building age, any upgrades, protective devices, prior insurance, and any claims in the last 3–5 years. HOA documents that outline master policy coverage are ideal; we can often retrieve a summary if you don't have them handy."
  },
  {
    question: "What factors most affect my HO-6 price?",
    answer: "Building age and construction, roof and system updates, claims history, credit-based factors, chosen deductibles, and endorsements like Water Backup or scheduled valuables. We can often lower cost via bundling and right-sizing deductibles without stripping essential protection."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Condo Insurance (HO-6)",
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
  "description": "Specialized HO-6 condo insurance protecting walls-in coverage, betterments, personal property, loss assessment, and liability for Alabama and Georgia condo owners.",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock"
  }
};

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

const CondoInsurance = () => {
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
        "name": "Condo Insurance",
        "item": "https://coffeyagencies.com/services/condo-insurance"
      }
    ]
  };

  return (
    <>
      <Header />

      <Helmet>
        <title>Condo Insurance (HO-6) in Alabama & Georgia | Coffey Agencies</title>
        <meta 
          name="description" 
          content="Clear HO-6 condo insurance for Alabama and Georgia unit owners. Walls-in coverage, Loss Assessment, master policy coordination, and local claim support from Coffey Agencies." 
        />
        <link rel="canonical" href="https://coffeyagencies.com/services/condo-insurance" />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="Condo Insurance (HO-6) in Alabama & Georgia | Coffey Agencies" />
        <meta property="og:description" content="Clear HO-6 condo insurance for Alabama and Georgia unit owners. Walls-in coverage, Loss Assessment, master policy coordination, and local claim support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coffeyagencies.com/services/condo-insurance" />
        <meta property="og:site_name" content="Coffey Agencies" />
        <meta property="og:image" content="https://coffeyagencies.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Condo Insurance (HO-6) in Alabama & Georgia" />
        <meta name="twitter:description" content="Clear HO-6 condo insurance for unit owners. Walls-in coverage, Loss Assessment, master policy coordination." />
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

      {/* Custom Hero Section with Background Image */}
      <section
        role="banner"
        aria-label="Condo insurance hero section"
        className="relative min-h-[600px] flex items-end overflow-hidden"
      >
        <img 
          src={heroBackground} 
          alt="Modern condominium building exterior" 
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
                <li className="text-white font-medium">Condo Insurance</li>
              </ol>
            </nav>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                Condo Insurance (HO-6) in Alabama & Georgia
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-6 drop-shadow-md max-w-3xl mx-auto">
                Clear HO-6 coverage built around your unit, your HOA, and your budget
              </p>
              
              {/* Supporting Paragraph - moved from intro section */}
              <p className="text-lg text-white/90 max-w-3xl mx-auto mb-6 drop-shadow-md">
                Condo insurance is about the space you own "from the walls-in," what the master policy covers outside your unit, and how both fit together at claim time. Bundle with auto insurance or align a townhome/condo with the right home insurance where applicable to unlock savings and simpler billing.
              </p>
              
              {/* Trust Badges - 3-column grid with CheckCircle */}
              <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
                {[
                  "Quotes in minutes with the info you already have",
                  "We review HOA docs to align your HO-6 with the master policy",
                  "Local help at claim time—we coordinate with your HOA"
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
            </div>
          </div>
        </div>
      </section>


      {/* Coverage Types */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Your Condo Policy Can Include</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageTypes.map((coverage, index) => (
              <Card key={index} className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0">
                      <coverage.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-lg">{coverage.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {coverage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HO-6 Coverage at a Glance Table */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">HO-6 Coverage at a Glance</h2>
          </div>
          <Card>
            <CardContent className="p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold text-foreground">Coverage</TableHead>
                    <TableHead className="font-bold text-foreground">Plain-English Summary</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {coverageTable.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-semibold">{row.coverage}</TableCell>
                      <TableCell>{row.summary}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Regional Considerations */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Storms, Water, and Vertical Living</h2>
          </div>
          <Card className="border-2">
            <CardContent className="p-8">
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Across Alabama and Georgia, severe thunderstorms, tornado tracks, and occasional tropical remnants can drive wind and water losses. In multi-story buildings, small leaks can turn into large losses as water travels between units. That's why walls-in coverage, Loss Assessment, and thoughtful deductibles matter. We'll verify how the master policy treats wind/hail and whether special deductibles apply—then size your HO-6 to play well with it.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Water & backup</h3>
                    <p className="text-muted-foreground">Consider Water Backup if you have lower-level plumbing or stack risers nearby.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0">
                    <FileCheck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">RCV vs ACV</h3>
                    <p className="text-muted-foreground">RCV on personal property pays better after a loss; ACV saves premium but pays less.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Master deductible risk</h3>
                    <p className="text-muted-foreground">Higher HOA deductibles can trigger assessments—boost Loss Assessment accordingly.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Ways to Save */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ways to Reduce Cost Without Hollowing Out Coverage</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {savingsTips.map((tip, index) => (
              <Card key={index} className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0">
                      <tip.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{tip.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {tip.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Claims Process */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Condo Claims Typically Work</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {claimsSteps.map((step, index) => (
              <Card key={index} className="text-center h-full border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="mx-auto">
                    <div className="w-12 h-12 rounded-full bg-primary shadow-md text-primary-foreground flex items-center justify-center text-xl font-bold mb-3 mx-auto">
                      {step.number}
                    </div>
                    <step.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Condo Insurance Questions We Answer Every Day</h2>
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
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">"{testimonial.text}"</p>
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
              <Link to="/reviews">Read All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Complete Your Coverage Section */}
      <section className="py-16 px-4 bg-muted/30">
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
                <CardDescription className="mb-4 flex-grow">
                  Protect your vehicles with comprehensive coverage across Alabama and Georgia. Competitive rates with multi-policy discounts.
                </CardDescription>
                <Button className="w-full bg-accent hover:bg-accent/90 text-white" asChild aria-label="Learn more about Auto Insurance">
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
                <CardDescription className="mb-4 flex-grow">
                  Comprehensive homeowners coverage for Alabama and Georgia properties with protection against regional weather risks.
                </CardDescription>
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
                <CardDescription className="mb-4 flex-grow">
                  Affordable renters insurance starting at $8/month with auto bundle. Protect your belongings and liability.
                </CardDescription>
                <Button className="w-full bg-accent hover:bg-accent/90 text-white" asChild aria-label="Learn more about Renters Insurance">
                  <Link to="/services/renters-insurance">Learn More →</Link>
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

      {/* Service Areas */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Condo Insurance Across Alabama & Georgia</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Alabama - gray card wrapper */}
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

            {/* Georgia - gray card wrapper */}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have Questions About HO-6 Coverage?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Call a local agent today to discuss your condo insurance needs.
          </p>
          
          {/* Green Button */}
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent-light text-lg px-8 py-6 h-auto shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            asChild
          >
            <Link to="/contact">Get Your Free Quote</Link>
          </Button>

          {/* Phone Links */}
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

export default CondoInsurance;