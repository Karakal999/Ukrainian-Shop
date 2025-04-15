"use client";

import {
  Box,
  Typography,
  FormControl,
  FormLabel,
  Input,
  Grid,
  Select,
  Option,
  FormHelperText,
} from "@mui/joy";
import { useLanguage } from "../../contexts/LanguageContext";
import { useState, useEffect } from "react";
import {
  countries,
  validateEmail,
  validatePhone,
  validatePostalCode,
  formatPhoneNumber,
} from "../../utils/locationData";

interface ShippingFormProps {
  shippingData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    postalCode: string;
  };
  handleShippingChange: (field: string, value: string) => void;
}

export default function ShippingForm({
  shippingData,
  handleShippingChange,
}: ShippingFormProps) {
  const { translations } = useLanguage();
  const t = translations.shop.checkout.shippingForm;

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [availableCities, setAvailableCities] = useState<string[]>([]);

  useEffect(() => {
    if (shippingData.country) {
      const country = countries.find((c) => c.code === shippingData.country);
      setAvailableCities(country?.cities || []);
    }
  }, [shippingData.country]);

  const validateField = (field: string, value: string) => {
    switch (field) {
      case "email":
        return validateEmail(value) ? "" : t.errors.invalidEmail;
      case "phone":
        return validatePhone(value, shippingData.country)
          ? ""
          : t.errors.invalidPhone;
      case "postalCode":
        return validatePostalCode(value, shippingData.country)
          ? ""
          : t.errors.invalidPostalCode;
      default:
        return value.trim() ? "" : t.errors.required;
    }
  };

  const handleFieldChange = (field: string, value: string) => {
    let processedValue = value;

    if (field === "phone" && shippingData.country) {
      processedValue = formatPhoneNumber(value, shippingData.country);
    }

    handleShippingChange(field, processedValue);
    const error = validateField(field, processedValue);
    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));
  };

  return (
    <Box>
      <Typography level="h4" sx={{ mb: 3 }}>
        {t.title}
      </Typography>

      <Grid container spacing={2}>
        <Grid xs={12} sm={6}>
          <FormControl error={!!errors.firstName}>
            <FormLabel>{t.firstName}</FormLabel>
            <Input
              value={shippingData.firstName}
              onChange={(e) => handleFieldChange("firstName", e.target.value)}
              required
            />
            {errors.firstName && (
              <FormHelperText>{errors.firstName}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid xs={12} sm={6}>
          <FormControl error={!!errors.lastName}>
            <FormLabel>{t.lastName}</FormLabel>
            <Input
              value={shippingData.lastName}
              onChange={(e) => handleFieldChange("lastName", e.target.value)}
              required
            />
            {errors.lastName && (
              <FormHelperText>{errors.lastName}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid xs={12} sm={6}>
          <FormControl error={!!errors.email}>
            <FormLabel>{t.email}</FormLabel>
            <Input
              type="email"
              value={shippingData.email}
              onChange={(e) => handleFieldChange("email", e.target.value)}
              required
            />
            {errors.email && <FormHelperText>{errors.email}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid xs={12} sm={6}>
          <FormControl error={!!errors.phone}>
            <FormLabel>{t.phone}</FormLabel>
            <Input
              value={shippingData.phone}
              onChange={(e) => handleFieldChange("phone", e.target.value)}
              placeholder={
                shippingData.country
                  ? countries.find((c) => c.code === shippingData.country)
                      ?.phoneCode
                  : ""
              }
              required
            />
            {errors.phone && <FormHelperText>{errors.phone}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid xs={12}>
          <FormControl error={!!errors.address}>
            <FormLabel>{t.address}</FormLabel>
            <Input
              value={shippingData.address}
              onChange={(e) => handleFieldChange("address", e.target.value)}
              required
            />
            {errors.address && (
              <FormHelperText>{errors.address}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid xs={12} sm={6}>
          <FormControl error={!!errors.country}>
            <FormLabel>{t.country}</FormLabel>
            <Select
              value={shippingData.country}
              onChange={(_, value) => {
                if (value) {
                  handleFieldChange("country", value);
                  handleFieldChange("city", ""); // Reset city when country changes
                }
              }}
              required
            >
              {countries.map((country) => (
                <Option key={country.code} value={country.code}>
                  {country.name}
                </Option>
              ))}
            </Select>
            {errors.country && (
              <FormHelperText>{errors.country}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid xs={12} sm={6}>
          <FormControl error={!!errors.city}>
            <FormLabel>{t.city}</FormLabel>
            <Select
              value={shippingData.city}
              onChange={(_, value) => value && handleFieldChange("city", value)}
              required
              disabled={!shippingData.country}
            >
              {availableCities.map((city) => (
                <Option key={city} value={city}>
                  {city}
                </Option>
              ))}
            </Select>
            {errors.city && <FormHelperText>{errors.city}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid xs={12} sm={6}>
          <FormControl error={!!errors.postalCode}>
            <FormLabel>{t.postalCode}</FormLabel>
            <Input
              value={shippingData.postalCode}
              onChange={(e) => handleFieldChange("postalCode", e.target.value)}
              required
            />
            {errors.postalCode && (
              <FormHelperText>{errors.postalCode}</FormHelperText>
            )}
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
