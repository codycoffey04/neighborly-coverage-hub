import { MapPin, Phone, Clock, Mail, Facebook } from "lucide-react";

const services = [
  { name: "Auto Insurance", href: "/services/auto-insurance" },
  { name: "Home Insurance", href: "/services/home-insurance" },
  { name: "Renters Insurance", href: "/services/renters-insurance" },
  { name: "Condo Insurance", href: "/services/condo-insurance" },
  { name: "Life Insurance", href: "/services/life-insurance" },
  { name: "Motorcycle Insurance", href: "/services/motorcycle-insurance" }
];

const company = [
  { name: "About", href: "/about" },
  { name: "Our Team", href: "/about#team" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" }
];

const resources = [
  { name: "Get a Quote", href: "/contact" },
  { name: "Reviews", href: "/reviews" },
  { name: "Learn", href: "/learn" }
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
          {/* Coffey Agencies Inc. */}
          <div className="lg:col-span-1 space-y-4">
            <h4 className="font-bold text-lg mb-4">Coffey Agencies Inc.</h4>
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

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((item, index) => (
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
                    <span>1913 W Main Street<br />Centre, AL 35960</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <a href="tel:+12569276287" className="hover:text-primary transition-colors" aria-label="Call Centre office at (256) 927-6287">
                      (256) 927-6287
                    </a>
                  </p>
                  <p className="flex items-start gap-2">
                    <Clock className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>Monday–Friday, 8:00 AM – 5:00 PM</span>
                  </p>
                </div>
              </div>

              {/* Rome Office */}
              <div className="space-y-2">
                <p className="font-semibold text-foreground">Rome, GA</p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>1703 Turner McCall Blvd SE<br />Rome, GA 30161</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <a href="tel:+17067846511" className="hover:text-primary transition-colors" aria-label="Call Rome office at (706) 784-6511">
                      (706) 784-6511
                    </a>
                  </p>
                  <p className="flex items-start gap-2">
                    <Clock className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>Monday–Friday, 8:30 AM – 4:30 PM</span>
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
              © {new Date().getFullYear()} Coffey Agencies Inc. All rights reserved. Coffey Agencies Inc. is an authorized, independently owned insurance agency. Licensed in Alabama (#416438) and Georgia (#149612).
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