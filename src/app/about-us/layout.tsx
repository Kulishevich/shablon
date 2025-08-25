import { getSeoTag } from '@/shared/api/seo/getSeoTag';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';

export const generateMetadata = async () => {
  const seo = await getSeoTag({ tag: '/about-us' });

  return {
    title: seo?.title ?? 'О нас',
    description: seo?.description ?? 'О нас',
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? 'О нас',
      description: seo?.og_description ?? 'О нас',
    },
  };
};

export default async function AboutUsLayout({
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
