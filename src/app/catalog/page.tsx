import { SeoBlock } from '@/entities/seo-block';
import { CatalogProducts } from '@/widgets/catalog-products';
import { getCategories } from '@/shared/api/category/getCategories';
import { Feedback } from '@/widgets/feedback/Feedback';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';

export default async function Catalog() {
  const categories = await getCategories();

  return (
    <>
      <Breadcrumbs />
      <main>
        <CatalogProducts title="Каталог" categories={categories} />

        <SeoBlock page="/catalog" />
        <Feedback />
      </main>
    </>
  );
}
