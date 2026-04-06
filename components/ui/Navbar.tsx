"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { itemCount } = useCart();
  const { isLoggedIn, logout } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-[18px] font-semibold text-[#1d1d1f] tracking-tight"
          >
            VritStore
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/showcase"
              className="text-[15px] text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
            >
              Showcase
            </Link>
            <Link
              href="/products"
              className="text-[15px] text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
            >
              Products
            </Link>
            <Link
              href="/cart"
              className="text-[15px] text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
            >
              Cart
            </Link>
          </div>

          {/* Auth / Cart */}
          <div className="flex items-center gap-6">
            <Link
              href="/cart"
              className="relative text-[15px] text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {mounted && itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#0071e3] text-white text-[11px] font-medium rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount > 9 ? "9+" : itemCount}
                </span>
              )}
            </Link>

            {mounted ? (
              isLoggedIn ? (
                <button
                  onClick={logout}
                  className="text-[15px] text-[#6e6e73] hover:text-[#0071e3] transition-colors"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/login"
                  className="text-[15px] font-medium text-[#0071e3] hover:text-[#0077ed] transition-colors"
                >
                  Sign In
                </Link>
              )
            ) : (
              <div className="w-16" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
