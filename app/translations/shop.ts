import { TranslationModule } from "./types";
import { Product } from "../components/ProductList";

interface Collection {
  title: string;
  products: Product[];
}

interface ShopTranslations {
  title: string;
  categories: {
    all: string;
    vyshyvankas: string;
    modernDesigns: string;
    accessories: string;
    traditionalWear: string;
  };
  filters: {
    title: string;
    price: string;
    color: string;
    size: string;
    apply: string;
    clear: string;
    priceRange: {
      min: string;
      max: string;
    };
  };
  sort: {
    title: string;
    newest: string;
    priceHighToLow: string;
    priceLowToHigh: string;
    popularity: string;
  };
  products: {
    addToCart: string;
    currency: string;
    outOfStock: string;
    moreDetails: string;
  };
  collections: {
    vyshyvankas: Collection;
    modern: Collection;
    accessories: Collection;
  };
  noResults: string;
}

const shop: TranslationModule<ShopTranslations> = {
  en: {
    title: "Our Products",
    categories: {
      all: "All",
      vyshyvankas: "Vyshyvankas",
      modernDesigns: "Modern Designs",
      accessories: "Accessories",
      traditionalWear: "Traditional Wear",
    },
    filters: {
      title: "Filters",
      price: "Price",
      color: "Color",
      size: "Size",
      apply: "Apply Filters",
      clear: "Clear Filters",
      priceRange: {
        min: "Min Price",
        max: "Max Price",
      },
    },
    sort: {
      title: "Sort by",
      newest: "Newest",
      priceHighToLow: "Price: High to Low",
      priceLowToHigh: "Price: Low to High",
      popularity: "Popularity",
    },
    products: {
      addToCart: "Add to Cart",
      currency: "$",
      outOfStock: "Out of Stock",
      moreDetails: "More Details",
    },
    collections: {
      vyshyvankas: {
        title: "Traditional Vyshyvankas",
        products: [
          {
            id: 1,
            name: "Classic Embroidered Vyshyvanka",
            description:
              "Beautiful handmade vyshyvanka with traditional embroidery patterns",
            price: 129.99,
            image: "/products/vyshyvanka1.jpg",
            category: "vyshyvankas",
          },
          {
            id: 2,
            name: "Modern Vyshyvanka Blouse",
            description:
              "Contemporary take on traditional Ukrainian embroidery",
            price: 149.99,
            image: "/products/vyshyvanka2.jpg",
            category: "vyshyvankas",
          },
        ],
      },
      modern: {
        title: "Modern Designs",
        products: [
          {
            id: 3,
            name: "Contemporary Ukrainian Dress",
            description: "Modern dress with Ukrainian folk-inspired elements",
            price: 159.99,
            image: "/products/dress1.jpg",
            category: "modern",
          },
          {
            id: 4,
            name: "Modern Folk Jacket",
            description:
              "Stylish jacket combining traditional motifs with modern design",
            price: 179.99,
            image: "/products/dress2.jpg",
            category: "modern",
          },
        ],
      },
      accessories: {
        title: "Accessories",
        products: [
          {
            id: 5,
            name: "Traditional Jewelry Set",
            description:
              "Handcrafted jewelry set inspired by Ukrainian traditions",
            price: 49.99,
            image: "/products/accessories1.jpg",
            category: "accessories",
          },
          {
            id: 6,
            name: "Woven Belt",
            description:
              "Traditional Ukrainian woven belt with geometric patterns",
            price: 29.99,
            image: "/products/accessories2.jpg",
            category: "accessories",
          },
        ],
      },
    },
    noResults: "No products found matching your criteria",
  },
  uk: {
    title: "Наші Товари",
    categories: {
      all: "Всі",
      vyshyvankas: "Вишиванки",
      modernDesigns: "Сучасні Дизайни",
      accessories: "Аксесуари",
      traditionalWear: "Традиційний Одяг",
    },
    filters: {
      title: "Фільтри",
      price: "Ціна",
      color: "Колір",
      size: "Розмір",
      apply: "Застосувати фільтри",
      clear: "Очистити фільтри",
      priceRange: {
        min: "Мінімальна ціна",
        max: "Максимальна ціна",
      },
    },
    sort: {
      title: "Сортувати за",
      newest: "Найновіші",
      priceHighToLow: "Ціна: від високої до низької",
      priceLowToHigh: "Ціна: від низької до високої",
      popularity: "Популярність",
    },
    products: {
      addToCart: "Додати в Кошик",
      currency: "₴",
      outOfStock: "Немає в наявності",
      moreDetails: "Детальніше",
    },
    collections: {
      vyshyvankas: {
        title: "Традиційні Вишиванки",
        products: [
          {
            id: 1,
            name: "Класична вишита вишиванка",
            description:
              "Красива вишиванка ручної роботи з традиційними візерунками",
            price: 129.99,
            image: "/products/vyshyvanka1.jpg",
            category: "vyshyvankas",
          },
          {
            id: 2,
            name: "Сучасна вишиванка-блуза",
            description: "Сучасне бачення традиційної української вишивки",
            price: 149.99,
            image: "/products/vyshyvanka2.jpg",
            category: "vyshyvankas",
          },
        ],
      },
      modern: {
        title: "Сучасні Дизайни",
        products: [
          {
            id: 3,
            name: "Сучасна українська сукня",
            description: "Модерна сукня з елементами українського фольклору",
            price: 159.99,
            image: "/products/dress1.jpg",
            category: "modern",
          },
          {
            id: 4,
            name: "Модерна фольк-куртка",
            description:
              "Стильна куртка, що поєднує традиційні мотиви з сучасним дизайном",
            price: 179.99,
            image: "/products/dress2.jpg",
            category: "modern",
          },
        ],
      },
      accessories: {
        title: "Аксесуари",
        products: [
          {
            id: 5,
            name: "Традиційний набір прикрас",
            description:
              "Набір прикрас ручної роботи, натхненний українськими традиціями",
            price: 49.99,
            image: "/products/accessories1.jpg",
            category: "accessories",
          },
          {
            id: 6,
            name: "Плетений пояс",
            description:
              "Традиційний український плетений пояс з геометричними візерунками",
            price: 29.99,
            image: "/products/accessories2.jpg",
            category: "accessories",
          },
        ],
      },
    },
    noResults: "Не знайдено товарів за вашими критеріями",
  },
};

export type { ShopTranslations, Collection };
export { shop };
