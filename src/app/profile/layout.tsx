import { getSeoTag } from '@/shared/api/seo/getSeoTag';
import { ReduxProvider } from '@/shared/lib/redux/providers/ReduxProvider';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';

export const generateMetadata = async () => {
  const seo = await getSeoTag({ tag: '/profile' });

  return {
    title: seo?.title ?? 'Личный кабинет',
    description: seo?.description ?? 'Личный кабинет',
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? 'Личный кабинет',
      description: seo?.og_description ?? 'Личный кабинет',
    },
  };
};

export default async function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Breadcrumbs />
      <ReduxProvider>{children}</ReduxProvider>
    </>
  );
}
