import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Clock, Award } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="section-spacing bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-balance">Get Your Free Quote in 15 Minutes</h2>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
              Join 8,000+ satisfied customers across Alabama and Georgia. Simple, fast, and no obligation.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-card border-2 shadow-xl rounded-2xl p-8 md:p-12">
            <form name="coffey-insurance-lead" method="POST" data-netlify="true" className="space-y-6">
              <input type="hidden" name="form-name" value="coffey-insurance-lead" />
              
              {/* Name & Email Row */}
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
                  <Label htmlFor="email">Email Address *</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email" 
                    placeholder="john@example.com" 
                    required
                    className="h-12"
                  />
                </div>
              </div>

              {/* Phone & Service Type Row */}
              <div className="grid md:grid-cols-2 gap-6">
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
                <div className="space-y-2">
                  <Label htmlFor="service">Insurance Type *</Label>
                  <Select name="service" required>
                    <SelectTrigger id="service" className="h-12">
                      <SelectValue placeholder="Select insurance type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">Auto Insurance</SelectItem>
                      <SelectItem value="home">Home Insurance</SelectItem>
                      <SelectItem value="renters">Renters Insurance</SelectItem>
                      <SelectItem value="condo">Condo Insurance</SelectItem>
                      <SelectItem value="life">Life Insurance</SelectItem>
                      <SelectItem value="multiple">Multiple Types</SelectItem>
                      <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location">City & State *</Label>
                <Input 
                  id="location"
                  name="location"
                  type="text" 
                  placeholder="Centre, AL or Rome, GA" 
                  required
                  className="h-12"
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full btn-primary h-14 text-lg font-semibold">
                Get Your Free Quote
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                By submitting this form, you agree to be contacted by Coffey Agencies about your insurance needs. We respect your privacy and will never share your information.
              </p>
            </form>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="flex items-center gap-3 justify-center text-center md:text-left">
              <Clock className="h-8 w-8 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Fast Response</p>
                <p className="text-sm text-muted-foreground">Quotes in 15 minutes</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center text-center md:text-left">
              <Shield className="h-8 w-8 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-foreground">No Obligation</p>
                <p className="text-sm text-muted-foreground">Free, no pressure</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center text-center md:text-left">
              <Award className="h-8 w-8 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Expert Advice</p>
                <p className="text-sm text-muted-foreground">16+ years experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
