"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Sheet,
  Typography,
  Badge,
} from "@mui/joy";
import { Menu, Close, ShoppingBag } from "@mui/icons-material";
import { useLanguage } from "../contexts/LanguageContext";
import { useCart } from "../contexts/CartContext";
import type { ShopTranslations } from "../translations/types";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { translations, toggleLanguage, language } = useLanguage();
  const { totalItems } = useCart();
  const t = translations.navigation;
  const shopT = translations.shop as ShopTranslations;

  const menuItems = [
    { href: "/", label: t.home },
    { href: "/shop", label: t.shop },
    { href: "/about", label: t.about },
    { href: "/contact", label: t.contact },
  ];

  return (
    <Sheet
      component="nav"
      sx={{
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 1000,
        p: 2,
        bgcolor: "background.surface",
        boxShadow: "sm",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          maxWidth: "lg",
          mx: "auto",
          position: "relative",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* Logo */}
        <Typography
          level="h4"
          component={Link}
          href="/"
          sx={{
            textDecoration: "none",
            color: "primary.500",
            fontWeight: "bold",
            flex: "0 0 auto",
          }}
        >
          {t.logo}
        </Typography>

        {/* Desktop Menu */}
        <List
          role="menubar"
          orientation="horizontal"
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
            flex: "0 1 auto",
            justifyContent: "center",
          }}
        >
          {menuItems.map((item) => (
            <ListItem key={item.href}>
              <ListItemButton
                component={Link}
                href={item.href}
                sx={{ borderRadius: "sm" }}
              >
                {item.label}
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem>
            <ListItemButton onClick={toggleLanguage}>
              {language === "en" ? "🇺🇦 UA" : "🇬🇧 EN"}
            </ListItemButton>
          </ListItem>
        </List>

        {/* Cart and Mobile Menu Button */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flex: "0 0 auto",
          }}
        >
          <IconButton
            component={Link}
            href="/cart"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Badge badgeContent={totalItems} color="primary">
              <ShoppingBag />
            </Badge>
          </IconButton>
          <IconButton
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            {mobileMenuOpen ? <Close /> : <Menu />}
          </IconButton>
        </Box>
      </Box>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <Box
          sx={{
            position: "fixed",
            top: "64px",
            left: 0,
            right: 0,
            bgcolor: "background.surface",
            p: 2,
            display: { xs: "block", md: "none" },
            boxShadow: "sm",
          }}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.href}>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem>
              <ListItemButton onClick={toggleLanguage}>
                {language === "en" ? "🇺🇦 UA" : "🇬🇧 EN"}
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                component={Link}
                href="/cart"
                onClick={() => setMobileMenuOpen(false)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Badge badgeContent={totalItems} color="primary">
                  <ShoppingBag />
                </Badge>
                <Typography>{shopT.cart.title}</Typography>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      )}
    </Sheet>
  );
}
