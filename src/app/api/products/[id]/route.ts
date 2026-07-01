import { NextResponse } from 'next/server';
import { getProductById, getReviewsByProductId, getFeaturedProducts } from '@/app/lib/fake-data';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  const productReviews = getReviewsByProductId(id);
  const featuredProducts = getFeaturedProducts().filter((p) => p.id !== id).slice(0, 4);

  return NextResponse.json({
    product,
    reviews: productReviews,
    relatedProducts: featuredProducts,
  });
}
