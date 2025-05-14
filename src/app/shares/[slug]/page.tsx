import { ShareInfo } from '@/widgets/share-info';
import { SliderWrapper } from '@/entities/slider-wrapper';
import { DiscountCard } from '@/entities/discount-card';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { Feedback } from '@/entities/feedback/Feedback';
import { getPromotion } from '@/shared/api/promotions/getPromotion';
import { getPromotions } from '@/shared/api/promotions/getPromotions';
import { notFound } from 'next/navigation';

export default async function Share({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const id = slug.split('_').findLast((elem) => elem) || '1';
  const promotion = await getPromotion(id);

  if (!promotion) {
    notFound();
  }

  const allPromotions = await getPromotions({});
  const otherPromotions = allPromotions?.data.filter((elem) => elem.id !== +id);

  return (
    <main>
      {!!promotion && <ShareInfo {...promotion} />}
      {!!otherPromotions?.length && (
        <SliderWrapper title="Другие акции" variant="discount">
          {otherPromotions?.map((promotion, index) => <DiscountCard {...promotion} key={index} />)}
        </SliderWrapper>
      )}
      <Feedback />
    </main>
  );
}
