import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import { Button } from "@/components/ui/button";
import { Home, Phone, FileText, MapPin, HelpCircle, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const notFoundSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Page Not Found - Coffey Agencies",
    "description": "The page you're looking for doesn't exist. Find insurance quotes, contact information, and helpful resources.",
    "url": `https://coffeyagencies.com${location.pathname}`,
    "isPartOf": {
      "@id": "https://coffeyagencies.com/#website"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
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
          "name": "Page Not Found"
        }
      ]
    }
  };

  const helpfulLinks = [
    {
      icon: Home,
      title: "Homepage",
      description: "Return to our homepage",
      link: "/"
    },
    {
      icon: FileText,
      title: "Request Quote",
      description: "Get your free insurance quote",
      link: "/contact"
    },
    {
      icon: MapPin,
      title: "Service Areas",
      description: "Find locations we serve",
      link: "/service-areas"
    },
    {
      icon: HelpCircle,
      title: "Common Questions",
      description: "Browse our FAQ section",
      link: "/faq"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Page Not Found - Coffey Agencies</title>
        <meta name="description" content="The page you're looking for doesn't exist. Contact Coffey Agencies for insurance quotes in Alabama and Georgia." />
        <meta name="robots" content="noindex, follow" />
        <script type="application/ld+json">
          {JSON.stringify(notFoundSchema)}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen">
        {/* Hero Section - Navy Gradient Background */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-secondary py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              {/* Large 404 Number */}
              <div className="text-8xl md:text-9xl font-bold text-white/20 mb-4">
                404
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Page Not Found
              </h1>

              {/* Description */}
              <p className="text-lg text-primary-foreground/80 mb-8">
                Sorry, the page you're looking for doesn't exist or has been moved. 
                Let's get you back on track.
              </p>

              {/* CTA Button */}
              <Link to="/">
                <Button className="bg-accent text-accent-foreground hover:bg-accent-light" aria-label="Return to homepage">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Helpful Links Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Helpful Links
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {helpfulLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    to={item.link}
                    className="group bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need Help? We're Here for You
            </h2>
            <p className="text-muted-foreground mb-6">
              Call us directly and we'll help you find what you need
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="tel:+12569276287" 
                className="flex items-center gap-2 text-lg font-semibold hover:text-accent transition-colors"
                aria-label="Call Centre, Alabama office at (256) 927-6287"
              >
                <Phone className="h-5 w-5 text-accent" />
                <span>(256) 927-6287</span>
                <span className="text-sm text-muted-foreground font-normal">Centre, AL</span>
              </a>
              
              <span className="hidden sm:inline text-muted-foreground">|</span>
              
              <a 
                href="tel:+17067846511" 
                className="flex items-center gap-2 text-lg font-semibold hover:text-accent transition-colors"
                aria-label="Call Rome, Georgia office at (706) 784-6511"
              >
                <Phone className="h-5 w-5 text-accent" />
                <span>(706) 784-6511</span>
                <span className="text-sm text-muted-foreground font-normal">Rome, GA</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;
