'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import { AboutUsSection } from '@/widgets/about-us-section';
import { AdvantagesSection } from '@/widgets/advantages-section';
import { MainSlider } from '@/widgets/main-slider';
import { SliderWrapper } from '@/entities/slider-wrapper';
import { NewsCard } from '@/entities/news-card';
import { PopularProductsSection } from '@/widgets/popular-products-section';
import s from './page.module.scss';

export default function Home() {
  return (
    <div className={s.page}>
      <MainSlider />
      <PopularProductsSection />
      <AboutUsSection />
      <AdvantagesSection />
      <SliderWrapper title="Новости">
        {new Array(9).fill('').map((_, index) => (
          <NewsCard key={index} />
        ))}
      </SliderWrapper>
      <FeedbackForm />
    </div>
  );
}
