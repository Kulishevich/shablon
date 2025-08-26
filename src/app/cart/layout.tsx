import { getSeoTag } from '@/shared/api/seo/getSeoTag';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';

export const generateMetadata = async () => {
  const seo = await getSeoTag({ tag: '/cart' });

  return {
    title: seo?.title ?? 'Коммерческое предложение',
    description: seo?.description ?? 'Коммерческое предложение',
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? 'Коммерческое предложение',
      description: seo?.og_description ?? 'Коммерческое предложение',
    },
  };
};

export default async function CartLayout({
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
