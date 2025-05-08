import { CatalogSection } from '@/widgets/catalog-section';
import { PreviouslyViewed } from '@/features/previously-viewed';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { getProducts } from '@/shared/api/product/getProducts';
import { Feedback } from '@/entities/feedback/Feedback';
import { getCategoryById } from '@/shared/api/category/getCategoryById';
import { paths } from '@/shared/config/constants/paths';

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
  }>;
}) {
  const { category: categorySlug, subcategory: subcategorySlug } = await params;
  const categoryId = categorySlug.split('_').findLast((elem) => elem) || '';
  const subcategoryId = subcategorySlug.split('_').findLast((elem) => elem) || '';

  const { page, sort_by, sort_direction, search } = await searchParams;
  const products = await getProducts({
    category_id: subcategoryId,
    page,
    sort_by,
    sort_direction,
    search,
  });

  const category = await getCategoryById(categoryId);
  const subcategory = await getCategoryById(subcategoryId);

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
        />
        <PreviouslyViewed />
        <Feedback />
      </main>
    </>
  );
}
