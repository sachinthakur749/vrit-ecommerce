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
    <div className="flex items-center gap-4 mt-6">
      {/* Quantity Selector */}
      <div className="flex items-center bg-[#f5f5f7] rounded-full">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="w-11 h-11 flex items-center justify-center text-[#6e6e73]
                     hover:text-[#1d1d1f] transition-colors text-lg"
        >
          −
        </button>
        <span className="w-12 text-center text-[17px] font-medium">
          {quantity}
        </span>
        <button
          onClick={() => setQuantity((q) => q + 1)}
          className="w-11 h-11 flex items-center justify-center text-[#6e6e73]
                     hover:text-[#1d1d1f] transition-colors text-lg"
        >
          +
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAdd}
        className={`flex-1 bg-[#0071e3] text-white px-8 py-4 rounded-[12px] text-[17px] font-medium
                    transition-all ${
                      added
                        ? "bg-green-500"
                        : "hover:bg-[#0077ed]"
                    }`}
      >
        {added ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}
