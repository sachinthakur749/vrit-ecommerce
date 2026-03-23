// components/ui/Navbar.tsx
"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { itemCount } = useCart();

  return (
    <nav className="border-b border-gray-200 bg-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-gray-900">
          FakeStore
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/products"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Products
          </Link>
          <Link
            href="/cart"
            className="relative text-sm text-gray-600 hover:text-gray-900"
          >
            Cart
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-4 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
