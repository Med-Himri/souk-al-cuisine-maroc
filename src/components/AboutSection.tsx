import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, Globe } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Authentic Craftsmanship",
      description: "Every piece is handcrafted by skilled artisans using traditional methods passed down through generations."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "We carefully select only the finest materials and work with master craftspeople to ensure exceptional quality."
    },
    {
      icon: Users,
      title: "Supporting Communities",
      description: "Our partnerships directly support local artisan communities across Morocco, preserving traditional skills."
    },
    {
      icon: Globe,
      title: "Cultural Heritage",
      description: "We're passionate about sharing Morocco's rich culinary culture and keeping ancient traditions alive."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-moroccan-terracotta">Story</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Born from a passion for Moroccan culinary traditions, Souk Al Cuisine connects 
                authentic artisan craftsmanship with modern kitchens around the world. Our journey 
                began in the bustling souks of Marrakech, where we discovered the incredible skill 
                and artistry of local craftspeople.
              </p>
              <p>
                Each piece in our collection tells a story – from the clay tagines shaped by hands 
                that have perfected their craft over decades, to the wooden utensils carved from 
                sustainable olive and argan wood. We believe that cooking with authentic tools 
                connects us to the soul of Moroccan cuisine.
              </p>
              <p>
                More than just selling products, we're committed to preserving traditional crafts, 
                supporting artisan communities, and sharing the knowledge that makes Moroccan 
                cooking so special. Every purchase helps keep these ancient traditions alive.
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 border-border bg-card hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-moroccan-terracotta/10 text-moroccan-terracotta rounded-lg mb-4">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;