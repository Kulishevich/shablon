import { NewsInfoSection } from '@/widgets/news-info-section';
import { SliderWrapper } from '@/entities/slider-wrapper';
import { NewsCard } from '@/entities/news-card';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { getAllNews } from '@/shared/api/news/getAllNews';
import { getNews } from '@/shared/api/news/getNews';
import { Feedback } from '@/entities/feedback/Feedback';

export default async function New({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const id = (await params).slug;
  const news = await getNews(id);

  const newsList = await getAllNews();
  const otherNews = newsList?.data?.filter((elem) => String(elem.id) !== id);

  return (
    <>
      <Breadcrumbs />
      <main>
        <NewsInfoSection news={news} />
        <SliderWrapper title="Другие новости" variant="news">
          {otherNews?.map((news, index) => (
            <NewsCard key={index} news={news} />
          ))}
        </SliderWrapper>
        <Feedback />
      </main>
    </>
  );
}
