'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import { NewsInfoSection } from '@/widgets/news-info-section';
import { SliderWrapper } from '@/entities/slider-wrapper';
import { NewsCard } from '@/entities/news-card';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';

export default function New() {
  return (
    <>
      <Breadcrumbs />
      <main>
        <NewsInfoSection />
        <SliderWrapper title="Другие новости" variant="news">
          {new Array(9).fill('').map((_, index) => (
            <NewsCard key={index} />
          ))}
        </SliderWrapper>
        <FeedbackForm />
      </main>
    </>
  );
}
