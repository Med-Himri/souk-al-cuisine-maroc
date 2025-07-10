import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import taginesImage from "@/assets/tagines-collection.jpg";
import clayImage from "@/assets/clay-cookware.jpg";
import woodenImage from "@/assets/wooden-utensils.jpg";

const ProductShowcase = () => {
  const { t, dir } = useLanguage();
  
  const products = [
    {
      id: 1,
      nameKey: "products.tagines.name",
      descriptionKey: "products.tagines.description",
      priceKey: "products.tagines.price",
      image: taginesImage,
      badgeKey: "products.tagines.badge",
      badgeVariant: "default" as const
    },
    {
      id: 2,
      nameKey: "products.clay.name",
      descriptionKey: "products.clay.description",
      priceKey: "products.clay.price",
      image: clayImage,
      badgeKey: "products.clay.badge",
      badgeVariant: "secondary" as const
    },
    {
      id: 3,
      nameKey: "products.wooden.name",
      descriptionKey: "products.wooden.description",
      priceKey: "products.wooden.price",
      image: woodenImage,
      badgeKey: "products.wooden.badge",
      badgeVariant: "outline" as const
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('products.title')} <span className="text-moroccan-terracotta">{t('products.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardHeader className="p-0">
                <div className={`relative overflow-hidden rounded-t-lg ${dir === 'rtl' ? 'direction-rtl' : ''}`}>
                  <img 
                    src={product.image} 
                    alt={t(product.nameKey)}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge 
                    className={`absolute top-4 ${dir === 'rtl' ? 'right-4' : 'left-4'}`}
                    variant={product.badgeVariant}
                  >
                    {t(product.badgeKey)}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 text-foreground">
                  {t(product.nameKey)}
                </CardTitle>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {t(product.descriptionKey)}
                </p>
                <div className={`flex items-center justify-between ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                  <span className="text-lg font-semibold text-moroccan-terracotta">
                    {t(product.priceKey)}
                  </span>
                  <Button className="bg-moroccan-terracotta hover:bg-moroccan-copper">
                    {t('products.shopNow')}
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