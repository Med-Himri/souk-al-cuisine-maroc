export type Language = 'en' | 'fr' | 'ar';

export interface LanguageConfig {
  code: Language;
  name: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

export const languages: LanguageConfig[] = [
  { code: 'en', name: 'English', flag: '🇺🇸', dir: 'ltr' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'ar', name: 'العربية', flag: '🇲🇦', dir: 'rtl' }
];

export const getLanguageConfig = (code: Language): LanguageConfig => {
  return languages.find(lang => lang.code === code) || languages[0];
};

export const isRTL = (language: Language): boolean => {
  return getLanguageConfig(language).dir === 'rtl';
};