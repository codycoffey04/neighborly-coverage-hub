import { ReactNode } from "react";
import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export const PageLayout = ({ children, title, description, breadcrumbs }: PageLayoutProps) => {
  // Generate BreadcrumbList schema
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://coffeyagencies.com"
      },
      ...breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": crumb.label,
        "item": `https://coffeyagencies.com${crumb.href}`
      }))
    ]
  } : null;

  return (
    <div className="min-h-screen">
      {breadcrumbSchema && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(breadcrumbSchema)}
          </script>
        </Helmet>
      )}
      
      <Header />
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-primary-foreground/80 mb-4">
              <Link to="/" className="hover:text-primary-foreground transition-colors">
                Home
              </Link>
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-primary-foreground">{crumb.label}</span>
                  ) : (
                    <Link to={crumb.href} className="hover:text-primary-foreground transition-colors">
                      {crumb.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          )}
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-primary-foreground/90 max-w-3xl">
              {description}
            </p>
          )}
        </div>
      </section>

      {/* Main Content */}
      <main id="main-content">{children}</main>

      <Footer />
    </div>
  );
};
