"use client";

import {
  Box,
  Typography,
  Grid,
  Tabs,
  TabList,
  Tab,
  Select,
  Option,
  Button,
  Divider,
} from "@mui/joy";
import ProductCard from "../components/ProductCard";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";
import { Collection } from "../translations/shop";
import { Product } from "../components/ProductList";

export default function ShopPage() {
  const { translations } = useLanguage();
  const t = translations.shop;

  const [activeTab, setActiveTab] = useState("all");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  // Available sizes and colors for filters
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const colors = ["White", "Black", "Red", "Blue", "Green"];

  // Filter products based on selected category
  const getFilteredProducts = (category: string): Product[] => {
    if (category === "all") {
      return [
        ...t.collections.vyshyvankas.products,
        ...t.collections.modern.products,
        ...t.collections.accessories.products,
      ];
    }
    return (
      t.collections[category as keyof typeof t.collections]?.products || []
    );
  };

  const filteredProducts = getFilteredProducts(activeTab);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: 10,
        px: 2,
        maxWidth: "lg",
        mx: "auto",
      }}
    >
      <Typography
        level="h1"
        sx={{
          textAlign: "center",
          mb: 6,
          color: "primary.500",
        }}
      >
        {t.title}
      </Typography>

      {/* Filters Section */}
      <Box
        sx={{
          mb: 4,
          p: 3,
          bgcolor: "background.surface",
          borderRadius: "sm",
          boxShadow: "sm",
        }}
      >
        <Typography level="h4" sx={{ mb: 2 }}>
          {t.filters.title}
        </Typography>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid xs={12} sm={6}>
            <Select
              placeholder={t.filters.size}
              value={selectedSize}
              onChange={(_, value) => setSelectedSize(value as string)}
              sx={{ width: "100%" }}
            >
              {sizes.map((size) => (
                <Option key={size} value={size}>
                  {size}
                </Option>
              ))}
            </Select>
          </Grid>
          <Grid xs={12} sm={6}>
            <Select
              placeholder={t.filters.color}
              value={selectedColor}
              onChange={(_, value) => setSelectedColor(value as string)}
              sx={{ width: "100%" }}
            >
              {colors.map((color) => (
                <Option key={color} value={color}>
                  {color}
                </Option>
              ))}
            </Select>
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="outlined"
            color="neutral"
            onClick={() => {
              setSelectedSize("");
              setSelectedColor("");
            }}
          >
            {t.filters.clear}
          </Button>
          <Button>{t.filters.apply}</Button>
        </Box>
      </Box>

      {/* Categories Tabs */}
      <Tabs
        value={activeTab}
        onChange={(_, value) => setActiveTab(value as string)}
        sx={{ mb: 4 }}
      >
        <TabList>
          <Tab value="all">{t.categories.all}</Tab>
          <Tab value="vyshyvankas">{t.categories.vyshyvankas}</Tab>
          <Tab value="modern">{t.categories.modernDesigns}</Tab>
          <Tab value="accessories">{t.categories.accessories}</Tab>
        </TabList>
      </Tabs>

      {/* Collections */}
      {activeTab === "all" ? (
        // Show all collections when "All" is selected
        <>
          {(Object.entries(t.collections) as [string, Collection][]).map(
            ([key, collection]) => (
              <Box key={key} sx={{ mb: 8 }}>
                <Typography
                  level="h2"
                  sx={{
                    mb: 4,
                    color: "primary.500",
                  }}
                >
                  {collection.title}
                </Typography>
                <Grid container spacing={4}>
                  {collection.products.map((product: Product) => (
                    <Grid key={product.id} xs={12} sm={6} md={4} lg={3}>
                      <ProductCard product={product} />
                    </Grid>
                  ))}
                </Grid>
                <Divider sx={{ mt: 4 }} />
              </Box>
            )
          )}
        </>
      ) : (
        // Show filtered products for selected category
        <Grid container spacing={4}>
          {filteredProducts.map((product: Product) => (
            <Grid key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}

      {filteredProducts.length === 0 && (
        <Typography
          level="h3"
          sx={{
            textAlign: "center",
            color: "text.secondary",
            mt: 4,
          }}
        >
          {t.noResults}
        </Typography>
      )}
    </Box>
  );
}
