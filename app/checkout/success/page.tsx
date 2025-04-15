"use client";

import { Box, Typography, Button } from "@mui/joy";
import { useLanguage } from "../../contexts/LanguageContext";
import Link from "next/link";
import { CheckCircle } from "@mui/icons-material";

export default function CheckoutSuccessPage() {
  const { translations } = useLanguage();
  const t = translations.shop.checkout.confirmation;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: 10,
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <CheckCircle
        sx={{
          fontSize: "4rem",
          color: "success.500",
          mb: 2,
        }}
      />
      <Typography level="h2" sx={{ mb: 2 }}>
        {t.title}
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, maxWidth: "md" }}>
        {t.message}
      </Typography>
      <Button component={Link} href="/shop" size="lg">
        {t.continueShopping}
      </Button>
    </Box>
  );
}
