import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { PageLayout } from "@/components/shared/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, User, ArrowRight, AlertCircle, Info, Phone } from "lucide-react";
import { learnArticles, ContentSection } from "@/data/learnArticles";
import { Helmet } from "react-helmet-async";

const LearnArticle = () => {
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

  // Render content sections
  const renderContent = (section: ContentSection, index: number) => {
    switch (section.type) {
      case 'heading':
        const HeadingTag = `h${section.level}` as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag 
            key={index}
            className={section.level === 2 ? "text-2xl font-bold text-foreground mb-4 mt-8" : "text-xl font-bold text-foreground mb-3 mt-6"}
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
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Get Your Free Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <div className="flex flex-col sm:flex-row gap-3 text-sm">
              <a 
                href="tel:+12569276287" 
                aria-label="Call Centre, Alabama office at (256) 927-6287" 
                className="flex items-center gap-2 hover:underline"
              >
                <Phone className="h-4 w-4" />
                <span>AL: (256) 927-6287</span>
              </a>
              <a 
                href="tel:+17067846511" 
                aria-label="Call Rome, Georgia office at (706) 784-6511"
                className="flex items-center gap-2 hover:underline"
              >
                <Phone className="h-4 w-4" />
                <span>GA: (706) 784-6511</span>
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  // Build Article JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.metaDescription,
    "datePublished": "2025-01-01",
    "dateModified": "2025-11-01",
    "author": {
      "@type": "Organization",
      "name": "Coffey Agencies"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Coffey Agencies",
      "logo": {
        "@type": "ImageObject",
        "url": "https://coffeyagencies.com/coffey-logo.png"
      }
    },
    "mainEntityOfPage": `https://coffeyagencies.com/learn/${article.slug}`
  };

  // Build FAQPage JSON-LD if FAQs exist
  const faqSchema = article.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <>
      <Helmet>
        <title>{article.metaTitle}</title>
        <meta name="description" content={article.metaDescription} />
        <meta property="og:title" content={article.metaTitle} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://coffeyagencies.com/learn/${article.slug}`} />
        <link rel="canonical" href={`https://coffeyagencies.com/learn/${article.slug}`} />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        
        {/* FAQPage Schema */}
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      <PageLayout
        title={article.title}
        description={article.excerpt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Learn", href: "/learn" },
          { label: article.title, href: `/learn/${article.slug}` }
        ]}
      >
        {/* Article Header */}
        <section className="py-12 px-4">
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
                <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
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
          <section className="py-16 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-2xl font-bold text-foreground mb-8">Related Guides</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <Card key={related.slug} className="border-border hover:border-primary/50 transition-colors group">
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3">
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
      </PageLayout>
    </>
  );
};

export default LearnArticle;
