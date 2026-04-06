"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        },
      );

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
    <main className="min-h-screen bg-[#f5f5f7] flex items-center justify-center px-6 pt-16">
      <div className="w-full max-w-md">
        {/* Card */}
        <div
          className="bg-white rounded-[24px] p-12 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
        >
          <h1 className="text-[32px] font-semibold text-[#1d1d1f] text-center mb-2">
            Welcome to VritStore
          </h1>
          <p className="text-[17px] text-[#6e6e73] text-center mb-10">
            Sign in to continue shopping
          </p>

          {error && (
            <div className="bg-red-50 text-red-500 px-4 py-3 rounded-[12px] text-[15px] mb-6 text-center">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-5">
            <div>
              <label className="text-[15px] font-medium text-[#1d1d1f] block mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full bg-[#f5f5f7] rounded-[12px] px-5 py-4 text-[17px]
                           focus:outline-none focus:ring-[2px] focus:ring-[#0071e3]
                           placeholder:text-[#6e6e73] transition-all"
              />
            </div>

            <div>
              <label className="text-[15px] font-medium text-[#1d1d1f] block mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-[#f5f5f7] rounded-[12px] px-5 py-4 text-[17px]
                           focus:outline-none focus:ring-[2px] focus:ring-[#0071e3]
                           placeholder:text-[#6e6e73] transition-all"
              />
            </div>

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-[#0071e3] text-white py-4 rounded-[12px] text-[17px] font-medium
                         hover:bg-[#0077ed] disabled:opacity-50 transition-colors mt-2"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </div>

          <p className="text-[14px] text-[#6e6e73] mt-8 text-center">
            Demo: Use{" "}
            <span className="font-mono text-[#1d1d1f]">mor_2314</span> /{" "}
            <span className="font-mono text-[#1d1d1f]">83r5^_</span>
          </p>
        </div>
      </div>
    </main>
  );
}
