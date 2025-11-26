import { Helmet } from "react-helmet";
import { PageLayout } from "@/components/shared/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  Wrench
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

const testimonials = [
  {
    text: "Lexi was very patient and helpful when I stopped by yesterday to ask multiple questions. She is truly an asset to your office!",
    attribution: "Teresa Gardiner (Google Review)"
  },
  {
    text: "Customer service at Cody Coffey's Center office is amazing, a lost art, a total delight. Give them 1000 out of 100 :). Friendly, knowledgeable. So grateful to have found them when moving to a new town.",
    attribution: "Steve Smith (Google Review)"
  },
  {
    text: "I was with this agency for several years and had nothing but positive experiences with Cody and the other agents. When I had to move out of state, Kathy made it incredibly easy to end my Georgia policy and settle things up. I can't recommend them enough.",
    attribution: "Ricky Salas (Google Review)"
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
  { name: "Enterprise", slug: "enterprise-al" }
];

const georgiaCities = [
  { name: "Rome", slug: "rome-ga" },
  { name: "Atlanta", slug: "atlanta-ga" },
  { name: "Lawrenceville", slug: "lawrenceville-ga" },
  { name: "Duluth", slug: "duluth-ga" },
  { name: "Columbus", slug: "columbus-ga" },
  { name: "Cartersville", slug: "cartersville-ga" },
  { name: "Calhoun", slug: "calhoun-ga" },
  { name: "Cedartown", slug: "cedartown-ga" },
  { name: "Summerville", slug: "summerville-ga" },
  { name: "Suwanee", slug: "suwanee-ga" },
  { name: "Alpharetta", slug: "alpharetta-ga" },
  { name: "Marietta", slug: "marietta-ga" }
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

  return (
    <PageLayout
      title="Condo Insurance (HO-6) in Alabama & Georgia"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/auto-insurance" },
        { label: "Condo Insurance", href: "/services/condo-insurance" }
      ]}
    >
      <Helmet>
        <title>Condo Insurance (HO-6) in Alabama & Georgia | Coffey Agencies</title>
        <meta 
          name="description" 
          content="Clear HO-6 condo insurance for Alabama and Georgia unit owners. Walls-in coverage, Loss Assessment, master policy coordination, and local claim support from Coffey Agencies." 
        />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center space-y-6">
            <p className="text-lg text-muted-foreground">
              Clear HO-6 coverage built around your unit, your HOA, and your budget. Condo insurance is about the space you own "from the walls-in," what the master policy covers outside your unit, and how both fit together at claim time.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-accent" />
                <span>Quotes in minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <ClipboardList className="h-4 w-4 text-accent" />
                <span>HOA doc review</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4 text-accent" />
                <span>Local claim support</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              Bundle with <Link to="/services/auto-insurance" className="text-primary hover:underline">auto insurance</Link> or align a townhome/condo with the right <Link to="/services/home-insurance" className="text-primary hover:underline">home insurance</Link> where applicable to unlock savings and simpler billing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <Link to="/contact">Get Your Free Quote</Link>
              </Button>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">Centre, AL:</span>
                <a href="tel:256-927-6287" className="text-primary hover:underline">(256) 927-6287</a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">Rome, GA:</span>
                <a href="tel:706-784-6511" className="text-primary hover:underline">(706) 784-6511</a>
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
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <coverage.icon className="h-6 w-6 text-primary" />
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
              <p className="text-lg leading-relaxed mb-6">
                Across Alabama and Georgia, severe thunderstorms, tornado tracks, and occasional tropical remnants can drive wind and water losses. In multi-story buildings, small leaks can turn into large losses as water travels between units. That's why walls-in coverage, Loss Assessment, and thoughtful deductibles matter. We'll verify how the master policy treats wind/hail and whether special deductibles apply—then size your HO-6 to play well with it.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 mt-1">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Water & backup</h3>
                    <p className="text-muted-foreground">Consider Water Backup if you have lower-level plumbing or stack risers nearby.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 mt-1">
                    <FileCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">RCV vs ACV</h3>
                    <p className="text-muted-foreground">RCV on personal property pays better after a loss; ACV saves premium but pays less.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 mt-1">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Master deductible risk</h3>
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
              <Card key={index} className="border-2 hover:border-accent/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <tip.icon className="h-6 w-6 text-accent" />
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
              <Card key={index} className="text-center border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="mx-auto">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-3 mx-auto">
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
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
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
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                  <p className="text-sm font-semibold text-muted-foreground">— {testimonial.attribution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/reviews">Read All 200+ Google Reviews →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Condo Insurance Across Alabama & Georgia</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Alabama</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {alabamaCities.map((city, index) => (
                    <Link
                      key={index}
                      to={`/service-areas/${city.slug}`}
                      className="text-primary hover:underline"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Georgia</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {georgiaCities.map((city, index) => (
                    <Link
                      key={index}
                      to={`/service-areas/${city.slug}`}
                      className="text-primary hover:underline"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-muted-foreground mt-8">
            Don't see your city? <Link to="/contact" className="text-primary hover:underline">Contact us</Link> — we serve all of Alabama and Georgia.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Have Questions About HO-6 Coverage?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Call a local agent today to discuss your condo insurance needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Card className="border-2">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div className="text-left">
                      <div className="font-semibold">Alabama</div>
                      <a href="tel:256-927-6287" className="text-primary hover:underline text-lg">
                        (256) 927-6287
                      </a>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div className="text-left">
                      <div className="font-semibold">Georgia</div>
                      <a href="tel:706-784-6511" className="text-primary hover:underline text-lg">
                        (706) 784-6511
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Button size="lg" asChild>
                <Link to="/contact">Get Your Free Quote</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default CondoInsurance;