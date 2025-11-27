import { Button } from "@/components/ui/button";
import { Shield, Award, MapPin, Star } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <section 
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
      style={{ 
        backgroundImage: `url(${heroBackground})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      {/* Sophisticated gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-primary/65 to-primary/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
      
      {/* Centered Floating Navy Card with Glassmorphism */}
      <div className="relative z-10 container-custom py-16">
        <div className="bg-primary/95 backdrop-blur-md rounded-2xl shadow-2xl max-w-3xl mx-auto p-10 md:p-16 space-y-8 border border-white/10 animate-fade-in"
             style={{ animationDuration: '0.8s', animationDelay: '0.1s', animationFillMode: 'both' }}>
          {/* Trust Indicators with Staggered Animation */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/90 animate-fade-in"
               style={{ animationDuration: '0.6s', animationDelay: '0.3s', animationFillMode: 'both' }}>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Shield className="h-4 w-4 text-white" />
              <span>Licensed in AL & GA</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Award className="h-4 w-4 text-white" />
              <span>16+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <MapPin className="h-4 w-4 text-white" />
              <span>8,000+ Policies</span>
            </div>
          </div>

          {/* Main Headline with Enhanced Typography */}
          <h1 className="text-balance text-center animate-fade-in"
              style={{ 
                animationDuration: '0.8s', 
                animationDelay: '0.5s', 
                animationFillMode: 'both',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}>
            <span className="block text-white font-semibold tracking-tight">Alabama & Georgia's</span>
            <span className="block text-white font-extrabold tracking-tight">Trusted Insurance Partner</span>
          </h1>

          {/* Subheadline with Animation */}
          <p className="text-xl md:text-2xl text-white/95 text-balance text-center leading-relaxed animate-fade-in"
             style={{ animationDuration: '0.8s', animationDelay: '0.7s', animationFillMode: 'both' }}>
            From Centre to Rome, we make insurance simple. Get quotes online, talk to real people, and keep more money in your pocket with bundled policies.
          </p>

          {/* CTA Buttons with Enhanced Hover Effects */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center animate-fade-in"
               style={{ animationDuration: '0.8s', animationDelay: '0.9s', animationFillMode: 'both' }}>
            <Button size="lg" className="bg-accent text-white hover:bg-accent-light text-lg px-8 py-6 h-auto font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:ring-4 hover:ring-accent/30">
              Get Your Free Quote
            </Button>
            <Button asChild size="lg" className="bg-white/10 backdrop-blur-sm border-2 border-white/80 text-white hover:bg-white hover:text-primary text-lg px-8 py-6 h-auto font-semibold transition-all duration-300 hover:scale-105">
              <a href="tel:2569276287">Call Us Now</a>
            </Button>
          </div>

          {/* Office Info Quick Links with Styling */}
          <div className="flex flex-col sm:flex-row gap-6 pt-8 text-sm text-white/95 justify-center animate-fade-in"
               style={{ animationDuration: '0.8s', animationDelay: '1.1s', animationFillMode: 'both' }}>
            <div className="space-y-1 text-center sm:text-left bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
              <p className="font-semibold text-white tracking-wide">Centre, AL Office</p>
              <p className="text-white/90 font-medium">(256) 927-6287</p>
            </div>
            <div className="hidden sm:block w-px bg-white/30"></div>
            <div className="space-y-1 text-center sm:text-left bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
              <p className="font-semibold text-white tracking-wide">Rome, GA Office</p>
              <p className="text-white/90 font-medium">(706) 784-6511</p>
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
