import { MapPin, Phone, Clock, Mail, Facebook } from "lucide-react";

const services = [
  { name: "Auto Insurance", href: "/services/auto-insurance" },
  { name: "Home Insurance", href: "/services/home-insurance" },
  { name: "Renters Insurance", href: "/services/renters-insurance" },
  { name: "Condo Insurance", href: "/services/condo-insurance" },
  { name: "Life Insurance", href: "/services/life-insurance" }
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
  { name: "Customer Reviews", href: "/reviews" },
  { name: "Blog", href: "/blog" }
];

const legal = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" }
];

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container-custom py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-2xl font-bold text-primary">Coffey Agencies</h3>
            <p className="text-muted-foreground">
              Your trusted insurance partner serving Alabama and Georgia for over 16 years.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Locations */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Offices</h4>
            <div className="space-y-4">
              {/* Centre Office */}
              <div className="space-y-2">
                <p className="font-semibold text-foreground">Centre, AL</p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>123 Main Street<br />Centre, AL 35960</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <a href="tel:2569273105" className="hover:text-primary transition-colors">
                      (256) 927-3105
                    </a>
                  </p>
                  <p className="flex items-start gap-2">
                    <Clock className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>Mon-Fri: 8:30 AM - 5:00 PM</span>
                  </p>
                </div>
              </div>

              {/* Rome Office */}
              <div className="space-y-2">
                <p className="font-semibold text-foreground">Rome, GA</p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>456 Broad Street<br />Rome, GA 30161</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <a href="tel:7062344555" className="hover:text-primary transition-colors">
                      (706) 234-4555
                    </a>
                  </p>
                  <p className="flex items-start gap-2">
                    <Clock className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>Mon-Fri: 9:00 AM - 5:30 PM</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Coffey Agencies Inc. All rights reserved. Licensed in Alabama and Georgia.
            </p>
            <div className="flex gap-6 text-sm">
              {legal.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
