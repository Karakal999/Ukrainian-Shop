"use client";

import { useLanguage } from "../../contexts/LanguageContext";
import ProductList from "../../components/ProductList";

export default function VyshyvankasPage() {
  const { translations } = useLanguage();
  const collection = translations.shop.collections.vyshyvankas;

  return (
    <ProductList title={collection.title} products={collection.products} />
  );
}
