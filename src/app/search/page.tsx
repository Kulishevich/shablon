import { SearchSection } from '@/widgets/search-section/SearchSection';
import { PreviouslyViewed } from '@/features/previously-viewed';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { getProducts } from '@/shared/api/product/getProducts';
import { Feedback } from '@/widgets/feedback/Feedback';
import { getBrands } from '@/shared/api/brands/getBrands';
import { getProductsWithoutPagination } from '@/shared/api/product/getProductsWithoutPagination';
import { CanonicalLink } from '@/shared/ui/canonical-link';
import { SeoBlock } from '@/entities/seo-block';
import { enrichProductsWithFullPath } from '@/shared/lib/utils/productUtils';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { getSeoTag } from '@/shared/api/seo/getSeoTag';

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  const { q } = await searchParams;
  const seo = await getSeoTag('/search');

  return {
    title: seo?.title ?? `Поиск "${q}"`,
    description: seo?.description ?? `Результаты поиска по запросу "${q}"`,
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? `Поиск "${q}"`,
      description: seo?.og_description ?? `Результаты поиска по запросу "${q}"`,
    },
  };
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
    page?: string;
    sort_direction?: string;
    sort_by?: string;
    price_from?: string;
    price_to?: string;
    brand?: string;
  }>;
}) {
  const { q, page, sort_by, sort_direction, price_from, price_to, brand } = await searchParams;

  // Если нет поискового запроса, перенаправляем на главную
  if (!q || q.trim() === '') {
    redirect('/');
  }

  // Получаем продукты по поисковому запросу
  const products = await getProducts({
    search: q,
    page,
    sort_by,
    sort_direction,
    price_from,
    price_to,
    brand,
  });

  // Обогащаем продукты полным путем
  if (products?.data) {
    products.data = await enrichProductsWithFullPath(products.data);
  }

  const allBrands = await getBrands();
  const allProducts = await getProductsWithoutPagination({
    search: q,
  });

  const prices = allProducts?.map((product) => Number(product.price)) ?? [];
  const maxPrice = prices.length > 0 ? Math.max(...prices) : 0;

  // Формируем breadcrumbs
  const breadcrumbsPath = [
    {
      title: 'Поиск',
      path: '/search',
    },
  ];

  // Формируем канонический URL
  const canonicalUrl = `/search?q=${encodeURIComponent(q)}`;

  return (
    <>
      <CanonicalLink href={canonicalUrl} />
      <Breadcrumbs dynamicPath={breadcrumbsPath} />
      <main>
        <SearchSection
          products={products}
          searchQuery={q}
          page={page || '1'}
          brands={allBrands || []}
          minPrice={0}
          maxPrice={maxPrice}
        />
        <PreviouslyViewed />
        <SeoBlock page={canonicalUrl} />
        <Feedback />
      </main>
    </>
  );
}
