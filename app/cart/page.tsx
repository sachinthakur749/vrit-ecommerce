// app/cart/page.tsx
"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, total, itemCount } =
    useCart();

  if (items.length === 0) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Cart</h1>
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg">Your cart is empty</p>
          <Link
            href="/products"
            className="text-blue-500 hover:underline text-sm mt-2 inline-block"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Your Cart ({itemCount} items)
        </h1>
        <button
          onClick={clearCart}
          className="text-sm text-red-500 hover:underline"
        >
          Clear Cart
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div
            key={item.product.id}
            className="flex gap-4 border border-gray-200 rounded-lg p-4 bg-white"
          >
            {/* Image */}
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src={item.product.image}
                alt={item.product.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col gap-1 flex-1">
              <p className="text-sm font-semibold text-gray-800 line-clamp-2">
                {item.product.title}
              </p>
              <p className="text-xs text-gray-400">{item.product.category}</p>
              <p className="text-sm font-bold text-gray-900">
                ${item.product.price.toFixed(2)}
              </p>
            </div>

            {/* Quantity + Remove */}
            <div className="flex flex-col items-end justify-between">
              {/* Quantity */}
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() =>
                    updateQuantity(
                      item.product.id,
                      Math.max(1, item.quantity - 1),
                    )
                  }
                  className="px-2 py-1 text-gray-600 hover:bg-gray-100 text-sm"
                >
                  -
                </button>
                <span className="px-3 py-1 text-sm">{item.quantity}</span>
                <button
                  onClick={() =>
                    updateQuantity(item.product.id, item.quantity + 1)
                  }
                  className="px-2 py-1 text-gray-600 hover:bg-gray-100 text-sm"
                >
                  +
                </button>
              </div>

              {/* Subtotal */}
              <p className="text-sm font-semibold text-gray-700">
                ${(item.product.price * item.quantity).toFixed(2)}
              </p>

              {/* Remove */}
              <button
                onClick={() => removeItem(item.product.id)}
                className="text-xs text-red-400 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="mt-8 border-t border-gray-200 pt-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">Subtotal ({itemCount} items)</span>
          <span className="font-semibold">${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-bold text-gray-900">Total</span>
          <span className="text-lg font-bold text-gray-900">
            ${total.toFixed(2)}
          </span>
        </div>
        <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600">
          Checkout
        </button>
        <Link
          href="/products"
          className="block text-center text-sm text-blue-500 hover:underline mt-3"
        >
          Continue Shopping
        </Link>
      </div>
    </main>
  );
}
