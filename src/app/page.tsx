import { FeedbackForm } from '@/entities/feedback-form';
import { AboutUsSection } from '@/widgets/about-us-section';
import { AdvantagesSection } from '@/widgets/advantages-section';
import { MainSlider } from '@/widgets/main-slider';
import { SliderWrapper } from '@/entities/slider-wrapper';
import { NewsCard } from '@/entities/news-card';
import { PopularProductsSection } from '@/widgets/popular-products-section';
import { getPopularProducts } from '@/shared/api/product/getPopularProducts';
import { getAdvantages } from '@/shared/api/advantages/getAdvantages';
import { getAllNews } from '@/shared/api/news/getAllNews';

export default async function Home() {
  const popularProducts = await getPopularProducts();
  const newsList = await getAllNews();
  const advantages = await getAdvantages();

  return (
    <main>
      <MainSlider />
      <PopularProductsSection products={popularProducts} />
      <AboutUsSection />
      <AdvantagesSection advantages={advantages} />
      <SliderWrapper title="Новости" variant="news">
        {newsList?.data?.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </SliderWrapper>
      <FeedbackForm />
    </main>
  );
}
