import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-moroccan-kitchen.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Authentic Moroccan
          <br />
          <span className="text-moroccan-gold">Kitchen Treasures</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover the art of traditional Moroccan cooking with our handcrafted tagines, 
          clay cookware, and wooden utensils. Each piece tells a story of generations of craftsmanship.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-moroccan-terracotta hover:bg-moroccan-copper text-white px-8 py-4 text-lg">
            Shop Collection
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground px-8 py-4 text-lg">
            Learn to Cook
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;