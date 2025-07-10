import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, User } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Cook with a Tagine: A Complete Guide",
      excerpt: "Learn the traditional techniques for preparing authentic Moroccan dishes using your tagine. From seasoning to serving, master this ancient cooking method.",
      author: "Aicha Benali",
      readTime: "8 min read",
      date: "March 15, 2024",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 2,
      title: "Traditional Moroccan Chicken Tagine Recipe",
      excerpt: "Discover our family recipe for the perfect chicken tagine with preserved lemons and olives. A dish that brings the taste of Morocco to your table.",
      author: "Omar Kadiri",
      readTime: "6 min read",
      date: "March 10, 2024",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 3,
      title: "Caring for Your Clay Cookware",
      excerpt: "Essential tips for maintaining and seasoning your traditional clay pots to ensure they last for generations while improving their cooking performance.",
      author: "Fatima El Alami",
      readTime: "5 min read",
      date: "March 5, 2024",
      image: "/placeholder.svg?height=200&width=300"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-moroccan-sand/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Learn & <span className="text-moroccan-terracotta">Discover</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dive into the rich culinary traditions of Morocco with our guides, recipes, 
            and stories that connect you to centuries of cooking wisdom.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 bg-card border-border">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 bg-moroccan-clay/20"
                  />
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-lg mb-3 text-foreground leading-tight">
                  {post.title}
                </CardTitle>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full border-moroccan-terracotta text-moroccan-terracotta hover:bg-moroccan-terracotta hover:text-white">
                  Read Article
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-moroccan-terracotta hover:bg-moroccan-copper">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;