import { Header } from "@/components/homepage/Header";
import { Hero } from "@/components/homepage/Hero";
import { TrustBar } from "@/components/homepage/TrustBar";
import { ServicesOverview } from "@/components/homepage/ServicesOverview";
import { WhyChooseUs } from "@/components/homepage/WhyChooseUs";
import { HowItWorks } from "@/components/homepage/HowItWorks";
import { Testimonials } from "@/components/homepage/Testimonials";
import { ServiceArea } from "@/components/homepage/ServiceArea";
import { FAQ } from "@/components/homepage/FAQ";
import { FinalCTA } from "@/components/homepage/FinalCTA";
import { Footer } from "@/components/homepage/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <ServiceArea />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
