"use client";

import Image from "next/image";
import Link from "next/link";
import { Typography, Button, Grid, Box, Card, AspectRatio } from "@mui/joy";
import { useLanguage } from "./contexts/LanguageContext";
import { ShoppingBag } from "@mui/icons-material";
import {
  getCurrencyFromLanguage,
  formatCurrency,
  convertPrice,
} from "./utils/currencyConverter";

interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export default function Home() {
  const { translations, language } = useLanguage();
  const t = translations.home;
  const currency = getCurrencyFromLanguage(language);

  const categories = [
    {
      key: "vyshyvankas",
      image: "/vyshyvanka.jpg",
      href: "/shop/vyshyvankas",
    },
    {
      key: "modernDesigns",
      image: "/modern.jpg",
      href: "/shop/modern",
    },
    {
      key: "accessories",
      image: "/accessories.jpg",
      href: "/shop/accessories",
    },
  ] as const;

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 8,
        }}
      >
        <Image
          src="/hero-bg.jpg"
          alt={t.imageAlts.heroBackground}
          fill
          style={{ objectFit: "cover", filter: "brightness(0.4)" }}
          priority
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            px: 4,
          }}
        >
          <Typography
            level="h1"
            sx={{
              mb: 3,
              color: "primary.500",
              fontWeight: 700,
            }}
          >
            {t.hero.title}
          </Typography>
          <Typography
            level="h3"
            sx={{
              mb: 4,
              color: "white",
            }}
          >
            {t.hero.subtitle}
          </Typography>
          <Button
            component={Link}
            href="/shop"
            size="lg"
            color="primary"
            sx={{
              px: 4,
              py: 1.5,
            }}
          >
            {t.hero.shopNow}
          </Button>
        </Box>
      </Box>

      {/* Featured Categories */}
      <Box
        sx={{
          py: 8,
          px: 2,
          maxWidth: "lg",
          mx: "auto",
        }}
      >
        <Typography
          level="h2"
          sx={{
            textAlign: "center",
            mb: 6,
            color: "primary.500",
          }}
        >
          {t.collections.title}
        </Typography>
        <Grid container spacing={4}>
          {categories.map((category) => (
            <Grid key={category.key} xs={12} md={4}>
              <Card
                component={Link}
                href={category.href}
                sx={{
                  height: 360,
                  position: "relative",
                  display: "block",
                  textDecoration: "none",
                  "&:hover": {
                    transform: "scale(1.02)",
                    transition: "transform 0.3s ease-in-out",
                  },
                }}
              >
                <AspectRatio ratio="1" sx={{ height: "100%" }}>
                  <Image
                    src={category.image}
                    alt={t.collections.categories[category.key]}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      bgcolor: "rgba(0, 0, 0, 0.6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      "&:hover": {
                        bgcolor: "rgba(0, 0, 0, 0.4)",
                      },
                    }}
                  >
                    <Typography
                      level="h3"
                      sx={{
                        color: "white",
                      }}
                    >
                      {t.collections.categories[category.key]}
                    </Typography>
                  </Box>
                </AspectRatio>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Featured Products */}
      <Box
        sx={{
          bgcolor: "background.surface",
          py: 8,
          px: 2,
        }}
      >
        <Box
          sx={{
            maxWidth: "lg",
            mx: "auto",
          }}
        >
          <Typography
            level="h2"
            sx={{
              textAlign: "center",
              mb: 6,
              color: "primary.500",
            }}
          >
            {t.featuredProducts.title}
          </Typography>
          <Grid container spacing={4}>
            {t.featuredProducts.products.map(
              (product: Product, index: number) => (
                <Grid key={index} xs={12} sm={6} md={3}>
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
                    <AspectRatio
                      ratio="1"
                      sx={{ transition: "transform 0.3s ease-in-out" }}
                    >
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
                      <Typography
                        level="body-sm"
                        sx={{ mb: 2, color: "text.secondary" }}
                      >
                        {product.category}
                      </Typography>
                      <Typography
                        level="h4"
                        sx={{ color: "primary.500", fontWeight: "bold", mb: 2 }}
                      >
                        {formatCurrency(
                          convertPrice(product.price, currency),
                          currency
                        )}
                      </Typography>
                      <Button
                        size="lg"
                        color="primary"
                        startDecorator={<ShoppingBag />}
                        fullWidth
                      >
                        {t.hero.shopNow}
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              )
            )}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
