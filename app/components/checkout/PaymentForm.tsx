"use client";

import {
  Box,
  Typography,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
} from "@mui/joy";
import { useLanguage } from "../../contexts/LanguageContext";

interface PaymentFormProps {
  paymentData: {
    method: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
  };
  handlePaymentChange: (field: string, value: string) => void;
}

export default function PaymentForm({
  paymentData,
  handlePaymentChange,
}: PaymentFormProps) {
  const { translations } = useLanguage();
  const t = translations.shop.checkout.paymentForm;

  return (
    <Box>
      <Typography level="h4" sx={{ mb: 3 }}>
        {t.method}
      </Typography>

      <FormControl sx={{ mb: 3 }}>
        <RadioGroup
          value={paymentData.method}
          onChange={(e) => handlePaymentChange("method", e.target.value)}
        >
          <Radio value="card" label={t.creditCard} />
          <Radio value="paypal" label={t.paypal} />
          <Radio value="cod" label={t.cashOnDelivery} />
        </RadioGroup>
      </FormControl>

      {paymentData.method === "card" && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <FormControl>
            <FormLabel>{t.cardNumber}</FormLabel>
            <Input
              value={paymentData.cardNumber}
              onChange={(e) =>
                handlePaymentChange("cardNumber", e.target.value)
              }
              placeholder="1234 5678 9012 3456"
            />
          </FormControl>

          <Box sx={{ display: "flex", gap: 2 }}>
            <FormControl sx={{ flex: 1 }}>
              <FormLabel>{t.expiryDate}</FormLabel>
              <Input
                value={paymentData.expiryDate}
                onChange={(e) =>
                  handlePaymentChange("expiryDate", e.target.value)
                }
                placeholder="MM/YY"
              />
            </FormControl>

            <FormControl sx={{ flex: 1 }}>
              <FormLabel>{t.cvv}</FormLabel>
              <Input
                value={paymentData.cvv}
                onChange={(e) => handlePaymentChange("cvv", e.target.value)}
                placeholder="123"
                type="password"
              />
            </FormControl>
          </Box>
        </Box>
      )}
    </Box>
  );
}
