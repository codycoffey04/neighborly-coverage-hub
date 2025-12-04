import { PageLayout } from "@/components/shared/PageLayout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Car, Home, Key, Building2, Heart, FileText, Layers, LucideIcon } from "lucide-react";
import { learnArticles } from "@/data/learnArticles";
import { Helmet } from "react-helmet-async";

// Custom hub excerpts for Learn hub page
const hubExcerpts: Record<string, string> = {
  "auto-insurance-guide": "Everything you need to know about car insurance in Alabama and Georgia — coverage types, state requirements, and how to save.",
  "home-insurance-guide": "Protecting your largest investment. Coverage options, regional risks, and what standard policies don't cover.",
  "renters-insurance-guide": "Your landlord's insurance doesn't cover your stuff. Here's why renters insurance is worth every penny.",
  "condo-insurance-guide": "What your HOA's master policy doesn't cover — and why it matters for your finances.",
  "life-insurance-guide": "The conversation nobody wants but everyone needs. Term vs. permanent, how much you need, and when to buy.",
  "alabama-insurance-requirements": "State minimums, penalties for non-compliance, and what coverage you actually need.",
  "georgia-insurance-requirements": "State mandates, GEICS verification system, and recommended coverage levels.",
  "bundling-home-and-auto": "How combining policies saves up to $600/year — and when it makes sense."
};

// Article icons mapping
const articleIcons: Record<string, LucideIcon> = {
  "auto-insurance-guide": Car,
  "home-insurance-guide": Home,
  "renters-insurance-guide": Key,
  "condo-insurance-guide": Building2,
  "life-insurance-guide": Heart,
  "alabama-insurance-requirements": FileText,
  "georgia-insurance-requirements": FileText,
  "bundling-home-and-auto": Layers
};

const coverageGuides = ["auto-insurance-guide", "home-insurance-guide", "renters-insurance-guide", "condo-insurance-guide", "life-insurance-guide"];
const topicGuides = ["alabama-insurance-requirements", "georgia-insurance-requirements", "bundling-home-and-auto"];

const Learn = () => {
  const coverageArticles = learnArticles.filter(article => coverageGuides.includes(article.slug));
  const topicArticles = learnArticles.filter(article => topicGuides.includes(article.slug));

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
    <PageLayout
      title="Insurance Learning Center"
      description="Insurance doesn't have to be confusing. We've built this resource library to answer your questions in plain English — no jargon, no sales pitch, just honest information to help you make smart coverage decisions."
      breadcrumbs={[{ label: "Learn", href: "/learn" }]}
    >
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
    </PageLayout>
  );
};

export default Learn;
