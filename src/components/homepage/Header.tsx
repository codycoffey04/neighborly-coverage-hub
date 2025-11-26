import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import coffeyLogo from "@/assets/coffey-logo.jpg";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src={coffeyLogo} 
              alt="Coffey Agencies - Insurance Services" 
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#why-choose-us" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#service-area" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Locations
            </a>
            <a href="#faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-4 text-sm">
              <a href="tel:256-927-6287" className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span className="font-medium">(256) 927-6287</span>
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="tel:706-784-6511" className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span className="font-medium">(706) 784-6511</span>
              </a>
            </div>
            <Button className="bg-accent text-accent-foreground hover:bg-accent-light">
              Get Quote
            </Button>
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
                href="#services" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#why-choose-us" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#service-area" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Locations
              </a>
              <a 
                href="#faq" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                <a href="tel:256-927-6287" className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4" />
                  <span>(256) 927-6287 - Centre</span>
                </a>
                <a href="tel:706-784-6511" className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4" />
                  <span>(706) 784-6511 - Rome</span>
                </a>
              </div>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent-light">
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
