import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home } from "lucide-react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const ThankYou = () => {
  useEffect(() => {
    // Push conversion event to dataLayer for GA4
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "generate_lead",
        form_name: "quote_request",
        page_url: window.location.pathname,
        timestamp: new Date().toISOString(),
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Thank You - Coffey Agencies</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />
      <main id="main-content" className="min-h-[70vh] bg-primary flex items-center justify-center">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-2xl mx-auto text-center text-white space-y-8">
            {/* Success Icon */}
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Thank You for Your Quote Request
            </h1>

            {/* Message */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              We've received your information and will call you within 1 business day to discuss your insurance needs.
            </p>

            {/* Return Button */}
            <div className="pt-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 h-14 px-8 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Link to="/">
                  <Home className="w-5 h-5 mr-2" />
                  Return to Homepage
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8 text-sm text-white/80">
              <span className="flex items-center gap-2 justify-center">
                <CheckCircle className="h-4 w-4 shrink-0" /> Licensed in AL & GA
              </span>
              <span className="flex items-center gap-2 justify-center">
                <CheckCircle className="h-4 w-4 shrink-0" /> Family Owned Since 2009
              </span>
              <span className="flex items-center gap-2 justify-center">
                <CheckCircle className="h-4 w-4 shrink-0" /> Hablamos Español
              </span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ThankYou;
