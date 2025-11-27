import { PageLayout } from "@/components/shared/PageLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { learnArticles } from "@/data/learnArticles";

const categories = ["All", "Auto Insurance", "Home Insurance", "Life Insurance", "State Requirements", "Tips & Advice"];

const Learn = () => {
  const featuredArticle = learnArticles.find(article => article.featured);
  const regularArticles = learnArticles.filter(article => !article.featured);

  return (
    <PageLayout
      title="Insurance Guides & Resources"
      description="Expert guides and resources to help you make informed decisions about your insurance coverage."
    >
      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Featured Article</h2>
            </div>
            
            <Card className="border-2 border-primary/20 overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 aspect-video md:aspect-auto" />
                
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4">{featuredArticle.category}</Badge>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredArticle.readTime}
                    </div>
                  </div>

                  <Link to={`/learn/${featuredArticle.slug}`}>
                    <Button>
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Category Filter (placeholder) */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <Card key={article.slug} className="border-border hover:border-primary/50 transition-colors group">
                <CardHeader className="p-0">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 aspect-video" />
                </CardHeader>
                
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {article.category}
                  </Badge>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>

                  <Link to={`/learn/${article.slug}`}>
                    <Button variant="link" className="p-0 h-auto">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Learn;
