import { Button } from "@/components/ui/button";
import { Shield, Award, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Licensed in AL & GA</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              <span>16+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>8,000+ Policies</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-balance">
            <span className="block text-foreground">Alabama & Georgia's</span>
            <span className="block text-primary">Trusted Insurance Partner</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
            From Centre to Rome, we make insurance simple. Get quotes online, talk to real people, and keep more money in your pocket with bundled policies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="btn-primary text-lg px-8 py-6 h-auto">
              Get Your Free Quote
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto border-2">
              Call Us Now
            </Button>
          </div>

          {/* Office Info Quick Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8 text-sm">
            <div className="space-y-1">
              <p className="font-semibold text-foreground">Centre, AL Office</p>
              <p className="text-muted-foreground">(256) 927-6287</p>
            </div>
            <div className="hidden sm:block w-px bg-border"></div>
            <div className="space-y-1">
              <p className="font-semibold text-foreground">Rome, GA Office</p>
              <p className="text-muted-foreground">(706) 784-6511</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};
