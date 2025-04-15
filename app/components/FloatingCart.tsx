"use client";

import { useState } from "react";
import { IconButton, Badge } from "@mui/joy";
import { ShoppingBag } from "@mui/icons-material";
import { useCart } from "../contexts/CartContext";
import CartModal from "./CartModal";

export default function FloatingCart() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
      <IconButton
        onClick={() => setIsModalOpen(true)}
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1100,
          bgcolor: "primary.500",
          color: "white",
          width: 56,
          height: 56,
          borderRadius: "50%",
          boxShadow: "md",
          "&:hover": {
            bgcolor: "primary.600",
          },
        }}
      >
        <Badge badgeContent={totalItems} color="danger">
          <ShoppingBag />
        </Badge>
      </IconButton>
      <CartModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
