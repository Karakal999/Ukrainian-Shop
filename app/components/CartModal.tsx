"use client";

import {
  Modal,
  ModalClose,
  Sheet,
  Typography,
  Box,
  Button,
  IconButton,
  Divider,
} from "@mui/joy";
import { Add, Remove, Delete } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../contexts/CartContext";
import { useLanguage } from "../contexts/LanguageContext";

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CartModal({ open, onClose }: CartModalProps) {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();
  const { translations } = useLanguage();
  const t = translations.shop;

  return (
    <Modal
      aria-labelledby="cart-modal-title"
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
      }}
    >
      <Sheet
        variant="outlined"
        sx={{
          maxWidth: 500,
          width: "100%",
          maxHeight: "90vh",
          overflow: "auto",
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
          mt: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography level="h4" id="cart-modal-title">
            {t.cart.title}
          </Typography>
          <ModalClose />
        </Box>
        <Divider sx={{ my: 2 }} />

        {items.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 4 }}>
            <Typography level="body-lg" sx={{ mb: 2 }}>
              {t.checkout.confirmation.emptyCart}
            </Typography>
            <Button
              component={Link}
              href="/shop"
              onClick={onClose}
              variant="outlined"
            >
              {t.checkout.confirmation.continueShopping}
            </Button>
          </Box>
        ) : (
          <>
            <Box sx={{ mb: 3 }}>
              {items.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    alignItems: "start",
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
                    <Typography level="body-sm" sx={{ mb: 1 }}>
                      {t.products.currency}
                      {item.price.toFixed(2)}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <IconButton
                        size="sm"
                        variant="outlined"
                        color="neutral"
                        aria-label={t.products.removeFromCart}
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max(0, item.quantity - 1)
                          )
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
                        aria-label={t.products.addToCart}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Add />
                      </IconButton>
                      <IconButton
                        size="sm"
                        color="danger"
                        variant="soft"
                        aria-label={t.products.removeFromCart}
                        onClick={() => removeFromCart(item.id)}
                        sx={{ ml: "auto" }}
                      >
                        <Delete />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography level="title-lg">
                {t.checkout.orderSummary.total}
              </Typography>
              <Typography level="title-lg">
                {t.products.currency}
                {totalPrice.toFixed(2)}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                component={Link}
                href="/cart"
                onClick={onClose}
                variant="outlined"
                sx={{ flex: 1 }}
              >
                {t.cart.viewCart}
              </Button>
              <Button
                component={Link}
                href="/checkout"
                onClick={onClose}
                sx={{ flex: 1 }}
              >
                {t.cart.checkout}
              </Button>
            </Box>
          </>
        )}
      </Sheet>
    </Modal>
  );
}
