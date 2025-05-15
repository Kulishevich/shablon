import { SeoBlock } from '@/entities/seo-block';
import { CatalogProducts } from '@/widgets/catalog-products';
import { getCategories } from '@/shared/api/category/getCategories';
import { Feedback } from '@/widgets/feedback/Feedback';

export default async function Catalog() {
  const categories = await getCategories();

  return (
    <main>
      <CatalogProducts title="Каталог" categories={categories} />

      <SeoBlock page="catalog" />
      <Feedback />
    </main>
  );
}
