import React from "react";
import { useParams, Link, Navigate, useLocation } from "react-router-dom";
import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, User, ArrowRight, AlertCircle, Info, Phone, ChevronRight, CheckCircle } from "lucide-react";
import { learnArticles, ContentSection } from "@/data/learnArticles";
import { TrackedPhone } from "@/components/shared/TrackedPhone";
import { Helmet } from "react-helmet-async";

const LearnArticle = () => {
  const location = useLocation();
  const { slug } = useParams();
  const article = learnArticles.find(a => a.slug === slug);

  // 404 if article not found
  if (!article) {
    return <Navigate to="/404" replace />;
  }

  // Get related articles
  const relatedArticles = learnArticles.filter(a => 
    article.relatedArticles.includes(a.slug)
  ).slice(0, 3);

  // Load hero image dynamically if provided
  let heroImage: string | undefined;
  if (article.heroImage) {
    try {
      heroImage = new URL(`../assets/${article.heroImage}`, import.meta.url).href;
    } catch (e) {
      console.error(`Failed to load hero image: ${article.heroImage}`);
    }
  }

  // Render content sections
  const renderContent = (section: ContentSection, index: number) => {
    switch (section.type) {
      case 'heading':
        const HeadingTag = `h${section.level}` as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag 
            key={index}
            className={section.level === 2 ? "text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 mt-8" : "text-xl font-bold text-foreground mb-3 mt-6"}
          >
            {section.content as string}
          </HeadingTag>
        );
      
      case 'paragraph':
        return (
          <p key={index} className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {section.content as string}
          </p>
        );
      
      case 'list':
        return (
          <ul key={index} className="space-y-3 mb-6">
            {(section.content as string[]).map((item, i) => {
              // Split on — to get title and description
              const [title, ...descParts] = item.split(' — ');
              const description = descParts.join(' — ');
              
              return (
                <li key={i} className="flex gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span className="text-muted-foreground">
                    {description ? (
                      <>
                        <strong className="text-foreground">{title}</strong> — {description}
                      </>
                    ) : (
                      title
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        );
      
      case 'callout':
        const Icon = section.variant === 'warning' ? AlertCircle : Info;
        return (
          <Card key={index} className={`mb-6 border-l-4 ${section.variant === 'warning' ? 'border-l-destructive bg-destructive/5' : 'border-l-secondary bg-secondary/5'}`}>
            <CardContent className="p-6">
              <div className="flex gap-3">
                <Icon className={`w-5 h-5 mt-1 flex-shrink-0 ${section.variant === 'warning' ? 'text-destructive' : 'text-secondary'}`} />
                <div className="whitespace-pre-line text-foreground">
                  {section.content as string}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      
      default:
        return null;
    }
  };

  // Mid-Article CTA Component
  const MidArticleCTA = () => (
    <Card className="my-10 bg-primary text-primary-foreground border-0 overflow-hidden">
      <CardContent className="p-8">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">Ready for Your Free Quote?</h3>
          <p className="text-primary-foreground/80 mb-6">
            No obligation. We'll find the right coverage for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/#quote-form">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Get Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <div className="flex flex-col sm:flex-row gap-3 text-sm">
              <TrackedPhone
                phone="(256) 927-6287"
                phoneRaw="2569276287"
                location="Centre, AL"
                office="centre"
                pageType="learn-article"
                pageUrl={location.pathname}
                className="flex items-center gap-2 hover:underline"
                ariaLabel="Call Centre, Alabama office at (256) 927-6287"
              >
                <Phone className="h-4 w-4" />
                <span>AL: (256) 927-6287</span>
              </TrackedPhone>
              <TrackedPhone
                phone="(706) 784-6511"
                phoneRaw="7067846511"
                location="Rome, GA"
                office="rome"
                pageType="learn-article"
                pageUrl={location.pathname}
                className="flex items-center gap-2 hover:underline"
                ariaLabel="Call Rome, Georgia office at (706) 784-6511"
              >
                <Phone className="h-4 w-4" />
                <span>GA: (706) 784-6511</span>
              </TrackedPhone>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  // Build Article JSON-LD
  // Construct public image URL for schema
  // Use heroImage URL if available (Vite processes it), otherwise use og-image.jpg
  // heroImage is already a processed URL from Vite, but we need public domain URL
  // For schema, use the filename directly or fallback to og-image
  const articleImageUrl = article.heroImage 
    ? `https://coffeyagencies.com/${article.heroImage}`
    : "https://coffeyagencies.com/og-image.jpg";

  const articleSchema = {
    "@type": "Article",
    "@id": `https://coffeyagencies.com/learn/${article.slug}#article`,
    "headline": article.title,
    "description": article.metaDescription,
    "url": `https://coffeyagencies.com/learn/${article.slug}`,
    "image": articleImageUrl,
    "author": {
      "@id": "https://coffeyagencies.com/#organization"
    },
    "publisher": {
      "@id": "https://coffeyagencies.com/#organization",
      "logo": {
        "@type": "ImageObject",
        "url": "https://coffeyagencies.com/coffey-logo.png",
        "width": 250,
        "height": 60
      }
    },
    "mainEntityOfPage": `https://coffeyagencies.com/learn/${article.slug}`
  };

  // Build FAQPage JSON-LD if FAQs exist
  const faqSchema = article.faqs.length > 0 ? {
    "@type": "FAQPage",
    "name": `${article.title} - Frequently Asked Questions`,
    "mainEntity": article.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Build BreadcrumbList JSON-LD
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
        "name": "Learn",
        "item": "https://coffeyagencies.com/learn"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": `https://coffeyagencies.com/learn/${article.slug}`
      }
    ]
  };

  // Organization schema
  const organizationSchema = {
    "@type": "InsuranceAgency",
    "@id": "https://coffeyagencies.com/#organization",
    "name": "Coffey Agencies Inc.",
    "url": "https://coffeyagencies.com",
    "telephone": ["(256) 927-6287", "(706) 784-6511"],
    "email": "info@coffeyagencies.com",
    "priceRange": "$$",
    "image": "https://coffeyagencies.com/coffey-logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1913 W Main Street",
      "addressLocality": "Centre",
      "addressRegion": "AL",
      "postalCode": "35960",
      "addressCountry": "US"
    }
  };

  // Combine all schemas into a single @graph structure for reliable rendering
  const allSchemas = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      articleSchema,
      breadcrumbSchema,
      ...(faqSchema ? [faqSchema] : [])
    ]
  };

  return (
    <>
      <Helmet>
        <title>{article.metaTitle}</title>
        <meta name="description" content={article.metaDescription} />
        <link rel="canonical" href={`https://coffeyagencies.com/learn/${article.slug}`} />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content={article.metaTitle} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://coffeyagencies.com/learn/${article.slug}`} />
        <meta property="og:site_name" content="Coffey Agencies" />
        <meta property="og:image" content="https://coffeyagencies.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.excerpt} />
        <meta name="twitter:image" content="https://coffeyagencies.com/og-image.jpg" />
        
        {/* Combined Schema Graph - All schemas in one JSON-LD block for reliable rendering */}
        <script type="application/ld+json">
          {JSON.stringify(allSchemas)}
        </script>
      </Helmet>

      <Header />

      {/* Custom Hero Section with Background Image or Fallback */}
      {heroImage ? (
        <section 
          role="banner"
          aria-label={`${article.title} hero section`}
          className="relative min-h-[400px] md:min-h-[500px] flex items-end overflow-hidden"
        >
          <img 
            src={heroImage} 
            alt={`${article.title} insurance guide`}
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          
          {/* Content */}
          <div className="relative z-10 w-full py-12 px-4">
            <div className="container mx-auto max-w-4xl">
              {/* Breadcrumbs */}
              <nav className="flex items-center gap-2 text-sm text-white/80 mb-4" aria-label="Breadcrumb">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/learn" className="hover:text-white transition-colors">Learn</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">{article.title}</span>
              </nav>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                {article.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl drop-shadow-md">
                {article.excerpt}
              </p>
            </div>
          </div>
        </section>
      ) : (
        /* Fallback gradient hero for articles without hero images */
        <section className="relative py-16 px-4 bg-gradient-to-br from-primary via-primary to-primary/90">
          <div className="container mx-auto max-w-4xl">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-white/80 mb-4" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/learn" className="hover:text-white transition-colors">Learn</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{article.title}</span>
            </nav>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {article.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl">
              {article.excerpt}
            </p>
          </div>
        </section>
      )}

      {/* Article Header */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Badge>{article.category}</Badge>
            <Separator orientation="vertical" className="h-5" />
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Coffey Agencies Team
              </div>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            {article.content.map((section, index) => (
              <React.Fragment key={index}>
                {renderContent(section, index)}
                {/* Insert mid-article CTA after 4th content section */}
                {index === 3 && article.content.length > 4 && <MidArticleCTA />}
              </React.Fragment>
            ))}
          </article>

          {/* FAQ Section */}
          {article.faqs.length > 0 && (
            <div className="mt-12">
              <SectionHeading className="mb-6">Frequently Asked Questions</SectionHeading>
              <Accordion type="single" collapsible className="w-full">
                {article.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}

          {/* Internal Links CTA */}
          {article.internalLinks.length > 0 && (
            <Card className="mt-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
                <div className="flex flex-wrap gap-3">
                  {article.internalLinks.map((link, index) => (
                    <Link key={index} to={link.href}>
                      <Button variant={index === 0 ? "default" : "outline"}>
                        {link.text}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <SectionHeading className="mb-8">Related Guides</SectionHeading>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Card key={related.slug} className="border-border hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:border-[#22c55e] hover:scale-105 transition-all duration-300 ease-in-out group">
                  <CardContent className="p-6">
                  <Badge className="mb-3">
                    {related.category}
                  </Badge>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {related.excerpt}
                    </p>
                    <Link to={`/learn/${related.slug}`}>
                      <Button variant="link" className="p-0 h-auto">
                        Read Guide
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-[#1e3a5f]">
        <div className="container mx-auto max-w-4xl text-center">
          <SectionHeading variant="white" className="mb-4">Have Questions About Your Coverage?</SectionHeading>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Our guides cover the basics, but every situation is different. Talk to a licensed agent who can answer your specific questions.
          </p>
          
          {/* CTA Button - Green */}
          <Link to="/#quote-form">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white min-w-[200px] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              Get Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          
          {/* Phone Numbers */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-white/90">
            <span>Or call us:</span>
            <TrackedPhone
              phone="(256) 927-6287"
              phoneRaw="2569276287"
              location="Centre, AL"
              office="centre"
              pageType="learn-article-cta"
              pageUrl={location.pathname}
              className="text-white hover:text-accent transition-colors"
              ariaLabel="Call Centre, Alabama office at (256) 927-6287"
            >
              (256) 927-6287
            </TrackedPhone>
            <span className="hidden sm:inline">|</span>
            <TrackedPhone
              phone="(706) 784-6511"
              phoneRaw="7067846511"
              location="Rome, GA"
              office="rome"
              pageType="learn-article-cta"
              pageUrl={location.pathname}
              className="text-white hover:text-accent transition-colors"
              ariaLabel="Call Rome, Georgia office at (706) 784-6511"
            >
              (706) 784-6511
            </TrackedPhone>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              Licensed in AL & GA
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              Hablamos Español
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              Family Owned
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LearnArticle;
