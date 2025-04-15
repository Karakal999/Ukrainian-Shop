"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Input,
  Textarea,
  FormControl,
  FormHelperText,
  Autocomplete,
} from "@mui/joy";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";
import { useLanguage } from "../contexts/LanguageContext";

type SubjectKey = (typeof commonSubjects)[number];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: SubjectKey | string;
  message: string;
}

const commonSubjects = [
  "productInquiry",
  "orderStatus",
  "customOrder",
  "returnRequest",
  "shipping",
  "sizeAndFit",
  "other",
] as const;

export default function ContactPage() {
  const { translations } = useLanguage();
  const t = translations.contact;

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return t.emailError;
    }
    return "";
  };

  const formatPhoneNumber = (phone: string) => {
    const digits = phone.replace(/\D/g, "");

    if (digits.startsWith("380") || digits.startsWith("0")) {
      if (digits.startsWith("380")) {
        return digits.replace(
          /(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/,
          "+$1 ($2) $3-$4-$5"
        );
      } else if (digits.startsWith("0")) {
        return digits
          .replace(/^0/, "+380 ")
          .replace(
            /(\+\d{3})\s(\d{2})(\d{3})(\d{2})(\d{2})/,
            "$1 ($2) $3-$4-$5"
          );
      }
    }
    return phone;
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\+380\s?\(\d{2}\)\s?\d{3}-\d{2}-\d{2}$/;
    if (phone && !phoneRegex.test(phone)) {
      return t.phoneError;
    }
    return "";
  };

  const handleInputChange = (
    field: keyof FormData,
    value: string,
    shouldFormat: boolean = false
  ) => {
    let formattedValue = value;
    if (shouldFormat && field === "phone") {
      formattedValue = formatPhoneNumber(value);
    }

    setFormData((prev) => ({
      ...prev,
      [field]: formattedValue,
    }));

    let error = "";
    if (field === "email") {
      error = validateEmail(value);
    } else if (field === "phone") {
      error = validatePhone(formattedValue);
    }

    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<FormData> = {};
    if (!formData.firstName) newErrors.firstName = t.required;
    if (!formData.lastName) newErrors.lastName = t.required;
    if (!formData.email) {
      newErrors.email = t.required;
    } else {
      const emailError = validateEmail(formData.email);
      if (emailError) newErrors.email = emailError;
    }
    if (formData.phone) {
      const phoneError = validatePhone(formData.phone);
      if (phoneError) newErrors.phone = phoneError;
    }
    if (!formData.subject) newErrors.subject = t.required;
    if (!formData.message) newErrors.message = t.required;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        pt: 10,
        pb: 6,
        px: 2,
        bgcolor: "background.body",
      }}
    >
      <Box
        sx={{
          maxWidth: "lg",
          mx: "auto",
        }}
      >
        <Typography
          level="h1"
          sx={{
            textAlign: "center",
            mb: 6,
            color: "primary.500",
          }}
        >
          {t.title}
        </Typography>

        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid xs={12} md={7}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: 4,
                border: "1px solid",
                borderColor: "primary.500",
                borderRadius: "lg",
                bgcolor: "background.surface",
              }}
            >
              <Typography level="h3" sx={{ mb: 4 }}>
                {t.sendMessage}
              </Typography>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6}>
                  <FormControl error={!!errors.firstName}>
                    <Input
                      size="lg"
                      placeholder={t.firstName}
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      required
                    />
                    {errors.firstName && (
                      <FormHelperText>{errors.firstName}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6}>
                  <FormControl error={!!errors.lastName}>
                    <Input
                      size="lg"
                      placeholder={t.lastName}
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      required
                    />
                    {errors.lastName && (
                      <FormHelperText>{errors.lastName}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid xs={12}>
                  <FormControl error={!!errors.email}>
                    <Input
                      type="email"
                      size="lg"
                      placeholder={t.email}
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                    />
                    {errors.email && (
                      <FormHelperText>{errors.email}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid xs={12}>
                  <FormControl error={!!errors.phone}>
                    <Input
                      size="lg"
                      placeholder={t.phoneFormat}
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value, true)
                      }
                    />
                    {errors.phone && (
                      <FormHelperText>{errors.phone}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid xs={12}>
                  <FormControl error={!!errors.subject}>
                    <Autocomplete<SubjectKey, false, true, true>
                      size="lg"
                      placeholder={t.subject}
                      options={commonSubjects}
                      getOptionLabel={(option) =>
                        typeof option === "string"
                          ? t.subjects[option as SubjectKey] || option
                          : ""
                      }
                      value={formData.subject}
                      onChange={(_, newValue) =>
                        handleInputChange("subject", newValue || "")
                      }
                      freeSolo
                      required
                    />
                    {errors.subject && (
                      <FormHelperText>{errors.subject}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid xs={12}>
                  <FormControl error={!!errors.message}>
                    <Textarea
                      size="lg"
                      minRows={4}
                      placeholder={t.message}
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      required
                    />
                    {errors.message && (
                      <FormHelperText>{errors.message}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid xs={12}>
                  <Button
                    type="submit"
                    size="lg"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    {t.submit}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Contact Information */}
          <Grid xs={12} md={5}>
            <Box sx={{ height: "100%" }}>
              <Typography level="h3" sx={{ mb: 4 }}>
                {t.contactInfo}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <EmailIcon sx={{ color: "primary.500" }} />
                  <Box>
                    <Typography level="title-lg">{t.email}</Typography>
                    <Typography
                      level="body-md"
                      sx={{ color: "text.secondary" }}
                    >
                      info@ukrainianshop.com
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <PhoneIcon sx={{ color: "primary.500" }} />
                  <Box>
                    <Typography level="title-lg">{t.phone}</Typography>
                    <Typography
                      level="body-md"
                      sx={{ color: "text.secondary" }}
                    >
                      +380 (50) 123-45-67
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <LocationIcon sx={{ color: "primary.500" }} />
                  <Box>
                    <Typography level="title-lg">{t.address}</Typography>
                    <Typography
                      level="body-md"
                      sx={{ color: "text.secondary" }}
                    >
                      123 Ukrainian Street
                      <br />
                      Kyiv, 01001
                      <br />
                      Ukraine
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
