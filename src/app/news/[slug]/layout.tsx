import { getSeoTag } from '@/shared/api/seo/getSeoTag';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const seo = await getSeoTag(`/news/${slug}`);

  return {
    title: seo?.title ?? 'Новость',
    description: seo?.description ?? 'Новость',
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? 'Новость',
      description: seo?.og_description ?? 'Новость',
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
