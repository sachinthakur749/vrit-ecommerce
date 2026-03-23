import { Product } from "@/types";
import { apiFetch } from "./api";

export async function getProducts(sort?: "asc" | "desc"): Promise<Product[]> {
  const endpoint = sort ? `/products?sort=${sort}` : "/products";
  return apiFetch<Product[]>(endpoint);
}

export async function getProductById(id: number): Promise<Product> {
  return apiFetch<Product>(`/products/${id}`);
}

export async function getCategories(): Promise<string[]> {
  return apiFetch<string[]>("/products/categories");
}
