import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import taginesImage from "@/assets/tagines-collection.jpg";
import clayImage from "@/assets/clay-cookware.jpg";
import woodenImage from "@/assets/wooden-utensils.jpg";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Traditional Tagines",
      description: "Handcrafted ceramic tagines perfect for slow-cooking authentic Moroccan dishes. Each piece features unique geometric patterns.",
      price: "$89 - $149",
      image: taginesImage,
      badge: "Best Seller",
      badgeVariant: "default" as const
    },
    {
      id: 2,
      name: "Clay Cookware Set",
      description: "Traditional clay pots and serving dishes that enhance the flavors of your cooking while maintaining authentic cooking methods.",
      price: "$45 - $95",
      image: clayImage,
      badge: "Artisan Made",
      badgeVariant: "secondary" as const
    },
    {
      id: 3,
      name: "Wooden Utensils",
      description: "Handcarved olive and argan wood kitchen tools including spoons, serving boards, and traditional mortars.",
      price: "$25 - $75",
      image: woodenImage,
      badge: "Eco-Friendly",
      badgeVariant: "outline" as const
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-moroccan-terracotta">Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each product in our collection is carefully selected from skilled artisans 
            across Morocco, ensuring authenticity and exceptional quality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge 
                    className="absolute top-4 left-4"
                    variant={product.badgeVariant}
                  >
                    {product.badge}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 text-foreground">
                  {product.name}
                </CardTitle>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-moroccan-terracotta">
                    {product.price}
                  </span>
                  <Button className="bg-moroccan-terracotta hover:bg-moroccan-copper">
                    Shop Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;