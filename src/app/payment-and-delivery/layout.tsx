import { getSeoTag } from '@/shared/api/seo/getSeoTag';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';

export const generateMetadata = async () => {
  const seo = await getSeoTag('/payment-and-delivery');

  return {
    title: seo?.title ?? 'Оплата и доставка',
    description: seo?.description ?? 'Оплата и доставка',
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? 'Оплата и доставка',
      description: seo?.og_description ?? 'Оплата и доставка',
    },
  };
};

export default async function PaymentAndDeliveryLayout({
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
