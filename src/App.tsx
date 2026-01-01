import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { SkipLink } from "@/components/shared/SkipLink";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";

// Lazy load toast components (not needed for initial render, only used on form submissions)
const Toaster = lazy(() => import("@/components/ui/toaster").then(m => ({ default: m.Toaster })));
const Sonner = lazy(() => import("@/components/ui/sonner").then(m => ({ default: m.Toaster })));

// Lazy load components that only appear after user interaction (scroll)
const MobileCTABar = lazy(() => import("@/components/shared/MobileCTABar").then(m => ({ default: m.MobileCTABar })));
const ScrollToTopButton = lazy(() => import("@/components/shared/ScrollToTopButton").then(m => ({ default: m.ScrollToTopButton })));

// Eager load homepage for fastest initial load
import Index from "./pages/Index";

// Lazy load all other pages for code splitting with error handling
// Using a helper function to add retry logic for failed chunk loads
const lazyWithRetry = (componentImport: () => Promise<any>) =>
  lazy(() =>
    componentImport().catch((error) => {
      // Retry once after a short delay
      return new Promise((resolve) => {
        setTimeout(() => {
          componentImport()
            .then(resolve)
            .catch((retryError) => {
              console.error("Failed to load route after retry:", retryError);
              // Return error component as fallback
              throw retryError;
            });
        }, 1000);
      });
    })
  );

const About = lazyWithRetry(() => import("./pages/About"));
const Contact = lazyWithRetry(() => import("./pages/Contact"));
const FAQ = lazyWithRetry(() => import("./pages/FAQ"));
const Reviews = lazyWithRetry(() => import("./pages/Reviews"));
const Learn = lazyWithRetry(() => import("./pages/Learn"));
const LearnArticle = lazyWithRetry(() => import("./pages/LearnArticle"));
const Services = lazyWithRetry(() => import("./pages/Services"));
const ServiceAreas = lazyWithRetry(() => import("./pages/ServiceAreas"));
const AutoInsurance = lazyWithRetry(() => import("./pages/services/AutoInsurance"));
const HomeInsurance = lazyWithRetry(() => import("./pages/services/HomeInsurance"));
const RentersInsurance = lazyWithRetry(() => import("./pages/services/RentersInsurance"));
const CondoInsurance = lazyWithRetry(() => import("./pages/services/CondoInsurance"));
const LifeInsurance = lazyWithRetry(() => import("./pages/services/LifeInsurance"));
const MotorcycleInsurance = lazyWithRetry(() => import("./pages/services/MotorcycleInsurance"));
const BoatInsurance = lazyWithRetry(() => import("./pages/services/BoatInsurance"));
const ATVInsurance = lazyWithRetry(() => import("./pages/services/ATVInsurance"));
const MobileHomeInsurance = lazyWithRetry(() => import("./pages/services/MobileHomeInsurance"));
const CityPage = lazyWithRetry(() => import("./pages/CityPage"));
const Claims = lazyWithRetry(() => import("./pages/Claims"));
const CentreALResources = lazyWithRetry(() => import("./pages/resources/CentreALResources"));
const RomeGAResources = lazyWithRetry(() => import("./pages/resources/RomeGAResources"));
const NotFound = lazyWithRetry(() => import("./pages/NotFound"));
const Privacy = lazyWithRetry(() => import("./pages/Privacy"));
const Terms = lazyWithRetry(() => import("./pages/Terms"));
const Refer = lazyWithRetry(() => import("./pages/Refer"));
const ThankYou = lazyWithRetry(() => import("./pages/ThankYou"));

const App = () => (
  <HelmetProvider>
    <TooltipProvider>
      <Suspense fallback={null}>
        <Toaster />
        <Sonner />
      </Suspense>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <SkipLink />
        <ScrollToTop />
        <Suspense fallback={null}>
          <MobileCTABar />
          <ScrollToTopButton />
        </Suspense>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/learn/:slug" element={<LearnArticle />} />
              <Route path="/service-areas" element={<ServiceAreas />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/auto-insurance" element={<AutoInsurance />} />
              <Route path="/services/home-insurance" element={<HomeInsurance />} />
              <Route path="/services/renters-insurance" element={<RentersInsurance />} />
              <Route path="/services/condo-insurance" element={<CondoInsurance />} />
              <Route path="/services/life-insurance" element={<LifeInsurance />} />
              <Route path="/services/motorcycle-insurance" element={<MotorcycleInsurance />} />
              <Route path="/services/boat-insurance" element={<BoatInsurance />} />
              <Route path="/services/atv-utv-insurance" element={<ATVInsurance />} />
              <Route path="/services/mobile-home-insurance" element={<MobileHomeInsurance />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/claims" element={<Claims />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/refer" element={<Refer />} />
              <Route path="/resources/centre-al" element={<CentreALResources />} />
              <Route path="/resources/rome-ga" element={<RomeGAResources />} />
              {/* Dynamic city pages */}
              <Route path="/:citySlug" element={<CityPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </TooltipProvider>
  </HelmetProvider>
);

export default App;
