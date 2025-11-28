import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const MobileCTABar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-slide-in-up pb-safe">
      <div className="bg-primary shadow-lg border-t border-primary-foreground/10">
        <div className="container-custom py-3">
          <div className="flex items-center justify-between gap-2">
            {/* Get Quote Button */}
            <Link to="/contact" className="flex-1">
              <Button 
                size="sm" 
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
              >
                Get Quote
              </Button>
            </Link>

            {/* Phone Numbers */}
            <div className="flex gap-2">
              <a
                href="tel:+12569276287"
                aria-label="Call Centre, Alabama office at (256) 927-6287"
                className="flex items-center gap-1.5 px-3 py-2 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Phone className="h-4 w-4 text-primary-foreground" />
                <span className="text-xs font-medium text-primary-foreground">AL</span>
              </a>
              <a
                href="tel:+17067846511"
                aria-label="Call Rome, Georgia office at (706) 784-6511"
                className="flex items-center gap-1.5 px-3 py-2 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Phone className="h-4 w-4 text-primary-foreground" />
                <span className="text-xs font-medium text-primary-foreground">GA</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
