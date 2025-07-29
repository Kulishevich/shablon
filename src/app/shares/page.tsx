import { Feedback } from '@/widgets/feedback/Feedback';
import { getPromotions } from '@/shared/api/promotions/getPromotions';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { SharesSection } from '@/widgets/shares-section';
import { SeoBlock } from '@/entities/seo-block';
import { CanonicalLink } from '@/shared/ui/canonical-link';
import { getStoreUrl } from '@/shared/api/base';

export default async function Shares({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const page = (await searchParams).page || '1';

  const [promotions, storeUrl] = await Promise.all([getPromotions({ page }), getStoreUrl()]);

  return (
    <>
      <CanonicalLink href={'/shares'} />

      <Breadcrumbs />
      <main>
        <SharesSection promotions={promotions} page={page} standalone={true} storeUrl={storeUrl} />
        <SeoBlock page="/shares" />
        <Feedback />
      </main>
    </>
  );
}
