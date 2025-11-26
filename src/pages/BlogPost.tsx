import { PageLayout } from "@/components/shared/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

// This is a template - in production, you'd fetch post data based on slug
const BlogPost = () => {
  const { slug } = useParams();

  // Template post data
  const post = {
    title: "Understanding Auto Insurance Coverage: A Complete Guide",
    category: "Auto Insurance",
    date: "March 15, 2024",
    readTime: "5 min read",
    author: "Coffey Agencies Team",
  };

  const relatedPosts = [
    {
      slug: "homeowners-insurance-101",
      title: "Homeowners Insurance 101: What You Need to Know",
      category: "Home Insurance",
    },
    {
      slug: "save-money-insurance-tips",
      title: "10 Ways to Save Money on Insurance",
      category: "Tips & Advice",
    },
    {
      slug: "life-insurance-for-families",
      title: "Life Insurance for Young Families",
      category: "Life Insurance",
    },
  ];

  return (
    <PageLayout
      title={post.title}
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        { label: post.title, href: `/blog/${slug}` },
      ]}
    >
      <article className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Article Header */}
          <div className="mb-8">
            <Badge className="mb-4">{post.category}</Badge>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>

          {/* Featured Image Placeholder */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 aspect-video rounded-lg mb-12" />

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Introduction
            </h2>
            <p className="text-muted-foreground mb-6">
              Understanding your auto insurance coverage is essential for making informed decisions 
              about protecting yourself, your vehicle, and your financial future. In this comprehensive 
              guide, we'll break down the different types of coverage available and help you determine 
              what's right for your needs.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Types of Auto Insurance Coverage
            </h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              1. Liability Coverage
            </h3>
            <p className="text-muted-foreground mb-6">
              Liability coverage is required by law in most states and protects you if you're responsible 
              for an accident. It includes bodily injury liability (covers medical expenses for others) 
              and property damage liability (covers damage to others' property).
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              2. Collision Coverage
            </h3>
            <p className="text-muted-foreground mb-6">
              Collision coverage pays for damage to your vehicle resulting from a collision with another 
              vehicle or object, regardless of who was at fault. This coverage is especially important 
              for newer or higher-value vehicles.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              3. Comprehensive Coverage
            </h3>
            <p className="text-muted-foreground mb-6">
              Comprehensive coverage protects your vehicle from damage caused by events other than 
              collisions, such as theft, vandalism, fire, natural disasters, or hitting an animal. 
              It's often paired with collision coverage.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              4. Uninsured/Underinsured Motorist Coverage
            </h3>
            <p className="text-muted-foreground mb-6">
              This coverage protects you if you're in an accident caused by a driver who doesn't have 
              insurance or doesn't have enough coverage to pay for your damages. It's highly recommended 
              even though it may not be required in your state.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              How to Choose the Right Coverage
            </h2>
            <p className="text-muted-foreground mb-6">
              When selecting auto insurance coverage, consider these factors:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Your vehicle's age and value</li>
              <li>Your financial situation and ability to pay for repairs or replacement</li>
              <li>State minimum requirements and recommended coverage levels</li>
              <li>Your driving habits and risk tolerance</li>
              <li>Available discounts for bundling or safe driving</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Conclusion
            </h2>
            <p className="text-muted-foreground mb-6">
              Choosing the right auto insurance coverage doesn't have to be complicated. At Coffey 
              Agencies, our experienced team can help you understand your options, compare quotes from 
              multiple carriers, and find coverage that fits your needs and budget.
            </p>
          </div>

          {/* Author Bio */}
          <Card className="my-12 border-border bg-muted/30">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">About {post.author}</h3>
                  <p className="text-sm text-muted-foreground">
                    The Coffey Agencies team has over 16 years of experience helping families and 
                    businesses find the right insurance coverage. We're committed to providing expert 
                    guidance and personalized service to our community.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="mb-12 border-2 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Need Help With Your Auto Insurance?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our team is ready to help you find the perfect coverage for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg">
                    Get Your Free Quote
                  </Button>
                </Link>
                <a href="tel:(256)927-6287">
                  <Button variant="outline" size="lg">
                    Call (256) 927-6287
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.slug} className="border-border hover:border-primary/50 transition-colors group">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 aspect-video rounded-lg mb-4" />
                  
                  <Badge variant="secondary" className="mb-3">
                    {relatedPost.category}
                  </Badge>
                  
                  <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {relatedPost.title}
                  </h3>

                  <Link to={`/blog/${relatedPost.slug}`}>
                    <Button variant="link" className="p-0 h-auto">
                      Read Article
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

export default BlogPost;
