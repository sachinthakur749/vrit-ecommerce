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
  } catch (err) {
    error = err instanceof Error ? err.message : "Failed to fetch product";
  }

  if (error) return <ErrorMessage message={error} />;
  if (!product) return <ErrorMessage message="Product not found" />;

  return (
    <main className="min-h-screen bg-white pt-16">
      {/* Clean Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Link
          href="/products"
          className="text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors inline-flex items-center gap-1"
        >
          <span>←</span>
          <span>All Products</span>
        </Link>
      </div>

      {/* Product Hero */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative h-[500px] lg:h-[600px] bg-[#f5f5f7] rounded-[24px] overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-12"
              priority
            />
          </div>

          {/* Details */}
          <div className="flex flex-col gap-5 lg:py-12">
            <span className="text-[14px] text-[#6e6e73] uppercase tracking-wide font-medium">
              {product.category}
            </span>

            <h1 className="text-[40px] font-semibold text-[#1d1d1f] leading-tight tracking-tight">
              {product.title}
            </h1>

            <p className="text-[17px] text-[#6e6e73] leading-relaxed max-w-lg">
              {product.description}
            </p>

            <div className="flex items-center gap-3 text-[15px] text-[#6e6e73]">
              <span className="text-[#f5c832]">★★★★</span>
              <span>{product.rating.rate}</span>
              <span>({product.rating.count} reviews)</span>
            </div>

            <div className="text-[32px] font-semibold text-[#1d1d1f] mt-2">
              ${product.price.toFixed(2)}
            </div>

            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </main>
  );
}
