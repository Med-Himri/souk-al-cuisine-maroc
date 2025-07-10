import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BlogSection = () => {
  const { t, dir } = useLanguage();
  
  const blogPosts = [
    {
      id: 1,
      titleKey: "blog.post1.title",
      excerptKey: "blog.post1.excerpt",
      authorKey: "blog.post1.author",
      readTimeKey: "blog.post1.readTime",
      date: "March 15, 2024",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 2,
      titleKey: "blog.post2.title",
      excerptKey: "blog.post2.excerpt",
      authorKey: "blog.post2.author",
      readTimeKey: "blog.post2.readTime",
      date: "March 10, 2024",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 3,
      titleKey: "blog.post3.title",
      excerptKey: "blog.post3.excerpt",
      authorKey: "blog.post3.author",
      readTimeKey: "blog.post3.readTime",
      date: "March 5, 2024",
      image: "/placeholder.svg?height=200&width=300"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-moroccan-sand/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('blog.title')} <span className="text-moroccan-terracotta">{t('blog.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 bg-card border-border">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={t(post.titleKey)}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 bg-moroccan-clay/20"
                  />
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-lg mb-3 text-foreground leading-tight">
                  {t(post.titleKey)}
                </CardTitle>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {t(post.excerptKey)}
                </p>
                
                <div className={`flex items-center justify-between text-xs text-muted-foreground mb-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex items-center space-x-1 ${dir === 'rtl' ? 'space-x-reverse' : ''}`}>
                    <User className="h-3 w-3" />
                    <span>{t(post.authorKey)}</span>
                  </div>
                  <div className={`flex items-center space-x-1 ${dir === 'rtl' ? 'space-x-reverse' : ''}`}>
                    <Clock className="h-3 w-3" />
                    <span>{t(post.readTimeKey)}</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full border-moroccan-terracotta text-moroccan-terracotta hover:bg-moroccan-terracotta hover:text-white">
                  {t('blog.readArticle')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-moroccan-terracotta hover:bg-moroccan-copper">
            {t('blog.viewAll')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;