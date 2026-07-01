import { getFeaturedProducts, getNewProducts, categories, banners } from '@/app/lib/fake-data';
import ProductCard from '@/app/components/ProductCard';
import Link from 'next/link';
import Image from 'next/image';

export default async function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const newProducts = getNewProducts();

  return (
    <div className="flex flex-col flex-1">
      {/* Hero Banner Carousel */}
      <section className="bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="relative h-[320px] sm:h-[400px] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 flex items-center">
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10 px-8 lg:px-16 max-w-xl">
                <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full mb-4">
                  2026 年中大促
                </span>
                <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-3">
                  品质生活 <br />从这里开始
                </h1>
                <p className="text-white/80 text-lg mb-6">
                  全场低至5折 · 领券再减100 · 满299包邮
                </p>
                <div className="flex gap-3">
                  <Link
                    href="/products"
                    className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
                  >
                    立即抢购
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/products?new=true"
                    className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
                  >
                    新品首发
                  </Link>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 bg-white border border-t-0 border-gray-100 rounded-b-3xl">
              {[
                { label: '商品种类', value: '6大类' },
                { label: '精选好物', value: '28+ 款' },
                { label: '好评率', value: '98.5%' },
              ].map((stat) => (
                <div key={stat.label} className="text-center py-4 border-r border-gray-50 last:border-r-0">
                  <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">商品分类</h2>
          <Link href="/products" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
            查看全部 →
          </Link>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.slug}`}
              className="group flex flex-col items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:border-indigo-100 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gray-50 group-hover:bg-indigo-50 transition-colors overflow-hidden flex items-center justify-center relative">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {cat.name}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">{cat.subcategories.length}个子类</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">🔥 精选推荐</h2>
              <p className="text-sm text-gray-400 mt-1">我们为你精心挑选的好物</p>
            </div>
            <Link href="/products?featured=true" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
              更多推荐 →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">✨ 新品上架</h2>
            <p className="text-sm text-gray-400 mt-1">最新到货，抢先体验</p>
          </div>
          <Link href="/products?new=true" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
            更多新品 →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Promo Banners */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {banners.slice(0, 2).map((banner) => (
            <Link
              key={banner.id}
              href={banner.link}
              className="relative rounded-2xl overflow-hidden h-48 group"
            >
              <div className={`absolute inset-0 ${banner.bgColor}`} />
              <Image
                src={banner.image}
                alt=""
                fill
                className="object-cover opacity-30 group-hover:opacity-40 transition-opacity mix-blend-overlay"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="relative z-10 p-8 flex flex-col justify-center h-full">
                <h3 className="text-2xl font-bold text-white mb-2">{banner.title}</h3>
                <p className="text-white/80">{banner.subtitle}</p>
                <span className="mt-3 inline-flex items-center text-white text-sm font-medium">
                  去看看
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-gray-100 bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🚚', title: '满299包邮', desc: '全国范围顺丰包邮' },
              { icon: '🔄', title: '7天无理由', desc: '不满意随时退换' },
              { icon: '🛡️', title: '正品保障', desc: '100%正品承诺' },
              { icon: '💬', title: '在线客服', desc: '每天9:00-21:00' },
            ].map((feature) => (
              <div key={feature.title} className="flex items-start gap-4 p-4">
                <span className="text-2xl shrink-0">{feature.icon}</span>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{feature.title}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{feature.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
