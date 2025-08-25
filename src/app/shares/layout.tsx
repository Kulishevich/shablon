import { getSeoTag } from '@/shared/api/seo/getSeoTag';

export const generateMetadata = async () => {
  const seo = await getSeoTag({ tag: '/shares' });

  return {
    title: seo?.title ?? 'Акции',
    description: seo?.description ?? 'Акции',
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? 'Акции',
      description: seo?.og_description ?? 'Акции',
    },
  };
};

export default async function SharesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
