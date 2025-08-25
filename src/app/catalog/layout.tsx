import { getSeoTag } from '@/shared/api/seo/getSeoTag';

export const generateMetadata = async () => {
  const seo = await getSeoTag({ tag: '/catalog' });

  return {
    title: seo?.title ?? 'Каталог',
    description: seo?.description ?? 'Каталог',
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? 'Каталог',
      description: seo?.og_description ?? 'Каталог',
    },
  };
};

export default async function CatalogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
