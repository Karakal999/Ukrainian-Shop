"use client";

import { Box, Typography, Divider } from "@mui/joy";
import Image from "next/image";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  getCurrencyFromLanguage,
  formatCurrency,
  convertPrice,
} from "../../utils/currencyConverter";

interface ReviewOrderProps {
  items: Array<{
    id: string | number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
  totalPrice: number;
}

export default function ReviewOrder({ items, totalPrice }: ReviewOrderProps) {
  const { translations, language } = useLanguage();
  const t = translations.shop;
  const currency = getCurrencyFromLanguage(language);

  return (
    <Box>
      <Typography level="h4" sx={{ mb: 2 }}>
        {t.checkout.orderSummary.title}
      </Typography>
      {items.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            gap: 2,
            mb: 2,
            p: 2,
            borderRadius: "sm",
            bgcolor: "background.level1",
          }}
        >
          <Box sx={{ position: "relative", width: 80, height: 80 }}>
            <Image
              src={item.image}
              alt={item.name}
              fill
              style={{ objectFit: "cover", borderRadius: "4px" }}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography level="title-md">{item.name}</Typography>
            <Typography level="body-sm">
              {formatCurrency(convertPrice(item.price, currency), currency)} x{" "}
              {item.quantity}
            </Typography>
            <Typography level="title-sm" sx={{ color: "primary.500" }}>
              {formatCurrency(
                convertPrice(item.price * item.quantity, currency),
                currency
              )}
            </Typography>
          </Box>
        </Box>
      ))}
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography level="h4">{t.checkout.orderSummary.total}</Typography>
        <Typography level="h4">
          {formatCurrency(convertPrice(totalPrice, currency), currency)}
        </Typography>
      </Box>
    </Box>
  );
}
