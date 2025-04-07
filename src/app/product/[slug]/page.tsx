'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import { ProductSection } from '@/widgets/product-info';
import { PreviouslyViewed } from '@/features/previously-viewed';
import s from './page.module.scss';

export default function Product() {
  return (
    <div className={s.page}>
      <ProductSection />
      <PreviouslyViewed />
      <FeedbackForm />
    </div>
  );
}
