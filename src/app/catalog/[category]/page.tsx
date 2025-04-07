'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import { CatalogSection } from '@/widgets/catalog-section';
import s from './page.module.scss';
import { PreviouslyViewed } from '@/features/previously-viewed';

export default function Catalog() {
  return (
    <div className={s.page}>
      <CatalogSection />
      <PreviouslyViewed />
      <FeedbackForm />
    </div>
  );
}
