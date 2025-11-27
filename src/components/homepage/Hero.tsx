import { Button } from "@/components/ui/button";
import { Shield, Award, MapPin, Star } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh]">
      <div className="grid lg:grid-cols-2 min-h-[85vh]">
        {/* Left: Content Side with Navy Background */}
        <div className="bg-primary flex items-center py-16 lg:py-0">
          <div className="container-custom w-full">
            <div className="max-w-xl space-y-8">
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-white" />
                  <span>Licensed in AL & GA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-white" />
                  <span>16+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-white" />
                  <span>8,000+ Policies</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-balance">
                <span className="block text-white">Alabama & Georgia's</span>
                <span className="block text-white font-bold">Trusted Insurance Partner</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-white/90 text-balance">
                From Centre to Rome, we make insurance simple. Get quotes online, talk to real people, and keep more money in your pocket with bundled policies.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 text-lg px-8 py-6 h-auto">
                  Get Your Free Quote
                </Button>
                <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-6 h-auto">
                  <a href="tel:2569276287">Call Us Now</a>
                </Button>
              </div>

              {/* Office Info Quick Links */}
              <div className="flex flex-col sm:flex-row gap-6 pt-8 text-sm text-white/90">
                <div className="space-y-1">
                  <p className="font-semibold text-white">Centre, AL Office</p>
                  <p className="text-white/80">(256) 927-6287</p>
                </div>
                <div className="hidden sm:block w-px bg-white/20"></div>
                <div className="space-y-1">
                  <p className="font-semibold text-white">Rome, GA Office</p>
                  <p className="text-white/80">(706) 784-6511</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image Side */}
        <div 
          className="relative min-h-[40vh] lg:min-h-[85vh]"
          style={{ 
            backgroundImage: `url(${heroBackground})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        >
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/20" />
        </div>
      </div>

      {/* Trust Stats Bar at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-primary/90 backdrop-blur-sm border-t border-white/10">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 py-4 text-white text-sm">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span className="font-semibold">16+ Years</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="font-semibold">8,000+ Policies</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-semibold">4.7★ Centre</span>
              <span className="text-white/70 text-xs">(116 reviews)</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-semibold">4.6★ Rome</span>
              <span className="text-white/70 text-xs">(90 reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
