import React, { useState, lazy, Suspense } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useToast } from "@/hooks/use-toast";

// Lazy load heavy form components (Radix UI Select, Input, Label - only needed when form is visible)
const Input = lazy(() => import("@/components/ui/input").then(m => ({ default: m.Input })));
const Label = lazy(() => import("@/components/ui/label").then(m => ({ default: m.Label })));
const Select = lazy(() => import("@/components/ui/select").then(m => ({ default: m.Select })));
const SelectContent = lazy(() => import("@/components/ui/select").then(m => ({ default: m.SelectContent })));
const SelectItem = lazy(() => import("@/components/ui/select").then(m => ({ default: m.SelectItem })));
const SelectTrigger = lazy(() => import("@/components/ui/select").then(m => ({ default: m.SelectTrigger })));
const SelectValue = lazy(() => import("@/components/ui/select").then(m => ({ default: m.SelectValue })));

// Extend Window interface for dataLayer
declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export const FinalCTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serviceValue, setServiceValue] = useState<string>("");
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
        redirect: "manual", // Don't follow redirects - Netlify returns a redirect but we handle it in JS
      });

      // Netlify Forms returns a redirect (303/302) on success, which becomes status 0 with redirect: "manual"
      // Status 200 means success without redirect
      // Status 0 typically means a redirect was intercepted
      const isSuccess = response.ok || response.status === 0 || response.status === 303 || response.status === 302 || response.status === 301;

      if (isSuccess) {
        // Push form submit event to dataLayer for GTM
        if (window.dataLayer) {
          window.dataLayer.push({
            event: "netlify_form_submit",
            form_name: "coffey-insurance-lead",
            form_location: "homepage_quote_form",
            page_url: location.pathname,
            timestamp: new Date().toISOString(),
          });
        }

        // Redirect to thank you page
        navigate("/thank-you");
      } else {
        throw new Error(`Form submission failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please call us directly at (256) 927-6287.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote-form" className="section-spacing bg-primary relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <SectionHeading variant="white" centered className="lg:text-5xl tracking-tight">Get Your Free Quote in 15 Minutes</SectionHeading>
            <p className="text-lg text-white/90 text-balance max-w-2xl mx-auto">
              No obligations, no pressure. Just honest answers and coverage that actually fits your life.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-card border-2 shadow-xl rounded-2xl p-8 md:p-12">
            <form 
              name="coffey-insurance-lead" 
              method="POST" 
              data-netlify="true" 
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="coffey-insurance-lead" />
              <input type="hidden" name="bot-field" aria-hidden="true" tabIndex={-1} />
              <input type="hidden" name="service" value={serviceValue} />
              
              {/* Name & Phone Row */}
              <Suspense fallback={<div className="grid md:grid-cols-2 gap-6"><div className="h-20 bg-muted animate-pulse rounded" /><div className="h-20 bg-muted animate-pulse rounded" /></div>}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name" 
                      name="name"
                      type="text" 
                      placeholder="John Smith" 
                      required
                      className="h-12"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      type="tel" 
                      placeholder="(256) 123-4567" 
                      required
                      className="h-12"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </Suspense>

              {/* Email & Service Type Row */}
              <Suspense fallback={<div className="grid md:grid-cols-2 gap-6"><div className="h-20 bg-muted animate-pulse rounded" /><div className="h-20 bg-muted animate-pulse rounded" /></div>}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address (optional)</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email" 
                      placeholder="john@example.com" 
                      className="h-12"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Insurance Type</Label>
                    <Select 
                      name="service" 
                      value={serviceValue}
                      onValueChange={setServiceValue}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger id="service" className="h-12">
                        <SelectValue placeholder="Select insurance type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="auto">Auto Insurance</SelectItem>
                        <SelectItem value="home">Home Insurance</SelectItem>
                        <SelectItem value="renters">Renters Insurance</SelectItem>
                        <SelectItem value="condo">Condo Insurance</SelectItem>
                        <SelectItem value="life">Life Insurance</SelectItem>
                        <SelectItem value="motorcycle">Motorcycle Insurance</SelectItem>
                        <SelectItem value="bundle">Bundle (Multiple Policies)</SelectItem>
                        <SelectItem value="not-sure">Not Sure — Help Me Decide</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Suspense>

              {/* Submit Button */}
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-accent hover:bg-accent/90 text-white min-h-[48px] h-14 text-lg font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200" 
                aria-label="Submit form to get your free insurance quote"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get My Free Quote"}
              </Button>

              <p className="text-sm text-center text-muted-foreground mb-2">
                Takes about 30 seconds. A licensed Alabama/Georgia agent will call you the same business day.
              </p>

              <p className="text-sm text-center text-muted-foreground">
                By submitting this form, you agree to be contacted by Coffey Agencies about your insurance needs. We respect your privacy and will never share your information.
              </p>
            </form>
          </div>

          {/* Phone Alternative */}
          <p className="text-center text-white/90 mt-6 text-sm">
            Prefer to call?{" "}
            <a href="tel:2569276287" className="text-white hover:text-accent underline transition-colors">
              (256) 927-6287
            </a>
            {" "}or{" "}
            <a href="tel:7067846511" className="text-white hover:text-accent underline transition-colors">
              (706) 784-6511
            </a>
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12 text-sm text-white/90">
            <span className="flex items-center gap-2 justify-center">
              <Check className="h-4 w-4 text-white shrink-0" /> Licensed in Alabama & Georgia
            </span>
            <span className="flex items-center gap-2 justify-center">
              <Check className="h-4 w-4 text-white shrink-0" /> Callback within 24 hours
            </span>
            <span className="flex items-center gap-2 justify-center">
              <Check className="h-4 w-4 text-white shrink-0" /> No spam, no selling your info
            </span>
            <span className="flex items-center gap-2 justify-center">
              <Check className="h-4 w-4 text-white shrink-0" /> Hablamos Español
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
