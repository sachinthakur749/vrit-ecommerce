"use client";

import { useCart } from "@/context/CartContext";
import ProtectedRoute from "@/components/ui/ProtectedRoute";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, total, itemCount } =
    useCart();

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-[#f5f5f7] pt-24">
        <div className="max-w-5xl mx-auto px-6 py-12">
          {/* Header */}
          <h1 className="text-[48px] font-semibold text-[#1d1d1f] tracking-tight mb-2">
            Your Cart
          </h1>
          <p className="text-[17px] text-[#6e6e73] mb-10">
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </p>

          {items.length === 0 ? (
            <div className="text-center py-32">
              <p className="text-[21px] text-[#6e6e73] mb-4">
                Your cart is empty
              </p>
              <Link
                href="/products"
                className="text-[#0071e3] hover:underline text-[17px]"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Items Column */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-6 bg-white rounded-[18px] p-6
                               shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                  >
                    {/* Image */}
                    <div className="relative w-28 h-28 bg-[#f5f5f7] rounded-[12px] overflow-hidden shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.title}
                        fill
                        sizes="112px"
                        className="object-contain p-2"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-[17px] font-semibold text-[#1d1d1f] line-clamp-2 leading-tight">
                          {item.product.title}
                        </p>
                        <p className="text-[14px] text-[#6e6e73] mt-1">
                          {item.product.category}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <p className="text-[19px] font-semibold text-[#1d1d1f]">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-[14px] text-[#6e6e73] hover:text-red-500 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center">
                      <div className="flex items-center bg-[#f5f5f7] rounded-full">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              Math.max(1, item.quantity - 1),
                            )
                          }
                          className="w-10 h-10 flex items-center justify-center text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
                        >
                          −
                        </button>
                        <span className="w-10 text-center text-[15px] font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="w-10 h-10 flex items-center justify-center text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Clear Cart */}
                <button
                  onClick={clearCart}
                  className="text-[14px] text-[#6e6e73] hover:text-red-500 transition-colors text-left mt-2"
                >
                  Clear Cart
                </button>
              </div>

              {/* Summary */}
              <div
                className="bg-white rounded-[18px] p-8 h-fit sticky top-28
                            shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
              >
                <h2 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">
                  Summary
                </h2>

                <div className="flex justify-between text-[15px] text-[#6e6e73] mb-3">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[15px] text-[#6e6e73] mb-6">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>

                <div className="border-t border-[#e8e8ed] pt-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-[19px] font-semibold text-[#1d1d1f]">
                      Total
                    </span>
                    <span className="text-[19px] font-semibold text-[#1d1d1f]">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  className="w-full bg-[#0071e3] text-white py-4 rounded-[12px] text-[17px] font-medium
                               hover:bg-[#0077ed] transition-colors"
                >
                  Checkout
                </button>

                <Link
                  href="/products"
                  className="block text-center text-[15px] text-[#0071e3] hover:underline mt-4"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </ProtectedRoute>
  );
}
