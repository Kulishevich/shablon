import { Feedback } from '@/entities/feedback/Feedback';
import { SeoBlock } from '@/entities/seo-block';
import { getAdvantages } from '@/shared/api/advantages/getAdvantages';
import { getBrands } from '@/shared/api/brands/getBrands';
import { AboutSection } from '@/widgets/about-section';
import { AdvantagesSection } from '@/widgets/advantages-section';
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
