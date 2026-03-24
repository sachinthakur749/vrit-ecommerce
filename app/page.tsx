// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to <span className="text-black">Vrit</span>
        <span className="text-blue-500">Store</span>
      </h1>
      <p className="text-gray-500 text-lg mb-8">
        Browse our collection of products at the best prices.
      </p>
      <Link
        href="/products"
        className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600"
      >
        Browse Products
      </Link>
    </main>
  );
}
