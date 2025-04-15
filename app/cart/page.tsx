"use client";

import {
  Box,
  Typography,
  Button,
  IconButton,
  Table,
  Sheet,
  Divider,
} from "@mui/joy";
import { Add, Remove, Delete } from "@mui/icons-material";
import { useCart } from "../contexts/CartContext";
import { useLanguage } from "../contexts/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import {
  convertPrice,
  formatCurrency,
  getCurrencyFromLanguage,
} from "../utils/currencyConverter";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCart();
  const { translations, language } = useLanguage();
  const t = translations.shop;
  const currency = getCurrencyFromLanguage(language);

  if (items.length === 0) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          pt: 10,
          px: 2,
          maxWidth: "lg",
          mx: "auto",
          textAlign: "center",
        }}
      >
        <Typography level="h2" sx={{ mb: 4 }}>
          {t.cart.emptyCart}
        </Typography>
        <Button component="a" href="/shop">
          {t.cart.continueShopping}
        </Button>
      </Box>
    );
  }

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
      <Typography level="h2" sx={{ mb: 4 }}>
        {t.cart.title}
      </Typography>

      <Sheet variant="outlined" sx={{ borderRadius: "sm", overflow: "auto" }}>
        <Table>
          <thead>
            <tr>
              <th style={{ width: "40%" }}>
                {t.checkout.orderSummary.product}
              </th>
              <th>{t.checkout.orderSummary.price}</th>
              <th>{t.checkout.orderSummary.quantity}</th>
              <th>{t.checkout.orderSummary.total}</th>
              <th>{t.checkout.orderSummary.actions}</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box sx={{ position: "relative", width: 80, height: 80 }}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                    <Typography>{item.name}</Typography>
                  </Box>
                </td>
                <td>
                  {formatCurrency(convertPrice(item.price, currency), currency)}
                </td>
                <td>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IconButton
                      size="sm"
                      variant="outlined"
                      color="neutral"
                      onClick={() =>
                        updateQuantity(item.id, Math.max(0, item.quantity - 1))
                      }
                    >
                      <Remove />
                    </IconButton>
                    <Typography sx={{ minWidth: "2em", textAlign: "center" }}>
                      {item.quantity}
                    </Typography>
                    <IconButton
                      size="sm"
                      variant="outlined"
                      color="neutral"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Add />
                    </IconButton>
                  </Box>
                </td>
                <td>
                  {formatCurrency(
                    convertPrice(item.price * item.quantity, currency),
                    currency
                  )}
                </td>
                <td>
                  <IconButton
                    size="sm"
                    color="danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Delete />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>

      <Box
        sx={{
          mt: 4,
          p: 3,
          bgcolor: "background.surface",
          borderRadius: "sm",
          boxShadow: "sm",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography level="h4">{t.checkout.orderSummary.total}</Typography>
          <Typography level="h4">
            {formatCurrency(convertPrice(totalPrice, currency), currency)}
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
          <Button
            variant="outlined"
            color="neutral"
            onClick={clearCart}
            size="lg"
          >
            {t.cart.clearCart}
          </Button>
          <Button component={Link} href="/checkout" size="lg">
            {t.cart.proceedToCheckout}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
