import { ReviewCard } from '@/entities/review-card';
import { SeoBlock } from '@/entities/seo-block';
import { SliderWrapper } from '@/entities/slider-wrapper';
import { getAdvantages } from '@/shared/api/advantages/getAdvantages';
import { getBrands } from '@/shared/api/brands/getBrands';
import { AboutSection } from '@/widgets/about-section';
import { AdvantagesSection } from '@/widgets/advantages-section';
import { Feedback } from '@/widgets/feedback/Feedback';
import { GallerySection } from '@/widgets/gallery-section/GallerySection';
import { MissionSection } from '@/widgets/mission-section';
export default async function AboutUs() {
  const advantages = await getAdvantages();
  const brands = await getBrands();

  return (
    <main>
      <AboutSection />
      <MissionSection />
      <AdvantagesSection advantages={advantages} />
      <SliderWrapper title="Отзывы" variant="news">
        {new Array(6).fill('').map((brand) => (
          <ReviewCard key={brand.id} />
        ))}
      </SliderWrapper>
      {brands && (
        <GallerySection
          items={
            brands.map((brand) => ({
              image_path: brand.image_path || '',
              name: brand.name,
            })) || []
          }
        />
      )}
      <SeoBlock page="about-us" />
      <Feedback />
    </main>
  );
}
