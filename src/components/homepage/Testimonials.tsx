import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Birmingham, AL",
    rating: 5,
    text: "Coffey Agencies made switching my auto and home insurance so easy. They saved me money and explained everything in plain English. Highly recommend!"
  },
  {
    name: "David Thompson",
    location: "Rome, GA",
    rating: 5,
    text: "I've been with Coffey for over 10 years. Their team is always responsive and genuinely cares about finding the best coverage for my family."
  },
  {
    name: "Maria Rodriguez",
    location: "Centre, AL",
    rating: 5,
    text: "After a minor accident, Coffey Agencies walked me through the claims process step by step. They made a stressful situation so much easier."
  },
  {
    name: "James Patterson",
    location: "Atlanta, GA",
    rating: 5,
    text: "Great local agency with modern convenience. I can get quotes online but still have real people to talk to when I need them."
  },
  {
    name: "Emily Chen",
    location: "Montgomery, AL",
    rating: 5,
    text: "As a first-time homeowner, I had so many questions. The team at Coffey was patient, knowledgeable, and helped me get the perfect policy."
  },
  {
    name: "Robert Jackson",
    location: "Columbus, GA",
    rating: 5,
    text: "I've worked with several insurance agencies over the years, but Coffey is by far the best. Fair prices, excellent service, and real expertise."
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
            Don't just take our word for it—hear from real customers across Alabama and Georgia who trust Coffey Agencies.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
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

        {/* Google Reviews Link */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-muted-foreground">
            Join thousands of satisfied customers across Alabama and Georgia
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-secondary px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
