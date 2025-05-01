import { getSeoTag } from '@/shared/api/seo/getSeoTag';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';

export const generateMetadata = async () => {
  const seo = await getSeoTag('/cart');

  return {
    title: seo?.title ?? 'Корзина',
    description: seo?.description ?? 'Корзина',
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? 'Корзина',
      description: seo?.og_description ?? 'Корзина',
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
