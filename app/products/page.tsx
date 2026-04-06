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
    error =
      err instanceof Error
        ? err.message
        : "An unknown error occurred while fetching products.";
    console.error("Products Page Error:", err);
  }

  if (error) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-24 pt-28">
        <ErrorMessage message={error} />
      </main>
    );
  }

  return (
    <main className=" bg-white ">
      {/* Section Header */}

      <div className="max-w-6xl mx-auto px-6 py-12 pt-28 min-h-screen">
        <div className="text-center mb-12">
          <h1 className="text-[48px] font-semibold text-[#1d1d1f] tracking-tight leading-[1.1]">
            All Products
          </h1>
          <p className="text-[17px] text-[#6e6e73] mt-3 max-w-md mx-auto">
            Browse our complete collection of premium items.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="text-center py-20 text-[#6e6e73]">Loading...</div>
          }
        >
          <ProductFilters
            products={products}
            categories={categories}
            currentSort={sort}
            currentCategory={category}
            currentSearch={search}
          />
        </Suspense>
      </div>
    </main>
  );
}
