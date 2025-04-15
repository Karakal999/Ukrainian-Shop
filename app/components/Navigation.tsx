"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sheet,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Box,
} from "@mui/joy";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Translate as TranslateIcon,
} from "@mui/icons-material";
import { useLanguage } from "../contexts/LanguageContext";

const navItems = [
  { path: "/", key: "home" },
  { path: "/shop", key: "shop" },
  { path: "/about", key: "about" },
  { path: "/contact", key: "contact" },
] as const;

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { translations, language, toggleLanguage } = useLanguage();
  const t = translations.navigation;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box component="nav">
      <Sheet
        sx={{
          display: "flex",
          alignItems: "center",
          position: "fixed",
          width: "100%",
          top: 0,
          zIndex: 1100,
          px: 2,
          py: 1,
          gap: 2,
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          component={Link}
          href="/"
          level="h4"
          sx={{
            flexGrow: { xs: 1, sm: 0 },
            textDecoration: "none",
            color: "primary.500",
          }}
        >
          {t.logo}
        </Typography>

        <List
          role="menubar"
          orientation="horizontal"
          sx={{
            display: { xs: "none", sm: "flex" },
            flexGrow: 1,
            justifyContent: "center",
            gap: 2,
          }}
        >
          {navItems.map((item) => (
            <ListItem key={item.key}>
              <ListItemButton
                component={Link}
                href={item.path}
                sx={{
                  borderRadius: "md",
                  color: "text.primary",
                  "&:hover": {
                    bgcolor: "background.level1",
                  },
                }}
              >
                {t[item.key]}
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <IconButton
          onClick={toggleLanguage}
          variant="outlined"
          sx={{
            ml: "auto",
            display: { xs: "none", sm: "flex" },
          }}
        >
          <TranslateIcon />
          <Typography level="body-sm" sx={{ ml: 1 }}>
            {language.toUpperCase()}
          </Typography>
        </IconButton>
      </Sheet>

      {/* Mobile drawer */}
      <Sheet
        sx={{
          display: { xs: mobileOpen ? "block" : "none", sm: "none" },
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1200,
        }}
      >
        <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
          <Typography level="h4" sx={{ ml: 2, color: "primary.500" }}>
            {t.menu}
          </Typography>
          <IconButton
            onClick={toggleLanguage}
            variant="outlined"
            sx={{ ml: "auto" }}
          >
            <TranslateIcon />
            <Typography level="body-sm" sx={{ ml: 1 }}>
              {language.toUpperCase()}
            </Typography>
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.key}>
              <ListItemButton
                component={Link}
                href={item.path}
                onClick={handleDrawerToggle}
                sx={{
                  color: "text.primary",
                  "&:hover": {
                    bgcolor: "background.level1",
                  },
                }}
              >
                {t[item.key]}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Sheet>
    </Box>
  );
}
