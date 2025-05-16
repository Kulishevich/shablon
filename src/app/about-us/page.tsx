import { ReviewCard } from '@/entities/review-card';
import { SeoBlock } from '@/entities/seo-block';
import { SliderWrapper } from '@/entities/slider-wrapper';
import { getAdvantages } from '@/shared/api/advantages/getAdvantages';
import { getPhotos } from '@/shared/api/photos/getPhotos';
import { AboutSection } from '@/widgets/about-section';
import { AdvantagesSection } from '@/widgets/advantages-section';
import { Feedback } from '@/widgets/feedback/Feedback';
import { GallerySection } from '@/widgets/gallery-section/GallerySection';
import { MissionSection } from '@/widgets/mission-section';
export default async function AboutUs() {
  const advantages = await getAdvantages();
  const photos = await getPhotos();

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
      {photos && <GallerySection items={photos} />}
      <SeoBlock page="about-us" />
      <Feedback />
    </main>
  );
}
