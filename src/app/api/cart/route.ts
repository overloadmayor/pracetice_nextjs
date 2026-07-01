import { NextResponse } from 'next/server';
import { getCart, addToCart, updateCartItem, removeFromCart, clearCart } from '@/app/lib/fake-data';

export async function GET() {
  const cart = getCart();
  return NextResponse.json(cart);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { action, productId, quantity } = body;

  try {
    switch (action) {
      case 'add':
        return NextResponse.json(addToCart(productId, quantity || 1));
      case 'update':
        return NextResponse.json(updateCartItem(productId, quantity));
      case 'remove':
        return NextResponse.json(removeFromCart(productId));
      case 'clear':
        clearCart();
        return NextResponse.json({ items: [], totalAmount: 0, totalItems: 0 });
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Unknown error' }, { status: 400 });
  }
}
