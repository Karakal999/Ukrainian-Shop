"use client";

import {
  Card,
  AspectRatio,
  Box,
  Typography,
  Button,
  IconButton,
} from "@mui/joy";
import { ShoppingBag, Add, Remove } from "@mui/icons-material";
import Image from "next/image";
import { Product } from "./ProductList";
import { useCart } from "../contexts/CartContext";
import { useLanguage } from "../contexts/LanguageContext";
import {
  getCurrencyFromLanguage,
  formatCurrency,
  convertPrice,
} from "../utils/currencyConverter";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, items, updateQuantity, removeFromCart } = useCart();
  const { translations, language } = useLanguage();
  const t = translations.shop;
  const currency = getCurrencyFromLanguage(language);

  const cartItem = items.find((item) => item.id === product.id);

  return (
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
      <AspectRatio ratio="1" sx={{ transition: "transform 0.3s ease-in-out" }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </AspectRatio>
      <Box sx={{ p: 2, flexGrow: 1 }}>
        <Typography
          level="title-lg"
          sx={{ mb: 0.5, minHeight: "3em", lineHeight: "1.5em" }}
        >
          {product.name}
        </Typography>
        <Typography level="body-sm" sx={{ mb: 2, color: "text.secondary" }}>
          {product.category}
        </Typography>
        <Typography
          level="h4"
          sx={{ color: "primary.500", fontWeight: "bold", mb: 2 }}
        >
          {formatCurrency(convertPrice(product.price, currency), currency)}
        </Typography>

        {cartItem ? (
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <IconButton
              size="sm"
              variant="outlined"
              color="neutral"
              onClick={() =>
                updateQuantity(product.id, Math.max(0, cartItem.quantity - 1))
              }
            >
              <Remove />
            </IconButton>
            <Typography
              level="body-lg"
              sx={{ minWidth: "2em", textAlign: "center" }}
            >
              {cartItem.quantity}
            </Typography>
            <IconButton
              size="sm"
              variant="outlined"
              color="neutral"
              onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
            >
              <Add />
            </IconButton>
            <Button
              color="danger"
              variant="soft"
              sx={{ ml: "auto" }}
              onClick={() => removeFromCart(product.id)}
            >
              {t.products.removeFromCart}
            </Button>
          </Box>
        ) : (
          <Button
            fullWidth
            startDecorator={<ShoppingBag />}
            onClick={() => addToCart(product)}
          >
            {t.products.addToCart}
          </Button>
        )}
      </Box>
    </Card>
  );
}
