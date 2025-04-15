export type Language = "en" | "uk";

export interface BaseTranslations {
  [key: string]: string | Record<string, string | BaseTranslations>;
}

export interface TranslationModule<T> {
  en: T;
  uk: T;
}

export interface Collection {
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

export interface ShopTranslations {
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
