import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold text-white tracking-tight">
              <span className="text-indigo-400">Shop</span>Next
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              全栈商城 Demo — Next.js 16 全栈实战项目。前端 SSR + 后端 API Routes，假数据驱动。
            </p>
            <div className="flex gap-3 mt-4">
              <span className="text-xs bg-gray-800 px-2 py-1 rounded">Next.js 16.2</span>
              <span className="text-xs bg-gray-800 px-2 py-1 rounded">React 19</span>
              <span className="text-xs bg-gray-800 px-2 py-1 rounded">Tailwind v4</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">购物指南</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/products" className="hover:text-white transition-colors">全部商品</Link></li>
              <li><Link href="/products?category=electronics" className="hover:text-white transition-colors">手机数码</Link></li>
              <li><Link href="/products?category=fashion" className="hover:text-white transition-colors">服饰鞋包</Link></li>
              <li><Link href="/products?category=home" className="hover:text-white transition-colors">家居生活</Link></li>
              <li><Link href="/products?category=beauty" className="hover:text-white transition-colors">美妆个护</Link></li>
              <li><Link href="/products?category=sports" className="hover:text-white transition-colors">运动户外</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">客户服务</h4>
            <ul className="space-y-2.5 text-sm">
              <li><span className="cursor-pointer hover:text-white transition-colors">配送说明</span></li>
              <li><span className="cursor-pointer hover:text-white transition-colors">退换货政策</span></li>
              <li><span className="cursor-pointer hover:text-white transition-colors">售后服务</span></li>
              <li><span className="cursor-pointer hover:text-white transition-colors">常见问题</span></li>
              <li><span className="cursor-pointer hover:text-white transition-colors">联系客服</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">联系我们</h4>
            <ul className="space-y-2.5 text-sm">
              <li>📧 support@shopnext.demo</li>
              <li>📞 400-888-8888</li>
              <li>🕐 周一至周日 9:00-21:00</li>
              <li>📍 广东省深圳市南山区科技园</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          <p>© 2026 ShopNext Demo. Built with Next.js 16 + React 19 + Tailwind CSS v4. All data is mock.</p>
        </div>
      </div>
    </footer>
  );
}
