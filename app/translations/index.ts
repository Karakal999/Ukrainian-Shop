import { navigation } from "./navigation";
import { home } from "./home";
import { shop } from "./shop";
import { contact } from "./contact";
import { about } from "./about";
import { Language } from "./types";

export type { Language };

export interface TranslationType {
  navigation: typeof navigation.en;
  home: typeof home.en;
  shop: typeof shop.en;
  contact: typeof contact.en;
  about: typeof about.en;
}

export const translations: { en: TranslationType; uk: TranslationType } = {
  en: {
    navigation: navigation.en,
    home: home.en,
    shop: shop.en,
    contact: contact.en,
    about: about.en,
  },
  uk: {
    navigation: navigation.uk,
    home: home.uk,
    shop: shop.uk,
    contact: contact.uk,
    about: about.uk,
  },
};

export type Translations = typeof translations;
