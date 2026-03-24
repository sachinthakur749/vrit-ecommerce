"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Metadata } from "next";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { setIsLoggedIn } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) throw new Error("Invalid username or password");

      const data = await res.json();
      localStorage.setItem("token", data.token);
      setIsLoggedIn(true);
      router.push("/products");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-md mx-auto px-4 py-20">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Sign in to <span className="text-black">Vrit</span>
        <span className="text-blue-500">Store</span>
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        Use username: <strong>mor_2314</strong> and password:{" "}
        <strong>83r5^_</strong>
      </p>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-500 text-sm mb-4">
          {error}
        </div>
      )}

      <div className="flex flex-col gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="bg-blue-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </div>

      <p className="text-sm text-gray-500 mt-4 text-center">
        Don&apos;t have an account?{" "}
        <span className="text-blue-500">Use the test credentials above</span>
      </p>
    </main>
  );
}
