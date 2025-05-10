import { Feedback } from '@/entities/feedback/Feedback';
import { getPromotions } from '@/shared/api/promotions/getPromotions';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { SharesSection } from '@/widgets/shares-section';

export default async function Shares({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const page = (await searchParams).page || '1';

  const promotions = await getPromotions({ page });

  return (
    <>
      <Breadcrumbs />
      <main>
        <SharesSection promotions={promotions} page={page} />
        <Feedback />
      </main>
    </>
  );
}
