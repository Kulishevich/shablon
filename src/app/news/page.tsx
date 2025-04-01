'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import s from './page.module.scss';
import { NewsSection } from '@/widgets/news-section';

export default function News() {
  return (
    <div className={s.page}>
      <NewsSection />
      <FeedbackForm />
    </div>
  );
}
