import { Helmet } from "react-helmet-async";
import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroBackground from "@/assets/condo-insurance-hero.jpg";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { TrackedPhone } from "@/components/shared/TrackedPhone";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CompleteYourCoverage } from "@/components/shared/CompleteYourCoverage";
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
  DollarSign,
  Layers,
  AlertTriangle,
  Droplets,
  Wind,
  Home
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
    answer: "Understanding the division of coverage between your condo association's master policy and your individual HO-6 policy is crucial for proper protection. The master policy insures the building structure, exterior walls, roof, common areas like hallways and lobbies, and shared amenities. Your HO-6 (condo insurance) protects the interior of your unit—walls, floors, fixtures, and any improvements you've made—along with your personal belongings and liability coverage. However, condo associations vary significantly in how they structure their master policies. Some are \"all-in\" policies that cover fixtures and built-in appliances, while others are \"bare walls\" (only structural elements) or \"walls-in\" (structural elements plus basic fixtures). We review your association's master policy declarations to identify exactly what's covered where, then tailor your condominium insurance policy to fill any gaps. This is especially important for interior finishes like upgraded flooring, custom cabinets, or renovated bathrooms that might not be covered by the master policy. We also ensure your Loss Assessment coverage is adequate for your share of master policy deductibles that could be passed through after a claim."
  },
  {
    question: "How much does condo insurance cost in Alabama vs Georgia?",
    answer: "Condo insurance is typically much more affordable than homeowners insurance because you're only covering the interior of your unit—not the entire building structure. In Alabama (AL), expect to pay $45-65/month for condo insurance, slightly higher than the national average due to wind and hail exposure, especially in coastal areas like Gulf Shores and Orange Beach. In Georgia (GA), condo insurance typically costs $35-55/month, with Atlanta high-rises varying based on building age and location. Factors affecting your rate include location, building age, coverage amounts, deductible choices, master policy type (bare walls vs all-in), loss assessment limits, and floor level. Even at the higher end, HO-6 coverage costs a fraction of homeowners insurance—typically $30-65/month for comprehensive protection."
  },
  {
    question: "What is Loss Assessment coverage and how much do I need?",
    answer: "Loss assessment coverage pays your share of special assessments levied by your condo association—typically after a major claim exceeds the HOA's master policy coverage or deductible. If a covered loss affects common areas—roofs, hallways, amenities—the HOA may assess unit owners to cover the shortfall. Standard HO-6 policies include $1,000-2,000 in loss assessment coverage, but we recommend increasing to $25,000-50,000, especially for coastal Alabama and Georgia condos where hurricane deductibles on master policies can be substantial. A $10 million building with a 3% hurricane deductible means $300,000 the HOA must cover before insurance pays—and that gets assessed to unit owners. The cost to increase limits is minimal—often just a few dollars per month—but the protection is significant."
  },
  {
    question: "Are improvements and betterments covered by condo insurance?",
    answer: "Yes, absolutely. If you've made improvements or upgrades to your condo unit beyond what the association originally provided—such as upgraded flooring, renovated kitchens or bathrooms, custom built-ins, or improved fixtures—your unit owners insurance needs adequate coverage for those investments. Standard HO-6 policies typically include building property coverage, but the default limits may not be sufficient if you've significantly upgraded your unit. We can increase your building-property coverage limit specifically for these improvements and betterments. To ensure accurate coverage and smoother claims processing, keep receipts for major improvements, take photos before and after renovations, and maintain documentation of upgrade costs. This documentation proves the value of your improvements at claim time and helps us set appropriate coverage limits upfront."
  },
  {
    question: "How do I protect valuables like jewelry, bikes, or collectibles?",
    answer: "Standard HO-6 condo insurance policies include sub-limits for certain items. Scheduling valuables provides higher limits, broader causes of loss, and often no deductible for those items. Tell us what you own, and we'll price options for jewelry riders, fine art, instruments, or high-end bikes. This is especially important for AL and GA condo owners with valuable collections."
  },
  {
    question: "What information do you need for a condo insurance quote?",
    answer: "For a condominium insurance quote, we need your address, unit details (square footage, floor level), building age, any upgrades, protective devices, prior insurance, and any claims in the last 3–5 years. HOA documents that outline master policy coverage are ideal—we can often retrieve a summary if you don't have them handy. Having this information ready helps us provide accurate condo insurance quotes for AL and GA unit owners."
  },
  {
    question: "Does condo insurance cover water damage from an upstairs unit?",
    answer: "Yes, in most cases. If a pipe bursts in the unit above you or a neighbor's appliance leaks and damages your ceiling, walls, or belongings, your condo insurance covers your losses. You'd file a claim under your HO-6 policy for damage to your unit's interior and personal property. The upstairs neighbor's liability coverage (or the HOA's master policy, depending on where the leak originated) may ultimately be responsible, but your condominium insurance protects you first so you're not waiting on others to make repairs. Water damage between units is one of the most common condo claims in both Alabama and Georgia."
  },
  {
    question: "What if I rent out my condo as a vacation property?",
    answer: "If you rent out your condo—whether as a long-term rental or vacation property—a standard HO-6 policy may not provide adequate coverage for rental use. Gulf Shores and Orange Beach vacation condo owners in AL, and Tybee Island owners in GA, need landlord or dwelling fire policies that offer better protection for investment properties. Long-term rentals also have different coverage requirements. Ask about condo insurance specifically designed for rental/investment properties to ensure you're properly protected."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://coffeyagencies.com/services/condo-insurance#service",
  "serviceType": "Condo Insurance",
  "alternateName": ["Condominium Insurance", "HO-6 Insurance", "Unit Owners Insurance"],
  "provider": {
    "@id": "https://coffeyagencies.com/#organization"
  },
  "areaServed": [
    { "@type": "State", "name": "Alabama" },
    { "@type": "State", "name": "Georgia" }
  ],
  "description": "Specialized HO-6 condo insurance (also known as condominium insurance or unit owners insurance) protecting walls-in coverage, betterments, personal property, loss assessment, and liability for Alabama and Georgia condo owners.",
  "serviceOutput": "Insurance Policy",
  "termsOfService": "https://coffeyagencies.com/terms",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock"
  }
};

import { serviceTestimonialSets } from "@/data/testimonialData";

const testimonials = serviceTestimonialSets["condo-insurance"];

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

const CondoInsurance = () => {
  const location = useLocation();
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Condo Insurance Frequently Asked Questions",
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
        "name": "Condo Insurance",
        "item": "https://coffeyagencies.com/services/condo-insurance"
      }
    ]
  };

  // HowTo Schema for AEO/GEO optimization
  const howToSchema = {
    "@type": "HowTo",
    "name": "How to Get Condo Insurance in Alabama & Georgia",
    "description": "Get condo insurance coverage from a local independent agent in 4 simple steps.",
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
      <Header />

      <Helmet>
        <title>Condo Insurance Centre AL & Rome GA | Coffey Agencies</title>
        <meta 
          name="description" 
          content="Condo insurance to protect your unit, belongings & liability. Coverage that works with your HOA policy in Alabama & Georgia. Contact Coffey Agencies today." 
        />
        <link rel="canonical" href="https://coffeyagencies.com/services/condo-insurance" />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="Condo Insurance Alabama & Georgia | HO-6 Coverage | Coffey Agencies" />
        <meta property="og:description" content="Condo insurance (HO-6) in Alabama & Georgia. Walls-in coverage, belongings, liability, loss assessment. 4.7★ (117+ reviews). Get a free quote." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coffeyagencies.com/services/condo-insurance" />
        <meta property="og:site_name" content="Coffey Agencies" />
        <meta property="og:image" content="https://coffeyagencies.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Condo Insurance Alabama & Georgia | HO-6 Coverage | Coffey Agencies" />
        <meta name="twitter:description" content="Condo insurance (HO-6) in Alabama & Georgia. Walls-in coverage, belongings, liability, loss assessment. 4.7★ (117+ reviews). Get a free quote." />
        <meta name="twitter:image" content="https://coffeyagencies.com/og-image.jpg" />
        
        {/* Combined Schema Graph - All schemas in one JSON-LD block for reliable rendering */}
        <script type="application/ld+json">
          {JSON.stringify(allSchemas)}
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
                <li className="text-white font-medium">Condo Insurance</li>
              </ol>
            </nav>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                Condo Insurance (HO-6) in Alabama & Georgia
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-6 drop-shadow-md max-w-3xl mx-auto">
                Condominium insurance — also called condo insurance or unit owners insurance — protects what your HOA's master policy doesn't
              </p>
              
              {/* Supporting Paragraph - moved from intro section */}
              <p className="text-lg text-white/90 max-w-3xl mx-auto mb-6 drop-shadow-md">
                From Atlanta high-rises to Gulf Shores beach condos, from Birmingham lofts to Savannah historic units, condo owners across Alabama (AL) and Georgia (GA) need HO-6 coverage that fills the gap between their HOA's master policy and their personal belongings. We'll review your master policy and build walls-in coverage that protects your unit, improvements, and liability.
              </p>
              
              {/* Trust Badges - 3-column grid with CheckCircle */}
              <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
                {[
                  "Condo insurance quotes in minutes with the info you already have",
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
                  <Link to="/#quote-form">Get Quote</Link>
                </Button>
                <Button size="lg" className="bg-white hover:bg-white text-primary border border-primary shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200" asChild>
                  <TrackedPhone
                    phone="(256) 927-6287"
                    phoneRaw="2569276287"
                    location="Centre, AL"
                    office="centre"
                    pageType="service-condo"
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
                    pageType="service-condo"
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
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">What Does Condo Insurance Cover?</h2>
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">HO-6 Coverage at a Glance</h2>
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

      {/* Cost Comparison Section */}
      <section className="py-16">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <SectionHeading centered>How Much Does Condo Insurance Cost in Alabama vs Georgia?</SectionHeading>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              Condo insurance is typically much more affordable than homeowners insurance because you're only covering the interior of your unit—not the entire building structure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-primary">Alabama (AL)</CardTitle>
                    <p className="text-2xl font-bold text-accent">$45-65/month</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Slightly higher than the national average due to wind and hail exposure, especially in coastal areas like Gulf Shores and Orange Beach. Hurricane deductibles on master policies can significantly affect loss assessment needs.</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-primary">Georgia (GA)</CardTitle>
                    <p className="text-2xl font-bold text-accent">$35-55/month</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Atlanta metro condos vary based on building age and location. High-rise units in Midtown and Buckhead may see higher premiums, while suburban townhome-style condos in Gwinnett and Cobb counties typically cost less.</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle>Factors Affecting Your Condo Insurance Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { factor: "Location", detail: "Coastal AL condos (Gulf Shores, Orange Beach) and high-rise Atlanta units cost more" },
                  { factor: "Building age", detail: "Older buildings may have higher premiums due to increased risk" },
                  { factor: "Coverage amounts", detail: "Higher personal property and dwelling limits increase cost" },
                  { factor: "Deductible choice", detail: "Choosing $1,000 vs $500 deductible lowers monthly premium" },
                  { factor: "Master policy type", detail: "'Bare walls' master policies require more HO-6 coverage than 'all-in' policies" },
                  { factor: "Loss assessment limits", detail: "Higher limits add modest cost but significant protection" },
                  { factor: "Floor level", detail: "Ground-floor (water/break-in risk) or top floors (roof exposure) may cost more" },
                  { factor: "Bundling", detail: "Adding auto to your condo policy saves 15-25% on both" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">{item.factor}:</span>{" "}
                      <span className="text-muted-foreground">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Master Policy Explanation Section */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <SectionHeading centered>Understanding Your HOA's Master Policy</SectionHeading>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              Before purchasing condo insurance, you need to understand what your condo association's master policy covers—and more importantly, what it doesn't.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-2 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-3">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Bare Walls-In</CardTitle>
                <p className="text-sm text-accent font-medium">Most Common</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">The HOA's policy covers only the building structure—exterior walls, roof, hallways, elevators. Everything inside your unit (drywall, flooring, cabinets, fixtures, appliances) is YOUR responsibility. You need robust HO-6 coverage for interior finishes and improvements.</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-3">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Single Entity</CardTitle>
                <p className="text-sm text-muted-foreground font-medium">Moderate Coverage</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">The HOA's policy covers the building structure plus original interior finishes as built. If you've made upgrades (new flooring, custom cabinets, renovated bathrooms), those improvements are YOUR responsibility under your condominium insurance.</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-3">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <CardTitle>All-In (All-Inclusive)</CardTitle>
                <p className="text-sm text-muted-foreground font-medium">Most Comprehensive</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">The HOA's policy covers building structure plus all interior fixtures, even upgrades. This is the most comprehensive master policy but still doesn't cover your personal belongings, liability, or loss of use. You still need condo insurance.</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-background border-2">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <FileCheck className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">How to Find Out Your Master Policy Type</h3>
                  <p className="text-muted-foreground">Request a copy of your HOA's master policy or certificate of insurance. Look for the coverage type and—critically—the master policy deductible. If the HOA has a $25,000 or $50,000 deductible, unit owners may be assessed their share of that deductible after a major claim. That's where loss assessment coverage in your unit owners insurance becomes essential.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Loss Assessment Deep Dive Section */}
      <section className="py-16">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <SectionHeading centered>Loss Assessment Coverage — Don't Skip This</SectionHeading>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              Loss assessment coverage is one of the most overlooked—and most important—parts of condo insurance in Alabama and Georgia.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-accent" />
                  Real-World Example
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">A storm damages your condo building's roof. The repair costs $200,000, but the HOA's master policy has a $50,000 wind/hail deductible. The HOA assesses all 50 unit owners $1,000 each to cover the deductible.</p>
                <p className="font-semibold text-primary">Your loss assessment coverage pays your $1,000 share.</p>
              </CardContent>
            </Card>
            
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent" />
                  How Much Do You Need?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>Check your HOA's master policy deductible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>Standard HO-6 policies include $1,000-2,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span><strong>We recommend $25,000-50,000</strong> if your HOA has a high deductible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>Cost to increase: often just a few dollars per month</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-8 bg-accent/5 border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Wind className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Coastal AL & GA Warning</h3>
                  <p className="text-muted-foreground">Alabama's Gulf Coast condos and Georgia's coastal properties face particular risk given hurricane deductibles on master policies, which can be 2-5% of the building's insured value. A $10 million building with a 3% hurricane deductible means $300,000 the HOA must cover before insurance pays—and that gets assessed to unit owners. This is why adequate loss assessment coverage is critical for Gulf Shores, Orange Beach, Savannah, and Tybee Island condo owners.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Location-Specific Markets Section */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <SectionHeading centered>Condo Insurance for Alabama & Georgia Markets</SectionHeading>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  Atlanta Metro Condos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">Atlanta's condo market includes everything from Midtown high-rises to Buckhead luxury units to suburban townhome-style condos in Gwinnett and Cobb counties.</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Building age affects rates (older = higher premiums)</li>
                  <li>• Water damage from upstairs units is a common claim</li>
                  <li>• Verify your building's master policy type before purchasing</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wind className="h-5 w-5 text-primary" />
                  Gulf Coast Vacation Condos
                </CardTitle>
                <p className="text-sm text-muted-foreground">Gulf Shores & Orange Beach, AL</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">Alabama's coastal condos face unique insurance challenges:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Hurricane deductibles apply (typically 2-5% of dwelling)</li>
                  <li>• Flood insurance often required and always recommended</li>
                  <li>• Vacation rentals may need landlord/dwelling policy instead of HO-6</li>
                  <li>• Wind/hail deductibles are percentage-based</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" />
                  Savannah & Coastal Georgia
                </CardTitle>
                <p className="text-sm text-muted-foreground">Historic District & Tybee Island</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">Historic district condos in Savannah and beach condos on Tybee Island have similar coastal considerations:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Named storm deductibles may apply</li>
                  <li>• Flood zones affect both requirements and costs</li>
                  <li>• Older historic buildings may need specialized coverage</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-primary" />
                  Urban Condos (Birmingham, Huntsville)
                </CardTitle>
                <p className="text-sm text-muted-foreground">Alabama's Growing Markets</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">Alabama's growing urban condo markets typically have straightforward insurance needs:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Standard HO-6 coverage with attention to master policy type</li>
                  <li>• Adequate personal property limits for your belongings</li>
                  <li>• Consider Water Backup coverage for lower-level units</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-center text-muted-foreground mt-8">
            Whether you own a beach condo in Gulf Shores, a high-rise in Buckhead, or a townhome-style condo in Rome, we'll match your condominium insurance coverage to your specific situation.
          </p>
        </div>
      </section>

      {/* Regional Weather Considerations */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <SectionHeading centered>What Weather Risks Affect Condo Owners?</SectionHeading>
          </div>
          <Card className="border-2">
            <CardContent className="p-8">
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Across Alabama and Georgia, severe thunderstorms, tornado tracks, and occasional tropical remnants can drive wind and water losses. In multi-story buildings, small leaks can turn into large losses as water travels between units. That's why walls-in coverage, Loss Assessment, and thoughtful deductibles matter. We'll verify how the master policy treats wind/hail and whether special deductibles apply—then size your HO-6 condo insurance to play well with it.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0">
                    <Droplets className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Water & Backup Coverage</h3>
                    <p className="text-muted-foreground">Consider Water Backup if you have lower-level plumbing or stack risers nearby. Water damage between units is one of the most common condo claims in both AL and GA.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0">
                    <FileCheck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">RCV vs ACV on Personal Property</h3>
                    <p className="text-muted-foreground">Replacement Cost Value (RCV) on personal property pays better after a loss; Actual Cash Value (ACV) saves on condo insurance premium but pays less at claim time.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Master Deductible Risk</h3>
                    <p className="text-muted-foreground">Higher HOA deductibles can trigger assessments after claims—boost your Loss Assessment coverage accordingly, especially for coastal Alabama and Georgia condos.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* County & ZIP Code Geographic Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-xl md:text-2xl font-bold mb-6">Condo Markets Across Alabama and Georgia</h3>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-muted-foreground mb-4">
              Condo insurance (HO-6) needs vary dramatically across our service territory based on each county's condo market maturity, construction types, and master policy landscapes. <strong>Jefferson County</strong> features Alabama's most robust condo market, concentrated in Birmingham's revitalized downtown and Southside districts. Highland Park, Lakeview, and downtown Birmingham offer loft conversions in historic early-20th-century brick warehouses alongside new mid-rise developments. These older conversions present unique challenges—master policies may carry high deductibles, and interior build-outs in loft spaces can be costly to insure given exposed brick, timber beams, and high ceilings requiring specialized replacement cost calculations.
            </p>
            <p className="text-muted-foreground mb-4">
              Suburban Jefferson County (Hoover, Homewood) features townhome-style condos in mixed-use developments. A critical local consideration: tornado insurance coordination with HOA master policies. The April 2011 tornado outbreak taught Jefferson County condo associations hard lessons about wind/hail deductibles—many now carry 2-5% named-storm deductibles that could trigger special assessments, making loss assessment coverage essential for unit owners. Birmingham's condo market is mature enough that insurance agencies routinely review master policy declarations to identify coverage gaps.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Tuscaloosa County's</strong> condo market revolves around the University of Alabama. High-rise student condos near campus (complexes like "The Chimes") cater to parents and investors buying units for student housing. These see heavy turnover and sometimes elevated claims—water damage from tenant mishaps, fire risk from cooking incidents, and liability concerns from student parties. Downtown Tuscaloosa and Riverwalk luxury condos serve retirees and professionals, many in converted historic buildings requiring careful valuation. Short-term "game-day condos" used only during football season need specific policy provisions for vacancy and occasional rental use.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Fulton County</strong> (Atlanta) dominates Georgia's condo market. High-rise condos in Midtown, Buckhead, and Downtown Atlanta often sit in buildings with extensive amenities—doormen, pools, fitness centers—where HOA master policies cover exteriors and common areas but leave owners responsible for unit interiors, personal property, and loss assessment coverage. Historic building conversions in Old Fourth Ward and West End feature exposed brick and timber that drive up interior replacement costs. Suburban Fulton (Sandy Springs, Johns Creek) offers garden-style complexes where shared attic spaces create fire spread risk, sometimes resulting in higher premiums if the complex has prior claims history.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Gwinnett County</strong> features predominantly townhome and garden-style condos rather than high-rises. These often serve as starter homes for young professionals working in Atlanta but seeking affordable alternatives to Fulton County. Master policies typically cover roofs and exteriors, but hailstorm damage (Gwinnett sees hail a couple times annually) can trigger HOA special assessments if deductibles are high. <strong>Cobb County</strong> mirrors Gwinnett's townhome-heavy market with added presence around Marietta's revitalized downtown.
            </p>
            <p className="text-muted-foreground">
              <strong>Floyd County</strong> (Rome) has limited condo presence—a few downtown loft conversions and small complexes near Berry College. <strong>Cherokee County</strong> barely has a condo market—housing is 75.9% single-family with only 7.4% multifamily units (mostly apartments). The few lakeside condos near Weiss Lake function more as vacation properties than primary residences. <strong>Etowah</strong>, <strong>Tuscaloosa</strong> (outside the university area), <strong>DeKalb</strong>, and <strong>Bartow</strong> counties all fall somewhere in between—modest condo markets serving specific niches rather than being primary housing forms.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-4">
              ZIP code specifics reveal condo insurance nuances. Birmingham's <strong>35242</strong> (Hoover) includes several upscale townhome communities where master HOA policies typically carry adequate coverage, but owners should verify wind/hail deductible structures—Jefferson County's tornado history means prudent HOAs maintain 1% or lower wind deductibles, while under-insured associations might carry 5% deductibles that could devastate unit owners through special assessments after a severe storm. Interior replacement costs in these newer (1990s-2010s) townhomes typically run $80-$120 per square foot.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>35215</strong> (northeast Birmingham) features limited condo stock—mostly smaller apartment-style conversions where master policies may be minimal and owners need robust HO-6 coverage for interiors and contents. <strong>35173</strong> (Trussville) has growing townhome developments where HOAs are relatively new—reviewing master policy details is critical as some young associations haven't yet optimized coverage.
            </p>
            <p className="text-muted-foreground mb-4">
              Georgia's <strong>30044</strong> and <strong>30043</strong> (Lawrenceville area) contain numerous townhome communities built during Gwinnett's 1990s-2000s growth boom. These typically feature master policies through large HOA management companies, though hail damage claims can strain association reserves. Loss assessment coverage limits of $50,000-$100,000 are recommended given potential roof replacement costs across 100+ unit complexes. Interior coverage needs usually run $60-$100 per square foot depending on finishes.
            </p>
            <p className="text-muted-foreground mb-4">
              Atlanta's <strong>30349</strong> (College Park/airport area) has limited condo stock but what exists tends toward older buildings where master policy adequacy varies widely. Higher property crime in this ZIP code makes theft coverage and liability limits more important. <strong>30161</strong> (Rome) features a handful of downtown lofts and small complexes where the condo market is still developing—owners here may find themselves educating HOAs about proper insurance structures rather than inheriting well-established master policies. <strong>30120</strong> (Cartersville) has growing townhome communities along the I-75 corridor where newer construction and proactive HOA management typically mean well-structured master coverage.
            </p>
            <p className="text-muted-foreground">
              <strong>35960</strong> (Centre in Cherokee County) has virtually no condo presence—the few units that exist are typically lakeside properties near Weiss Lake functioning as vacation condos. These present unique considerations: seasonal occupancy, HOAs that may be informal, and the need for comprehensive coverage given property sits empty much of the year. Across all locations, condo owners should request master policy declarations from their HOA before finalizing HO-6 coverage. Key elements to verify: building coverage limits (are they adequate for full replacement?), wind/hail deductible structure (1-2% is manageable, 5%+ is problematic), what's covered under "all-in" vs. "bare walls-in" master policies, and whether flood insurance is carried (relevant for properties near Chattahoochee River in Fulton/Gwinnett or Coosa River in Etowah/Floyd counties).
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Save */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">How Can AL & GA Condo Owners Save on Insurance?</h2>
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">How Condo Claims Typically Work</h2>
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
            <SectionHeading centered className="mb-4">Condo Insurance Questions We Answer Every Day</SectionHeading>
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

      {/* Cross-Link to Learn Page */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <SectionHeading centered className="mb-6">Learn More About Condo Insurance</SectionHeading>
            <p className="text-muted-foreground mb-6">
              Want to understand the gap between your HOA's master policy and your personal coverage needs? Read our comprehensive guide:
            </p>
            <Link 
              to="/learn/condo-insurance-guide" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
            >
              <ArrowRight className="h-5 w-5" />
              Condo Insurance Guide: Closing the Gap Your HOA Leaves Open
            </Link>
            <p className="text-sm text-muted-foreground mt-4">
              We explain walls-in vs walls-out coverage, how to read your HOA's master policy, and exactly what your HO-6 policy should include.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
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

      <CompleteYourCoverage excludeService="condo" />

      {/* Service Areas */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <SectionHeading centered className="mb-4">Condo Insurance Across AL & GA</SectionHeading>
          </div>
          
          {/* Counties paragraph */}
          <p className="text-center text-muted-foreground max-w-4xl mx-auto mb-6">
            We provide condo insurance across Alabama — including Jefferson County (Birmingham), Mobile County, Baldwin County (Gulf Shores, Orange Beach), Madison County (Huntsville), and Cherokee County (Centre) — as well as Georgia communities in Fulton County (Atlanta, Buckhead, Midtown), Gwinnett County (Lawrenceville), DeKalb County (Decatur), Cobb County (Marietta), Floyd County (Rome), and Chatham County (Savannah, Tybee Island).
          </p>
          
          {/* ZIP codes paragraph */}
          <p className="text-center text-muted-foreground max-w-4xl mx-auto mb-8">
            Our condominium insurance coverage extends to ZIP codes including 35203, 35205 (Birmingham), 36561 (Gulf Shores), 36608 (Mobile), 30308, 30309 (Midtown Atlanta), 30305 (Buckhead), 30030 (Decatur), 30161 (Rome), 31401 (Savannah), and condo communities throughout AL and GA.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Alabama - gray card wrapper */}
            <div className="bg-muted/50 shadow-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Alabama (AL)
              </h3>
              <div className="flex flex-wrap gap-3">
                {alabamaCities.map((city, index) => (
                  <Link 
                    key={index}
                    to={`/${city.slug}`}
                    className="px-4 py-2 bg-background rounded-full text-sm border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Georgia - gray card wrapper */}
            <div className="bg-muted/50 shadow-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Georgia (GA)
              </h3>
              <div className="flex flex-wrap gap-3">
                {georgiaCities.map((city, index) => (
                  <Link 
                    key={index}
                    to={`/${city.slug}`}
                    className="px-4 py-2 bg-background rounded-full text-sm border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-muted-foreground">
            Don't see your city? <Link to="/contact" className="text-primary font-semibold hover:underline">Contact us</Link> — we serve all of AL and GA with condo insurance coverage.
          </p>
        </div>
      </section>

      {/* Internal Linking Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground">
            Protect your whole household. Explore our{" "}
            <Link to="/services/auto-insurance" className="text-primary font-semibold hover:underline">auto insurance</Link> for your vehicles,{" "}
            <Link to="/services/home-insurance" className="text-primary font-semibold hover:underline">home insurance</Link> if you're moving from a condo to a house, or{" "}
            <Link to="/services/renters-insurance" className="text-primary font-semibold hover:underline">renters insurance</Link> if you're comparing options. Bundle your condo insurance with auto to save 15-25% on both policies.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary-light">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
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
            <Link to="/#quote-form">Get Quote</Link>
          </Button>

          {/* Phone Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-4 text-sm text-white/90">
            <span>Or call us:</span>
            <TrackedPhone
              phone="(256) 927-6287"
              phoneRaw="2569276287"
              location="Centre, AL"
              office="centre"
              pageType="service-condo-cta"
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
              pageType="service-condo-cta"
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

export default CondoInsurance;