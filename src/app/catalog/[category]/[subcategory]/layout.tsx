import { getCategoryBySlug } from '@/shared/api/category/getCategoryBySlug';
import { getSeoTag } from '@/shared/api/seo/getSeoTag';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}) => {
  const categorySlug = (await params).category;
  const subcategorySlug = (await params).subcategory;

  const subcategory = await getCategoryBySlug(subcategorySlug);

  const seo = await getSeoTag(`/catalog/${categorySlug}/${subcategorySlug}`);

  return {
    title: seo?.title ?? subcategory?.name,
    description: seo?.description ?? subcategory?.description,
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? subcategory?.name,
      description: seo?.og_description ?? subcategory?.description,
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
