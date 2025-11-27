import { Button } from "@/components/ui/button";
import { Shield, Award, MapPin, Star } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <section 
      className="relative min-h-[85vh] flex items-end overflow-hidden"
      style={{ 
        backgroundImage: `url(${heroBackground})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      {/* Light overlay for top portion */}
      <div className="absolute inset-0 bg-primary/15" />
      
      {/* Gradient fade: transparent top → darker bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/50 to-transparent" />
      
      {/* Trust Indicators Floating at Top */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-10 flex flex-wrap justify-center gap-3 text-sm text-white animate-fade-in"
           style={{ animationDuration: '0.6s', animationDelay: '0.2s', animationFillMode: 'both' }}>
        <div className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full shadow-lg">
          <Shield className="h-4 w-4 text-white" />
          <span className="font-medium">Licensed in AL & GA</span>
        </div>
        <div className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full shadow-lg">
          <Award className="h-4 w-4 text-white" />
          <span className="font-medium">16+ Years Experience</span>
        </div>
        <div className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full shadow-lg">
          <MapPin className="h-4 w-4 text-white" />
          <span className="font-medium">8,000+ Policies</span>
        </div>
      </div>
      
      {/* Content at Bottom */}
      <div className="relative z-10 container-custom pb-32 pt-16">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Main Headline with Strong Text Shadow */}
          <h1 className="text-balance text-center animate-fade-in"
              style={{ 
                animationDuration: '0.8s', 
                animationDelay: '0.4s', 
                animationFillMode: 'both',
                textShadow: '0 4px 20px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)'
              }}>
            <span className="block text-white font-semibold tracking-tight text-2xl md:text-3xl">Alabama & Georgia's</span>
            <span className="block text-white font-extrabold tracking-tight text-4xl md:text-6xl lg:text-7xl mt-2">Trusted Insurance Partner</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white text-balance text-center leading-relaxed animate-fade-in max-w-3xl mx-auto"
             style={{ 
               animationDuration: '0.8s', 
               animationDelay: '0.6s', 
               animationFillMode: 'both',
               textShadow: '0 2px 12px rgba(0,0,0,0.5)'
             }}>
            From Centre to Rome, we make insurance simple. Get quotes online, talk to real people, and keep more money in your pocket with bundled policies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center animate-fade-in"
               style={{ animationDuration: '0.8s', animationDelay: '0.8s', animationFillMode: 'both' }}>
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg px-10 py-7 h-auto font-bold shadow-2xl hover:scale-105 transition-all duration-300">
              <a href="/contact">Get Your Free Quote</a>
            </Button>
            <Button asChild size="lg" className="bg-white/95 backdrop-blur-sm border-2 border-white text-primary hover:bg-white hover:scale-105 text-lg px-10 py-7 h-auto font-bold shadow-xl transition-all duration-300">
              <a href="tel:2569276287">Call Us Now</a>
            </Button>
          </div>

          {/* Office Info */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 text-sm text-white justify-center animate-fade-in"
               style={{ 
                 animationDuration: '0.8s', 
                 animationDelay: '1s', 
                 animationFillMode: 'both',
                 textShadow: '0 2px 8px rgba(0,0,0,0.5)'
               }}>
            <div className="text-center">
              <p className="font-semibold text-white">Centre, AL Office</p>
              <p className="text-white/95 font-medium text-base">(256) 927-6287</p>
            </div>
            <div className="hidden sm:block w-px bg-white/40 mx-2"></div>
            <div className="text-center">
              <p className="font-semibold text-white">Rome, GA Office</p>
              <p className="text-white/95 font-medium text-base">(706) 784-6511</p>
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
