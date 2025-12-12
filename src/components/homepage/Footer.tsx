import { MapPin, Phone, Clock, Mail, Facebook } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { TrackedPhone } from "@/components/shared/TrackedPhone";

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
  { name: "Refer a Friend", href: "/refer" },
  { name: "Reviews", href: "/reviews" },
  { name: "Learn", href: "/learn" },
  { name: "Claims Help", href: "/claims" },
  { name: "Centre, AL Resources", href: "/resources/centre-al" },
  { name: "Rome, GA Resources", href: "/resources/rome-ga" }
];

const legal = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" }
];

export const Footer = () => {
  const location = useLocation();
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container-custom py-10 md:py-12">
        {/* Columns Row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Coffey Agencies Inc.</h4>
            <ul className="space-y-1">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-block py-2 min-h-[44px]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-sm text-muted-foreground mb-3">Follow Us</p>
              <a 
                href="https://www.facebook.com/codycoffeyagency"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Coffey Agencies on Facebook"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-white group-hover:bg-primary/90 group-hover:scale-110 transition-all">
                  <Facebook className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">Facebook</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-1">
              {services.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-block py-2 min-h-[44px]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-1">
              {resources.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-block py-2 min-h-[44px]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Offices</h4>
            <div className="space-y-4">
              {/* Centre Office */}
              <div className="space-y-2">
                <p className="font-semibold text-foreground">Centre, AL</p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>1913 W Main Street<br />Centre, AL 35960</span>
                  </p>
                  <TrackedPhone
                    phone="(256) 927-6287"
                    phoneRaw="2569276287"
                    location="Centre, AL"
                    office="centre"
                    pageType="footer"
                    pageUrl={location.pathname}
                    className="flex items-center gap-2 hover:text-primary transition-colors min-h-[44px] py-1"
                    ariaLabel="Call Centre office at (256) 927-6287"
                  >
                    <Phone className="h-4 w-4" />
                    <span>(256) 927-6287</span>
                  </TrackedPhone>
                  <p className="flex items-start gap-2">
                    <Clock className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>Monday–Friday, 8:00 AM – 5:00 PM</span>
                  </p>
                </div>
              </div>

              {/* Rome Office */}
              <div className="space-y-2 border-t border-gray-200 pt-4 mt-4">
                <p className="font-semibold text-foreground">Rome, GA</p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>1703 Turner McCall Blvd SE<br />Rome, GA 30161</span>
                  </p>
                  <TrackedPhone
                    phone="(706) 784-6511"
                    phoneRaw="7067846511"
                    location="Rome, GA"
                    office="rome"
                    pageType="footer"
                    pageUrl={location.pathname}
                    className="flex items-center gap-2 hover:text-primary transition-colors min-h-[44px] py-1"
                    ariaLabel="Call Rome office at (706) 784-6511"
                  >
                    <Phone className="h-4 w-4" />
                    <span>(706) 784-6511</span>
                  </TrackedPhone>
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
        <div className="pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Coffey Agencies Inc. All rights reserved. Coffey Agencies Inc. is an authorized, independently owned insurance agency. Licensed in Alabama (#416438) and Georgia (#149612).
            </p>
            <div className="flex gap-6 text-sm">
              {legal.map((item, index) => (
                <Link 
                  key={index}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};