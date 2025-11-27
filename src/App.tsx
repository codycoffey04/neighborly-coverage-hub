import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Reviews from "./pages/Reviews";
import Learn from "./pages/Learn";
import LearnArticle from "./pages/LearnArticle";
import ServiceAreas from "./pages/ServiceAreas";
import AutoInsurance from "./pages/services/AutoInsurance";
import HomeInsurance from "./pages/services/HomeInsurance";
import RentersInsurance from "./pages/services/RentersInsurance";
import CondoInsurance from "./pages/services/CondoInsurance";
import LifeInsurance from "./pages/services/LifeInsurance";
import MotorcycleInsurance from "./pages/services/MotorcycleInsurance";
import CityPage from "./pages/CityPage";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          {/* Dynamic city pages */}
          <Route path="/:citySlug" element={<CityPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
