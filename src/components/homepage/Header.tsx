import { useState, lazy, Suspense } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import coffeyLogo from "@/assets/coffey-logo-transparent-2.png";
import coffeyLogoWebP from "@/assets/coffey-logo-transparent-2.webp";
import { TrackedPhone } from "@/components/shared/TrackedPhone";

// Lazy load heavy NavigationMenu component (Radix UI, only needed on hover/click)
const NavigationMenu = lazy(() => import("@/components/ui/navigation-menu").then(m => ({ default: m.NavigationMenu })));
const NavigationMenuContent = lazy(() => import("@/components/ui/navigation-menu").then(m => ({ default: m.NavigationMenuContent })));
const NavigationMenuItem = lazy(() => import("@/components/ui/navigation-menu").then(m => ({ default: m.NavigationMenuItem })));
const NavigationMenuLink = lazy(() => import("@/components/ui/navigation-menu").then(m => ({ default: m.NavigationMenuLink })));
const NavigationMenuList = lazy(() => import("@/components/ui/navigation-menu").then(m => ({ default: m.NavigationMenuList })));
const NavigationMenuTrigger = lazy(() => import("@/components/ui/navigation-menu").then(m => ({ default: m.NavigationMenuTrigger })));

const serviceLinks = [
  { name: "Auto Insurance", href: "/services/auto-insurance" },
  { name: "Home Insurance", href: "/services/home-insurance" },
  { name: "Mobile Home Insurance", href: "/services/mobile-home-insurance" },
  { name: "Renters Insurance", href: "/services/renters-insurance" },
  { name: "Condo Insurance", href: "/services/condo-insurance" },
  { name: "Life Insurance", href: "/services/life-insurance" },
  { name: "Motorcycle Insurance", href: "/services/motorcycle-insurance" },
  { name: "Boat Insurance", href: "/services/boat-insurance" },
  { name: "ATV/UTV Insurance", href: "/services/atv-utv-insurance" },
];

const learnLinks = [
  { name: "Auto Insurance Guide", href: "/learn/auto-insurance-guide" },
  { name: "Home Insurance Guide", href: "/learn/home-insurance-guide" },
  { name: "Renters Insurance Guide", href: "/learn/renters-insurance-guide" },
  { name: "Condo Insurance Guide", href: "/learn/condo-insurance-guide" },
  { name: "Life Insurance Guide", href: "/learn/life-insurance-guide" },
  { name: "Motorcycle Insurance Guide", href: "/learn/motorcycle-insurance-guide" },
  { name: "Boat Insurance Guide", href: "/learn/boat-insurance-guide" },
  { name: "ATV/UTV Insurance Guide", href: "/learn/atv-utv-insurance-guide" },
  { name: "Alabama vs Georgia Insurance", href: "/learn/alabama-vs-georgia-insurance" },
  { name: "Auto Insurance Costs: Rome, GA", href: "/learn/auto-insurance-costs-rome-ga" },
  { name: "Storm Season: Centre, AL", href: "/learn/home-insurance-centre-al-storm-season" },
  { name: "What Happens When You File a Claim", href: "/learn/what-happens-when-you-file-a-claim" },
  { name: "Mistakes When Switching Insurance", href: "/learn/mistakes-when-switching-insurance" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [learnExpanded, setLearnExpanded] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <picture>
              <source srcSet={coffeyLogoWebP} type="image/webp" />
              <img 
                src={coffeyLogo} 
                alt="Coffey Agencies - Insurance Services" 
                width={180}
                height={56}
                className="h-14 w-auto"
                decoding="async"
                loading="eager"
              />
            </picture>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-primary bg-transparent hover:text-primary/80">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-56 gap-1 p-2">
                      {serviceLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link 
                              to={link.href} 
                              className="block px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                            >
                              {link.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/about" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              Contact
            </Link>
            <Link to="/faq" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              FAQ
            </Link>
            <Link to="/reviews" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              Reviews
            </Link>
            
            <Suspense fallback={<div className="text-sm font-medium text-primary">Learn</div>}>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium text-primary bg-transparent hover:text-primary/80">
                      Learn
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-56 gap-1 p-2">
                        {learnLinks.map((link) => (
                          <li key={link.href}>
                            <NavigationMenuLink asChild>
                              <Link 
                                to={link.href}
                                className="block px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                              >
                                {link.name}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </Suspense>
          </nav>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-4 text-sm">
              <TrackedPhone
                phone="(256) 927-6287"
                phoneRaw="2569276287"
                location="Centre, AL"
                office="centre"
                pageType="header"
                pageUrl={location.pathname}
                className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                ariaLabel="Call Centre, Alabama office at (256) 927-6287"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">(256) 927-6287</span>
              </TrackedPhone>
              <span className="text-primary/50">|</span>
              <TrackedPhone
                phone="(706) 784-6511"
                phoneRaw="7067846511"
                location="Rome, GA"
                office="rome"
                pageType="header"
                pageUrl={location.pathname}
                className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                ariaLabel="Call Rome, Georgia office at (706) 784-6511"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">(706) 784-6511</span>
              </TrackedPhone>
            </div>
            <Link to="/#quote-form">
              <Button className="bg-accent text-white hover:bg-accent/90 min-h-[48px] min-w-[48px] px-4" aria-label="Get your free insurance quote">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
          {mobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
        <div className="lg:hidden py-4 border-t border-primary/20">
            <nav className="flex flex-col gap-4">
              {/* Services - expandable */}
              <div className="space-y-2">
                <button
                  onClick={() => setServicesExpanded(!servicesExpanded)}
                  className="flex items-center justify-between w-full text-base font-medium text-primary hover:text-primary/80 transition-colors min-h-[44px] py-3"
                  aria-expanded={servicesExpanded}
                  aria-controls="mobile-services-menu"
                >
                  Services
                  <ChevronDown className={`h-5 w-5 transition-transform ${servicesExpanded ? 'rotate-180' : ''}`} />
                </button>
                {servicesExpanded && (
                  <div id="mobile-services-menu" className="pl-4 space-y-1">
                    {serviceLinks.map((link) => (
                      <Link 
                        key={link.href}
                        to={link.href} 
                        onClick={() => setMobileMenuOpen(false)} 
                        className="block text-base text-primary/70 hover:text-primary transition-colors min-h-[44px] py-3"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/about" 
                className="text-base font-medium text-primary hover:text-primary/80 transition-colors py-3 min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-base font-medium text-primary hover:text-primary/80 transition-colors py-3 min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/faq" 
                className="text-base font-medium text-primary hover:text-primary/80 transition-colors py-3 min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                to="/reviews" 
                className="text-base font-medium text-primary hover:text-primary/80 transition-colors py-3 min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reviews
              </Link>

              {/* Learn - expandable */}
              <div className="space-y-2">
                <button
                  onClick={() => setLearnExpanded(!learnExpanded)}
                  className="flex items-center justify-between w-full text-base font-medium text-primary hover:text-primary/80 transition-colors min-h-[44px] py-3"
                  aria-expanded={learnExpanded}
                  aria-controls="mobile-learn-menu"
                >
                  Learn
                  <ChevronDown className={`h-5 w-5 transition-transform ${learnExpanded ? 'rotate-180' : ''}`} />
                </button>
                {learnExpanded && (
                  <div id="mobile-learn-menu" className="pl-4 space-y-1">
                    {learnLinks.map((link) => (
                      <Link 
                        key={link.href}
                        to={link.href} 
                        onClick={() => setMobileMenuOpen(false)} 
                        className="block text-base text-primary/70 hover:text-primary transition-colors min-h-[44px] py-3"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2 pt-2 border-t border-primary/20">
                <TrackedPhone
                  phone="(256) 927-6287"
                  phoneRaw="2569276287"
                  location="Centre, AL"
                  office="centre"
                  pageType="header-mobile"
                  pageUrl={location.pathname}
                  className="flex items-center gap-2 text-base text-primary min-h-[44px] py-2"
                  ariaLabel="Call Centre, Alabama office at (256) 927-6287"
                >
                  <Phone className="h-5 w-5" />
                  <span>(256) 927-6287 - Centre</span>
                </TrackedPhone>
                <TrackedPhone
                  phone="(706) 784-6511"
                  phoneRaw="7067846511"
                  location="Rome, GA"
                  office="rome"
                  pageType="header-mobile"
                  pageUrl={location.pathname}
                  className="flex items-center gap-2 text-base text-primary min-h-[44px] py-2"
                  ariaLabel="Call Rome, Georgia office at (706) 784-6511"
                >
                  <Phone className="h-5 w-5" />
                  <span>(706) 784-6511 - Rome</span>
                </TrackedPhone>
              </div>
              <Link to="/#quote-form" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-accent text-white hover:bg-accent/90 min-h-[48px] px-4" aria-label="Get your free insurance quote">
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