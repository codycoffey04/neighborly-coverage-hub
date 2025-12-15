import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { TrackedPhone } from "@/components/shared/TrackedPhone";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const BottomCTA = () => {
  const location = useLocation();
  return (
    <section className="bg-gray-200 py-16">
      <div className="container-custom text-center">
        <SectionHeading variant="default" centered className="mb-4">
          Ready to Save on Insurance?
        </SectionHeading>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Talk to a local agent today — no pressure, just answers.
        </p>
        
        {/* CTA Button */}
        <div className="flex flex-col items-center mb-6">
          <Button asChild size="lg" className="bg-accent text-white hover:bg-accent/90 text-lg px-8 py-6 min-h-[48px] h-auto font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group mb-4">
            <Link to="/#quote-form">
              Get Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          {/* Phone Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <TrackedPhone
              phone="(256) 927-6287"
              phoneRaw="2569276287"
              location="Centre, AL"
              office="centre"
              pageType="bottom-cta"
              pageUrl={location.pathname}
              className="text-primary hover:text-primary/80 underline"
              ariaLabel="Call Centre, Alabama office at (256) 927-6287"
            >
              Centre: (256) 927-6287
            </TrackedPhone>
            <span className="text-primary/50">|</span>
            <TrackedPhone
              phone="(706) 784-6511"
              phoneRaw="7067846511"
              location="Rome, GA"
              office="rome"
              pageType="bottom-cta"
              pageUrl={location.pathname}
              className="text-primary hover:text-primary/80 underline"
              ariaLabel="Call Rome, Georgia office at (706) 784-6511"
            >
              Rome: (706) 784-6511
            </TrackedPhone>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-primary text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>Licensed in AL & GA</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-primary/20"></div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>Hablamos Español</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-primary/20"></div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>Family Owned</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-primary/20"></div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>100+ Years Combined Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};
