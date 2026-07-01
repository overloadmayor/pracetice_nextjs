'use client';

import { Suspense, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import type { Cart } from '@/app/lib/types';

function CartContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [cart, setCart] = useState<Cart>({ items: [], totalAmount: 0, totalItems: 0 });
  const [loading, setLoading] = useState(true);

  // Handle ?add=productId param
  useEffect(() => {
    const addId = searchParams.get('add');
    if (addId) {
      fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'add', productId: addId, quantity: 1 }),
      }).then(() => {
        router.replace('/cart');
        fetch('/api/cart')
          .then((res) => res.json())
          .then((data) => {
            setCart(data);
            setLoading(false);
          });
      });
    } else {
      fetch('/api/cart')
        .then((res) => res.json())
        .then((data) => {
          setCart(data);
          setLoading(false);
        });
    }
  }, [searchParams, router]);

  const handleUpdateQuantity = async (productId: string, quantity: number) => {
    const res = await fetch('/api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'update', productId, quantity }),
    });
    const data = await res.json();
    setCart(data);
  };

  const handleRemove = async (productId: string) => {
    const res = await fetch('/api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'remove', productId }),
    });
    const data = await res.json();
    setCart(data);
  };

  const handleClear = async () => {
    const res = await fetch('/api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'clear' }),
    });
    const data = await res.json();
    setCart(data);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          购物车
          {cart.totalItems > 0 && (
            <span className="text-base font-normal text-gray-400 ml-2">({cart.totalItems} 件)</span>
          )}
        </h1>
        {cart.items.length > 0 && (
          <button
            onClick={handleClear}
            className="text-sm text-red-500 hover:text-red-600 font-medium transition-colors"
          >
            清空购物车
          </button>
        )}
      </div>

      {loading ? (
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 animate-pulse">
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-gray-100 rounded-xl" />
                <div className="flex-1 space-y-3">
                  <div className="h-4 bg-gray-100 rounded w-2/3" />
                  <div className="h-3 bg-gray-100 rounded w-1/3" />
                  <div className="h-5 bg-gray-100 rounded w-1/4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : cart.items.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
          <svg className="w-20 h-20 mx-auto text-gray-200 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
          </svg>
          <h2 className="text-lg font-medium text-gray-600 mb-2">购物车是空的</h2>
          <p className="text-sm text-gray-400 mb-6">快去挑选喜欢的商品吧</p>
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
          >
            去逛逛
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <div className="flex-1 space-y-4">
            {cart.items.map((item) => (
              <div
                key={item.productId}
                className="bg-white rounded-2xl border border-gray-100 p-5 flex gap-4 hover:shadow-md transition-shadow"
              >
                <Link href={`/products/${item.productId}`} className="shrink-0">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    width={96}
                    height={96}
                    className="rounded-xl object-cover hover:opacity-80 transition-opacity"
                  />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/products/${item.productId}`}
                    className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-indigo-600 transition-colors"
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-xs text-gray-400 mt-1">{item.product.brand}</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleUpdateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                        className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                      >
                        −
                      </button>
                      <span className="w-10 text-center text-sm font-medium text-gray-900">{item.quantity}</span>
                      <button
                        onClick={() => handleUpdateQuantity(item.productId, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-bold text-red-500">
                        ¥{(item.product.price * item.quantity).toLocaleString()}
                      </span>
                      <button
                        onClick={() => handleRemove(item.productId)}
                        className="text-gray-300 hover:text-red-500 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={() => router.push('/products')}
              className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              继续购物
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:w-80 shrink-0">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">订单摘要</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>商品合计</span>
                  <span>¥{cart.totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>运费</span>
                  <span className="text-green-500">{cart.totalAmount >= 299 ? '免运费' : '¥15'}</span>
                </div>
                {cart.totalAmount >= 299 && (
                  <div className="flex justify-between text-green-500">
                    <span>满299包邮</span>
                    <span>-¥15</span>
                  </div>
                )}
                <div className="border-t border-gray-100 pt-3 flex justify-between text-base font-bold text-gray-900">
                  <span>应付总额</span>
                  <span className="text-red-500">
                    ¥{(cart.totalAmount >= 299 ? cart.totalAmount : cart.totalAmount + 15).toLocaleString()}
                  </span>
                </div>
              </div>
              <button
                onClick={async () => {
                  await fetch('/api/orders', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      items: cart.items.map((i) => ({
                        productId: i.productId,
                        productName: i.product.name,
                        price: i.product.price,
                        quantity: i.quantity,
                        image: i.product.images[0],
                      })),
                      shippingAddress: {
                        name: '张三',
                        phone: '138****6789',
                        province: '广东省',
                        city: '深圳市',
                        district: '南山区',
                        detail: '科技园路88号创新大厦12层',
                        zipCode: '518000',
                      },
                    }),
                  });
                  await fetch('/api/cart', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ action: 'clear' }),
                  });
                  alert('下单成功！(模拟)');
                  setCart({ items: [], totalAmount: 0, totalItems: 0 });
                }}
                className="w-full mt-6 py-3 bg-indigo-600 text-white text-center font-medium rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
              >
                去结算
              </button>
              <p className="text-xs text-gray-400 text-center mt-3">结算为模拟操作，不会产生真实订单</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CartPage() {
  return (
    <Suspense fallback={
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 animate-pulse">
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-gray-100 rounded-xl" />
                <div className="flex-1 space-y-3">
                  <div className="h-4 bg-gray-100 rounded w-2/3" />
                  <div className="h-3 bg-gray-100 rounded w-1/3" />
                  <div className="h-5 bg-gray-100 rounded w-1/4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    }>
      <CartContent />
    </Suspense>
  );
}
