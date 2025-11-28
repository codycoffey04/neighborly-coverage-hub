import { Button } from "@/components/ui/button";
import { Shield, Award, MapPin, Star } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <section 
      className="relative min-h-[85vh] flex items-center overflow-hidden"
      style={{ 
        backgroundImage: `url(${heroBackground})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      {/* Subtle light overlay */}
      <div className="absolute inset-0 bg-white/5" />
      
      {/* Subtle bottom gradient for slight contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
      
      {/* Content Centered */}
      <div className="relative z-10 container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* Glassmorphism Content Card */}
          <div className="bg-white/85 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 space-y-6 animate-fade-in"
               style={{ animationDuration: '0.8s', animationDelay: '0.3s', animationFillMode: 'both' }}>
            
            {/* Trust Indicators Inside Card */}
            <div className="flex flex-wrap justify-center gap-3 text-xs mb-4">
              <div className="flex items-center gap-1.5 text-primary">
                <Shield className="h-3.5 w-3.5" />
                <span className="font-medium">Licensed in AL & GA</span>
              </div>
              <div className="flex items-center gap-1.5 text-primary">
                <Award className="h-3.5 w-3.5" />
                <span className="font-medium">16+ Years Experience</span>
              </div>
              <div className="flex items-center gap-1.5 text-primary">
                <MapPin className="h-3.5 w-3.5" />
                <span className="font-medium">8,000+ Policies</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-balance text-center">
              <span className="block text-primary font-semibold tracking-tight text-2xl md:text-3xl">Alabama & Georgia's</span>
              <span className="block text-primary font-extrabold tracking-tight text-4xl md:text-6xl lg:text-7xl mt-2">Trusted Insurance Partner</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-700 text-balance text-center leading-relaxed max-w-3xl mx-auto">
              From Centre to Rome, we make insurance simple. Get quotes online, talk to real people, and keep more money in your pocket with bundled policies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg px-10 py-7 h-auto font-bold shadow-lg hover:scale-105 transition-all duration-300">
                <a href="/contact">Get Your Free Quote</a>
              </Button>
              <Button asChild size="lg" className="border-2 border-primary text-primary bg-white hover:bg-primary hover:text-white text-lg px-10 py-7 h-auto font-bold shadow-lg hover:scale-105 transition-all duration-300">
                <a href="tel:+12569276287" aria-label="Call Centre, Alabama office at (256) 927-6287">Call Us Now</a>
              </Button>
            </div>

            {/* Office Info */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 text-sm justify-center border-t border-gray-200 mt-6 pt-6">
              <div className="text-center">
                <p className="font-semibold text-primary">Centre, AL Office</p>
                <a href="tel:+12569276287" aria-label="Call Centre, Alabama office at (256) 927-6287" className="text-gray-700 font-medium text-base hover:text-primary transition-colors">
                  (256) 927-6287
                </a>
              </div>
              <div className="hidden sm:block w-px bg-gray-300 mx-2"></div>
              <div className="text-center">
                <p className="font-semibold text-primary">Rome, GA Office</p>
                <a href="tel:+17067846511" aria-label="Call Rome, Georgia office at (706) 784-6511" className="text-gray-700 font-medium text-base hover:text-primary transition-colors">
                  (706) 784-6511
                </a>
              </div>
            </div>
          </div>
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
