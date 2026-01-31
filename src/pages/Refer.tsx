import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CheckCircle, ChevronRight, Users, Gift, Phone, CreditCard } from "lucide-react";
import referHero from "@/assets/refer-hero.jpg";
import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Refer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your referral. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://coffeyagencies.com/refer#breadcrumb",
    "name": "Breadcrumb Navigation",
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
        "name": "Refer a Friend",
        "item": "https://coffeyagencies.com/refer"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Refer a Friend | Coffey Agencies Referral Program</title>
        <meta
          name="description"
          content="Refer a friend to Coffey Agencies and get a $10 gift card when we quote them. No purchase necessary. Serving Alabama & Georgia."
        />
        <link rel="canonical" href="https://coffeyagencies.com/refer" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section 
          className="relative min-h-[400px] md:min-h-[450px] flex items-end py-16 md:py-20"
          style={{ backgroundImage: `url(${referHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          <div className="container-custom relative z-10">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/80">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                <ChevronRight className="h-4 w-4" />
                <li className="text-white font-medium">Refer a Friend</li>
              </ol>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
                Refer a Friend, Get $10
              </h1>
            </div>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-md">
              Know someone who needs insurance? We'll send you a <strong>$10 gift card</strong> just for the referral — no purchase necessary.
            </p>
            <p className="text-lg text-white/80 mt-4 drop-shadow-md">
              Share their info below. We'll reach out within 24 hours.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 bg-muted/30">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-center text-foreground mb-8">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center p-6 bg-background rounded-xl border border-border">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div className="text-sm font-semibold text-accent mb-2">Step 1</div>
                <div className="text-lg font-semibold text-foreground mb-2">Submit a Referral</div>
                <p className="text-sm text-muted-foreground">Share your friend's name and phone number using the form below.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-background rounded-xl border border-border">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div className="text-sm font-semibold text-accent mb-2">Step 2</div>
                <div className="text-lg font-semibold text-foreground mb-2">We Call Them</div>
                <p className="text-sm text-muted-foreground">Our team reaches out within 24 hours to provide a free quote.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-background rounded-xl border border-border">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Gift className="h-6 w-6 text-accent" />
                </div>
                <div className="text-sm font-semibold text-accent mb-2">Step 3</div>
                <div className="text-lg font-semibold text-foreground mb-2">Get Your $10</div>
                <p className="text-sm text-muted-foreground">Pick up your gift card once the quote is provided. No purchase necessary.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container-custom max-w-2xl">
            {isSubmitted ? (
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Thank You!</h2>
                <p className="text-muted-foreground text-lg">
                  We'll reach out to your referral and have your gift card ready for pickup.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)} 
                  variant="outline" 
                  className="mt-6"
                >
                  Submit Another Referral
                </Button>
              </div>
            ) : (
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-6">Submit a Referral</h2>
                
                <form 
                  name="referral-form" 
                  method="POST" 
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="referral-form" />
                  <input type="hidden" name="bot-field" />

                  {/* Your Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground border-b pb-2">Your Information</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="your-name">Your Name *</Label>
                        <Input 
                          id="your-name" 
                          name="your-name" 
                          type="text" 
                          required 
                          placeholder="John Smith"
                          className="min-h-[44px]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="your-phone">Your Phone *</Label>
                        <Input 
                          id="your-phone" 
                          name="your-phone" 
                          type="tel" 
                          required 
                          placeholder="(555) 555-5555"
                          className="min-h-[44px]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Referral Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground border-b pb-2">Referral's Information</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="referral-name">Referral's Name *</Label>
                        <Input 
                          id="referral-name" 
                          name="referral-name" 
                          type="text" 
                          required 
                          placeholder="Jane Doe"
                          className="min-h-[44px]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="referral-phone">Referral's Phone *</Label>
                        <Input 
                          id="referral-phone" 
                          name="referral-phone" 
                          type="tel" 
                          required 
                          placeholder="(555) 555-5555"
                          className="min-h-[44px]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Notes (optional)</Label>
                      <Textarea 
                        id="notes" 
                        name="notes" 
                        placeholder="Any additional information about your referral..."
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground min-h-[44px]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Referral"}
                  </Button>
                </form>
              </div>
            )}

            {/* Small text */}
            <p className="text-center text-sm text-muted-foreground mt-8">
              Your $10 gift card is ready for pickup once we provide their quote. No purchase necessary.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-muted/30">
          <div className="container-custom max-w-2xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">Common Questions</h2>
            <div className="space-y-4">
              <div className="bg-background rounded-lg border border-border p-5">
                <div className="font-semibold text-foreground mb-2">Do they have to buy a policy for me to get the gift card?</div>
                <p className="text-muted-foreground">No. You get the $10 gift card once we provide them a quote — no purchase necessary.</p>
              </div>
              <div className="bg-background rounded-lg border border-border p-5">
                <div className="font-semibold text-foreground mb-2">How many people can I refer?</div>
                <p className="text-muted-foreground">There's no limit. Refer as many friends and family as you'd like — $10 for each quote we provide.</p>
              </div>
              <div className="bg-background rounded-lg border border-border p-5">
                <div className="font-semibold text-foreground mb-2">How do I pick up my gift card?</div>
                <p className="text-muted-foreground">Stop by our Centre, AL or Rome, GA office. We'll have it ready for you.</p>
              </div>
              <div className="bg-background rounded-lg border border-border p-5">
                <div className="font-semibold text-foreground mb-2">Do I have to be a current customer?</div>
                <p className="text-muted-foreground">No. Anyone can refer a friend and earn the $10 gift card.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Refer;
