import { CatalogSection } from '@/widgets/catalog-section';
import { PreviouslyViewed } from '@/features/previously-viewed';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { getProducts } from '@/shared/api/product/getProducts';
import { Feedback } from '@/entities/feedback/Feedback';

export default async function Catalog() {
  const products = await getProducts();

  return (
    <>
      <Breadcrumbs dynamicPath={{ title: 'string', path: 'string' }} />
      <main>
        <CatalogSection products={products} />
        <PreviouslyViewed />
        <Feedback />
      </main>
    </>
  );
}
