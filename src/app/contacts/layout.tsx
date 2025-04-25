import { Breadcrumbs } from '@/shared/ui/breadcrumbs';

export default async function ContactsLayout({
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
