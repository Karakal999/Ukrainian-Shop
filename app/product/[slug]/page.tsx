"use client";

import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "../../store/cartStore";

// This would typically come from your database or API based on the slug
const getProduct = (slug: string) => ({
  id: "1",
  name: "Traditional Vyshyvanka",
  price: 129.99,
  description:
    "Beautiful hand-embroidered traditional Ukrainian vyshyvanka made from 100% natural linen. Features intricate floral patterns in red and black threads, symbolizing protection and fertility in Ukrainian culture.",
  images: [
    "/products/vyshyvanka-1.jpg",
    "/products/vyshyvanka-2.jpg",
    "/products/vyshyvanka-3.jpg",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  details: [
    "100% natural linen",
    "Hand-embroidered in Ukraine",
    "Traditional patterns",
    "Unisex design",
    "Machine washable",
  ],
  category: "Vyshyvankas",
  slug,
});

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  const [selectedSize, setSelectedSize] = useState("M");
  const [mainImage, setMainImage] = useState(product.images[0]);
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      size: selectedSize,
      image: product.images[0],
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
            <Image
              src={mainImage}
              alt={product.name}
              width={800}
              height={800}
              className="h-full w-full object-cover object-center"
              priority
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setMainImage(image)}
                className={`aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg ${
                  mainImage === image ? "ring-2 ring-black" : ""
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover object-center cursor-pointer hover:opacity-75"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-semibold mt-2">${product.price}</p>
            <p className="text-gray-600 mt-4">{product.description}</p>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">Size</h3>
            <div className="grid grid-cols-5 gap-2 mt-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border rounded-md py-2 text-sm font-medium transition-colors ${
                    selectedSize === size
                      ? "border-black bg-black text-white"
                      : "hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
            Add to Cart
          </button>

          {/* Product Details */}
          <div className="border-t pt-8">
            <h3 className="text-lg font-medium mb-4">Product Details</h3>
            <ul className="list-disc pl-5 space-y-2">
              {product.details.map((detail, index) => (
                <li key={index} className="text-gray-600">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
