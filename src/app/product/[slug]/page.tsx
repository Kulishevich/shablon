'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import { ProductSection } from '@/widgets/product-info';
import { PreviouslyViewed } from '@/features/previously-viewed';

export default function Product() {
  return (
    <main>
      <ProductSection />
      <PreviouslyViewed />
      <FeedbackForm />
    </main>
  );
}
