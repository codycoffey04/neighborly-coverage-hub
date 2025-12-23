import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, BookOpen, MessageCircle, MapPin, Phone, Clock, Award, ChevronRight, Home, Users, ShieldCheck, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Link, useLocation } from "react-router-dom";
import { TrackedPhone } from "@/components/shared/TrackedPhone";
import { Helmet } from "react-helmet-async";
import aboutHero from "@/assets/about-hero.png";
import codyHeadshot from "@/assets/cody-coffey-headshot.png";
import kimberlyHeadshot from "@/assets/kimberly-fletcher-headshot.jpg";
import crystalHeadshot from "@/assets/crystal-brozio-headshot.jpg";
import mariaHeadshot from "@/assets/maria-rocha-guzman-headshot.jpg";
import kathyHeadshot from "@/assets/kathy-sewell-headshot.jpg";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We do what we say and say what we mean. No surprises, no fine print tricks, no runaround.",
  },
  {
    icon: BookOpen,
    title: "Education",
    description: "We believe informed customers make better decisions. We'll explain your options clearly so you understand what you're paying for.",
  },
  {
    icon: MessageCircle,
    title: "Approachability",
    description: "Insurance can be confusing. We make it simple. Call us, email us, stop by — we're real people ready to help.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We live and work in the same communities we serve. Your neighbors are our neighbors — and that matters to us.",
  },
  {
    icon: Phone,
    title: "Responsiveness",
    description: "When you call, a real person answers. When you need help, we act fast. No phone trees, no week-long waits.",
  },
  {
    icon: ShieldCheck,
    title: "Advocacy",
    description: "We're in your corner — especially at claim time when it matters most. We guide you through the process and follow up until it's resolved.",
  },
];

interface TeamMember {
  name: string;
  title: string;
  since: string;
  bio: string;
  image?: string;
}

const teamMembers: { centre: TeamMember[]; rome: TeamMember[] } = {
  centre: [
    {
      name: "Kimberly Fletcher",
      title: "Office Manager & Senior Sales Producer",
      since: "March 2009",
      bio: "Kimberly joined our team on day one when Cody purchased the Centre office. With 5 years of agency experience before joining us, she brings deep knowledge of insurance products and exceptional client service. She manages daily operations and helps families find the right coverage for their needs.",
      image: kimberlyHeadshot,
    },
    {
      name: "Crystal Brozio",
      title: "Customer Service Manager",
      since: "2016",
      bio: "Crystal leads our customer service team with over 12 years of insurance experience. She ensures every client interaction exceeds expectations, handling policy changes, answering questions, and coordinating claims support. Her attention to detail and genuine care for clients makes her an invaluable part of our team.",
      image: crystalHeadshot,
    },
    {
      name: "Maria Rocha-Guzman",
      title: "Senior Sales Producer (Bilingual)",
      since: "2020",
      bio: "Maria serves our English and Spanish-speaking clients throughout Alabama and Georgia. As a bilingual senior producer, she helps families navigate insurance options, compare coverage, and find solutions that fit their budgets. She's passionate about making insurance accessible to everyone.",
      image: mariaHeadshot,
    },
  ],
  rome: [
    {
      name: "Kathy Sewell",
      title: "Customer Service Specialist",
      since: "March 2020",
      bio: "Kathy joined our team with over 10 years of insurance agency experience. She specializes in policy service, helping clients with coverage questions, billing inquiries, and policy adjustments. Her extensive background means she can answer complex questions quickly and accurately.",
      image: kathyHeadshot,
    },
    {
      name: "Aleeah Stone",
      title: "Customer Service Agent & Life Specialist",
      since: "2025",
      bio: "With experience in both service and life insurance, Aleeah helps clients with policy updates, billing questions, and coverage explanations. She also guides families through their life insurance choices, making the process simple and approachable. Her reliability and attention to detail make her a valuable part of our Rome team.",
    },
  ],
};

const offices = [
  {
    name: "Centre, Alabama",
    address: "1913 W Main Street, Centre, AL 35960",
    phone: "(256) 927-6287",
    hours: "Monday–Friday: 8:00 AM – 5:00 PM",
    rating: "4.7",
    reviews: "117",
  },
  {
    name: "Rome, Georgia",
    address: "1703 Turner McCall Blvd SE, Rome, GA 30161",
    phone: "(706) 784-6511",
    hours: "Monday–Friday: 8:30 AM – 4:30 PM",
    rating: "4.6",
    reviews: "93",
  },
];

const About = () => {
  const location = useLocation();
  
  // Organization/InsuranceAgency Schema - REQUIRED for Google Rich Results
  // This must be on every page for Google to detect Organization/LocalBusiness
  const organizationSchema = {
    "@type": "InsuranceAgency",
    "@id": "https://coffeyagencies.com/#organization",
    "name": "Coffey Agencies",
    "legalName": "Coffey Agencies Inc.",
    "description": "Alabama & Georgia's trusted insurance partner offering auto, home, condo, renters, life, and motorcycle insurance with local expertise and digital convenience.",
    "url": "https://coffeyagencies.com",
    "telephone": ["(256) 927-6287", "(706) 784-6511"],
    "foundingDate": "2009",
    "founder": {
      "@type": "Person",
      "name": "Cody Coffey"
    },
    "logo": "https://coffeyagencies.com/coffey-logo.png",
    "image": "https://coffeyagencies.com/coffey-logo.png",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "1913 W Main Street",
        "addressLocality": "Centre",
        "addressRegion": "AL",
        "postalCode": "35960",
        "addressCountry": "US"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "1703 Turner McCall Blvd SE",
        "addressLocality": "Rome",
        "addressRegion": "GA",
        "postalCode": "30161",
        "addressCountry": "US"
      }
    ],
    "priceRange": "$$",
    "areaServed": ["Alabama", "Georgia"]
  };

  // LocalBusiness Schema for Centre, AL Office - REQUIRED for Google Rich Results
  const centreOfficeSchema = {
    "@type": "LocalBusiness",
    "@id": "https://coffeyagencies.com/#centre-office",
    "name": "Coffey Agencies - Centre, AL (Cody Coffey Agency)",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1913 W Main Street",
      "addressLocality": "Centre",
      "addressRegion": "AL",
      "postalCode": "35960",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "34.1519",
      "longitude": "-85.6789"
    },
    "telephone": "(256) 927-6287",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "117",
      "bestRating": "5",
      "worstRating": "1"
    },
    "parentOrganization": {
      "@id": "https://coffeyagencies.com/#organization"
    },
    "priceRange": "$$",
    "image": "https://coffeyagencies.com/centre-office.jpg"
  };

  // LocalBusiness Schema for Rome, GA Office - REQUIRED for Google Rich Results
  const romeOfficeSchema = {
    "@type": "LocalBusiness",
    "@id": "https://coffeyagencies.com/#rome-office",
    "name": "Coffey Agencies - Rome, GA (Millican & Coffey Agency)",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1703 Turner McCall Blvd SE",
      "addressLocality": "Rome",
      "addressRegion": "GA",
      "postalCode": "30161",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "34.2558",
      "longitude": "-85.1644"
    },
    "telephone": "(706) 784-6511",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:30",
        "closes": "16:30"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "reviewCount": "93",
      "bestRating": "5",
      "worstRating": "1"
    },
    "parentOrganization": {
      "@id": "https://coffeyagencies.com/#organization"
    },
    "priceRange": "$$",
    "image": "https://coffeyagencies.com/coffey-logo.png"
  };
  
  // AboutPage Schema - Enhanced for flagship site
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Coffey Agencies",
    "description": "Your Local Insurance Team Since 2009",
    "url": "https://coffeyagencies.com/about",
    "isPartOf": {
      "@id": "https://coffeyagencies.com/#website"
    },
    "mainEntity": {
      "@id": "https://coffeyagencies.com/#organization"
    }
  };

  // WebPage Schema - Additional page context for SEO
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About Coffey Agencies",
    "description": "Meet the Coffey Agencies team. Licensed in Alabama and Georgia since 2009, with offices in Centre, AL and Rome, GA.",
    "url": "https://coffeyagencies.com/about",
    "isPartOf": {
      "@id": "https://coffeyagencies.com/#website"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://coffeyagencies.com/cody-coffey-headshot.png",
      "width": 192,
      "height": 192
    },
    "breadcrumb": {
      "@id": "https://coffeyagencies.com/about#breadcrumb"
    }
  };

  // Person Schema for Cody Coffey (Founder/CEO) - Advanced schema for flagship site
  const founderSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://coffeyagencies.com/#founder",
    "name": "Cody Coffey",
    "jobTitle": "CEO & Founder",
    "description": "Founder and CEO of Coffey Agencies Inc. Started in insurance at age 18 in 2004, purchased first agency at age 22 in Centre, Alabama.",
    "image": {
      "@type": "ImageObject",
      "url": "https://coffeyagencies.com/cody-coffey-headshot.png",
      "width": 192,
      "height": 192
    },
    "worksFor": {
      "@id": "https://coffeyagencies.com/#organization"
    },
    "founderOf": {
      "@id": "https://coffeyagencies.com/#organization"
    },
    "knowsAbout": [
      "Insurance",
      "Business Management",
      "Customer Service",
      "Insurance Agency Operations"
    ]
  };

  // Person Schemas for Team Members - Advanced schema markup for flagship site
  const teamMemberSchemas = [
    // Centre, AL Office Team
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Kimberly Fletcher",
      "jobTitle": "Office Manager & Senior Sales Producer",
      "description": "Kimberly joined our team on day one when Cody purchased the Centre office. With 5 years of agency experience before joining us, she brings deep knowledge of insurance products and exceptional client service. She manages daily operations and helps families find the right coverage for their needs.",
      "image": {
        "@type": "ImageObject",
        "url": "https://coffeyagencies.com/kimberly-fletcher-headshot.jpg",
        "width": 400,
        "height": 400
      },
      "worksFor": {
        "@id": "https://coffeyagencies.com/#organization"
      },
      "knowsLanguage": ["English"]
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Crystal Brozio",
      "jobTitle": "Customer Service Manager",
      "description": "Crystal leads our customer service team with over 12 years of insurance experience. She ensures every client interaction exceeds expectations, handling policy changes, answering questions, and coordinating claims support. Her attention to detail and genuine care for clients makes her an invaluable part of our team.",
      "image": {
        "@type": "ImageObject",
        "url": "https://coffeyagencies.com/crystal-brozio-headshot.jpg",
        "width": 400,
        "height": 400
      },
      "worksFor": {
        "@id": "https://coffeyagencies.com/#organization"
      },
      "knowsLanguage": ["English"]
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Maria Rocha-Guzman",
      "jobTitle": "Senior Sales Producer (Bilingual)",
      "description": "Maria serves our English and Spanish-speaking clients throughout Alabama and Georgia. As a bilingual senior producer, she helps families navigate insurance options, compare coverage, and find solutions that fit their budgets. She's passionate about making insurance accessible to everyone.",
      "image": {
        "@type": "ImageObject",
        "url": "https://coffeyagencies.com/maria-rocha-guzman-headshot.jpg",
        "width": 400,
        "height": 400
      },
      "worksFor": {
        "@id": "https://coffeyagencies.com/#organization"
      },
      "knowsLanguage": ["English", "Spanish"]
    },
    // Rome, GA Office Team
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Kathy Sewell",
      "jobTitle": "Customer Service Specialist",
      "description": "Kathy joined our team with over 10 years of insurance agency experience. She specializes in policy service, helping clients with coverage questions, billing inquiries, and policy adjustments. Her extensive background means she can answer complex questions quickly and accurately.",
      "image": {
        "@type": "ImageObject",
        "url": "https://coffeyagencies.com/kathy-sewell-headshot.jpg",
        "width": 400,
        "height": 400
      },
      "worksFor": {
        "@id": "https://coffeyagencies.com/#organization"
      },
      "knowsLanguage": ["English"]
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Aleeah Stone",
      "jobTitle": "Customer Service Agent & Life Specialist",
      "description": "With experience in both service and life insurance, Aleeah helps clients with policy updates, billing questions, and coverage explanations. She also guides families through their life insurance choices, making the process simple and approachable. Her reliability and attention to detail make her a valuable part of our Rome team.",
      "worksFor": {
        "@id": "https://coffeyagencies.com/#organization"
      },
      "knowsLanguage": ["English"]
    }
  ];

  // BreadcrumbList Schema for SEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://coffeyagencies.com/about#breadcrumb",
    "name": "Breadcrumb Navigation",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://coffeyagencies.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://coffeyagencies.com/about"
      }
    ]
  };

  // Combine all schemas into a single @graph structure for reliable rendering
  // This ensures all schemas are included in one JSON-LD block
  // CRITICAL: Organization and LocalBusiness schemas MUST be included for Google Rich Results
  const allSchemas = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      centreOfficeSchema,
      romeOfficeSchema,
      aboutSchema,
      webpageSchema,
      founderSchema,
      breadcrumbSchema,
      ...teamMemberSchemas
    ]
  };

  return (
    <>
      <Helmet>
        <title>About Coffey Agencies | Your Local Insurance Team Since 2009</title>
        <meta name="description" content="Meet the Coffey Agencies team. Licensed in Alabama and Georgia since 2009, with offices in Centre, AL and Rome, GA. A+ BBB Rating." />
        <link rel="canonical" href="https://coffeyagencies.com/about" />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="About Coffey Agencies | Your Local Insurance Team Since 2009" />
        <meta property="og:description" content="Meet the Coffey Agencies team. Licensed in Alabama and Georgia since 2009, with offices in Centre, AL and Rome, GA. A+ BBB Rating." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coffeyagencies.com/about" />
        <meta property="og:site_name" content="Coffey Agencies" />
        <meta property="og:image" content="https://coffeyagencies.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Coffey Agencies | Your Local Insurance Team Since 2009" />
        <meta name="twitter:description" content="Meet the Coffey Agencies team. Licensed in Alabama and Georgia since 2009, with offices in Centre, AL and Rome, GA. A+ BBB Rating." />
        <meta name="twitter:image" content="https://coffeyagencies.com/og-image.jpg" />
        
        {/* Combined Schema Graph - All schemas in one JSON-LD block for reliable rendering */}
        <script type="application/ld+json">
          {JSON.stringify(allSchemas)}
        </script>
      </Helmet>

      <Header />

      {/* Custom Hero Section with Background Image */}
      <section 
        role="banner"
        aria-label="Coffey Agencies Centre, Alabama office exterior"
        className="relative min-h-[500px] flex items-end overflow-hidden"
      >
        <img 
          src={aboutHero} 
          alt="Coffey Agencies Centre Alabama office exterior" 
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content */}
        <div className="relative z-10 w-full py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/80">
                <li>
                  <Link to="/" className="hover:text-white flex items-center gap-1">
                    <Home className="w-4 h-4" />
                    Home
                  </Link>
                </li>
                <ChevronRight className="w-4 h-4" />
                <li className="text-white font-medium">About</li>
              </ol>
            </nav>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              About Coffey Agencies
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl drop-shadow-md leading-relaxed">
              Your Local Insurance Team Since 2009
            </p>
          </div>
        </div>
      </section>
      {/* Our Story */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading className="mb-6">Our Story</SectionHeading>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Coffey Agencies started with a simple belief: insurance should be personal, straightforward, and local. In March 2009, Cody Coffey purchased his first agency in Centre, Alabama at just 22 years old. That decision set the foundation for everything that followed.
                </p>
                <p>
                  Over the next eight years, the agency grew through strategic acquisitions — Rome, Georgia in February 2012, Fort Payne, Alabama in 2015, and Dallas, Georgia in 2017. Each acquisition brought new clients, experienced team members, and deeper roots in our communities.
                </p>
                <p>
                  In 2021, we consolidated our four physical locations into two strategic hubs in Centre and Rome. This allows our team to serve clients throughout both states with the same people they've trusted for years — combining local expertise with digital convenience.
                </p>
                <p>
                  Today, Coffey Agencies protects families across Alabama and Georgia with a dedicated team of insurance professionals who believe in doing things the right way.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 border border-border">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">16+</div>
                  <div className="text-muted-foreground">Years Serving Our Community</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">2</div>
                  <div className="text-muted-foreground">Office Locations</div>
                </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">A+</div>
              <div className="text-muted-foreground">BBB Rating</div>
            </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <div className="text-muted-foreground">Years Combined Team Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Cody Coffey, CEO */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            {/* Headshot Image - Left side on desktop, centered above on mobile */}
            <div className="flex-shrink-0">
              <img 
                src={codyHeadshot}
                alt="Cody Coffey, CEO of Coffey Agencies Inc."
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-white"
                loading="lazy"
                width="192"
                height="192"
              />
            </div>
            
            {/* Text Content */}
            <div className="flex-1">
              <SectionHeading className="mb-6 text-center md:text-left">Meet Cody Coffey, CEO</SectionHeading>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I got my start in insurance in 2004 at 18 years old, learning the industry from the ground up. By age 22, we purchased our first agency in Centre, Alabama. That decision — buying a business at such a young age — set the foundation for everything that followed.
                </p>
                <p>
                  Building this business has always been about more than policies and premiums. It's about providing security for families, serving our communities, and creating a place where our team can build careers helping people.
                </p>
                <p>
                  I've been married to my wife Jessica for 20 years. We have two kids — Bentley, who's 20, and Ellabee, who's 16. Every day I come to work knowing that the families we protect are counting on us the same way my family counts on me.
                </p>
              </div>
              
              {/* Credentials Box - now below text instead of sidebar */}
              <div className="mt-8 bg-background rounded-xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Credentials</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Licensed Property & Casualty Agent (Alabama & Georgia)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Licensed Life & Health Agent (Alabama & Georgia)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>20+ years in the insurance industry</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <SectionHeading centered className="mb-4">Our Team</SectionHeading>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated professionals who make Coffey Agencies exceptional.
            </p>
          </div>

          {/* Centre, AL Office */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Centre, AL Office</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {teamMembers.centre.map((member, index) => (
                <Card key={index} className="border-border hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:scale-105 transition-all duration-300 ease-in-out">
                  <CardContent className="pt-6">
                    {/* Photo section */}
                    <div className="flex justify-center mb-4">
                      {member.image ? (
                        <img 
                          src={member.image}
                          alt={`${member.name} headshot`}
                          className="w-24 h-24 rounded-full object-cover border-2 border-primary/20"
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="text-center mb-4">
                      <h4 className="text-lg font-semibold text-foreground">{member.name}</h4>
                      <p className="text-sm text-primary font-medium">{member.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        With Coffey Agencies since {member.since}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed text-center">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Rome, GA Office */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Rome, GA Office</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {teamMembers.rome.map((member, index) => (
                <Card key={index} className="border-border hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:scale-105 transition-all duration-300 ease-in-out">
                  <CardContent className="pt-6">
                    {/* Photo section */}
                    <div className="flex justify-center mb-4">
                      {member.image ? (
                        <img 
                          src={member.image}
                          alt={`${member.name} headshot`}
                          className="w-24 h-24 rounded-full object-cover border-2 border-primary/20"
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="text-center mb-4">
                      <h4 className="text-lg font-semibold text-foreground">{member.name}</h4>
                      <p className="text-sm text-primary font-medium">{member.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        With Coffey Agencies since {member.since}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed text-center">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Credentials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <SectionHeading centered className="mb-4">Our Credentials</SectionHeading>
            <p className="text-muted-foreground">
              Licensed, experienced, and trusted across Alabama and Georgia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:scale-105 transition-all duration-300 ease-in-out">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Agency Licenses</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Alabama Resident Agency License #416438</li>
                  <li>• Georgia Non-Resident Agency License #149612</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:scale-105 transition-all duration-300 ease-in-out">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Our Commitment</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 16+ years serving Alabama and Georgia families</li>
                  <li>• A+ Rating with the Better Business Bureau</li>
                  <li>• 100+ years combined team experience</li>
                  <li>• 4.7★ Google rating in Centre (116 reviews)</li>
                  <li>• 4.6★ Google rating in Rome (90 reviews)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <SectionHeading centered className="mb-4">Our Values</SectionHeading>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every interaction and decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:border-[#22c55e] hover:scale-105 transition-all duration-300 ease-in-out h-full">
                <CardContent className="pt-6 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground flex-grow">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <SectionHeading centered className="mb-4">Visit Our Offices</SectionHeading>
            <p className="text-muted-foreground">
              Stop by one of our convenient locations to discuss your insurance needs in person.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="border-border hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:scale-105 transition-all duration-300 ease-in-out">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">{office.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{office.address}</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <TrackedPhone
                        phone={office.phone}
                        phoneRaw={office.phone.replace(/[^0-9]/g, '')}
                        location={office.name}
                        office={office.name.includes("Centre") ? "centre" : "rome"}
                        pageType="about"
                        pageUrl={location.pathname}
                        className="text-primary hover:underline"
                        ariaLabel={`Call ${office.name} office at ${office.phone}`}
                      >
                        {office.phone}
                      </TrackedPhone>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{office.hours}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 pt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-500">★</span>
                        ))}
                      </div>
                      <span className="text-muted-foreground">
                        {office.rating} ({office.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button variant="outline" className="w-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200" aria-label={`Get directions to ${office.name} office`}>
                      Get Directions
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#1e3a5f]">
        <div className="container mx-auto max-w-4xl text-center">
          <SectionHeading variant="white" centered className="mb-4">
            Ready to Work With a Team That Puts You First?
          </SectionHeading>
          <p className="text-lg text-white/90 mb-8">
            Let us help you find the perfect coverage for your needs.
          </p>
          
          {/* CTA Button */}
          <Link to="/#quote-form">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white min-w-[200px] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200" aria-label="Get a free insurance quote">
              Get Quote
            </Button>
          </Link>
          
          {/* Phone Numbers */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-white/90">
            <span>Or call us:</span>
            <TrackedPhone
              phone="(256) 927-6287"
              phoneRaw="2569276287"
              location="Centre, AL"
              office="centre"
              pageType="about-cta"
              pageUrl={location.pathname}
              className="text-white hover:text-accent transition-colors"
              ariaLabel="Call Centre, Alabama office at (256) 927-6287"
            >
              (256) 927-6287
            </TrackedPhone>
            <span className="hidden sm:inline">|</span>
            <TrackedPhone
              phone="(706) 784-6511"
              phoneRaw="7067846511"
              location="Rome, GA"
              office="rome"
              pageType="about-cta"
              pageUrl={location.pathname}
              className="text-white hover:text-accent transition-colors"
              ariaLabel="Call Rome, Georgia office at (706) 784-6511"
            >
              (706) 784-6511
            </TrackedPhone>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
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

export default About;
