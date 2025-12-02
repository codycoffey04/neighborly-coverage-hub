import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { TrackedPhone } from "@/components/shared/TrackedPhone";

export const MobileCTABar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

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
                size="default" 
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold min-h-[44px]"
              >
                Get Quote
              </Button>
            </Link>

            {/* Phone Numbers */}
            <div className="flex gap-2">
              <TrackedPhone
                phone="(256) 927-6287"
                phoneRaw="2569276287"
                location="Centre, AL"
                office="centre"
                pageType="mobile-cta"
                pageUrl={location.pathname}
                ariaLabel="Call Centre, Alabama office at (256) 927-6287"
                className="flex items-center gap-1.5 px-3 min-h-[44px] rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Phone className="h-5 w-5 text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground">AL</span>
              </TrackedPhone>
              <TrackedPhone
                phone="(706) 784-6511"
                phoneRaw="7067846511"
                location="Rome, GA"
                office="rome"
                pageType="mobile-cta"
                pageUrl={location.pathname}
                ariaLabel="Call Rome, Georgia office at (706) 784-6511"
                className="flex items-center gap-1.5 px-3 min-h-[44px] rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Phone className="h-5 w-5 text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground">GA</span>
              </TrackedPhone>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
