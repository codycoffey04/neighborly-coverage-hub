import { PageLayout } from "@/components/shared/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ExternalLink } from "lucide-react";

const reviewStats = {
  overall: "4.7",
  totalReviews: 206,
  breakdown: [
    { stars: 5, count: 168, percentage: 82 },
    { stars: 4, count: 24, percentage: 12 },
    { stars: 3, count: 8, percentage: 4 },
    { stars: 2, count: 4, percentage: 2 },
    { stars: 1, count: 2, percentage: 1 },
  ],
};

const featuredReviews = [
  {
    name: "Sarah Mitchell",
    location: "Centre, AL",
    rating: 5,
    date: "2 weeks ago",
    text: "Coffey Agencies has been handling my family's insurance for over 10 years. They're always responsive, explain everything clearly, and have saved us money by finding better coverage. Highly recommend!",
    office: "Centre",
  },
  {
    name: "James Patterson",
    location: "Rome, GA",
    rating: 5,
    date: "1 month ago",
    text: "After shopping around for months, I found Coffey Agencies and couldn't be happier. They took the time to understand my needs and found coverage that was both comprehensive and affordable. Great local service!",
    office: "Rome",
  },
  {
    name: "Lisa Thompson",
    location: "Gadsden, AL",
    rating: 5,
    date: "3 weeks ago",
    text: "When I had a claim, the team at Coffey walked me through every step. They made a stressful situation so much easier. This is what real customer service looks like!",
    office: "Centre",
  },
];

const allReviews = [
  {
    name: "Michael Davis",
    location: "Anniston, AL",
    rating: 5,
    date: "1 week ago",
    text: "Professional, knowledgeable, and genuinely care about their clients. They've earned my trust and business for life.",
    office: "Centre",
  },
  {
    name: "Jennifer Lee",
    location: "Cedartown, GA",
    rating: 5,
    date: "2 weeks ago",
    text: "Best insurance experience I've ever had. They found me better coverage at a lower price than my previous agent.",
    office: "Rome",
  },
  {
    name: "Robert Wilson",
    location: "Jacksonville, AL",
    rating: 5,
    date: "3 weeks ago",
    text: "Switched to Coffey Agencies last year and haven't looked back. They're always available when I need them.",
    office: "Centre",
  },
  {
    name: "Amanda Garcia",
    location: "Silver Creek, GA",
    rating: 4,
    date: "1 month ago",
    text: "Very helpful and responsive. Great local agency that knows the community well.",
    office: "Rome",
  },
  {
    name: "David Brown",
    location: "Oxford, AL",
    rating: 5,
    date: "1 month ago",
    text: "They made getting insurance for my new business so easy. Excellent guidance throughout the process.",
    office: "Centre",
  },
  {
    name: "Emily Martinez",
    location: "Lindale, GA",
    rating: 5,
    date: "2 months ago",
    text: "Honest, fair pricing and excellent customer service. What more could you ask for?",
    office: "Rome",
  },
  {
    name: "Christopher Taylor",
    location: "Piedmont, AL",
    rating: 5,
    date: "2 months ago",
    text: "Coffey Agencies goes above and beyond. They treat you like family, not just a policy number.",
    office: "Centre",
  },
  {
    name: "Rachel Anderson",
    location: "Summerville, GA",
    rating: 5,
    date: "3 months ago",
    text: "Been with them for 5 years and never had a bad experience. Reliable and trustworthy.",
    office: "Rome",
  },
  {
    name: "Kevin White",
    location: "Weaver, AL",
    rating: 4,
    date: "3 months ago",
    text: "Good service and competitive rates. They helped me bundle my policies and save money.",
    office: "Centre",
  },
];

const Reviews = () => {
  return (
    <PageLayout
      title="Customer Reviews"
      description="See what our customers have to say about their experience with Coffey Agencies."
    >
      {/* Review Stats */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-2">
                    {reviewStats.overall}
                  </div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    Based on {reviewStats.totalReviews} reviews
                  </p>
                </div>

                <div className="space-y-3">
                  {reviewStats.breakdown.map((item) => (
                    <div key={item.stars} className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground w-12">
                        {item.stars} star
                      </span>
                      <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yellow-500"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-12 text-right">
                        {item.percentage}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Featured Reviews
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredReviews.map((review, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-4">{review.text}</p>

                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                    <p className="text-xs text-muted-foreground mt-1">{review.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Reviews */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            All Reviews
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allReviews.map((review, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">{review.text}</p>

                  <div>
                    <p className="font-semibold text-foreground text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Share Your Experience
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We'd love to hear about your experience with Coffey Agencies!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a 
                href="https://g.page/r/YOUR_CENTRE_GOOGLE_PLACE_ID/review" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Review Centre Office
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a 
                href="https://g.page/r/YOUR_ROME_GOOGLE_PLACE_ID/review" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Review Rome Office
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Reviews;
