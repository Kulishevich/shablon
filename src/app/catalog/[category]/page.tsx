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
  params: Promise<{ category: string }>;
  searchParams: Promise<{
    page?: string;
    sort_direction?: string;
    sort_by?: string;
  }>;
}) {
  const { category: categorySlug } = await params;
  const categoryId = categorySlug.split('_').findLast((elem) => elem) || '';

  const { page, sort_by, sort_direction } = await searchParams;
  const products = await getProducts({
    category_id: categoryId,
    page,
    sort_by,
    sort_direction,
  });
  const category = await getCategoryById(categoryId);

  return (
    <>
      <Breadcrumbs
        dynamicPath={{
          title: category?.name || '',
          path: `${paths.catalog}/${category?.slug}_${category?.id}`,
        }}
      />
      <main>
        <CatalogSection
          products={products}
          category={category}
          page={page || '1'}
        />
        <PreviouslyViewed />
        <Feedback />
      </main>
    </>
  );
}
