'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { NewsSection } from '@/widgets/news-section';

export default function News() {
  return (
    <>
      <Breadcrumbs />
      <main>
        <NewsSection />
        <FeedbackForm />
      </main>
    </>
  );
}
