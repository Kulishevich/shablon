import { getCategoryBySlug } from '@/shared/api/category/getCategoryBySlug';
import { getSeoTag } from '@/shared/api/seo/getSeoTag';

export const generateMetadata = async ({ params }: { params: Promise<{ category: string }> }) => {
  const categorySlug = (await params).category;
  const seo = await getSeoTag(`/catalog/${categorySlug}`);

  const category = await getCategoryBySlug(categorySlug);

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
