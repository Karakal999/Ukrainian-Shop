// Exchange rate (you may want to fetch this from an API in production)
const USD_TO_UAH_RATE = 38.5;

export type Currency = "USD" | "UAH";

export function convertPrice(
  priceUSD: number,
  targetCurrency: Currency
): number {
  if (!priceUSD || isNaN(priceUSD)) {
    return 0;
  }

  if (targetCurrency === "UAH") {
    return Number((priceUSD * USD_TO_UAH_RATE).toFixed(2));
  }
  return Number(priceUSD.toFixed(2));
}

export function formatCurrency(price: number, currency: Currency): string {
  if (!price || isNaN(price)) {
    return currency === "UAH" ? "₴0.00" : "$0.00";
  }

  const formattedPrice = price.toFixed(2);
  if (currency === "UAH") {
    return `₴${formattedPrice}`;
  }
  return `$${formattedPrice}`;
}

export function getCurrencyFromLanguage(language: string): Currency {
  if (typeof language !== "string") {
    return "USD"; // Default to USD if language is invalid
  }
  return language.toLowerCase() === "uk" ? "UAH" : "USD";
}
