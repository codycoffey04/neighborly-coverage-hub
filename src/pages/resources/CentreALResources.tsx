import { Helmet } from "react-helmet";
import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/contact-hero.jpg";
import { 
  Car, 
  IdCard, 
  Shield, 
  Building2, 
  FileText, 
  AlertTriangle, 
  Heart,
  Phone,
  MapPin,
  Clock,
  ExternalLink,
  CheckCircle
} from "lucide-react";

const CentreALResources = () => {
  return (
    <>
      <Helmet>
        <title>Local Resources for Centre, AL | Cherokee County | Coffey Agencies</title>
        <meta 
          name="description" 
          content="DMV, police, courts, emergency services, and more for Cherokee County, Alabama. Your local resource guide from Coffey Agencies in Centre." 
        />
        <link rel="canonical" href="https://coffeyagencies.com/resources/centre-al" />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-end bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        
        {/* Content */}
        <div className="relative z-10 w-full py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              Local Resources for Centre, AL & Cherokee County
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Vehicle & Driver Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
            {/* Cherokee County Tag & Title Office */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Cherokee County Tag & Title Office (Probate Office)
                </h3>
                <p className="text-muted-foreground mb-4">
                  Handles vehicle registration, tag renewals, and title transfers.
                </p>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <a 
                      href="https://maps.google.com/maps?q=260+Cedar+Bluff+Rd.,+Suite+100,+Centre,+AL+35960&t=m&z=15&output=embed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      260 Cedar Bluff Rd., Suite 100, Centre, AL 35960
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                    <a 
                      href="tel:+12569273654" 
                      className="hover:text-primary transition-colors"
                      aria-label="Call Cherokee County Tag and Title Office at (256) 927-3654"
                    >
                      (256) 927-3654
                    </a>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Clock className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Monday–Friday, 8:00 AM – 5:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Centre Driver's License Office */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-4">
                  <IdCard className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Centre Driver's License Office (ALEA)
                </h3>
                <p className="text-muted-foreground mb-4">
                  Driver's license renewals, testing, and ID cards.
                </p>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <a 
                      href="https://maps.google.com/maps?q=260+Cedar+Bluff+Rd.,+Centre,+AL+35960&t=m&z=15&output=embed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      260 Cedar Bluff Rd., Centre, AL 35960
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                    <a 
                      href="tel:+12569278249" 
                      className="hover:text-primary transition-colors"
                      aria-label="Call Centre Driver's License Office at (256) 927-8249"
                    >
                      (256) 927-8249
                    </a>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Clock className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Tuesdays only, 8:30 AM – 3:30 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* External Links */}
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2 font-semibold">Alabama Statewide Resources:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://www.alea.gov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-primary transition-colors"
              >
                ALEA Driver License Division
                <ExternalLink className="h-3 w-3" />
              </a>
              <a 
                href="https://www.revenue.alabama.gov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-primary transition-colors"
              >
                AL Dept. of Revenue – Motor Vehicle Division
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Law Enforcement
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Cherokee County Sheriff's Office */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Cherokee County Sheriff's Office
                </h3>
                <p className="text-muted-foreground mb-4">
                  Non-emergency calls, accident reports, and general inquiries.
                </p>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <a 
                      href="https://maps.google.com/maps?q=110+Cedar+Bluff+Rd.,+Centre,+AL+35960&t=m&z=15&output=embed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      110 Cedar Bluff Rd., Centre, AL 35960
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                    <a 
                      href="tel:+12569273365" 
                      className="hover:text-primary transition-colors"
                      aria-label="Call Cherokee County Sheriff's Office at (256) 927-3365"
                    >
                      (256) 927-3365
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-red-600">
                    <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                    <span>Emergency: Call 911</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Centre Police Department */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Centre Police Department
                </h3>
                <p className="text-muted-foreground mb-4">
                  City of Centre law enforcement.
                </p>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <a 
                      href="https://maps.google.com/maps?q=999+W.+Main+St.,+Centre,+AL+35960&t=m&z=15&output=embed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      999 W. Main St., Centre, AL 35960
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                    <a 
                      href="tel:+12569273661" 
                      className="hover:text-primary transition-colors"
                      aria-label="Call Centre Police Department at (256) 927-3661"
                    >
                      (256) 927-3661
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Courts & Legal
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Cherokee County Courthouse */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Cherokee County Courthouse – Circuit/District Court
                </h3>
                <p className="text-muted-foreground mb-4">
                  Civil cases, criminal cases, and court records.
                </p>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <a 
                      href="https://maps.google.com/maps?q=100+W.+Main+St.,+Centre,+AL+35960&t=m&z=15&output=embed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      100 W. Main St., Centre, AL 35960
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                    <a 
                      href="tel:+12569273637" 
                      className="hover:text-primary transition-colors"
                      aria-label="Call Cherokee County Courthouse at (256) 927-3637"
                    >
                      (256) 927-3637
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Centre Municipal Court */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Centre Municipal Court
                </h3>
                <p className="text-muted-foreground mb-4">
                  City-level traffic tickets and violations.
                </p>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <a 
                      href="https://maps.google.com/maps?q=1111+W.+Main+St.,+Centre,+AL+35960&t=m&z=15&output=embed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      1111 W. Main St., Centre, AL 35960
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: Emergency Services */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Emergency Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
            {/* Cherokee County EMA */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Cherokee County Emergency Management Agency (EMA)
                </h3>
                <p className="text-muted-foreground mb-4">
                  Emergency planning, weather alerts, and disaster preparedness.
                </p>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <a 
                      href="https://maps.google.com/maps?q=260+Cedar+Bluff+Rd.,+Suite+104,+Centre,+AL+35960&t=m&z=15&output=embed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      260 Cedar Bluff Rd., Suite 104, Centre, AL 35960
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                    <a 
                      href="tel:+12569273367" 
                      className="hover:text-primary transition-colors"
                      aria-label="Call Cherokee County EMA at (256) 927-3367"
                    >
                      (256) 927-3367
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cherokee Medical Center */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-primary shadow-md flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Cherokee Medical Center
                </h3>
                <p className="text-muted-foreground mb-4">
                  24/7 emergency room and medical services.
                </p>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <a 
                      href="https://maps.google.com/maps?q=400+Northwood+Dr.,+Centre,+AL+35960&t=m&z=15&output=embed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      400 Northwood Dr., Centre, AL 35960
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                    <a 
                      href="tel:+12569275531" 
                      className="hover:text-primary transition-colors"
                      aria-label="Call Cherokee Medical Center at (256) 927-5531"
                    >
                      (256) 927-5531
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
                href="https://www.ema.alabama.gov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-primary transition-colors"
              >
                Alabama Emergency Management Agency (AEMA)
                <ExternalLink className="h-3 w-3" />
              </a>
              <a 
                href="https://www.readyalabama.gov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-primary transition-colors"
              >
                Ready Alabama
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Insurance-Related Resources
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {/* Alabama Department of Insurance */}
            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Alabama Department of Insurance
              </h3>
              <p className="text-muted-foreground mb-3">
                Consumer assistance, complaints, and insurance information.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-accent flex-shrink-0" />
                  <a 
                    href="https://www.aldoi.gov" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    www.aldoi.gov
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                  <a 
                    href="tel:+13342693550" 
                    className="hover:text-primary transition-colors"
                    aria-label="Call Alabama Department of Insurance at (334) 269-3550"
                  >
                    (334) 269-3550
                  </a>
                </div>
              </div>
            </div>

            {/* Obtain an Accident Report */}
            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Obtain an Accident Report
              </h3>
              <p className="text-muted-foreground text-sm">
                Request copies of accident reports from the Cherokee County Sheriff's Office or Centre Police Department (depending on where the accident occurred). Contact the office directly for instructions on obtaining reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Bottom CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-primary-light text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Questions About Your Coverage?
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              If you've been in an accident or need help understanding your policy, we're here. Contact Coffey Agencies — your local insurance team in Centre, AL.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                asChild 
                size="lg" 
                className="bg-white hover:bg-white text-primary hover:text-primary border border-primary shadow-sm hover:shadow-md transition-all"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
              <div className="text-white">
                <span className="text-sm">Or call us:</span>
                <div className="font-semibold text-lg">
                  <a 
                    href="tel:+12569276287" 
                    className="hover:text-secondary transition-colors"
                    aria-label="Call Centre, Alabama office at (256) 927-6287"
                  >
                    (256) 927-6287
                  </a>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4" />
                <span>Licensed in AL & GA</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4" />
                <span>Hablamos Español</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4" />
                <span>Family Owned</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4" />
                <span>100+ Years Combined Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-muted/20 py-6">
        <div className="container-custom">
          <p className="text-center text-sm text-muted-foreground italic">
            Information is provided for convenience and may change. Always contact the office directly to confirm hours, locations, and current procedures.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CentreALResources;
