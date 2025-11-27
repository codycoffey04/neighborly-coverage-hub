import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import coffeyLogo from "@/assets/coffey-logo-transparent.png";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={coffeyLogo} 
              alt="Coffey Agencies - Insurance Services" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="/#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <a href="/#service-area" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Locations
            </a>
            <Link to="/faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link to="/reviews" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Reviews
            </Link>
            <Link to="/learn" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Learn
            </Link>
          </nav>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-4 text-sm">
              <a href="tel:+12569276287" className="flex items-center gap-1 text-foreground hover:text-primary transition-colors" aria-label="Call Centre, Alabama office at (256) 927-6287">
                <Phone className="h-4 w-4" />
                <span className="font-medium">(256) 927-6287</span>
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="tel:+17067846511" className="flex items-center gap-1 text-foreground hover:text-primary transition-colors" aria-label="Call Rome, Georgia office at (706) 784-6511">
                <Phone className="h-4 w-4" />
                <span className="font-medium">(706) 784-6511</span>
              </a>
            </div>
            <Link to="/contact">
              <Button className="bg-accent text-accent-foreground hover:bg-accent-light" aria-label="Get your free insurance quote">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a 
                href="/#services" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <Link 
                to="/about" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <a 
                href="/#service-area" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Locations
              </a>
              <Link 
                to="/faq" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                to="/reviews" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link 
                to="/learn" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Learn
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                <a href="tel:+12569276287" className="flex items-center gap-2 text-sm" aria-label="Call Centre, Alabama office at (256) 927-6287">
                  <Phone className="h-4 w-4" />
                  <span>(256) 927-6287 - Centre</span>
                </a>
                <a href="tel:+17067846511" className="flex items-center gap-2 text-sm" aria-label="Call Rome, Georgia office at (706) 784-6511">
                  <Phone className="h-4 w-4" />
                  <span>(706) 784-6511 - Rome</span>
                </a>
              </div>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent-light" aria-label="Get your free insurance quote">
                  Get Quote
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
