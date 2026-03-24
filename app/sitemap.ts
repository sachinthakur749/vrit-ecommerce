// app/sitemap.ts
import { getProducts } from "@/lib/apiService";
import { Product } from "@/types";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products: Product[] = await getProducts();

  const productUrls = products.map((product) => ({
    url: `https://vritstore.com/products/${product.id}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://vritstore.com",
      lastModified: new Date(),
    },
    {
      url: "https://vritstore.com/products",
      lastModified: new Date(),
    },
    {
      url: "https://vritstore.com/login",
      lastModified: new Date(),
    },
    ...productUrls,
  ];
}
