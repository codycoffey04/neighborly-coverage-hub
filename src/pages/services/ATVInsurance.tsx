import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import { TrackedPhone } from "@/components/shared/TrackedPhone";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CompleteYourCoverage } from "@/components/shared/CompleteYourCoverage";
import {
  Phone,
  CheckCircle,
  Shield,
  Car,
  Umbrella,
  Users,
  Heart,
  Wrench,
  Mountain,
  Trees,
  MapPin,
  Truck,
  Bike,
  Star,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import atvHeroImage from "@/assets/atv-insurance-hero.jpg";

// Coverage types data
const coverageTypes = [
  {
    icon: Shield,
    title: "Liability Coverage",
    description: "Pays for bodily injury and property damage you cause to others while operating your ATV or UTV. If you crash into another rider, damage a fence, or injure a passenger, liability coverage handles the costs so you're not paying out of pocket."
  },
  {
    icon: Car,
    title: "Collision Coverage",
    description: "Repairs or replaces your vehicle after a crash with another ATV, a tree, a rock, or any obstacle. Rollovers are common on technical trails — collision coverage ensures you're not stuck with the repair bill."
  },
  {
    icon: Umbrella,
    title: "Comprehensive Coverage",
    description: "Protects against non-collision losses including theft, fire, vandalism, and storm damage. ATV theft is one of the most common claims in Alabama and Georgia — comprehensive coverage pays to replace your vehicle if it's stolen."
  },
  {
    icon: Users,
    title: "Uninsured/Underinsured Motorist",
    description: "Protects you when another rider causes damage but lacks insurance. Since ATV insurance isn't legally required in either state, many riders on public trails have no coverage at all."
  },
  {
    icon: Heart,
    title: "Medical Payments Coverage",
    description: "Handles medical expenses for you and your passengers regardless of fault — critical given the injury risks of off-road riding."
  },
  {
    icon: Wrench,
    title: "Custom Parts & Accessories",
    description: "Protects aftermarket upgrades like lift kits, wheels, winches, LED light bars, sound systems, and snorkel kits. Standard policies include limited accessory coverage, but you can increase limits to match your investment."
  }
];

// Local trails data
const localTrails = [
  {
    icon: Mountain,
    name: "Indian Mountain ATV Park",
    location: "Piedmont, AL",
    description: "One of the largest off-road parks in the South at 4,700 acres, straddling the Alabama-Georgia border. Miles of trails for ATVs, UTVs, and dirt bikes plus camping and fishing. This is where Cherokee County riders spend their weekends."
  },
  {
    icon: Trees,
    name: "Highland Park Off-Road Resort",
    location: "Cedartown, GA",
    description: "85-90 miles of one-way trails rated beginner to expert in Northwest Georgia. Motocross tracks, scenic overlooks, and family-friendly terrain make this a favorite for Rome-area riders."
  },
  {
    icon: MapPin,
    name: "Houston Valley OHV Trails",
    location: "Near Dalton, GA",
    description: "The largest U.S. Forest Service OHV system in Georgia with 25 miles of wooded trails. Daily or annual permit required."
  },
  {
    icon: Mountain,
    name: "Choccolocco Mountain ORV Park",
    location: "Jacksonville, AL",
    description: "450 acres of rugged mountain trails in Calhoun County. Terrain ranges from moderate to extreme, including rock crawling for experienced riders."
  },
  {
    icon: Trees,
    name: "The Ridge Outdoor Adventure Park",
    location: "Springville, AL",
    description: "25+ miles of ATV/UTV trails plus motocross tracks southwest of Gadsden."
  },
  {
    icon: MapPin,
    name: "Buck's Pocket State Park OHV Trail",
    location: "DeKalb County, AL",
    description: "A scenic 6.3-mile family-friendly trail northeast of Centre with creek crossings and hardwood forest."
  }
];

// Vehicles we insure
const vehicleTypes = [
  {
    icon: Truck,
    title: "ATVs / Four-Wheelers / Quads",
    description: "Single-rider or tandem-seat vehicles with handlebar steering. From utility models for farm work to sport quads for trail riding, four-wheeler insurance covers them all."
  },
  {
    icon: Truck,
    title: "UTVs / Side-by-Sides",
    description: "Polaris Rangers, RZRs, Can-Am Mavericks, Defenders, Honda Pioneers, Kawasaki Mules, and other side-by-side vehicles with steering wheels and bench or bucket seating. UTV insurance addresses higher vehicle values and passenger liability."
  },
  {
    icon: Bike,
    title: "Dirt Bikes / Off-Road Motorcycles",
    description: "Two-wheeled off-road vehicles for motocross and single-track trails. Many ATV owners also own dirt bikes — we can bundle coverage for both."
  },
  {
    icon: Truck,
    title: "Golf Carts",
    description: "Modified or lifted golf carts used in lake communities, campgrounds, or off-road parks."
  },
  {
    icon: Truck,
    title: "Youth ATVs",
    description: "Age-appropriate vehicles for younger riders. Coverage protects your investment and provides liability for supervised riding."
  }
];

// Why you need coverage
const whyNeedCoverage = [
  "Many trails and parks require liability insurance — Indian Mountain, Highland Park, and other riding areas may require proof of coverage",
  "Lenders require full coverage if you finance your ATV or UTV",
  "You're financially responsible for any injuries or damage you cause — without insurance, that comes out of your pocket",
  "Theft is common — ATVs and UTVs are high-value targets, and comprehensive coverage pays to replace stolen vehicles"
];

// Ways to save
const savingsTips = [
  {
    title: "Bundle with Home or Auto",
    description: "Multi-policy discounts typically save 5-15% on your ATV insurance premium. Many customers insure their truck, home, and side-by-side together."
  },
  {
    title: "Complete a Safety Course",
    description: "ATV Safety Institute courses may qualify you for insurance discounts while making you a safer rider."
  },
  {
    title: "Choose Higher Deductibles",
    description: "Raising your deductible from $250 to $500 or $1,000 lowers your premium."
  },
  {
    title: "Insure Multiple Vehicles Together",
    description: "Own an ATV and a dirt bike? Insuring both on one policy often costs less than separate policies."
  },
  {
    title: "Maintain Continuous Coverage",
    description: "Gaps in coverage can raise future premiums. Even during winter storage, keep at least comprehensive coverage active to protect against theft and storm damage."
  }
];

// FAQs
const faqs = [
  {
    question: "Is ATV insurance required in Alabama?",
    answer: "No. Alabama does not require ATV insurance by law for off-road use. However, trails, parks, and lenders often require coverage."
  },
  {
    question: "Is ATV insurance required in Georgia?",
    answer: "No. Georgia has no legal requirement for ATV insurance off-road. Georgia's 2023 MPOHV law requires insurance only for UTVs registered for limited on-road use."
  },
  {
    question: "Do I need full coverage on a financed ATV?",
    answer: "Yes. Lenders require comprehensive and collision coverage until the loan is paid off."
  },
  {
    question: "Does ATV insurance cover accidents on private property?",
    answer: "Yes. Your ATV insurance covers accidents on your own property, a friend's land, or anywhere you have permission to ride."
  },
  {
    question: "Does ATV insurance cover rollover damage?",
    answer: "Yes. Collision coverage pays for rollover damage — one of the most common ATV/UTV accidents on trails."
  },
  {
    question: "Does ATV insurance cover theft?",
    answer: "Yes. Comprehensive coverage protects against theft whether your ATV is stolen from your garage, a trailer, or a trailhead parking lot."
  },
  {
    question: "Does ATV insurance cover passengers?",
    answer: "Yes. Liability coverage protects you if a passenger is injured, and medical payments coverage can help with their medical expenses regardless of fault."
  },
  {
    question: "Do I need insurance to ride at ATV parks?",
    answer: "Many parks require liability coverage. Check with each park before you ride — Indian Mountain and Highland Park may have specific requirements."
  }
];

// Alabama cities
const alabamaCities = [
  { name: "Birmingham", slug: "birmingham-al" },
  { name: "Montgomery", slug: "montgomery-al" },
  { name: "Mobile", slug: "mobile-al" },
  { name: "Gadsden", slug: null },
  { name: "Anniston", slug: null },
  { name: "Jacksonville", slug: null },
  { name: "Piedmont", slug: null },
  { name: "Centre", slug: "centre-al" }
];

// Georgia cities
const georgiaCities = [
  { name: "Atlanta", slug: "atlanta-ga" },
  { name: "Rome", slug: "rome-ga" },
  { name: "Cedartown", slug: "cedartown-ga" },
  { name: "Cartersville", slug: "cartersville-ga" },
  { name: "Calhoun", slug: "calhoun-ga" },
  { name: "Dalton", slug: null },
  { name: "Canton", slug: "canton-ga" },
  { name: "Dallas", slug: "dallas-ga" }
];

// Testimonials
const testimonials = [
  {
    name: "Jake T.",
    location: "Piedmont, AL",
    quote: "Got my RZR insured through Coffey and they actually understood what I needed. They ride the same trails at Indian Mountain — that's real local knowledge.",
    rating: 5
  },
  {
    name: "Marcus & Amy D.",
    location: "Rome, GA",
    quote: "We have a Polaris Ranger and two dirt bikes for the kids. Coffey bundled everything together and saved us money while getting better coverage.",
    rating: 5
  },
  {
    name: "Tyler S.",
    location: "Centre, AL",
    quote: "My Can-Am got stolen from my trailer. Coffey handled the claim fast and I had a check in two weeks. Couldn't believe how easy they made it.",
    rating: 5
  }
];

const ATVInsurance = () => {
  const location = useLocation();

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ATV & UTV Insurance",
    "description": "Comprehensive ATV and UTV insurance coverage for four-wheelers, side-by-sides, dirt bikes, and off-road vehicles in Alabama and Georgia.",
    "provider": {
      "@type": "InsuranceAgency",
      "name": "Coffey Agencies Inc.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1913 W Main Street",
        "addressLocality": "Centre",
        "addressRegion": "AL",
        "postalCode": "35960"
      },
      "telephone": "+1-256-927-6287"
    },
    "areaServed": [
      { "@type": "State", "name": "Alabama" },
      { "@type": "State", "name": "Georgia" }
    ],
    "serviceType": "ATV Insurance"
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://coffeyagencies.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://coffeyagencies.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "ATV/UTV Insurance",
        "item": "https://coffeyagencies.com/services/atv-utv-insurance"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>ATV & UTV Insurance in Alabama & Georgia | Coffey Agencies</title>
        <meta 
          name="description" 
          content="Protect your four-wheeler, side-by-side, or dirt bike with ATV insurance from local agents who ride the same trails. Coverage for Indian Mountain, Highland Park, and trails across Alabama & Georgia." 
        />
        <meta name="keywords" content="ATV insurance Alabama, UTV insurance, side-by-side insurance, four-wheeler insurance, off-road vehicle insurance, dirt bike insurance, Polaris insurance, Can-Am insurance" />
        <link rel="canonical" href="https://coffeyagencies.com/services/atv-utv-insurance" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section 
          className="relative min-h-[500px] md:min-h-[550px] flex items-end bg-cover bg-center"
          style={{ backgroundImage: `url(${atvHeroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          
          <div className="container-custom relative z-10 pb-12 pt-24">
            {/* Breadcrumbs */}
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-white/80">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><ChevronRight className="h-4 w-4" /></li>
                <li><Link to="/services/auto-insurance" className="hover:text-white transition-colors">Services</Link></li>
                <li><ChevronRight className="h-4 w-4" /></li>
                <li className="text-white font-medium">ATV/UTV Insurance</li>
              </ol>
            </nav>
            
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                ATV & UTV Insurance in Alabama & Georgia
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed drop-shadow">
                Protect your four-wheeler, side-by-side, or dirt bike on the trails at Indian Mountain, Highland Park, and riding areas across both states. Get a quote from local agents who ride the same trails you do.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-6">
                <Link to="/#quote-form">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-lg">
                    Get Your Free Quote
                  </Button>
                </Link>
                <TrackedPhone
                  phone="(256) 927-6287"
                  phoneRaw="2569276287"
                  location="Centre, AL"
                  office="centre"
                  pageType="service-atv"
                  pageUrl={location.pathname}
                  className="inline-flex items-center gap-2 bg-white hover:bg-white text-primary border border-primary shadow-sm hover:shadow-md px-4 py-2 rounded-md font-medium transition-all"
                  ariaLabel="Call Centre, Alabama office at (256) 927-6287"
                >
                  <Phone className="h-4 w-4" />
                  (256) 927-6287
                </TrackedPhone>
                <TrackedPhone
                  phone="(706) 784-6511"
                  phoneRaw="7067846511"
                  location="Rome, GA"
                  office="rome"
                  pageType="service-atv"
                  pageUrl={location.pathname}
                  className="inline-flex items-center gap-2 bg-white hover:bg-white text-primary border border-primary shadow-sm hover:shadow-md px-4 py-2 rounded-md font-medium transition-all"
                  ariaLabel="Call Rome, Georgia office at (706) 784-6511"
                >
                  <Phone className="h-4 w-4" />
                  (706) 784-6511
                </TrackedPhone>
              </div>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-4 text-white text-sm">
                <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-accent" /> Licensed in AL & GA</span>
                <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-accent" /> Hablamos Español</span>
                <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-accent" /> Family Owned</span>
                <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-accent" /> 100+ Years Combined Experience</span>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Types Section */}
        <section className="section-spacing bg-background">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionHeading centered>What Does ATV/UTV Insurance Cover?</SectionHeading>
              <p className="text-lg text-muted-foreground mt-4">
                Off-road vehicle insurance protects you financially when accidents happen on the trail, on your property, or anywhere you ride. A comprehensive ATV insurance policy typically includes:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coverageTypes.map((coverage, index) => {
                const Icon = coverage.icon;
                return (
                  <Card key={index} className="border border-border/50 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{coverage.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{coverage.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Local Trails Section */}
        <section className="section-spacing bg-muted/30">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionHeading centered>Local Trails and Riding Areas We Serve</SectionHeading>
              <p className="text-lg text-muted-foreground mt-4">
                Our ATV insurance expertise covers the most popular off-road destinations in North Alabama and Northwest Georgia.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {localTrails.map((trail, index) => {
                const Icon = trail.icon;
                return (
                  <Card key={index} className="border border-border/50 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{trail.name}</h3>
                          <p className="text-accent text-sm font-medium mb-2">{trail.location}</p>
                          <p className="text-muted-foreground text-sm leading-relaxed">{trail.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Geographic Content: Counties and ZIP Codes */}
        <section className="section-spacing bg-background">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto space-y-8">
              <SectionHeading centered>Off-Road Communities and Trail Access</SectionHeading>
              
              <div className="prose prose-slate max-w-none space-y-4">
                <p className="text-muted-foreground">
                  ATV and UTV insurance needs across our service territory reflect each county's terrain, trail access, and off-road recreation culture. <strong>Cherokee County</strong> offers some of Alabama's best ATV riding—Indian Mountain ATV Park near Jacksonville provides 200+ acres of professionally maintained trails attracting riders from across the Southeast. The park requires proof of insurance for entry, making liability coverage essential for Cherokee County riders. Beyond the park, private land ownership is common—many rural residents in Cherokee County own acreage where UTVs serve as farm and ranch vehicles alongside recreational use. Coverage here must address both utility use (a Polaris Ranger checking cattle or hauling feed) and recreational riding (a Can-Am Maverick hitting trails on weekends).
                </p>
                
                <p className="text-muted-foreground">
                  Cherokee County's rugged terrain—mountain foothills, creek crossings, and rocky trails—creates specific insurance considerations. Comprehensive coverage protects against rollovers (common on steep terrain), collisions with trees or rocks, and damage from creek crossings gone wrong. The county's weather patterns (spring thunderstorms, occasional ice in winter) mean stored ATVs face storm damage risks making comprehensive coverage valuable even during off-season. Many Cherokee County UTV owners customize vehicles with lift kits, winches, LED lights, and expensive tire upgrades—accessory coverage protecting these additions is crucial.
                </p>
                
                <p className="text-muted-foreground">
                  <strong>Etowah County</strong> features Highland Park Off-Road Resort near Gadsden—220 acres of trails, mud pits, and hill climbs popular with sport UTV enthusiasts. The park sees Polaris RZRs, Can-Am Mavericks, and Yamaha YXZs tackling challenging terrain on summer weekends. Etowah County riders often carry higher-value sport UTVs ($20,000-$35,000 machines) requiring agreed value coverage to protect investments. The county's mix of public trails and private riding areas means insurance needs to cover diverse use cases—from competitive trail riding to farm utility work.
                </p>
                
                <p className="text-muted-foreground">
                  <strong>Jefferson County</strong> (Birmingham area) has limited public trail access but substantial ATV/UTV ownership for rural property management and weekend trips to Cherokee or Etowah county trail parks. Birmingham-area owners typically trailer machines to riding destinations, making trailer coverage and in-transit protection important. The county's relative affluence means many own premium UTVs—$30,000+ Polaris General or Can-Am Defender models used for both recreation and managing hunting property.
                </p>
                
                <p className="text-muted-foreground">
                  <strong>Tuscaloosa County</strong> riders access private land and travel to public areas like the Sipsey Wilderness periphery. University of Alabama students and young families often own entry-level ATVs and sport quads for recreation. <strong>Madison County</strong> (Huntsville) serves as a trailering hub—aerospace professionals and defense contractors own quality machines but must travel to riding areas, requiring comprehensive coverage during transport and use.
                </p>
                
                <p className="text-muted-foreground">
                  Georgia's off-road landscape offers different opportunities. <strong>Floyd County</strong> (Rome) provides access to mountain foothills and the extensive Chattahoochee National Forest trail system within reasonable driving distance. Rome-area riders favor mid-size UTVs—Polaris Rangers and Honda Pioneers—for property management and trail riding. The county's mix of farmland and wooded areas creates demand for utility UTVs serving work purposes, meaning coverage must address both recreational risks and farm-use liability.
                </p>
                
                <p className="text-muted-foreground">
                  <strong>Bartow County</strong> (Cartersville) offers excellent trail access—Houston Valley ORV Park provides 300+ acres of trails near Cartersville attracting riders throughout northwest Georgia. The park requires insurance verification, and its challenging terrain (creek crossings, hill climbs, mud pits) creates genuine risk justifying comprehensive coverage. Bartow County's I-75 corridor position means many Atlanta-area riders trailer machines here for weekend riding.
                </p>
                
                <p className="text-muted-foreground">
                  <strong>Fulton, Gwinnett, Cobb, and DeKalb counties</strong> contribute metro Atlanta's substantial ATV/UTV ownership despite limited local riding areas. These suburban and urban owners primarily trailer to northwest Georgia mountains, Alabama trail parks, or family land in rural Georgia. Coverage needs emphasize in-transit protection, theft prevention (ATVs and UTVs in suburban garages and storage units attract thieves), and comprehensive coverage for machines often stored exposed to weather.
                </p>
              </div>
              
              <div className="prose prose-slate max-w-none space-y-4">
                <p className="text-muted-foreground">
                  ZIP code patterns reveal specific off-road communities and coverage needs. <strong>35960</strong> (Centre in Cherokee County) represents Alabama's ATV/UTV insurance epicenter—proximity to Indian Mountain ATV Park, abundant private riding land, and rural culture where UTVs serve as essential farm vehicles create dense machine ownership. Typical coverage here includes sport ATVs ($8,000-$15,000), utility UTVs ($15,000-$25,000 for Polaris Rangers, Honda Pioneers, or Kawasaki Mules used for farm work), and sport UTVs ($20,000-$35,000 for performance machines). Centre-area riders need liability coverage for trail park entry, comprehensive protection against rollover damage on challenging terrain, and often accessory coverage for customized machines.
                </p>
                
                <p className="text-muted-foreground">
                  <strong>35215</strong> (northeast Birmingham) represents suburban/exurban ownership where UTVs serve hunting property management and weekend recreation. Owners here typically trailer machines to riding destinations—Cherokee County parks, private Blount County land, or even Tennessee trail systems—requiring coverage during both storage at home and use at distant locations. Theft coverage is important given suburban storage; a $25,000 UTV in a garage or carport can attract thieves, especially if customized with visible accessories.
                </p>
                
                <p className="text-muted-foreground">
                  <strong>35242</strong> (Hoover) and <strong>35173</strong> (Trussville) show affluent recreational ownership—families purchasing premium side-by-sides ($30,000-$45,000 for top-end Polaris or Can-Am models) for weekend adventures at trail parks or managing recreational property in surrounding counties. These higher-value machines justify agreed value coverage preventing depreciation disputes after total losses. Many Hoover and Trussville owners also carry significant accessory coverage—$5,000-$8,000 in added equipment (winches, audio systems, roof racks, performance tires) requires specific protection beyond base coverage.
                </p>
                
                <p className="text-muted-foreground">
                  Georgia's <strong>30120</strong> (Cartersville in Bartow County) serves Houston Valley ORV Park's local market—riders here range from entry-level ATV owners to serious sport UTV enthusiasts running $30,000+ machines on technical trails. The park's insurance requirement drives local coverage purchases, and agents in Cartersville understand the specific liability limits (typically $25,000 minimum bodily injury per person) parks demand. Cartersville-area riders also frequently own multiple machines—a family might have a utility UTV for property work plus two sport ATVs for trail riding—requiring aggregate coverage strategies.
                </p>
                
                <p className="text-muted-foreground">
                  <strong>30044</strong> and <strong>30043</strong> (Lawrenceville in Gwinnett County) represent suburban Atlanta ownership patterns—UTVs stored at suburban homes between trips to north Georgia mountains or northwest Georgia trail parks. These households typically own mid-range machines ($18,000-$28,000) with financed purchases often requiring comprehensive and collision coverage per lender mandates. Storage in Gwinnett's newer subdivisions means HOA restrictions sometimes apply—some neighborhoods prohibit visible ATV/UTV storage, pushing machines into garages or storage facilities where theft protection becomes crucial.
                </p>
                
                <p className="text-muted-foreground">
                  <strong>30161</strong> (Rome in Floyd County) shows utility-focused ownership—farmers, ranchers, and property managers using UTVs as work vehicles on acreage. Coverage here emphasizes liability protection (employees or family operating machines on private land), physical damage from work use (fence-line maintenance, pasture checks, equipment hauling), and theft prevention for machines often stored in barns or outbuildings. Rome-area recreational riders also trailer to Chattahoochee National Forest trails and Alabama parks, requiring flexible navigational limits that don't restrict coverage to specific properties.
                </p>
                
                <p className="text-muted-foreground">
                  Metro Atlanta ZIPs (<strong>30303</strong>, <strong>30349</strong>, and others) contribute weekend warriors who trailer significant distances for riding opportunities. Urban storage creates heightened theft risk—sport UTVs stored in apartment complex parking or even home driveways can disappear quickly. These owners need comprehensive coverage emphasizing theft protection alongside traditional collision and rollover coverage for trail use.
                </p>
                
                <p className="text-muted-foreground">
                  Across all locations, ATV/UTV insurance typically costs $100-$400 annually depending on machine value, use (recreational vs. farm utility), and coverage limits selected. Bundling with home and auto policies delivers 10-15% multi-policy discounts. Given trail park insurance requirements, the reality of rollover and collision risks on challenging terrain, and theft exposure for machines often stored in barns or garages, comprehensive coverage proves its value. Whether running a Polaris Ranger along fence lines in Cherokee County, a Can-Am Maverick through Houston Valley's mud pits, or a Honda Pioneer on north Georgia mountain trails, proper insurance protects substantial investments and ensures access to premier riding destinations requiring proof of coverage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ATV/UTV Insurance Guide CTA */}
        <section className="section-spacing bg-muted/30">
          <div className="container-custom max-w-4xl text-center">
            <SectionHeading centered className="mb-4">
              New to ATV & UTV Insurance?
            </SectionHeading>
            <p className="text-lg text-muted-foreground mb-6">
              See what coverage you actually need for four-wheelers, side-by-sides, and dirt bikes in Alabama and Georgia.
            </p>
            <Button asChild>
              <Link to="/learn/atv-utv-insurance-guide">
                Read the ATV & UTV Insurance Guide
              </Link>
            </Button>
          </div>
        </section>

        {/* Vehicles We Insure Section */}
        <section className="section-spacing bg-background">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionHeading centered>What Vehicles Do We Insure?</SectionHeading>
              <p className="text-lg text-muted-foreground mt-4">
                We provide ATV insurance and UTV insurance for every off-road vehicle common to our region.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicleTypes.map((vehicle, index) => {
                const Icon = vehicle.icon;
                return (
                  <Card key={index} className="border border-border/50 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{vehicle.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{vehicle.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Do I Need ATV Insurance Section */}
        <section className="section-spacing bg-primary text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <SectionHeading centered variant="white">Do I Need ATV Insurance in Alabama or Georgia?</SectionHeading>
              <p className="text-lg text-white/90 text-center mt-4 mb-8">
                ATV insurance is not legally required in Alabama or Georgia for off-road use on private property. However, you likely still need coverage because:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {whyNeedCoverage.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <p className="text-white/90">{reason}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center bg-white/10 p-6 rounded-lg">
                <p className="text-xl font-semibold mb-2">
                  The average ATV insurance policy costs $100-300 per year for liability coverage, or $200-500 for full coverage.
                </p>
                <p className="text-white/80">
                  That's less than a dollar a day to protect a vehicle worth thousands.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ways to Save Section */}
        <section className="section-spacing bg-muted/30">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionHeading centered>How Can I Save on ATV/UTV Insurance?</SectionHeading>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savingsTips.map((tip, index) => (
                <Card key={index} className="border border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <span className="text-accent font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{tip.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-spacing bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <SectionHeading centered>Frequently Asked Questions</SectionHeading>
              <p className="text-lg text-muted-foreground text-center mt-4 mb-8">
                Common questions about ATV and UTV insurance in Alabama and Georgia.
              </p>
              
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Areas We Serve Section */}
        <section className="section-spacing bg-muted/30">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionHeading centered>ATV Insurance Across Alabama & Georgia</SectionHeading>
              <p className="text-lg text-muted-foreground mt-4">
                We serve riders throughout both states from our offices in Centre, AL and Rome, GA.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Alabama */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Alabama</h3>
                <div className="flex flex-wrap gap-2">
                  {alabamaCities.map((city, index) => (
                    city.slug ? (
                      <Link
                        key={index}
                        to={`/${city.slug}`}
                        className="inline-block bg-white border border-border px-3 py-2 rounded-md text-sm hover:border-primary hover:text-primary transition-colors"
                      >
                        {city.name}
                      </Link>
                    ) : (
                      <span
                        key={index}
                        className="inline-block bg-white border border-border px-3 py-2 rounded-md text-sm text-muted-foreground"
                      >
                        {city.name}
                      </span>
                    )
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Communities near Indian Mountain, Choccolocco, and The Ridge
                </p>
              </div>
              
              {/* Georgia */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Georgia</h3>
                <div className="flex flex-wrap gap-2">
                  {georgiaCities.map((city, index) => (
                    city.slug ? (
                      <Link
                        key={index}
                        to={`/${city.slug}`}
                        className="inline-block bg-white border border-border px-3 py-2 rounded-md text-sm hover:border-primary hover:text-primary transition-colors"
                      >
                        {city.name}
                      </Link>
                    ) : (
                      <span
                        key={index}
                        className="inline-block bg-white border border-border px-3 py-2 rounded-md text-sm text-muted-foreground"
                      >
                        {city.name}
                      </span>
                    )
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Riders throughout Northwest Georgia near Highland Park and Houston Valley trails
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-spacing bg-background">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionHeading centered>What Our Customers Say</SectionHeading>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border border-border/50">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link to="/reviews" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors">
                Read All Reviews <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <CompleteYourCoverage excludeService="atv" />

        {/* Cross-Link to Learn Page */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <SectionHeading centered className="mb-6">Learn More About ATV & UTV Insurance</SectionHeading>
            <p className="text-muted-foreground mb-6">
              Want to understand liability vs full coverage, trail park requirements, and what affects your rate? Explore our comprehensive guide:
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
              <Link to="/learn/atv-utv-insurance-guide" className="text-primary font-semibold hover:underline">
                → Complete ATV/UTV Insurance Guide for AL & GA
              </Link>
              <Link to="/learn/auto-insurance-guide" className="text-primary font-semibold hover:underline">
                → Auto Insurance Guide (for tow vehicles)
              </Link>
              <Link to="/learn/bundling-home-and-auto" className="text-primary font-semibold hover:underline">
                → How Bundling Saves You Money
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-spacing bg-primary text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Protect Your ATV or UTV?</h2>
              <p className="text-lg text-white/90 mb-8">
                Get an ATV insurance quote in minutes. Whether you ride a Polaris, Can-Am, Honda, Yamaha, or Kawasaki, we'll help you find the right coverage for your vehicle, your trails, and your budget.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Link to="/#quote-form">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-lg">
                    Get Your Free Quote
                  </Button>
                </Link>
                <TrackedPhone
                  phone="(256) 927-6287"
                  phoneRaw="2569276287"
                  location="Centre, AL"
                  office="centre"
                  pageType="service-atv-cta"
                  pageUrl={location.pathname}
                  className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-primary px-6 py-3 rounded-md font-medium transition-all"
                  ariaLabel="Call Centre, Alabama office at (256) 927-6287"
                >
                  <Phone className="h-4 w-4" />
                  (256) 927-6287
                </TrackedPhone>
                <TrackedPhone
                  phone="(706) 784-6511"
                  phoneRaw="7067846511"
                  location="Rome, GA"
                  office="rome"
                  pageType="service-atv-cta"
                  pageUrl={location.pathname}
                  className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-primary px-6 py-3 rounded-md font-medium transition-all"
                  ariaLabel="Call Rome, Georgia office at (706) 784-6511"
                >
                  <Phone className="h-4 w-4" />
                  (706) 784-6511
                </TrackedPhone>
              </div>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center items-center gap-4 text-white/90 text-sm">
                <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-accent" /> Licensed in AL & GA</span>
                <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-accent" /> Hablamos Español</span>
                <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-accent" /> Family Owned</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ATVInsurance;
