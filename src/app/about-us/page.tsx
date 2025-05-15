import { Feedback } from '@/entities/feedback/Feedback';
import { SeoBlock } from '@/entities/seo-block';
import { getAdvantages } from '@/shared/api/advantages/getAdvantages';
import { AboutSection } from '@/widgets/about-section';
import { AdvantagesSection } from '@/widgets/advantages-section';
import { MissionSection } from '@/widgets/mission-section';
export default async function AboutUs() {
  const advantages = await getAdvantages();

  return (
    <main>
      <AboutSection />
      <MissionSection />
      <AdvantagesSection advantages={advantages} />
      <SeoBlock page="about-us" />
      <Feedback />
    </main>
  );
}
