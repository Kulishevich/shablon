import { getSeoTag } from '@/shared/api/seo/getSeoTag';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';

export const generateMetadata = async () => {
  const seo = await getSeoTag('/catalog');

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
  return (
    <>
      <Breadcrumbs />
      {children}
    </>
  );
}
