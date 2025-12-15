import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { TrackedPhone } from "@/components/shared/TrackedPhone";
import heroBackground from "@/assets/hero-background.jpg";
import heroBackgroundWebP from "@/assets/hero-background.webp";
import heroBackgroundMobileWebP from "@/assets/hero-background-mobile.webp";

export const Hero = () => {
  const location = useLocation();
  return (
    <>
      {/* Preload hero images for LCP discovery - critical for performance */}
      <Helmet>
        <link rel="preload" as="image" href={heroBackgroundMobileWebP} media="(max-width: 768px)" fetchPriority="high" />
        <link rel="preload" as="image" href={heroBackgroundWebP} media="(min-width: 769px)" fetchPriority="high" />
      </Helmet>
    <section 
      role="banner"
      aria-label="Coffey Agencies homepage hero"
      className="relative min-h-[45vh] md:min-h-[55vh] flex items-end pb-12 md:pb-16 overflow-hidden"
    >
      <picture>
        {/* Mobile: smaller image for faster LCP */}
        <source 
          media="(max-width: 768px)" 
          srcSet={heroBackgroundMobileWebP}
          type="image/webp"
        />
        {/* Desktop: larger image */}
        <source 
          media="(min-width: 769px)" 
          srcSet={heroBackgroundWebP}
          type="image/webp"
        />
        {/* Fallback for browsers that don't support WebP */}
        <img 
          src={heroBackground} 
          alt="Alabama and Georgia families reviewing insurance options with Coffey Agencies" 
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 45%' }}
          decoding="async"
          loading="eager"
        />
      </picture>
      {/* Subtle dark gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      
      {/* Content Positioned at Bottom */}
      <div className="relative z-10 container-custom pt-8 pb-0">
        <div className="max-w-4xl mx-auto space-y-5 animate-fade-in"
             style={{ animationDuration: '0.8s', animationDelay: '0.3s', animationFillMode: 'both' }}>
          
          {/* Main Headline */}
          <h1 className="text-balance text-center">
            <span className="block text-white font-semibold tracking-tight text-[clamp(1.25rem,3vw,1.875rem)] drop-shadow-lg">Alabama & Georgia's</span>
            <span className="block text-white font-[800] tracking-tight text-[clamp(2.2rem,5vw,3.5rem)] mt-2 drop-shadow-lg" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.25)' }}>Smarter Way to Insure</span>
          </h1>

          {/* Subheadline */}
          <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-white/90 text-balance text-center leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            Bundle home + auto. Save up to 25%. Work with a team that answers the phone and knows your name.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center items-center">
            <Button asChild size="lg" className="bg-accent text-white hover:bg-accent/90 text-lg px-10 py-7 min-h-[48px] font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-[0_0_12px_rgba(34,197,94,0.55)] ring-2 ring-white/80 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 group">
              <Link to="/#quote-form">
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 border-2 border-primary/20 text-base px-6 py-4 sm:py-6 h-auto font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <TrackedPhone
                phone="(256) 927-6287"
                phoneRaw="2569276287"
                location="Centre, AL"
                office="centre"
                pageType="hero"
                pageUrl={location.pathname}
                ariaLabel="Call Centre, Alabama office at (256) 927-6287"
              >
                <Phone className="mr-2 h-4 w-4" />
                Centre: (256) 927-6287
              </TrackedPhone>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 border-2 border-primary/20 text-base px-6 py-4 sm:py-6 h-auto font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <TrackedPhone
                phone="(706) 784-6511"
                phoneRaw="7067846511"
                location="Rome, GA"
                office="rome"
                pageType="hero"
                pageUrl={location.pathname}
                ariaLabel="Call Rome, Georgia office at (706) 784-6511"
              >
                <Phone className="mr-2 h-4 w-4" />
                Rome: (706) 784-6511
              </TrackedPhone>
            </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
