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
      <main>
        <h1 className="h1 service-title">{service?.title}</h1>

        {service.blocks?.map((block, index) => (
          <TextImageBlock key={block.id} storeUrl={storeUrl} isButton={index === 0} {...block} />
        ))}

        <TextGridBlock
          title={'Преимущества плиточного покрытия'}
          text={` <p>
          <strong>
            В настоящее время популярны несколько модных тенденций: имитация натурального покрытия
            из мрамора и камня, восточные узоры и пэчворк.
          </strong>
        </p>
        <p>
          В настоящее время популярны несколько модных тенденций: имитация натурального покрытия
          из мрамора и камня, восточные узоры и пэчворк. Каждая из них уникальна и интересна
          по‑своему, но перед покупкой плитки самое важное — найти подрядчика для проведения
          качественных плиточных работ.
        </p>`}
          items={[
            {
              title: 'Просто <br/> ухаживать',
              text: 'Плитка легко поддаётся уборке и очистке: загрязнения и пятна можно легко удалить, используя обычные чистящие средства',
            },
            {
              title: 'Износостойкое и прочное',
              text: 'Плитка отличается высокой прочностью, что делает её идеальным выбором для высоконагруженных зон',
            },
            {
              title: 'Не подвержено воздействиям влаги',
              text: 'Плиточное покрытие устойчиво к влаге, что делает его отличным вариантом для ванной',
            },

            {
              title: 'Широкая цветовая палитра',
              text: 'Плитка доступна в огромном ассортименте цветов и форм, что позволяет создавать уникальные интерьеры',
            },
          ]}
        />

        <WorksBlock />

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
