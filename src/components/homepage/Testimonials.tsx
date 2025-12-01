import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/shared/SectionHeading";

const testimonials = [
  {
    name: "Steve Smith",
    location: "Centre, AL",
    rating: 5,
    text: "Customer service at Cody Coffey's Centre office is amazing, a lost art, a total delight. Give them 1000 out of 100. Friendly, knowledgeable. So grateful to have found them when moving to a new town."
  },
  {
    name: "Teresa Gardiner",
    location: "Centre, AL",
    rating: 5,
    text: "Lexi was very patient and helpful when I stopped by yesterday to ask multiple questions. She is truly an asset to your office!"
  },
  {
    name: "Ricky Salas",
    location: "Rome, GA",
    rating: 5,
    text: "I was with this agency for several years and had nothing but positive experiences with Cody and the other agents. When I had to move out of state, Kathy made it incredibly easy to end my Georgia policy and settle things up. I can't recommend them enough."
  },
  {
    name: "Marcus Thompson",
    location: "Birmingham, AL",
    rating: 5,
    text: "The team made switching insurance painless. Got better coverage and saved money. Should have done this years ago."
  },
  {
    name: "Patricia Coleman",
    location: "Cartersville, GA",
    rating: 5,
    text: "Finally, an insurance agency that answers the phone. Real people, real help, real fast."
  }
];

export const Testimonials = () => {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <SectionHeading centered>What Our Customers Say</SectionHeading>
          <p className="text-lg text-muted-foreground text-balance">
            Don't take our word for it — hear from families who made the switch.
          </p>
        </div>

        {/* Featured Hero Quote - Steve Smith */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="relative border-2 shadow-2xl rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 hover:scale-105 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300 ease-in-out">
            <CardContent className="pt-12 pb-12 px-8 md:px-12 text-center">
              {/* Large Quote Icon */}
              <Quote className="h-16 w-16 text-primary/20 mb-6 mx-auto" />
              
              {/* Featured Testimonial Text */}
              <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed font-medium">
                "Customer service at Cody Coffey's Centre office is amazing, a lost art, a total delight. Give them 1000 out of 100. Friendly, knowledgeable. So grateful to have found them when moving to a new town."
              </p>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              {/* Author */}
              <div className="pt-4">
                <p className="font-bold text-lg text-foreground">Steve Smith</p>
                <p className="text-muted-foreground">Centre, AL</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Supporting Testimonials Grid - 4 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.slice(1, 5).map((testimonial, index) => (
            <Card key={index + 1} className="relative border rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300 ease-in-out h-full">
              <CardContent className="pt-6 h-full flex flex-col">
                {/* Quote Icon */}
                <Quote className="h-6 w-6 text-primary/20 mb-3" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-base text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Flexible Spacer - pushes author to bottom */}
                <div className="flex-grow"></div>
                
                {/* Author - anchored to bottom */}
                <div className="border-t pt-3 mt-4">
                  <p className="font-semibold text-base text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-muted-foreground">
            Join thousands of satisfied customers across Alabama and Georgia
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              asChild
            >
              <Link to="/contact">Get Your Free Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
