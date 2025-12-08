import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Car, Home, Key, Building2, Heart, FileText, Layers, Bike, LucideIcon } from "lucide-react";
import { learnArticles } from "@/data/learnArticles";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import heroImage from "@/assets/alabama-hero.jpg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Custom hub excerpts for Learn hub page
const hubExcerpts: Record<string, string> = {
  "auto-insurance-guide": "Everything you need to know about car insurance in Alabama and Georgia — coverage types, state requirements, and how to save.",
  "home-insurance-guide": "Protecting your largest investment. Coverage options, regional risks, and what standard policies don't cover.",
  "renters-insurance-guide": "Your landlord's insurance doesn't cover your stuff. Here's why renters insurance is worth every penny.",
  "condo-insurance-guide": "What your HOA's master policy doesn't cover — and why it matters for your finances.",
  "life-insurance-guide": "The conversation nobody wants but everyone needs. Term vs. permanent, how much you need, and when to buy.",
  "motorcycle-insurance-guide": "Everything riders need to know about coverage, costs, and protecting your bike in Alabama and Georgia.",
  "alabama-insurance-requirements": "State minimums, penalties for non-compliance, and what coverage you actually need.",
  "georgia-insurance-requirements": "State mandates, GEICS verification system, and recommended coverage levels.",
  "bundling-home-and-auto": "How combining policies saves up to $600/year — and when it makes sense.",
  "alabama-vs-georgia-insurance": "Key differences in requirements, costs, and regulations for cross-state families.",
  "auto-insurance-costs-rome-ga": "What Rome drivers actually pay, what affects your premium, and how to save. Real local data for Floyd County.",
  "home-insurance-centre-al-storm-season": "Tornado, hail, and flood risks in Cherokee County. What's covered, preparation checklists, and claims guidance.",
  "what-happens-when-you-file-a-claim": "Step-by-step guide to auto and home claims. What to expect, common mistakes, and how we help you through the process.",
  "mistakes-when-switching-insurance": "How to change insurance companies without coverage gaps, lost discounts, or costly surprises."
};

// Article icons mapping
const articleIcons: Record<string, LucideIcon> = {
  "auto-insurance-guide": Car,
  "home-insurance-guide": Home,
  "renters-insurance-guide": Key,
  "condo-insurance-guide": Building2,
  "life-insurance-guide": Heart,
  "motorcycle-insurance-guide": Bike,
  "alabama-insurance-requirements": FileText,
  "georgia-insurance-requirements": FileText,
  "bundling-home-and-auto": Layers,
  "alabama-vs-georgia-insurance": Layers,
  "auto-insurance-costs-rome-ga": Car,
  "home-insurance-centre-al-storm-season": Home,
  "what-happens-when-you-file-a-claim": FileText,
  "mistakes-when-switching-insurance": Layers
};

const coverageGuides = ["auto-insurance-guide", "home-insurance-guide", "renters-insurance-guide", "condo-insurance-guide", "life-insurance-guide", "motorcycle-insurance-guide"];
const topicGuides = ["alabama-insurance-requirements", "georgia-insurance-requirements", "bundling-home-and-auto", "alabama-vs-georgia-insurance", "what-happens-when-you-file-a-claim", "mistakes-when-switching-insurance"];
const localGuides = ["auto-insurance-costs-rome-ga", "home-insurance-centre-al-storm-season"];

const Learn = () => {
  const coverageArticles = learnArticles.filter(article => coverageGuides.includes(article.slug));
  const topicArticles = learnArticles.filter(article => topicGuides.includes(article.slug));
  const localArticles = learnArticles.filter(article => localGuides.includes(article.slug));

  // CollectionPage schema
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Insurance Learning Center",
    "description": "Expert insurance guides covering auto, home, renters, condo, and life insurance in Alabama and Georgia. Plain English answers to your coverage questions.",
    "url": "https://coffeyagencies.com/learn",
    "hasPart": learnArticles.map(article => ({
      "@type": "Article",
      "url": `https://coffeyagencies.com/learn/${article.slug}`,
      "headline": article.title
    }))
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
        "name": "Learn",
        "item": "https://coffeyagencies.com/learn"
      }
    ]
  };

  // Combine all schemas into a single @graph structure for reliable rendering
  const allSchemas = {
    "@context": "https://schema.org",
    "@graph": [
      collectionSchema,
      breadcrumbSchema
    ]
  };

  return (
    <>
      <Helmet>
        <title>Insurance Learning Center | Coffey Agencies</title>
        <meta name="description" content="Expert insurance guides covering auto, home, renters, condo, and life insurance in Alabama and Georgia. Plain English answers to your coverage questions." />
        <link rel="canonical" href="https://coffeyagencies.com/learn" />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="Insurance Learning Center | Coffey Agencies" />
        <meta property="og:description" content="Expert insurance guides covering auto, home, renters, condo, and life insurance in Alabama and Georgia. Plain English answers to your coverage questions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coffeyagencies.com/learn" />
        <meta property="og:site_name" content="Coffey Agencies" />
        <meta property="og:image" content="https://coffeyagencies.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Insurance Learning Center | Coffey Agencies" />
        <meta name="twitter:description" content="Expert insurance guides covering auto, home, renters, condo, and life insurance. Plain English answers." />
        <meta name="twitter:image" content="https://coffeyagencies.com/og-image.jpg" />
        
        {/* Combined Schema Graph - All schemas in one JSON-LD block for reliable rendering */}
        <script type="application/ld+json">
          {JSON.stringify(allSchemas)}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section with Background Image */}
      <section 
        className="relative min-h-[400px] flex items-end pt-32 pb-16 px-4"
        style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        aria-label="Insurance Learning Center hero section"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/60" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">Learn</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Insurance Learning Center
          </h1>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
            Insurance doesn't have to be confusing. We've built this resource library to answer your questions in plain English — no jargon, no sales pitch, just honest information to help you make smart coverage decisions.
          </p>
        </div>
      </section>

      <main>
      {/* Intro Section */}
      <section className="py-12 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg text-muted-foreground">
            Whether you're shopping for your first policy or reviewing coverage you've had for years, start here.
          </p>
        </div>
      </section>

      {/* Guides by Coverage Type */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading className="mb-8">Guides by Coverage Type</SectionHeading>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageArticles.map((article) => {
              const IconComponent = articleIcons[article.slug];
              return (
                <Card key={article.slug} className="border-border hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:border-[#22c55e] hover:scale-105 transition-all duration-300 ease-in-out group">
                  <CardContent className="p-6">
                    {IconComponent && (
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {hubExcerpts[article.slug]}
                    </p>

                    <Link to={`/learn/${article.slug}`}>
                      <Button variant="link" className="p-0 h-auto text-accent hover:text-accent/80" aria-label={`Read guide about ${article.title}`}>
                        Read Guide
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guides by Topic */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading className="mb-8">Guides by Topic</SectionHeading>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topicArticles.map((article) => {
              const IconComponent = articleIcons[article.slug];
              return (
                <Card key={article.slug} className="border-border hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:border-[#22c55e] hover:scale-105 transition-all duration-300 ease-in-out group">
                  <CardContent className="p-6">
                    {IconComponent && (
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {hubExcerpts[article.slug]}
                    </p>

                    <Link to={`/learn/${article.slug}`}>
                      <Button variant="link" className="p-0 h-auto text-accent hover:text-accent/80" aria-label={`Read guide about ${article.title}`}>
                        Read Guide
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local Guides */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading className="mb-8">Local Guides</SectionHeading>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {localArticles.map((article) => {
              const IconComponent = articleIcons[article.slug];
              return (
                <Card key={article.slug} className="border-border hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:border-[#22c55e] hover:scale-105 transition-all duration-300 ease-in-out group">
                  <CardContent className="p-6">
                    {IconComponent && (
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {hubExcerpts[article.slug]}
                    </p>

                    <Link to={`/learn/${article.slug}`}>
                      <Button variant="link" className="p-0 h-auto text-accent hover:text-accent/80" aria-label={`Read guide about ${article.title}`}>
                        Read Guide
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <SectionHeading variant="white" className="mb-4">Still Have Questions?</SectionHeading>
          <p className="text-lg text-white/90 mb-8">
            Our guides cover the basics, but every situation is different. Talk to a licensed agent who can answer your specific questions.
          </p>
          <Link to="/#quote-form">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent-light" aria-label="Get your free insurance quote">
              Get Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
      </main>

      <Footer />
    </>
  );
};

export default Learn;
