import { SeoBlock } from '@/entities/seo-block';
import { getAboutBlocks } from '@/shared/api/about/getAboutBlocks';
import { getAdvantages } from '@/shared/api/advantages/getAdvantages';
import { getPhotos } from '@/shared/api/photos/getPhotos';
import { getReviews } from '@/shared/api/reviews/getReviews';
import { AboutSection } from '@/widgets/about-section';
import { AdvantagesSection } from '@/widgets/advantages-section';
import { Feedback } from '@/widgets/feedback/Feedback';
import { GallerySection } from '@/widgets/gallery-section/GallerySection';
import { MissionSection } from '@/widgets/mission-section';
import { ReviewsSection } from '@/widgets/reviews-section';
import { getStoreUrl } from '@/shared/api/base';

export default async function AboutUs() {
  const [advantages, photos, reviews, aboutResponse, storeUrl] = await Promise.all([
    getAdvantages(),
    getPhotos(),
    getReviews(),
    getAboutBlocks(),
    getStoreUrl(),
  ]);

  return (
    <main>
      <AboutSection
        items={aboutResponse?.about.content_blocks?.filter(
          (block) => block.type !== 'feature_section'
        )}
        storeUrl={storeUrl}
      />
      {aboutResponse?.about.content_blocks
        ?.filter((block) => block.type === 'feature_section')
        .map((block, index) => (
          <MissionSection key={index} {...block.content} storeUrl={storeUrl} />
        ))}
      <AdvantagesSection advantages={advantages} />
      {!!reviews?.length && <ReviewsSection reviews={reviews} />}
      {!!photos?.length && <GallerySection items={photos} />}
      <SeoBlock page="/about-us" />
      <Feedback />
    </main>
  );
}
