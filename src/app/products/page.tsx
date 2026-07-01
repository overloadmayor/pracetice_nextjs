import { Suspense } from 'react';
import ProductGrid from '@/app/components/ProductGrid';
import { categories } from '@/app/lib/fake-data';

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
      {/* Sidebar - Categories (desktop) */}
      <aside className="hidden lg:block w-56 shrink-0">
        <div className="sticky top-24 bg-white rounded-2xl border border-gray-100 p-5">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">商品分类</h3>
          <nav className="space-y-0.5">
            <a
              href="/products"
              className="block px-3 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
            >
              全部商品
            </a>
            {categories.map((cat) => (
              <div key={cat.id} className="group">
                <a
                  href={`/products?category=${cat.slug}`}
                  className="flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                >
                  {cat.name}
                </a>
                <div className="ml-3 space-y-0.5 mt-0.5">
                  {cat.subcategories.map((sub) => (
                    <a
                      key={sub.id}
                      href={`/products?subcategory=${sub.slug}`}
                      className="block px-3 py-2 text-xs text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Price filter */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">价格区间</h3>
            <div className="space-y-2">
              {[
                { label: '¥0 - ¥200', href: '/products?minPrice=0&maxPrice=200' },
                { label: '¥200 - ¥500', href: '/products?minPrice=200&maxPrice=500' },
                { label: '¥500 - ¥1000', href: '/products?minPrice=500&maxPrice=1000' },
                { label: '¥1000 - ¥5000', href: '/products?minPrice=1000&maxPrice=5000' },
                { label: '¥5000 以上', href: '/products?minPrice=5000' },
              ].map((range) => (
                <a
                  key={range.label}
                  href={range.href}
                  className="block px-3 py-1.5 text-xs text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                >
                  {range.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        <Suspense fallback={
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden animate-pulse">
                <div className="aspect-square bg-gray-100" />
                <div className="p-4 space-y-3">
                  <div className="h-3 bg-gray-100 rounded w-1/3" />
                  <div className="h-4 bg-gray-100 rounded w-2/3" />
                  <div className="h-3 bg-gray-100 rounded w-1/2" />
                  <div className="h-6 bg-gray-100 rounded w-1/3" />
                </div>
              </div>
            ))}
          </div>
        }>
          <ProductGrid />
        </Suspense>
      </main>
    </div>
  );
}
