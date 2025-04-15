"use client";

import { useLanguage } from "../../contexts/LanguageContext";
import ProductList from "../../components/ProductList";

export default function ModernDesignsPage() {
  const { translations } = useLanguage();
  const collection = translations.shop.collections.modern;

  return (
    <ProductList title={collection.title} products={collection.products} />
  );
}
