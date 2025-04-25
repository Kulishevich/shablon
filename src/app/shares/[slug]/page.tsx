'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import { ShareInfo } from '@/widgets/share-info';
import { SliderWrapper } from '@/entities/slider-wrapper';
import { DiscountCard } from '@/entities/discount-card';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';

export default function Share() {
  return (
    <>
      <Breadcrumbs />
      <main>
        <ShareInfo />
        <SliderWrapper title="Другие акции" variant="discount">
          {new Array(12).fill('').map((_, index) => (
            <DiscountCard key={index} />
          ))}
        </SliderWrapper>
        <FeedbackForm />
      </main>
    </>
  );
}
