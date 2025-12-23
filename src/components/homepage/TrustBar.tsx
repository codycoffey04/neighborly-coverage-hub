import { Award, CheckCircle2, Clock, ShieldCheck } from "lucide-react";

export const TrustBar = () => {
  return (
    <section className="border-y bg-muted/30">
      <div className="container-custom py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Years in Business */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <Clock className="h-6 w-6 text-accent" aria-hidden="true" />
              <p className="text-3xl font-bold text-foreground">16+</p>
            </div>
            <p className="text-sm text-muted-foreground">Years Serving You</p>
          </div>

          {/* BBB Rating */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="h-6 w-6 text-accent" aria-hidden="true" />
              <p className="text-3xl font-bold text-foreground">A+</p>
            </div>
            <p className="text-sm text-muted-foreground">BBB Rating</p>
          </div>

          {/* Centre Rating */}
          <div className="text-center space-y-2">
            <p className="text-3xl font-bold text-foreground">4.7<span className="text-yellow-400">★</span></p>
            <p className="text-sm text-muted-foreground">Centre, AL</p>
            <p className="text-xs text-muted-foreground">(117 reviews)</p>
          </div>

          {/* Rome Rating */}
          <div className="text-center space-y-2">
            <p className="text-3xl font-bold text-foreground">4.6<span className="text-yellow-400">★</span></p>
            <p className="text-sm text-muted-foreground">Rome, GA</p>
            <p className="text-xs text-muted-foreground">(93 reviews)</p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden="true" />
              <span className="font-semibold">Licensed in AL & GA</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden="true" />
              <span className="font-semibold">Hablamos Español</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden="true" />
              <span className="font-semibold">Family Owned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
