import { ReactNode } from "react";
import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import heroBackgroundWebP from "@/assets/hero-background.webp";
import heroBackgroundMobileWebP from "@/assets/hero-background-mobile.webp";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export const PageLayout = ({ children, title, description, breadcrumbs }: PageLayoutProps) => {
  // Note: Breadcrumb schema is now handled by individual pages in their @graph structures
  // This prevents duplicate schemas and ensures all schemas render reliably
  
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative bg-primary pt-32 pb-16 px-4 overflow-hidden">
        {/* Background Image */}
        <picture>
          <source media="(max-width: 768px)" srcSet={heroBackgroundMobileWebP} type="image/webp" />
          <source media="(min-width: 769px)" srcSet={heroBackgroundWebP} type="image/webp" />
          <img 
            src={heroBackground} 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 45%' }}
            loading="eager"
          />
        </picture>
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30" />
        
        <div className="relative z-10 container mx-auto max-w-6xl">
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
