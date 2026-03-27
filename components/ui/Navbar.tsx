"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { itemCount } = useCart();
  const { isLoggedIn, logout } = useAuth();

  console.log(isLoggedIn);

  return (
    <nav className="border-b border-gray-200 bg-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-lg font-bold">
          <span className="text-black">Vrit</span>
          <span className="text-blue-500">Store</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/figma"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Figma
          </Link>
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

          {isLoggedIn ? (
            <button
              onClick={logout}
              className="text-sm text-red-500 hover:underline"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="text-sm text-blue-500 hover:underline"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
