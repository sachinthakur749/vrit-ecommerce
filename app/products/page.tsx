// app/products/page.tsx
import ErrorMessage from "@/components/ui/ErrorMessage";
import ProductFilters from "@/components/products/ProductFilters";
import { Product } from "@/types";
import { getCategories, getProducts } from "@/lib/apiService";

interface ProductsPageProps {
  searchParams: {
    sort?: "asc" | "desc";
    category?: string;
    search?: string;
    page?: string;
  };
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  let products: Product[] = [];
  let categories: string[] = [];
  let error = "";

  try {
    [products, categories] = await Promise.all([
      getProducts(searchParams.sort),
      getCategories(),
    ]);
  } catch (err) {
    error = err instanceof Error ? err.message : "Failed to fetch products";
  }

  if (error) return <ErrorMessage message={error} />;

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Products</h1>
        <p className="text-gray-500 mt-1">{products.length} items found</p>
      </div>

      {/* Filters — client component */}
      <ProductFilters
        products={products}
        categories={categories}
        currentSort={searchParams.sort}
        currentCategory={searchParams.category}
        currentSearch={searchParams.search}
      />
    </main>
  );
}
