/**
 * IMPORTANT: Google Place ID Configuration Required
 * 
 * The following placeholders need to be replaced with real Google Place IDs
 * before production deployment:
 * 
 * 1. CENTRE_GOOGLE_PLACE_ID - Found in Google Business Profile for Centre, AL office
 *    - Office: 1913 W Main Street, Centre, AL 35960
 *    - Replace at: lines ~14, ~241
 * 
 * 2. ROME_GOOGLE_PLACE_ID - Found in Google Business Profile for Rome, GA office
 *    - Office: 1703 Turner McCall Blvd SE, Rome, GA 30161
 *    - Replace at: lines ~21, ~253
 * 
 * To find Google Place IDs:
 * 1. Go to Google Maps and search for your business
 * 2. Click "Share" → "Embed a map"
 * 3. The Place ID is in the URL after /place/
 * OR use: https://developers.google.com/maps/documentation/places/web-service/place-id
 */

import { PageLayout } from "@/components/shared/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ExternalLink, MessageCircle, DollarSign, Heart, ShieldCheck, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const officeRatings = [
  {
    office: "Centre, Alabama",
    rating: "4.7",
    reviews: 116,
    // TODO: Replace with real Google Place ID for Centre office
    googleUrl: "https://g.page/r/CENTRE_GOOGLE_PLACE_ID/review",
  },
  {
    office: "Rome, Georgia",
    rating: "4.6",
    reviews: 90,
    // TODO: Replace with real Google Place ID for Rome office
    googleUrl: "https://g.page/r/ROME_GOOGLE_PLACE_ID/review",
  },
];

const reviews = [
  {
    text: "Customer service at Cody Coffey's Centre office is amazing, a lost art, a total delight. Give them 1000 out of 100 :). Friendly, knowledgeable. So grateful to have found them when moving to a new town.",
    attribution: "Google Review, Centre AL",
  },
  {
    text: "I was with this agency for several years and had nothing but positive experiences with Cody and the other agents. When I had to move out of state, Kathy made it incredibly easy to end my Georgia policy and settle things up. I can't recommend them enough.",
    attribution: "Google Review, Rome GA",
  },
  {
    text: "Lexi was very patient and helpful when I stopped by yesterday to ask multiple questions. She is truly an asset to your office!",
    attribution: "Google Review, Centre AL",
  },
  {
    text: "Very friendly and helpful staff. They took the time to explain my coverage options and helped me find the best rate. Highly recommend!",
    attribution: "Google Review",
  },
  {
    text: "Switching to Coffey Agencies was the best decision. They saved me money and actually answer the phone when I call. You don't get that with the big companies.",
    attribution: "Google Review",
  },
  {
    text: "Crystal is wonderful! She helped me update my policy and answered all my questions. Fast, friendly service every time.",
    attribution: "Google Review, Centre AL",
  },
  {
    text: "Maria was so helpful in explaining everything in Spanish for my parents. We really appreciate having an agent who speaks our language and understands our needs.",
    attribution: "Google Review",
  },
  {
    text: "Had a claim after a storm and they walked me through the entire process. Couldn't have been easier. This is why you work with a local agent.",
    attribution: "Google Review",
  },
  {
    text: "I've been a customer for over 10 years. They've always treated me right — fair prices, great service, and real people who know my name.",
    attribution: "Google Review",
  },
  {
    text: "Got my quote in 15 minutes and saved over $400 by bundling my auto and home. Wish I had switched sooner!",
    attribution: "Google Review",
  },
];

const highlights = [
  {
    icon: MessageCircle,
    title: "They Actually Answer the Phone",
    description: "Real people, real answers — no automated phone trees or week-long waits for callbacks.",
  },
  {
    icon: DollarSign,
    title: "They Saved Me Money",
    description: "Bundling discounts, rate reviews, and coverage that fits your budget.",
  },
  {
    icon: Heart,
    title: "They Treated Me Like Family",
    description: "Personal service from a team that knows your name and remembers your situation.",
  },
  {
    icon: ShieldCheck,
    title: "They Helped Me Through My Claim",
    description: "Local support when it matters most — guidance and advocacy from start to finish.",
  },
];

const Reviews = () => {
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Customer Reviews - Coffey Agencies",
    "description": "Read customer reviews for Coffey Agencies insurance services",
    "url": "https://coffeyagencies.com/reviews",
    "mainEntity": {
      "@type": "InsuranceAgency",
      "@id": "https://coffeyagencies.com/#organization",
      "aggregateRating": [
        {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "reviewCount": "116",
          "name": "Centre, Alabama Office"
        },
        {
          "@type": "AggregateRating",
          "ratingValue": "4.6",
          "reviewCount": "90",
          "name": "Rome, Georgia Office"
        }
      ]
    }
  };

  return (
    <PageLayout
      title="Customer Reviews"
      description="What Our Customers Say"
      breadcrumbs={[{ label: "Reviews", href: "/reviews" }]}
    >
      <Helmet>
        <title>Customer Reviews | 4.7★ Rating | Coffey Agencies</title>
        <meta name="description" content="Read customer reviews for Coffey Agencies. 4.7★ in Centre, AL (116 reviews) and 4.6★ in Rome, GA (90 reviews). See why families trust us." />
        <link rel="canonical" href="https://coffeyagencies.com/reviews" />
        <script type="application/ld+json">
          {JSON.stringify(reviewsSchema)}
        </script>
      </Helmet>
      {/* Intro Subhead */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what families across Alabama and Georgia say about working with Coffey Agencies.
          </p>
        </div>
      </section>

      {/* Office Ratings */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {officeRatings.map((office, index) => (
              <Card key={index} className="border-2 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {office.office}
                  </h3>
                  <div className="flex justify-center items-baseline gap-2 mb-2">
                    <span className="text-5xl font-bold text-primary">
                      {office.rating}
                    </span>
                    <Star className="w-8 h-8 text-accent fill-accent" />
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Based on {office.reviews} Google reviews
                  </p>
                  <Button asChild>
                    <a 
                      href={office.googleUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Read Reviews on Google
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed italic">
                    "{review.text}"
                  </p>

                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground">— {review.attribution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Customers Love About Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            What Customers Love About Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="border-border text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leave a Review */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Had a Great Experience?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We'd love to hear about it! Your reviews help other families find an insurance team they can trust.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a 
                href="https://g.page/r/CENTRE_GOOGLE_PLACE_ID/review" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Review Us on Google - Centre
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a 
                href="https://g.page/r/ROME_GOOGLE_PLACE_ID/review" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Review Us on Google - Rome
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of Alabama and Georgia families who trust Coffey Agencies.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">
              Get Your Free Quote
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Reviews;
