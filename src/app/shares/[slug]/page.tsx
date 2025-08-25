import { ShareInfo } from '@/widgets/share-info';
import { SliderWrapper } from '@/entities/slider-wrapper';
import { DiscountCard } from '@/entities/discount-card';
import { Feedback } from '@/widgets/feedback/Feedback';
import { getPromotion } from '@/shared/api/promotions/getPromotion';
import { getPromotions } from '@/shared/api/promotions/getPromotions';
import { notFound } from 'next/navigation';
import { SeoBlock } from '@/entities/seo-block';
import { getStoreUrl } from '@/shared/api/base';

export default async function Share({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const promotion = await getPromotion({ slug });
  const storeUrl = await getStoreUrl();
  if (!promotion) {
    notFound();
  }

  const allPromotions = await getPromotions({});
  const otherPromotions = allPromotions?.data.filter((elem) => elem.id !== promotion.id);

  return (
    <main>
      {!!promotion && <ShareInfo {...promotion} storeUrl={storeUrl} />}
      {!!otherPromotions?.length && (
        <SliderWrapper title="Другие акции" variant="discount" itemsCount={otherPromotions?.length}>
          {otherPromotions?.map((promotion, index) => (
            <DiscountCard {...promotion} key={index} storeUrl={storeUrl} />
          ))}
        </SliderWrapper>
      )}
      <SeoBlock page={`/shares/${slug}`} />
      <Feedback />
    </main>
  );
}
