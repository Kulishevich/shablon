import { getSeoTag } from '@/shared/api/seo/getSeoTag';

export const generateMetadata = async () => {
  const seo = await getSeoTag({ tag: '/cart/order' });

  return {
    title: seo?.title ?? 'Оформление заказа',
    description: seo?.description ?? 'Оформление заказа',
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? 'Оформление заказа',
      description: seo?.og_description ?? 'Оформление заказа',
    },
  };
};

export default async function OrderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
