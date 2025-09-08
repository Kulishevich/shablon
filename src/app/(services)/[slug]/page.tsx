import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { Feedback } from '@/widgets/feedback/Feedback';
import { notFound } from 'next/navigation';
import { SeoBlock } from '@/entities/seo-block';
import { getStoreUrl } from '@/shared/api/base';
import { getServiceBySlug } from '@/shared/api/services/getServiceBySlug';
import { getAdvantages } from '@/shared/api/advantages/getAdvantages';
import { getBrands } from '@/shared/api/brands/getBrands';
import { getReviews } from '@/shared/api/reviews';
import { getPhotos } from '@/shared/api/photos/getPhotos';
import { AdvantagesSection } from '@/widgets/advantages-section';
import { BrandsSection } from '@/widgets/brands-section';
import { Suspense } from 'react';
import { ReviewsSection } from '@/widgets/reviews-section';
import { GallerySection } from '@/widgets/gallery-section';
import { TextImageBlock } from '@/widgets/text-image-block';
import { TextGridBlock } from '@/widgets/text-grid-block';
import { WorksBlock } from '@/widgets/works-block';
import { TextBlock } from '@/widgets/text-block';
import { ImageBlock } from '@/widgets/image-block';
import s from './page.module.scss';

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug({ slug });
  const storeUrl = await getStoreUrl();
  if (!service) {
    notFound();
  }

  const [advantages, brands, reviews, photos] = await Promise.all([
    getAdvantages(),
    getBrands(),
    getReviews(),
    getPhotos(),
  ]);

  return (
    <>
      <Breadcrumbs
        dynamicPath={[
          {
            title: service?.title || '',
            path: `/${service?.slug}`,
          },
        ]}
      />
      <main className={s.main}>
        <h1 className="h1 service-title">{service?.title}</h1>

        <div className={s.blocks}>
          {service.blocks?.map((block: any, index: number) => {
            switch (block.type) {
              case 'text_image':
                return (
                  <TextImageBlock
                    key={block.id}
                    storeUrl={storeUrl}
                    isButton={index === 0}
                    {...block}
                  />
                );
              case 'features4':
                return <TextGridBlock key={block.id} {...block} />;
              case 'images3':
                return <WorksBlock key={block.id} {...block} storeUrl={storeUrl} />;
              case 'text':
                return <TextBlock key={block.id} text={block.text} />;
              case 'image':
                return (
                  <ImageBlock
                    key={block.id}
                    image_path={`${storeUrl}/${block.image_path}`}
                    className={s.imageBlock}
                  />
                );
            }

            return null;
          })}
        </div>

        {!!advantages?.length && <AdvantagesSection advantages={advantages} />}

        {!!brands?.length && (
          <Suspense>
            <BrandsSection brands={brands} storeUrl={storeUrl} />
          </Suspense>
        )}

        {!!reviews?.length && (
          <Suspense>
            <ReviewsSection reviews={reviews} storeUrl={storeUrl} />
          </Suspense>
        )}

        {!!photos?.length && <GallerySection items={photos} />}

        <SeoBlock page={`/${service?.slug}`} />
        <Feedback />
      </main>
    </>
  );
}
