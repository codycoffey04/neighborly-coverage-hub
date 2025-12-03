import { useState, useCallback, useEffect, useRef } from "react";
import { Star, Quote, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext,
  type CarouselApi 
} from "@/components/ui/carousel";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn } from "@/lib/utils";

const allTestimonials = [
  {
    name: "Steve Smith",
    location: "Centre, AL",
    text: "Customer service at Cody Coffey's Centre office is amazing, a lost art, a total delight. Give them 1000 out of 100. Friendly, knowledgeable. So grateful to have found them when moving to a new town."
  },
  {
    name: "Teresa Gardiner",
    location: "Centre, AL",
    text: "Lexi was very patient and helpful when I stopped by yesterday to ask multiple questions. She is truly an asset to your office!"
  },
  {
    name: "Ricky Salas",
    location: "Rome, GA",
    text: "I was with this agency for several years and had nothing but positive experiences with Cody and the other agents. When I had to move out of state, Kathy made it incredibly easy to end my Georgia policy and settle things up. I can't recommend them enough."
  },
  {
    name: "Marcus Thompson",
    location: "Birmingham, AL",
    text: "The team made switching insurance painless. Got better coverage and saved money. Should have done this years ago."
  },
  {
    name: "Patricia Coleman",
    location: "Cartersville, GA",
    text: "Finally, an insurance agency that answers the phone. Real people, real help, real fast."
  },
  {
    name: "Thomas K.",
    location: "Centre, AL",
    text: "Crystal and Kimberly set up our home and auto plan at a very respectable price. If I could give 10 stars I would."
  },
  {
    name: "Kerry G.",
    location: "Centre, AL",
    text: "Recently switched all my insurance with Cody. Customer service is impressive and rates are lower. Transition was painless."
  },
  {
    name: "Tracey D.",
    location: "Rome, GA",
    text: "Been with the Coffey Agency almost 10 years; they respond quickly and help get the best price for coverage."
  },
  {
    name: "Karen P.",
    location: "Rome, GA",
    text: "I've been a customer since 1989. Every issue, question or claim has always been cared for quickly, friendly and professionally."
  },
  {
    name: "Barbara R.",
    location: "Rome, GA",
    text: "The office staff were very friendly and helpful. Also the discounts were great!"
  }
];

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!api) return;
    
    setCurrent(api.selectedScrollSnap());
    
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-play functionality
  useEffect(() => {
    if (!api || isPaused) return;
    
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    
    autoplayRef.current = setInterval(() => {
      api.scrollNext();
    }, 5000);
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [api, isPaused]);

  // Cleanup resume timeout on unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  const handleUserInteraction = useCallback(() => {
    setIsPaused(true);
    
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  }, []);

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
    handleUserInteraction();
  }, [api, handleUserInteraction]);

  return (
    <section className="py-16 md:py-24 bg-muted/30" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <SectionHeading centered className="mb-4">
            <span id="testimonials-heading">What Do Our Customers Say?</span>
          </SectionHeading>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — hear from the families and businesses we've helped protect.
          </p>
        </div>

        {/* Overall 4.7 Star Rating */}
        <div className="flex items-center gap-2 justify-center mb-10">
          <div className="flex gap-0.5">
            {/* 4 full stars */}
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            ))}
            {/* Partial star (70% for 4.7) */}
            <div className="relative">
              <Star className="h-5 w-5 text-yellow-400" />
              <div className="absolute inset-0 overflow-hidden" style={{ width: '70%' }}>
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              </div>
            </div>
          </div>
          <span className="text-sm font-medium text-muted-foreground">4.7 · 200+ Reviews</span>
        </div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto px-12 md:px-16">
          <Carousel 
            setApi={setApi}
            opts={{ loop: true }}
            className="relative"
          >
            <CarouselContent>
              {allTestimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-0 shadow-lg rounded-2xl bg-card">
                    <CardContent className="pt-10 pb-10 px-8 md:px-12 text-center">
                      {/* Quote icon */}
                      <Quote className="h-12 w-12 text-primary/15 mx-auto mb-6" />
                      
                      {/* Review text */}
                      <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium mb-8">
                        "{testimonial.text}"
                      </p>
                      
                      {/* 5-star rating for individual review */}
                      <div className="flex gap-1 justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      
                      {/* Author info */}
                      <p className="font-bold text-lg text-foreground">{testimonial.name}</p>
                      <p className="text-muted-foreground">{testimonial.location}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation arrows */}
            <CarouselPrevious 
              onClick={handleUserInteraction}
              className="absolute -left-10 md:-left-14 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-card border-2 border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-md transition-all"
            />
            <CarouselNext 
              onClick={handleUserInteraction}
              className="absolute -right-10 md:-right-14 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-card border-2 border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-md transition-all"
            />
          </Carousel>
          
          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {allTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  current === index 
                    ? "bg-primary w-6" 
                    : "bg-primary/30 w-2 hover:bg-primary/50"
                )}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews Link */}
        <div className="mt-10 text-center">
          <a 
            href="https://www.google.com/search?q=coffey+agencies+centre+al+reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Read more reviews on Google
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
