import { getContacts } from '@/shared/api/design/getContacts';
import { Feedback } from '@/entities/feedback/Feedback';
import { SeoBlock } from '@/entities/seo-block';
import { CatalogProducts } from '@/widgets/catalog-products';
import { getCategories } from '@/shared/api/category/getCategories';

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
