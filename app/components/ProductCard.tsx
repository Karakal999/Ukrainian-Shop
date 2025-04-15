"use client";

import Image from "next/image";
import { Card, CardContent, Typography, Button, AspectRatio } from "@mui/joy";
import { ShoppingBag } from "@mui/icons-material";
import { useLanguage } from "../contexts/LanguageContext";

interface ProductCardProps {
  product: {
    name: string;
    price: number;
    image: string;
    category: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const { translations } = useLanguage();
  const t = translations.shop;

  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        "&:hover": {
          "& .MuiAspectRatio-root": {
            transform: "scale(1.05)",
          },
        },
      }}
    >
      <AspectRatio ratio="1" sx={{ transition: "transform 0.3s ease-in-out" }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </AspectRatio>
      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Typography level="title-lg" sx={{ color: "text.primary", mb: 1 }}>
          {product.name}
        </Typography>
        <Typography level="body-sm" sx={{ color: "text.secondary", mb: 2 }}>
          {product.category}
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
          sx={{
            mt: "auto",
          }}
        >
          {t.products.addToCart}
        </Button>
      </CardContent>
    </Card>
  );
}
