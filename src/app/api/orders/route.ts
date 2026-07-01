import { NextResponse } from 'next/server';
import { sampleOrders, addToCart } from '@/app/lib/fake-data';

export async function GET() {
  return NextResponse.json({ orders: sampleOrders });
}

export async function POST(request: Request) {
  const body = await request.json();

  // 模拟下单
  const order = {
    id: `ORD-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${String(Math.floor(Math.random() * 9999)).padStart(3, '0')}`,
    items: body.items || [],
    totalAmount: (body.items || []).reduce((sum: number, item: { price: number; quantity: number }) => sum + item.price * item.quantity, 0),
    status: 'pending' as const,
    shippingAddress: body.shippingAddress || {},
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  return NextResponse.json(order);
}
