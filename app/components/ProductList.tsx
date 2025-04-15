"use client";

import { Box, Typography, Grid, Card, AspectRatio, Button } from "@mui/joy";
import Image from "next/image";
import { ShoppingBag } from "@mui/icons-material";
import { useLanguage } from "../contexts/LanguageContext";
import {
  getCurrencyFromLanguage,
  formatCurrency,
  convertPrice,
} from "../utils/currencyConverter";
import { useMemo } from "react";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface ProductListProps {
  title: string;
  products: Product[];
}

export default function ProductList({ title, products }: ProductListProps) {
  const { translations, language } = useLanguage();
  const t = translations.shop;
  const currency = getCurrencyFromLanguage(language);

  // Memoize the formatted products to prevent unnecessary recalculations
  const formattedProducts = useMemo(() => {
    return products.map((product) => ({
      ...product,
      formattedPrice: formatCurrency(
        convertPrice(product.price, currency),
        currency
      ),
    }));
  }, [products, currency]);

  if (!Array.isArray(products)) {
    return (
      <Typography
        level="h3"
        sx={{ textAlign: "center", color: "text.secondary" }}
      >
        {t.noResults}
      </Typography>
    );
  }

  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        pt: 10,
        pb: 6,
        px: 2,
      }}
    >
      <Box
        sx={{
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
          {title}
        </Typography>

        <Grid container spacing={4}>
          {formattedProducts.map((product) => (
            <Grid key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                variant="outlined"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    "& .MuiAspectRatio-root": {
                      transform: "scale(1.05)",
                    },
                  },
                }}
              >
                <AspectRatio
                  ratio="1"
                  sx={{ transition: "transform 0.3s ease-in-out" }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover" }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.jpg"; // Fallback image
                    }}
                  />
                </AspectRatio>
                <Box
                  sx={{
                    p: 2,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography level="title-lg" sx={{ mb: 1 }}>
                    {product.name}
                  </Typography>
                  <Typography
                    level="body-sm"
                    sx={{
                      mb: 2,
                      color: "text.secondary",
                      flexGrow: 1,
                    }}
                  >
                    {product.description}
                  </Typography>
                  <Typography
                    level="h4"
                    sx={{
                      color: "primary.500",
                      fontWeight: "bold",
                      mb: 2,
                    }}
                  >
                    {product.formattedPrice}
                  </Typography>
                  <Button
                    size="lg"
                    color="primary"
                    startDecorator={<ShoppingBag />}
                    fullWidth
                  >
                    {t.products.addToCart}
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
