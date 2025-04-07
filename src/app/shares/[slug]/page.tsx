'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import { ShareInfo } from '@/widgets/share-info';
import s from './page.module.scss';
import { SliderWrapper } from '@/entities/slider-wrapper';
import { DiscountCard } from '@/entities/discount-card';

export default function Share() {
  return (
    <div className={s.page}>
      <ShareInfo />
      <SliderWrapper title="Другие акции" variant="discount">
        {new Array(12).fill('').map((_, index) => (
          <DiscountCard key={index} />
        ))}
      </SliderWrapper>
      <FeedbackForm />
    </div>
  );
}
