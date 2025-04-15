"use client";

import { Box, Typography, Grid, Card } from "@mui/joy";
import { useLanguage } from "../contexts/LanguageContext";
import Image from "next/image";

export default function AboutPage() {
  const { translations } = useLanguage();
  const t = translations.about;

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        pt: 10,
        pb: 6,
        px: 2,
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          maxWidth: "lg",
          mx: "auto",
          mb: 8,
        }}
      >
        <Typography
          level="h1"
          sx={{
            textAlign: "center",
            mb: 2,
            color: "primary.500",
          }}
        >
          {t.title}
        </Typography>
      </Box>

      {/* Mission & Story Section */}
      <Box
        sx={{
          maxWidth: "lg",
          mx: "auto",
          mb: 8,
        }}
      >
        <Grid container spacing={6}>
          <Grid xs={12} md={6}>
            <Box sx={{ position: "relative", height: "100%", minHeight: 400 }}>
              <Image
                src="/about-mission.jpg"
                alt="Ukrainian traditional clothing"
                fill
                style={{ objectFit: "cover", borderRadius: "16px" }}
              />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography level="h2" sx={{ mb: 3, color: "primary.500" }}>
                {t.mission.title}
              </Typography>
              <Typography level="body-lg" sx={{ mb: 4 }}>
                {t.mission.description}
              </Typography>
              <Typography level="h2" sx={{ mb: 3, color: "primary.500" }}>
                {t.story.title}
              </Typography>
              <Typography level="body-lg">{t.story.description}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Values Section */}
      <Box
        sx={{
          bgcolor: "background.surface",
          py: 8,
          px: 2,
          mb: 8,
        }}
      >
        <Box sx={{ maxWidth: "lg", mx: "auto" }}>
          <Typography
            level="h2"
            sx={{
              textAlign: "center",
              mb: 6,
              color: "primary.500",
            }}
          >
            {t.values.title}
          </Typography>
          <Grid container spacing={4}>
            {[
              t.values.tradition,
              t.values.quality,
              t.values.sustainability,
            ].map((value, index) => (
              <Grid key={index} xs={12} md={4}>
                <Card
                  variant="outlined"
                  sx={{
                    height: "100%",
                    bgcolor: "background.surface",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <Typography level="h3" sx={{ mb: 2, color: "primary.500" }}>
                    {value.title}
                  </Typography>
                  <Typography level="body-md">{value.description}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Team Section */}
      <Box
        sx={{
          maxWidth: "lg",
          mx: "auto",
        }}
      >
        <Grid container spacing={6}>
          <Grid xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography level="h2" sx={{ mb: 3, color: "primary.500" }}>
                {t.team.title}
              </Typography>
              <Typography level="body-lg">{t.team.description}</Typography>
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Box sx={{ position: "relative", height: 400 }}>
              <Image
                src="/about-team.jpg"
                alt="Our team of artisans"
                fill
                style={{ objectFit: "cover", borderRadius: "16px" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
