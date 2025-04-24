'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import { NewsSection } from '@/widgets/news-section';

export default function News() {
  return (
    <main>
      <NewsSection />
      <FeedbackForm />
    </main>
  );
}
