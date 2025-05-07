import { CatalogSection } from '@/widgets/catalog-section';
import { PreviouslyViewed } from '@/features/previously-viewed';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { Feedback } from '@/entities/feedback/Feedback';
import { getProducts } from '@/shared/api/product/getProducts';

export default async function Catalog() {
  const products = await getProducts({});

  return (
    <>
      <Breadcrumbs />
      <main>
        <CatalogSection products={products} />
        <PreviouslyViewed />
        <Feedback />
      </main>
    </>
  );
}
