import { Breadcrumbs } from '@/shared/ui/breadcrumbs';

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
