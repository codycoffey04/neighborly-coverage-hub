import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote, ExternalLink, MessageCircle, DollarSign, Heart, ShieldCheck, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
  // Centre, AL Reviews (10)
  {
    text: "Crystal and Kimberly set up our home and auto plan at a very respectable price. If I could give 10 stars I would. I think this agency will be great to work with in the future.",
    name: "Thomas K.",
    location: "Centre, AL"
  },
  {
    text: "Kimberly was so helpful and attentive. She answered all my questions and made the process stress-free.",
    name: "Tyler M.",
    location: "Centre, AL"
  },
  {
    text: "I always talk with Crystal and she's so helpful and professional. She makes me feel like a valued policyholder. Highly recommend them.",
    name: "Kim S.",
    location: "Centre, AL"
  },
  {
    text: "Lexi was patient and helpful when I stopped by to ask multiple questions. She's an asset to the office.",
    name: "Teresa G.",
    location: "Centre, AL"
  },
  {
    text: "Professional and quick to respond. I've been with other agencies but this one is top notch. Kimberly Fletcher is so friendly. Highly recommend the agency.",
    name: "Lloyd N.",
    location: "Centre, AL"
  },
  {
    text: "Great experience. They cover my vehicles, RV, boat and home. Crystal makes sure I always leave satisfied.",
    name: "John B.",
    location: "Centre, AL"
  },
  {
    text: "Crystal gives excellent customer service and tech support. She's very sweet. I definitely recommend this location.",
    name: "Tammy B.",
    location: "Centre, AL"
  },
  {
    text: "Best agency. Great customer service. Kimberly helps with all my insurance needs. Love being covered for car, home and life.",
    name: "Cassie N.",
    location: "Centre, AL"
  },
  {
    text: "Recently switched all my insurance with Cody. Customer service is impressive and rates are lower. Transition was painless.",
    name: "Kerry G.",
    location: "Centre, AL"
  },
  {
    text: "Cody's associates are always ready to help with friendliness and efficiency. I always feel important. They are the best.",
    name: "Gina W.",
    location: "Centre, AL"
  },
  // Rome, GA Reviews (15)
  {
    text: "I've worked with the Coffey agency for many years and always had high-level experiences with every agent. Crystal was patient, knowledgeable, honest and thorough in answering questions about policy coverages and hypotheticals. They treat people with exceptional knowledge, communication and kindness.",
    name: "Sarah R.",
    location: "Rome, GA"
  },
  {
    text: "Been with the Coffey Agency almost 10 years; they respond quickly and help get the best price for coverage. I usually work with Kathy; she is thorough, professional and friendly.",
    name: "Tracey D.",
    location: "Rome, GA"
  },
  {
    text: "Crystal was very patient and polite with me as a new policy holder. I have had insurance for many years and I have learned more from Crystal in 2 months than over this long life time. She explains in details how insurance works. Again thank you Crystal.",
    name: "Priscilla J.",
    location: "Rome, GA"
  },
  {
    text: "I've been with Allstate for years and always worked with Karen. When she left I wanted to find someone as caring and helpful as Karen had been. I started working with Kathy and she has been so helpful each time I call. She is courteous, caring, and always very pleasant.",
    name: "Sue H.",
    location: "Rome, GA"
  },
  {
    text: "Staff is always helpful and goes above and beyond to be sure I'm taken care of on top of offering the best rates on home and auto insurance.",
    name: "Chad L.",
    location: "Rome, GA"
  },
  {
    text: "Crystal was extremely professional, courteous, and pleasant. We've been with Cody's team for many years as they continue to serve our insurance needs with excellent customer service and comprehensive coverage. Many thanks!",
    name: "Patrick R.",
    location: "Rome, GA"
  },
  {
    text: "Special thank you to your representative Crystal Brozio. She is simply extraordinary, no effort in her professionalism and knowledge of the services offered and available.",
    name: "Monica W.",
    location: "Rome, GA"
  },
  {
    text: "Crystal was very kind, patient, professional and very helpful; representing Allstate well as we changed vehicles receiving appropriate insurance coverage. Thank you so very much!",
    name: "Phillip A.",
    location: "Rome, GA"
  },
  {
    text: "Kathy at Cody Coffey helped to resolve a blunder involving my insurance renewal being submitted to the state DMV. In 2 days, it was corrected. Thanks Kathy.",
    name: "Clyde B.",
    location: "Rome, GA"
  },
  {
    text: "The office staff were very friendly and helpful. They made sure I received my policies for both home and auto. They also called to follow up to see if we had any questions. I would definitely recommend this office to anyone looking to renew or upgrade their policy. Also the discounts were great!",
    name: "Barbara R.",
    location: "Rome, GA"
  },
  {
    text: "Excellent customer service. Even though Cody is not local to me, he and his agency are very hands on. They keep in touch by all the means available — email, website, monthly magazine, even the old fashioned phone call.",
    name: "Benita D.",
    location: "Rome, GA"
  },
  {
    text: "Wonderful insurance agent and staff. Always helpful when changing vehicles and/or coverage. Cody and all of his staff are knowledgeable, professional and understanding. Been with them for years and very happy with my agent!",
    name: "Annette C.",
    location: "Rome, GA"
  },
  {
    text: "I've been a customer since 1989. Every issue, question or claim has always been cared for quickly, friendly and professionally. Give Cody Coffey a call — you'll be glad you did.",
    name: "Karen P.",
    location: "Rome, GA"
  },
  {
    text: "Cody and the gang helped me understand insurance on a recent home purchase I made. They also got me a better deal.",
    name: "John G.",
    location: "Rome, GA"
  },
];

const highlights = [
  {
    icon: MessageCircle,
    title: "They Actually Answer the Phone",
    description: "Real people, not phone trees. No automated systems or week-long waits for callbacks.",
  },
  {
    icon: DollarSign,
    title: "They Saved Me Money",
    description: "Average savings of 15-25% when bundling. Rate reviews that actually save you money.",
  },
  {
    icon: Heart,
    title: "They Treated Me Like Family",
    description: "Local team that knows your name. Personal service that remembers your situation.",
  },
  {
    icon: ShieldCheck,
    title: "They Helped Me Through My Claim",
    description: "Guidance from start to finish. Local support and advocacy when it matters most.",
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
        role="banner"
        aria-label="Customer reviews hero section"
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
                  
                  {/* Large rating number */}
                  <span className="text-5xl font-bold text-primary block mb-2">
                    {office.rating}
                  </span>
                  
                  {/* 5 gold stars row */}
                  <div className="flex justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Review count - more prominent */}
                  <p className="text-muted-foreground font-medium mb-6">
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

      {/* Reviews Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => {
              // Get initial for avatar
              const initial = review.name.charAt(0).toUpperCase();
              
              return (
                <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md rounded-lg transition-all flex flex-col h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* 5 gold stars at top */}
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    
                    {/* Larger, more prominent quote icon */}
                    <Quote className="w-12 h-12 text-primary mb-4" />
                    
                    {/* Review text - flex-grow to push attribution to bottom */}
                    <p className="text-muted-foreground mb-6 leading-relaxed italic flex-grow">
                      "{review.text}"
                    </p>

                    {/* Attribution with initial avatar - anchored to bottom */}
                    <div className="border-t border-gray-200 pt-4 mt-auto flex items-center gap-3">
                      {/* Initial circle */}
                      <Avatar className="w-10 h-10 bg-primary">
                        <AvatarFallback className="bg-primary text-white font-semibold">
                          {initial}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-foreground">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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
                    <h3 className="text-lg font-bold text-foreground mb-3">
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
            We'd love to hear about it!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all" asChild>
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
          
          {/* Helper text */}
          <p className="text-sm text-muted-foreground">
            Your review helps other families find an insurance team they can trust.
          </p>
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
