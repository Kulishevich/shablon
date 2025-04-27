import { FeedbackForm } from '@/entities/feedback-form';
import { AboutUsSection } from '@/widgets/about-us-section';
import { AdvantagesSection } from '@/widgets/advantages-section';
import { MainSlider } from '@/widgets/main-slider';
import { SliderWrapper } from '@/entities/slider-wrapper';
import { NewsCard } from '@/entities/news-card';
import { PopularProductsSection } from '@/widgets/popular-products-section';
import { getPopularProducts } from '@/shared/api/product/getPopularProducts';
import { getAdvantages } from '@/shared/api/advantages/getAdvantages';

export default async function Home() {
  const popularProducts = await getPopularProducts();

  const advantages = await getAdvantages();

  return (
    <main>
      <MainSlider />
      <PopularProductsSection products={popularProducts} />
      <AboutUsSection />
      <AdvantagesSection advantages={advantages} />
      <SliderWrapper title="Новости" variant="news">
        {new Array(9).fill('').map((_, index) => (
          <NewsCard key={index} />
        ))}
      </SliderWrapper>
      <FeedbackForm />
    </main>
  );
}
