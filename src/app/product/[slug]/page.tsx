import { ProductSection } from '@/widgets/product-info';
import { PreviouslyViewed } from '@/features/previously-viewed';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { getProductById } from '@/shared/api/product/getProductById';
import { Feedback } from '@/entities/feedback/Feedback';
import { paths } from '@/shared/config/constants/paths';

export default async function Product({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const id = slug.split('_').findLast((elem) => elem) || '';

  const product = await getProductById(id);

  return (
    <>
      <Breadcrumbs
        dynamicPath={[
          {
            title: product?.name || '',
            path: `${paths.product}/${product?.slug}_${product?.id}`,
          },
        ]}
      />
      <main>
        <ProductSection product={product} />
        <PreviouslyViewed />
        <Feedback />
      </main>
    </>
  );
}
