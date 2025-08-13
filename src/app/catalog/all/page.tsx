import { CatalogSection } from '@/widgets/catalog-section';
import { PreviouslyViewed } from '@/features/previously-viewed';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { getProducts } from '@/shared/api/product/getProducts';
import { Feedback } from '@/widgets/feedback/Feedback';
import { getBrands } from '@/shared/api/brands/getBrands';
import { getProductsWithoutPagination } from '@/shared/api/product/getProductsWithoutPagination';
import { CanonicalLink } from '@/shared/ui/canonical-link';
import { SeoBlock } from '@/entities/seo-block';
import { CategoryT } from '@/shared/api/category/types';
import { enrichProductsWithFullPath } from '@/shared/lib/utils/productUtils';
import { getTags } from '@/shared/api/tags/getTags';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{
    tags?: string;
  }>;
}): Promise<Metadata> {
  const { tags } = await searchParams;

  return {
    title: tags ? `Все товары по тегу - ${tags}` : 'Все товары - Каталог',
    description: tags
      ? `Все товары в каталоге с тегом ${tags}`
      : 'Все товары в каталоге с возможностью фильтрации по тегам',
  };
}

export default async function AllProductsPage({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    sort_direction?: string;
    sort_by?: string;
    search?: string;
    price_from?: string;
    price_to?: string;
    brand?: string;
    tags?: string;
  }>;
}) {
  const cookieStore = await cookies();
  const variant = cookieStore.get('variant')?.value;

  const { page, sort_by, sort_direction, search, price_from, price_to, brand, tags } =
    await searchParams;

  // Получаем все продукты с фильтрацией по тегам
  const products = await getProducts({
    page,
    sort_by,
    sort_direction,
    search,
    price_from,
    price_to,
    brand,
    tags,
    variant,
  });

  // Обогащаем продукты полным путем
  if (products?.data) {
    products.data = await enrichProductsWithFullPath({ products: products.data, variant });
  }

  const allBrands = await getBrands({ variant });
  const allProducts = await getProductsWithoutPagination({
    search,
    tags,
    variant,
  });

  const allTags = await getTags({ variant });

  const prices = allProducts?.map((product) => Number(product.price)) ?? [];
  const maxPrice = prices.length > 0 ? Math.max(...prices) : 0;

  // Формируем breadcrumbs
  const breadcrumbsPath = [
    {
      title: 'Все товары',
      path: '/catalog/all',
    },
  ];

  // Формируем канонический URL
  const canonicalUrl = '/catalog/all';

  // Создаем фиктивную категорию для отображения всех товаров
  const allCategory: CategoryT = {
    id: 0,
    name: tags ? `Все товары по тегу "${tags}"` : 'Все товары',
    slug: 'all',
    description: '',
    photo_path: '',
    is_active: true,
    parent_id: null,
    created_at: '',
    updated_at: '',
    order: 0,
    filters: null,
    subcategories: [],
  };

  return (
    <>
      <CanonicalLink href={canonicalUrl} />
      <Breadcrumbs dynamicPath={breadcrumbsPath} />
      <main className="main-container">
        <CatalogSection
          products={products}
          category={allCategory}
          page={page || '1'}
          brands={allBrands || []}
          minPrice={0}
          maxPrice={maxPrice}
          categoryPath={[]}
          tags={allTags || undefined}
          currentPath={canonicalUrl}
        />
        <PreviouslyViewed />
        <SeoBlock page={canonicalUrl} />
        <Feedback variant={variant} />
      </main>
    </>
  );
}
