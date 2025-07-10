import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, getLanguageConfig, isRTL } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  // Load saved language from localStorage or detect browser language
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && ['en', 'fr', 'ar'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (['en', 'fr', 'ar'].includes(browserLang)) {
        setLanguageState(browserLang as Language);
      }
    }
  }, []);

  // Update document direction and save language
  useEffect(() => {
    const config = getLanguageConfig(language);
    document.dir = config.dir;
    document.documentElement.lang = language;
    localStorage.setItem('preferred-language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  const dir = getLanguageConfig(language).dir;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translations object
const translations = {
  en: {
    // Header
    'header.home': 'Home',
    'header.products': 'Products',
    'header.blog': 'Blog & Recipes',
    'header.about': 'Our Story',
    'header.search': 'Search',
    'header.cart': 'Shopping Cart',

    // Hero
    'hero.title': 'Discover Authentic',
    'hero.titleHighlight': 'Moroccan Kitchen Treasures',
    'hero.subtitle': 'Handcrafted tagines, clay cookware, and wooden utensils that bring the soul of Morocco to your kitchen. Each piece tells a story of tradition, craftsmanship, and culinary heritage.',
    'hero.shopNow': 'Shop Now',
    'hero.learnMore': 'Learn More',

    // Products
    'products.title': 'Our',
    'products.titleHighlight': 'Collection',
    'products.subtitle': 'Each product in our collection is carefully selected from skilled artisans across Morocco, ensuring authenticity and exceptional quality.',
    'products.tagines.name': 'Traditional Tagines',
    'products.tagines.description': 'Handcrafted ceramic tagines perfect for slow-cooking authentic Moroccan dishes. Each piece features unique geometric patterns.',
    'products.tagines.price': '$89 - $149',
    'products.tagines.badge': 'Best Seller',
    'products.clay.name': 'Clay Cookware Set',
    'products.clay.description': 'Traditional clay pots and serving dishes that enhance the flavors of your cooking while maintaining authentic cooking methods.',
    'products.clay.price': '$45 - $95',
    'products.clay.badge': 'Artisan Made',
    'products.wooden.name': 'Wooden Utensils',
    'products.wooden.description': 'Handcarved olive and argan wood kitchen tools including spoons, serving boards, and traditional mortars.',
    'products.wooden.price': '$25 - $75',
    'products.wooden.badge': 'Eco-Friendly',
    'products.shopNow': 'Shop Now',

    // Blog
    'blog.title': 'Learn &',
    'blog.titleHighlight': 'Discover',
    'blog.subtitle': 'Dive into the rich culinary traditions of Morocco with our guides, recipes, and stories that connect you to centuries of cooking wisdom.',
    'blog.post1.title': 'How to Cook with a Tagine: A Complete Guide',
    'blog.post1.excerpt': 'Learn the traditional techniques for preparing authentic Moroccan dishes using your tagine. From seasoning to serving, master this ancient cooking method.',
    'blog.post1.author': 'Aicha Benali',
    'blog.post1.readTime': '8 min read',
    'blog.post2.title': 'Traditional Moroccan Chicken Tagine Recipe',
    'blog.post2.excerpt': 'Discover our family recipe for the perfect chicken tagine with preserved lemons and olives. A dish that brings the taste of Morocco to your table.',
    'blog.post2.author': 'Omar Kadiri',
    'blog.post2.readTime': '6 min read',
    'blog.post3.title': 'Caring for Your Clay Cookware',
    'blog.post3.excerpt': 'Essential tips for maintaining and seasoning your traditional clay pots to ensure they last for generations while improving their cooking performance.',
    'blog.post3.author': 'Fatima El Alami',
    'blog.post3.readTime': '5 min read',
    'blog.readArticle': 'Read Article',
    'blog.viewAll': 'View All Articles',

    // About
    'about.title': 'Our',
    'about.titleHighlight': 'Story',
    'about.paragraph1': 'Born from a passion for Moroccan culinary traditions, Souk Al Cuisine connects authentic artisan craftsmanship with modern kitchens around the world. Our journey began in the bustling souks of Marrakech, where we discovered the incredible skill and artistry of local craftspeople.',
    'about.paragraph2': 'Each piece in our collection tells a story – from the clay tagines shaped by hands that have perfected their craft over decades, to the wooden utensils carved from sustainable olive and argan wood. We believe that cooking with authentic tools connects us to the soul of Moroccan cuisine.',
    'about.paragraph3': 'More than just selling products, we\'re committed to preserving traditional crafts, supporting artisan communities, and sharing the knowledge that makes Moroccan cooking so special. Every purchase helps keep these ancient traditions alive.',
    'about.values.craftsmanship.title': 'Authentic Craftsmanship',
    'about.values.craftsmanship.description': 'Every piece is handcrafted by skilled artisans using traditional methods passed down through generations.',
    'about.values.quality.title': 'Premium Quality',
    'about.values.quality.description': 'We carefully select only the finest materials and work with master craftspeople to ensure exceptional quality.',
    'about.values.community.title': 'Supporting Communities',
    'about.values.community.description': 'Our partnerships directly support local artisan communities across Morocco, preserving traditional skills.',
    'about.values.heritage.title': 'Cultural Heritage',
    'about.values.heritage.description': 'We\'re passionate about sharing Morocco\'s rich culinary culture and keeping ancient traditions alive.',

    // Footer
    'footer.tagline': 'Bringing authentic Moroccan craftsmanship to kitchens worldwide',
    'footer.quick.title': 'Quick Links',
    'footer.quick.home': 'Home',
    'footer.quick.products': 'Products',
    'footer.quick.blog': 'Blog',
    'footer.quick.about': 'About Us',
    'footer.customer.title': 'Customer Care',
    'footer.customer.contact': 'Contact Us',
    'footer.customer.shipping': 'Shipping Info',
    'footer.customer.returns': 'Returns',
    'footer.customer.faq': 'FAQ',
    'footer.follow.title': 'Follow Us',
    'footer.newsletter.title': 'Stay Updated',
    'footer.newsletter.description': 'Subscribe to our newsletter for recipes, tips, and new product announcements.',
    'footer.newsletter.placeholder': 'Enter your email',
    'footer.newsletter.subscribe': 'Subscribe',
    'footer.copyright': '© 2024 Souk Al Cuisine. All rights reserved.',
  },
  fr: {
    // Header
    'header.home': 'Accueil',
    'header.products': 'Produits',
    'header.blog': 'Blog & Recettes',
    'header.about': 'Notre Histoire',
    'header.search': 'Rechercher',
    'header.cart': 'Panier',

    // Hero
    'hero.title': 'Découvrez les Authentiques',
    'hero.titleHighlight': 'Trésors de Cuisine Marocaine',
    'hero.subtitle': 'Tajines artisanaux, poterie d\'argile et ustensiles en bois qui apportent l\'âme du Maroc dans votre cuisine. Chaque pièce raconte une histoire de tradition, d\'artisanat et d\'héritage culinaire.',
    'hero.shopNow': 'Acheter Maintenant',
    'hero.learnMore': 'En Savoir Plus',

    // Products
    'products.title': 'Notre',
    'products.titleHighlight': 'Collection',
    'products.subtitle': 'Chaque produit de notre collection est soigneusement sélectionné auprès d\'artisans qualifiés à travers le Maroc, garantissant authenticité et qualité exceptionnelle.',
    'products.tagines.name': 'Tajines Traditionnels',
    'products.tagines.description': 'Tajines en céramique artisanaux parfaits pour cuire lentement des plats marocains authentiques. Chaque pièce présente des motifs géométriques uniques.',
    'products.tagines.price': '89$ - 149$',
    'products.tagines.badge': 'Meilleure Vente',
    'products.clay.name': 'Set de Poterie d\'Argile',
    'products.clay.description': 'Pots d\'argile traditionnels et plats de service qui rehaussent les saveurs de votre cuisine tout en maintenant des méthodes de cuisson authentiques.',
    'products.clay.price': '45$ - 95$',
    'products.clay.badge': 'Fait Artisan',
    'products.wooden.name': 'Ustensiles en Bois',
    'products.wooden.description': 'Outils de cuisine sculptés à la main en bois d\'olive et d\'argan, incluant cuillères, planches de service et mortiers traditionnels.',
    'products.wooden.price': '25$ - 75$',
    'products.wooden.badge': 'Écologique',
    'products.shopNow': 'Acheter Maintenant',

    // Blog
    'blog.title': 'Apprendre &',
    'blog.titleHighlight': 'Découvrir',
    'blog.subtitle': 'Plongez dans les riches traditions culinaires du Maroc avec nos guides, recettes et histoires qui vous connectent à des siècles de sagesse culinaire.',
    'blog.post1.title': 'Comment Cuisiner avec un Tajine : Guide Complet',
    'blog.post1.excerpt': 'Apprenez les techniques traditionnelles pour préparer des plats marocains authentiques avec votre tajine. De l\'assaisonnement au service, maîtrisez cette méthode de cuisson ancienne.',
    'blog.post1.author': 'Aicha Benali',
    'blog.post1.readTime': '8 min de lecture',
    'blog.post2.title': 'Recette Traditionnelle de Tajine de Poulet Marocain',
    'blog.post2.excerpt': 'Découvrez notre recette familiale pour le parfait tajine de poulet aux citrons confits et olives. Un plat qui apporte le goût du Maroc à votre table.',
    'blog.post2.author': 'Omar Kadiri',
    'blog.post2.readTime': '6 min de lecture',
    'blog.post3.title': 'Entretenir Votre Poterie d\'Argile',
    'blog.post3.excerpt': 'Conseils essentiels pour entretenir et assaisonner vos pots d\'argile traditionnels pour qu\'ils durent des générations tout en améliorant leurs performances de cuisson.',
    'blog.post3.author': 'Fatima El Alami',
    'blog.post3.readTime': '5 min de lecture',
    'blog.readArticle': 'Lire l\'Article',
    'blog.viewAll': 'Voir Tous les Articles',

    // About
    'about.title': 'Notre',
    'about.titleHighlight': 'Histoire',
    'about.paragraph1': 'Né d\'une passion pour les traditions culinaires marocaines, Souk Al Cuisine connecte l\'artisanat authentique avec les cuisines modernes du monde entier. Notre voyage a commencé dans les souks animés de Marrakech, où nous avons découvert l\'incroyable talent et l\'art des artisans locaux.',
    'about.paragraph2': 'Chaque pièce de notre collection raconte une histoire – des tajines d\'argile façonnés par des mains qui ont perfectionné leur art pendant des décennies, aux ustensiles en bois sculptés dans l\'olive et l\'argan durables. Nous croyons que cuisiner avec des outils authentiques nous connecte à l\'âme de la cuisine marocaine.',
    'about.paragraph3': 'Plus que simplement vendre des produits, nous nous engageons à préserver les métiers traditionnels, soutenir les communautés d\'artisans, et partager les connaissances qui rendent la cuisine marocaine si spéciale. Chaque achat aide à maintenir ces traditions anciennes vivantes.',
    'about.values.craftsmanship.title': 'Artisanat Authentique',
    'about.values.craftsmanship.description': 'Chaque pièce est fabriquée à la main par des artisans qualifiés utilisant des méthodes traditionnelles transmises de génération en génération.',
    'about.values.quality.title': 'Qualité Premium',
    'about.values.quality.description': 'Nous sélectionnons soigneusement seulement les meilleurs matériaux et travaillons avec des maîtres artisans pour assurer une qualité exceptionnelle.',
    'about.values.community.title': 'Soutenir les Communautés',
    'about.values.community.description': 'Nos partenariats soutiennent directement les communautés d\'artisans locaux à travers le Maroc, préservant les compétences traditionnelles.',
    'about.values.heritage.title': 'Héritage Culturel',
    'about.values.heritage.description': 'Nous sommes passionnés par le partage de la riche culture culinaire du Maroc et le maintien des traditions anciennes vivantes.',

    // Footer
    'footer.tagline': 'Apporter l\'artisanat marocain authentique aux cuisines du monde entier',
    'footer.quick.title': 'Liens Rapides',
    'footer.quick.home': 'Accueil',
    'footer.quick.products': 'Produits',
    'footer.quick.blog': 'Blog',
    'footer.quick.about': 'À Propos',
    'footer.customer.title': 'Service Client',
    'footer.customer.contact': 'Nous Contacter',
    'footer.customer.shipping': 'Info Livraison',
    'footer.customer.returns': 'Retours',
    'footer.customer.faq': 'FAQ',
    'footer.follow.title': 'Suivez-Nous',
    'footer.newsletter.title': 'Restez Informé',
    'footer.newsletter.description': 'Abonnez-vous à notre newsletter pour des recettes, conseils et annonces de nouveaux produits.',
    'footer.newsletter.placeholder': 'Entrez votre email',
    'footer.newsletter.subscribe': 'S\'abonner',
    'footer.copyright': '© 2024 Souk Al Cuisine. Tous droits réservés.',
  },
  ar: {
    // Header
    'header.home': 'الرئيسية',
    'header.products': 'المنتجات',
    'header.blog': 'المدونة والوصفات',
    'header.about': 'قصتنا',
    'header.search': 'البحث',
    'header.cart': 'سلة التسوق',

    // Hero
    'hero.title': 'اكتشف الأصالة',
    'hero.titleHighlight': 'كنوز المطبخ المغربي',
    'hero.subtitle': 'طاجين مصنوع يدوياً، أواني فخارية، وأدوات خشبية تجلب روح المغرب إلى مطبخك. كل قطعة تحكي قصة من التقاليد والحرفية والتراث الطهوي.',
    'hero.shopNow': 'تسوق الآن',
    'hero.learnMore': 'تعرف أكثر',

    // Products
    'products.title': 'مجموعتنا',
    'products.titleHighlight': 'الخاصة',
    'products.subtitle': 'كل منتج في مجموعتنا مختار بعناية من حرفيين مهرة عبر المغرب، مما يضمن الأصالة والجودة الاستثنائية.',
    'products.tagines.name': 'طاجين تقليدي',
    'products.tagines.description': 'طاجين خزفي مصنوع يدوياً مثالي لطبخ الأطباق المغربية الأصيلة ببطء. كل قطعة تتميز بأنماط هندسية فريدة.',
    'products.tagines.price': '$89 - $149',
    'products.tagines.badge': 'الأكثر مبيعاً',
    'products.clay.name': 'مجموعة أواني فخارية',
    'products.clay.description': 'أواني فخارية تقليدية وأطباق تقديم تعزز نكهات طبخك مع الحفاظ على طرق الطبخ الأصيلة.',
    'products.clay.price': '$45 - $95',
    'products.clay.badge': 'صنع حرفي',
    'products.wooden.name': 'أدوات خشبية',
    'products.wooden.description': 'أدوات مطبخ منحوتة يدوياً من خشب الزيتون والأركان تشمل الملاعق وألواح التقديم والهاون التقليدي.',
    'products.wooden.price': '$25 - $75',
    'products.wooden.badge': 'صديق للبيئة',
    'products.shopNow': 'تسوق الآن',

    // Blog
    'blog.title': 'تعلم و',
    'blog.titleHighlight': 'اكتشف',
    'blog.subtitle': 'انغمس في التقاليد الطهوية الغنية للمغرب مع أدلتنا ووصفاتنا وقصصنا التي تربطك بقرون من الحكمة الطهوية.',
    'blog.post1.title': 'كيفية الطبخ بالطاجين: دليل شامل',
    'blog.post1.excerpt': 'تعلم التقنيات التقليدية لتحضير الأطباق المغربية الأصيلة باستخدام طاجينك. من التتبيل إلى التقديم، أتقن طريقة الطبخ القديمة هذه.',
    'blog.post1.author': 'عائشة بن علي',
    'blog.post1.readTime': '8 دقائق قراءة',
    'blog.post2.title': 'وصفة طاجين الدجاج المغربي التقليدي',
    'blog.post2.excerpt': 'اكتشف وصفة عائلتنا لطاجين الدجاج المثالي بالليمون المحفوظ والزيتون. طبق يجلب طعم المغرب إلى طاولتك.',
    'blog.post2.author': 'عمر قادري',
    'blog.post2.readTime': '6 دقائق قراءة',
    'blog.post3.title': 'العناية بأواني الفخار',
    'blog.post3.excerpt': 'نصائح أساسية للحفاظ على أواني الفخار التقليدية وتتبيلها لضمان دوامها لأجيال مع تحسين أدائها في الطبخ.',
    'blog.post3.author': 'فاطمة العلمي',
    'blog.post3.readTime': '5 دقائق قراءة',
    'blog.readArticle': 'قراءة المقال',
    'blog.viewAll': 'عرض جميع المقالات',

    // About
    'about.title': 'قصتنا',
    'about.titleHighlight': 'الخاصة',
    'about.paragraph1': 'وُلد من شغف بالتقاليد الطهوية المغربية، يربط سوق الطبخ الحرفية الأصيلة بالمطابخ الحديثة حول العالم. بدأت رحلتنا في أسواق مراكش المزدحمة، حيث اكتشفنا المهارة والفن المذهل للحرفيين المحليين.',
    'about.paragraph2': 'كل قطعة في مجموعتنا تحكي قصة - من طاجين الطين المشكل بأيدي أتقنت حرفتها على مدى عقود، إلى الأدوات الخشبية المنحوتة من خشب الزيتون والأركان المستدام. نؤمن أن الطبخ بأدوات أصيلة يربطنا بروح المطبخ المغربي.',
    'about.paragraph3': 'أكثر من مجرد بيع المنتجات، نحن ملتزمون بالحفاظ على الحرف التقليدية، ودعم مجتمعات الحرفيين، ومشاركة المعرفة التي تجعل الطبخ المغربي مميزاً جداً. كل عملية شراء تساعد في إبقاء هذه التقاليد القديمة حية.',
    'about.values.craftsmanship.title': 'الحرفية الأصيلة',
    'about.values.craftsmanship.description': 'كل قطعة مصنوعة يدوياً من قبل حرفيين مهرة باستخدام طرق تقليدية متوارثة عبر الأجيال.',
    'about.values.quality.title': 'جودة فائقة',
    'about.values.quality.description': 'نختار بعناية أجود المواد ونعمل مع حرفيين بارعين لضمان جودة استثنائية.',
    'about.values.community.title': 'دعم المجتمعات',
    'about.values.community.description': 'شراكاتنا تدعم مباشرة مجتمعات الحرفيين المحليين عبر المغرب، محافظة على المهارات التقليدية.',
    'about.values.heritage.title': 'التراث الثقافي',
    'about.values.heritage.description': 'نحن شغوفون بمشاركة الثقافة الطهوية الغنية للمغرب والحفاظ على التقاليد القديمة حية.',

    // Footer
    'footer.tagline': 'جلب الحرفية المغربية الأصيلة إلى المطابخ في جميع أنحاء العالم',
    'footer.quick.title': 'روابط سريعة',
    'footer.quick.home': 'الرئيسية',
    'footer.quick.products': 'المنتجات',
    'footer.quick.blog': 'المدونة',
    'footer.quick.about': 'من نحن',
    'footer.customer.title': 'خدمة العملاء',
    'footer.customer.contact': 'اتصل بنا',
    'footer.customer.shipping': 'معلومات الشحن',
    'footer.customer.returns': 'المرتجعات',
    'footer.customer.faq': 'الأسئلة الشائعة',
    'footer.follow.title': 'تابعنا',
    'footer.newsletter.title': 'ابق محدثاً',
    'footer.newsletter.description': 'اشترك في نشرتنا الإخبارية للحصول على الوصفات والنصائح وإعلانات المنتجات الجديدة.',
    'footer.newsletter.placeholder': 'أدخل بريدك الإلكتروني',
    'footer.newsletter.subscribe': 'اشترك',
    'footer.copyright': '© 2024 سوق الطبخ. جميع الحقوق محفوظة.',
  }
} as const;