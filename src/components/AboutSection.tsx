import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t, dir } = useLanguage();
  
  const values = [
    {
      icon: Heart,
      titleKey: "about.values.craftsmanship.title",
      descriptionKey: "about.values.craftsmanship.description"
    },
    {
      icon: Award,
      titleKey: "about.values.quality.title",
      descriptionKey: "about.values.quality.description"
    },
    {
      icon: Users,
      titleKey: "about.values.community.title",
      descriptionKey: "about.values.community.description"
    },
    {
      icon: Globe,
      titleKey: "about.values.heritage.title",
      descriptionKey: "about.values.heritage.description"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${dir === 'rtl' ? 'lg:grid-cols-2 rtl' : ''}`}>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('about.title')} <span className="text-moroccan-terracotta">{t('about.titleHighlight')}</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                {t('about.paragraph1')}
              </p>
              <p>
                {t('about.paragraph2')}
              </p>
              <p>
                {t('about.paragraph3')}
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
                    {t(value.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(value.descriptionKey)}
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