import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Home, Building2, Sofa, Shield, Phone, Star, CheckCircle, MapPin, Wind, Umbrella, Car, AlertTriangle, Calendar, Heart, Key, Sailboat, Bike } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { TrackedPhone } from "@/components/shared/TrackedPhone";
import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CompleteYourCoverage } from "@/components/shared/CompleteYourCoverage";
import heroBackground from "@/assets/mobile-home-insurance-hero.jpg";
import { serviceTestimonialSets } from "@/data/testimonialData";

const coverageTypes = [
  {
    icon: Home,
    title: "Dwelling Coverage",
    description: "Protects the structure of your mobile home itself — walls, roof, built-in appliances, and permanently attached components. If a tornado tears through your property or a fire damages your home, this coverage pays to repair or rebuild."
  },
  {
    icon: Sofa,
    title: "Personal Property Coverage",
    description: "Protects your belongings inside the home: furniture, electronics, clothing, and other possessions. If your belongings are stolen or destroyed in a covered event, this coverage helps replace them."
  },
  {
    icon: Shield,
    title: "Liability Protection",
    description: "Covers you if someone is injured on your property or if you accidentally damage someone else's property. This includes legal defense costs if you're sued."
  },
  {
    icon: Building2,
    title: "Additional Structures Coverage",
    description: "Extends protection to detached structures like porches, carports, sheds, and storage buildings on your property."
  }
];

const savingsTips = [
  {
    title: "Bundle with auto insurance",
    description: "Multi-policy discounts typically save 10-25%"
  },
  {
    title: "Install safety features",
    description: "Smoke detectors, security systems, storm shutters, and deadbolts can earn discounts"
  },
  {
    title: "Choose a higher deductible",
    description: "If you can afford a larger out-of-pocket expense at claim time, you'll pay less in premiums"
  },
  {
    title: "Maintain a claims-free record",
    description: "Avoid filing small claims that you could pay out of pocket"
  },
  {
    title: "Upgrade your home",
    description: "Better tie-downs, skirting, and electrical systems signal lower risk to insurers"
  }
];

const faqItems = [
  {
    question: "How much does mobile home insurance cost in Alabama?",
    answer: "Mobile home insurance in Alabama averages around $527 per year, but your actual premium depends on your home's age, location, size, and condition. Homes in tornado-prone areas or far from fire stations typically pay more. Older manufactured homes — especially those built before 1976 — may face higher rates or require specialty carriers. The best way to know your cost is to get a personalized quote. We can provide quotes from multiple carriers in a single call."
  },
  {
    question: "How much does mobile home insurance cost in Georgia?",
    answer: "Georgia mobile home insurance typically costs $300-$700 per year. Georgia's slightly milder overall climate keeps average premiums lower than some neighboring states, though north Georgia's tornado exposure and coastal hurricane risk can increase rates for those areas. Factors like your home's age, value, and distance from fire protection all affect your final premium. We help Georgia manufactured home owners find competitive rates through our specialized coverage options."
  },
  {
    question: "Is mobile home insurance required in Alabama?",
    answer: "Alabama state law doesn't require you to carry mobile home insurance. However, if you have a mortgage or loan on your manufactured home, your lender almost certainly requires coverage. Many mobile home parks and communities also require residents to maintain insurance as a condition of residency. Beyond requirements, protecting a major asset like your home makes financial sense — especially in tornado-prone Alabama where a single storm can cause devastating damage."
  },
  {
    question: "Is mobile home insurance required in Georgia?",
    answer: "Georgia doesn't mandate mobile home insurance by law, but practical requirements exist. Lenders financing your manufactured home will require coverage to protect their investment. Mobile home parks and communities often require proof of insurance from residents. And in a state that averages 30 tornadoes annually, carrying coverage protects you from potentially catastrophic out-of-pocket losses."
  },
  {
    question: "Does mobile home insurance cover tornado damage?",
    answer: "Yes. Standard mobile home insurance policies in both Alabama and Georgia include wind coverage, which covers tornado damage. However, pay careful attention to your wind and hail deductible — it may be separate from your standard deductible and is often calculated as a percentage of your dwelling coverage (typically 1-2%). On a $100,000 policy, a 2% wind deductible means $2,000 out of pocket before coverage kicks in. Given that Alabama averages 42-64 tornadoes annually and Georgia sees about 30 per year, understanding your wind coverage is essential."
  },
  {
    question: "Can I get insurance on an older mobile home?",
    answer: "It depends on the age. The critical date is June 15, 1976, when HUD's Manufactured Home Construction and Safety Standards took effect. Homes built before this date — sometimes called \"pre-HUD\" units — face extremely limited insurance options because they weren't built to federally standardized safety codes. Most carriers won't write coverage on pre-1976 manufactured homes. For homes built after 1976, options exist even as the home ages into its 30s or 40s, though you may face higher premiums, Actual Cash Value (rather than Replacement Cost) coverage, and requirements for updated electrical, proper tie-downs, or other improvements. We work with carriers who specialize in manufactured housing and can help if your HUD-compliant home has been declined elsewhere."
  },
  {
    question: "What's the difference between mobile home insurance and regular homeowners insurance?",
    answer: "Mobile home insurance (sometimes called HO-7 or manufactured home insurance) is specifically designed for factory-built homes transported to their site. Key differences include: coverage forms designed for manufactured home construction, consideration of whether the home is on owned or leased land, options for homes that can be relocated, and underwriting that accounts for manufactured homes' specific vulnerabilities to wind damage. You cannot simply buy a standard homeowners policy for a manufactured home — it requires a policy designed for this housing type."
  },
  {
    question: "Does mobile home insurance cover flooding in Alabama or Georgia?",
    answer: "No. Standard mobile home insurance does not cover flood damage in either state. This is one of the most common — and costly — coverage gaps for manufactured home owners. If your mobile home sits in a flood zone, near a river or creek, or in any area prone to water accumulation, you need a separate flood insurance policy. Flood coverage is available through the National Flood Insurance Program (NFIP) or private flood insurers. We can help you find flood coverage alongside your mobile home insurance."
  },
  {
    question: "Who insures mobile homes in Alabama and Georgia?",
    answer: "Several insurance carriers specialize in manufactured home coverage in both states. Companies like Foremost, American Modern, Progressive, and others offer mobile home insurance programs. Not every carrier writes coverage in every situation — some won't insure older homes, some avoid certain counties, and some have restrictions based on home condition or tie-down status. As an independent agency, we work with multiple carriers and know which companies write what types of mobile home risks in Alabama and Georgia. One call gets you quotes from carriers that actually want your business."
  },
  {
    question: "Can I bundle mobile home and auto insurance?",
    answer: "Absolutely. Bundling your mobile home insurance with auto insurance (or other policies) typically saves 10-25% on your combined premiums. We handle both mobile home and auto insurance in Alabama and Georgia, making it easy to bundle coverage under one agency. You get the convenience of a single point of contact plus real savings on your insurance costs."
  },
  {
    question: "What is a wind zone and does it affect my mobile home insurance?",
    answer: "HUD (the U.S. Department of Housing and Urban Development) divides the country into three wind zones based on expected wind speeds. Wind Zone 1 covers most inland areas, Zone 2 includes coastal regions and areas with higher wind exposure, and Zone 3 covers the most hurricane-prone coastal areas. In Alabama, the Gulf Coast region falls into Zone 2 and some coastal areas into Zone 3. In Georgia, six coastal counties (Chatham, Bryan, Liberty, McIntosh, Glynn, and Camden) are Zone 2, with the rest of the state in Zone 1. Georgia has no Zone 3 areas. Your wind zone affects both the tie-down requirements for your manufactured home and your insurance premiums — higher wind zones mean stricter anchoring requirements and often higher costs."
  },
  {
    question: "How can I lower my mobile home insurance cost?",
    answer: "Several strategies can reduce your manufactured home insurance premium. Ensure your home has proper tie-downs and anchoring for your wind zone. Install or maintain continuous skirting around the base of your home. Add safety features like smoke detectors, carbon monoxide detectors, deadbolts, and security systems. Bundle your mobile home and auto insurance for multi-policy discounts. Choose a higher deductible if you can absorb more out-of-pocket cost at claim time. Maintain a claims-free history by avoiding small claims you could pay yourself. Keep your home well-maintained — carriers reward lower-risk properties with better rates."
  }
];

const testimonials = serviceTestimonialSets["mobile-home-insurance"];

const alabamaCities = [
  { name: "Birmingham", slug: "birmingham-al" },
  { name: "Huntsville", slug: "huntsville-al" },
  { name: "Montgomery", slug: "montgomery-al" },
  { name: "Mobile", slug: "mobile-al" },
  { name: "Auburn", slug: "auburn-al" },
  { name: "Tuscaloosa", slug: "tuscaloosa-al" },
  { name: "Dothan", slug: "dothan-al" },
  { name: "Decatur", slug: "decatur-al" },
  { name: "Florence", slug: "florence-al" },
  { name: "Prattville", slug: "centre-al" },
  { name: "Centre", slug: "centre-al" },
  { name: "Foley", slug: "foley-al" },
  { name: "Troy", slug: "troy-al" },
  { name: "Enterprise", slug: "enterprise-al" }
];

const georgiaCities = [
  { name: "Atlanta", slug: "atlanta-ga" },
  { name: "Augusta", slug: "atlanta-ga" },
  { name: "Columbus", slug: "atlanta-ga" },
  { name: "Savannah", slug: "atlanta-ga" },
  { name: "Athens", slug: "atlanta-ga" },
  { name: "Macon", slug: "atlanta-ga" },
  { name: "Rome", slug: "rome-ga" },
  { name: "Albany", slug: "atlanta-ga" },
  { name: "Roswell", slug: "alpharetta-ga" },
  { name: "Johns Creek", slug: "alpharetta-ga" },
  { name: "Warner Robins", slug: "atlanta-ga" },
  { name: "Alpharetta", slug: "alpharetta-ga" },
  { name: "Marietta", slug: "cartersville-ga" },
  { name: "Valdosta", slug: "atlanta-ga" }
];

const MobileHomeInsurance = () => {
  const location = useLocation();
  
  const faqSchema = {
    "@type": "FAQPage",
    "name": "Mobile Home Insurance Frequently Asked Questions",
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
    "@type": "Service",
    "@id": "https://coffeyagencies.com/services/mobile-home-insurance#service",
    "serviceType": "Mobile Home Insurance",
    "alternateName": ["Manufactured Home Insurance", "Trailer Home Insurance"],
    "provider": {
      "@id": "https://coffeyagencies.com/#organization"
    },
    "areaServed": [
      { "@type": "State", "name": "Alabama" },
      { "@type": "State", "name": "Georgia" }
    ],
    "description": "Mobile home insurance coverage for manufactured homes in Alabama and Georgia. We work with specialty carriers like Foremost and American Modern to insure mobile homes of all ages.",
    "serviceOutput": "Insurance Policy",
    "termsOfService": "https://coffeyagencies.com/terms",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  };

  const breadcrumbSchema = {
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
        "name": "Mobile Home Insurance",
        "item": "https://coffeyagencies.com/services/mobile-home-insurance"
      }
    ]
  };

  const howToSchema = {
    "@type": "HowTo",
    "name": "How to Get Mobile Home Insurance in Alabama & Georgia",
    "description": "Get mobile home insurance coverage from a local independent agent in 4 simple steps.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Call or Request a Quote",
        "text": "Contact our Centre, AL office (256-927-6287) or Rome, GA office (706-784-6511). Tell us about your manufactured home: year built, size, location, current condition, and any upgrades."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "We Match You With The Right Coverage",
        "text": "Our agents specialize in mobile home coverage options that actually work for Alabama and Georgia manufactured homes — including older units other agencies turn away."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Review Your Options",
        "text": "We explain what each policy covers, what it costs, and what the deductibles mean in plain English. No jargon, no pressure."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Get Protected",
        "text": "Once you choose a policy, we can often bind coverage the same day. You'll have proof of insurance and can rest easier knowing your home is protected."
      }
    ],
    "totalTime": "PT15M"
  };

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
        <title>Mobile Home Insurance Centre AL & Rome GA | Coffey Agencies</title>
        <meta name="description" content="Specialized mobile home and manufactured home insurance in Alabama & Georgia. Protect your home with coverage from Coffey Agencies. Get a free quote." />
        <link rel="canonical" href="https://coffeyagencies.com/services/mobile-home-insurance" />
        
        <meta property="og:title" content="Mobile Home Insurance Centre AL & Rome GA | Coffey Agencies" />
        <meta property="og:description" content="Specialized mobile home and manufactured home insurance in Alabama & Georgia. Protect your home with coverage from Coffey Agencies. Get a free quote." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coffeyagencies.com/services/mobile-home-insurance" />
        <meta property="og:site_name" content="Coffey Agencies" />
        <meta property="og:image" content="https://coffeyagencies.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mobile Home Insurance Alabama & Georgia | Coffey Agencies" />
        <meta name="twitter:description" content="Mobile home insurance in Alabama & Georgia. We work with carriers that specialize in manufactured homes." />
        <meta name="twitter:image" content="https://coffeyagencies.com/og-image.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify(allSchemas)}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section
        role="banner"
        aria-label="Mobile home insurance hero section"
        className="relative min-h-[600px] flex items-end overflow-hidden"
      >
        <img 
          src={heroBackground} 
          alt="Manufactured mobile home with white siding in rural Alabama Georgia setting" 
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        
        <div className="relative z-10 w-full py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            {/* Breadcrumbs */}
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center justify-center gap-2 text-sm text-white/80">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li>/</li>
                <li className="text-white font-medium">Mobile Home Insurance</li>
              </ol>
            </nav>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                Mobile Home Insurance in Alabama & Georgia — Coverage That Actually Protects You
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-6 drop-shadow-md max-w-4xl mx-auto">
                Finding mobile home insurance shouldn't be this hard. From Dixie Alley tornadoes to Gulf Coast hurricanes, we know what manufactured homes need — and we work with carriers that actually write the coverage.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-white/90 text-sm mb-8">
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-accent fill-accent" />
                  4.7★ Google Rating
                </span>
                <span className="hidden md:inline">|</span>
                <span>200+ Reviews</span>
                <span className="hidden md:inline">|</span>
                <span>BBB A+ Rated</span>
                <span className="hidden md:inline">|</span>
                <span>Since 2009</span>
                <span className="hidden md:inline">|</span>
                <span>Licensed in AL (#416438) & GA (#149612)</span>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-accent text-white hover:bg-accent/90 text-lg px-8 py-6 min-h-[48px] font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-[0_0_12px_rgba(34,197,94,0.55)] hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
                  asChild
                >
                  <Link to="/#quote-form">
                    Get Your Mobile Home Quote
                  </Link>
                </Button>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white bg-white/10 hover:bg-white/20 text-lg px-6 py-6 min-h-[48px]"
                    asChild
                  >
                    <TrackedPhone phone="(256) 927-6287" phoneRaw="2569276287" location="Centre, AL" office="centre" pageType="service" className="flex items-center gap-2" aria-label="Call Alabama office">
                      <Phone className="h-5 w-5" />
                      AL: (256) 927-6287
                    </TrackedPhone>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white bg-white/10 hover:bg-white/20 text-lg px-6 py-6 min-h-[48px]"
                    asChild
                  >
                    <TrackedPhone phone="(706) 784-6511" phoneRaw="7067846511" location="Rome, GA" office="rome" pageType="service" className="flex items-center gap-2" aria-label="Call Georgia office">
                      <Phone className="h-5 w-5" />
                      GA: (706) 784-6511
                    </TrackedPhone>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main id="main-content">
        {/* Opening Paragraph - The Problem */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Finding mobile home insurance in Alabama or Georgia can feel like nobody wants your business. You call a big-name insurer and hear "we don't cover mobile homes." You try another and get quoted a price that makes no sense. If you own an older manufactured home — built before the 1976 HUD standards — the rejection rate climbs even higher.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We get it. At Coffey Agencies, we've spent 16 years helping Alabama and Georgia families find manufactured home insurance from carriers that actually specialize in this type of coverage. One call to our Centre, AL or Rome, GA office gets you quotes from multiple companies — no hunting, no runaround.
              </p>
            </div>
          </div>
        </section>

        {/* What Mobile Home Insurance Covers */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <SectionHeading centered className="mb-4">What Mobile Home Insurance Actually Covers</SectionHeading>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Mobile home insurance (also called manufactured home insurance) works differently than standard homeowners coverage. Here's what a typical policy includes:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {coverageTypes.map((coverage, index) => {
                const Icon = coverage.icon;
                return (
                  <Card key={index} className="bg-white border border-border hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-3">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{coverage.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">{coverage.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Flood Coverage Warning */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">What's NOT covered:</h3>
                  <p className="text-amber-700">
                    Standard mobile home insurance does not cover flood damage. In Alabama and Georgia, if your manufactured home sits in a flood-prone area, you'll need a separate flood policy through the National Flood Insurance Program (NFIP) or a private flood insurer. We can help you find that coverage too.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Need coverage for your mobile home?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-accent hover:bg-accent/90">
                  <TrackedPhone phone="(256) 927-6287" phoneRaw="2569276287" location="Centre, AL" office="centre" pageType="service">
                    <Phone className="h-4 w-4 mr-2" />
                    AL: (256) 927-6287
                  </TrackedPhone>
                </Button>
                <Button asChild className="bg-accent hover:bg-accent/90">
                  <TrackedPhone phone="(706) 784-6511" phoneRaw="7067846511" location="Rome, GA" office="rome" pageType="service">
                    <Phone className="h-4 w-4 mr-2" />
                    GA: (706) 784-6511
                  </TrackedPhone>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Alabama Weather Risks */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <SectionHeading className="mb-8">Mobile Home Insurance in Alabama — Weather Risks You Need to Know</SectionHeading>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-muted-foreground">
                Alabama sits in the heart of Dixie Alley, a region stretching from eastern Texas to the Carolinas that sees some of the most dangerous tornadoes in the country. Alabama averages 42-64 tornadoes annually, and between 1950 and 2006, the state tied Kansas for the most F5 tornadoes recorded. The core months are March through May in spring and November through December in late fall.
              </p>
              
              <p className="text-muted-foreground">
                What makes Alabama tornadoes particularly dangerous for mobile home owners: they often form from high-precipitation supercells, meaning they're wrapped in rain and difficult to see. Many strike at night. And manufactured homes — even properly anchored ones — are more vulnerable to wind damage than site-built structures.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-muted/50 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Wind className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Wind and Tornado Coverage</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Standard mobile home insurance in Alabama covers wind and tornado damage, but pay attention to your deductible. Many carriers apply separate wind/hail deductibles — often 1-2% of your dwelling coverage limit. On a $100,000 policy, that's $1,000-$2,000 out of pocket before coverage kicks in.
                  </p>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Umbrella className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Hurricane Exposure</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Coastal and south Alabama face hurricane and tropical storm threats. Mobile, Baldwin, and other Gulf-adjacent counties may see percentage-based wind deductibles during named storms. Understanding these deductibles before you need them matters.
                  </p>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">HUD Wind Zone Requirements</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    South Alabama falls into HUD Wind Zone 2, which requires more stringent tie-down and anchoring systems. Coastal areas within 1,500 feet of the shoreline may face Zone 3 requirements. If your manufactured home's tie-downs don't meet the requirements for your zone, insurers may decline coverage or charge higher premiums.
                  </p>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Rural Fire Protection</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    If your mobile home sits more than 5 miles from a fire station or lacks nearby fire hydrants — common in rural Alabama — expect that distance to affect your premium. Carriers factor response time into their pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Georgia Weather Risks */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <SectionHeading className="mb-8">Mobile Home Insurance in Georgia — What Peach State Owners Face</SectionHeading>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-muted-foreground">
                Georgia averages 30 tornadoes per year, with the northern part of the state sitting squarely in Dixie Alley territory. In the last fifty years, Georgia has seen more than 1,450 tornadoes, and every county in the state has experienced at least one since 1950. Peak activity runs March through May, though tornadoes can strike any month.
              </p>
              
              <p className="text-muted-foreground">
                North Georgia — particularly the triangle formed by Atlanta, Marietta, Canton, and Cartersville running through Gainesville and Newnan — has experienced over 130 tornadoes since 1950. Cherokee, Fulton, and Coweta counties each recorded more than 30 tornadoes during that period.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white rounded-lg p-6 border">
                  <div className="flex items-center gap-2 mb-3">
                    <Wind className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Wind Zones in Georgia</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Most of Georgia falls into HUD Wind Zone 1, which requires standard tie-down systems. However, six coastal counties — Chatham, Bryan, Liberty, McIntosh, Glynn, and Camden — are designated Wind Zone 2, requiring stronger anchoring. Georgia has no Wind Zone 3 areas, but coastal manufactured home owners should still expect stricter requirements.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 border">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Hail Damage</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    North Georgia sees significant hail events, particularly during spring severe weather season. Hail can damage mobile home roofing and siding quickly. Check whether your policy uses a separate hail deductible.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 border">
                  <div className="flex items-center gap-2 mb-3">
                    <Umbrella className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Hurricane & Tropical Storm Exposure</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    South and coastal Georgia face threats from systems moving inland from the Atlantic or up from Florida. Hurricane Michael in 2018 caused significant damage well into the Georgia interior. Understand your wind coverage before hurricane season.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 border">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Flood Risk</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Like Alabama, standard mobile home insurance in Georgia does not cover flooding. Low-lying areas, properties near rivers or creeks, and coastal regions need separate flood insurance.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">Whether you're in rural Alabama or metro Atlanta, we can find coverage that fits.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-accent hover:bg-accent/90">
                  <TrackedPhone phone="(256) 927-6287" phoneRaw="2569276287" location="Centre, AL" office="centre" pageType="service">
                    <Phone className="h-4 w-4 mr-2" />
                    AL: (256) 927-6287
                  </TrackedPhone>
                </Button>
                <Button asChild className="bg-accent hover:bg-accent/90">
                  <TrackedPhone phone="(706) 784-6511" phoneRaw="7067846511" location="Rome, GA" office="rome" pageType="service">
                    <Phone className="h-4 w-4 mr-2" />
                    GA: (706) 784-6511
                  </TrackedPhone>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Insuring Manufactured Homes - Age Matters */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <SectionHeading className="mb-8">Insuring Manufactured Homes — Age Matters</SectionHeading>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-muted-foreground">
                The age of your manufactured home significantly affects your insurance options. Here's what you need to know:
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8">
                <h3 className="font-semibold text-lg mb-3">The 1976 HUD Standard Cutoff</h3>
                <p className="text-muted-foreground mb-4">
                  June 15, 1976 marks a critical date in manufactured housing. That's when HUD's Manufactured Home Construction and Safety Standards took effect, establishing uniform building codes for factory-built homes. Homes built after this date — often called "manufactured homes" rather than "mobile homes" — were constructed to federally regulated safety standards covering structural design, fire safety, plumbing, electrical systems, and wind resistance.
                </p>
                <p className="text-muted-foreground">
                  Homes built before this date weren't subject to these standards, which is why the insurance industry treats pre-1976 and post-1976 manufactured homes very differently. Most carriers won't write coverage on pre-1976 units due to the lack of standardized construction and higher associated risks.
                </p>
              </div>

              <h3 className="font-semibold text-lg">What About Homes from the Late 1970s Through 1990s?</h3>
              <p className="text-muted-foreground">
                Even homes built after the 1976 HUD standards can face insurance challenges as they age. A manufactured home from 1985 or 1992 meets HUD construction standards but may still encounter:
              </p>
              
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong>Limited carrier options</strong> — Not every insurer writes coverage on homes 30+ years old</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong>Actual Cash Value vs. Replacement Cost</strong> — Older homes often qualify only for ACV coverage, which factors in depreciation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong>Condition requirements</strong> — Carriers may require updated electrical systems, proper tie-downs, or other improvements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong>Higher premiums</strong> — Age increases perceived risk, affecting your rate</span>
                </li>
              </ul>

              <p className="text-muted-foreground">
                We work with carriers like Foremost and American Modern who specialize in manufactured housing and understand that a well-maintained 1985 mobile home is a different risk than a neglected one. If your HUD-compliant manufactured home has been turned down elsewhere, we may be able to find options.
              </p>

              <h3 className="font-semibold text-lg mt-8">Upgrades That Help Your Insurability</h3>
              <p className="text-muted-foreground">
                If you own an older (but post-1976) manufactured home, these improvements can help you qualify for better coverage and rates:
              </p>
              
              <ul className="grid md:grid-cols-2 gap-2 my-4">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  Updated electrical systems meeting current codes
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  Proper tie-downs and anchoring for your wind zone
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  Continuous skirting around the base
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  Smoke and carbon monoxide detectors
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  Security features like deadbolts and alarm systems
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  Well-maintained roof and structural components
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <SectionHeading className="mb-8">How Much Does Mobile Home Insurance Cost?</SectionHeading>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border">
                <h3 className="font-bold text-xl mb-3">Alabama</h3>
                <p className="text-3xl font-bold text-primary mb-2">~$527/year</p>
                <p className="text-muted-foreground text-sm">
                  Average mobile home insurance cost, though your actual premium depends on several factors including location, home age, and condition.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border">
                <h3 className="font-bold text-xl mb-3">Georgia</h3>
                <p className="text-3xl font-bold text-primary mb-2">$300-$700/year</p>
                <p className="text-muted-foreground text-sm">
                  Georgia's slightly more moderate climate keeps premiums lower for many homeowners, though tornado and hurricane exposure can push rates higher.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border mb-8">
              <h3 className="font-semibold text-lg mb-4">Factors that affect your mobile home insurance cost:</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Location</strong> — County, proximity to fire stations, flood zone status, and local weather patterns</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Age of home</strong> — Newer manufactured homes built to HUD standards typically cost less to insure</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Home value and size</strong> — Higher dwelling coverage limits mean higher premiums</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Foundation type</strong> — Permanent foundations often qualify for better rates</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Tie-down status</strong> — Proper anchoring to HUD wind zone requirements can reduce premiums</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Distance from fire protection</strong> — Homes far from fire stations or hydrants face higher rates</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Coverage limits and deductibles</strong> — Higher deductibles lower your premium</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Claims history</strong> — A clean claims record helps keep rates down</span>
                </li>
              </ul>
            </div>

            <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
              <h3 className="font-semibold text-lg mb-4">Ways to save on mobile home insurance:</h3>
              <ul className="space-y-3">
                {savingsTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                    <span><strong>{tip.title}</strong> — {tip.description}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">Want to know your actual cost?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-accent hover:bg-accent/90">
                  <TrackedPhone phone="(256) 927-6287" phoneRaw="2569276287" location="Centre, AL" office="centre" pageType="service">
                    <Phone className="h-4 w-4 mr-2" />
                    AL: (256) 927-6287
                  </TrackedPhone>
                </Button>
                <Button asChild className="bg-accent hover:bg-accent/90">
                  <TrackedPhone phone="(706) 784-6511" phoneRaw="7067846511" location="Rome, GA" office="rome" pageType="service">
                    <Phone className="h-4 w-4 mr-2" />
                    GA: (706) 784-6511
                  </TrackedPhone>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <SectionHeading centered className="mb-12">Our Process — How Getting Mobile Home Insurance Works</SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="font-semibold mb-2">Call or Request a Quote</h3>
                <p className="text-sm text-muted-foreground">
                  Contact our Centre, AL office (256-927-6287) or Rome, GA office (706-784-6511). Tell us about your manufactured home: year built, size, location, current condition, and any upgrades.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="font-semibold mb-2">We Match You With The Right Coverage</h3>
                <p className="text-sm text-muted-foreground">
                  Our agents specialize in mobile home policies that actually work for Alabama and Georgia — including coverage for older manufactured homes that other agencies turn away.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="font-semibold mb-2">Review Your Options</h3>
                <p className="text-sm text-muted-foreground">
                  We explain what each policy covers, what it costs, and what the deductibles mean in plain English. No jargon, no pressure. You'll understand exactly what you're buying before you commit.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="font-semibold mb-2">Get Protected</h3>
                <p className="text-sm text-muted-foreground">
                  Once you choose a policy, we can often bind coverage the same day. You'll have proof of insurance and can rest easier knowing your home is protected.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <SectionHeading centered className="mb-12">Frequently Asked Questions About Mobile Home Insurance</SectionHeading>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg border px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Testimonials */}
        {testimonials && testimonials.length > 0 && (
          <section className="py-16 px-4 bg-background">
            <div className="container mx-auto max-w-6xl">
              <SectionHeading centered className="mb-12">What Our Customers Say</SectionHeading>
              
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-white">
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Alabama Cities */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <SectionHeading className="mb-6">Mobile Home Insurance Throughout Alabama</SectionHeading>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground">
                We serve manufactured home owners across all of Alabama from our Centre office. Whether you're in a rural area with limited fire protection or a more populated region, we understand the specific insurance challenges Alabama mobile home owners face.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div>
                  <h4 className="font-semibold text-sm mb-2">North Alabama</h4>
                  <p className="text-sm text-muted-foreground">Tornado exposure is significant in the Tennessee Valley region. We work with carriers who understand Dixie Alley risks.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Central Alabama</h4>
                  <p className="text-sm text-muted-foreground">From the Birmingham metro to rural counties, we find coverage for manufactured homes of all ages and conditions.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">South Alabama & Gulf Coast</h4>
                  <p className="text-sm text-muted-foreground">Higher wind exposure from hurricanes requires specialized coverage. We help navigate Zone 2/Zone 3 requirements.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {alabamaCities.map((city) => (
                <Link 
                  key={city.slug} 
                  to={`/${city.slug}`}
                  className="px-3 py-1 bg-white border rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Georgia Cities */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <SectionHeading className="mb-6">Mobile Home Insurance Throughout Georgia</SectionHeading>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground">
                Our Rome, GA office serves manufactured home owners across all of Georgia. From the tornado-prone north to the hurricane-exposed coast, we know Georgia's insurance landscape.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div>
                  <h4 className="font-semibold text-sm mb-2">North Georgia</h4>
                  <p className="text-sm text-muted-foreground">The Atlanta metro area and surrounding counties see significant tornado activity. We match mobile home owners with carriers who properly price wind risk.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Central Georgia</h4>
                  <p className="text-sm text-muted-foreground">Rural areas face fire protection distance challenges. We work with carriers who understand these situations.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">South Georgia & Coast</h4>
                  <p className="text-sm text-muted-foreground">Hurricane exposure increases as you move south, and the six coastal counties in Wind Zone 2 face stricter requirements.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {georgiaCities.map((city) => (
                <Link 
                  key={city.name} 
                  to={`/${city.slug}`}
                  className="px-3 py-1 bg-white border rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <SectionHeading centered className="mb-8">Related Insurance Services</SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/services/home-insurance" className="bg-white p-4 rounded-lg border hover:shadow-md transition-shadow text-center">
                <Home className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-sm">Home Insurance</h3>
                <p className="text-xs text-muted-foreground">Traditional homeowners coverage</p>
              </Link>
              <Link to="/services/auto-insurance" className="bg-white p-4 rounded-lg border hover:shadow-md transition-shadow text-center">
                <Car className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-sm">Auto Insurance</h3>
                <p className="text-xs text-muted-foreground">Bundle for multi-policy savings</p>
              </Link>
              <Link to="/services/renters-insurance" className="bg-white p-4 rounded-lg border hover:shadow-md transition-shadow text-center">
                <Key className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-sm">Renters Insurance</h3>
                <p className="text-xs text-muted-foreground">Protect your personal belongings</p>
              </Link>
              <Link to="/services/life-insurance" className="bg-white p-4 rounded-lg border hover:shadow-md transition-shadow text-center">
                <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-sm">Life Insurance</h3>
                <p className="text-xs text-muted-foreground">Protect your family's future</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 bg-primary text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stop Searching. Start Saving.</h2>
            <p className="text-xl text-white/90 mb-4">
              One call. Multiple quotes. Coverage that actually protects your manufactured home.
            </p>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              If you've been told "no" by other agencies, if you own an older mobile home others won't insure, or if you simply want to know your options — we're here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-accent text-white hover:bg-accent/90 text-lg px-8 py-6"
                asChild
              >
                <TrackedPhone phone="(256) 927-6287" phoneRaw="2569276287" location="Centre, AL" office="centre" pageType="service">
                  <Phone className="h-5 w-5 mr-2" />
                  Alabama: (256) 927-6287
                </TrackedPhone>
              </Button>
              <Button 
                size="lg" 
                className="bg-accent text-white hover:bg-accent/90 text-lg px-8 py-6"
                asChild
              >
                <TrackedPhone phone="(706) 784-6511" phoneRaw="7067846511" location="Rome, GA" office="rome" pageType="service">
                  <Phone className="h-5 w-5 mr-2" />
                  Georgia: (706) 784-6511
                </TrackedPhone>
              </Button>
            </div>

            <p className="text-sm text-white/70">
              Coffey Agencies — Family-owned since 2009. Licensed in Alabama (#416438) and Georgia (#149612). 4.7★ Google rating with 200+ reviews.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default MobileHomeInsurance;
