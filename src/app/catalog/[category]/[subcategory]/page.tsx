import { CatalogSection } from '@/widgets/catalog-section';
import { PreviouslyViewed } from '@/features/previously-viewed';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { getProducts } from '@/shared/api/product/getProducts';
import { Feedback } from '@/widgets/feedback/Feedback';
import { getCategoryBySlug } from '@/shared/api/category/getCategoryBySlug';
import { getBrands } from '@/shared/api/brands/getBrands';
import { getProductsWithoutPagination } from '@/shared/api/product/getProductsWithoutPagination';
import { CanonicalLink } from '@/shared/ui/canonical-link';
import { notFound } from 'next/navigation';
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

  const category = await getCategoryBySlug(categorySlug);
  const subcategory = await getCategoryBySlug(subcategorySlug);
  const isCategoryHasSubcategories = Number(subcategory?.parent_id) === Number(category?.id);

  if (!subcategory?.parent_id) {
    notFound();
  }

  if (!category || !isCategoryHasSubcategories) {
    notFound();
  }

  const { page, sort_by, sort_direction, search, price_from, price_to } = await searchParams;
  const products = await getProducts({
    category_id: subcategory.id.toString(),
    page,
    sort_by,
    sort_direction,
    search,
    price_from,
    price_to,
  });

  const brands = await getBrands();
  const allProducts = await getProductsWithoutPagination({
    category_id: subcategory.id.toString(),
    search,
  });

  const prices = allProducts?.map((product) => Number(product.price)) ?? [];

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return (
    <>
      <Breadcrumbs
        dynamicPath={[
          {
            title: category.name || '',
            path: `/${category.slug}`,
          },
          {
            title: subcategory.name || '',
            path: `/${subcategory.slug}`,
          },
        ]}
      />
      <main>
        <CanonicalLink href={`/catalog/${categorySlug}/${subcategorySlug}`} />
        <CatalogSection
          products={products}
          category={category}
          subcategoryId={subcategory?.id}
          page={page || '1'}
          brands={brands || []}
          minPrice={0}
          maxPrice={maxPrice}
        />
        <PreviouslyViewed />
        <Feedback />
      </main>
    </>
  );
}
