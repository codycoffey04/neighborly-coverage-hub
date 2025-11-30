import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <section 
      role="banner"
      aria-label="Coffey Agencies homepage hero"
      className="relative min-h-[70vh] flex items-end pb-16 md:pb-20 overflow-hidden"
      style={{ 
        backgroundImage: `url(${heroBackground})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center 35%' 
      }}
    >
      {/* Subtle dark gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      
      {/* Content Positioned at Bottom */}
      <div className="relative z-10 container-custom pt-8 pb-0">
        <div className="max-w-4xl mx-auto space-y-5 animate-fade-in"
             style={{ animationDuration: '0.8s', animationDelay: '0.3s', animationFillMode: 'both' }}>
          
          {/* Main Headline */}
          <h1 className="text-balance text-center">
            <span className="block text-white font-semibold tracking-tight text-[clamp(1.25rem,3vw,1.875rem)] drop-shadow-lg">Alabama & Georgia's</span>
            <span className="block text-white font-[800] tracking-tight text-[clamp(2.2rem,5vw,3.5rem)] mt-2 drop-shadow-lg" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.25)' }}>Trusted Insurance Partner</span>
          </h1>

          {/* Subheadline */}
          <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-white/90 text-balance text-center leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            From Centre to Rome, we make insurance simple. Get quotes online, talk to real people, and keep more money in your pocket with bundled policies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center items-center">
            <Button asChild size="lg" className="bg-accent text-white hover:bg-accent/90 text-lg px-12 py-8 h-auto font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-[0_0_12px_rgba(34,197,94,0.55)] ring-1 ring-white/30 hover:-translate-y-1 transition-all duration-300 group">
              <Link to="/contact">
                Get a Free Quote in 60 Seconds
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 border-2 border-primary/20 text-base px-6 py-6 h-auto font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <a href="tel:+12569276287" aria-label="Call Centre, Alabama office at (256) 927-6287">
                  <Phone className="mr-2 h-4 w-4" />
                  Centre: (256) 927-6287
                </a>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 border-2 border-primary/20 text-base px-6 py-6 h-auto font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <a href="tel:+17067846511" aria-label="Call Rome, Georgia office at (706) 784-6511">
                  <Phone className="mr-2 h-4 w-4" />
                  Rome: (706) 784-6511
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
