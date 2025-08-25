import { getNewsMask } from '@/shared/api/meta-tags/getNewsMask';
import { getNews } from '@/shared/api/news/getNews';
import { getSeoTag } from '@/shared/api/seo/getSeoTag';

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const seo = await getSeoTag({ tag: `/news/${slug}` });
  const news = await getNews({ slug });

  if (news) {
    const newsMask = await getNewsMask({ news });

    return {
      title: seo?.title ?? newsMask?.title ?? news?.title,
      description: seo?.description ?? newsMask?.description ?? news?.content?.slice(0, 150),
      keywords: seo?.keywords ?? newsMask?.keywords,
      openGraph: {
        title: seo?.og_title ?? newsMask?.title ?? news?.title,
        description: seo?.og_description ?? newsMask?.description ?? news?.content?.slice(0, 150),
      },
    };
  }

  return {
    title: seo?.title,
    description: seo?.description,
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title,
      description: seo?.og_description,
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
