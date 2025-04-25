import { Breadcrumbs } from '@/shared/ui/breadcrumbs';

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
