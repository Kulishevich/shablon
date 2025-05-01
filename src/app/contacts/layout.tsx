import { getSeoTag } from '@/shared/api/seo/getSeoTag';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';

export const generateMetadata = async () => {
  const seo = await getSeoTag('/contacts');

  return {
    title: seo?.title ?? 'Контакты',
    description: seo?.description ?? 'Контакты',
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? 'Контакты',
      description: seo?.og_description ?? 'Контакты',
    },
  };
};

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
