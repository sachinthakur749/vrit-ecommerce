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
      {/* Filter Bar */}
      <div className="flex flex-wrap gap-3 mb-10">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[200px]">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6e6e73]"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full bg-white rounded-full px-10 py-3 text-[14px]
                       shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]
                       focus:outline-none focus:ring-[2px] focus:ring-[#0071e3]
                       placeholder:text-[#6e6e73] transition-all"
          />
        </div>

        {/* Sort Dropdown */}
        <select
          value={currentSort || ""}
          onChange={(e) => updateParams("sort", e.target.value)}
          className="bg-white rounded-full px-5 py-3 text-[14px] font-medium
                     shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]
                     focus:outline-none focus:ring-[2px] focus:ring-[#0071e3]
                     cursor-pointer appearance-none pr-10
                     bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2216%22%20height%3d%2216%22%20viewBox%3d%220%200%2024%2024%22%20fill%3d%22none%22%20stroke%3d%22%236e6e73%22%20stroke-width%3d%222%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%3e%3cpolyline%20points%3d%226%209%2012%2015%2018%209%22%3e%3c%2fpolyline%3e%3c%2fsvg%3e')]
                     bg-[length:16px] bg-[right_12px_center] bg-no-repeat"
        >
          <option value="">Sort by</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => {
            setSelectedCategory("");
            setCurrentPage(1);
            updateParams("category", "");
          }}
          className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition-all ${
            selectedCategory === ""
              ? "bg-[#0071e3] text-white"
              : "bg-white text-[#1d1d1f] hover:bg-gray-100 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentPage(1);
              updateParams("category", cat);
            }}
            className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition-all ${
              selectedCategory === cat
                ? "bg-[#0071e3] text-white"
                : "bg-white text-[#1d1d1f] hover:bg-gray-100 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Price Range */}
      <div className="flex flex-wrap gap-3 mb-10 items-center">
        <span className="text-[14px] text-[#6e6e73]">Price:</span>
        <input
          type="number"
          placeholder="Min"
          value={priceRange.min}
          onChange={(e) => {
            setPriceRange((prev) => ({ ...prev, min: e.target.value }));
            setCurrentPage(1);
          }}
          className="bg-white rounded-full w-28 px-4 py-2.5 text-[14px]
                     shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]
                     focus:outline-none focus:ring-[2px] focus:ring-[#0071e3]
                     placeholder:text-[#6e6e73]"
        />
        <span className="text-[14px] text-[#6e6e73]">—</span>
        <input
          type="number"
          placeholder="Max"
          value={priceRange.max}
          onChange={(e) => {
            setPriceRange((prev) => ({ ...prev, max: e.target.value }));
            setCurrentPage(1);
          }}
          className="bg-white rounded-full w-28 px-4 py-2.5 text-[14px]
                     shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]
                     focus:outline-none focus:ring-[2px] focus:ring-[#0071e3]
                     placeholder:text-[#6e6e73]"
        />
      </div>

      {/* Product Grid */}
      {paginatedProducts.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-[17px] text-[#6e6e73]">No products found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
