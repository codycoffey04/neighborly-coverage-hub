import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ExternalLink, MessageCircle, DollarSign, Heart, ShieldCheck, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import heroBackground from "@/assets/contact-hero.jpg";

const officeRatings = [
  {
    office: "Centre, Alabama",
    rating: "4.7",
    reviews: 116,
    googleUrl: "https://search.google.com/local/writereview?placeid=ChIJJ80TpQ5hiogRn3tzQbqNLMA",
  },
  {
    office: "Rome, Georgia",
    rating: "4.6",
    reviews: 90,
    googleUrl: "https://search.google.com/local/writereview?placeid=ChIJZQwKAM-kiogR_bIpdOhQm7o",
  },
];

const reviews = [
  {
    text: "Customer service at Cody Coffey's Centre office is amazing, a lost art, a total delight. Give them 1000 out of 100 :). Friendly, knowledgeable. So grateful to have found them when moving to a new town.",
    name: "Google Review",
    location: "Centre, AL",
  },
  {
    text: "I was with this agency for several years and had nothing but positive experiences with Cody and the other agents. When I had to move out of state, Kathy made it incredibly easy to end my Georgia policy and settle things up. I can't recommend them enough.",
    name: "Google Review",
    location: "Rome, GA",
  },
  {
    text: "Lexi was very patient and helpful when I stopped by yesterday to ask multiple questions. She is truly an asset to your office!",
    name: "Google Review",
    location: "Centre, AL",
  },
  {
    text: "Very friendly and helpful staff. They took the time to explain my coverage options and helped me find the best rate. Highly recommend!",
    name: "Google Review",
    location: "Alabama",
  },
  {
    text: "Switching to Coffey Agencies was the best decision. They saved me money and actually answer the phone when I call. You don't get that with the big companies.",
    name: "Google Review",
    location: "Georgia",
  },
  {
    text: "Crystal is wonderful! She helped me update my policy and answered all my questions. Fast, friendly service every time.",
    name: "Google Review",
    location: "Centre, AL",
  },
  {
    text: "Maria was so helpful in explaining everything in Spanish for my parents. We really appreciate having an agent who speaks our language and understands our needs.",
    name: "Google Review",
    location: "Alabama",
  },
  {
    text: "Had a claim after a storm and they walked me through the entire process. Couldn't have been easier. This is why you work with a local agent.",
    name: "Google Review",
    location: "Georgia",
  },
  {
    text: "I've been a customer for over 10 years. They've always treated me right — fair prices, great service, and real people who know my name.",
    name: "Google Review",
    location: "Alabama",
  },
  {
    text: "Got my quote in 15 minutes and saved over $400 by bundling my auto and home. Wish I had switched sooner!",
    name: "Google Review",
    location: "Georgia",
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
    <>
      <Helmet>
        <title>Customer Reviews | 4.7★ Rating | Coffey Agencies</title>
        <meta name="description" content="Read customer reviews for Coffey Agencies. 4.7★ in Centre, AL (116 reviews) and 4.6★ in Rome, GA (90 reviews). See why families trust us." />
        <link rel="canonical" href="https://coffeyagencies.com/reviews" />
        <script type="application/ld+json">
          {JSON.stringify(reviewsSchema)}
        </script>
      </Helmet>
      
      <Header />
      
      {/* Custom Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-end bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="relative z-10 w-full py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/80">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li>/</li>
                <li className="text-white">Reviews</li>
              </ol>
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Customer Reviews
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-6 drop-shadow-md">
              What Our Customers Say
            </p>
            <p className="text-lg text-white/90 max-w-3xl drop-shadow-md">
              Don't just take our word for it. Here's what families across Alabama and Georgia say about working with Coffey Agencies.
            </p>
          </div>
        </div>
      </section>

      {/* Office Ratings */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {officeRatings.map((office, index) => (
              <Card key={index} className="border border-gray-200 shadow-sm rounded-lg hover:shadow-md transition-all">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {office.office}
                  </h3>
                  <div className="flex justify-center items-baseline gap-2 mb-2">
                    <span className="text-5xl font-bold text-primary">
                      {office.rating}
                    </span>
                    <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Based on {office.reviews} Google reviews
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
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
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md rounded-lg transition-all flex flex-col h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Prominent quote icon */}
                  <Quote className="w-10 h-10 text-primary mb-4" />
                  
                  {/* Review text - flex-grow to push attribution to bottom */}
                  <p className="text-muted-foreground mb-6 leading-relaxed italic flex-grow">
                    "{review.text}"
                  </p>

                  {/* Attribution anchored to bottom */}
                  <div className="border-t border-gray-200 pt-4 mt-auto">
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
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
                <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md rounded-lg transition-all text-center flex flex-col h-full">
                  <CardContent className="p-6 flex flex-col items-center h-full">
                    {/* Navy circle with white icon - matching service pages */}
                    <div className="w-14 h-14 rounded-full bg-primary shadow-md flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
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
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Had a Great Experience?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We'd love to hear about it! Your reviews help other families find an insurance team they can trust.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-md hover:shadow-lg transition-all" asChild>
              <a 
                href="https://search.google.com/local/writereview?placeid=ChIJJ80TpQ5hiogRn3tzQbqNLMA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Review Us on Google - Centre
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" className="bg-white hover:bg-gray-50 text-primary border border-primary shadow-sm hover:shadow-md transition-all" asChild>
              <a 
                href="https://search.google.com/local/writereview?placeid=ChIJZQwKAM-kiogR_bIpdOhQm7o" 
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

      {/* Bottom CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary-light">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join thousands of Alabama and Georgia families who trust Coffey Agencies.
          </p>
          
          {/* Green CTA button */}
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-md hover:shadow-lg mb-6" asChild>
            <Link to="/contact">Get Your Free Quote</Link>
          </Button>
          
          {/* Phone numbers */}
          <p className="text-white/90 mb-2">Or call us:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+12569276287" className="text-white hover:text-accent transition-colors font-semibold" aria-label="Call Centre, Alabama office at (256) 927-6287">
              (256) 927-6287
            </a>
            <span className="text-white/60 hidden sm:inline">|</span>
            <a href="tel:+17067846511" className="text-white hover:text-accent transition-colors font-semibold" aria-label="Call Rome, Georgia office at (706) 784-6511">
              (706) 784-6511
            </a>
          </div>
          
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              Licensed in AL & GA
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              Hablamos Español
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              Family Owned
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              100+ Years Combined Experience
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Reviews;
