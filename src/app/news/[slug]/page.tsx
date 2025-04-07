'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import s from './page.module.scss';
import { NewsInfoSection } from '@/widgets/news-info-section';
import { SliderWrapper } from '@/entities/slider-wrapper';
import { NewsCard } from '@/entities/news-card';

export default function New() {
  return (
    <div className={s.page}>
      <NewsInfoSection />
      <SliderWrapper title="Другие новости" variant="news">
        {new Array(9).fill('').map((_, index) => (
          <NewsCard key={index} />
        ))}
      </SliderWrapper>
      <FeedbackForm />
    </div>
  );
}
