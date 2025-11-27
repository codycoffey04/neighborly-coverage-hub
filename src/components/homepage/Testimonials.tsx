import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Steve Smith",
    location: "Centre, AL",
    rating: 5,
    text: "Customer service at Cody Coffey's Centre office is amazing, a lost art, a total delight. Give them 1000 out of 100. Friendly, knowledgeable. So grateful to have found them when moving to a new town."
  },
  {
    name: "Teresa Gardiner",
    location: "Google Review",
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
          <h2 className="text-balance">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Don't take our word for it — hear from families who made the switch.
          </p>
        </div>

        {/* Testimonials Grid - 5 cards with 3-2 layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* First 3 testimonials in top row */}
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={index} className="relative border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom 2 testimonials centered */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
          {testimonials.slice(3, 5).map((testimonial, index) => (
            <Card key={index + 3} className="relative border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
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
            <a href="/reviews" className="btn-secondary px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
              Read All Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
