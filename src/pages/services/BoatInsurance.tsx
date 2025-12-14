import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TrackedPhone } from "@/components/shared/TrackedPhone";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { 
  Shield, 
  Phone, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Anchor,
  Waves,
  Compass,
  LifeBuoy,
  Ship,
  Sailboat,
  MapPin
} from "lucide-react";
import autoHeroImage from "@/assets/auto-insurance-hero.jpg";

// Coverage types data
const coverageTypes = [
  {
    icon: Shield,
    title: "Liability Coverage",
    description: "Pays for bodily injury and property damage you cause to others while operating your boat. If you collide with another vessel or a dock, liability coverage handles the costs so you're not paying out of pocket."
  },
  {
    icon: Ship,
    title: "Collision Coverage",
    description: "Repairs or replaces your boat after a crash with another vessel, object, or submerged hazard. This matters on busy lakes like Allatoona where weekend traffic increases accident risk."
  },
  {
    icon: Anchor,
    title: "Comprehensive Coverage",
    description: "Protects against non-collision losses including theft, fire, vandalism, and storm damage. For Alabama and Georgia boaters, this covers hurricane damage, hail, and tornado-related losses."
  },
  {
    icon: LifeBuoy,
    title: "Uninsured/Underinsured Boater",
    description: "Protects you when another boater causes damage but lacks sufficient insurance. Since boat insurance isn't legally required in either state, many boaters on the water have no coverage at all."
  },
  {
    icon: Compass,
    title: "Medical Payments Coverage",
    description: "Handles medical expenses for you and your passengers regardless of fault. Essential protection for family outings and fishing trips."
  },
  {
    icon: Waves,
    title: "Towing & On-Water Assistance",
    description: "Covers the cost of towing if your boat breaks down on Weiss Lake, Neely Henry, or anywhere else you're stranded."
  }
];

// Regional waterways data
const waterways = [
  {
    name: "Weiss Lake",
    description: "The \"Crappie Capital of the World\" spans 30,200 acres with 447 miles of shoreline right here in Cherokee County. Pontoon boats and bass boats dominate this fisherman's paradise, and boat insurance claims here often involve dock collisions and storm damage."
  },
  {
    name: "Lake Allatoona",
    description: "Georgia's busiest recreational lake sees 3.5 million visitors annually. High weekend traffic means more collision risk. Jet ski insurance and PWC insurance are especially important given the lake's popularity with personal watercraft."
  },
  {
    name: "Coosa River System",
    description: "Connecting Weiss Lake to Neely Henry Lake near Gadsden, the Coosa River hosts fishing tournaments and power boating year-round. River debris and submerged hazards make comprehensive coverage essential."
  },
  {
    name: "Etowah & Oostanaula Rivers",
    description: "These rivers merge in Rome, GA to form the Coosa. Kayakers, anglers, and small craft operators use these waterways regularly."
  },
  {
    name: "Little River",
    description: "Flowing through Little River Canyon National Preserve into Weiss Lake, this scenic waterway attracts kayakers and paddlers seeking whitewater experiences."
  }
];

// Boat types data
const boatTypes = [
  {
    icon: Sailboat,
    title: "Pontoon Boats",
    description: "The most popular boat type on Weiss Lake and Allatoona. Family-friendly and stable, pontoons need coverage for liability and storm damage."
  },
  {
    icon: Anchor,
    title: "Bass Boats & Fishing Boats",
    description: "High-performance outboards designed for tournament fishing. Bass boat insurance covers expensive electronics, trolling motors, and custom modifications."
  },
  {
    icon: Waves,
    title: "Jet Skis & Personal Watercraft",
    description: "PWC insurance protects your jet ski from theft, collision, and liability. Many boaters own jet skis alongside their primary boat — we can bundle both."
  },
  {
    icon: Ship,
    title: "Ski Boats & Wake Boats",
    description: "Popular for waterskiing, wakeboarding, and tubing during summer months. These higher-value boats warrant comprehensive coverage."
  },
  {
    icon: Compass,
    title: "Sailboat Insurance",
    description: "Whether you sail on Lake Allatoona or coastal Georgia waters, sailboat insurance addresses unique risks including rigging damage and capsizing."
  },
  {
    icon: LifeBuoy,
    title: "Jon Boats",
    description: "Common on rivers and smaller lakes for fishing and hunting. Even lower-value boats need liability coverage."
  }
];

// Savings tips
const savingsTips = [
  {
    title: "Bundle with Home or Auto Insurance",
    description: "Multi-policy discounts typically save 5–15% on your boat insurance premium."
  },
  {
    title: "Complete a Boater Safety Course",
    description: "Alabama requires a Boat Operator's License for most residents. Georgia requires a Boater Safety Course for those born after January 1, 1998. Completing approved courses often qualifies you for insurance discounts."
  },
  {
    title: "Choose Higher Deductibles",
    description: "Raising your deductible lowers your premium if you're comfortable paying more out-of-pocket for smaller claims."
  },
  {
    title: "Insure for Agreed Value",
    description: "Agreed value policies pay a set amount if your boat is totaled, avoiding depreciation disputes. Actual cash value policies pay less over time."
  },
  {
    title: "Winter Lay-Up Discounts",
    description: "If you store your boat during winter months, some carriers reduce premiums for the off-season period."
  }
];

// FAQ data
const faqItems = [
  {
    question: "Is boat insurance required in Alabama?",
    answer: "No. Alabama does not require boat insurance by law. However, marinas and lenders often require coverage, and liability protection is strongly recommended."
  },
  {
    question: "Is boat insurance required in Georgia?",
    answer: "No. Georgia has no legal requirement for boat insurance on recreational vessels. The same marina and lender requirements apply."
  },
  {
    question: "Does boat insurance cover hurricane damage?",
    answer: "Yes. Comprehensive coverage protects against hurricane damage, storm surge, and wind damage. This is critical for Alabama and Georgia boaters during hurricane season."
  },
  {
    question: "Does boat insurance cover sinking?",
    answer: "Yes. Comprehensive coverage pays for total loss if your boat sinks, plus wreckage removal and fuel spill liability if required."
  },
  {
    question: "Does boat insurance cover other drivers?",
    answer: "Yes. Your boat insurance typically covers permissive users — anyone you allow to operate your boat with your permission."
  },
  {
    question: "Do I need full coverage on a financed boat?",
    answer: "Yes. Lenders require comprehensive and collision coverage until the loan is paid off."
  },
  {
    question: "Do marinas require insurance?",
    answer: "Many do. Most marinas require proof of liability coverage before allowing you to dock or store your boat."
  },
  {
    question: "Can I suspend boat insurance in winter?",
    answer: "Some carriers offer lay-up periods where coverage is reduced (and premiums lowered) while your boat is in storage. Ask about seasonal options."
  }
];

// Testimonials data
const testimonials = [
  {
    name: "Mike T.",
    location: "Centre, AL",
    rating: 5,
    text: "I've been with Coffey for my bass boat and truck insurance for 3 years now. They bundled both policies and saved me over $400 a year. Great local service!"
  },
  {
    name: "Jennifer W.",
    location: "Rome, GA",
    rating: 5,
    text: "When a storm damaged my pontoon at the dock, Coffey walked me through the entire claims process. They made it so easy during a stressful time."
  },
  {
    name: "David M.",
    location: "Gadsden, AL",
    rating: 5,
    text: "Finally found an agency that understands boat insurance on Weiss Lake. They knew exactly what coverage I needed for my fishing tournaments."
  }
];

// Alabama cities
const alabamaCities = [
  { name: "Birmingham", slug: "birmingham-al" },
  { name: "Montgomery", slug: "montgomery-al" },
  { name: "Mobile", slug: "mobile-al" },
  { name: "Centre", slug: "centre-al" },
  { name: "Gadsden", slug: "gadsden-al" },
  { name: "Anniston", slug: "anniston-al" },
  { name: "Auburn", slug: "auburn-al" },
  { name: "Dothan", slug: "dothan-al" },
  { name: "Phenix City", slug: "phenix-city-al" },
  { name: "Enterprise", slug: "enterprise-al" },
  { name: "Trussville", slug: "trussville-al" }
];

// Georgia cities
const georgiaCities = [
  { name: "Atlanta", slug: "atlanta-ga" },
  { name: "Rome", slug: "rome-ga" },
  { name: "Cartersville", slug: "cartersville-ga" },
  { name: "Calhoun", slug: "calhoun-ga" },
  { name: "Dalton", slug: "dalton-ga" },
  { name: "Alpharetta", slug: "alpharetta-ga" },
  { name: "Lawrenceville", slug: "lawrenceville-ga" },
  { name: "Duluth", slug: "duluth-ga" },
  { name: "Suwanee", slug: "suwanee-ga" },
  { name: "Cedartown", slug: "cedartown-ga" },
  { name: "Rockmart", slug: "rockmart-ga" },
  { name: "Summerville", slug: "summerville-ga" },
  { name: "Forsyth", slug: "forsyth-ga" }
];

// Schema data
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
  "serviceType": "Boat Insurance",
  "provider": {
    "@type": "InsuranceAgency",
    "name": "Coffey Agencies Inc.",
    "url": "https://coffeyagencies.com",
    "telephone": "+1-256-927-6287",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "1913 W Main Street",
        "addressLocality": "Centre",
        "addressRegion": "AL",
        "postalCode": "35960",
        "addressCountry": "US"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "1703 Turner McCall Blvd SE",
        "addressLocality": "Rome",
        "addressRegion": "GA",
        "postalCode": "30161",
        "addressCountry": "US"
      }
    ]
  },
  "areaServed": ["Alabama", "Georgia"],
  "description": "Boat insurance coverage for pontoon boats, bass boats, jet skis, sailboats, and personal watercraft in Alabama and Georgia."
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://coffeyagencies.com/services/boat-insurance#breadcrumb",
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
      "name": "Services",
      "item": "https://coffeyagencies.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Boat Insurance",
      "item": "https://coffeyagencies.com/services/boat-insurance"
    }
  ]
};

const BoatInsurance = () => {
  return (
    <>
      <Helmet>
        <title>Boat Insurance in Alabama & Georgia | Coffey Agencies</title>
        <meta 
          name="description" 
          content="Protect your boat on Weiss Lake, Lake Allatoona, and waterways across Alabama and Georgia. Get boat insurance quotes for pontoons, bass boats, jet skis, and sailboats." 
        />
        <link rel="canonical" href="https://coffeyagencies.com/services/boat-insurance" />
        <meta property="og:title" content="Boat Insurance in Alabama & Georgia | Coffey Agencies" />
        <meta property="og:description" content="Protect your boat on Weiss Lake, Lake Allatoona, and waterways across Alabama and Georgia. Get boat insurance quotes for pontoons, bass boats, jet skis, and sailboats." />
        <meta property="og:url" content="https://coffeyagencies.com/services/boat-insurance" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Boat Insurance in Alabama & Georgia | Coffey Agencies" />
        <meta name="twitter:description" content="Protect your boat on Weiss Lake, Lake Allatoona, and waterways across Alabama and Georgia. Get boat insurance quotes for pontoons, bass boats, jet skis, and sailboats." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section 
          className="relative min-h-[500px] md:min-h-[550px] flex items-end bg-cover bg-center"
          style={{ backgroundImage: `url(${autoHeroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          
          <div className="container-custom relative z-10 pb-12 pt-24">
            {/* Breadcrumbs */}
            <Breadcrumb className="mb-6">
              <BreadcrumbList className="text-white/80">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60" />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/services/auto-insurance" className="hover:text-white transition-colors">Services</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white">Boat Insurance</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Boat Insurance in Alabama & Georgia
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
                Protect your investment on Weiss Lake, Lake Allatoona, the Coosa River, and waterways across both states. Whether you own a pontoon, bass boat, jet ski, or sailboat, boat insurance provides essential coverage for liability, collision, theft, and storm damage.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Licensed in AL & GA</span>
                </div>
                <div className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Hablamos Español</span>
                </div>
                <div className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Family Owned</span>
                </div>
                <div className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>100+ Years Combined Experience</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-lg" asChild>
                  <Link to="/#quote-form">Get Your Free Quote</Link>
                </Button>
                <TrackedPhone
                  phone="(256) 927-6287"
                  phoneRaw="2569276287"
                  location="Centre, AL"
                  office="centre"
                  pageType="service"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-white text-primary border border-primary rounded-md shadow-sm hover:shadow-md transition-all font-medium"
                  ariaLabel="Call Centre, Alabama office at (256) 927-6287"
                >
                  <Phone className="h-5 w-5" />
                  (256) 927-6287
                </TrackedPhone>
                <TrackedPhone
                  phone="(706) 784-6511"
                  phoneRaw="7067846511"
                  location="Rome, GA"
                  office="rome"
                  pageType="service"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-white text-primary border border-primary rounded-md shadow-sm hover:shadow-md transition-all font-medium"
                  ariaLabel="Call Rome, Georgia office at (706) 784-6511"
                >
                  <Phone className="h-5 w-5" />
                  (706) 784-6511
                </TrackedPhone>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Types Section */}
        <section className="section-spacing bg-background">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionHeading centered>What Does Boat Insurance Cover?</SectionHeading>
              <p className="text-lg text-muted-foreground mt-4">
                Boat insurance protects you financially when things go wrong on or off the water. A comprehensive watercraft insurance policy typically includes:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coverageTypes.map((coverage, index) => {
                const Icon = coverage.icon;
                return (
                  <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-lg">{coverage.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{coverage.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Regional Waterways Section */}
        <section className="section-spacing bg-muted/30">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionHeading centered>Which Regional Waterways Do We Serve?</SectionHeading>
              <p className="text-lg text-muted-foreground mt-4">
                Our boat insurance expertise covers the most popular boating destinations in North Alabama and Northwest Georgia.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {waterways.map((waterway, index) => (
                <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{waterway.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{waterway.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Boat Types Section */}
        <section className="section-spacing bg-background">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionHeading centered>What Boat Types Do We Insure?</SectionHeading>
              <p className="text-lg text-muted-foreground mt-4">
                We provide boat insurance for every vessel common to our region.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {boatTypes.map((boat, index) => {
                const Icon = boat.icon;
                return (
                  <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-lg">{boat.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{boat.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Do I Need Boat Insurance Section */}
        <section className="section-spacing bg-muted/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <SectionHeading centered>Do I Need Boat Insurance in Alabama or Georgia?</SectionHeading>
              
              <div className="mt-8 prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground text-center mb-8">
                  <strong>Boat insurance is not legally required</strong> in Alabama or Georgia for recreational use. However, you likely still need coverage because:
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 not-prose">
                  <Card className="text-center border shadow-sm">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                        <Anchor className="h-6 w-6 text-white" />
                      </div>
                      <p className="font-semibold mb-2">Marina Requirements</p>
                      <p className="text-muted-foreground text-sm">Marinas often require liability insurance to dock or store your boat</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center border shadow-sm">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <p className="font-semibold mb-2">Lender Requirements</p>
                      <p className="text-muted-foreground text-sm">Lenders require full coverage if you finance your boat</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center border shadow-sm">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                        <LifeBuoy className="h-6 w-6 text-white" />
                      </div>
                      <p className="font-semibold mb-2">Financial Protection</p>
                      <p className="text-muted-foreground text-sm">You're financially responsible for any damage or injuries you cause</p>
                    </CardContent>
                  </Card>
                </div>
                
                <p className="text-center text-muted-foreground mt-8">
                  The average boat insurance policy costs <strong>$200–$500 per year</strong> for most recreational boats. That's a small price compared to a liability lawsuit or replacing a stolen vessel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ways to Save Section */}
        <section className="section-spacing bg-background">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionHeading centered>How Can I Save on Boat Insurance?</SectionHeading>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {savingsTips.map((tip, index) => (
                <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <CardTitle className="text-base">{tip.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{tip.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-spacing bg-muted/30">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionHeading centered>Frequently Asked Questions About Boat Insurance</SectionHeading>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-background border-2 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow">
                    <AccordionTrigger className="text-left hover:no-underline py-5">
                      <span className="font-semibold text-lg pr-4">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 text-lg leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-spacing bg-background">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionHeading centered>What Our Customers Say</SectionHeading>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border shadow-sm">
                  <CardContent className="pt-6 flex flex-col h-full">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 flex-grow">"{testimonial.text}"</p>
                    <div className="mt-auto">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link to="/reviews" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2">
                Read All Reviews <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Areas We Serve Section */}
        <section className="section-spacing bg-muted/30">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionHeading centered>Boat Insurance Across Alabama & Georgia</SectionHeading>
              <p className="text-lg text-muted-foreground mt-4">
                We serve boaters throughout both states from our offices in Centre, AL and Rome, GA.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Alabama */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Alabama</h3>
                <div className="flex flex-wrap gap-2">
                  {alabamaCities.map((city) => (
                    <Link
                      key={city.slug}
                      to={`/${city.slug}`}
                      className="px-3 py-1.5 bg-white border rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Georgia */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Georgia</h3>
                <div className="flex flex-wrap gap-2">
                  {georgiaCities.map((city) => (
                    <Link
                      key={city.slug}
                      to={`/${city.slug}`}
                      className="px-3 py-1.5 bg-white border rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-spacing bg-primary">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Protect Your Boat?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Get a boat insurance quote in minutes. We'll help you find the right coverage for your vessel, your waterways, and your budget.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" asChild>
                  <Link to="/#quote-form">Get Your Free Quote</Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <TrackedPhone
                  phone="(256) 927-6287"
                  phoneRaw="2569276287"
                  location="Centre, AL"
                  office="centre"
                  pageType="service"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-white text-primary border border-white rounded-md shadow-sm hover:shadow-md transition-all font-medium"
                  ariaLabel="Call Centre, Alabama office at (256) 927-6287"
                >
                  <Phone className="h-5 w-5" />
                  (256) 927-6287 - Alabama
                </TrackedPhone>
                <TrackedPhone
                  phone="(706) 784-6511"
                  phoneRaw="7067846511"
                  location="Rome, GA"
                  office="rome"
                  pageType="service"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-white text-primary border border-white rounded-md shadow-sm hover:shadow-md transition-all font-medium"
                  ariaLabel="Call Rome, Georgia office at (706) 784-6511"
                >
                  <Phone className="h-5 w-5" />
                  (706) 784-6511 - Georgia
                </TrackedPhone>
              </div>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-4 text-white text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Licensed in AL & GA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Hablamos Español</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Family Owned</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BoatInsurance;
