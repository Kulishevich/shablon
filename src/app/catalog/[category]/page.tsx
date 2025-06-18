import { CatalogSection } from '@/widgets/catalog-section';
import { PreviouslyViewed } from '@/features/previously-viewed';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { getProducts } from '@/shared/api/product/getProducts';
import { Feedback } from '@/widgets/feedback/Feedback';
import { getCategoryBySlug } from '@/shared/api/category/getCategoryBySlug';
import { paths } from '@/shared/config/constants/paths';
import { getBrands } from '@/shared/api/brands/getBrands';
import { getProductsWithoutPagination } from '@/shared/api/product/getProductsWithoutPagination';
import { CanonicalLink } from '@/shared/ui/canonical-link';
import { notFound } from 'next/navigation';
export default async function Catalog({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<{
    page?: string;
    sort_direction?: string;
    sort_by?: string;
    search?: string;
    price_from?: string;
    price_to?: string;
    brand?: string;
  }>;
}) {
  const { category: categorySlug } = await params;
  const category_id = categorySlug.split('_').findLast((elem) => elem) || '';

  const { page, sort_by, sort_direction, search, price_from, price_to, brand } = await searchParams;
  const products = await getProducts({
    category_id,
    page,
    sort_by,
    sort_direction,
    search,
    price_from,
    price_to,
    brand,
  });
  const category = await getCategoryBySlug(categorySlug);
  const allBrands = await getBrands();
  const allProducts = await getProductsWithoutPagination({ category_id, search });

  const prices = allProducts?.map((product) => Number(product.price)) ?? [];

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  if (category?.parent_id) {
    notFound();
  }

  return (
    <>
      <CanonicalLink href={`/catalog/${categorySlug}`} />
      <Breadcrumbs
        dynamicPath={[
          {
            title: category?.name || '',
            path: `${paths.catalog}/${category?.slug}`,
          },
        ]}
      />
      <main>
        <CatalogSection
          products={products}
          category={category}
          page={page || '1'}
          brands={allBrands || []}
          minPrice={0}
          maxPrice={maxPrice}
        />
        <PreviouslyViewed />
        <Feedback />
      </main>
    </>
  );
}
