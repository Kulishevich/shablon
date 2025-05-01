import { getSeoTag } from '@/shared/api/seo/getSeoTag';

export const generateMetadata = async () => {
  const seo = await getSeoTag('/news');

  return {
    title: seo?.title ?? 'Новости',
    description: seo?.description ?? 'Новости',
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? 'Новости',
      description: seo?.og_description ?? 'Новости',
    },
  };
};

export default async function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
