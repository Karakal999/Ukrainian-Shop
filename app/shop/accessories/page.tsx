"use client";

import { useLanguage } from "../../contexts/LanguageContext";
import ProductList from "../../components/ProductList";

export default function AccessoriesPage() {
  const { translations } = useLanguage();
  const collection = translations.shop.collections.accessories;

  return (
    <ProductList title={collection.title} products={collection.products} />
  );
}
