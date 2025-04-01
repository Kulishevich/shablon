'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import s from './page.module.scss';
import { NewsSliderSection } from '@/widgets/news-slider-section';
import { NewsInfoSection } from '@/widgets/news-info-section';

export default function New() {
  return (
    <div className={s.page}>
      <NewsInfoSection />
      <NewsSliderSection title={'Другие новости'} />
      <FeedbackForm />
    </div>
  );
}
