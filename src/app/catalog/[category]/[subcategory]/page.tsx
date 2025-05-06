'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import { CatalogSection } from '@/widgets/catalog-section';
import { PreviouslyViewed } from '@/features/previously-viewed';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';

export default function Catalog() {
  return (
    <>
      <Breadcrumbs />
      <main>
        <CatalogSection />
        <PreviouslyViewed />
        <FeedbackForm />
      </main>
    </>
  );
}
