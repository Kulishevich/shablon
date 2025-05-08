import { getCategoryById } from '@/shared/api/category/getCategoryById';
import { getSeoTag } from '@/shared/api/seo/getSeoTag';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const categorySlug = (await params).category;
  const seo = await getSeoTag(`/catalog/${categorySlug}`);

  const category = await getCategoryById(
    categorySlug.split('_').findLast((elem) => elem) || ''
  );

  return {
    title: seo?.title ?? category?.name,
    description: seo?.description ?? category?.description,
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? category?.name,
      description: seo?.og_description ?? category?.description,
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
