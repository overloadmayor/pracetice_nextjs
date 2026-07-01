import Link from 'next/link';
import ProductCard from '@/app/components/ProductCard';
import ProductImageGallery from '@/app/components/ProductImageGallery';
import AddToCartButton from '@/app/components/AddToCartButton';
import type { Product, Review } from '@/app/lib/types';

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Fetch from our own API (same process, no network cost in production)
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const host = process.env.VERCEL_URL || 'localhost:3000';
  const baseUrl = `${protocol}://${host}`;

  let data: { product: Product; reviews: Review[]; relatedProducts: Product[] } | null = null;
  try {
    const res = await fetch(`${baseUrl}/api/products/${id}`, { cache: 'no-store' });
    if (res.ok) {
      data = await res.json();
    }
  } catch {
    // Fallback: import directly from fake-data in server context
    const { getProductById, getReviewsByProductId, getFeaturedProducts } = await import('@/app/lib/fake-data');
    const product = getProductById(id);
    if (product) {
      data = {
        product,
        reviews: getReviewsByProductId(id),
        relatedProducts: getFeaturedProducts().filter((p) => p.id !== id).slice(0, 4),
      };
    }
  }

  if (!data || !data.product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">商品不存在</h1>
        <Link href="/products" className="text-indigo-600 hover:text-indigo-700 font-medium">
          ← 返回商品列表
        </Link>
      </div>
    );
  }

  const { product, reviews, relatedProducts } = data;
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-indigo-600 transition-colors">首页</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-indigo-600 transition-colors">全部商品</Link>
        <span>/</span>
        <Link href={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-indigo-600 transition-colors">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-gray-700 truncate max-w-[200px]">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Gallery */}
        <ProductImageGallery images={product.images} productName={product.name} />

        {/* Product Info */}
        <div>
          {/* Brand & Tags */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
              {product.brand}
            </span>
            {product.isNew && (
              <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">新品</span>
            )}
            {discount > 0 && (
              <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded">-{discount}%</span>
            )}
          </div>

          <h1 className="text-2xl font-bold text-gray-900 leading-tight">{product.name}</h1>
          <p className="mt-2 text-gray-500">{product.description}</p>

          {/* Rating */}
          <div className="flex items-center gap-3 mt-4">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-5 h-5 ${star <= Math.round(product.rating) ? 'text-amber-400' : 'text-gray-200'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">{product.rating}</span>
            <span className="text-sm text-gray-400">({product.reviewCount} 条评价)</span>
            <span className="text-sm text-gray-300">|</span>
            <span className="text-sm text-gray-500">
              已售 {Math.floor(product.reviewCount * 3.5).toLocaleString()}
            </span>
          </div>

          {/* Price */}
          <div className="mt-6 p-5 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-100">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-red-500">
                ¥{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">
                  ¥{product.originalPrice!.toLocaleString()}
                </span>
              )}
            </div>
            {discount > 0 && (
              <p className="text-sm text-red-500 mt-1">
                比原价省 ¥{(product.originalPrice! - product.price).toLocaleString()}（{discount}% off）
              </p>
            )}
            {product.price >= 299 && (
              <div className="flex items-center gap-2 mt-3 text-sm text-green-600">
                <span>🚚</span>
                <span>满299包邮 · 预计24小时内发货</span>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-6">
            <Link
              href={`/cart?add=${product.id}`}
              className="flex-1 py-3.5 bg-indigo-600 text-white text-center font-medium rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
            >
              立即购买
            </Link>
            <AddToCartButton productId={product.id} />
          </div>

          {/* SKU & Stock */}
          <div className="flex items-center gap-6 mt-4 text-xs text-gray-400">
            <span>SKU: {product.sku}</span>
            <span>
              库存:
              {product.stock > 50 ? (
                <span className="text-green-500 ml-1">充足</span>
              ) : product.stock > 0 ? (
                <span className="text-amber-500 ml-1">仅剩 {product.stock} 件</span>
              ) : (
                <span className="text-red-500 ml-1">暂时缺货</span>
              )}
            </span>
          </div>

          {/* Tags */}
          {product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {product.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/products?tag=${encodeURIComponent(tag)}`}
                  className="px-3 py-1 text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded-full hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Specs, Description, Reviews */}
      <div className="mt-12">
        {/* Specs */}
        <section className="mb-10 bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">规格参数</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="flex items-center py-2 border-b border-gray-50">
                <span className="text-sm text-gray-400 w-24 shrink-0">{key}</span>
                <span className="text-sm text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Description */}
        <section className="mb-10 bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">商品详情</h2>
          <p className="text-gray-600 leading-relaxed">{product.longDescription}</p>
        </section>

        {/* Reviews */}
        <section className="mb-10 bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-6">
            用户评价 ({reviews.length})
          </h2>
          {reviews.length > 0 ? (
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-start gap-3">
                    <img
                      src={review.avatar}
                      alt={review.userName}
                      className="w-10 h-10 rounded-full object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900">{review.userName}</span>
                        <div className="flex items-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className={`w-3.5 h-3.5 ${star <= review.rating ? 'text-amber-400' : 'text-gray-200'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-gray-400 ml-auto">
                          {new Date(review.createdAt).toLocaleDateString('zh-CN')}
                        </span>
                      </div>
                      <h4 className="text-sm font-medium text-gray-800 mt-1.5">{review.title}</h4>
                      <p className="text-sm text-gray-500 mt-1 leading-relaxed">{review.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center py-8">暂无评价，购买后成为第一个评价的人</p>
          )}
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-bold text-gray-900 mb-4">猜你喜欢</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
