import { getSeoTag } from '@/shared/api/seo/getSeoTag';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const categorySlug = (await params).category;
  const seo = await getSeoTag(`/catalog/${categorySlug}`);

  return {
    title: seo?.title ?? 'Категория',
    description: seo?.description ?? 'Категория',
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? 'Категория',
      description: seo?.og_description ?? 'Категория',
    },
  };
};

export default async function CatalogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
