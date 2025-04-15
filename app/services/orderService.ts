import { getCurrencyFromLanguage } from "../utils/currencyConverter";

export interface OrderItem {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface ShippingDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
}

export interface PaymentDetails {
  method: string;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
}

export interface Order {
  id: string;
  items: OrderItem[];
  shipping: ShippingDetails;
  payment: PaymentDetails;
  totalPrice: number;
  currency: string;
  status: "pending" | "processing" | "completed" | "cancelled";
  createdAt: string;
}

export const registerOrder = async (
  items: OrderItem[],
  shipping: ShippingDetails,
  payment: PaymentDetails,
  totalPrice: number,
  language: string
): Promise<Order> => {
  // In a real application, this would make an API call to your backend
  const order: Order = {
    id: Math.random().toString(36).substr(2, 9),
    items,
    shipping,
    payment: {
      ...payment,
      cardNumber: payment.cardNumber
        ? `****${payment.cardNumber.slice(-4)}`
        : undefined,
      cvv: undefined, // Don't store CVV
    },
    totalPrice,
    currency: getCurrencyFromLanguage(language),
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Store in localStorage for demo purposes
  const orders = JSON.parse(localStorage.getItem("orders") || "[]");
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  return order;
};
