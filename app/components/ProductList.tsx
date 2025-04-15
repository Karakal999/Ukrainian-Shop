"use client";

import { Box, Typography, Grid, Card, AspectRatio, Button } from "@mui/joy";
import Image from "next/image";
import { ShoppingBag } from "@mui/icons-material";
import { useLanguage } from "../contexts/LanguageContext";

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
  const { translations } = useLanguage();
  const t = translations.shop;

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
          {products.map((product, index) => (
            <Grid key={index} xs={12} sm={6} md={4} lg={3}>
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
                    {t.products.currency}
                    {product.price.toFixed(2)}
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
