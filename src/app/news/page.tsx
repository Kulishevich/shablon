import { Feedback } from '@/widgets/feedback/Feedback';
import { getAllNews } from '@/shared/api/news/getAllNews';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { NewsSection } from '@/widgets/news-section';
import { SeoBlock } from '@/entities/seo-block';
import { CanonicalLink } from '@/shared/ui/canonical-link';
import { getStoreUrl } from '@/shared/api/base';

export default async function News({ searchParams }: { searchParams: Promise<{ page: string }> }) {
  const page = (await searchParams).page || '1';

  const [newsList, storeUrl] = await Promise.all([getAllNews({ page }), getStoreUrl()]);

  return (
    <>
      <CanonicalLink href={'/news'} />
      <Breadcrumbs />
      <main>
        <NewsSection newsList={newsList} page={page} storeUrl={storeUrl} />
        <SeoBlock page="/news" />
        <Feedback />
      </main>
    </>
  );
}
