import { getNews } from '@/shared/api/news/getNews';
import { getSeoTag } from '@/shared/api/seo/getSeoTag';
import { cookies } from 'next/headers';

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const cookieStore = await cookies();
  const variant = cookieStore.get('variant')?.value;

  const slug = (await params).slug;
  const seo = await getSeoTag({ tag: `/news/${slug}`, variant });
  const news = await getNews({ slug, variant });

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
