import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="block">
      <div
        className="bg-white rounded-[18px] shadow-[0_4px_20px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)]
                   hover:shadow-[0_12px_40px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.06)]
                   hover:scale-[1.02]
                   transition-all duration-300 ease-out
                   cursor-pointer overflow-hidden h-full"
      >
        {/* Image Container */}
        <div className="relative w-full h-56 bg-[#f5f5f7] p-6">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <span className="text-[12px] text-[#6e6e73] uppercase tracking-wide font-medium">
            {product.category}
          </span>

          <h2 className="text-[17px] font-semibold text-[#1d1d1f] mt-1 line-clamp-2 leading-tight">
            {product.title}
          </h2>

          <div className="flex items-center gap-1 mt-2">
            <span className="text-[#6e6e73] text-[14px]">★</span>
            <span className="text-[14px] text-[#6e6e73]">
              {product.rating.rate} ({product.rating.count})
            </span>
          </div>

          <div className="mt-3">
            <span className="text-[21px] font-semibold text-[#1d1d1f]">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
