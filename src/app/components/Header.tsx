'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { Cart } from '@/app/lib/types';

export default function Header({ initialCart = { items: [], totalAmount: 0, totalItems: 0 } }: { initialCart?: Partial<Cart> }) {
  const [search, setSearch] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/products?search=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      {/* Top bar */}
      <div className="bg-gray-900 text-white text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span>618年中大促 满299包邮 | 新用户首单9折</span>
          <div className="flex gap-4">
            <Link href="/orders" className="hover:text-gray-300 transition-colors">我的订单</Link>
            <span className="text-gray-500">|</span>
            <Link href="/help" className="hover:text-gray-300 transition-colors">帮助中心</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900 tracking-tight shrink-0">
            <span className="text-indigo-600">Shop</span>Next
          </Link>

          {/* Category nav - desktop */}
          <nav className="hidden lg:flex items-center gap-1 mx-6">
            <Link href="/products" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all">
              全部商品
            </Link>
            <Link href="/products?category=electronics" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all">
              手机数码
            </Link>
            <Link href="/products?category=fashion" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all">
              服饰鞋包
            </Link>
            <Link href="/products?category=home" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all">
              家居生活
            </Link>
            <Link href="/products?category=beauty" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all">
              美妆个护
            </Link>
            <Link href="/products?category=sports" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all">
              运动户外
            </Link>
          </nav>

          {/* Search + Cart */}
          <div className="flex items-center gap-3">
            <form onSubmit={handleSearch} className="hidden sm:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="搜索商品..."
                  className="w-48 lg:w-64 pl-4 pr-10 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50"
                />
                <button type="submit" className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-indigo-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>

            <Link
              href="/cart"
              className="relative p-2 text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              {initialCart.totalItems ? (
                <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-xs rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1 font-medium">
                  {initialCart.totalItems > 99 ? '99+' : initialCart.totalItems}
                </span>
              ) : null}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-3 pb-4">
            <form onSubmit={handleSearch} className="mb-3">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="搜索商品..."
                className="w-full pl-4 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50"
              />
            </form>
            <nav className="grid grid-cols-3 gap-2">
              <Link href="/products" className="px-2 py-2 text-sm text-center font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all">全部商品</Link>
              <Link href="/products?category=electronics" className="px-2 py-2 text-sm text-center font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all">手机数码</Link>
              <Link href="/products?category=fashion" className="px-2 py-2 text-sm text-center font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all">服饰鞋包</Link>
              <Link href="/products?category=home" className="px-2 py-2 text-sm text-center font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all">家居生活</Link>
              <Link href="/products?category=beauty" className="px-2 py-2 text-sm text-center font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all">美妆个护</Link>
              <Link href="/products?category=sports" className="px-2 py-2 text-sm text-center font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all">运动户外</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
