import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import { MobileCTABar } from "@/components/shared/MobileCTABar";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { ScrollToTopButton } from "@/components/shared/ScrollToTopButton";
import { SkipLink } from "@/components/shared/SkipLink";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";

// Eager load homepage for fastest initial load
import Index from "./pages/Index";

// Lazy load all other pages for code splitting
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Learn = lazy(() => import("./pages/Learn"));
const LearnArticle = lazy(() => import("./pages/LearnArticle"));
const ServiceAreas = lazy(() => import("./pages/ServiceAreas"));
const AutoInsurance = lazy(() => import("./pages/services/AutoInsurance"));
const HomeInsurance = lazy(() => import("./pages/services/HomeInsurance"));
const RentersInsurance = lazy(() => import("./pages/services/RentersInsurance"));
const CondoInsurance = lazy(() => import("./pages/services/CondoInsurance"));
const LifeInsurance = lazy(() => import("./pages/services/LifeInsurance"));
const MotorcycleInsurance = lazy(() => import("./pages/services/MotorcycleInsurance"));
const CityPage = lazy(() => import("./pages/CityPage"));
const Claims = lazy(() => import("./pages/Claims"));
const CentreALResources = lazy(() => import("./pages/resources/CentreALResources"));
const RomeGAResources = lazy(() => import("./pages/resources/RomeGAResources"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <SkipLink />
          <ScrollToTop />
          <MobileCTABar />
          <ScrollToTopButton />
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
              <Route path="/services/auto-insurance" element={<AutoInsurance />} />
              <Route path="/services/home-insurance" element={<HomeInsurance />} />
              <Route path="/services/renters-insurance" element={<RentersInsurance />} />
              <Route path="/services/condo-insurance" element={<CondoInsurance />} />
              <Route path="/services/life-insurance" element={<LifeInsurance />} />
              <Route path="/services/motorcycle-insurance" element={<MotorcycleInsurance />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/claims" element={<Claims />} />
              <Route path="/resources/centre-al" element={<CentreALResources />} />
              <Route path="/resources/rome-ga" element={<RomeGAResources />} />
              {/* Dynamic city pages */}
              <Route path="/:citySlug" element={<CityPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
