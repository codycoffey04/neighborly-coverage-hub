import { PageLayout } from "@/components/shared/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  Heart, 
  Shield, 
  Users, 
  DollarSign, 
  Clock, 
  FileCheck,
  Phone,
  Baby,
  GraduationCap,
  Home,
  TrendingUp,
  Zap,
  Star,
  Building2,
  Car,
  Key,
  Quote
} from "lucide-react";

const LifeInsurance = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Life Insurance",
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
    "description": "Term and whole life insurance protection for Alabama and Georgia families, with coverage from $25/month for $500K term life insurance.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "25.00",
        "priceCurrency": "USD",
        "unitText": "MONTH"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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

  return (
    <>
      <Helmet>
        <title>Life Insurance in Alabama & Georgia | Coffey Agencies</title>
        <meta name="description" content="$500K term life insurance from $25/month for healthy adults in their 30s. Protect your family's financial security with affordable coverage and 4.8★ rated service." />
        <link rel="canonical" href="https://coffeyagencies.com/services/life-insurance" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <PageLayout
        title="Life Insurance in Alabama & Georgia"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: "Life Insurance", href: "/services/life-insurance" }
        ]}
      >
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container max-w-5xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Secure Your Family's Future
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                $500K term life insurance from $25/month for healthy adults in their 30s. Protect your family's financial security with affordable coverage and 4.8★ rated service across Alabama and Georgia.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>Quotes in minutes</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <span>$25/month for $500K</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="h-5 w-5 text-primary" />
                  <span>4.8★ rated service</span>
                </div>
              </div>

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
            </div>
          </div>
        </section>

        {/* Why Life Insurance Matters */}
        <section className="py-12 bg-muted/30">
          <div className="container max-w-5xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Protect What Matters Most with Life Insurance</h2>
            
            <div className="prose prose-slate max-w-none mb-8">
              <p className="text-lg text-muted-foreground">
                Life insurance provides the ultimate protection for your family's financial future. If something happens to you, life insurance ensures your loved ones can maintain their lifestyle, pay off debts including mortgages, cover final expenses, and fund children's education. Yet approximately <strong>48% of American families lack adequate life insurance coverage</strong>, leaving themselves vulnerable to financial hardship during already difficult times.
              </p>
              
              <p className="text-lg text-muted-foreground">
                The reality is stark but important: the death of a primary income earner creates immediate financial strain. Without life insurance, families face difficult decisions—selling the home, withdrawing children from college, taking on debt, or drastically reducing their standard of living. Life insurance eliminates these concerns by replacing your income and providing a financial cushion during the transition period.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">How Much Life Insurance Coverage Do You Need?</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Financial experts recommend <strong>5-10 times your annual income</strong> in life insurance coverage. This guideline ensures your family can replace your income for several years while adjusting to new circumstances. For someone earning $60,000 annually, this means $300,000-$600,000 in coverage. Higher earners or those with significant debts may need more—someone with a $250,000 mortgage (the approximate average in Alabama and Georgia) and two children planning for college should consider $500,000-$1,000,000 in coverage.
              </p>
              <p className="text-lg text-muted-foreground">
                The calculation should also account for specific financial obligations. In Alabama and Georgia, average home prices hover around $250,000-$280,000, with typical mortgage payments of $1,500-$2,000 monthly. College costs at Alabama institutions average $12,000-$25,000 annually for in-state students, while Georgia universities range from $11,000-$30,000 per year. Funeral expenses typically run $7,000-$10,000 in both states. Your life insurance should cover all these potential costs plus provide income replacement for your family's daily needs.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing by Age Table */}
        <section className="py-12">
          <div className="container max-w-5xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Affordable Protection for Young Families</h2>
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

        {/* Customer Story #1 - Mark & Tasha */}
        <section className="py-12 bg-muted/30">
          <div className="container max-w-5xl">
            <Card className="border-primary/20 bg-card">
              <CardHeader>
                <div className="flex items-start gap-3 mb-2">
                  <Quote className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <CardTitle className="text-2xl mb-2">Real Customer: Young Rome Family Secures Peace of Mind</CardTitle>
                    <CardDescription className="text-base">Mark and Tasha, both 32, Rome, GA</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Mark and Tasha live in Rome, GA with their two young children and a new $250,000 mortgage. After buying their home and welcoming their second child, they realized one parent's sudden death could devastate the family financially. They each purchased 20-year term life insurance policies for $500,000—enough to pay off the mortgage, replace several years of income, and fund college for both kids.
                </p>
                <p className="text-muted-foreground">
                  Their combined premium? Just <strong>$50 monthly</strong> (about $25 each for healthy young adults). Before getting coverage, Mark constantly worried about leaving his family with financial burden. Now they both sleep easier knowing their children are protected no matter what happens.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
                  "We used to lie awake worrying what would happen to our family if one of us was gone. Now we have peace of mind. For $50 a month, there's no reason not to protect your family."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stay-at-Home Parent Coverage */}
        <section className="py-12">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Baby className="h-10 w-10 text-primary" />
                  <h2 className="text-3xl font-bold">Stay-at-Home Parents Need Coverage Too</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  Stay-at-home parents also need life insurance, though many families overlook this. A stay-at-home parent provides valuable services—childcare, housekeeping, cooking, transportation, household management—worth an estimated <strong>$60,000-$80,000 annually</strong> if replaced with paid services.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Financial experts recommend <strong>$300,000-$500,000</strong> in coverage for stay-at-home parents, ensuring the surviving parent can afford childcare and maintain household stability. Term life insurance for this coverage level typically costs just <strong>$20-30 monthly</strong>.
                </p>
              </div>
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle>Stay-at-Home Parent Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Baby className="h-5 w-5 text-primary" />
                    <span>Childcare & education support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Home className="h-5 w-5 text-primary" />
                    <span>Housekeeping & maintenance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="h-5 w-5 text-primary" />
                    <span>Transportation & errands</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Household management</span>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-2">Estimated replacement value:</p>
                    <p className="text-2xl font-bold text-primary">$60,000-$80,000/year</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Term vs Whole Life Comparison Table */}
        <section className="py-12 bg-muted/30">
          <div className="container max-w-5xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Term Life vs. Whole Life Insurance: Understanding Your Options</h2>
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
                <Link to="/contact">Get Your Free Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Cost Factors Section */}
        <section className="py-12">
          <div className="container max-w-5xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Life Insurance Cost Factors</h2>
            
            <div className="prose prose-slate max-w-none mb-8">
              <p className="text-lg text-muted-foreground">
                Several factors determine your life insurance premium, with age and health being the most significant. Life insurance rates don't vary by state—a 35-year-old in Alabama pays the same as a 35-year-old in Georgia for identical coverage (assuming similar health profiles). The insurance company's risk assessment drives pricing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <Clock className="h-7 w-7 text-white" />
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

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <Heart className="h-7 w-7 text-white" />
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

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <DollarSign className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>Coverage Amount</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Coverage amount affects cost, but not proportionally. Doubling your coverage from $250,000 to $500,000 doesn't double the premium—the increase is typically <strong>60-80%</strong>. This relatively modest increase often makes higher coverage amounts worthwhile investments for comprehensive family protection.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <TrendingUp className="h-7 w-7 text-white" />
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

        {/* Customer Story #2 - Felicia */}
        <section className="py-12 bg-muted/30">
          <div className="container max-w-5xl">
            <Card className="border-primary/20 bg-card">
              <CardHeader>
                <div className="flex items-start gap-3 mb-2">
                  <Quote className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <CardTitle className="text-2xl mb-2">Real Customer: Single Montgomery Mom Ensures Children's Future</CardTitle>
                    <CardDescription className="text-base">Felicia, 38, single mother in Montgomery, AL</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Felicia, a 38-year-old single mother in Montgomery with two kids ages 5 and 8, serves as her family's sole provider. After a close friend's health scare, Felicia realized her children would have no financial safety net if something happened to her. She purchased a 20-year term policy for $300,000—enough to pay off her $150,000 mortgage and create an education fund.
                </p>
                <p className="text-muted-foreground">
                  Her premium? Just <strong>$25 monthly</strong> for high-quality term coverage. Before getting life insurance, Felicia felt guilty and fearful about not having a backup plan. Now she feels empowered, knowing her children would be financially secure even in worst-case scenarios.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
                  "As a single mom, I used to worry constantly about what would happen to my kids if I wasn't around. Life insurance gave me peace of mind—it's one more way I'm taking care of their future, no matter what."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-12">
          <div className="container max-w-5xl">
            <h2 className="text-3xl font-bold mb-6 text-center">The Application Process and Medical Exams</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <FileCheck className="h-7 w-7 text-white" />
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

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <Zap className="h-7 w-7 text-white" />
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

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <TrendingUp className="h-7 w-7 text-white" />
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

        {/* AL/GA Considerations */}
        <section className="py-12 bg-muted/30">
          <div className="container max-w-5xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Special Considerations for Alabama and Georgia Residents</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <Shield className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>Estate Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Alabama has no state estate tax, and Georgia eliminated its estate tax in 2014. The federal estate tax exemption stands at $13.61 million per individual in 2024. For most families, estate taxes don't drive life insurance needs. However, life insurance remains valuable for providing immediate liquidity to pay final expenses and creating equal inheritances.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <Building2 className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>Business Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Both states have strong business communities where life insurance plays crucial roles. Business partners often use life insurance to fund buy-sell agreements. Key person insurance protects businesses from the financial impact of losing essential employees or owners.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <GraduationCap className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>College Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The average four-year degree at public universities costs approximately $50,000-$100,000 for in-state students in Alabama and Georgia when including tuition, fees, room, board, and books. Life insurance ensures these educational goals remain achievable even if the primary earner dies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Life Insurance Questions Answered</h2>
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
        <section className="py-12 bg-muted/30">
          <div className="container max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardContent className="pt-6 flex-grow flex flex-col">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    "Lexi was very patient and helpful when I stopped by yesterday to ask multiple questions. She is truly an asset to your office!"
                  </p>
                  <div className="border-t pt-4 mt-auto">
                    <p className="font-semibold">Teresa Gardiner</p>
                    <p className="text-sm text-muted-foreground">Centre, AL</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardContent className="pt-6 flex-grow flex flex-col">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    "Customer service at Cody Coffey's Center office is amazing, a lost art, a total delight. Give them 1000 out of 100 :). Friendly, knowledgeable. So grateful to have found them when moving to a new town."
                  </p>
                  <div className="border-t pt-4 mt-auto">
                    <p className="font-semibold">Steve Smith</p>
                    <p className="text-sm text-muted-foreground">Centre, AL</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardContent className="pt-6 flex-grow flex flex-col">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    "I was with this agency for several years and had nothing but positive experiences with Cody and the other agents. When I had to move out of state, Kathy made it incredibly easy to end my Georgia policy and settle things up. I can't recommend them enough."
                  </p>
                  <div className="border-t pt-4 mt-auto">
                    <p className="font-semibold">Ricky Salas</p>
                    <p className="text-sm text-muted-foreground">Rome, GA</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <Button variant="outline" asChild>
                <Link to="/reviews">Read All Reviews →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Cross-Sell Section */}
        <section className="py-12">
          <div className="container max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Complete Your Coverage</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <Car className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>Auto Insurance</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-4 flex-grow">
                    Protect your vehicles with comprehensive coverage across Alabama and Georgia. Competitive rates with multi-policy discounts available.
                  </CardDescription>
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/services/auto-insurance">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <Home className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>Home Insurance</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-4 flex-grow">
                    Comprehensive homeowners coverage for Alabama and Georgia properties with protection against regional weather risks and competitive rates.
                  </CardDescription>
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/services/home-insurance">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <Key className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>Renters Insurance</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-4 flex-grow">
                    Affordable renters insurance starting at $8/month with auto bundle. Protect your belongings and liability with comprehensive coverage.
                  </CardDescription>
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/services/renters-insurance">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center flex-shrink-0 mb-3">
                    <Building2 className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>Condo Insurance</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-4 flex-grow">
                    Specialized coverage for condo owners protecting your unit improvements, personal property, and liability with flexible policy options.
                  </CardDescription>
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/services/condo-insurance">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="py-12 bg-muted/30">
          <div className="container max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Life Insurance Across Alabama & Georgia</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🏛️</span> Alabama
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {alabamaCities.map((city) => (
                    <Link
                      key={city.slug}
                      to={`/${city.slug}`}
                      className="text-primary hover:underline"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🍑</span> Georgia
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {georgiaCities.map((city) => (
                    <Link
                      key={city.slug}
                      to={`/${city.slug}`}
                      className="text-primary hover:underline"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-center text-muted-foreground">
              Don't see your city? <Link to="/contact" className="text-primary hover:underline">Contact us</Link> — we serve all of Alabama and Georgia.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to protect your family for less than a daily coffee?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a quote that fits your family's needs
            </p>

            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
              <Card className="border-primary/20">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-medium mb-1">Alabama</p>
                  <a href="tel:+12569276287" className="text-2xl font-bold hover:underline block" aria-label="Call Alabama office at (256) 927-6287">
                    (256) 927-6287
                  </a>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-medium mb-1">Georgia</p>
                  <a href="tel:+17067846511" className="text-2xl font-bold hover:underline block" aria-label="Call Georgia office at (706) 784-6511">
                    (706) 784-6511
                  </a>
                </CardContent>
              </Card>
            </div>

            <Button size="lg" asChild aria-label="Get your free life insurance quote">
              <Link to="/contact">Get Your Free Quote</Link>
            </Button>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default LifeInsurance;
