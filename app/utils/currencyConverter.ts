// Exchange rate (you may want to fetch this from an API in production)
const USD_TO_UAH_RATE = 38.5;

export type Currency = "USD" | "UAH";

export function convertPrice(
  priceUSD: number,
  targetCurrency: Currency
): number {
  if (targetCurrency === "UAH") {
    return priceUSD * USD_TO_UAH_RATE;
  }
  return priceUSD;
}

export function formatCurrency(price: number, currency: Currency): string {
  if (currency === "UAH") {
    return `₴${price.toFixed(2)}`;
  }
  return `$${price.toFixed(2)}`;
}

export function getCurrencyFromLanguage(language: string): Currency {
  return language === "uk" ? "UAH" : "USD";
}
