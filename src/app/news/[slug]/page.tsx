import { NewsInfoSection } from '@/widgets/news-info-section';
import { SliderWrapper } from '@/entities/slider-wrapper';
import { NewsCard } from '@/entities/news-card';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { getAllNews } from '@/shared/api/news/getAllNews';
import { getNews } from '@/shared/api/news/getNews';
import { Feedback } from '@/widgets/feedback/Feedback';
import { paths } from '@/shared/config/constants/paths';
import { notFound } from 'next/navigation';
import { SeoBlock } from '@/entities/seo-block';
import { getStoreUrl } from '@/shared/api/base';

export default async function New({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const [news, newsList, storeUrl] = await Promise.all([
    getNews(slug),
    getAllNews({}),
    getStoreUrl(),
  ]);

  if (!news) {
    notFound();
  }

  const otherNews = newsList?.data?.filter((elem) => elem.id !== news.id);

  return (
    <>
      <Breadcrumbs
        dynamicPath={[
          {
            title: news?.title || '',
            path: `${paths.news}/${news?.slug}`,
          },
        ]}
      />
      <main>
        <NewsInfoSection news={news} storeUrl={storeUrl} />
        <SliderWrapper title="Другие новости" variant="news">
          {otherNews?.map((news, index) => (
            <NewsCard key={index} news={news} storeUrl={storeUrl} />
          ))}
        </SliderWrapper>
        <SeoBlock page={`/news/${news?.slug}`} />
        <Feedback />
      </main>
    </>
  );
}
