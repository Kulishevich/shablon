'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import { AboutUsSection } from '@/widgets/about-us-section';
import { AdvantagesSection } from '@/widgets/advantages-section';
import { MainSlider } from '@/widgets/main-slider';
import { SliderWrapper } from '@/entities/slider-wrapper';
import { NewsCard } from '@/entities/news-card';
import { PopularProductsSection } from '@/widgets/popular-products-section';

export default function Home() {
  return (
    <main>
      <MainSlider />
      <PopularProductsSection />
      <AboutUsSection />
      <AdvantagesSection />
      <SliderWrapper title="Новости" variant="news">
        {new Array(9).fill('').map((_, index) => (
          <NewsCard key={index} />
        ))}
      </SliderWrapper>
      <FeedbackForm />
    </main>
  );
}
