import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col h-full cursor-pointer">
        <div className="relative w-full h-48 mb-4">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>

        <span className="text-xs text-blue-500 uppercase font-semibold tracking-wide">
          {product.category}
        </span>

        <h2 className="text-sm font-semibold text-gray-800 mt-1 line-clamp-2 flex-1">
          {product.title}
        </h2>

        <div className="flex items-center gap-1 mt-2">
          <span className="text-yellow-400">★</span>
          <span className="text-sm text-gray-600">
            {product.rating.rate} ({product.rating.count})
          </span>
        </div>

        <div className="mt-3">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
}
