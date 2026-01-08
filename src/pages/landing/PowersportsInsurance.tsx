import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, MapPin, Clock, Star, Shield, Users, Headphones, X, Check, Car, Bike } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrackedPhone } from "@/components/shared/TrackedPhone";

// Asset imports
import logoSvg from "@/assets/powersports/logo.svg";
import heroUtv from "@/assets/powersports/hero-utv.png";
import heroCombo from "@/assets/powersports/hero-combo.png";
import heroAtv from "@/assets/powersports/hero-atv.png";
import heroGolfcart from "@/assets/powersports/hero-golfcart.png";
import heroMotorcycle from "@/assets/powersports/hero-motorcycle.png";
import codyCoffey from "@/assets/powersports/cody-coffey.png";
import crystalBrozio from "@/assets/powersports/crystal-brozio.jpg";
import kathySewell from "@/assets/powersports/kathy-sewell.jpg";
import kimberlyFletcher from "@/assets/powersports/kimberly-fletcher.jpg";
import mariaRochaGuzman from "@/assets/powersports/maria-rocha-guzman.jpg";
import centreOffice from "@/assets/powersports/centre-office.png";
import romeOffice from "@/assets/powersports/rome-office.jpg";

// Configuration
const headlines: Record<string, string> = {
  utv: "Protect Your Side-by-Side Without the Call Center Runaround",
  golfcart: "Golf Cart Insurance That Actually Covers What Matters",
  motorcycle: "Real Coverage for Your Harley from Local Agents",
  atv: "ATV Insurance Made Simple. Local Service, Real Protection.",
  default: "Affordable Insurance for Your Toys in Alabama & Georgia"
};

const heroImages: Record<string, string> = {
  utv: heroUtv,
  golfcart: heroGolfcart,
  motorcycle: heroMotorcycle,
  atv: heroAtv,
  default: heroCombo
};

const phones: Record<string, { display: string; raw: string }> = {
  al: { display: "(256) 418-4076", raw: "2564184076" },
  ga: { display: "(706) 784-6512", raw: "7067846512" }
};

const teamMembers = [
  { name: "Cody Coffey", role: "Agency Owner", image: codyCoffey },
  { name: "Kimberly Fletcher", role: "Office Manager & Senior Sales Producer", image: kimberlyFletcher },
  { name: "Crystal Brozio", role: "Customer Service Manager", image: crystalBrozio },
  { name: "Maria Rocha-Guzman", role: "Senior Sales Producer (Bilingual)", image: mariaRochaGuzman },
  { name: "Kathy Sewell", role: "Customer Service Specialist", image: kathySewell }
];

const reviews = [
  {
    text: "Cody made switching from GEICO painless. Saved $400/year on my side-by-side and truck combo.",
    name: "Mark T.",
    location: "Centre, AL"
  },
  {
    text: "Finally, an agent who actually understands powersports. No call centers, no runaround.",
    name: "Jennifer S.",
    location: "Rome, GA"
  },
  {
    text: "They handled my golf cart claim in 3 days. Try getting that from a 1-800 number.",
    name: "David R.",
    location: "Cedartown, GA"
  }
];

const coverageTypes = [
  { icon: Car, title: "UTV / Side-by-Side", brands: "Polaris, Can-Am, Kawasaki" },
  { icon: Car, title: "Golf Carts", brands: "Gas & electric carts" },
  { icon: Bike, title: "Motorcycles", brands: "Harley, Indian, Sport bikes" },
  { icon: Car, title: "ATVs", brands: "Honda, Yamaha, Suzuki" }
];

const PowersportsInsurance = () => {
  const [searchParams] = useSearchParams();
  const [isScrolled, setIsScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const product = searchParams.get("product") || "default";
  const loc = searchParams.get("loc") || "al";

  // UTM tracking parameters
  const utmSource = searchParams.get("utm_source") || "";
  const utmMedium = searchParams.get("utm_medium") || "";
  const utmCampaign = searchParams.get("utm_campaign") || "";
  const utmContent = searchParams.get("utm_content") || "";

  const currentPhone = phones[loc] || phones.al;
  const currentHeadline = headlines[product] || headlines.default;
  const currentHeroImage = heroImages[product] || heroImages.default;

  // Scroll listener for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // CallRail script injection
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.callrail.com/companies/336828025/4457cb949d655e0a9fe4/12/swap.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString()
    })
      .then(() => setFormSubmitted(true))
      .catch((error) => console.error("Form submission error:", error));
  };

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Powersports Insurance | Coffey Insurance Agency</title>
        <meta
          name="description"
          content="Get affordable powersports insurance for UTVs, ATVs, golf carts, and motorcycles. Local agents in Alabama and Georgia."
        />
      </Helmet>

      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-3" : "bg-white/95 py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <img src={logoSvg} alt="Coffey Insurance Agency" className="h-10 md:h-12" />
          <TrackedPhone
            phone={currentPhone.display}
            phoneRaw={currentPhone.raw}
            location={loc === "ga" ? "Rome, GA" : "Centre, AL"}
            office={loc === "ga" ? "rome" : "centre"}
            pageType="landing_powersports"
            pageUrl={window.location.href}
          >
            <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </TrackedPhone>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative min-h-[600px] md:min-h-[700px] flex items-center pt-24 pb-16"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url(${currentHeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            {currentHeadline}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Skip the 1-800 numbers. Talk to a real person at our Centre or Rome office.
          </p>
          <TrackedPhone
            phone={currentPhone.display}
            phoneRaw={currentPhone.raw}
            location={loc === "ga" ? "Rome, GA" : "Centre, AL"}
            office={loc === "ga" ? "rome" : "centre"}
            pageType="landing_powersports"
            pageUrl={window.location.href}
          >
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Get a Quote in 5 Minutes
            </Button>
          </TrackedPhone>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-12 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span>Since 2009</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent fill-accent" />
              <span>4.7 Stars</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              <span>Local Agents</span>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Gap Education */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-foreground">
            The Difference Is Clear
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* What You Get Online */}
            <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-red-200">
              <h3 className="text-xl font-bold mb-6 text-red-600 flex items-center gap-2">
                <X className="w-6 h-6" />
                What You Get Online
              </h3>
              <ul className="space-y-4">
                {[
                  "Cookie-cutter policies that miss your upgrades",
                  "Endless hold music and call transfers",
                  "Denied claims for \"policy exclusions\"",
                  "Zero help when you actually need it"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What You Get With Us */}
            <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-green-200">
              <h3 className="text-xl font-bold mb-6 text-green-600 flex items-center gap-2">
                <Check className="w-6 h-6" />
                What You Get With Us
              </h3>
              <ul className="space-y-4">
                {[
                  "Custom coverage for your exact setup",
                  "Direct line to someone who knows your name",
                  "Claims advocacy from day one",
                  "Local agents who ride too"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-foreground">
            What We Cover
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            From weekend trail rides to daily golf cart commutes, we've got you covered.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {coverageTypes.map((type, i) => (
              <div
                key={i}
                className="bg-muted rounded-xl p-6 text-center hover:shadow-lg transition-shadow flex flex-col items-center min-h-[220px]"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                  <type.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-bold text-foreground text-base md:text-lg leading-tight mb-2">
                    {type.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{type.brands}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <TrackedPhone
              phone={currentPhone.display}
              phoneRaw={currentPhone.raw}
              location={loc === "ga" ? "Rome, GA" : "Centre, AL"}
              office={loc === "ga" ? "rome" : "centre"}
              pageType="landing_powersports"
              pageUrl={window.location.href}
            >
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Call to Discuss Your Setup
              </Button>
            </TrackedPhone>
          </div>
        </div>
      </section>

      {/* Meet Your Team */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Meet Your Team
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Real people. Real expertise. Really easy to reach.
          </p>

          {/* Team Members */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-16 max-w-5xl mx-auto">
            {teamMembers.map((member, i) => (
              <div key={i} className={`text-center ${i === 4 ? 'col-span-2 md:col-span-1 max-w-[144px] mx-auto md:max-w-none' : ''}`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover mx-auto mb-3 border-4 border-white shadow-lg"
                />
                <h3 className="font-semibold text-foreground text-sm md:text-base leading-tight">
                  {member.name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-snug mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

          {/* Office Photos */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={centreOffice}
                alt="Coffey Insurance Agency - Centre, AL Office"
                className="w-full h-48 md:h-56 object-cover"
              />
              <div className="bg-white p-4 text-center">
                <h3 className="font-semibold text-sm text-foreground">Centre, AL Office</h3>
                <p className="text-sm text-muted-foreground">1913 W Main Street</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={romeOffice}
                alt="Coffey Insurance Agency - Rome, GA Office"
                className="w-full h-48 md:h-56 object-cover"
              />
              <div className="bg-white p-4 text-center">
                <h3 className="font-semibold text-sm text-foreground">Rome, GA Office</h3>
                <p className="text-sm text-muted-foreground">1703 Turner McCall Blvd SE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-foreground">
            What Our Customers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reviews.map((review, i) => (
              <div key={i} className="bg-muted rounded-xl p-6 md:p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{review.text}"</p>
                <p className="font-bold text-foreground">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Net Form */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Prefer We Call You?
          </h2>
          <p className="text-center mb-8 opacity-90">
            Drop your info and we'll reach out within one business day.
          </p>

          {formSubmitted ? (
            <div className="bg-white/10 rounded-xl p-8 text-center">
              <Check className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Thank You!</h3>
              <p className="opacity-90">We'll be in touch within one business day.</p>
            </div>
          ) : (
            <form
              name="powersports-quote"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleFormSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="powersports-quote" />
              <input type="hidden" name="bot-field" />
              
              {/* UTM Tracking */}
              <input type="hidden" name="utm_source" value={utmSource} />
              <input type="hidden" name="utm_medium" value={utmMedium} />
              <input type="hidden" name="utm_campaign" value={utmCampaign} />
              <input type="hidden" name="utm_content" value={utmContent} />
              
              {/* Page Context */}
              <input type="hidden" name="product" value={product} />
              <input type="hidden" name="loc" value={loc} />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <select
                name="vehicle-type"
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">What do you need covered?</option>
                <option value="utv">UTV / Side-by-Side</option>
                <option value="golfcart">Golf Cart</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="atv">ATV / Four-Wheeler</option>
                <option value="boat">Boat</option>
                <option value="other">Other / Multiple</option>
              </select>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-6"
              >
                <Headphones className="w-5 h-5 mr-2" />
                Have Cody's Team Call Me
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Visit Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Centre, AL */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.4!2d-85.6794!3d34.1522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1913%20W%20Main%20Street%2C%20Centre%2C%20AL%2035960!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Centre, AL Office Location"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Centre, AL</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>1913 W Main Street, Centre, AL 35960</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <TrackedPhone
                      phone={phones.al.display}
                      phoneRaw={phones.al.raw}
                      location="Centre, AL"
                      office="centre"
                      pageType="landing_powersports"
                      pageUrl={window.location.href}
                      className="text-primary hover:underline font-semibold"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Mon-Fri 8:30 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rome, GA */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.4!2d-85.1651!3d34.2570!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1703%20Turner%20McCall%20Blvd%20SE%2C%20Rome%2C%20GA%2030161!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rome, GA Office Location"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Rome, GA</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>1703 Turner McCall Blvd SE, Rome, GA 30161</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <TrackedPhone
                      phone={phones.ga.display}
                      phoneRaw={phones.ga.raw}
                      location="Rome, GA"
                      office="rome"
                      pageType="landing_powersports"
                      pageUrl={window.location.href}
                      className="text-primary hover:underline font-semibold"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Mon-Fri 8:30 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Protect Your Ride?
          </h2>
          <TrackedPhone
            phone={currentPhone.display}
            phoneRaw={currentPhone.raw}
            location={loc === "ga" ? "Rome, GA" : "Centre, AL"}
            office={loc === "ga" ? "rome" : "centre"}
            pageType="landing_powersports"
            pageUrl={window.location.href}
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white text-lg px-10 py-6 font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              {currentPhone.display}
            </Button>
          </TrackedPhone>
        </div>
      </section>

      {/* Sticky Mobile Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <TrackedPhone
          phone={currentPhone.display}
          phoneRaw={currentPhone.raw}
          location={loc === "ga" ? "Rome, GA" : "Centre, AL"}
          office={loc === "ga" ? "rome" : "centre"}
          pageType="landing_powersports"
          pageUrl={window.location.href}
          className="block"
        >
          <Button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-4 text-lg">
            <Phone className="w-5 h-5 mr-2" />
            Call for a Free Quote
          </Button>
        </TrackedPhone>
      </div>

      {/* Bottom padding for mobile sticky footer */}
      <div className="h-20 md:hidden" />
    </>
  );
};

export default PowersportsInsurance;
