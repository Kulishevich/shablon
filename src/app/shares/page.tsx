import { Feedback } from '@/entities/feedback/Feedback';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { SharesSection } from '@/widgets/shares-section';

export default function Shares() {
  return (
    <>
      <Breadcrumbs />
      <main>
        <SharesSection />
        <Feedback />
      </main>
    </>
  );
}
