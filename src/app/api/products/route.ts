import { NextResponse } from 'next/server';
import { queryProducts, getProductById, getProductsByCategory, getProductsBySubcategory, getFeaturedProducts, getNewProducts, getReviewsByProductId } from '@/app/lib/fake-data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = parseInt(searchParams.get('page') || '1');
  const pageSize = parseInt(searchParams.get('pageSize') || '12');
  const category = searchParams.get('category') || undefined;
  const subcategory = searchParams.get('subcategory') || undefined;
  const tag = searchParams.get('tag') || undefined;
  const search = searchParams.get('search') || undefined;
  const sortBy = (searchParams.get('sortBy') as 'price-asc' | 'price-desc' | 'rating' | 'newest') || 'newest';
  const minPrice = searchParams.get('minPrice') ? parseFloat(searchParams.get('minPrice')!) : undefined;
  const maxPrice = searchParams.get('maxPrice') ? parseFloat(searchParams.get('maxPrice')!) : undefined;
  const featured = searchParams.get('featured');
  const isNew = searchParams.get('new');
  const ids = searchParams.get('ids');

  // 特殊查询：按ID批量查询
  if (ids) {
    const idList = ids.split(',');
    const products = idList.map(getProductById).filter(Boolean);
    return NextResponse.json({ products, total: products.length });
  }

  // 特殊查询：精选 / 新品
  if (featured === 'true') {
    const products = getFeaturedProducts();
    return NextResponse.json({ products, total: products.length });
  }
  if (isNew === 'true') {
    const products = getNewProducts();
    return NextResponse.json({ products, total: products.length });
  }

  // 按分类查询（不传搜索条件）
  if (subcategory && !search && !category) {
    const products = getProductsBySubcategory(subcategory);
    return NextResponse.json({
      products: products.slice((page - 1) * pageSize, page * pageSize),
      total: products.length,
      page,
      pageSize,
      totalPages: Math.ceil(products.length / pageSize),
    });
  }
  if (category && !search && !tag && minPrice === undefined && maxPrice === undefined) {
    const products = getProductsByCategory(category);
    return NextResponse.json({
      products: products.slice((page - 1) * pageSize, page * pageSize),
      total: products.length,
      page,
      pageSize,
      totalPages: Math.ceil(products.length / pageSize),
    });
  }

  // 通用查询
  const result = queryProducts({
    page,
    pageSize,
    category,
    subcategory,
    tag,
    search,
    sortBy,
    minPrice,
    maxPrice,
  });

  return NextResponse.json(result);
}
