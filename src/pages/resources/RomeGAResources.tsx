import { Helmet } from "react-helmet-async";
import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { TrackedPhone } from "@/components/shared/TrackedPhone";
import heroBackground from "@/assets/contact-hero.jpg";
import { 
  Car, 
  IdCard, 
  Shield, 
  Building2, 
  AlertTriangle, 
  Heart,
  Phone,
  MapPin,
  Clock,
  ExternalLink,
  CheckCircle
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const RomeGAResources = () => {
  const location = useLocation();
  
  // BreadcrumbList Schema for SEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        "name": "Local Resources",
        "item": "https://coffeyagencies.com/resources/rome-ga"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Insurance in Rome, GA | Local Coverage | Coffey Agencies</title>
        <meta 
          name="description" 
          content="Coffey Agencies has served Rome, Georgia since 2012. Local insurance expertise for Floyd County. Auto, home, life & specialty coverage." 
        />
        <link rel="canonical" href="https://coffeyagencies.com/resources/rome-ga" />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="Local Resources for Rome, GA | Floyd County | Coffey Agencies" />
        <meta property="og:description" content="DMV, police, courts, emergency services, and more for Floyd County, Georgia. Your local resource guide from Coffey Agencies in Rome." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coffeyagencies.com/resources/rome-ga" />
        <meta property="og:site_name" content="Coffey Agencies" />
        <meta property="og:image" content="https://coffeyagencies.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Local Resources for Rome, GA | Floyd County" />
        <meta name="twitter:description" content="DMV, police, courts, emergency services for Floyd County, Georgia. Your local resource guide." />
        <meta name="twitter:image" content="https://coffeyagencies.com/og-image.jpg" />
        
        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section 
        role="banner"
        aria-label="Rome Georgia local resources hero section"
        className="relative min-h-[500px] flex items-end bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        
        {/* Content */}
        <div className="relative z-10 w-full py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              Insurance in Rome, GA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md">
              Quick access to DMV offices, law enforcement, courts, emergency services, and more — all in one place.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-white/80 drop-shadow-md">
              <CheckCircle className="h-4 w-4" />
              <span>Updated regularly | Your local insurance partner since 2009</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Vehicle & Driver Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionHeading variant="primary" centered className="mb-4">
              Vehicle & Driver Services
            </SectionHeading>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
            {/* Floyd County Tag Office */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Floyd County Tag Office
                </h3>
                <p className="text-muted-foreground mb-4">
                  Vehicle registration, tag renewals, and title transfers.
                </p>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <a 
                      href="https://maps.google.com/maps?q=4+Government+Plaza,+Suite+109,+Rome,+GA+30161&t=m&z=15&output=embed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                      aria-label="View 4 Government Plaza, Suite 109, Rome, GA 30161 on Google Maps (opens in new tab)"
                    >
                      4 Government Plaza, Suite 109, Rome, GA 30161
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                    <a 
                      href="tel:+17062915150" 
                      className="hover:text-primary transition-colors"
                      aria-label="Call Floyd County Tag Office at (706) 291-5150"
                    >
                      (706) 291-5150
                    </a>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Clock className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Monday–Friday, 8:00 AM – 5:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rome DDS Customer Service Center */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-4">
                  <IdCard className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Rome DDS Customer Service Center
                </h3>
                <p className="text-muted-foreground mb-4">
                  Driver's license renewals, testing, and ID cards.
                </p>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <a 
                      href="https://maps.google.com/maps?q=3390+Martha+Berry+Hwy+NE,+Rome,+GA+30165&t=m&z=15&output=embed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                      aria-label="View 3390 Martha Berry Hwy NE, Rome, GA 30165 on Google Maps (opens in new tab)"
                    >
                      3390 Martha Berry Hwy NE, Rome, GA 30165
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                    <a 
                      href="tel:+16784138400" 
                      className="hover:text-primary transition-colors"
                      aria-label="Call Rome DDS Customer Service Center at (678) 413-8400"
                    >
                      (678) 413-8400
                    </a>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Clock className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Tuesday–Friday, 8:00 AM – 6:00 PM (Closed Monday)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* External Links */}
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2 font-semibold">Georgia Statewide Resources:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://www.dds.georgia.gov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-primary transition-colors"
                aria-label="Visit Georgia Department of Driver Services website (opens in new tab)"
              >
                GA Dept. of Driver Services (DDS)
                <ExternalLink className="h-3 w-3" />
              </a>
              <a 
                href="https://www.dor.georgia.gov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-primary transition-colors"
                aria-label="Visit Georgia Department of Revenue website (opens in new tab)"
              >
                GA Dept. of Revenue – Motor Vehicle Division
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Law Enforcement */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionHeading variant="primary" centered className="mb-4">
              Law Enforcement
            </SectionHeading>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Floyd County Sheriff's Office */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Floyd County Sheriff's Office
                </h3>
                <p className="text-muted-foreground mb-4">
                  Non-emergency calls, accident reports, and general inquiries.
                </p>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <a 
                      href="https://maps.google.com/maps?q=2526+New+Calhoun+Hwy+NE,+Rome,+GA+30161&t=m&z=15&output=embed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                      aria-label="View 2526 New Calhoun Hwy NE, Rome, GA 30161 on Google Maps (opens in new tab)"
                    >
                      2526 New Calhoun Hwy NE, Rome, GA 30161
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                    <a 
                      href="tel:+17062914111" 
                      className="hover:text-primary transition-colors"
                      aria-label="Call Floyd County Sheriff's Office at (706) 291-4111"
                    >
                      (706) 291-4111
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-red-600">
                    <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                    <span>Emergency: Call 911</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rome Police Department */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Rome Police Department
                </h3>
                <p className="text-muted-foreground mb-4">
                  City of Rome law enforcement.
                </p>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <a 
                      href="https://maps.google.com/maps?q=375+Technology+Pkwy,+Rome,+GA+30165&t=m&z=15&output=embed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                      aria-label="View 375 Technology Pkwy, Rome, GA 30165 on Google Maps (opens in new tab)"
                    >
                      375 Technology Pkwy, Rome, GA 30165
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                    <a 
                      href="tel:+17062385111" 
                      className="hover:text-primary transition-colors"
                      aria-label="Call Rome Police Department at (706) 238-5111"
                    >
                      (706) 238-5111
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-red-600">
                    <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                    <span>Emergency: Call 911</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floyd County Police Department */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Floyd County Police Department
                </h3>
                <p className="text-muted-foreground mb-4">
                  County police services.
                </p>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <a 
                      href="https://maps.google.com/maps?q=1+Police+Plaza,+Rome,+GA+30161&t=m&z=15&output=embed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                      aria-label="View 1 Police Plaza, Rome, GA 30161 on Google Maps (opens in new tab)"
                    >
                      1 Police Plaza, Rome, GA 30161
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                    <a 
                      href="tel:+17062357766" 
                      className="hover:text-primary transition-colors"
                      aria-label="Call Floyd County Police Department at (706) 235-7766"
                    >
                      (706) 235-7766
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-red-600">
                    <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                    <span>Emergency: Call 911</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: Courts & Legal */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionHeading variant="primary" centered className="mb-4">
              Courts & Legal
            </SectionHeading>
          </div>

          <div className="max-w-3xl mx-auto mb-8">
            {/* Floyd County Courthouse */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Floyd County Courthouse
                </h3>
                <p className="text-muted-foreground mb-4">
                  Civil cases, criminal cases, and court records.
                </p>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <a 
                      href="https://maps.google.com/maps?q=3+Government+Plaza,+Rome,+GA+30161&t=m&z=15&output=embed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                      aria-label="View 3 Government Plaza, Rome, GA 30161 on Google Maps (opens in new tab)"
                    >
                      3 Government Plaza, Rome, GA 30161
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                    <a 
                      href="tel:+17062915190" 
                      className="hover:text-primary transition-colors"
                      aria-label="Call Floyd County Courthouse at (706) 291-5190"
                    >
                      (706) 291-5190
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Traffic Tickets Info */}
          <div className="text-center text-sm text-muted-foreground max-w-3xl mx-auto">
            <p className="leading-relaxed">
              Many Georgia traffic citations can be paid online at{" "}
              <a 
                href="https://www.courtview.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-primary transition-colors inline-flex items-center gap-1"
                aria-label="Visit CourtView website to pay traffic citations (opens in new tab)"
              >
                www.courtview.net
                <ExternalLink className="h-3 w-3" />
              </a>
              {" "}or{" "}
              <a 
                href="https://www.paycourt.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-primary transition-colors inline-flex items-center gap-1"
                aria-label="Visit PayCourt website to pay traffic citations (opens in new tab)"
              >
                www.paycourt.com
                <ExternalLink className="h-3 w-3" />
              </a>
              . Check your citation for specific instructions.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Emergency Services */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionHeading variant="primary" centered className="mb-4">
              Emergency Services
            </SectionHeading>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {/* Floyd County EMA */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Floyd County Emergency Management Agency (EMA)
                </h3>
                <p className="text-muted-foreground mb-4">
                  Emergency planning, CodeRED alerts, and disaster preparedness.
                </p>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <a 
                      href="https://maps.google.com/maps?q=407+E+12th+Street,+Rome,+GA+30161&t=m&z=15&output=embed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                      aria-label="View 407 E 12th Street, Rome, GA 30161 on Google Maps (opens in new tab)"
                    >
                      407 E 12th Street, Rome, GA 30161
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                    <a 
                      href="tel:+17062365002" 
                      className="hover:text-primary transition-colors"
                      aria-label="Call Floyd County EMA at (706) 236-5002"
                    >
                      (706) 236-5002
                    </a>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-accent">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Sign up for CodeRED alerts through Floyd County EMA</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Atrium Health Floyd Medical Center */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Atrium Health Floyd Medical Center
                </h3>
                <p className="text-muted-foreground mb-4">
                  24/7 emergency room and medical services.
                </p>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <a 
                      href="https://maps.google.com/maps?q=304+Turner+McCall+Blvd,+Rome,+GA+30165&t=m&z=15&output=embed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                      aria-label="View 304 Turner McCall Blvd, Rome, GA 30165 on Google Maps (opens in new tab)"
                    >
                      304 Turner McCall Blvd, Rome, GA 30165
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                    <a 
                      href="tel:+17065095000" 
                      className="hover:text-primary transition-colors"
                      aria-label="Call Atrium Health Floyd Medical Center at (706) 509-5000"
                    >
                      (706) 509-5000
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AdventHealth Redmond */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  AdventHealth Redmond
                </h3>
                <p className="text-muted-foreground mb-4">
                  24/7 emergency room and medical services.
                </p>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <a 
                      href="https://maps.google.com/maps?q=501+Redmond+Rd,+Rome,+GA+30165&t=m&z=15&output=embed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                      aria-label="View 501 Redmond Rd, Rome, GA 30165 on Google Maps (opens in new tab)"
                    >
                      501 Redmond Rd, Rome, GA 30165
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                    <a 
                      href="tel:+17062910291" 
                      className="hover:text-primary transition-colors"
                      aria-label="Call AdventHealth Redmond at (706) 291-0291"
                    >
                      (706) 291-0291
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* External Links */}
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2 font-semibold">Statewide Emergency Resources:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://www.gema.georgia.gov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-primary transition-colors"
                aria-label="Visit Georgia Emergency Management Agency website (opens in new tab)"
              >
                Georgia Emergency Management Agency (GEMA)
                <ExternalLink className="h-3 w-3" />
              </a>
              <a 
                href="https://www.ready.ga.gov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-primary transition-colors"
                aria-label="Visit Ready Georgia website (opens in new tab)"
              >
                Ready Georgia
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Insurance-Related Resources */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionHeading variant="primary" centered className="mb-4">
              Insurance-Related Resources
            </SectionHeading>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Georgia Office of Insurance */}
            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Georgia Office of Insurance and Safety Fire Commissioner
              </h3>
              <p className="text-muted-foreground mb-3">
                Consumer assistance, complaints, and insurance information.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a 
                  href="https://www.oci.georgia.gov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent hover:text-primary transition-colors"
                  aria-label="Visit Georgia Office of Insurance website (opens in new tab)"
                >
                  www.oci.georgia.gov
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a 
                  href="tel:+14046562070" 
                  className="inline-flex items-center gap-1 text-accent hover:text-primary transition-colors"
                  aria-label="Call Georgia Office of Insurance at (404) 656-2070"
                >
                  <Phone className="h-4 w-4" />
                  (404) 656-2070
                </a>
              </div>
            </div>

            {/* Accident Report */}
            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Obtain an Accident Report
              </h3>
              <p className="text-muted-foreground">
                Request copies of accident reports from the responding agency (Floyd County Sheriff, Rome Police, or Floyd County Police). Georgia accident reports can also be requested online through the Georgia Open Records portal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Bottom CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-primary-light text-white">
        <div className="container-custom text-center">
          <SectionHeading variant="white" centered className="mb-4">
            Questions About Your Coverage?
          </SectionHeading>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            If you've been in an accident or need help understanding your policy, we're here. Contact Coffey Agencies — your local insurance team in Rome, GA.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-md">
                Contact Us
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-white/90">Or call us:</span>
              <TrackedPhone
                phone="(706) 784-6511"
                phoneRaw="7067846511"
                location="Rome, GA"
                office="rome"
                pageType="resources-rome"
                pageUrl={location.pathname}
                className="font-semibold hover:text-white/80 transition-colors"
                ariaLabel="Call Rome office at (706) 784-6511"
              >
                (706) 784-6511
              </TrackedPhone>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/90">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Licensed in AL & GA</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Hablamos Español</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Family Owned</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>100+ Years Combined Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-muted/30">
        <div className="container-custom">
          <p className="text-center text-sm text-muted-foreground italic max-w-4xl mx-auto">
            Information is provided for convenience and may change. Always contact the office directly to confirm hours, locations, and current procedures.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default RomeGAResources;
