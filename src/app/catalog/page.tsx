import { SeoBlock } from '@/entities/seo-block';
import { CatalogProducts } from '@/widgets/catalog-products';
import { getCategories } from '@/shared/api/category/getCategories';
import { Feedback } from '@/widgets/feedback/Feedback';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { getStoreUrl } from '@/shared/api/base';

export default async function Catalog() {
  const [categories, storeUrl] = await Promise.all([getCategories(), getStoreUrl()]);

  return (
    <>
      <Breadcrumbs />
      <main>
        <CatalogProducts title="Каталог" categories={categories} storeUrl={storeUrl} />

        <SeoBlock page="/catalog" />
        <Feedback />
      </main>
    </>
  );
}
