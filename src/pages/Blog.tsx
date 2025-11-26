import { PageLayout } from "@/components/shared/PageLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    slug: "understanding-auto-insurance-coverage",
    title: "Understanding Auto Insurance Coverage: A Complete Guide",
    excerpt: "Learn about the different types of auto insurance coverage and how to choose the right protection for your vehicle and budget.",
    category: "Auto Insurance",
    date: "March 15, 2024",
    readTime: "5 min read",
    featured: true,
  },
  {
    slug: "homeowners-insurance-101",
    title: "Homeowners Insurance 101: What You Need to Know",
    excerpt: "Protect your home and belongings with the right coverage. Discover what homeowners insurance covers and why it's essential.",
    category: "Home Insurance",
    date: "March 10, 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "life-insurance-for-families",
    title: "Life Insurance for Young Families: Getting Started",
    excerpt: "Secure your family's financial future. Learn how to choose the right life insurance policy when you're just starting out.",
    category: "Life Insurance",
    date: "March 5, 2024",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "business-insurance-small-business",
    title: "Essential Insurance Coverage for Small Businesses",
    excerpt: "Protect your business with the right insurance. Explore coverage options every small business owner should consider.",
    category: "Business Insurance",
    date: "February 28, 2024",
    readTime: "8 min read",
    featured: false,
  },
  {
    slug: "save-money-insurance-tips",
    title: "10 Ways to Save Money on Insurance Without Sacrificing Coverage",
    excerpt: "Discover practical strategies to reduce your insurance premiums while maintaining adequate protection for what matters most.",
    category: "Tips & Advice",
    date: "February 20, 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "insurance-claims-process",
    title: "Filing an Insurance Claim: Step-by-Step Guide",
    excerpt: "Navigate the claims process with confidence. Learn what to do when you need to file an insurance claim and how to ensure a smooth experience.",
    category: "Tips & Advice",
    date: "February 15, 2024",
    readTime: "5 min read",
    featured: false,
  },
];

const categories = ["All", "Auto Insurance", "Home Insurance", "Life Insurance", "Business Insurance", "Tips & Advice"];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <PageLayout
      title="Insurance Insights & Tips"
      description="Expert advice, guides, and insights to help you make informed decisions about your insurance coverage."
    >
      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Featured Article</h2>
            </div>
            
            <Card className="border-2 border-primary/20 overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 aspect-video md:aspect-auto" />
                
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4">{featuredPost.category}</Badge>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <Link to={`/blog/${featuredPost.slug}`}>
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

      {/* Blog Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card key={post.slug} className="border-border hover:border-primary/50 transition-colors group">
                <CardHeader className="p-0">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 aspect-video" />
                </CardHeader>
                
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {post.category}
                  </Badge>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <Link to={`/blog/${post.slug}`}>
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

      {/* Newsletter CTA (placeholder) */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Stay Informed
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get the latest insurance tips and insights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <p className="text-sm text-muted-foreground">
              Newsletter signup coming soon!
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
