import ErrorMessage from "@/components/ui/ErrorMessage";
import Image from "next/image";
import Link from "next/link";
import { getProductById } from "@/lib/apiService";
import AddToCartButton from "@/components/products/AddCartButon";
import { Metadata } from "next";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(Number(id));
  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  let product = null;
  let error = "";

  try {
    product = await getProductById(Number(id));
    // console.log(product)
  } catch (err) {
    error = err instanceof Error ? err.message : "Failed to fetch product";
  }

  if (error) return <ErrorMessage message={error} />;
  if (!product) return <ErrorMessage message="Product not found" />;

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <Link
        href="/products"
        className="text-sm text-blue-500 hover:underline mb-6 inline-block"
      >
        ← Back to Products
      </Link>

      <div className="flex flex-col md:flex-row gap-10 mt-4">
        <div className="relative w-full md:w-72 h-72 shrink-0 border rounded-lg p-4 bg-white">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-contain p-4"
          />
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs text-blue-500 uppercase font-semibold">
            {product.category}
          </span>

          <h1 className="text-xl font-bold text-gray-900">{product.title}</h1>

          <p className="text-gray-500 text-sm leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-yellow-400">★</span>
            <span>{product.rating.rate}</span>
            <span className="text-gray-400">
              ({product.rating.count} reviews)
            </span>
          </div>

          <p className="text-2xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </p>

          <AddToCartButton product={product} />
        </div>
      </div>
    </main>
  );
}
