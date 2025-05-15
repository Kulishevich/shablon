import { CatalogSection } from '@/widgets/catalog-section';
import { PreviouslyViewed } from '@/features/previously-viewed';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { getProducts } from '@/shared/api/product/getProducts';
import { Feedback } from '@/widgets/feedback/Feedback';
import { getCategoryById } from '@/shared/api/category/getCategoryById';
import { getBrands } from '@/shared/api/brands/getBrands';
import { getProductsWithoutPagination } from '@/shared/api/product/getProductsWithoutPagination';

export default async function Catalog({
  params,
  searchParams,
}: {
  params: Promise<{ category: string; subcategory: string }>;
  searchParams: Promise<{
    page?: string;
    sort_direction?: string;
    sort_by?: string;
    search?: string;
    price_from?: string;
    price_to?: string;
  }>;
}) {
  const { category: categorySlug, subcategory: subcategorySlug } = await params;
  const categoryId = categorySlug.split('_').findLast((elem) => elem) || '';
  const subcategoryId = subcategorySlug.split('_').findLast((elem) => elem) || '';

  const { page, sort_by, sort_direction, search, price_from, price_to } = await searchParams;
  const products = await getProducts({
    category_id: subcategoryId,
    page,
    sort_by,
    sort_direction,
    search,
    price_from,
    price_to,
  });

  const category = await getCategoryById(categoryId);
  const subcategory = await getCategoryById(subcategoryId);

  const brands = await getBrands();
  const allProducts = await getProductsWithoutPagination({ category_id: subcategoryId, search });

  const prices = allProducts?.map((product) => Number(product.price)) ?? [];

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return (
    <>
      <Breadcrumbs
        dynamicPath={[
          {
            title: category?.name || '',
            path: `/${category?.slug}_${category?.id}`,
          },
          {
            title: subcategory?.name || '',
            path: `/${subcategory?.slug}_${subcategory?.id}`,
          },
        ]}
      />
      <main>
        <CatalogSection
          products={products}
          category={category}
          subcategoryId={subcategory?.id}
          page={page || '1'}
          brands={brands || []}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
        <PreviouslyViewed />
        <Feedback />
      </main>
    </>
  );
}
