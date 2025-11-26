import { Star, Users, Award, CheckCircle2 } from "lucide-react";

export const TrustBar = () => {
  return (
    <section className="border-y bg-muted/30">
      <div className="container-custom py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Years in Business */}
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <p className="text-3xl font-bold text-foreground">16+</p>
            <p className="text-sm text-muted-foreground">Years Serving You</p>
          </div>

          {/* Policies Written */}
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <p className="text-3xl font-bold text-foreground">8,000+</p>
            <p className="text-sm text-muted-foreground">Policies Written</p>
          </div>

          {/* Centre Rating */}
          <div className="text-center space-y-2">
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-3xl font-bold text-foreground">4.7</p>
            <p className="text-sm text-muted-foreground">Centre, AL Rating</p>
          </div>

          {/* Rome Rating */}
          <div className="text-center space-y-2">
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-3xl font-bold text-foreground">4.6</p>
            <p className="text-sm text-muted-foreground">Rome, GA Rating</p>
          </div>
        </div>

        {/* Licensed States */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-secondary" />
            <span className="font-semibold">Licensed & Authorized in Alabama and Georgia</span>
          </div>
        </div>
      </div>
    </section>
  );
};
