import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { TrackedPhone } from "@/components/shared/TrackedPhone";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const BottomCTA = () => {
  const location = useLocation();
  return (
    <section className="bg-gradient-to-br from-primary to-primary-light py-16">
      <div className="container-custom text-center">
        <SectionHeading variant="white" centered className="mb-4">
          Ready to Save on Insurance?
        </SectionHeading>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Talk to a local agent today — no pressure, just answers.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button asChild size="lg" className="bg-accent text-white hover:bg-accent/90 text-lg px-8 py-6 h-auto font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <Link to="/contact">
              Get Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 border-2 border-primary/20 text-base px-6 py-6 h-auto font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <TrackedPhone
                phone="(256) 927-6287"
                phoneRaw="2569276287"
                location="Centre, AL"
                office="centre"
                pageType="bottom-cta"
                pageUrl={location.pathname}
                ariaLabel="Call Centre, Alabama office at (256) 927-6287"
              >
                <Phone className="mr-2 h-4 w-4" />
                Centre: (256) 927-6287
              </TrackedPhone>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 border-2 border-primary/20 text-base px-6 py-6 h-auto font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <TrackedPhone
                phone="(706) 784-6511"
                phoneRaw="7067846511"
                location="Rome, GA"
                office="rome"
                pageType="bottom-cta"
                pageUrl={location.pathname}
                ariaLabel="Call Rome, Georgia office at (706) 784-6511"
              >
                <Phone className="mr-2 h-4 w-4" />
                Rome: (706) 784-6511
              </TrackedPhone>
            </Button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-white text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>Licensed in AL & GA</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20"></div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>Hablamos Español</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20"></div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>Family Owned</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20"></div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>100+ Years Combined Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};
