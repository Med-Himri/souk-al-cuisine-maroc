import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, dir } = useLanguage();
  
  return (
    <footer className="bg-moroccan-spice text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-moroccan-gold mb-4">
              Souk Al Cuisine
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Bringing authentic Moroccan kitchen treasures to your home. 
              Discover the art of traditional cooking with our handcrafted collection.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-moroccan-gold transition-colors cursor-pointer">
                <Instagram className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-moroccan-gold transition-colors cursor-pointer">
                <Facebook className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-moroccan-gold transition-colors cursor-pointer">
                <Twitter className="h-4 w-4" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#home" className="hover:text-moroccan-gold transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-moroccan-gold transition-colors">Products</a></li>
              <li><a href="#blog" className="hover:text-moroccan-gold transition-colors">Blog & Recipes</a></li>
              <li><a href="#about" className="hover:text-moroccan-gold transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-moroccan-gold transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-moroccan-gold transition-colors">Returns</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-moroccan-gold transition-colors">Tagines</a></li>
              <li><a href="#" className="hover:text-moroccan-gold transition-colors">Clay Cookware</a></li>
              <li><a href="#" className="hover:text-moroccan-gold transition-colors">Wooden Utensils</a></li>
              <li><a href="#" className="hover:text-moroccan-gold transition-colors">Serving Dishes</a></li>
              <li><a href="#" className="hover:text-moroccan-gold transition-colors">Tea Sets</a></li>
              <li><a href="#" className="hover:text-moroccan-gold transition-colors">Gift Sets</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-moroccan-gold flex-shrink-0" />
                <span className="text-sm">Marrakech, Morocco</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-moroccan-gold flex-shrink-0" />
                <span className="text-sm">hello@soukalcuisine.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-moroccan-gold flex-shrink-0" />
                <span className="text-sm">+212 524 123 456</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>&copy; 2024 Souk Al Cuisine. All rights reserved. Made with ❤️ in Morocco.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;