import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="section-spacing bg-primary relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-balance text-white text-3xl md:text-4xl lg:text-5xl tracking-tight">Get Your Free Quote in 15 Minutes</h2>
            <p className="text-lg text-white/90 text-balance max-w-2xl mx-auto">
              No obligations, no pressure. Just honest answers and coverage that actually fits your life.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-card border-2 shadow-xl rounded-2xl p-8 md:p-12">
            <form name="coffey-insurance-lead" method="POST" data-netlify="true" className="space-y-6">
              <input type="hidden" name="form-name" value="coffey-insurance-lead" />
              
              {/* Name & Phone Row */}
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
                  />
                </div>
              </div>

              {/* Email & Service Type Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email" 
                    placeholder="john@example.com" 
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Insurance Type</Label>
                  <Select name="service">
                    <SelectTrigger id="service" className="h-12">
                      <SelectValue placeholder="Select insurance type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">Auto</SelectItem>
                      <SelectItem value="home">Home</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="renters">Renters</SelectItem>
                      <SelectItem value="life">Life</SelectItem>
                      <SelectItem value="bundle">Bundle</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full btn-primary h-14 text-lg font-semibold" aria-label="Submit form to get your free insurance quote">
                Get Your Free Quote
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                By submitting this form, you agree to be contacted by Coffey Agencies about your insurance needs. We respect your privacy and will never share your information.
              </p>
            </form>
          </div>

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
          </div>
        </div>
      </div>
    </section>
  );
};
