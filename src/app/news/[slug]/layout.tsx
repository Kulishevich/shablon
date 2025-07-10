import { getNews } from '@/shared/api/news/getNews';
import { getSeoTag } from '@/shared/api/seo/getSeoTag';

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const seo = await getSeoTag(`/news/${slug}`);
  const news = await getNews(slug);

  return {
    title: seo?.title ?? news?.title,
    description: seo?.description ?? news?.content?.slice(0, 150),
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? news?.title,
      description: seo?.og_description ?? news?.content?.slice(0, 150),
    },
  };
};

export default async function NewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
