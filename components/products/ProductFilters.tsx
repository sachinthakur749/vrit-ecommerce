"use client";

import { useState, useMemo } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Product } from "@/types";
import ProductCard from "@/components/ui/ProductCard";
import Pagination from "../ui/Pagination";

interface ProductFiltersProps {
  products: Product[];
  categories: string[];
  currentSort?: string;
  currentCategory?: string;
  currentSearch?: string;
}

const ITEMS_PER_PAGE = 8;

export default function ProductFilters({
  products,
  categories,
  currentSort,
  currentCategory,
  currentSearch,
}: ProductFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(currentSearch || "");
  const [selectedCategory, setSelectedCategory] = useState(
    currentCategory || "",
  );
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [currentPage, setCurrentPage] = useState(1);

  const updateParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory = selectedCategory
        ? product.category === selectedCategory
        : true;

      const matchesMin = priceRange.min
        ? product.price >= parseFloat(priceRange.min)
        : true;

      const matchesMax = priceRange.max
        ? product.price <= parseFloat(priceRange.max)
        : true;

      return matchesSearch && matchesCategory && matchesMin && matchesMax;
    });
  }, [products, search, selectedCategory, priceRange]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm flex-1 min-w-[200px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setCurrentPage(1);
            updateParams("category", e.target.value);
          }}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          value={currentSort || ""}
          onChange={(e) => updateParams("sort", e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Default Sort</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>

        <input
          type="number"
          placeholder="Min price"
          value={priceRange.min}
          onChange={(e) => {
            setPriceRange((prev) => ({ ...prev, min: e.target.value }));
            setCurrentPage(1);
          }}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Max price"
          value={priceRange.max}
          onChange={(e) => {
            setPriceRange((prev) => ({ ...prev, max: e.target.value }));
            setCurrentPage(1);
          }}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {paginatedProducts.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          No products found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
