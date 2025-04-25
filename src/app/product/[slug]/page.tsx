'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import { ProductSection } from '@/widgets/product-info';
import { PreviouslyViewed } from '@/features/previously-viewed';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';

export default function Product() {
  return (
    <>
      <Breadcrumbs />
      <main>
        <ProductSection />
        <PreviouslyViewed />
        <FeedbackForm />
      </main>
    </>
  );
}
