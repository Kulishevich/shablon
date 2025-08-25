import { CatalogSection } from '@/widgets/catalog-section';
import { PreviouslyViewed } from '@/features/previously-viewed';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { getProducts } from '@/shared/api/product/getProducts';
import { Feedback } from '@/widgets/feedback/Feedback';

import { CanonicalLink } from '@/shared/ui/canonical-link';
import { SeoBlock } from '@/entities/seo-block';
import { CategoryT } from '@/shared/api/category/types';
import { enrichProductsWithFullPath } from '@/shared/lib/utils/productUtils';
import { getTags } from '@/shared/api/tags/getTags';
import { Metadata } from 'next';
import { parseFiltersFromSearchParams } from '@/shared/lib/utils/filtersUtils';
import { getCategoriesTree } from '@/shared/api/category/getCategoriesTree';
import { convertProductsBrandsToStandardBrands } from '@/shared/lib/utils/brandUtils';
import { getStoreUrl } from '@/shared/api/base';

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
    [key: string]: string | undefined;
  }>;
}) {
  const storeUrl = await getStoreUrl();
  const searchParamsData = await searchParams;
  const { page, sort_by, sort_direction, search, price_from, price_to, brand, tags } =
    searchParamsData;

  // Сначала получаем продукты без фильтров для получения доступных фильтров
  const initialProducts = await getProducts({
    page: '1',
    per_page: '1',
    tags,
  });

  // Преобразуем фильтры из URL параметров в формат API
  const filtersForApi = parseFiltersFromSearchParams(
    searchParamsData,
    initialProducts?.filters || []
  );

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
    filters: filtersForApi,
  });

  // Обогащаем продукты полным путем
  if (products?.data && products.data.data) {
    products.data.data = await enrichProductsWithFullPath({
      products: products.data.data,
    });
  }

  const allCategories = await getCategoriesTree();

  const allTags = await getTags({});

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
          allCategories={allCategories || []}
          page={page || '1'}
          brands={convertProductsBrandsToStandardBrands(products?.brands || [])}
          minPrice={0}
          maxPrice={products?.price_range.max || 0}
          categoryPath={[]}
          tags={allTags || undefined}
          currentPath={canonicalUrl}
          filters={products?.filters || []}
          storeUrl={storeUrl}
        />
        <PreviouslyViewed />
        <SeoBlock page={canonicalUrl} />
        <Feedback />
      </main>
    </>
  );
}
