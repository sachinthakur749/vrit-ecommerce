"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex items-center gap-3 mt-2">
      <div className="flex items-center border border-gray-300 rounded-lg">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="px-3 py-2 text-gray-600 hover:bg-gray-100"
        >
          -
        </button>
        <span className="px-4 py-2 text-sm font-medium">{quantity}</span>
        <button
          onClick={() => setQuantity((q) => q + 1)}
          className="px-3 py-2 text-gray-600 hover:bg-gray-100"
        >
          +
        </button>
      </div>

      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-600"
      >
        {added ? "Added ✓" : "Add to Cart"}
      </button>
    </div>
  );
}
