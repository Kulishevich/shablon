'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import { CatalogSection } from '@/widgets/catalog-section';
import { PreviouslyViewed } from '@/features/previously-viewed';

export default function Catalog() {
  return (
    <main>
      <CatalogSection />
      <PreviouslyViewed />
      <FeedbackForm />
    </main>
  );
}
