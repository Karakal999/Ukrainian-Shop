"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stepper,
  Step,
  StepIndicator,
  Stack,
  CircularProgress,
} from "@mui/joy";
import { useLanguage } from "../contexts/LanguageContext";
import { useCart } from "../contexts/CartContext";
import { useRouter } from "next/navigation";
import ShippingForm from "../components/checkout/ShippingForm";
import PaymentForm from "../components/checkout/PaymentForm";
import ReviewOrder from "../components/checkout/ReviewOrder";
import { registerOrder } from "../services/orderService";
import {
  validateEmail,
  validatePhone,
  validatePostalCode,
} from "../utils/locationData";

export default function CheckoutPage() {
  const router = useRouter();
  const { translations, language } = useLanguage();
  const { items, totalPrice, clearCart } = useCart();
  const t = translations.shop.checkout;

  const [activeStep, setActiveStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [shippingData, setShippingData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  });
  const [paymentData, setPaymentData] = useState({
    method: "card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  // Redirect to cart if cart is empty
  if (items.length === 0) {
    router.push("/cart");
    return null;
  }

  const validateShippingData = () => {
    const errors: string[] = [];

    if (!shippingData.firstName.trim()) errors.push(t.errors.firstName);
    if (!shippingData.lastName.trim()) errors.push(t.errors.lastName);
    if (!validateEmail(shippingData.email)) errors.push(t.errors.email);
    if (!validatePhone(shippingData.phone, shippingData.country))
      errors.push(t.errors.phone);
    if (!shippingData.address.trim()) errors.push(t.errors.address);
    if (!shippingData.city) errors.push(t.errors.city);
    if (!shippingData.country) errors.push(t.errors.country);
    if (!validatePostalCode(shippingData.postalCode, shippingData.country))
      errors.push(t.errors.postalCode);

    return errors;
  };

  const validatePaymentData = () => {
    const errors: string[] = [];

    if (paymentData.method === "card") {
      if (!paymentData.cardNumber.trim()) errors.push(t.errors.cardNumber);
      if (!paymentData.expiryDate.trim()) errors.push(t.errors.expiryDate);
      if (!paymentData.cvv.trim()) errors.push(t.errors.cvv);
    }

    return errors;
  };

  const handleShippingChange = (field: string, value: string) => {
    setShippingData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePaymentChange = (field: string, value: string) => {
    setPaymentData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    let errors: string[] = [];

    if (activeStep === 0) {
      errors = validateShippingData();
    } else if (activeStep === 1) {
      errors = validatePaymentData();
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    setActiveStep((prev) => Math.min(prev + 1, 2));
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const handlePlaceOrder = async () => {
    try {
      setIsProcessing(true);

      const order = await registerOrder(
        items,
        shippingData,
        paymentData,
        totalPrice,
        language
      );

      clearCart();
      router.push("/checkout/success");
    } catch (error) {
      console.error("Failed to place order:", error);
      alert(t.errors.orderFailed);
    } finally {
      setIsProcessing(false);
    }
  };

  const steps = [
    {
      label: t.steps.shipping,
      content: (
        <ShippingForm
          shippingData={shippingData}
          handleShippingChange={handleShippingChange}
        />
      ),
    },
    {
      label: t.steps.payment,
      content: (
        <PaymentForm
          paymentData={paymentData}
          handlePaymentChange={handlePaymentChange}
        />
      ),
    },
    {
      label: t.steps.confirmation,
      content: <ReviewOrder items={items} totalPrice={totalPrice} />,
    },
  ];

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
      <Typography level="h2" sx={{ mb: 4, textAlign: "center" }}>
        {t.title}
      </Typography>

      <Stepper sx={{ mb: 4 }}>
        {steps.map((step, index) => (
          <Step
            key={step.label}
            indicator={
              <StepIndicator
                variant={activeStep === index ? "solid" : "soft"}
                color={activeStep >= index ? "primary" : "neutral"}
              >
                {index + 1}
              </StepIndicator>
            }
            active={activeStep >= index}
          >
            {step.label}
          </Step>
        ))}
      </Stepper>

      {steps[activeStep].content}

      <Stack
        direction="row"
        spacing={2}
        sx={{ mt: 4, justifyContent: "flex-end" }}
      >
        {activeStep > 0 && (
          <Button
            variant="outlined"
            color="neutral"
            onClick={handleBack}
            disabled={isProcessing}
          >
            {t.buttons.back}
          </Button>
        )}
        {activeStep < steps.length - 1 ? (
          <Button onClick={handleNext} disabled={isProcessing}>
            {t.buttons.next}
          </Button>
        ) : (
          <Button
            onClick={handlePlaceOrder}
            disabled={isProcessing}
            startDecorator={
              isProcessing ? <CircularProgress size="sm" /> : null
            }
          >
            {isProcessing ? t.buttons.processing : t.buttons.placeOrder}
          </Button>
        )}
      </Stack>
    </Box>
  );
}
