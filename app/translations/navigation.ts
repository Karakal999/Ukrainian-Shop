import { TranslationModule } from "./types";

interface NavigationTranslations {
  home: string;
  shop: string;
  about: string;
  contact: string;
  logo: string;
  menu: string;
}

export const navigation: TranslationModule<NavigationTranslations> = {
  en: {
    home: "Home",
    shop: "Shop",
    about: "About",
    contact: "Contact",
    logo: "Ukrainian Shop",
    menu: "Menu",
  },
  uk: {
    home: "Головна",
    shop: "Магазин",
    about: "Про нас",
    contact: "Контакти",
    logo: "Українська Крамниця",
    menu: "Меню",
  },
};
