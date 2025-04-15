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
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
  totalPrice: number;
}

export default function ReviewOrder({ items, totalPrice }: ReviewOrderProps) {
  const { translations, language } = useLanguage();
  const t = translations.shop.checkout;
  const currency = getCurrencyFromLanguage(language);

  return (
    <Box>
      <Typography level="h4" sx={{ mb: 3 }}>
        {t.confirmation.title}
      </Typography>
      <Typography level="body-md" sx={{ mb: 3 }}>
        {t.confirmation.message}
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography level="title-lg" sx={{ mb: 2 }}>
        {t.orderSummary.title}
      </Typography>

      {items.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            gap: 2,
            mb: 2,
          }}
        >
          <Box sx={{ position: "relative", width: 60, height: 60 }}>
            <Image
              src={item.image}
              alt={item.name}
              fill
              style={{ objectFit: "cover", borderRadius: "4px" }}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography level="body-sm">{item.name}</Typography>
            <Typography level="body-xs" sx={{ color: "text.secondary" }}>
              {t.orderSummary.quantity}: {item.quantity}
            </Typography>
            <Typography level="body-sm">
              {formatCurrency(
                convertPrice(item.price * item.quantity, currency),
                currency
              )}
            </Typography>
          </Box>
        </Box>
      ))}

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mt: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Typography>{t.orderSummary.subtotal}</Typography>
          <Typography>
            {formatCurrency(convertPrice(totalPrice, currency), currency)}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Typography>{t.orderSummary.shipping}</Typography>
          <Typography>
            {formatCurrency(convertPrice(10, currency), currency)}
          </Typography>
        </Box>
        <Divider sx={{ my: 1 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Typography level="title-lg">{t.orderSummary.total}</Typography>
          <Typography level="title-lg">
            {formatCurrency(convertPrice(totalPrice + 10, currency), currency)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
