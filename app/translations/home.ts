import { TranslationModule } from "./types";

interface HomeTranslations {
  hero: {
    title: string;
    subtitle: string;
    shopNow: string;
  };
  collections: {
    title: string;
    categories: {
      vyshyvankas: string;
      modernDesigns: string;
      accessories: string;
    };
  };
  featuredProducts: {
    title: string;
    products: Array<{
      name: string;
      description: string;
      price: number;
      image: string;
      category: string;
    }>;
  };
  imageAlts: {
    heroBackground: string;
  };
}

export const home: TranslationModule<HomeTranslations> = {
  en: {
    hero: {
      title: "Ukrainian Embroidery",
      subtitle: "Discover the Beauty of Ukrainian Traditional Clothing",
      shopNow: "Shop Now",
    },
    collections: {
      title: "Our Collections",
      categories: {
        vyshyvankas: "Vyshyvankas",
        modernDesigns: "Modern Designs",
        accessories: "Accessories",
      },
    },
    featuredProducts: {
      title: "Featured Products",
      products: [
        {
          name: "Traditional Red Vyshyvanka",
          description:
            "Hand-embroidered vyshyvanka with traditional red patterns",
          price: 149.99,
          image: "/products/vyshyvanka-red.jpg",
          category: "Vyshyvankas",
        },
        {
          name: "Modern Black Vyshyvanka Dress",
          description: "Contemporary vyshyvanka dress with elegant embroidery",
          price: 199.99,
          image: "/products/dress-black.jpg",
          category: "Modern Designs",
        },
        {
          name: "Embroidered Leather Bag",
          description: "Handcrafted leather bag with Ukrainian embroidery",
          price: 89.99,
          image: "/products/bag.jpg",
          category: "Accessories",
        },
        {
          name: "Blue Linen Vyshyvanka",
          description: "Light summer vyshyvanka made from natural linen",
          price: 129.99,
          image: "/products/vyshyvanka-blue.jpg",
          category: "Vyshyvankas",
        },
      ],
    },
    imageAlts: {
      heroBackground: "Traditional Ukrainian embroidery",
    },
  },
  uk: {
    hero: {
      title: "Українська Вишивка",
      subtitle: "Відкрийте для себе красу традиційного українського одягу",
      shopNow: "Купити зараз",
    },
    collections: {
      title: "Наші Колекції",
      categories: {
        vyshyvankas: "Вишиванки",
        modernDesigns: "Сучасні Дизайни",
        accessories: "Аксесуари",
      },
    },
    featuredProducts: {
      title: "Популярні Товари",
      products: [
        {
          name: "Традиційна Червона Вишиванка",
          description:
            "Вишиванка ручної роботи з традиційними червоними візерунками",
          price: 149.99,
          image: "/products/vyshyvanka-red.jpg",
          category: "Вишиванки",
        },
        {
          name: "Сучасна Чорна Сукня-Вишиванка",
          description: "Сучасна сукня-вишиванка з елегантною вишивкою",
          price: 199.99,
          image: "/products/dress-black.jpg",
          category: "Сучасні Дизайни",
        },
        {
          name: "Вишита Шкіряна Сумка",
          description: "Шкіряна сумка ручної роботи з українською вишивкою",
          price: 89.99,
          image: "/products/bag.jpg",
          category: "Аксесуари",
        },
        {
          name: "Блакитна Лляна Вишиванка",
          description: "Легка літня вишиванка з натурального льону",
          price: 129.99,
          image: "/products/vyshyvanka-blue.jpg",
          category: "Вишиванки",
        },
      ],
    },
    imageAlts: {
      heroBackground: "Традиційна українська вишивка",
    },
  },
};
