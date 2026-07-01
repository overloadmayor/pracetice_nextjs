'use client';

import { useState } from 'react';

export default function AddToCartButton({ productId }: { productId: string }) {
  const [added, setAdded] = useState(false);

  const handleAdd = async () => {
    await fetch('/api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'add', productId, quantity: 1 }),
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAdd}
      className={`px-6 py-3.5 border-2 font-medium rounded-xl transition-all ${
        added
          ? 'border-green-500 bg-green-50 text-green-600'
          : 'border-indigo-200 text-indigo-600 hover:bg-indigo-50'
      }`}
    >
      {added ? '✓ 已加入购物车' : '加入购物车'}
    </button>
  );
}
