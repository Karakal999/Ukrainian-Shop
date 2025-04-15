interface ContactTranslation {
  title: string;
  sendMessage: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  phoneFormat: string;
  subject: string;
  message: string;
  submit: string;
  contactInfo: string;
  address: string;
  required: string;
  emailError: string;
  phoneError: string;
  subjects: {
    productInquiry: string;
    orderStatus: string;
    customOrder: string;
    returnRequest: string;
    shipping: string;
    sizeAndFit: string;
    other: string;
  };
}

export const contact: { en: ContactTranslation; uk: ContactTranslation } = {
  en: {
    title: "Contact Us",
    sendMessage: "Send us a Message",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    phoneFormat: "Phone (Optional) +380 (XX) XXX-XX-XX",
    subject: "Subject",
    message: "Message",
    submit: "Send Message",
    contactInfo: "Contact Information",
    address: "Address",
    required: "This field is required",
    emailError: "Please enter a valid email address",
    phoneError:
      "Please enter a valid Ukrainian phone number: +380 (XX) XXX-XX-XX",
    subjects: {
      productInquiry: "Product Inquiry",
      orderStatus: "Order Status",
      customOrder: "Custom Order Request",
      returnRequest: "Return Request",
      shipping: "Shipping Question",
      sizeAndFit: "Size and Fit",
      other: "Other",
    },
  },
  uk: {
    title: "Зв'язатися з нами",
    sendMessage: "Надіслати повідомлення",
    firstName: "Ім'я",
    lastName: "Прізвище",
    email: "Електронна пошта",
    phone: "Телефон",
    phoneFormat: "Телефон (необов'язково) +380 (XX) XXX-XX-XX",
    subject: "Тема",
    message: "Повідомлення",
    submit: "Надіслати",
    contactInfo: "Контактна інформація",
    address: "Адреса",
    required: "Це поле обов'язкове",
    emailError: "Будь ласка, введіть дійсну адресу електронної пошти",
    phoneError:
      "Будь ласка, введіть дійсний український номер телефону: +380 (XX) XXX-XX-XX",
    subjects: {
      productInquiry: "Запит про товар",
      orderStatus: "Статус замовлення",
      customOrder: "Індивідуальне замовлення",
      returnRequest: "Запит на повернення",
      shipping: "Питання доставки",
      sizeAndFit: "Розмір та підгонка",
      other: "Інше",
    },
  },
};
