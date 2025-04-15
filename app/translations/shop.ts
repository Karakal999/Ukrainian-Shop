import { TranslationModule } from "./types";

interface Collection {
  title: string;
  products: Array<{
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
  }>;
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
    removeFromCart: string;
    currency: string;
    outOfStock: string;
    moreDetails: string;
  };
  cart: {
    title: string;
    viewCart: string;
    checkout: string;
    emptyCart: string;
    continueShopping: string;
    clearCart: string;
    proceedToCheckout: string;
  };
  checkout: {
    title: string;
    steps: {
      shipping: string;
      payment: string;
      confirmation: string;
    };
    shippingForm: {
      title: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      address: string;
      city: string;
      country: string;
      postalCode: string;
      errors: {
        required: string;
        invalidEmail: string;
        invalidPhone: string;
        invalidPostalCode: string;
      };
    };
    paymentForm: {
      title: string;
      method: string;
      creditCard: string;
      paypal: string;
      cashOnDelivery: string;
      cardNumber: string;
      expiryDate: string;
      cvv: string;
      errors: {
        required: string;
        invalidCardNumber: string;
        invalidExpiryDate: string;
        invalidCvv: string;
      };
    };
    orderSummary: {
      title: string;
      subtotal: string;
      shipping: string;
      total: string;
      quantity: string;
      product: string;
      price: string;
      actions: string;
    };
    buttons: {
      back: string;
      next: string;
      placeOrder: string;
      processing: string;
    };
    errors: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      address: string;
      city: string;
      country: string;
      postalCode: string;
      cardNumber: string;
      expiryDate: string;
      cvv: string;
      orderFailed: string;
    };
    confirmation: {
      title: string;
      message: string;
      continueShopping: string;
      emptyCart: string;
    };
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
      removeFromCart: "Remove",
      currency: "$",
      outOfStock: "Out of Stock",
      moreDetails: "More Details",
    },
    cart: {
      title: "Shopping Cart",
      viewCart: "View Cart",
      checkout: "Checkout",
      emptyCart: "Your cart is empty",
      continueShopping: "Continue Shopping",
      clearCart: "Clear Cart",
      proceedToCheckout: "Proceed to Checkout",
    },
    checkout: {
      title: "Checkout",
      steps: {
        shipping: "Shipping",
        payment: "Payment",
        confirmation: "Confirmation",
      },
      shippingForm: {
        title: "Shipping Information",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        phone: "Phone",
        address: "Address",
        city: "City",
        country: "Country",
        postalCode: "Postal Code",
        errors: {
          required: "This field is required",
          invalidEmail: "Please enter a valid email address",
          invalidPhone: "Please enter a valid phone number",
          invalidPostalCode: "Please enter a valid postal code",
        },
      },
      paymentForm: {
        title: "Payment Method",
        method: "Payment Method",
        creditCard: "Credit Card",
        paypal: "PayPal",
        cashOnDelivery: "Cash on Delivery",
        cardNumber: "Card Number",
        expiryDate: "Expiry Date",
        cvv: "CVV",
        errors: {
          required: "This field is required",
          invalidCardNumber: "Please enter a valid card number",
          invalidExpiryDate: "Please enter a valid expiry date",
          invalidCvv: "Please enter a valid CVV",
        },
      },
      orderSummary: {
        title: "Order Summary",
        subtotal: "Subtotal",
        shipping: "Shipping",
        total: "Total",
        quantity: "Quantity",
        product: "Product",
        price: "Price",
        actions: "Actions",
      },
      buttons: {
        back: "Back",
        next: "Next",
        placeOrder: "Place Order",
        processing: "Processing...",
      },
      errors: {
        firstName: "Please enter your first name",
        lastName: "Please enter your last name",
        email: "Please enter a valid email address",
        phone: "Please enter a valid phone number",
        address: "Please enter your address",
        city: "Please select a city",
        country: "Please select a country",
        postalCode: "Please enter a valid postal code",
        cardNumber: "Please enter a valid card number",
        expiryDate: "Please enter a valid expiry date",
        cvv: "Please enter a valid CVV",
        orderFailed: "Failed to place order. Please try again.",
      },
      confirmation: {
        title: "Thank you for your order!",
        message:
          "Your order has been placed successfully. We will send you an email confirmation shortly.",
        continueShopping: "Continue Shopping",
        emptyCart: "Your cart is empty",
      },
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
      addToCart: "Додати в кошик",
      removeFromCart: "Видалити",
      currency: "₴",
      outOfStock: "Немає в наявності",
      moreDetails: "Детальніше",
    },
    cart: {
      title: "Кошик",
      viewCart: "Переглянути кошик",
      checkout: "Оформити замовлення",
      emptyCart: "Ваш кошик порожній",
      continueShopping: "Продовжити покупки",
      clearCart: "Очистити кошик",
      proceedToCheckout: "Перейти до оформлення",
    },
    checkout: {
      title: "Оформлення замовлення",
      steps: {
        shipping: "Доставка",
        payment: "Оплата",
        confirmation: "Підтвердження",
      },
      shippingForm: {
        title: "Інформація про доставку",
        firstName: "Ім'я",
        lastName: "Прізвище",
        email: "Електронна пошта",
        phone: "Телефон",
        address: "Адреса",
        city: "Місто",
        country: "Країна",
        postalCode: "Поштовий індекс",
        errors: {
          required: "Це поле обов'язкове",
          invalidEmail: "Будь ласка, введіть дійсну електронну адресу",
          invalidPhone: "Будь ласка, введіть дійсний номер телефону",
          invalidPostalCode: "Будь ласка, введіть дійсний поштовий індекс",
        },
      },
      paymentForm: {
        title: "Спосіб оплати",
        method: "Спосіб оплати",
        creditCard: "Кредитна картка",
        paypal: "PayPal",
        cashOnDelivery: "Накладений платіж",
        cardNumber: "Номер картки",
        expiryDate: "Термін дії",
        cvv: "CVV",
        errors: {
          required: "Це поле обов'язкове",
          invalidCardNumber: "Будь ласка, введіть дійсний номер картки",
          invalidExpiryDate: "Будь ласка, введіть дійсний термін дії",
          invalidCvv: "Будь ласка, введіть дійсний CVV",
        },
      },
      orderSummary: {
        title: "Підсумок замовлення",
        subtotal: "Проміжний підсумок",
        shipping: "Доставка",
        total: "Загалом",
        quantity: "Кількість",
        product: "Товар",
        price: "Ціна",
        actions: "Дії",
      },
      buttons: {
        back: "Назад",
        next: "Далі",
        placeOrder: "Оформити замовлення",
        processing: "Обробка...",
      },
      errors: {
        firstName: "Будь ласка, введіть ваше ім'я",
        lastName: "Будь ласка, введіть ваше прізвище",
        email: "Будь ласка, введіть дійсну електронну адресу",
        phone: "Будь ласка, введіть дійсний номер телефону",
        address: "Будь ласка, введіть вашу адресу",
        city: "Будь ласка, виберіть місто",
        country: "Будь ласка, виберіть країну",
        postalCode: "Будь ласка, введіть дійсний поштовий індекс",
        cardNumber: "Будь ласка, введіть дійсний номер картки",
        expiryDate: "Будь ласка, введіть дійсний термін дії",
        cvv: "Будь ласка, введіть дійсний CVV",
        orderFailed:
          "Не вдалося оформити замовлення. Будь ласка, спробуйте ще раз.",
      },
      confirmation: {
        title: "Дякуємо за ваше замовлення!",
        message:
          "Ваше замовлення успішно оформлено. Ми надішлемо вам підтвердження електронною поштою найближчим часом.",
        continueShopping: "Продовжити покупки",
        emptyCart: "Ваш кошик порожній",
      },
    },
    collections: {
      vyshyvankas: {
        title: "Вишиванки",
        products: [
          {
            id: 1,
            name: "Традиційна вишита вишиванка",
            description: "Вишиванка ручної роботи з традиційними візерунками",
            price: 89.99,
            image: "/products/vyshyvanka1.jpg",
            category: "vyshyvankas",
          },
          {
            id: 2,
            name: "Сучасна сукня-вишиванка",
            description: "Сучасне бачення традиційного дизайну вишиванки",
            price: 129.99,
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
            name: "Сучасна блуза з українськими мотивами",
            description: "Сучасний одяг з елементами українського дизайну",
            price: 69.99,
            image: "/products/modern1.jpg",
            category: "modern",
          },
          {
            id: 4,
            name: "Сучасна українська сукня",
            description: "Сучасна сукня з витонченими українськими мотивами",
            price: 99.99,
            image: "/products/modern2.jpg",
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
            name: "Тканий пояс",
            description:
              "Традиційний український тканий пояс з геометричними візерунками",
            price: 29.99,
            image: "/products/accessories2.jpg",
            category: "accessories",
          },
        ],
      },
    },
    noResults: "Не знайдено товарів, що відповідають вашим критеріям",
  },
};

export type { ShopTranslations, Collection };
export { shop };
