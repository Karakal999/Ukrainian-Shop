interface Country {
  code: string;
  name: string;
  phoneCode: string;
  postalCodeFormat: string;
  cities: string[];
}

export const countries: Country[] = [
  {
    code: "UA",
    name: "Ukraine",
    phoneCode: "+380",
    postalCodeFormat: "^\\d{5}$",
    cities: [
      "Kyiv",
      "Kharkiv",
      "Odesa",
      "Dnipro",
      "Lviv",
      "Zaporizhzhia",
      "Vinnytsia",
      "Khmelnytskyi",
      "Lutsk",
      "Rivne",
      "Ternopil",
      "Uzhhorod",
      "Ivano-Frankivsk",
      "Chernivtsi",
    ],
  },
  {
    code: "US",
    name: "United States",
    phoneCode: "+1",
    postalCodeFormat: "^\\d{5}(-\\d{4})?$",
    cities: [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Phoenix",
      "Philadelphia",
      "San Antonio",
      "San Diego",
      "Dallas",
      "San Jose",
    ],
  },
];

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string, countryCode: string): boolean => {
  const country = countries.find((c) => c.code === countryCode);
  if (!country) return false;

  // Remove all non-digit characters
  const cleanPhone = phone.replace(/\D/g, "");

  // Validate based on country
  switch (countryCode) {
    case "UA":
      return /^380\d{9}$/.test(cleanPhone);
    case "US":
      return /^1?\d{10}$/.test(cleanPhone);
    default:
      return false;
  }
};

export const validatePostalCode = (
  postalCode: string,
  countryCode: string
): boolean => {
  const country = countries.find((c) => c.code === countryCode);
  if (!country) return false;

  const regex = new RegExp(country.postalCodeFormat);
  return regex.test(postalCode);
};

export const formatPhoneNumber = (
  phone: string,
  countryCode: string
): string => {
  const cleanPhone = phone.replace(/\D/g, "");

  switch (countryCode) {
    case "UA":
      if (cleanPhone.length === 12) {
        return `+${cleanPhone.slice(0, 3)} (${cleanPhone.slice(
          3,
          5
        )}) ${cleanPhone.slice(5, 8)}-${cleanPhone.slice(
          8,
          10
        )}-${cleanPhone.slice(10)}`;
      }
      break;
    case "US":
      if (cleanPhone.length === 10) {
        return `+1 (${cleanPhone.slice(0, 3)}) ${cleanPhone.slice(
          3,
          6
        )}-${cleanPhone.slice(6)}`;
      }
      break;
  }

  return phone;
};
