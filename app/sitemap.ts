import { getProducts } from "@/lib/apiService";
import { Product } from "@/types";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://vrit-ecommerce-nine.vercel.app";
  const staticUrls = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/products`, lastModified: new Date() },
    { url: `${baseUrl}/login`, lastModified: new Date() },
    { url: `${baseUrl}/cart`, lastModified: new Date() },
  ];

  try {
    const products: Product[] = await getProducts();
    const productUrls = products.map((product) => ({
      url: `${baseUrl}/products/${product.id}`,
      lastModified: new Date(),
    }));
    return [...staticUrls, ...productUrls];
  } catch (error) {
    console.error("Sitemap generation: API call failed.", error);
    return staticUrls;
  }
}
