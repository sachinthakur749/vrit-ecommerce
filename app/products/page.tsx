import { Suspense } from "react";
import ErrorMessage from "@/components/ui/ErrorMessage";
import ProductFilters from "@/components/products/ProductFilters";
import { Product } from "@/types";
import { getCategories, getProducts } from "@/lib/apiService";
import { Metadata } from "next";

interface ProductsPageProps {
  searchParams: Promise<{
    sort?: "asc" | "desc";
    category?: string;
    search?: string;
    page?: string;
  }>;
}

export const metadata: Metadata = {
  title: "Products",
  description: "Browse all products on VritStore.",
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const resolvedSearchParams = await searchParams;
  const sort = resolvedSearchParams.sort;
  const category = resolvedSearchParams.category;
  const search = resolvedSearchParams.search;

  let products: Product[] = [];
  let categories: string[] = [];
  let error = "";

  try {
    [products, categories] = await Promise.all([
      getProducts(sort),
      getCategories(),
    ]);
  } catch (err) {
    error = err instanceof Error ? err.message : "An unknown error occurred while fetching products.";
    console.error("Products Page Error:", err);
  }

  if (error) {
    return (
      <main className="max-w-7xl mx-auto px-4 py-8">
        <ErrorMessage message={error} />
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 font-mono">
            Debug Info: Check your Vercel Environment Variables for NEXT_PUBLIC_API_URL.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Products</h1>
        <p className="text-gray-500 mt-1">{products.length} items found</p>
      </div>

      <Suspense fallback={<div className="text-center py-20 text-gray-400">Loading products...</div>}>
        <ProductFilters
          products={products}
          categories={categories}
          currentSort={sort}
          currentCategory={category}
          currentSearch={search}
        />
      </Suspense>
    </main>
  );
}
