import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import heroBackground from "@/assets/life-insurance-hero.jpg";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link, useLocation } from "react-router-dom";
import { TrackedPhone } from "@/components/shared/TrackedPhone";
import { Helmet } from "react-helmet-async";
import { 
  Heart, 
  Shield, 
  Users, 
  DollarSign, 
  Clock, 
  FileCheck,
  Phone,
  GraduationCap,
  Home,
  TrendingUp,
  Zap,
  Star,
  Building2,
  Car,
  Key,
  FileText,
  MapPin,
  CheckCircle,
  Bike
} from "lucide-react";

const LifeInsurance = () => {
  const location = useLocation();
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://coffeyagencies.com/services/life-insurance#service",
    "serviceType": "Life Insurance",
    "alternateName": ["Burial Insurance", "Final Expense Insurance", "Term Life Insurance", "Whole Life Insurance"],
    "provider": {
      "@id": "https://coffeyagencies.com/#organization"
    },
    "areaServed": [
      { "@type": "State", "name": "Alabama" },
      { "@type": "State", "name": "Georgia" }
    ],
    "description": "Term life, whole life, burial insurance, and final expense coverage for Alabama and Georgia families. No-exam options available. Coverage from $25/month for $500K term life insurance.",
    "serviceOutput": "Insurance Policy",
    "termsOfService": "https://coffeyagencies.com/terms",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Life Insurance Frequently Asked Questions",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much life insurance coverage do I need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Financial experts recommend 5-10 times your annual income in life insurance coverage. For example, if you earn $60,000 annually, you should consider $300,000-$600,000 in coverage. This ensures your family can replace your income, pay off debts (including mortgages averaging $250,000 in Alabama and Georgia), cover funeral expenses ($7,000-$10,000), and fund children's education. Stay-at-home parents should also carry coverage to replace childcare, housekeeping, and other services they provide."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between term and whole life insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Term life insurance covers you for a specific period (10, 20, or 30 years) and costs significantly less—about $20-30/month for $500,000 coverage for a healthy 30-year-old. Whole life insurance provides lifelong coverage and includes a cash value component that grows over time, but costs much more—typically $200-300/month for the same coverage. Most families choose term life for its affordability and high coverage amounts during working years when protection is most critical."
        }
      },
      {
        "@type": "Question",
        "name": "How much does life insurance cost in Alabama and Georgia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Life insurance rates don't vary by state—they're based on age, health, coverage amount, and term length. A healthy 30-year-old can get $500,000 in 20-year term coverage for approximately $25/month. At age 40, the same coverage costs around $35/month, and at age 50, about $75/month. Whole life insurance costs significantly more—$200-300/month for $500,000 coverage for a 30-year-old. Rates increase with age and health conditions like smoking (smokers pay 2-3 times more than non-smokers)."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a medical exam for life insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional life insurance policies typically require a medical exam, which includes basic measurements (height, weight, blood pressure) and sometimes blood/urine tests. However, no-exam life insurance policies are available for smaller coverage amounts (usually up to $250,000-$500,000) with simplified underwriting based on health questions. No-exam policies cost slightly more but offer faster approval—often within 24-48 hours instead of several weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Should stay-at-home parents have life insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Stay-at-home parents provide valuable services including childcare, housekeeping, cooking, transportation, and household management. Replacing these services costs an estimated $60,000-$80,000 annually in Alabama and Georgia. Financial experts recommend $300,000-$500,000 in coverage for stay-at-home parents to ensure the surviving parent can afford childcare, household help, and maintain family stability. Term life insurance for this coverage level typically costs $20-30/month."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get life insurance if I have health conditions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. While serious health conditions increase premiums, most people can qualify for life insurance. Common conditions like controlled diabetes, high blood pressure, or past cancer treatment may result in higher rates but don't necessarily disqualify you. Guaranteed issue policies are available for those with significant health issues—these policies don't require medical questions or exams, though they cost more and have lower coverage limits. We help find the best options for your specific health situation."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I outlive my term life insurance policy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When your term life insurance policy expires (after 10, 20, or 30 years), coverage simply ends and you stop paying premiums. This is actually the ideal outcome—it means you're alive and healthy. At that point, many people no longer need life insurance because their mortgage is paid off, children are financially independent, and retirement savings are established. If you still need coverage, you can purchase a new policy, though premiums will be higher due to increased age."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can I get life insurance coverage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Coverage speed depends on the policy type. No-exam simplified issue policies can be approved within 24-48 hours with coverage starting immediately. Traditional policies requiring medical exams typically take 4-8 weeks—scheduling the exam, processing lab results, and underwriting review all add time. Some insurers offer accelerated underwriting using electronic health records, potentially reducing approval time to 1-2 weeks even with full underwriting."
        }
      }
    ]
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
        "name": "Life Insurance",
        "item": "https://coffeyagencies.com/services/life-insurance"
      }
    ]
  };

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

  // HowTo Schema for AEO/GEO optimization
  const howToSchema = {
    "@type": "HowTo",
    "name": "How to Get Life Insurance in Alabama & Georgia",
    "description": "Get life insurance coverage from a local independent agent in 4 simple steps.",
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
        <title>Life Insurance Quotes Alabama & Georgia | Term, Whole Life & More | Coffey Agencies</title>
        <meta name="description" content="Life insurance in Alabama & Georgia. Term life, whole life, final expense & burial insurance. No-exam options available. 4.8★ Google rating. Get a quote today." />
        <link rel="canonical" href="https://coffeyagencies.com/services/life-insurance" />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="Life Insurance Quotes Alabama & Georgia | Coffey Agencies" />
        <meta property="og:description" content="Term life, whole life, final expense & burial insurance in AL & GA. No-exam options available. Protect your family's financial security." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coffeyagencies.com/services/life-insurance" />
        <meta property="og:site_name" content="Coffey Agencies" />
        <meta property="og:image" content="https://coffeyagencies.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Life Insurance from $25/Month | Alabama & Georgia" />
        <meta name="twitter:description" content="Term life, whole life, final expense & burial insurance in AL & GA. No-exam options available." />
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
        aria-label="Life insurance hero section"
        className="relative min-h-[600px] flex items-end overflow-hidden"
      >
        <img 
          src={heroBackground} 
          alt="Multi-generational family portrait representing life insurance protection" 
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
                <li className="text-white font-medium">Life Insurance</li>
              </ol>
            </nav>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                Life Insurance in Alabama & Georgia
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-6 drop-shadow-md max-w-3xl mx-auto">
                From term life to final expense and burial insurance, we help Alabama (AL) and Georgia (GA) families find coverage that fits their needs and budget. No-exam options available for faster approval.
              </p>
              
              {/* CTA Buttons - styled for dark background */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200" asChild>
                  <Link to="/#quote-form">Get Quote</Link>
                </Button>
                <Button size="lg" className="bg-white hover:bg-white text-primary border border-primary shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200" asChild>
                  <TrackedPhone
                    phone="(256) 927-6287"
                    phoneRaw="2569276287"
                    location="Centre, AL"
                    office="centre"
                    pageType="service-life"
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
                    pageType="service-life"
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
                  <Zap className="h-5 w-5 text-accent drop-shadow-md" />
                  <span className="drop-shadow-md">Instant quotes for many applicants</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-accent drop-shadow-md" />
                  <span className="drop-shadow-md">Rates locked for term length</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-accent drop-shadow-md" />
                  <span className="drop-shadow-md">No-exam policies available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Why Life Insurance Matters */}
        <section className="py-12 bg-muted/30">
          <div className="container max-w-5xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">Why Do I Need Life Insurance?</h2>
            
            <div className="prose prose-slate max-w-none mb-8">
              <p className="text-lg text-muted-foreground">
                Families across Alabama and Georgia rely on life insurance to protect what matters most. Whether you're a young professional in Atlanta building your career, a family in Birmingham's suburbs with a new mortgage, or a retiree on the Gulf Coast planning your legacy, life insurance provides financial security for those you love. Yet approximately <strong>48% of American families lack adequate life insurance coverage</strong>, leaving themselves vulnerable to financial hardship during already difficult times.
              </p>
              
              <p className="text-lg text-muted-foreground">
                The reality is stark but important: the death of a primary income earner creates immediate financial strain. Without life insurance, families in AL and GA face difficult decisions—selling the home, withdrawing children from college, taking on debt, or drastically reducing their standard of living. Life insurance eliminates these concerns by replacing your income and providing a financial cushion during the transition period.
              </p>

              <p className="text-lg text-muted-foreground">
                As a local agency with offices in Centre, AL and Rome, GA, we take time to understand your family's situation—not just run you through an online quote engine. Life insurance is deeply personal. The coverage that works for a 28-year-old starting a family in Gwinnett County is different from what a 62-year-old in Mobile needs. We help you find the right fit.
              </p>
            </div>

          </div>
        </section>

        {/* Pricing by Age Table */}
        <section className="py-12">
          <div className="container max-w-5xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">How Much Life Insurance Coverage Do You Need?</h2>
              <p className="text-muted-foreground mb-6">Sample rates for $500K 20-year term life insurance</p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-lg">Age</TableHead>
                    <TableHead className="text-lg text-right">$500K Coverage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Age 30</TableCell>
                    <TableCell className="text-right font-bold text-primary">~$25/month</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Age 40</TableCell>
                    <TableCell className="text-right font-bold text-primary">~$35/month</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Age 50</TableCell>
                    <TableCell className="text-right font-bold text-primary">~$75/month</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Rates shown are for healthy, non-smoking individuals with 20-year term policies. Actual rates depend on health, lifestyle, and coverage amount.
              </p>
            </div>
          </div>
        </section>



        {/* Term vs Whole Life Comparison Table */}
        <section className="py-12 bg-muted/30">
          <div className="container max-w-5xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">What's the Difference Between Term and Whole Life Insurance?</h2>
              <p className="text-lg text-muted-foreground">
                The two primary types of life insurance serve different purposes and come at dramatically different costs. Understanding the distinction helps you choose the right coverage for your family's needs and budget.
              </p>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/3">Feature</TableHead>
                    <TableHead className="w-1/3">Term Life Insurance</TableHead>
                    <TableHead className="w-1/3">Whole Life Insurance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Coverage Duration</TableCell>
                    <TableCell>Set period (10, 20, or 30 years)</TableCell>
                    <TableCell>Lifetime (as long as premiums paid)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Monthly Cost</TableCell>
                    <TableCell className="text-primary font-bold">$20-30/month for $500K (age 30)</TableCell>
                    <TableCell>$200-300/month for $500K (age 30)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cash Value</TableCell>
                    <TableCell>None—pure protection</TableCell>
                    <TableCell>Builds cash value over time</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Best For</TableCell>
                    <TableCell>Income replacement during working years</TableCell>
                    <TableCell>Estate planning, permanent coverage</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">What Happens at Term End</TableCell>
                    <TableCell>Coverage ends, premiums stop</TableCell>
                    <TableCell>Coverage continues for life</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Premium Changes</TableCell>
                    <TableCell>Fixed for the term</TableCell>
                    <TableCell>Fixed for life</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Coverage Amount</TableCell>
                    <TableCell>High coverage affordable ($1M+ possible)</TableCell>
                    <TableCell>Lower coverage due to high cost</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="mt-8 prose prose-slate max-w-none">
              <p className="text-muted-foreground">
                Term life insurance is the most popular choice for Alabama and Georgia families, with approximately <strong>54% of life insurance owners</strong> carrying only term coverage. It provides maximum protection during the years when your family depends on your income most—while paying the mortgage, raising children, and building retirement savings. A 20-year or 30-year term typically aligns with major obligations, covering you until the mortgage is paid and children are financially independent.
              </p>
              <p className="text-muted-foreground">
                Whole life insurance makes sense for specific situations: estate planning needs, desire for permanent coverage regardless of future insurability, or using the cash value component as a financial asset. The cash value grows tax-deferred and can be borrowed against for major expenses. However, the significantly higher cost means many families choose smaller coverage amounts with whole life, potentially leaving gaps in protection during critical years.
              </p>
            </div>

            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <Link to="/#quote-form">Get Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Cost Factors Section */}
        <section className="py-12">
          <div className="container max-w-5xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">What Factors Affect My Life Insurance Cost?</h2>
            
            <div className="prose prose-slate max-w-none mb-8">
              <p className="text-lg text-muted-foreground">
                Several factors determine your life insurance premium, with age and health being the most significant. Life insurance rates don't vary by state—a 35-year-old in Alabama pays the same as a 35-year-old in Georgia for identical coverage (assuming similar health profiles). The insurance company's risk assessment drives pricing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Age Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Age is the strongest predictor of cost. A healthy 30-year-old might pay $25/month for $500,000 in 20-year term coverage. The same person waiting until age 40 will pay approximately $35/month—a <strong>40% increase</strong>. At age 50, that coverage costs around $75/month, <strong>three times the age-30 rate</strong>.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    This exponential increase makes purchasing life insurance younger significantly more cost-effective, even if you don't think you need it yet.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Health Factors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Health dramatically impacts rates. Conditions like controlled diabetes, high blood pressure, or past cancer treatment typically increase premiums but don't necessarily disqualify you. <strong>Smoking status</strong> creates the largest single premium difference—smokers and tobacco users pay <strong>2-3 times more</strong> than non-smokers.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    A non-smoker paying $30/month for coverage might see rates jump to $75-90/month as a smoker. Quitting smoking can qualify you for non-smoker rates after typically 12 months tobacco-free.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Coverage Amount</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Coverage amount affects cost, but not proportionally. Doubling your coverage from $250,000 to $500,000 doesn't double the premium—the increase is typically <strong>60-80%</strong>. This relatively modest increase often makes higher coverage amounts worthwhile investments for comprehensive family protection.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Term Length</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Term length also affects cost. Extending from a 20-year to 30-year term adds roughly <strong>20-30% to the premium</strong>. For example, if a 20-year term costs $30/month, a 30-year term might cost $36-39/month. The modest increase can provide valuable extended protection as family obligations evolve.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Life Insurance for Seniors Section */}
        <section className="py-12 bg-muted/30">
          <div className="container max-w-5xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">Life Insurance for Seniors in Alabama & Georgia</h2>
            
            <div className="prose prose-slate max-w-none mb-8">
              <p className="text-lg text-muted-foreground">
                If you're over 50, 60, or even 70, life insurance is still available and often more affordable than you'd expect. Many seniors in AL and GA choose burial insurance or final expense coverage to ensure their families aren't burdened with end-of-life costs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Final Expense / Burial Insurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Smaller policies ($5,000-25,000) designed specifically to cover funeral costs, outstanding medical bills, and other end-of-life expenses. Average funeral costs in Alabama and Georgia range from <strong>$7,000-$12,000</strong>, making a $10,000-$15,000 policy a practical choice.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Premiums:</strong> $30-50/mo at age 50, $50-80/mo at age 60, $80-130/mo at age 70
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Guaranteed Issue Life Insurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    No health questions, no medical exam, guaranteed approval regardless of health conditions. Coverage amounts are typically limited ($5,000-25,000), and there may be a 2-year waiting period for full benefits.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Ideal for:</strong> Those with serious health issues who've been declined elsewhere
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <FileCheck className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Simplified Issue Life Insurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    A few health questions but no medical exam required. Faster approval than fully underwritten policies with higher coverage limits than guaranteed issue options.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Approval time:</strong> Often within 24-48 hours
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-muted-foreground mt-8">
              Whether you're in Birmingham planning for retirement or on the Gulf Coast enjoying your golden years, we help seniors find appropriate burial insurance and final expense coverage without overpaying.
            </p>
          </div>
        </section>

        {/* Life Insurance for Young Families Section */}
        <section className="py-12">
          <div className="container max-w-5xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">Life Insurance for Young Families</h2>
            
            <div className="prose prose-slate max-w-none mb-8">
              <p className="text-lg text-muted-foreground">
                New parents and young families in Georgia's growing suburbs and Alabama's family-friendly communities have unique life insurance needs. When you're raising children, your coverage should account for multiple financial obligations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Income Replacement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If something happens to you, how many years of income does your family need? Many advisors recommend <strong>10-12x your annual salary</strong>. A $60,000 income suggests $600,000-$720,000 in coverage.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Mortgage Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Enough coverage to pay off your home so your family can stay in place. Average mortgages in AL and GA range from $200,000-$350,000—factor this into your coverage amount.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Education Funding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    College costs continue rising—$50,000-$100,000 for in-state 4-year degrees in Alabama and Georgia. Life insurance can ensure your children's education is funded regardless of what happens.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Childcare Costs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If a stay-at-home parent passes, the surviving spouse may need to pay for childcare—averaging $800-1,200/month per child in AL and GA. Life insurance helps cover this unexpected expense.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 text-center">
              <p className="text-lg text-foreground">
                <strong>Term life insurance</strong> is often the best fit for young families—it provides maximum coverage at the lowest cost during your highest-need years. A healthy 30-year-old can often get <strong>$500,000 in 20-year term coverage for $25-35/month</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* No-Exam Options Section */}
        <section className="py-12 bg-muted/30">
          <div className="container max-w-5xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">No Medical Exam Life Insurance Options</h2>
            
            <div className="prose prose-slate max-w-none mb-8">
              <p className="text-lg text-muted-foreground text-center">
                Don't want to deal with a medical exam? Several life insurance options are available without needles, lab work, or doctor visits for AL and GA residents.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <FileCheck className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Simplified Issue</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Answer a few health questions on the application, but no physical exam required. Approval in days rather than weeks. Coverage up to $500,000+ available for healthy applicants.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Best for:</strong> Healthy individuals wanting fast approval
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Guaranteed Issue</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    No health questions, no exam, guaranteed approval regardless of health conditions. Ideal for those with serious health issues who've been declined elsewhere. Coverage typically limited to $25,000 with a 2-year graded benefit period.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Best for:</strong> Those with significant health conditions
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Accelerated Underwriting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Some carriers use data and algorithms to approve healthy applicants without an exam. If you're young and healthy, you may qualify for full coverage at standard rates without any medical requirements.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Best for:</strong> Young, healthy individuals seeking competitive rates
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
              <p className="text-muted-foreground">
                <strong>Trade-off:</strong> No-exam policies are convenient but may cost 10-20% more than fully underwritten coverage. For many people—especially those in good health—completing a medical exam results in lower premiums. We'll help you weigh the tradeoffs.
              </p>
            </div>
          </div>
        </section>


        {/* Application Process */}
        <section className="py-12">
          <div className="container max-w-5xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">How Do I Apply for Life Insurance?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <FileCheck className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Traditional Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Complete a detailed health questionnaire covering medical history, current conditions, medications, lifestyle factors, and family health history. Most applicants undergo a basic medical exam at no cost—a paramedical examiner visits your home or office.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Timeline:</strong> Typically 4-8 weeks from application to approval
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>No-Exam Policies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Simplified issue policies use health questions without requiring medical exams. Coverage decisions often made within 24-48 hours. No-exam policies typically cover amounts up to $250,000-$500,000.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Trade-off:</strong> Approximately 10-20% higher premiums than traditional underwritten policies
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Accelerated Underwriting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Some insurers now offer accelerated underwriting using electronic health records and predictive analytics, potentially eliminating the need for exams while maintaining competitive pricing.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Best of both worlds:</strong> Traditional pricing with no-exam convenience—though not available for everyone or all coverage amounts
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* FAQ Section */}
        <section className="py-12">
          <div className="container max-w-4xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center">Life Insurance Questions Answered</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-background border-2 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow">
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-lg pr-4">How much life insurance coverage do I need?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  Financial experts recommend 5-10 times your annual income in life insurance coverage. For example, if you earn $60,000 annually, you should consider $300,000-$600,000 in coverage. This ensures your family can replace your income, pay off debts (including mortgages averaging $250,000 in Alabama and Georgia), cover funeral expenses ($7,000-$10,000), and fund children's education. Stay-at-home parents should also carry coverage to replace childcare, housekeeping, and other services they provide.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background border-2 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow">
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-lg pr-4">What's the difference between term and whole life insurance?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  Term life insurance covers you for a specific period (10, 20, or 30 years) and costs significantly less—about $20-30/month for $500,000 coverage for a healthy 30-year-old. Whole life insurance provides lifelong coverage and includes a cash value component that grows over time, but costs much more—typically $200-300/month for the same coverage. Most families choose term life for its affordability and high coverage amounts during working years when protection is most critical.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background border-2 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow">
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-lg pr-4">How much does life insurance cost in Alabama and Georgia?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  Life insurance rates don't vary by state—they're based on age, health, coverage amount, and term length. A healthy 30-year-old can get $500,000 in 20-year term coverage for approximately $25/month. At age 40, the same coverage costs around $35/month, and at age 50, about $75/month. Whole life insurance costs significantly more—$200-300/month for $500,000 coverage for a 30-year-old. Rates increase with age and health conditions like smoking (smokers pay 2-3 times more than non-smokers).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-background border-2 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow">
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-lg pr-4">Do I need a medical exam for life insurance?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  Traditional life insurance policies typically require a medical exam, which includes basic measurements (height, weight, blood pressure) and sometimes blood/urine tests. However, no-exam life insurance policies are available for smaller coverage amounts (usually up to $250,000-$500,000) with simplified underwriting based on health questions. No-exam policies cost slightly more but offer faster approval—often within 24-48 hours instead of several weeks.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-background border-2 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow">
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-lg pr-4">Should stay-at-home parents have life insurance?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  Absolutely. Stay-at-home parents provide valuable services including childcare, housekeeping, cooking, transportation, and household management. Replacing these services costs an estimated $60,000-$80,000 annually in Alabama and Georgia. Financial experts recommend $300,000-$500,000 in coverage for stay-at-home parents to ensure the surviving parent can afford childcare, household help, and maintain family stability. Term life insurance for this coverage level typically costs $20-30/month.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-background border-2 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow">
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-lg pr-4">Can I get life insurance if I have health conditions?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  Yes. While serious health conditions increase premiums, most people can qualify for life insurance. Common conditions like controlled diabetes, high blood pressure, or past cancer treatment may result in higher rates but don't necessarily disqualify you. Guaranteed issue policies are available for those with significant health issues—these policies don't require medical questions or exams, though they cost more and have lower coverage limits. We help find the best options for your specific health situation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-background border-2 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow">
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-lg pr-4">What happens if I outlive my term life insurance policy?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  When your term life insurance policy expires (after 10, 20, or 30 years), coverage simply ends and you stop paying premiums. This is actually the ideal outcome—it means you're alive and healthy. At that point, many people no longer need life insurance because their mortgage is paid off, children are financially independent, and retirement savings are established. If you still need coverage, you can purchase a new policy, though premiums will be higher due to increased age.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-background border-2 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow">
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-lg pr-4">How quickly can I get life insurance coverage?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  Coverage speed depends on the policy type. No-exam simplified issue policies can be approved within 24-48 hours with coverage starting immediately. Traditional policies requiring medical exams typically take 4-8 weeks—scheduling the exam, processing lab results, and underwriting review all add time. Some insurers offer accelerated underwriting using electronic health records, potentially reducing approval time to 1-2 weeks even with full underwriting.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container max-w-5xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                    "Lexi was very patient and helpful when I stopped by yesterday to ask multiple questions. She is truly an asset to your office!"
                  </p>
                  <div className="mt-auto">
                    <p className="font-semibold text-foreground">Teresa Gardiner</p>
                    <p className="text-sm text-muted-foreground">Centre, AL</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                    "Customer service at Cody Coffey's Centre office is amazing, a lost art, a total delight. Give them 1000 out of 100 :). Friendly, knowledgeable. So grateful to have found them when moving to a new town."
                  </p>
                  <div className="mt-auto">
                    <p className="font-semibold text-foreground">Steve Smith</p>
                    <p className="text-sm text-muted-foreground">Centre, AL</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                    "I was with this agency for several years and had nothing but positive experiences with Cody and the other agents. When I had to move out of state, Kathy made it incredibly easy to end my Georgia policy and settle things up. I can't recommend them enough."
                  </p>
                  <div className="mt-auto">
                    <p className="font-semibold text-foreground">Ricky Salas</p>
                    <p className="text-sm text-muted-foreground">Rome, GA</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <Button variant="outline" asChild>
                <Link to="/reviews">Read All Reviews</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Cross-Sell Section */}
        <section className="py-12">
          <div className="container max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Complete Your Coverage</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Life insurance is an important part of your financial plan—but most families need more than just one policy. Bundle your coverage and get the protection you deserve.
              </p>
            </div>

            {/* Top row: 3 cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <Car className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>Auto Insurance</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-4 flex-grow">
                    Required by law and essential for protecting your vehicle. Get liability, collision, and comprehensive coverage that fits your budget.
                  </CardDescription>
                  <Button variant="outline" asChild className="w-full" aria-label="Learn more about Auto Insurance">
                    <Link to="/services/auto-insurance">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <Home className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>Home Insurance</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-4 flex-grow">
                    Protect your biggest investment from storms, fire, theft, and liability. Coverage built for Alabama and Georgia homeowners.
                  </CardDescription>
                  <Button variant="outline" asChild className="w-full" aria-label="Learn more about Home Insurance">
                    <Link to="/services/home-insurance">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <Key className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>Renters Insurance</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-4 flex-grow">
                    Affordable coverage for your belongings and liability protection. Often costs less than $20/month for solid coverage.
                  </CardDescription>
                  <Button variant="outline" asChild className="w-full" aria-label="Learn more about Renters Insurance">
                    <Link to="/services/renters-insurance">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Bottom row: 2 cards centered */}
            <div className="grid md:grid-cols-2 gap-6 max-w-[680px] mx-auto">
              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <Building2 className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>Condo Insurance</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-4 flex-grow">
                    HO-6 coverage for walls-in, betterments, and upgrades. Coordinates with your HOA's master policy to fill the gaps.
                  </CardDescription>
                  <Button variant="outline" asChild className="w-full" aria-label="Learn more about Condo Insurance">
                    <Link to="/services/condo-insurance">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <Bike className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>Motorcycle Insurance</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-4 flex-grow">
                    Coverage built for riders—cruisers, sport bikes, and touring machines. Custom parts coverage and honest advice on limits.
                  </CardDescription>
                  <Button variant="outline" asChild className="w-full" aria-label="Learn more about Motorcycle Insurance">
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
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Life Insurance Across Alabama & Georgia</h2>
            </div>

            {/* Counties paragraph */}
            <div className="prose prose-slate max-w-none mb-8">
              <p className="text-muted-foreground text-center">
                We serve families across Alabama (AL)—including Jefferson County (Birmingham), Montgomery County, Mobile County, Madison County (Huntsville), Baldwin County (Gulf Shores), Cherokee County (Centre), and Tuscaloosa County—as well as Georgia (GA) communities in Fulton County (Atlanta), Gwinnett County, Cobb County, DeKalb County, Floyd County (Rome), and Bartow County (Cartersville).
              </p>
            </div>

            {/* ZIP codes paragraph */}
            <div className="prose prose-slate max-w-none mb-8">
              <p className="text-muted-foreground text-center">
                Our life insurance coverage extends to families in ZIP codes including 35242, 35215 (Birmingham area), 36117 (Montgomery), 36695 (Mobile), 35960 (Centre), 30161 (Rome), 30349 (Atlanta South), 30043 (Lawrenceville), 30120 (Cartersville), and communities throughout AL and GA.
              </p>
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

        {/* Cross-Link to Learn Page */}
        <section className="py-12 bg-muted/30">
          <div className="container max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Learn More About Life Insurance</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Trying to decide between term and whole life insurance? Wondering which policy type fits your situation? Read our comprehensive guide.
            </p>
            <Button size="lg" variant="outline" asChild>
              <Link to="/learn/life-insurance-guide">Term vs Whole Life: Which Is Right for You? →</Link>
            </Button>
            <p className="text-muted-foreground mt-4">
              We break down the differences, explain cash value, and help you understand which approach makes sense for your family's needs and budget.
            </p>
          </div>
        </section>

        {/* Internal Linking Section */}
        <section className="py-12">
          <div className="container max-w-5xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">Protect Your Whole Family</h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              Life insurance is one piece of a complete protection plan for Alabama and Georgia families. Explore our other coverage options and ask about bundling multiple policies to save.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" asChild>
                <Link to="/services/home-insurance">Home Insurance →</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/services/auto-insurance">Auto Insurance →</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/services/renters-insurance">Renters Insurance →</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/#quote-form">Get a Quote →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary-light" id="quote-form">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to protect your family for less than a daily coffee?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a quote that fits your family's needs
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
                pageType="service-life-cta"
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
                pageType="service-life-cta"
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

export default LifeInsurance;
