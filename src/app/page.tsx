'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import { AboutUsSection } from '@/widgets/about-us-section';
import { AdvantagesSection } from '@/widgets/advantages-section';
import { MainSlider } from '@/widgets/main-slider';
import s from './page.module.scss';
import { SliderWrapper } from '@/entities/slider-wrapper';
import { NewsCard } from '@/entities/news-card';
import { ProductCard } from '@/entities/product-card';

export default function Home() {
  return (
    <div className={s.page}>
      <MainSlider />
      <SliderWrapper title="Популярные товары">
        {new Array(9).fill('').map((elem) => (
          <ProductCard />
        ))}
      </SliderWrapper>
      <AboutUsSection />
      <AdvantagesSection />
      <SliderWrapper title="Новости">
        {new Array(9).fill('').map((elem) => (
          <NewsCard />
        ))}
      </SliderWrapper>
      <FeedbackForm />
    </div>
  );
}
