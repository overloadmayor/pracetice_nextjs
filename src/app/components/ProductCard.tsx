import Link from 'next/link';
import type { Product } from '@/app/lib/types';

export default function ProductCard({ product }: { product: Product }) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <Link
      href={`/products/${product.id}`}
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.isNew && (
            <span className="px-2 py-0.5 text-xs font-medium bg-green-500 text-white rounded-full">新品</span>
          )}
          {discount > 0 && (
            <span className="px-2 py-0.5 text-xs font-medium bg-red-500 text-white rounded-full">-{discount}%</span>
          )}
        </div>
        {/* Quick add to cart button overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="block w-full py-2 bg-white text-gray-900 text-sm font-medium rounded-lg text-center hover:bg-indigo-50 transition-colors">
            查看详情
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">{product.brand}</span>
          <span className="text-xs text-gray-400">|</span>
          <span className="text-xs text-gray-400">{product.subcategory}</span>
        </div>
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-5 mb-auto group-hover:text-indigo-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 mt-1 line-clamp-1">{product.description}</p>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mt-2">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-3.5 h-3.5 ${star <= Math.round(product.rating) ? 'text-amber-400' : 'text-gray-200'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-400">{product.rating}</span>
          <span className="text-xs text-gray-300">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-xl font-bold text-red-500">
            ¥{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              ¥{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Free shipping badge */}
        {product.price >= 299 && (
          <span className="inline-block mt-2 text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full w-fit">
            包邮
          </span>
        )}
      </div>
    </Link>
  );
}
