import { ShoppingBag, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  const { t, dir } = useLanguage();
  
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className={`flex items-center space-x-4 ${dir === 'rtl' ? 'space-x-reverse' : ''}`}>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold text-moroccan-terracotta">
              Souk Al Cuisine
            </h1>
          </div>
          
          <nav className={`hidden md:flex items-center space-x-8 ${dir === 'rtl' ? 'space-x-reverse' : ''}`}>
            <a href="#home" className="text-foreground hover:text-moroccan-terracotta transition-colors">
              {t('header.home')}
            </a>
            <a href="#products" className="text-foreground hover:text-moroccan-terracotta transition-colors">
              {t('header.products')}
            </a>
            <a href="#blog" className="text-foreground hover:text-moroccan-terracotta transition-colors">
              {t('header.blog')}
            </a>
            <a href="#about" className="text-foreground hover:text-moroccan-terracotta transition-colors">
              {t('header.about')}
            </a>
          </nav>
          
          <div className={`flex items-center space-x-2 ${dir === 'rtl' ? 'space-x-reverse' : ''}`}>
            <LanguageSwitcher />
            <Button variant="ghost" size="icon" title={t('header.search')}>
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" title={t('header.cart')}>
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;