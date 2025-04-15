# Ukrainian Traditional Clothing Shop

A modern e-commerce website showcasing traditional Ukrainian clothing, with a focus on vyshyvankas and contemporary interpretations of Ukrainian fashion.

## Features

- 🛍️ Browse through a curated collection of traditional Ukrainian clothing
- 🔍 Filter products by category and price range
- 🛒 Shopping cart with persistent storage
- 💳 Secure checkout process
- 📱 Fully responsive design
- 🎨 Modern and clean user interface

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Payment Processing**: Stripe (integration ready)
- **Icons**: Lucide React

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ukrainian-shop.git
cd ukrainian-shop
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
ukrainian-shop/
├── app/
│   ├── components/    # Reusable UI components
│   ├── store/        # State management
│   ├── about/        # About page
│   ├── cart/         # Shopping cart
│   ├── checkout/     # Checkout process
│   ├── contact/      # Contact information
│   ├── product/      # Product details
│   └── shop/         # Product listing
├── public/           # Static assets
└── ...
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Traditional Ukrainian patterns and designs
- Ukrainian artisans and craftspeople
- The vibrant Ukrainian cultural heritage

## Support

For support, email info@ukrainianshop.com or visit our [contact page](https://ukrainianshop.com/contact).
