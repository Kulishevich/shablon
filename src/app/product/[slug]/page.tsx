import { ProductSection } from '@/widgets/product-info';
import { PreviouslyViewed } from '@/features/previously-viewed';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { getProductById } from '@/shared/api/product/getProductById';
import { Feedback } from '@/widgets/feedback/Feedback';
import { paths } from '@/shared/config/constants/paths';
import { notFound } from 'next/navigation';
import { SeoBlock } from '@/entities/seo-block';
import { getReviews } from '@/shared/api/reviews/getReviews';

export default async function Product({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const reviews = await getReviews();
  const id = slug.split('_').findLast((elem) => elem) || '';

  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs
        dynamicPath={[
          {
            title: product?.name || '',
            path: `${paths.product}/${product?.slug}`,
          },
        ]}
      />
      <main>
        <ProductSection product={product} reviews={reviews} />
        <PreviouslyViewed />
        <SeoBlock page={`product`} />
        <Feedback />
      </main>
    </>
  );
}
