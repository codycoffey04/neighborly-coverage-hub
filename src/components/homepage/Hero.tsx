import { Button } from "@/components/ui/button";
import { Shield, Star, MessageCircle, Heart } from "lucide-react";
import { Link } from "react-router-dom";
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
      {/* Subtle dark gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      
      {/* Content Centered */}
      <div className="relative z-10 container-custom py-16">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in"
             style={{ animationDuration: '0.8s', animationDelay: '0.3s', animationFillMode: 'both' }}>
          
          {/* Main Headline */}
          <h1 className="text-balance text-center">
            <span className="block text-white font-semibold tracking-tight text-2xl md:text-3xl drop-shadow-lg">Alabama & Georgia's</span>
            <span className="block text-white font-extrabold tracking-tight text-4xl md:text-6xl lg:text-7xl xl:text-8xl mt-2 drop-shadow-lg">Trusted Insurance Partner</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 text-balance text-center leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            From Centre to Rome, we make insurance simple. Get quotes online, talk to real people, and keep more money in your pocket with bundled policies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg px-10 py-7 h-auto font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              <Link to="/contact">Get Your Free Quote</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 text-lg px-10 py-7 h-auto font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              <a href="tel:+12569276287" aria-label="Call Centre, Alabama office at (256) 927-6287">Call Us Now</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Trust Stats Bar at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-primary/90 backdrop-blur-sm border-t border-white/10">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 py-4 text-white text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="font-semibold">Licensed in AL & GA</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span className="font-semibold">Hablamos Español</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              <span className="font-semibold">Family Owned</span>
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
